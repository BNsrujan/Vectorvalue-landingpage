"use client";

export function ThumbnailPreview() {
  const stripeColors = ["#F6BC9F", "#EB5C20", "#4F5E75", "#0F1219"];

  return (
    <div
      style={{
        width: "min(1280px, 100%)",
        aspectRatio: "1280 / 854",
        height: "auto",
        overflow: "hidden",
        borderRadius: "clamp(16px, 3vw, 32px)",
        boxShadow: "0 45px 120px rgba(15, 18, 25, 0.35)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr clamp(72px, 23.4375%, 300px)",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "var(--ink-800)",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "var(--pattern-blueprint-dark)",
              backgroundSize: "88px 88px",
              opacity: 0.55,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(12px, 2.8vw, 36px)",
              maxWidth: "calc(100% - 24px)",
            }}
          >
            <img
              src="/assets/logo/vectorvalue-mark.png"
              alt="VectorValue"
              width={250}
              height={250}
              style={{
                width: "clamp(96px, 19.53125vw, 250px)",
                height: "auto",
                filter: "brightness(0) invert(1)",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans, Inter, ui-sans-serif, system-ui)",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 7.5vw, 6rem)",
                letterSpacing: "-0.045em",
                color: "#fff",
                lineHeight: 1,
                whiteSpace: "nowrap",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "clip",
              }}
            >
              VectorValue
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateRows: "repeat(4, 1fr)" }}>
          {stripeColors.map((color) => (
            <div key={color} style={{ background: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}
