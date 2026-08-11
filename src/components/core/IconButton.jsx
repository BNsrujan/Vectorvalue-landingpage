import React from "react";
import Link from "next/link";
import { Icon } from "./Icon.jsx";

const TONES = {
  default: { color: "var(--text-primary)", border: "var(--border-default)", hoverBorder: "var(--ink-800)", hoverBg: "var(--neutral-100)" },
  accent: { color: "var(--text-on-accent)", border: "var(--orange-600)", bg: "var(--orange-600)", hoverBg: "var(--orange-700)", hoverBorder: "var(--orange-700)" },
  inverse: { color: "var(--text-inverse)", border: "var(--border-on-dark-strong)", hoverBg: "rgba(255,255,255,.10)", hoverBorder: "var(--neutral-000)" },
};

/* Square, hairline-bordered control for arrows, carousels, menu toggles and close buttons. */
export function IconButton({ icon, label, tone = "default", size = 44, href, onClick, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.default;
  const composed = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: size, height: size, flex: "0 0 auto",
    background: hover && !disabled ? (t.hoverBg || t.bg || "transparent") : (t.bg || "transparent"),
    color: t.color, borderRadius: "var(--radius-control)",
    border: "1px solid " + (hover && !disabled ? t.hoverBorder : t.border),
    cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
    transition: "var(--transition-control)", padding: 0, ...style,
  };
  const handlers = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  const glyph = <Icon name={icon} size={Math.round(size * 0.42)} strokeWidth={1.75} />;
  const isInternal = href && !/^(https?:)?\/\//.test(href) && !href.startsWith("mailto:") && !href.startsWith("tel:");
  if (href && !disabled && isInternal) return <Link href={href} aria-label={label} style={composed} {...handlers} {...rest}>{glyph}</Link>;
  if (href && !disabled) return <a href={href} aria-label={label} style={composed} {...handlers} {...rest}>{glyph}</a>;
  return <button type="button" aria-label={label} disabled={disabled} onClick={onClick} style={composed} {...handlers} {...rest}>{glyph}</button>;
}
