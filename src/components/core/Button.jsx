import React from "react";
import Link from "next/link";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { height: "var(--control-height-sm)", padding: "0 16px", fontSize: "var(--text-caption)" },
  md: { height: "var(--control-height)", padding: "0 var(--control-pad-x)", fontSize: "var(--text-body-sm)" },
  lg: { height: "var(--control-height-lg)", padding: "0 var(--control-pad-x-lg)", fontSize: "var(--text-body)" },
};

const VARIANTS = {
  primary: {
    rest: { background: "var(--orange-600)", color: "var(--text-on-accent)", borderColor: "var(--orange-600)" },
    hover: { background: "var(--orange-700)", borderColor: "var(--orange-700)" },
  },
  dark: {
    rest: { background: "var(--ink-800)", color: "var(--text-inverse)", borderColor: "var(--ink-800)" },
    hover: { background: "var(--ink-950)", borderColor: "var(--ink-950)" },
  },
  outline: {
    rest: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border-default)" },
    hover: { borderColor: "var(--ink-800)", background: "var(--neutral-100)" },
  },
  "outline-inverse": {
    rest: { background: "transparent", color: "var(--text-inverse)", borderColor: "var(--border-on-dark-strong)" },
    hover: { background: "rgba(255,255,255,.08)", borderColor: "var(--neutral-000)" },
  },
  ghost: {
    rest: { background: "transparent", color: "var(--text-primary)", borderColor: "transparent" },
    hover: { background: "var(--neutral-100)" },
  },
  link: {
    rest: { background: "transparent", color: "var(--text-accent)", borderColor: "transparent", padding: 0, height: "auto" },
    hover: { color: "var(--orange-700)" },
  },
};

export function Button({
  children, variant = "primary", size = "md", href, onClick, type = "button",
  withArrow = false, iconLeft, disabled = false, fullWidth = false, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const composed = {
    display: fullWidth ? "flex" : "inline-flex", alignItems: "center", justifyContent: "center",
    gap: "10px", width: fullWidth ? "100%" : undefined,
    fontFamily: "var(--font-core)", fontWeight: "var(--weight-semibold)", letterSpacing: "-0.005em",
    borderRadius: "var(--radius-control)", borderWidth: "1px", borderStyle: "solid",
    textDecoration: "none", whiteSpace: "nowrap", cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1, transition: "var(--transition-control)",
    ...s, ...v.rest, ...(hover && !disabled ? v.hover : null), ...style,
  };
  const arrow = withArrow ? (
    <span style={{ display: "inline-flex", transform: hover && !disabled ? "translateX(4px)" : "none", transition: "transform var(--dur-2) var(--ease-out-expo)" }}>
      <Icon name="arrow-right" size={size === "lg" ? 18 : 16} strokeWidth={2} />
    </span>
  ) : null;
  const inner = (<>{iconLeft ? <Icon name={iconLeft} size={16} strokeWidth={1.75} /> : null}<span>{children}</span>{arrow}</>);
  const handlers = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true), onBlur: () => setHover(false),
  };
  const isInternal = href && !/^(https?:)?\/\//.test(href) && !href.startsWith("mailto:") && !href.startsWith("tel:");
  if (href && !disabled && isInternal) return <Link href={href} onClick={onClick} style={composed} {...handlers} {...rest}>{inner}</Link>;
  if (href && !disabled) return <a href={href} onClick={onClick} style={composed} {...handlers} {...rest}>{inner}</a>;
  return <button type={type} disabled={disabled} onClick={onClick} style={composed} {...handlers} {...rest}>{inner}</button>;
}
