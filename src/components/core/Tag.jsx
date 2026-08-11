import React from "react";

const TONES = {
  neutral: { background: "var(--neutral-100)", color: "var(--text-secondary)", border: "var(--border-hairline)" },
  accent: { background: "var(--orange-050)", color: "var(--orange-800)", border: "var(--orange-100)" },
  dark: { background: "var(--ink-800)", color: "var(--text-inverse)", border: "var(--ink-800)" },
  outline: { background: "transparent", color: "var(--text-secondary)", border: "var(--border-default)" },
  inverse: { background: "rgba(255,255,255,.08)", color: "var(--text-inverse-secondary)", border: "var(--border-on-dark)" },
};

/* Small metadata chip: service disciplines, deliverable formats, article categories, form states. */
export function Tag({ children, tone = "neutral", mono = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "5px 10px", borderRadius: "var(--radius-1)",
        background: t.background, color: t.color, border: "1px solid " + t.border,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-core)",
        fontSize: "var(--text-micro)", fontWeight: mono ? 500 : 600,
        letterSpacing: mono ? "var(--tracking-label)" : "0.02em",
        textTransform: mono ? "uppercase" : "none", whiteSpace: "nowrap", ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
