import React from "react";
import { Eyebrow } from "../core/Eyebrow.jsx";

/* Section opener: eyebrow, headline, optional lead paragraph and trailing action. */
export function SectionHeading({
  eyebrow, index, title, lead, action, align = "left", tone = "light", maxWidth = "var(--measure-body)", style, ...rest
}) {
  const inverse = tone === "dark";
  return (
    <div
      style={{
        display: "flex", gap: "var(--space-8)",
        alignItems: align === "center" ? "center" : "flex-end",
        flexDirection: align === "center" ? "column" : "row",
        justifyContent: "space-between", textAlign: align === "center" ? "center" : "left", ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: align === "center" ? "center" : "flex-start", maxWidth }}>
        {eyebrow ? <Eyebrow index={index} tone={inverse ? "inverse" : "accent"}>{eyebrow}</Eyebrow> : null}
        <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--tracking-heading)", color: inverse ? "var(--text-inverse)" : "var(--text-primary)", margin: 0 }}>{title}</h2>
        {lead ? (
          <p style={{ font: "var(--type-body-lg)", color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>{lead}</p>
        ) : null}
      </div>
      {action ? <div style={{ flex: "0 0 auto", paddingBottom: 4 }}>{action}</div> : null}
    </div>
  );
}
