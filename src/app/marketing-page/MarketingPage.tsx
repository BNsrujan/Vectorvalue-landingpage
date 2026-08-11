"use client";

import { Navbar } from "@/components/navigation/Navbar.jsx";
import { Footer } from "@/components/navigation/Footer.jsx";
import { Eyebrow } from "@/components/core/Eyebrow.jsx";
import { Button } from "@/components/core/Button.jsx";
import { SectionHeading } from "@/components/content/SectionHeading.jsx";
import { ServiceCard } from "@/components/content/ServiceCard.jsx";
import { ProcessStep } from "@/components/content/ProcessStep.jsx";

const disciplines = [
  {
    icon: "ruler",
    title: "Civil Engineering",
    summary: "Precision-driven civil estimation and design support for buildings, sites and infrastructure packages.",
    services: ["Quantity Estimation", "BOQ Preparation", "Earthwork Estimation", "Take-Off Services"],
    meta: "01 / 06",
    href: "/core-expertise/civil-engineering",
  },
  {
    icon: "frame",
    title: "Structural Engineering",
    summary: "Analysis, design and detailing support for concrete and steel structures.",
    services: ["Structural Design", "Load Analysis", "Steel Structure Design", "Design Review"],
    meta: "02 / 06",
    href: "/core-expertise/structural-engineering",
  },
  {
    icon: "layers",
    title: "Foundation Engineering",
    summary: "Shallow and deep foundation design, analysis and drawing packages — engineering only.",
    services: ["Pile Foundation Design", "Foundation Analysis", "Load Calculations", "Foundation Drawings"],
    meta: "03 / 06",
    href: "/core-expertise/foundation-engineering",
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Core Expertise", href: "/core-expertise", mega: true },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const megaGroups = disciplines.map((discipline) => ({
  title: discipline.title,
  href: discipline.href,
  icon: discipline.icon,
  items: discipline.services.map((service) => ({ label: service, href: discipline.href })),
}));

const steps = [
  { index: "01", title: "Understand", body: "We review drawings, specifications and scope, then agree the basis of estimate in writing." },
  { index: "02", title: "Analyze", body: "Engineers identify technical requirements, missing information and the checks the work will need." },
  { index: "03", title: "Estimate / Design", body: "Take-offs, calculations, analysis or design work are produced against the agreed basis." },
  { index: "04", title: "Review", body: "A second engineer checks the output against the brief and our internal review protocol." },
  { index: "05", title: "Deliver", body: "Organised, referenced files are issued with assumptions, exclusions and open items." },
];

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Core Expertise", href: "/core-expertise" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Expertise",
    links: disciplines.map((discipline) => ({ label: discipline.title, href: discipline.href })),
  },
  {
    title: "Connect",
    links: [
      { label: "Book a Call", href: "/book-a-call" },
      { label: "Contact", href: "/contact" },
      { label: "Email", href: "mailto:YOUR_EMAIL" },
      { label: "LinkedIn", href: "YOUR_LINKEDIN" },
    ],
  },
];

const contact = {
  email: "YOUR_EMAIL",
  phone: "YOUR_PHONE",
  linkedin: "YOUR_LINKEDIN",
  linkedinUrl: "YOUR_LINKEDIN",
};

const legal = [
  { label: "Privacy Notice", href: "#" },
  { label: "Terms", href: "#" },
];

export function MarketingPage() {
  return (
    <div style={{ fontFamily: "var(--font-core)", color: "var(--text-primary)" }}>
      <Navbar
        variant="solid"
        activeHref="/core-expertise"
        items={navItems}
        megaGroups={megaGroups}
        logoSrc="/assets/logo/vectorvalue-mark.png"
      />

      <header style={{ position: "relative", background: "var(--ink-900)", color: "var(--text-inverse)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pattern-blueprint-dark)", backgroundSize: "88px 88px" }} />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "96px var(--container-gutter) 112px", display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", gap: 64, alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Eyebrow tone="inverse">Section eyebrow</Eyebrow>
            <h1 style={{ font: "var(--type-display-2)", letterSpacing: "var(--tracking-display)", color: "var(--text-inverse)", maxWidth: "16ch", margin: 0 }}>
              Replace this with the page headline.
            </h1>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
              <Button variant="primary" size="lg" withArrow href="/book-a-call">
                Book a Call
              </Button>
              <Button variant="outline-inverse" size="lg" href="/contact">
                Send Project Enquiry
              </Button>
            </div>
          </div>
          <p style={{ font: "var(--type-body-lg)", color: "var(--text-inverse-secondary)", borderLeft: "2px solid var(--orange-600)", paddingLeft: 24, margin: "0 0 6px" }}>
            One supporting paragraph. Say what the page covers and who it serves — estimation, design and documentation before construction begins.
          </p>
        </div>
      </header>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-gutter)" }}>
          <SectionHeading index="01" eyebrow="Core Expertise" title="Six disciplines, one engineering standard." lead="Estimation, design, analysis and documentation delivered remotely to international project teams — engineering work only, never construction execution." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", marginTop: 48 }}>
            {disciplines.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.summary}
                services={card.services}
                meta={card.meta}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--neutral-100)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-gutter)" }}>
          <SectionHeading index="02" eyebrow="How We Work" title="Our Process" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: 32, marginTop: 56 }}>
            {steps.map((step) => (
              <ProcessStep key={step.index} index={step.index} title={step.title} body={step.body} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ position: "relative", padding: "var(--section-y-tight) 0", background: "var(--ink-900)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pattern-blueprint-dark)", backgroundSize: "88px 88px" }} />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-gutter)", display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow tone="inverse">Start a conversation</Eyebrow>
            <h2 style={{ font: "var(--type-h1)", letterSpacing: "var(--tracking-heading)", color: "var(--text-inverse)", maxWidth: "18ch", margin: 0 }}>
              Have an engineering requirement? Let's discuss it.
            </h2>
            <p style={{ font: "var(--type-body-lg)", color: "var(--text-inverse-secondary)", maxWidth: "var(--measure-body)", margin: 0 }}>
              Send drawings, a scope note or a question. You will speak with an engineer, not a sales desk.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Button variant="primary" size="lg" withArrow href="/book-a-call">
              Book a Call
            </Button>
            <Button variant="outline-inverse" size="lg" withArrow href="/contact">
              Send Project Enquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer columns={footerColumns} contact={contact} legal={legal} logoSrc="/assets/logo/vectorvalue-mark.png" />
    </div>
  );
}
