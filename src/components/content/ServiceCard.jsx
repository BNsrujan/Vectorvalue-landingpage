import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Expertise-discipline card: icon, title, description, service list, arrow.
   Designed to sit in a hairline grid (1px gaps over a neutral background). */
export function ServiceCard({ icon = "layers", title, description, services = [], href = "#", meta, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)} onBlur={() => setHover(false)}
      style={{
        position: "relative", display: "flex", flexDirection: "column", gap: "var(--space-5)",
        padding: "var(--card-pad)", background: hover ? "var(--neutral-050)" : "var(--surface-page)",
        color: "var(--text-primary)", textDecoration: "none", minHeight: 320,
        transition: "background-color var(--dur-2) var(--ease-standard)", overflow: "hidden", ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, height: 2, width: hover ? "100%" : 0, background: "var(--orange-600)", transition: "width var(--dur-3) var(--ease-out-expo)" }} />
      <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ display: "inline-flex", width: 48, height: 48, alignItems: "center", justifyContent: "center", border: "1px solid " + (hover ? "var(--orange-600)" : "var(--border-hairline)"), color: hover ? "var(--text-accent)" : "var(--text-secondary)", transform: hover ? "translateY(-2px)" : "none", transition: "var(--transition-control), transform var(--dur-2) var(--ease-out-expo)" }}>
          <Icon name={icon} size={22} />
        </span>
        {meta ? <span style={{ font: "var(--type-mono)", letterSpacing: "var(--tracking-mono)", color: "var(--text-muted)" }}>{meta}</span> : null}
      </span>
      <h3 style={{ font: "var(--type-h3)", letterSpacing: "var(--tracking-title)", color: "var(--text-primary)" }}>{title}</h3>
      {description ? <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{description}</p> : null}
      {services.length ? (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6, marginTop: "auto" }}>
          {services.slice(0, 4).map((s) => (
            <li key={s} style={{ display: "flex", alignItems: "center", gap: 8, font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>
              <span style={{ width: 10, height: 1, background: "var(--orange-600)", flex: "0 0 auto" }} />{s}
            </li>
          ))}
        </ul>
      ) : null}
      <span style={{ display: "flex", alignItems: "center", gap: 10, font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: hover ? "var(--text-accent)" : "var(--text-primary)", transition: "var(--transition-control)" }}>
        Explore Expertise
        <span style={{ display: "inline-flex", transform: hover ? "translateX(5px)" : "none", transition: "transform var(--dur-2) var(--ease-out-expo)" }}>
          <Icon name="arrow-right" size={15} strokeWidth={2} />
        </span>
      </span>
    </a>
  );
}
