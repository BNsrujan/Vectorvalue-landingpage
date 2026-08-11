const { Button, Eyebrow, ServiceCard, StatBlock, ProcessStep, DeliverableTile, ScrollReveal, SectionHeading, DottedWorldMap, ScrollVideo, TextReveal, Icon, Tag } = window.VectorValueDesignSystem_16e0ef;
const { Container, Section, Annotation, CTABand } = window;

function Hero({ go }) {
  return (
    <ScrollVideo src={window.vvAsset("hero-video","../../assets/video/hero-aerial-drone.mp4")} track={280} height="100vh" style={{ marginTop: -76 }} scrim="linear-gradient(180deg, rgba(15,18,25,.62) 0%, rgba(15,18,25,.18) 40%, rgba(15,18,25,.72) 100%)">
      {(p) => (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: 76 }}>
          <Container style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)", maxWidth: 880, padding: "clamp(24px,3vw,44px)", background: "linear-gradient(135deg, rgba(15,18,25,.62) 0%, rgba(15,18,25,.34) 100%)", backdropFilter: "blur(16px) saturate(1.05)", WebkitBackdropFilter: "blur(16px) saturate(1.05)", border: "1px solid rgba(255,255,255,.10)", borderLeft: "2px solid var(--orange-600)" }}>
              <Eyebrow tone="inverse">Engineering · Estimation · Design</Eyebrow>
              <h1 style={{ font: "var(--type-display-1)", letterSpacing: "var(--tracking-display)", color: "var(--text-inverse)" }}>
                Engineering Precision.<br /><span style={{ color: "var(--orange-600)" }}>Measured</span> Value.
              </h1>
              <p style={{ font: "var(--type-body-xl)", lineHeight: "var(--leading-relaxed)", color: "var(--text-inverse-secondary)", maxWidth: "56ch" }}>
                VectorValue provides engineering estimation, design, technical analysis and documentation support for international projects — helping teams make informed decisions before construction begins.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", marginTop: "var(--space-2)" }}>
                <Button variant="primary" size="lg" withArrow href="/core-expertise" onClick={(e) => { e.preventDefault(); go("/core-expertise"); }}>Explore Our Expertise</Button>
                <Button variant="outline-inverse" size="lg" href="/book-a-call" onClick={(e) => { e.preventDefault(); go("/book-a-call"); }}>Book a Call</Button>
              </div>
            </div>
          </Container>
          <Container style={{ paddingBottom: "var(--space-8)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-5)", flexWrap: "wrap", paddingTop: "var(--space-5)", borderTop: "1px solid rgba(255,255,255,.16)" }}>
              <Annotation tone="dark">Scroll to advance · aerial survey reference</Annotation>
              <div style={{ flex: 1, maxWidth: 420, height: 2, background: "rgba(255,255,255,.16)", position: "relative" }}>
                <span style={{ position: "absolute", inset: 0, width: (p * 100).toFixed(1) + "%", background: "var(--orange-600)" }} />
              </div>
              <Annotation tone="dark" style={{ fontVariantNumeric: "tabular-nums" }}>{String(Math.round(p * 100)).padStart(3, "0")} / 100</Annotation>
            </div>
          </Container>
        </div>
      )}
    </ScrollVideo>
  );
}

