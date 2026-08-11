import React from "react";
import { Button } from "./Button.jsx";
import { IconButton } from "./IconButton.jsx";
import { Eyebrow } from "./Eyebrow.jsx";
import { Tag } from "./Tag.jsx";

export function CoreCard() {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <Button variant="primary" withArrow>Book a Call</Button>
        <Button variant="dark" withArrow>Explore Expertise</Button>
        <Button variant="outline" withArrow>Discuss Your Project</Button>
        <Button variant="ghost">Learn more</Button>
        <Button variant="link" withArrow>Read the brief</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <Button size="sm" variant="outline">Small</Button>
        <Button size="md" variant="outline">Medium</Button>
        <Button size="lg" variant="outline" iconLeft="calendar">Large with icon</Button>
        <IconButton icon="arrow-left" label="Previous" />
        <IconButton icon="arrow-right" label="Next" />
        <IconButton icon="plus" label="Expand" tone="accent" />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32, marginBottom: 18 }}>
        <Eyebrow index="03">Core Expertise</Eyebrow>
        <Eyebrow tone="muted">Deliverables</Eyebrow>
        <Tag mono>BOQ</Tag>
        <Tag mono>IFC / DWG</Tag>
        <Tag tone="accent">Remote delivery</Tag>
        <Tag tone="outline">Structural</Tag>
        <Tag tone="dark">Foundation</Tag>
      </div>

      <div style={{ background: "var(--ink-800)", padding: "16px 20px", display: "flex", gap: 12, alignItems: "center", borderRadius: "var(--radius-2)" }}>
        <Button variant="primary" withArrow>Book a Call</Button>
        <Button variant="outline-inverse" withArrow>Contact</Button>
        <Eyebrow tone="inverse">Global Reach</Eyebrow>
        <Tag tone="inverse" mono>Pre-construction</Tag>
        <IconButton icon="arrow-up-right" label="Open" tone="inverse" />
      </div>
    </div>
  );
}
