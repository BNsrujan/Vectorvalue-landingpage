import React from "react";

/* Scroll-controlled video. The clip is scrubbed by scroll position over a tall track
   while the frame stays pinned — no autoplaying background loop.
   Falls back to a muted looping autoplay where frame-seeking is impractical
   (touch devices, reduced-motion, missing metadata). */
export function ScrollVideo({
  src, poster, height = "100vh", track = 260, children,
  scrim = "linear-gradient(180deg, rgba(15,18,25,.72) 0%, rgba(15,18,25,.30) 38%, rgba(15,18,25,.78) 100%)",
  smoothing = 0.18, style, ...rest
}) {
  const wrapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [fallback, setFallback] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (reduce || touch) { setFallback(true); return; }

    const wrap = wrapRef.current, video = videoRef.current;
    if (!wrap || !video) return;
    const scroller = wrap.closest("[data-scroll-root]");
    const target = scroller || window;
    let raf = 0, desired = 0, current = 0, alive = true;

    const compute = () => {
      const rect = wrap.getBoundingClientRect();
      const viewH = scroller ? scroller.clientHeight : window.innerHeight;
      const total = rect.height - viewH;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setProgress(p);
      const dur = video.duration;
      if (dur && isFinite(dur)) desired = p * (dur - 0.05);
    };
    let applied = -1;
    const tick = () => {
      if (!alive) return;
      current += (desired - current) * smoothing;
      if (Math.abs(desired - current) < 0.004) current = desired;
      if (video.readyState >= 2 && isFinite(current) && Math.abs(current - applied) > 0.016) {
        applied = current;
        try { if (video.fastSeek) video.fastSeek(current); else video.currentTime = current; } catch (e) { setFallback(true); }
      }
      raf = requestAnimationFrame(tick);
    };
    const onScroll = () => compute();
    const onMeta = () => {
      compute();
      /* prime the decoder so the first scrub is not a cold seek */
      const p = video.play();
      if (p && p.then) p.then(() => video.pause()).catch(() => {});
      else { try { video.pause(); } catch (e) {} }
    };

    video.addEventListener("loadedmetadata", onMeta);
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();
    raf = requestAnimationFrame(tick);
    return () => {
      alive = false; cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [smoothing]);

  return (
    <div ref={wrapRef} style={{ position: "relative", height: fallback ? height : "calc(" + track + "vh)", ...style }} {...rest}>
      <div style={{ position: "sticky", top: 0, height, overflow: "hidden", background: "var(--ink-950)" }}>
        <video
          ref={videoRef} src={src} poster={poster} muted playsInline preload="auto"
          autoPlay={fallback} loop={fallback} tabIndex={-1} aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: "translateZ(0)" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: scrim }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "var(--pattern-blueprint-dark)", backgroundSize: "var(--grid-size-lg) var(--grid-size-lg)" }} />
        <div style={{ position: "relative", height: "100%" }}>
          {typeof children === "function" ? children(progress) : children}
        </div>
      </div>
    </div>
  );
}
