import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Single deliverable in the "What We Deliver" grid: icon, name, output formats. */
export function DeliverableTile({ icon = "file-text", title, formats = [], tone = "light", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const inverse = tone === "dark";
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-8) var(--space-6)",
        background: inverse ? (hover ? "rgba(255,255,255,.05)" : "transparent") : (hover ? "var(--neutral-050)" : "var(--surface-page)"),
        transition: "background-color var(--dur-2) var(--ease-standard)", ...style,
      }}
      {...rest}
    >
      <span style={{ color: hover ? "var(--text-accent)" : (inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)"), transition: "color var(--dur-1) var(--ease-standard)" }}>
        <Icon name={icon} size={24} />
      </span>
      <span style={{ font: "var(--type-h4)", fontSize: "var(--text-body)", fontWeight: "var(--weight-semibold)", color: inverse ? "var(--text-inverse)" : "var(--text-primary)" }}>{title}</span>
      {formats.length ? (
        <span style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)" }}>
          {formats.join(" · ")}
        </span>
      ) : null}
    </div>
  );
}
