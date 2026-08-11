const { Button, Eyebrow, ScrollReveal, SectionHeading, StatBlock, Icon, Tag } = window.VectorValueDesignSystem_16e0ef;
const { Container, Section, Annotation, PageHero, CTABand } = window;

const beliefs = [
  { title: "Numbers before opinions", body: "Where a decision can be measured, we measure it. Where it cannot, we say so." },
  { title: "Assumptions belong in writing", body: "An undocumented assumption is a risk transferred silently. We list ours." },
  { title: "Deliverables are read by people", body: "Structure, references and formatting are part of the engineering, not admin." },
  { title: "Scope honesty", body: "We decline work outside our discipline rather than stretch into it." },
];

function AboutScreen({ go }) {
  return (
    <main>
      <PageHero eyebrow="About" go={go}
        title="Engineering value, decided before execution."
        lead="VectorValue exists for the stage where a project is still a set of decisions — quantities, options, calculations and documentation that determine what the build will actually cost."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={window.vvAsset("img-coastal-viaduct-aerial",window.vvAsset("img-coastal-viaduct-aerial","../../assets/imagery/coastal-viaduct-aerial.jpg"))}
        meta={[{ label: "Focus", value: "Pre-construction engineering" }, { label: "Model", value: "Remote, international" }]}
      />

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="01">Our story</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "18ch" }}>Founded on a narrow, deliberate scope.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)" }}>
                VectorValue was formed to do one part of the project lifecycle properly: the engineering that happens before anyone breaks ground. Estimation, design, analysis and documentation — produced remotely for teams who need engineering capacity without adding headcount.
              </p>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)" }}>
                That narrowness is the point. We do not contract, install or build. Because we hold no execution interest in the outcome, our quantities and designs are not shaped by what would be convenient to construct — they are shaped by what the drawings and the ground actually say.
              </p>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", borderLeft: "2px solid var(--border-default)", paddingLeft: "var(--space-5)" }}>
                Company history, team size and registration details are supplied on request during onboarding. We publish nothing about the company that we cannot evidence.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <SectionHeading index="02" eyebrow="What we believe" title="Four positions we do not trade away." maxWidth="24ch" />
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-4)", gap: "var(--space-8)", marginTop: "var(--space-12)" }}>
            {beliefs.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 70}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingTop: "var(--space-6)", borderTop: "2px solid var(--orange-600)" }}>
                  <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{b.title}</h3>
                  <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{b.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink" grid>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-16)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <Eyebrow index="03" tone="inverse">Engineering philosophy</Eyebrow>
              <h2 style={{ font: "var(--type-h1)", letterSpacing: "var(--tracking-heading)", color: "var(--text-inverse)", maxWidth: "18ch" }}>Precision is a process, not a claim.</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-inverse-secondary)", maxWidth: "var(--measure-body)" }}>
                Every engagement runs through the same five steps and the same review gate. The engineer who produces the work is not the engineer who signs it off. Inputs, revisions and exclusions are recorded so any number can be traced back to the drawing it came from.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
                {["Documented basis", "Second-engineer review", "Version-controlled inputs", "Stated exclusions"].map((t) => <Tag key={t} tone="inverse" mono>{t}</Tag>)}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-10)" }}>
              <StatBlock tone="dark" value={6} label="Engineering disciplines" />
              <StatBlock tone="dark" value={5} label="Workflow stages" />
              <StatBlock tone="dark" value={2} label="Engineers per deliverable" />
              <StatBlock tone="dark" value="48h" label="Typical first response" />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading index="04" eyebrow="Our capabilities" title="Six disciplines, delivered remotely."
            lead="Each discipline has its own page, deliverable set and scope boundary."
            action={<Button variant="outline" withArrow href="/core-expertise" onClick={(e) => { e.preventDefault(); go("/core-expertise"); }}>Core expertise</Button>} />
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", marginTop: "var(--space-12)" }}>
            {window.expertise.map((e, i) => (
              <a key={e.slug} href={"/core-expertise/" + e.slug} onClick={(ev) => { ev.preventDefault(); go("/core-expertise/" + e.slug); }}
                style={{ background: "var(--surface-page)", padding: "var(--space-8) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)", textDecoration: "none", color: "inherit" }}>
                <span style={{ color: "var(--text-accent)" }}><Icon name={e.icon} size={22} /></span>
                <span style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{e.title}</span>
                <span style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{e.summary}</span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-16)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="05">International approach</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "16ch" }}>Built for teams in other time zones.</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)" }}>
                We work to the standards a project already uses — your measurement rules, drawing conventions, units and file formats. Handover happens in your working hours, and every issue note states what changed since the last one.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="06">Quality and precision</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "16ch" }}>Checked before it leaves.</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)" }}>
                Deliverables pass an internal review against the agreed basis before issue. Where a check depends on information we do not have, it is listed as an open item rather than assumed closed.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTABand go={go} />
    </main>
  );
}

