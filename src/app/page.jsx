"use client";

import React from "react";
import { Button } from "@/components/core/Button.jsx";
import { Eyebrow } from "@/components/core/Eyebrow.jsx";
import { ServiceCard } from "@/components/content/ServiceCard.jsx";
import { StatBlock } from "@/components/content/StatBlock.jsx";
import { ProcessStep } from "@/components/content/ProcessStep.jsx";
import { DeliverableTile } from "@/components/content/DeliverableTile.jsx";
import { ScrollReveal } from "@/components/content/ScrollReveal.jsx";
import { SectionHeading } from "@/components/content/SectionHeading.jsx";
import { DottedWorldMap } from "@/components/data/DottedWorldMap.jsx";
import { ScrollVideo } from "@/components/data/ScrollVideo.jsx";
import { TextReveal } from "@/components/data/TextReveal.jsx";
import { Icon } from "@/components/core/Icon.jsx";
import { Tag } from "@/components/core/Tag.jsx";
import { Container, Section, Annotation, CTABand } from "@/components/site-components.tsx";
import { expertise, TARGET_MARKETS, MARKET_LINKS, pillars, process, deliverables, clientTypes, insights } from "@/lib/siteData.ts";

function Hero() {
  return (
    <ScrollVideo src="/assets/video/hero-aerial-drone.mp4" track={280} height="100vh" className="-mt-[76px]" scrim="linear-gradient(180deg, rgba(15,18,25,.22) 0%, rgba(15,18,25,.72) 100%)">
      {(p) => (
        <div className="flex h-full flex-col justify-between pt-[76px]">
          <Container className="flex flex-1 items-center">
            <div className="flex max-w-[880px] flex-col gap-[var(--space-7)] p-[clamp(24px,3vw,44px)]">
              <Eyebrow tone="inverse">Engineering · Estimation · Design</Eyebrow>
              <h1 className="[font:var(--type-display-1)] [letter-spacing:var(--tracking-display)] [color:var(--text-inverse)]">
                Engineering Precision.<br />
                <span className="[color:var(--orange-600)]">Measured</span> Value.
              </h1>
              <p className="max-w-[56ch] [font:var(--type-body-xl)] [line-height:var(--leading-relaxed)] [color:var(--text-inverse-secondary)]">
                VectorValue provides engineering estimation, design, technical analysis and documentation support for international projects — helping teams make informed decisions before construction begins.
              </p>
              <div className="mt-[var(--space-2)] flex flex-wrap gap-[var(--space-4)]">
                <Button variant="primary" size="lg" withArrow href="/core-expertise">Explore Our Expertise</Button>
                <Button variant="outline-inverse" size="lg" href="/book-a-call">Book a Call</Button>
              </div>
            </div>
          </Container>
          <Container className="pb-[var(--space-8)]">
            <div className="flex flex-wrap items-center justify-between gap-[var(--space-5)] border-t border-white/15 pt-[var(--space-5)]">
              <Annotation tone="dark">Scroll to advance · aerial survey reference</Annotation>
              <div className="relative h-0.5 max-w-[420px] flex-1 bg-white/15">
                <span className="absolute inset-y-0 left-0 [background:var(--orange-600)]" style={{ width: `${(p * 100).toFixed(1)}%` }} />
              </div>
              <Annotation tone="dark" className="[font-variant-numeric:tabular-nums]">{String(Math.round(p * 100)).padStart(3, "0")} / 100</Annotation>
            </div>
          </Container>
        </div>
      )}
    </ScrollVideo>
  );
}

