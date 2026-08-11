import React from "react";

/* House scroll reveal: 24px fade-up, 560ms, ease-out-expo. Honours prefers-reduced-motion. */
export function ScrollReveal({ children, delay = 0, from = "up", as = "div", style, ...rest }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVisible(true); return; }
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const offsets = { up: "translateY(var(--reveal-offset))", left: "translateX(calc(var(--reveal-offset) * -1))", right: "translateX(var(--reveal-offset))", none: "none" };
  const Tag = as;
  return (
    <Tag
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offsets[from],
        transition: "var(--transition-reveal)", transitionDelay: delay + "ms",
        willChange: "opacity, transform", ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
