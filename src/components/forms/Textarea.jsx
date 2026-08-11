import React from "react";

export function Textarea({ label, name, value, defaultValue, onChange, placeholder, rows = 5, required = false, error, hint, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const id = name || label;
  const borderColor = error ? "var(--status-error)" : focus ? "var(--orange-600)" : "var(--border-default)";
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {label ? (
        <label htmlFor={id} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-secondary)" }}>
          {label}{required ? <span style={{ color: "var(--text-accent)" }}>*</span> : null}
        </label>
      ) : null}
      <textarea
        id={id} name={name} rows={rows} value={value} defaultValue={defaultValue} onChange={onChange}
        placeholder={placeholder} required={required} disabled={disabled}
        aria-invalid={error ? "true" : undefined}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: "100%", padding: "14px 16px", resize: "vertical",
          background: disabled ? "var(--neutral-100)" : "var(--surface-page)", color: "var(--text-primary)",
          fontFamily: "var(--font-core)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-body)",
          border: "1px solid " + borderColor, borderRadius: "var(--radius-control)", outline: "none",
          boxShadow: focus && !error ? "var(--shadow-focus)" : "none", transition: "var(--transition-control)",
        }}
        {...rest}
      />
      {error || hint ? (
        <p style={{ marginTop: 6, fontFamily: "var(--font-core)", fontSize: "var(--text-caption)", color: error ? "var(--status-error)" : "var(--text-muted)" }}>{error || hint}</p>
      ) : null}
    </div>
  );
}
