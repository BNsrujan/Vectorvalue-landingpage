import React from "react";

/* Scroll-linked word reveal for a single statement. Words lift from 12% to full opacity
   as the pinned block travels through the viewport. Static under prefers-reduced-motion. */
export function TextReveal({ children, track = 220, tone = "light", accentWords = [], align = "left", style, ...rest }) {
  const wrapRef = React.useRef(null);
  const [p, setP] = React.useState(0);
  const [reduce, setReduce] = React.useState(false);

  React.useEffect(() => {
    const m = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m && m.matches) { setReduce(true); setP(1); return; }
    const wrap = wrapRef.current; if (!wrap) return;
    const scroller = wrap.closest("[data-scroll-root]");
    const target = scroller || window;
    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const viewH = scroller ? scroller.clientHeight : window.innerHeight;
      const total = rect.height - viewH;
      setP(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
    };
    onScroll();
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { target.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const toText = (n) => typeof n === "string" || typeof n === "number" ? String(n) : Array.isArray(n) ? n.map(toText).join("") : (n && n.props ? toText(n.props.children) : "");
  const words = toText(children).split(/\s+/).filter(Boolean);
  const inverse = tone === "dark";
  const accents = accentWords.map((w) => w.toLowerCase().replace(/[^a-z]/g, ""));

  return (
    <div ref={wrapRef} style={{ position: "relative", height: reduce ? "auto" : track + "vh", ...style }} {...rest}>
      <div style={{ position: reduce ? "static" : "sticky", top: 0, minHeight: reduce ? 0 : "100vh", display: "flex", alignItems: "center", padding: reduce ? "var(--section-y) 0" : 0 }}>
        <p style={{
          margin: 0, maxWidth: "22ch", textAlign: align,
          font: "var(--type-display-2)", fontSize: "clamp(2rem,4.4vw,4rem)",
          letterSpacing: "var(--tracking-display)", lineHeight: 1.08,
          color: inverse ? "var(--text-inverse)" : "var(--text-primary)",
        }}>
          {words.map((w, i) => {
            const startAt = i / (words.length + 4);
            const local = Math.min(1, Math.max(0, (p - startAt) * (words.length + 4) / 3));
            const isAccent = accents.indexOf(w.toLowerCase().replace(/[^a-z]/g, "")) >= 0;
            return (
              <span key={i} style={{
                opacity: 0.22 + local * 0.78,
                color: isAccent ? "var(--orange-600)" : "inherit",
                transition: "opacity 120ms linear",
              }}>{w}{i < words.length - 1 ? " " : ""}</span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
