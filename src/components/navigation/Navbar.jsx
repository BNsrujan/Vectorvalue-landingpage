"use client";

import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";
import { MegaMenu } from "./MegaMenu.jsx";

/* Sticky primary navigation. Transparent over a hero, solid white once scrolled.
   Collapses to a hamburger + drawer below 980px. */
export function Navbar({
  logoSrc = "assets/logo/vectorvalue-mark.png", brand = "VectorValue",
  items = [], activeHref = "/", cta = { label: "Book a Call", href: "/book-a-call" },
  variant = "solid", onNavigate, megaGroups = [], style, ...rest
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMega, setOpenMega] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [narrow, setNarrow] = React.useState(false);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    const el = wrapRef.current;
    const scroller = el && el.closest("[data-scroll-root]");
    const target = scroller || window;
    const onScroll = () => setScrolled((scroller ? scroller.scrollTop : window.scrollY) > 24);
    onScroll();
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const measure = () => {
      const w = wrapRef.current ? wrapRef.current.getBoundingClientRect().width : window.innerWidth;
      setNarrow(w < 980);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const overlay = variant === "overlay" && !scrolled && !openMega;
  const fg = overlay ? "var(--text-inverse)" : "var(--text-primary)";
  const go = (e, href) => { setDrawer(false); setOpenMega(false); if (onNavigate) { e.preventDefault(); onNavigate(href); } };

  return (
    <header
      ref={wrapRef}
      onMouseLeave={() => setOpenMega(false)}
      style={{
        position: "sticky", top: 0, zIndex: 90,
        background: overlay ? "transparent" : "var(--surface-page)",
        borderBottom: "1px solid " + (overlay ? "rgba(255,255,255,.16)" : "var(--border-hairline)"),
        boxShadow: overlay ? "none" : "var(--shadow-nav)",
        transition: "background-color var(--dur-2) var(--ease-standard), border-color var(--dur-2) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-gutter)", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)" }}>
        <a href="/" onClick={(e) => go(e, "/")} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={logoSrc} alt="" style={{ height: 30, width: "auto", filter: overlay ? "brightness(0) invert(1)" : "none", transition: "filter var(--dur-2) var(--ease-standard)" }} />
          <span style={{ fontFamily: "var(--font-core)", fontWeight: 800, fontSize: "1.125rem", letterSpacing: "-0.03em", color: fg }}>{brand}</span>
        </a>

        {!narrow ? (
          <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: "var(--space-7)" }}>
            {items.map((item) => {
              const active = activeHref === item.href || (item.href !== "/" && activeHref.indexOf(item.href) === 0);
              return (
                <a key={item.href} href={item.href}
                  onClick={(e) => go(e, item.href)}
                  onMouseEnter={() => setOpenMega(!!item.mega)}
                  style={{ position: "relative", display: "flex", alignItems: "center", gap: 5, padding: "26px 0", textDecoration: "none", fontFamily: "var(--font-core)", fontSize: "var(--text-body-sm)", fontWeight: 500, color: active ? (overlay ? "var(--text-inverse)" : "var(--text-primary)") : (overlay ? "rgba(255,255,255,.78)" : "var(--text-secondary)") }}
                >
                  {item.label}
                  {item.mega ? <Icon name="chevron-down" size={14} /> : null}
                  <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 18, height: 2, background: "var(--orange-600)", transform: active ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform var(--dur-2) var(--ease-out-expo)" }} />
                </a>
              );
            })}
            <Button variant="primary" size="sm" href={cta.href} onClick={(e) => go(e, cta.href)} withArrow style={{ marginLeft: 8 }}>{cta.label}</Button>
          </nav>
        ) : (
          <button type="button" aria-label="Open menu" aria-expanded={drawer} onClick={() => setDrawer(!drawer)}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, background: "none", border: "1px solid " + (overlay ? "rgba(255,255,255,.3)" : "var(--border-default)"), borderRadius: "var(--radius-1)", color: fg, cursor: "pointer" }}>
            <Icon name={drawer ? "x" : "menu"} size={20} />
          </button>
        )}
      </div>

      {!narrow && openMega && megaGroups.length ? (
        <div style={{ position: "absolute", left: 0, right: 0, top: "100%" }} onMouseLeave={() => setOpenMega(false)}>
          <MegaMenu groups={megaGroups} onNavigate={onNavigate} ctaHref={cta.href} />
        </div>
      ) : null}

      {narrow && drawer ? (
        <div style={{ borderTop: "1px solid var(--border-hairline)", background: "var(--surface-page)", padding: "var(--space-6) var(--container-gutter) var(--space-8)", display: "flex", flexDirection: "column", gap: 2, maxHeight: "72vh", overflowY: "auto" }}>
          {items.map((item) => (
            <div key={item.href} style={{ borderBottom: "1px solid var(--border-hairline)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <a href={item.href} onClick={(e) => go(e, item.href)} style={{ flex: 1, padding: "16px 0", textDecoration: "none", fontFamily: "var(--font-core)", fontSize: "var(--text-body-lg)", fontWeight: 600, color: "var(--text-primary)" }}>{item.label}</a>
                {item.mega ? (
                  <button type="button" aria-label="Toggle expertise" onClick={() => setExpanded(!expanded)} style={{ background: "none", border: 0, padding: 8, cursor: "pointer", color: "var(--text-muted)", transform: expanded ? "rotate(45deg)" : "none", transition: "transform var(--dur-2) var(--ease-out-expo)" }}>
                    <Icon name="plus" size={18} />
                  </button>
                ) : null}
              </div>
              {item.mega && expanded ? (
                <ul style={{ listStyle: "none", margin: "0 0 16px", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {megaGroups.map((g) => (
                    <li key={g.title}>
                      <a href={g.href} onClick={(e) => go(e, g.href)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontFamily: "var(--font-core)", fontSize: "var(--text-body-sm)", color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--text-accent)", display: "flex" }}><Icon name={g.icon || "layers"} size={16} /></span>{g.title}
                      </a>
                      {g.items && g.items.length ? (
                        <ul style={{ listStyle: "none", margin: "8px 0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                          {g.items.map((item) => (
                            <li key={item.label}>
                              <a href={item.href || g.href} onClick={(e) => go(e, item.href || g.href)} style={{ display: "block", textDecoration: "none", fontFamily: "var(--font-core)", fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>{item.label}</a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <Button variant="primary" size="lg" fullWidth href={cta.href} onClick={(e) => go(e, cta.href)} withArrow style={{ marginTop: "var(--space-6)" }}>{cta.label}</Button>
        </div>
      ) : null}
    </header>
  );
}
