"use client";

import React from "react";
import { Button } from "@/components/core/Button.jsx";
import { Eyebrow } from "@/components/core/Eyebrow.jsx";
import { ScrollReveal } from "@/components/content/ScrollReveal.jsx";
import { SectionHeading } from "@/components/content/SectionHeading.jsx";
import { StatBlock } from "@/components/content/StatBlock.jsx";
import { Icon } from "@/components/core/Icon.jsx";
import { Tag } from "@/components/core/Tag.jsx";
import { Container, Section, Annotation, PageHero, CTABand } from "@/components/site-components.tsx";
import { expertise } from "@/lib/siteData.ts";

const beliefs = [
  { title: "Numbers before opinions", body: "Where a decision can be measured, we measure it. Where it cannot, we say so." },
  { title: "Assumptions belong in writing", body: "An undocumented assumption is a risk transferred silently. We list ours." },
  { title: "Deliverables are read by people", body: "Structure, references and formatting are part of the engineering, not admin." },
  { title: "Scope honesty", body: "We decline work outside our discipline rather than stretch into it." },
];

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Engineering value, decided before execution."
        lead="VectorValue exists for the stage where a project is still a set of decisions — quantities, options, calculations and documentation that determine what the build will actually cost."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image="/assets/imagery/coastal-viaduct-aerial.jpg"
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
            {beliefs.map((belief, index) => (
              <ScrollReveal key={belief.title} delay={index * 70}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingTop: "var(--space-6)", borderTop: "2px solid var(--orange-600)" }}>
                  <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{belief.title}</h3>
                  <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{belief.body}</p>
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
                {['Documented basis', 'Second-engineer review', 'Version-controlled inputs', 'Stated exclusions'].map((tag) => (
                  <Tag key={tag} tone="inverse" mono>{tag}</Tag>
                ))}
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
          <SectionHeading
            index="04"
            eyebrow="Our capabilities"
            title="Six disciplines, delivered remotely."
            lead="Each discipline has its own page, deliverable set and scope boundary."
            action={<Button variant="outline" withArrow href="/core-expertise">Core expertise</Button>}
          />
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", marginTop: "var(--space-12)" }}>
            {expertise.map((discipline) => (
              <a
                key={discipline.slug}
                href={`/core-expertise/${discipline.slug}`}
                style={{ background: "var(--surface-page)", padding: "var(--space-8) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)", textDecoration: "none", color: "inherit" }}
              >
                <span style={{ color: "var(--text-accent)" }}><Icon name={discipline.icon} size={22} /></span>
                <span style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{discipline.title}</span>
                <span style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{discipline.summary}</span>
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
      <CTABand />
    </main>
  );
}
