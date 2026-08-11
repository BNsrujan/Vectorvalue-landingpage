"use client";

import { Button } from "@/components/core/Button.jsx";
import { Eyebrow } from "@/components/core/Eyebrow.jsx";
import { Icon } from "@/components/core/Icon.jsx";
import { ProcessStep } from "@/components/content/ProcessStep.jsx";
import { ServiceCard } from "@/components/content/ServiceCard.jsx";
import { Container, CTABand, PageHero, Section } from "@/components/site-components";

const services = [
  {
    id: "estimation",
    icon: "calculator",
    title: "Estimation",
    description: "Measured quantities and cost information that give your commercial team a defensible basis for decisions.",
    items: ["Quantity take-offs", "BOQ preparation", "Preliminary and detailed estimates", "Material quantification"],
  },
  {
    id: "civil-work",
    icon: "ruler",
    title: "Civil Work",
    description: "Civil package support for earthwork, concrete, masonry, external works and site development scope.",
    items: ["Earthwork and excavation", "Concrete and reinforcement", "Masonry and finishes", "Roads, drainage and external works"],
  },
  {
    id: "design",
    icon: "pen-tool",
    title: "Design",
    description: "Clear civil design support that keeps layouts, levels, quantities and technical decisions coordinated.",
    items: ["Site and grading layouts", "Drainage and utility layouts", "Design coordination", "Technical calculations and reports"],
  },
  {
    id: "foundation",
    icon: "layers",
    title: "Foundation",
    description: "Foundation options checked against the available ground and loading information, with the reasoning documented.",
    items: ["Shallow foundation options", "Raft, strip and pad foundations", "Pile and pile-cap support", "Foundation design review"],
  },
];

const steps = [
  { index: "01", title: "Brief", body: "We review drawings, specifications, surveys and the required deliverable format before work starts." },
  { index: "02", title: "Measure", body: "The civil scope is broken into traceable work packages with assumptions and exclusions recorded." },
  { index: "03", title: "Develop", body: "Quantities, layouts, calculations or options are developed against the agreed technical basis." },
  { index: "04", title: "Check", body: "A second review tests the output against the brief, inputs and internal quality checks." },
  { index: "05", title: "Issue", body: "You receive organised, referenced files ready for pricing, coordination, review or approval." },
];

const projectTypes = [
  "Commercial and mixed-use buildings",
  "Industrial and logistics facilities",
  "Residential developments",
  "Site development and external works",
  "Refurbishment and fit-out packages",
];

export default function CivilEngineeringPage() {
  return (
    <main>
      <PageHero
        eyebrow="Civil Engineering"
        title="Civil scope measured for decisions that hold."
        lead="From early budgets to coordinated design packages, we turn civil drawings and site information into quantities, options and documentation your project team can use."
        crumbs={[{ label: "Home", href: "/" }, { label: "Core Expertise", href: "/core-expertise" }, { label: "Civil Engineering", href: "/core-expertise/civil-engineering" }]}
        image="/assets/imagery/site-crane-sunset.jpg"
        meta={[{ label: "Services", value: "04" }, { label: "Delivery", value: "Remote" }, { label: "Scope", value: "Engineering only" }]}
        actions={<Button variant="primary" size="lg" withArrow href="/contact">Start a civil enquiry</Button>}
      />

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="01">Four connected services</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "18ch" }}>A civil package should read as one system.</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>
                Estimation, civil work, design and foundation decisions affect one another. We keep those links visible so changes in scope can be understood before they become cost or programme problems.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)" }}>
              {services.map((service) => (
                <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description} services={service.items} href={`#${service.id}`} style={{ minHeight: 330 }} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="subtle" id="estimation">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="02">Estimation · Civil Work</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "19ch" }}>Quantities with a visible basis.</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>We measure the work that drives the budget: earthworks, concrete, reinforcement, masonry, finishes and external works. Every issue identifies the drawings, revisions, measurement rules and exclusions behind the number.</p>
            </div>
            <div id="civil-work" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", padding: "var(--space-8)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", borderTop: "2px solid var(--orange-600)" }}>
              <Eyebrow tone="accent">Typical civil work packages</Eyebrow>
              {services[1].items.map((item) => <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--border-hairline)", font: "var(--type-body-sm)", color: "var(--text-secondary)" }}><span style={{ color: "var(--text-accent)", marginTop: 2 }}><Icon name="check" size={16} /></span>{item}</div>)}
              <a href="#design" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "var(--space-2)", font: "var(--type-label)", color: "var(--text-accent)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "var(--tracking-label)" }}>See design support <Icon name="arrow-down" size={15} /></a>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" id="design">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="03">Design · Foundation</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "18ch" }}>Design choices documented before commitment.</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>Civil layouts and foundation solutions are developed from the information available, with open items called out rather than hidden in the drawings. That gives reviewers a clear route from input to recommendation.</p>
            </div>
            <div id="foundation" style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-6)" }}>
              {services.slice(2).map((service) => (
                <div key={service.id} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-7)", background: "var(--neutral-100)", borderTop: "2px solid var(--orange-600)" }}>
                  <span style={{ color: "var(--text-accent)" }}><Icon name={service.icon} size={22} /></span>
                  <h3 style={{ font: "var(--type-h3)", margin: 0 }}>{service.title}</h3>
                  <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{service.description}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, margin: 0, padding: 0, listStyle: "none" }}>{service.items.map((item) => <li key={item} style={{ display: "flex", gap: 8, font: "var(--type-body-sm)", color: "var(--text-muted)" }}><span style={{ width: 8, height: 1, marginTop: 10, background: "var(--orange-600)" }} />{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <Eyebrow index="04">A repeatable delivery path</Eyebrow>
          <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", marginTop: "var(--space-5)", maxWidth: "18ch" }}>From drawing register to issue.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-5)", gap: "var(--space-8)", marginTop: "var(--space-12)" }}>{steps.map((step) => <ProcessStep key={step.index} {...step} />)}</div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow>Project fit</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "18ch" }}>Useful at every stage before construction.</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>We support developers, consultants, contractors and project teams with engineering work they can review, price and coordinate.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-8)", background: "var(--neutral-100)", border: "1px solid var(--border-hairline)" }}>
              <Eyebrow>Suitable project types</Eyebrow>
              {projectTypes.map((type) => <div key={type} style={{ display: "flex", gap: 12, paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--border-hairline)", font: "var(--type-body-sm)", color: "var(--text-secondary)" }}><span style={{ width: 10, height: 1, marginTop: 11, background: "var(--orange-600)" }} />{type}</div>)}
            </div>
          </div>
        </Container>
      </Section>

      <CTABand title="Have a civil package to measure or develop?" body="Share drawings, a scope note or a geotechnical report. We will help you define the right starting point." />
    </main>
  );
}