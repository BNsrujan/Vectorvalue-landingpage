import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Select({ label, name, options = [], value, defaultValue, onChange, placeholder = "Select…", required = false, error, hint, disabled = false, style, ...rest }) {
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
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select
          id={id} name={name} value={value} defaultValue={defaultValue} onChange={onChange}
          required={required} disabled={disabled} aria-invalid={error ? "true" : undefined}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: "100%", height: "var(--control-height)", padding: "0 44px 0 16px",
            appearance: "none", WebkitAppearance: "none",
            background: disabled ? "var(--neutral-100)" : "var(--surface-page)",
            color: value || defaultValue ? "var(--text-primary)" : "var(--text-muted)",
            fontFamily: "var(--font-core)", fontSize: "max(16px, var(--text-body-sm))",
            border: "1px solid " + borderColor, borderRadius: "var(--radius-control)", outline: "none",
            boxShadow: focus && !error ? "var(--shadow-focus)" : "none", transition: "var(--transition-control)",
          }}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => {
            const val = typeof o === "string" ? o : o.value;
            const lab = typeof o === "string" ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ position: "absolute", right: 14, pointerEvents: "none", color: "var(--text-secondary)", display: "flex" }}>
          <Icon name="chevron-down" size={18} />
        </span>
      </div>
      {error || hint ? (
        <p style={{ marginTop: 6, fontFamily: "var(--font-core)", fontSize: "var(--text-caption)", color: error ? "var(--status-error)" : "var(--text-muted)" }}>{error || hint}</p>
      ) : null}
    </div>
  );
}
