import React from "react";

/* Metric block. Counts up once when scrolled into view (skipped under prefers-reduced-motion). */
export function StatBlock({ value, suffix = "", prefix = "", label, tone = "light", animate = true, style, ...rest }) {
  const ref = React.useRef(null);
  const numeric = typeof value === "number";
  const [shown, setShown] = React.useState(numeric && animate ? 0 : value);
  React.useEffect(() => {
    if (!numeric || !animate) { setShown(value); return; }
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(value); return; }
    const el = ref.current; if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const start = performance.now(), dur = 900;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, numeric, animate]);
  const inverse = tone === "dark";
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", ...style }} {...rest}>
      <span style={{ font: "var(--type-display-2)", fontSize: "clamp(2.25rem,3.4vw,3.25rem)", letterSpacing: "var(--tracking-display)", color: inverse ? "var(--text-inverse)" : "var(--text-primary)", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
        {prefix}{shown}<span style={{ color: "var(--text-accent)" }}>{suffix}</span>
      </span>
      <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)" }}>{label}</span>
    </div>
  );
}
