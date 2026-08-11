import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";
import { ServiceCard } from "./ServiceCard.jsx";
import { StatBlock } from "./StatBlock.jsx";
import { ProcessStep } from "./ProcessStep.jsx";
import { FAQItem } from "./FAQItem.jsx";
import { DeliverableTile } from "./DeliverableTile.jsx";
import { Button } from "../core/Button.jsx";

export function ContentCard() {
  return (
    <div>
      <SectionHeading
        index="04"
        eyebrow="Core Expertise"
        title="Six disciplines, one engineering standard."
        lead="Estimation, design and documentation delivered remotely to international project teams."
        action={<Button variant="outline" withArrow>All expertise</Button>}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", margin: "22px 0" }}>
        <ServiceCard
          icon="ruler"
          meta="01 / 06"
          title="Civil Engineering"
          description="Precision-driven civil estimation and design support for complex projects."
          services={["Quantity Estimation", "BOQ Preparation", "Earthwork Estimation", "Take-Off Services"]}
        />
        <ServiceCard
          icon="layers"
          meta="03 / 06"
          title="Foundation Engineering"
          description="Shallow and deep foundation design, analysis and calculation packages."
          services={["Pile Foundation Design", "Foundation Analysis", "Load Calculations", "Design Review"]}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, margin: "22px 0" }}>
        <StatBlock value={48} suffix="h" label="Typical first response" />
        <StatBlock value={6} label="Engineering disciplines" />
        <StatBlock value="Remote" label="Delivery model" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, margin: "22px 0" }}>
        <ProcessStep index="01" title="Understand" body="We review drawings, specifications and scope, and agree the basis of estimate." />
        <ProcessStep index="02" title="Analyze" body="Engineers identify technical requirements, assumptions and exclusions." />
        <ProcessStep index="03" title="Estimate / Design" body="Quantities, calculations and design work are produced against that basis." last />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "var(--neutral-300)", border: "1px solid var(--neutral-300)", margin: "22px 0" }}>
        <DeliverableTile icon="table" title="Bill of Quantities" formats={["XLSX", "PDF"]} />
        <DeliverableTile icon="calculator" title="Design Calculations" formats={["PDF"]} />
        <DeliverableTile icon="pen-tool" title="Engineering Drawings" formats={["DWG", "PDF"]} />
        <DeliverableTile icon="file-text" title="Technical Report" formats={["PDF", "DOCX"]} />
      </div>

      <div style={{ borderTop: "1px solid var(--border-hairline)" }}>
        <FAQItem
          defaultOpen
          question="Does VectorValue perform construction?"
          answer="No. We deliver estimation, design, analysis and documentation. Construction execution stays with your contractor."
        />
        <FAQItem
          question="Can you work from our drawings?"
          answer="Yes — drawings, specifications and tender documents are the usual starting point."
        />
      </div>
    </div>
  );
}
