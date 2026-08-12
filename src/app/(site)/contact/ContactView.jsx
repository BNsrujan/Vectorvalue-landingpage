"use client";

import React from "react";
import { Button } from "@/components/core/Button.jsx";
import { Input } from "@/components/forms/Input.jsx";
import { Select } from "@/components/forms/Select.jsx";
import { Textarea } from "@/components/forms/Textarea.jsx";
import { Checkbox } from "@/components/forms/Checkbox.jsx";
import { FileUpload } from "@/components/forms/FileUpload.jsx";
import { Icon } from "@/components/core/Icon.jsx";
import { Tag } from "@/components/core/Tag.jsx";
import { Container, Section, Annotation, PageHero, CTABand, FAQBlock } from "@/components/site-components.tsx";
import { companyConfig, faqs } from "@/lib/siteData.ts";
import { contactFormSchema } from "@/lib/validation";

function ContactForm() {
  const [status, setStatus] = React.useState("idle");
  const [errors, setErrors] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState("Check the highlighted fields and try again.");
  const [values, setValues] = React.useState({ name: "", company: "", email: "", country: "", service: "" });
  const [attachmentNames, setAttachmentNames] = React.useState([]);
  const setValue = (key) => (event) => setValues({ ...values, [key]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      ...values,
      phone: form.get("phone") || undefined,
      projectType: form.get("projectType") || undefined,
      stage: form.get("stage") || undefined,
      message: form.get("message") || undefined,
      consent: form.get("consent") === "on",
      attachmentNames,
    };

    const result = contactFormSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([key, messages]) => [key, messages?.[0]])));
      setErrorMessage("Check the highlighted fields and try again.");
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (response.status === 503) {
        setErrorMessage(`We couldn't send this automatically right now. Please email ${companyConfig.email} directly.`);
        setStatus("error");
        return;
      }
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "The enquiry could not be sent");
      setStatus("success");
    } catch (requestError) {
      setErrorMessage(requestError.message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ padding: "var(--space-12)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", borderTop: "2px solid var(--orange-600)", display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "flex-start" }}>
        <span style={{ color: "var(--status-success)" }}><Icon name="check-circle" size={32} /></span>
        <h3 style={{ font: "var(--type-h3)" }}>Enquiry received.</h3>
        <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "44ch" }}>
          An engineer will review the scope and respond within {companyConfig.responseWindow}. If drawings were attached, we will confirm what we can measure from them.
        </p>
        <Button variant="outline" onClick={() => { setStatus("idle"); setValues({ name: "", company: "", email: "", country: "", service: "" }); setAttachmentNames([]); }}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{ padding: "var(--space-10)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-6)" }}>
      <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
        <h2 style={{ font: "var(--type-h3)" }}>Project enquiry</h2>
        <Annotation>All fields marked * required</Annotation>
      </div>
      <Input label="Full Name" name="fullname" required value={values.name} onChange={setValue("name")} error={errors.name} placeholder="Jane Okafor" />
      <Input label="Company Name" name="company" required value={values.company} onChange={setValue("company")} error={errors.company} placeholder="Northbridge Engineering" />
      <Input label="Work Email" name="email" type="email" required value={values.email} onChange={setValue("email")} error={errors.email} placeholder="jane@company.com" />
      <Input label="Country" name="country" required value={values.country} onChange={setValue("country")} error={errors.country} placeholder="United Kingdom" />
      <Input label="Phone Number" name="phone" type="tel" hint="Include country code" />
      <Select label="Project Type" name="projectType" options={["Commercial Building", "Residential Development", "Industrial Facility", "Infrastructure / Civils", "Site Development", "Other"]} placeholder="Select project type" />
      <Select label="Service Required" name="service" required options={["Civil Engineering", "Structural Engineering", "Ground Engineering", "Quantity & Cost Estimation", "Infrastructure Engineering", "Technical Documentation", "Other"]} value={values.service} onChange={setValue("service")} error={errors.service} placeholder="Select a service" />
      <Select label="Estimated Project Stage" name="stage" options={["Feasibility", "Concept Design", "Detailed Design", "Tender / Bid", "Pre-Construction", "Ongoing Project"]} placeholder="Select stage" />
      <Textarea style={{ gridColumn: "1 / -1" }} label="Message / Project Requirements" name="message" rows={5} placeholder="Scope, drawings available, measurement standard, target dates…" />
      <FileUpload style={{ gridColumn: "1 / -1" }} accept=".pdf,.dwg,.dxf,.xlsx,.zip" onFiles={(files) => setAttachmentNames(files.map((f) => f.name))} />
      <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        <Checkbox name="consent" required label="I agree that VectorValue may store this enquiry and contact me about it. Details are used only to respond to this request and are not shared with third parties." />
        {status === "error" ? (
          <p role="alert" style={{ display: "flex", alignItems: "center", gap: 8, font: "var(--type-body-sm)", color: "var(--status-error)" }}>
            <Icon name="alert-circle" size={16} /> {errorMessage}
          </p>
        ) : null}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", flexWrap: "wrap" }}>
          <Button type="submit" variant="primary" size="lg" withArrow disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Project Enquiry"}
          </Button>
          <Annotation>Submissions are handled server-side · no credentials in the browser</Annotation>
        </div>
      </div>
    </form>
  );
}

export function ContactView() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Discuss your next engineering requirement with our team."
        lead="Estimation, quantity take-offs, foundation and structural design, technical documentation or project support — tell us what stage you are at."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        meta={[{ label: "Response", value: `Within ${companyConfig.responseWindow}` }, { label: "Working language", value: "English" }]}
      />
      <Section tone="subtle">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-12)", alignItems: "start" }}>
            <ContactForm />
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              {[
                { icon: "calendar", title: "Book a technical call", body: "Speak with an engineer about scope, method and deliverables.", action: "Book a Call", href: "/book-a-call" },
                { icon: "mail", title: "Email", body: companyConfig.email, action: null },
                { icon: "phone", title: "Phone", body: companyConfig.phone, action: null },
                { icon: "linkedin", title: "LinkedIn", body: companyConfig.linkedin, action: null },
              ].map((channel) => (
                <div key={channel.title} style={{ display: "flex", gap: "var(--space-4)", paddingBottom: "var(--space-6)", borderBottom: "1px solid var(--border-default)" }}>
                  <span style={{ color: "var(--text-accent)", marginTop: 2 }}><Icon name={channel.icon} size={20} /></span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ font: "var(--type-h4)", fontSize: "var(--text-body)" }}>{channel.title}</span>
                    <span style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{channel.body}</span>
                    {channel.action ? (
                      <Button variant="link" withArrow href={channel.href}>{channel.action}</Button>
                    ) : null}
                  </div>
                </div>
              ))}
              <div style={{ padding: "var(--space-6)", background: "var(--ink-800)", color: "var(--text-inverse)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <Annotation tone="dark">Scope note</Annotation>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-inverse-secondary)" }}>
                  VectorValue provides engineering, estimation and documentation services only. We do not carry out or tender for construction, installation, piling or other ground engineering execution work.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {["Drawings welcome", "NDA on request", "Files handled server-side"].map((tag) => (
                  <Tag key={tag} mono>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <FAQBlock items={faqs.slice(2)} tone="paper" title="Before you send an enquiry" />
      <CTABand tone="subtle" />
    </main>
  );
}
