"use client";

import React from "react";
import { ScrollReveal } from "@/components/content/ScrollReveal.jsx";
import { ServiceCard } from "@/components/content/ServiceCard.jsx";
import { Container, Section, PageHero, CTABand } from "@/components/site-components.tsx";
import { expertise } from "@/lib/siteData.ts";

export default function CoreExpertisePage() {
  return (
    <main>
      <PageHero
        eyebrow="Core Expertise"
        title="Engineering intelligence behind better project decisions."
        lead="Estimation, design, analysis and documentation produced before construction begins — so international teams commit to numbers that hold."
        crumbs={[{ label: "Home", href: "/" }, { label: "Core Expertise" }]}
        image="/assets/imagery/towers-upward-monochrome.jpg"
        meta={[{ label: "Disciplines", value: "03" }, { label: "Delivery", value: "Remote" }, { label: "Scope", value: "Engineering only" }]}
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
                  meta={String(index + 1).padStart(2, "0") + " / 03"}
                  href={`/core-expertise/${item.slug}`}
                  style={{ height: "100%" }}
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </main>
  );
}
