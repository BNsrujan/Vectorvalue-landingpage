import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Drawing / document drop zone for project enquiries.
   Presentation only — files are handed to a server-side upload endpoint, never stored client-side. */
export function FileUpload({ label = "Upload drawings / documents", name = "attachments", hint = "PDF, DWG, XLSX or ZIP · up to 25 MB", accept, multiple = true, onFiles, style, ...rest }) {
  const [over, setOver] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const inputRef = React.useRef(null);
  const take = (list) => { const arr = Array.from(list || []); setFiles(arr); if (onFiles) onFiles(arr); };
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      <span style={{ marginBottom: 8, font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-secondary)" }}>{label}</span>
      <div
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); take(e.dataTransfer.files); }}
        onClick={() => inputRef.current && inputRef.current.click()}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inputRef.current.click(); } }}
        role="button" tabIndex={0}
        style={{
          display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", cursor: "pointer",
          border: "1px dashed " + (over ? "var(--orange-600)" : "var(--border-default)"),
          background: over ? "var(--orange-050)" : "var(--neutral-050)",
          borderRadius: "var(--radius-control)", transition: "var(--transition-control)",
        }}
      >
        <span style={{ color: over ? "var(--text-accent)" : "var(--text-secondary)", display: "flex" }}><Icon name="paperclip" size={20} /></span>
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-core)", fontSize: "var(--text-body-sm)", fontWeight: 600, color: "var(--text-primary)" }}>
            {files.length ? files.length + " file" + (files.length > 1 ? "s" : "") + " attached" : "Drop files here or browse"}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-mono)", color: "var(--text-muted)" }}>{hint}</span>
        </span>
        <input ref={inputRef} type="file" name={name} accept={accept} multiple={multiple} onChange={(e) => take(e.target.files)} style={{ display: "none" }} {...rest} />
      </div>
    </div>
  );
}
