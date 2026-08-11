import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Hairline accordion row. Group them in a column with a shared top rule. */
export function FAQItem({ question, answer, defaultOpen = false, tone = "light", style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const inverse = tone === "dark";
  return (
    <div style={{ borderBottom: "1px solid " + (inverse ? "var(--border-on-dark)" : "var(--border-hairline)"), ...style }} {...rest}>
      <button
        type="button" onClick={() => setOpen(!open)} aria-expanded={open}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-6)",
          padding: "var(--space-6) 0", background: "none", border: 0, cursor: "pointer", textAlign: "left",
          font: "var(--type-h4)", fontSize: "var(--text-body-lg)", fontWeight: "var(--weight-semibold)",
          color: inverse ? "var(--text-inverse)" : "var(--text-primary)",
        }}
      >
        <span>{question}</span>
        <span style={{ display: "inline-flex", flex: "0 0 auto", color: open ? "var(--text-accent)" : (inverse ? "var(--text-inverse-muted)" : "var(--text-muted)"), transform: open ? "rotate(45deg)" : "none", transition: "transform var(--dur-2) var(--ease-out-expo), color var(--dur-1) var(--ease-standard)" }}>
          <Icon name="plus" size={20} />
        </span>
      </button>
      <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows var(--dur-3) var(--ease-out-expo)" }}>
        <div style={{ overflow: "hidden" }}>
          <p style={{ paddingBottom: "var(--space-6)", maxWidth: "var(--measure-body)", font: "var(--type-body)", color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)" }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
