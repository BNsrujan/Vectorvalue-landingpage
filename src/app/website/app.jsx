const { Button, Eyebrow, ScrollReveal } = window.VectorValueDesignSystem_16e0ef;
const { Container, Section, Annotation, SiteHeader, SiteFooter, PageHero, CTABand, HomeScreen, CoreExpertiseScreen, ServiceScreen, AboutScreen, CareersScreen, ContactScreen, BookACallScreen } = window;

function ResourcesScreen({ go }) {
  return (
    <main>
      <PageHero eyebrow="Engineering Insights" go={go}
        title="Notes from the engineering desk."
        lead="Short, practical pieces on estimation method, foundation selection and documentation — written by the engineers doing the work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />
      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--space-8)" }}>
            {window.insights.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 70}>
                <article style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                  <div style={{ aspectRatio: "16 / 10", overflow: "hidden", background: "var(--neutral-300)" }}>
                    <img src={a.image} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.04)" }} />
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)" }}><Annotation style={{ color: "var(--text-accent)" }}>{a.category}</Annotation><Annotation>· {a.read}</Annotation></div>
                  <h2 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{a.title}</h2>
                  <p style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{a.excerpt}</p>
                  <Button variant="link" withArrow>Read the note</Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-12)", font: "var(--type-body-sm)", color: "var(--text-muted)", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--space-6)" }}>
            Article bodies are placeholders in this kit. Published pieces cite the standards and sources they draw on.
          </p>
        </Container>
      </Section>
      <CTABand go={go} />
    </main>
  );
}

function App() {
  const [route, setRoute] = React.useState("/");
  const go = React.useCallback((href) => {
    setRoute(href);
    const meta = window.seo[href];
    document.title = meta ? meta.title : "VectorValue";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  let screen = null;
  if (route === "/") screen = <HomeScreen go={go} />;
  else if (route === "/core-expertise") screen = <CoreExpertiseScreen go={go} />;
  else if (route.indexOf("/core-expertise/") === 0) screen = <ServiceScreen go={go} slug={route.replace("/core-expertise/", "")} />;
  else if (route === "/about") screen = <AboutScreen go={go} />;
  else if (route === "/careers") screen = <CareersScreen go={go} />;
  else if (route === "/contact") screen = <ContactScreen go={go} />;
  else if (route === "/book-a-call") screen = <BookACallScreen go={go} />;
  else screen = <ResourcesScreen go={go} />;

  return (
    <div>
      <SiteHeader route={route} go={go} variant={route === "/" ? "overlay" : "solid"} />
      <div key={route} className="vv-page">{screen}</div>
      <SiteFooter go={go} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
