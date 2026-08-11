"use client";

export function ThumbnailPreview() {
  const stripeColors = ["#F6BC9F", "#EB5C20", "#4F5E75", "#0F1219"];

  return (
    <div
      style={{
        width: 1280,
        height: 854,
        overflow: "hidden",
        borderRadius: "32px",
        boxShadow: "0 45px 120px rgba(15, 18, 25, 0.35)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
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
              gap: 36,
            }}
          >
            <img
              src="/assets/logo/vectorvalue-mark.png"
              alt="VectorValue"
              width={250}
              height={250}
              style={{
                width: 250,
                filter: "brightness(0) invert(1)",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans, Inter, ui-sans-serif, system-ui)",
                fontWeight: 800,
                fontSize: 96,
                letterSpacing: "-0.045em",
                color: "#fff",
                lineHeight: 1,
                whiteSpace: "nowrap",
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
