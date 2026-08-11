"use client";

import React from "react";
import { Button } from "@/components/core/Button.jsx";
import { Eyebrow } from "@/components/core/Eyebrow.jsx";
import { ServiceCard } from "@/components/content/ServiceCard.jsx";
import { ScrollReveal } from "@/components/content/ScrollReveal.jsx";
import { SectionHeading } from "@/components/content/SectionHeading.jsx";
import { ProcessStep } from "@/components/content/ProcessStep.jsx";
import { DeliverableTile } from "@/components/content/DeliverableTile.jsx";
import { DottedWorldMap } from "@/components/data/DottedWorldMap.jsx";
import { Icon } from "@/components/core/Icon.jsx";
import { Tag } from "@/components/core/Tag.jsx";
import { Container, Section, Annotation, PageHero, CTABand, FAQBlock } from "@/components/site-components.tsx";
import { expertise, process, deliverables, faqs, TARGET_MARKETS, MARKET_LINKS } from "@/lib/siteData.ts";

export default function ExpertisePage() {
  return (
    <main>
      <PageHero
        eyebrow="Core Expertise"
        title="Engineering intelligence behind better project decisions."
        lead="Estimation, design, analysis and documentation produced before construction begins — so international teams commit to numbers that hold."
        crumbs={[{ label: "Home", href: "/" }, { label: "Core Expertise" }]}
        image="/assets/imagery/towers-upward-monochrome.jpg"
        meta={[{ label: "Disciplines", value: "06" }, { label: "Delivery", value: "Remote" }, { label: "Scope", value: "Engineering only" }]}
      />

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)" }}>
            {expertise.map((item, index) => (
              <ScrollReveal key={item.slug} delay={index * 70}>
                <ServiceCard
                  icon={item.icon}
                  title={item.title}
                  description={item.summary}
                  services={item.services}
                  meta={String(index + 1).padStart(2, "0") + " / 06"}
                  href={`/core-expertise/${item.slug}`}
                  style={{ height: "100%" }}
                />
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
                {[
                  "Estimation and quantity take-off",
                  "Structural and foundation design",
                  "Engineering analysis and calculations",
                  "Technical reports and documentation",
                  "Design review and second opinions",
                ].map((item) => (
                  <span key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-accent)", marginTop: 2 }}><Icon name="check" size={15} strokeWidth={2.2} /></span>
                    {item}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-7)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", borderTop: "2px solid var(--slate-300)" }}>
                <Annotation>We do not provide</Annotation>
                {[
                  "Construction or installation",
                  "Contracting or subcontracting",
                  "Excavation or piling works",
                  "On-site execution or supervision",
                  "Plant, labour or materials supply",
                ].map((item) => (
                  <span key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
                    <span style={{ marginTop: 2 }}><Icon name="minus" size={15} strokeWidth={2.2} /></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FAQBlock items={faqs.slice(0, 4)} tone="paper" />

      <Section tone="ink" grid>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split-rev)", gap: "var(--space-16)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <Eyebrow tone="inverse">Deliverables</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", color: "var(--text-inverse)", maxWidth: "16ch" }}>What lands in your inbox.</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {deliverables.slice(0, 6).map((item) => (
                  <Tag key={item.title} tone="inverse" mono>{item.formats.join(" / ")}</Tag>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "var(--cols-2)", gap: 1, background: "rgba(255,255,255,.10)", border: "1px solid rgba(255,255,255,.10)" }}>
              {deliverables.slice(0, 6).map((item) => (
                <div key={item.title} style={{ background: "var(--ink-900)" }}>
                  <DeliverableTile icon={item.icon} title={item.title} formats={item.formats} tone="dark" />
                </div>
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
                {["Documented basis", "Second-engineer review", "Stated exclusions"].map((item) => (
                  <span key={item} style={{ display: "flex", alignItems: "center", gap: 8, font: "var(--type-body-sm)", fontWeight: 600 }}>
                    <span style={{ color: "var(--text-accent)" }}><Icon name="shield-check" size={17} /></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-8)", background: "var(--neutral-100)", border: "1px solid var(--border-hairline)" }}>
              <Annotation>Suitable project types</Annotation>
              {expertise[0].projectTypes.map((type) => (
                <span key={type} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--type-body-sm)", color: "var(--text-secondary)", paddingBottom: "var(--space-3)", borderBottom: "1px solid var(--border-hairline)" }}>
                  <span style={{ width: 10, height: 1, background: "var(--orange-600)", marginTop: 11, flex: "0 0 auto" }} />
                  {type}
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
            <DottedWorldMap markers={TARGET_MARKETS} connections={MARKET_LINKS} tone="dark" height={340} />
          </div>
        </Container>
      </Section>

      <FAQBlock items={faqs.slice(0, 4)} tone="paper" />
      <CTABand />
    </main>
  );
}
