"use client";

import { Button } from "@/components/core/Button.jsx";
import { Eyebrow } from "@/components/core/Eyebrow.jsx";
import { Icon } from "@/components/core/Icon.jsx";
import { Container, CTABand, PageHero, Section } from "@/components/site-components";
import type { expertise } from "@/lib/siteData";

type ExpertiseItem = (typeof expertise)[number];

export function ExpertiseDisciplineView({ item }: { item: ExpertiseItem }) {
  return (
    <main>
      <PageHero
        eyebrow={item.title}
        title={item.summary}
        lead={item.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Core Expertise", href: "/core-expertise" }, { label: item.title, href: `/core-expertise/${item.slug}` }]}
        image={item.image}
        meta={[{ label: "Services", value: String(item.services.length).padStart(2, "0") }, { label: "Delivery", value: "Remote" }, { label: "Scope", value: "Engineering only" }]}
        actions={<Button variant="primary" size="lg" withArrow href="/contact">Start an enquiry</Button>}
      />

      <Section tone="paper">
        <Container>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", marginBottom: "var(--space-10)" }}>
            <Eyebrow index="01">What this covers</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "20ch" }}>{item.services.length} services under one discipline.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--space-4)" }}>
            {item.services.map((service) => (
              <div key={service} style={{ display: "flex", alignItems: "center", gap: 10, padding: "var(--space-5)", background: "var(--neutral-100)", borderTop: "2px solid var(--orange-600)", font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--text-accent)" }}><Icon name="check" size={16} /></span>{service}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", marginBottom: "var(--space-10)" }}>
            <Eyebrow index="02">What you receive</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "20ch" }}>Deliverables, not just analysis.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--space-8)" }}>
            {item.provides.map((entry) => (
              <div key={entry.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{entry.title}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{entry.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Eyebrow index="03">Project fit</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", maxWidth: "18ch" }}>Useful at every stage before construction.</h2>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>
                We support developers, consultants, contractors and project teams with engineering work they can review, price and coordinate.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-8)", background: "var(--neutral-100)", border: "1px solid var(--border-hairline)" }}>
              <Eyebrow>Suitable project types</Eyebrow>
              {item.projectTypes.map((type) => (
                <div key={type} style={{ display: "flex", gap: 12, paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--border-hairline)", font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>
                  <span style={{ width: 10, height: 1, marginTop: 11, background: "var(--orange-600)" }} />{type}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTABand title={`Have a ${item.title.toLowerCase()} package to discuss?`} body="Share drawings, a scope note or a geotechnical report. We will help you define the right starting point." />
    </main>
  );
}
