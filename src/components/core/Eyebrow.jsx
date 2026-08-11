import React from "react";

/* Monospace uppercase section marker, optionally prefixed with an index rule.
   The single most-used brand device — every section opens with one. */
export function Eyebrow({ children, index, tone = "accent", style, ...rest }) {
  const colors = {
    accent: "var(--text-accent)",
    muted: "var(--text-muted)",
    inverse: "var(--text-inverse-secondary)",
  };
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: "var(--space-3)",
        font: "var(--type-label)", letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase", color: colors[tone] || colors.accent, ...style,
      }}
      {...rest}
    >
      {index ? (
        <span style={{ opacity: 0.7, fontVariantNumeric: "tabular-nums" }}>{index}</span>
      ) : null}
      <span style={{ width: 24, height: 1, background: "currentColor", opacity: 0.5, flex: "0 0 auto" }} />
      <span>{children}</span>
    </div>
  );
}
