import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Breadcrumb trail for expertise and resource pages. */
export function Breadcrumbs({ items = [], tone = "light", onNavigate, style, ...rest }) {
  const inverse = tone === "dark";
  const go = (e, href) => { if (onNavigate && href) { e.preventDefault(); onNavigate(href); } };
  return (
    <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8, ...style }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it.label}>
            {last || !it.href ? (
              <span aria-current={last ? "page" : undefined} style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: inverse ? "var(--text-inverse)" : "var(--text-primary)" }}>{it.label}</span>
            ) : (
              <a href={it.href} onClick={(e) => go(e, it.href)} style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)", textDecoration: "none" }}>{it.label}</a>
            )}
            {!last ? (
              <span aria-hidden="true" style={{ display: "flex", color: inverse ? "var(--text-inverse-muted)" : "var(--neutral-400)" }}><Icon name="chevron-right" size={13} /></span>
            ) : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
