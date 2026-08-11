import React from "react";
import { Input } from "./Input.jsx";
import { Select } from "./Select.jsx";
import { Textarea } from "./Textarea.jsx";
import { Checkbox } from "./Checkbox.jsx";
import { FileUpload } from "./FileUpload.jsx";
import { Button } from "../core/Button.jsx";

export function FormsCard() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px" }}>
      <Input label="Full Name" name="fullname" required placeholder="Jane Okafor" />
      <Input label="Work Email" name="email" type="email" required defaultValue="jane@northbridge.co" />
      <Input label="Company Name" name="company" required error="Company name is required" />
      <Select
        label="Service Required"
        name="service"
        required
        options={[
          "Civil Engineering",
          "Structural Engineering",
          "Foundation Engineering",
          "Quantity & Cost Estimation",
          "Infrastructure Engineering",
          "Technical Documentation",
        ]}
      />
      <Textarea
        label="Project Requirements"
        name="message"
        rows={3}
        placeholder="Scope, drawings available, target dates…"
        style={{ gridColumn: "1 / -1" }}
      />
      <FileUpload style={{ gridColumn: "1 / -1" }} />
      <Checkbox
        name="consent"
        required
        label="I agree that VectorValue may contact me about this enquiry."
        style={{ gridColumn: "1 / -1" }}
      />
      <div style={{ gridColumn: "1 / -1" }}>
        <Button variant="primary" withArrow>
          Send Project Enquiry
        </Button>
      </div>
    </div>
  );
}
