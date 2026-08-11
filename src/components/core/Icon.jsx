import React from "react";

/* Lucide icon wrapper. Requires the Lucide UMD script on the host page:
   <script src="https://unpkg.com/lucide@0.462.0/dist/umd/lucide.min.js"></script>
   Renders at currentColor with a 1.5 stroke — the VectorValue technical line weight. */
export function Icon({ name, size = 20, strokeWidth = 1.5, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let tries = 0, timer = null, alive = true;
    const paint = () => {
      if (!alive || !ref.current) return;
      if (!window.lucide || !window.lucide.createIcons) {
        if (tries++ < 40) timer = setTimeout(paint, 120);
        return;
      }
      ref.current.innerHTML = '<i data-lucide="' + name + '"></i>';
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": strokeWidth, "aria-hidden": "true" },
      });
    };
    paint();
    return () => { alive = false; if (timer) clearTimeout(timer); };
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: "inline-flex", width: size, height: size, flex: "0 0 auto", color: "inherit", ...style }}
      {...rest}
    />
  );
}
