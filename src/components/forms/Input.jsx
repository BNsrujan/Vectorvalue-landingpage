import React from "react";

const labelStyle = {
  display: "flex", alignItems: "center", gap: 6, marginBottom: 8,
  font: "var(--type-label)", letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase", color: "var(--text-secondary)",
};

export function Input({
  label, name, type = "text", value, defaultValue, onChange, placeholder,
  required = false, error, hint, disabled = false, iconLeft, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = name || label;
  const borderColor = error ? "var(--status-error)" : focus ? "var(--orange-600)" : "var(--border-default)";
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {label ? (
        <label htmlFor={id} style={labelStyle}>
          {label}{required ? <span style={{ color: "var(--text-accent)" }}>*</span> : null}
        </label>
      ) : null}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <input
          id={id} name={name} type={type} value={value} defaultValue={defaultValue}
          onChange={onChange} placeholder={placeholder} required={required} disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error || hint ? id + "-msg" : undefined}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: "100%", height: "var(--control-height)",
            padding: iconLeft ? "0 16px 0 42px" : "0 16px",
            background: disabled ? "var(--neutral-100)" : "var(--surface-page)",
            color: "var(--text-primary)", fontFamily: "var(--font-core)", fontSize: "max(16px, var(--text-body-sm))",
            border: "1px solid " + borderColor, borderRadius: "var(--radius-control)",
            outline: "none", boxShadow: focus && !error ? "var(--shadow-focus)" : "none",
            transition: "var(--transition-control)",
          }}
          {...rest}
        />
      </div>
      {error || hint ? (
        <p id={id + "-msg"} style={{ marginTop: 6, font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: error ? "var(--status-error)" : "var(--text-muted)" }}>
          {error || hint}
        </p>
      ) : null}
    </div>
  );
}
