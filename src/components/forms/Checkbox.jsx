import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Square consent / filter checkbox. Used for the contact-form privacy consent. */
export function Checkbox({ label, name, checked, defaultChecked, onChange, required = false, disabled = false, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const id = name || (typeof label === "string" ? label : undefined);
  return (
    <label htmlFor={id} style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{ position: "relative", display: "inline-flex", flex: "0 0 auto", marginTop: 1 }}>
        <input
          id={id} name={name} type="checkbox" checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked} required={required} disabled={disabled}
          onChange={(e) => { if (!isControlled) setInternal(e.target.checked); if (onChange) onChange(e); }}
          style={{ position: "absolute", opacity: 0, width: 20, height: 20, margin: 0, cursor: "inherit" }}
          {...rest}
        />
        <span aria-hidden="true" style={{
          width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center",
          borderRadius: "var(--radius-1)", border: "1px solid " + (on ? "var(--orange-600)" : "var(--border-default)"),
          background: on ? "var(--orange-600)" : "var(--surface-page)", color: "var(--text-on-accent)",
          transition: "var(--transition-control)",
        }}>{on ? <Icon name="check" size={13} strokeWidth={3} /> : null}</span>
      </span>
      <span style={{ fontFamily: "var(--font-core)", fontSize: "var(--text-caption)", lineHeight: "var(--leading-body)", color: "var(--text-secondary)" }}>
        {label}{required ? <span style={{ color: "var(--text-accent)" }}> *</span> : null}
      </span>
    </label>
  );
}
