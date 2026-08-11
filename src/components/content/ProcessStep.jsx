import React from "react";

/* One step of the Understand → Analyze → Estimate/Design → Review → Deliver workflow.
   Reveals on scroll; the connector rule fills from the previous step. */
export function ProcessStep({ index, title, body, tone = "light", last = false, style, ...rest }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const inverse = tone === "dark";
  return (
    <div ref={ref} style={{ position: "relative", display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingTop: "var(--space-8)", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(var(--reveal-offset))", transition: "var(--transition-reveal)", ...style }} {...rest}>
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: last ? "auto" : 0, width: last ? 40 : "auto", height: 1, background: inverse ? "var(--border-on-dark)" : "var(--border-hairline)" }} />
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, height: 1, width: visible ? 40 : 0, background: "var(--orange-600)", transition: "width var(--dur-4) var(--ease-out-expo)" }} />
      <span style={{ font: "var(--type-mono)", fontSize: "var(--text-caption)", letterSpacing: "var(--tracking-label)", color: "var(--text-accent)" }}>{index}</span>
      <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-body-lg)", color: inverse ? "var(--text-inverse)" : "var(--text-primary)" }}>{title}</h3>
      <p style={{ font: "var(--type-body-sm)", color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)" }}>{body}</p>
    </div>
  );
}
