const { Button, Eyebrow, Navbar, Footer, Breadcrumbs, SectionHeading, ScrollReveal, Icon } = window.VectorValueDesignSystem_16e0ef;

function Container({ children, narrow = false, style }) {
  return <div style={{ maxWidth: narrow ? "var(--container-narrow)" : "var(--container-max)", margin: "0 auto", padding: "0 var(--container-gutter)", ...style }}>{children}</div>;
}

const TONE_BG = { paper: "var(--surface-page)", subtle: "var(--neutral-100)", ink: "var(--ink-900)", deep: "var(--ink-950)" };

function Section({ children, tone = "paper", grid = false, tight = false, id, style }) {
  const dark = tone === "ink" || tone === "deep";
  return (
    <section id={id} style={{ position: "relative", background: TONE_BG[tone], padding: (tight ? "var(--section-y-tight)" : "var(--section-y)") + " 0", ...style }}>
      {grid ? <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: dark ? "var(--pattern-blueprint-dark)" : "var(--pattern-blueprint)", backgroundSize: "var(--grid-size-lg) var(--grid-size-lg)", pointerEvents: "none" }} /> : null}
      <div style={{ position: "relative" }}>{children}</div>
    </section>
  );
}

/* Small mono annotation used along section edges — a dimension-line motif, not decoration for its own sake. */
function Annotation({ children, tone = "light", style }) {
  return <span style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: tone === "dark" ? "var(--text-inverse-muted)" : "var(--text-muted)", ...style }}>{children}</span>;
}

function SiteHeader({ route, go, variant = "solid" }) {
  return (
    <Navbar
      variant={variant} activeHref={route} items={window.navItems} megaGroups={window.megaGroups}
      logoSrc={window.vvAsset("logo","../../assets/logo/vectorvalue-mark.png")} cta={{ label: "Book a Call", href: "/book-a-call" }}
      onNavigate={go}
    />
  );
}

function SiteFooter({ go }) {
  const c = window.companyConfig;
  return (
    <Footer
      logoSrc={window.vvAsset("logo","../../assets/logo/vectorvalue-mark.png")} columns={window.footerColumns}
      contact={{ email: c.email, phone: c.phone, linkedin: c.linkedin, linkedinUrl: c.linkedinUrl }}
      legal={[{ label: "Privacy Notice", href: "/contact" }, { label: "Terms", href: "/contact" }]}
      onNavigate={go}
    />
  );
}

/* Dark page header used by every route except home. */
function PageHero({ eyebrow, title, lead, crumbs, go, meta, image, actions }) {
  return (
    <header style={{ position: "relative", background: "var(--ink-900)", color: "var(--text-inverse)", overflow: "hidden" }}>
      {image ? (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(" + image + ")", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.22, filter: "grayscale(1) contrast(1.05)" }} />
      ) : null}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "var(--pattern-blueprint-dark)", backgroundSize: "var(--grid-size-lg) var(--grid-size-lg)" }} />
      <Container style={{ position: "relative", paddingTop: "var(--space-16)", paddingBottom: "var(--space-20)" }}>
        {crumbs ? <Breadcrumbs items={crumbs} tone="dark" onNavigate={go} style={{ marginBottom: "var(--space-10)" }} /> : null}
        <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-16)", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {eyebrow ? <Eyebrow tone="inverse">{eyebrow}</Eyebrow> : null}
            <h1 style={{ font: "var(--type-display-2)", letterSpacing: "var(--tracking-display)", color: "var(--text-inverse)", maxWidth: "16ch" }}>{title}</h1>
            {actions ? <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", marginTop: "var(--space-2)" }}>{actions}</div> : null}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", paddingBottom: 6 }}>
            {lead ? <p style={{ font: "var(--type-body-lg)", color: "var(--text-inverse-secondary)", borderLeft: "2px solid var(--orange-600)", paddingLeft: "var(--space-6)" }}>{lead}</p> : null}
            {meta ? <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)" }}>{meta.map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Annotation tone="dark">{m.label}</Annotation>
                <span style={{ fontFamily: "var(--font-core)", fontSize: "var(--text-body-sm)", fontWeight: 600 }}>{m.value}</span>
              </div>
            ))}</div> : null}
          </div>
        </div>
      </Container>
    </header>
  );
}

function CTABand({ go, tone = "ink", title = "Have an engineering requirement? Let's discuss it.", body = "Send drawings, a scope note or a question. You will speak with an engineer, not a sales desk." }) {
  const dark = tone === "ink";
  return (
    <Section tone={dark ? "ink" : "subtle"} grid={dark} tight>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-12)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <Eyebrow tone={dark ? "inverse" : "accent"}>Start a conversation</Eyebrow>
            <h2 style={{ font: "var(--type-h1)", letterSpacing: "var(--tracking-heading)", color: dark ? "var(--text-inverse)" : "var(--text-primary)", maxWidth: "18ch" }}>{title}</h2>
            <p style={{ font: "var(--type-body-lg)", color: dark ? "var(--text-inverse-secondary)" : "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>{body}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "stretch" }}>
            <Button variant="primary" size="lg" withArrow href="/book-a-call" onClick={(e) => { e.preventDefault(); go("/book-a-call"); }}>Book a Call</Button>
            <Button variant={dark ? "outline-inverse" : "outline"} size="lg" withArrow href="/contact" onClick={(e) => { e.preventDefault(); go("/contact"); }}>Send Project Enquiry</Button>
            <Annotation tone={dark ? "dark" : "light"} style={{ marginTop: "var(--space-2)" }}>Typical first response · {window.companyConfig.responseWindow}</Annotation>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FAQBlock({ items, tone = "paper", title = "Frequently asked questions" }) {
  const { FAQItem } = window.VectorValueDesignSystem_16e0ef;
  return (
    <Section tone={tone}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-16)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <Eyebrow>FAQ</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)" }}>{title}</h2>
          </div>
          <div style={{ borderTop: "1px solid var(--border-hairline)" }}>
            {items.map((f, i) => <FAQItem key={f.q} question={f.q} answer={f.a} defaultOpen={i === 0} />)}
          </div>
        </div>
      </Container>
    </Section>
  );
}

Object.assign(window, { Container, Section, Annotation, SiteHeader, SiteFooter, PageHero, CTABand, FAQBlock });
