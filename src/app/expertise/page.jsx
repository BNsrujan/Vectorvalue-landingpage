const { Button, Eyebrow, ServiceCard, ScrollReveal, SectionHeading, ProcessStep, DeliverableTile, DottedWorldMap, Icon, Tag } = window.VectorValueDesignSystem_16e0ef;
const { Container, Section, Annotation, PageHero, CTABand, FAQBlock } = window;

function CoreExpertiseScreen({ go }) {
  return (
    <main>
      <PageHero
        eyebrow="Core Expertise" go={go}
        title="Engineering intelligence behind better project decisions."
        lead="Estimation, design, analysis and documentation produced before construction begins — so international teams commit to numbers that hold."
        crumbs={[{ label: "Home", href: "/" }, { label: "Core Expertise" }]}
        image={window.vvAsset("img-towers-upward-monochrome",window.vvAsset("img-towers-upward-monochrome","../../assets/imagery/towers-upward-monochrome.jpg"))}
        meta={[{ label: "Disciplines", value: "06" }, { label: "Delivery", value: "Remote" }, { label: "Scope", value: "Engineering only" }]}
      />
      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)" }}>
            {window.expertise.map((e, i) => (
              <ScrollReveal key={e.slug} delay={i * 70}>
                <ServiceCard icon={e.icon} title={e.title} description={e.summary} services={e.services} meta={String(i + 1).padStart(2, "0") + " / 06"}
                  href={"/core-expertise/" + e.slug} style={{ height: "100%" }}
                  onClick={(ev) => { ev.preventDefault(); go("/core-expertise/" + e.slug); }} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="subtle" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-12)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow>Scope boundary</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "18ch" }}>What we do, and what we deliberately do not.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-8)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-7)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", borderTop: "2px solid var(--orange-600)" }}>
                <Annotation style={{ color: "var(--text-accent)" }}>We provide</Annotation>
                {["Estimation and quantity take-off", "Structural and foundation design", "Engineering analysis and calculations", "Technical reports and documentation", "Design review and second opinions"].map((t) => (
                  <span key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-accent)", marginTop: 2 }}><Icon name="check" size={15} strokeWidth={2.2} /></span>{t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-7)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", borderTop: "2px solid var(--slate-300)" }}>
                <Annotation>We do not provide</Annotation>
                {["Construction or installation", "Contracting or subcontracting", "Excavation or piling works", "On-site execution or supervision", "Plant, labour or materials supply"].map((t) => (
                  <span key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
                    <span style={{ marginTop: 2 }}><Icon name="minus" size={15} strokeWidth={2.2} /></span>{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <FAQBlock items={window.faqs.slice(0, 4)} tone="paper" />
      <CTABand go={go} />
    </main>
  );
}

function ServiceScreen({ go, slug }) {
  const d = window.expertise.find((e) => e.slug === slug) || window.expertise[0];
  const idx = window.expertise.indexOf(d);
  const next = window.expertise[(idx + 1) % window.expertise.length];
  return (
    <main>
      <PageHero
        eyebrow={d.title} go={go} title={d.summary} lead={d.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Core Expertise", href: "/core-expertise" }, { label: d.title }]}
        image={window.vvAsset("img-engineers-drawings-topdown",window.vvAsset("img-engineers-drawings-topdown","../../assets/imagery/engineers-drawings-topdown.jpg"))}
        actions={<Button variant="primary" withArrow href="/book-a-call" onClick={(e) => { e.preventDefault(); go("/book-a-call"); }}>Discuss This Service</Button>}
        meta={[{ label: "Discipline", value: String(idx + 1).padStart(2, "0") + " / 06" }, { label: "Services", value: String(d.services.length) }]}
      />

      <Section tone="paper">
        <Container>
          <SectionHeading eyebrow="What VectorValue provides" title={"How the " + d.title.toLowerCase() + " scope is delivered."} maxWidth="28ch" />
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--space-10)", marginTop: "var(--space-12)" }}>
            {d.provides.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-default)" }}>
                  <Annotation style={{ color: "var(--text-accent)" }}>{String(i + 1).padStart(2, "0")}</Annotation>
                  <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{p.title}</h3>
                  <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-12)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow>Service categories</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "16ch" }}>Scope covered under {d.title}.</h2>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", maxWidth: "38ch" }}>Packages are scoped per project. If your requirement sits between two categories, we will say which discipline it belongs to before quoting.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: 0, borderTop: "1px solid var(--border-default)" }}>
              {d.services.map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-4) 0", borderBottom: "1px solid var(--border-hairline)", marginRight: i % 2 === 0 ? "var(--space-8)" : 0 }}>
                  <Annotation style={{ minWidth: 22 }}>{String(i + 1).padStart(2, "0")}</Annotation>
                  <span style={{ font: "var(--type-body-sm)", fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading eyebrow="Engineering workflow" title="The same five steps, every engagement." maxWidth="26ch" />
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-5)", gap: "var(--space-8)", marginTop: "var(--space-12)" }}>
            {window.process.map((s, i) => <ProcessStep key={s.index} index={s.index} title={s.title} body={s.body} last={i === 4} />)}
          </div>
        </Container>
      </Section>

      <Section tone="ink" grid>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <Eyebrow tone="inverse">Deliverables</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", color: "var(--text-inverse)", maxWidth: "16ch" }}>What lands in your inbox.</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {window.deliverables.slice(0, 6).map((x) => <Tag key={x.title} tone="inverse" mono>{x.formats.join(" / ")}</Tag>)}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: 1, background: "rgba(255,255,255,.10)", border: "1px solid rgba(255,255,255,.10)" }}>
              {window.deliverables.slice(0, 6).map((x) => (
                <div key={x.title} style={{ background: "var(--ink-900)" }}><DeliverableTile icon={x.icon} title={x.title} formats={x.formats} tone="dark" /></div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <Eyebrow>Why accuracy matters</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "20ch" }}>A measurement error does not stay a measurement error.</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>
                It becomes a procurement quantity, then a tender price, then a variation. The cost of correcting an assumption rises with every stage it survives — which is why we state assumptions in writing and check the work before it leaves.
              </p>
              <div style={{ display: "flex", gap: "var(--space-10)", marginTop: "var(--space-4)" }}>
                {["Documented basis", "Second-engineer review", "Stated exclusions"].map((t) => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 8, font: "var(--type-body-sm)", fontWeight: 600 }}>
                    <span style={{ color: "var(--text-accent)" }}><Icon name="shield-check" size={17} /></span>{t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-8)", background: "var(--neutral-100)", border: "1px solid var(--border-hairline)" }}>
              <Annotation>Suitable project types</Annotation>
              {d.projectTypes.map((t) => (
                <span key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--type-body-sm)", color: "var(--text-secondary)", paddingBottom: "var(--space-3)", borderBottom: "1px solid var(--border-hairline)" }}>
                  <span style={{ width: 10, height: 1, background: "var(--orange-600)", marginTop: 11, flex: "0 0 auto" }} />{t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="deep" grid tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-12)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow tone="inverse">Global clients</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", color: "var(--text-inverse)", maxWidth: "16ch" }}>Wherever the project sits, the engineering travels.</h2>
              <Annotation tone="dark">Markers indicate target markets for remote support — not offices or completed projects.</Annotation>
            </div>
            <DottedWorldMap markers={window.TARGET_MARKETS} connections={window.MARKET_LINKS} tone="dark" height={340} step={6.4} />
          </div>
        </Container>
      </Section>

      <FAQBlock items={window.faqs.slice(0, 4)} tone="paper" />

      <Section tone="subtle" tight>
        <Container>
          <a href={"/core-expertise/" + next.slug} onClick={(e) => { e.preventDefault(); go("/core-expertise/" + next.slug); }}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", padding: "var(--space-8) 0", borderTop: "1px solid var(--border-default)", borderBottom: "1px solid var(--border-default)", textDecoration: "none", color: "inherit" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <Annotation>Next discipline</Annotation>
              <span style={{ font: "var(--type-h3)", letterSpacing: "var(--tracking-title)" }}>{next.title}</span>
            </span>
            <span style={{ color: "var(--text-accent)" }}><Icon name="arrow-right" size={26} /></span>
          </a>
        </Container>
      </Section>
      <CTABand go={go} />
    </main>
  );
}

Object.assign(window, { CoreExpertiseScreen, ServiceScreen });
