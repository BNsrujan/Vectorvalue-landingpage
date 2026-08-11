import React from "react";
import Link from "next/link";
import { Icon } from "../core/Icon.jsx";

/* Full-width expertise panel opened from the primary nav.
   Six discipline columns + a conversion rail on the right. */
export function MegaMenu({ groups = [], note, ctaLabel = "Book a Call", ctaHref = "/book-a-call", style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-page)", borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-overlay)", ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-10) var(--container-gutter)", display: "grid", gridTemplateColumns: "var(--mega-cols)", gap: "var(--space-10)" }}>
        {groups.map((g) => (
          <div key={g.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Link href={g.href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--text-primary)" }}>
              <span style={{ color: "var(--text-accent)", display: "flex" }}><Icon name={g.icon || "layers"} size={18} /></span>
              <span style={{ fontFamily: "var(--font-core)", fontSize: "var(--text-body-sm)", fontWeight: 700, letterSpacing: "var(--tracking-title)" }}>{g.title}</span>
            </Link>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
              {g.items.map((it) => (
                <li key={it.label}>
                  <Link href={it.href || g.href}
                    style={{ display: "block", padding: "3px 0", textDecoration: "none", fontFamily: "var(--font-core)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ background: "var(--ink-800)", padding: "var(--space-8)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "var(--space-6)", backgroundImage: "var(--pattern-blueprint-dark)", backgroundSize: "var(--grid-size) var(--grid-size)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--orange-400)" }}>Not sure where to start?</span>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-inverse-secondary)" }}>{note || "Send drawings or a scope note and we will tell you which discipline the work belongs to."}</p>
          </div>
          <Link href={ctaHref} style={{ display: "inline-flex", alignItems: "center", gap: 10, alignSelf: "flex-start", padding: "12px 20px", background: "var(--orange-600)", color: "var(--text-on-accent)", textDecoration: "none", fontFamily: "var(--font-core)", fontSize: "var(--text-caption)", fontWeight: 600, borderRadius: "var(--radius-1)" }}>
            {ctaLabel}<Icon name="arrow-right" size={15} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