function IntroStatement() {
  return (
    <div className="[background:var(--ink-950)] [background-image:var(--pattern-blueprint-dark)] [background-size:var(--grid-size-lg)_var(--grid-size-lg)]">
      <Container>
        <div className="grid items-start gap-[var(--space-16)] [grid-template-columns:var(--split)]">
          <TextReveal tone="dark" track={150} accentWords={["before", "execution"]}>
            Engineering value is decided before execution — in the quantities, the calculations and the assumptions behind them.
          </TextReveal>
          <div className="sticky top-[34vh] flex flex-col gap-[var(--space-8)] pb-[var(--space-20)] md:py-[324px]">
            <p className="reveal-text [font:var(--type-body-lg)] [color:var(--text-inverse-secondary)]">
              We work in the window where a project is still a decision: comparing options, measuring scope and documenting the reasoning — so the numbers your team commits to are the numbers the project can hold.
            </p>
            <div className="grid gap-[var(--space-8)] [grid-template-columns:var(--cols-2)]">
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

function ExpertiseGrid() {
  return (
    <Section tone="paper" id="expertise">
      <Container>
        <SectionHeading index="04" eyebrow="Core Expertise" title="Six disciplines, one engineering standard."
          lead="Estimation, design, analysis and documentation delivered remotely to international project teams — engineering work only, never construction execution."
          action={<Button variant="outline" withArrow href="/core-expertise">All expertise</Button>} />
        <div className="mt-[var(--space-12)] grid gap-px border border-[var(--neutral-300)] bg-[var(--neutral-300)] [grid-template-columns:var(--cols-3)]">
          {expertise.map((item, index) => (
            <ScrollReveal key={item.slug} delay={index * 70}>
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.summary}
                services={item.services}
                meta={`${String(index + 1).padStart(2, "0")} / 06`}
                href={`/core-expertise/${item.slug}`}
                className="h-full"
              />
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
        <div className="grid items-center gap-[var(--space-12)] [grid-template-columns:var(--split-rev)]">
          <div className="flex flex-col gap-[var(--space-6)]">
            <Eyebrow index="05" tone="inverse">Global Reach</Eyebrow>
            <h2 className="[font:var(--type-h1)] [letter-spacing:var(--tracking-heading)] [color:var(--text-inverse)]">Global engineering<br />without borders.</h2>
            <p className="max-w-[44ch] [font:var(--type-body-lg)] [color:var(--text-inverse-secondary)]">
              Supporting international project teams with remote engineering expertise — structured around your drawing standards, measurement rules and working hours.
            </p>
            <Annotation tone="dark">Markers indicate target markets for remote engineering support — not offices or completed projects.</Annotation>
          </div>
          <ScrollReveal from="right">
            <DottedWorldMap markers={TARGET_MARKETS} connections={MARKET_LINKS} tone="dark" height={460} />
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
        <SectionHeading index="06" eyebrow="Why VectorValue" title="Built around how engineering decisions are actually made." />
        <div className="mt-[var(--space-12)] grid gap-[var(--space-10)] [grid-template-columns:var(--cols-3)]">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 60}>
              <div className="flex flex-col gap-[var(--space-4)] border-t border-[var(--border-default)] pt-[var(--space-6)]">
                <span className="[color:var(--text-accent)]"><Icon name={pillar.icon} size={22} /></span>
                <h3 className="[font:var(--type-h4)] [font-size:var(--text-body-lg)]">{pillar.title}</h3>
                <p className="[font:var(--type-body-sm)] [color:var(--text-secondary)]">{pillar.body}</p>
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
        <SectionHeading index="07" eyebrow="How We Work" title="Understand → Analyze → Estimate → Review → Deliver"
          lead="A fixed sequence, applied to every engagement regardless of size." />
        <div className="mt-[var(--space-14)] grid gap-[var(--space-8)] [grid-template-columns:var(--cols-5)]">
          {process.map((step, index) => (
            <ProcessStep key={step.index} index={step.index} title={step.title} body={step.body} last={index === process.length - 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function WhatWeDeliver() {
  return (
    <Section tone="ink" grid>
      <Container>
        <SectionHeading index="08" eyebrow="What We Deliver" tone="dark" title="Deliverables your team can use on arrival." 
          lead="Organised, referenced and issued with the assumptions that produced them." />
        <div className="mt-[var(--space-12)] grid gap-px border border-white/10 bg-white/10 [grid-template-columns:var(--cols-3)]">
          {deliverables.map((deliverable) => (
            <div key={deliverable.title} className="[background:var(--ink-900)]">
              <DeliverableTile icon={deliverable.icon} title={deliverable.title} formats={deliverable.formats} tone="dark" />
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
        <SectionHeading index="09" eyebrow="Who We Support" title="Engineering support for the teams that carry the project."  />
        <div className="mt-[var(--space-12)] grid gap-px border border-[var(--neutral-300)] bg-[var(--neutral-300)] [grid-template-columns:var(--cols-4)]">
          {clientTypes.map((client, index) => (
            <div key={client.title} className="flex flex-col gap-[var(--space-3)] px-[var(--space-6)] py-[var(--space-8)] [background:var(--surface-page)]">
              <Annotation>{String(index + 1).padStart(2, "0")}</Annotation>
              <h3 className="[font:var(--type-h4)] [font-size:var(--text-body)]">{client.title}</h3>
              <p className="[font:var(--type-body-sm)] [font-size:var(--text-caption)] [color:var(--text-secondary)]">{client.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Insights() {
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading index="10" eyebrow="Engineering Insights" title="Notes from the work."
          action={<Button variant="outline" withArrow href="/resources">All resources</Button>} />
        <div className="mt-[var(--space-12)] grid gap-[var(--space-8)] [grid-template-columns:var(--cols-3)]">
          {insights.map((insight, index) => (
            <ScrollReveal key={insight.title} delay={index * 70}>
              <a href="/resources" className="flex flex-col gap-[var(--space-4)] text-inherit no-underline">
                <div className="aspect-[16/10] overflow-hidden [background:var(--neutral-300)]">
                  <img src={insight.image} alt="" loading="lazy" className="h-full w-full object-cover [filter:grayscale(1)_contrast(1.04)]" />
                </div>
                <div className="flex items-center gap-[var(--space-3)]">
                  <Annotation className="[color:var(--text-accent)]">{insight.category}</Annotation>
                  <Annotation>· {insight.read}</Annotation>
                </div>
                <h3 className="[font:var(--type-h4)] [font-size:var(--text-body-lg)]">{insight.title}</h3>
                <p className="[font:var(--type-body-sm)] [font-size:var(--text-caption)] [color:var(--text-secondary)]">{insight.excerpt}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroStatement />
      <ExpertiseGrid />
      <GlobalReach />
      <WhyVectorValue />
      <HowWeWork />
      <WhatWeDeliver />
      <WhoWeSupport />
      <Insights />
      <CTABand />
    </main>
  );
}
