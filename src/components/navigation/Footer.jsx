"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "../core/Icon.jsx";


export function Footer({
  logoSrc = "assets/logo/vectorvalue-mark.png", brand = "VectorValue",
  blurb = "Engineering estimation, design and technical expertise for international project teams.",
  columns = [], contact = {}, legal = [], style, ...rest
}) {
  const link = { display: "block", padding: "5px 0", textDecoration: "none", fontFamily: "var(--font-core)", fontSize: "var(--text-caption)", color: "var(--text-inverse-secondary)" };
  const isInternal = (href) => href && !/^(https?:)?\/\//.test(href) && !href.startsWith("mailto:") && !href.startsWith("tel:");
  return (
    <footer style={{ background: "var(--ink-950)", backgroundImage: "var(--pattern-blueprint-dark)", backgroundSize: "var(--grid-size-lg) var(--grid-size-lg)", color: "var(--text-inverse)", ...style }} {...rest}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "var(--space-24) var(--container-gutter) var(--space-10)", display: "grid", gridTemplateColumns: "var(--footer-cols)", gap: "var(--space-12)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", maxWidth: 340 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={logoSrc} alt="" style={{ height: 70, filter: "brightness(0) invert(1)", margin: "-3px -20px " }} />
            <span style={{ fontFamily: "var(--font-core)", fontWeight: 800, fontSize: "2.25rem", letterSpacing: "-0.03em" }}>{brand}</span>
          </span>
          <p style={{ font: "var(--type-body-sm)", color: "var(--text-inverse-secondary)" }}>{blurb}</p>
          {/* <p style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--orange-400)" }}>Engineering services only — no construction execution</p> */}
        </div>
        {columns.map((col) => (
          <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-inverse-muted)" }}>{col.title}</span>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {col.links.map((l) =>
                isInternal(l.href) ? (
                  <Link key={l.label} href={l.href} style={link}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--orange-400)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-inverse-secondary)"; }}
                  >{l.label}</Link>
                ) : (
                  <a key={l.label} href={l.href} style={link}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--orange-400)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-inverse-secondary)"; }}
                  >{l.label}</a>
                )
              )}
            </nav>
          </div>
        ))}
      </div>
      {contact && (contact.email || contact.phone || contact.linkedin) ? (
        <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 var(--container-gutter)" }}>
          <div style={{ padding: "var(--space-6) 0", display: "flex", flexWrap: "wrap", gap: "var(--space-8)" }}>
            {[["mail", contact.email, "mailto:" + contact.email], ["phone", contact.phone, "tel:" + (contact.phone || "")]].map(([icon, value, href]) =>
              value ? (
                <a key={icon} href={href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "var(--text-caption)", letterSpacing: "var(--tracking-mono)", color: "var(--text-inverse-secondary)" }}>
                  <span style={{ color: "var(--orange-600)", display: "flex" }}><Icon name={icon} size={16} /></span>{value}
                </a>
              ) : null
            )}
          </div>
        </div>
      ) : null}
      <div style={{  margin: "0 auto", padding: "var(--space-6) var(--container-gutter) var(--space-10)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "var(--space-4)", borderTop: "1px solid var(--border-on-dark)" }}>
        <span style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", color: "var(--text-inverse-muted)" }}>© {new Date().getFullYear()} {brand}. All rights reserved.</span>
        <nav style={{ display: "flex", gap: "var(--space-6)" }}>
          {legal.map((l) =>
            isInternal(l.href) ? (
              <Link key={l.label} href={l.href} style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", color: "var(--text-inverse-muted)", textDecoration: "none" }}>{l.label}</Link>
            ) : (
              <a key={l.label} href={l.href} style={{ font: "var(--type-mono)", fontSize: "var(--text-micro)", color: "var(--text-inverse-muted)", textDecoration: "none" }}>{l.label}</a>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