const roleCategories = [
  { icon: "ruler", title: "Civil Engineer", body: "Quantification, civil scope and site development packages." },
  { icon: "frame", title: "Structural Engineer", body: "Analysis, member design and detailing for concrete and steel." },
  { icon: "calculator", title: "Estimation Engineer", body: "Take-offs, BOQs and basis-of-estimate documentation." },
  { icon: "clipboard-list", title: "Quantity Surveyor", body: "Measurement, pricing support and commercial documentation." },
  { icon: "layers", title: "Foundation Engineer", body: "Shallow and deep foundation design and analysis." },
  { icon: "pen-tool", title: "Design Engineer", body: "Drawing production, detailing and design coordination." },
  { icon: "file-text", title: "Technical Documentation Specialist", body: "Reports, calculation sets and document control." },
];

function CareersScreen({ go }) {
  const openings = []; // CONFIGURE — populate with live vacancies
  return (
    <main>
      <PageHero eyebrow="Careers" go={go}
        title="Build the engineering intelligence behind tomorrow's projects."
        lead="We hire engineers who would rather be right than fast, and who can explain how they got to a number."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        image={window.vvAsset("img-team-handshake-office",window.vvAsset("img-team-handshake-office","../../assets/imagery/team-handshake-office.jpg"))}
        actions={<Button variant="primary" withArrow href="/contact" onClick={(e) => { e.preventDefault(); go("/contact"); }}>Send your profile</Button>}
      />

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="01">Why VectorValue</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "16ch" }}>Engineering work, without the site politics.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-8)" }}>
              {[
                { t: "Real engineering scope", b: "You work on quantities, calculations and design — not slide decks about them." },
                { t: "Review culture", b: "Every deliverable is checked by a second engineer. Being checked is normal here, not personal." },
                { t: "International exposure", b: "Project standards and measurement rules vary by market; you will learn several." },
                { t: "Remote collaboration", b: "Structured handovers and written briefs instead of ad-hoc interruptions." },
              ].map((x) => (
                <div key={x.t} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--border-default)" }}>
                  <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body)" }}>{x.t}</h3>
                  <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{x.b}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <SectionHeading index="02" eyebrow="Types of roles" title="Where engineers fit at VectorValue." maxWidth="22ch" />
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-4)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", marginTop: "var(--space-12)" }}>
            {roleCategories.map((r) => (
              <div key={r.title} style={{ background: "var(--surface-page)", padding: "var(--space-8) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <span style={{ color: "var(--text-accent)" }}><Icon name={r.icon} size={22} /></span>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body)" }}>{r.title}</h3>
                <p style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{r.body}</p>
              </div>
            ))}
            <div style={{ background: "var(--ink-800)", padding: "var(--space-8) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)", justifyContent: "center" }}>
              <Annotation tone="dark">Skills we value</Annotation>
              <p style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-inverse-secondary)" }}>Measurement discipline · clear written English · drawing literacy · spreadsheet rigour · willingness to be checked</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading index="03" eyebrow="Open positions" title={openings.length ? "Current openings" : "No current openings."} maxWidth="20ch"
            lead={openings.length ? undefined : "Send us your profile and we will keep your details on file for the next round of hiring."} />
          <div style={{ marginTop: "var(--space-10)", padding: "var(--space-12)", border: "1px dashed var(--border-default)", background: "var(--neutral-050)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-5)" }}>
            <span style={{ color: "var(--text-muted)" }}><Icon name="inbox" size={28} /></span>
            <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "48ch" }}>
              We review speculative applications continuously. Tell us which discipline you work in, the software you use and one deliverable you are proud of.
            </p>
            <Button variant="primary" withArrow href="/contact" onClick={(e) => { e.preventDefault(); go("/contact"); }}>Send your profile</Button>
            <Annotation>Applications route to YOUR_EMAIL · configure in companyConfig</Annotation>
          </div>
        </Container>
      </Section>
      <CTABand go={go} title="Engineers who like being precise usually like it here." body="If your discipline is on the list above, we would like to see your profile." />
    </main>
  );
}

Object.assign(window, { AboutScreen, CareersScreen });
