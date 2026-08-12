"use client";

import React from "react";
import { Container, Section, PageHero, CTABand } from "@/components/site-components.tsx";
import { companyConfig } from "@/lib/siteData.ts";

export function CareersView() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="We are not actively hiring right now."
        lead="VectorValue stays deliberately small. When a role opens, it will be posted here first."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <Section tone="paper">
        <Container>
          <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>
            There are no open positions at the moment. If you&apos;d still like to be considered for future openings, send a note and a CV to{" "}
            <a href={`mailto:${companyConfig.email}`} style={{ color: "var(--text-accent)" }}>{companyConfig.email}</a>{" "}
            and we&apos;ll keep it on file.
          </p>
        </Container>
      </Section>

      <CTABand />
    </main>
  );
}
