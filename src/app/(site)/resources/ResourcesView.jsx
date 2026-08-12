"use client";

import React from "react";
import { ScrollReveal } from "@/components/content/ScrollReveal.jsx";
import { Container, Section, Annotation, PageHero, CTABand } from "@/components/site-components.tsx";
import { insights } from "@/lib/siteData.ts";

export function ResourcesView() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Notes from the engineering desk."
        lead="Short, practical pieces on estimation method, foundation selection and documentation — written by the engineers doing the work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <Section tone="paper">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--cols-3)", gap: "var(--space-8)" }}>
            {insights.map((insight, index) => (
              <ScrollReveal key={insight.title} delay={index * 70}>
                <article style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                  <div style={{ aspectRatio: "16 / 10", overflow: "hidden", background: "var(--neutral-300)" }}>
                    <img src={insight.image} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.04)" }} />
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <Annotation style={{ color: "var(--text-accent)" }}>{insight.category}</Annotation>
                    <Annotation>· {insight.read}</Annotation>
                  </div>
                  <h2 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)" }}>{insight.title}</h2>
                  <p style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{insight.excerpt}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-12)", font: "var(--type-body-sm)", color: "var(--text-muted)", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--space-6)" }}>
            Article bodies are placeholders in this kit. Published pieces cite the standards and sources they draw on.
          </p>
        </Container>
      </Section>

      <CTABand />
    </main>
  );
}