function IntroStatement() {
  return (
    <div style={{ background: "var(--ink-950)", backgroundImage: "var(--pattern-blueprint-dark)", backgroundSize: "var(--grid-size-lg) var(--grid-size-lg)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-16)", alignItems: "start" }}>
          <TextReveal tone="dark" track={150} accentWords={["before", "execution"]}>
            Engineering value is decided before execution — in the quantities, the calculations and the assumptions behind them.
          </TextReveal>
          <div style={{ position: "sticky", top: "34vh", display: "flex", flexDirection: "column", gap: "var(--space-8)", paddingBottom: "var(--space-20)" }}>
            <p style={{ font: "var(--type-body-lg)", color: "var(--text-inverse-secondary)" }}>
              We work in the window where a project is still a decision: comparing options, measuring scope and documenting the reasoning — so the numbers your team commits to are the numbers the project can hold.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-8)" }}>
              <StatBlock tone="dark" value={6} label="Engineering disciplines" />
              <StatBlock tone="dark" value="Remote" label="Delivery model" />
            </div>
            <Tag tone="inverse" mono>Estimation · Design · Documentation only</Tag>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ExpertiseGrid({ go }) {
  return (
    <Section tone="paper" id="expertise">
      <Container>
        <SectionHeading index="04" eyebrow="Core Expertise" title="Six disciplines, one engineering standard."
          lead="Estimation, design, analysis and documentation delivered remotely to international project teams — engineering work only, never construction execution."
          action={<Button variant="outline" withArrow href="/core-expertise" onClick={(e) => { e.preventDefault(); go("/core-expertise"); }}>All expertise</Button>} />
        <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", marginTop: "var(--space-12)" }}>
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
  );
}

function GlobalReach() {
  return (
    <Section tone="deep" grid>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-12)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Eyebrow index="05" tone="inverse">Global Reach</Eyebrow>
            <h2 style={{ font: "var(--type-h1)", letterSpacing: "var(--tracking-heading)", color: "var(--text-inverse)" }}>Global engineering<br />without borders.</h2>
            <p style={{ font: "var(--type-body-lg)", color: "var(--text-inverse-secondary)", maxWidth: "44ch" }}>
              Supporting international project teams with remote engineering expertise — structured around your drawing standards, measurement rules and working hours.
            </p>
            <Annotation tone="dark">Markers indicate target markets for remote engineering support — not offices or completed projects.</Annotation>
          </div>
          <ScrollReveal from="right">
            <DottedWorldMap markers={window.TARGET_MARKETS} connections={window.MARKET_LINKS} tone="dark" height={460} />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}

function WhyVectorValue() {
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading index="06" eyebrow="Why VectorValue" title="Built around how engineering decisions are actually made." maxWidth="30ch" />
        <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--space-10)", marginTop: "var(--space-12)" }}>
          {window.pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 60}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-default)" }}>
                <span style={{ color: "var(--text-accent)" }}><Icon name={p.icon} size={22} /></span>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{p.title}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HowWeWork() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading index="07" eyebrow="How We Work" title="Understand → Analyze → Estimate → Review → Deliver" maxWidth="34ch"
          lead="A fixed sequence, applied to every engagement regardless of size." />
        <div style={{ display: "grid", gridTemplateColumns: "var(--cols-5)", gap: "var(--space-8)", marginTop: "var(--space-14)" }}>
          {window.process.map((s, i) => <ProcessStep key={s.index} index={s.index} title={s.title} body={s.body} last={i === window.process.length - 1} />)}
        </div>
      </Container>
    </Section>
  );
}

function WhatWeDeliver() {
  return (
    <Section tone="ink" grid>
      <Container>
        <SectionHeading index="08" eyebrow="What We Deliver" tone="dark" title="Deliverables your team can use on arrival." maxWidth="26ch"
          lead="Organised, referenced and issued with the assumptions that produced them." />
        <div style={{ display: "grid", gridTemplateColumns: "var(--cols-5)", gap: 1, background: "rgba(255,255,255,.10)", border: "1px solid rgba(255,255,255,.10)", marginTop: "var(--space-12)" }}>
          {window.deliverables.map((d) => (
            <div key={d.title} style={{ background: "var(--ink-900)" }}>
              <DeliverableTile icon={d.icon} title={d.title} formats={d.formats} tone="dark" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function WhoWeSupport() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading index="09" eyebrow="Who We Support" title="Engineering support for the teams that carry the project." maxWidth="28ch" />
        <div style={{ display: "grid", gridTemplateColumns: "var(--cols-4)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", marginTop: "var(--space-12)" }}>
          {window.clientTypes.map((c, i) => (
            <div key={c.title} style={{ background: "var(--surface-page)", padding: "var(--space-8) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <Annotation>{String(i + 1).padStart(2, "0")}</Annotation>
              <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body)" }}>{c.title}</h3>
              <p style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Insights({ go }) {
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading index="10" eyebrow="Engineering Insights" title="Notes from the work."
          action={<Button variant="outline" withArrow href="/resources" onClick={(e) => { e.preventDefault(); go("/resources"); }}>All resources</Button>} />
        <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--space-8)", marginTop: "var(--space-12)" }}>
          {window.insights.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 70}>
              <a href="/resources" onClick={(e) => { e.preventDefault(); go("/resources"); }} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", textDecoration: "none", color: "inherit" }}>
                <div style={{ aspectRatio: "16 / 10", overflow: "hidden", background: "var(--neutral-300)" }}>
                  <img src={a.image} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.04)" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <Annotation style={{ color: "var(--text-accent)" }}>{a.category}</Annotation>
                  <Annotation>· {a.read}</Annotation>
                </div>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{a.title}</h3>
                <p style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{a.excerpt}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function Home({ go }) {
  return (
    <main>
      <Hero go={go} />
      <IntroStatement />
      <ExpertiseGrid go={go} />
      <GlobalReach />
      <WhyVectorValue />
      <HowWeWork />
      <WhatWeDeliver />
      <WhoWeSupport />
      <Insights go={go} />
      <CTABand go={go} />
    </main>
  );
}

