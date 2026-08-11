const { Button, Eyebrow, Input, Select, Textarea, Checkbox, FileUpload, Icon, Tag, ScrollReveal } = window.VectorValueDesignSystem_16e0ef;
const { Container, Section, Annotation, PageHero, CTABand, FAQBlock } = window;

const SERVICES = ["Civil Engineering", "Structural Engineering", "Foundation Engineering", "Quantity & Cost Estimation", "Infrastructure Engineering", "Technical Documentation", "Other"];
const STAGES = ["Feasibility", "Concept design", "Detailed design", "Tender / bid", "Pre-construction", "Ongoing project"];
const PROJECT_TYPES = ["Commercial building", "Residential development", "Industrial facility", "Infrastructure / civils", "Site development", "Other"];

function ContactForm() {
  const [status, setStatus] = React.useState("idle");
  const [errors, setErrors] = React.useState({});
  const [values, setValues] = React.useState({ name: "", company: "", email: "", country: "", service: "" });
  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = "Full name is required";
    if (!values.company.trim()) next.company = "Company name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) next.email = "Enter a valid work email";
    if (!values.country.trim()) next.country = "Country is required";
    if (!values.service) next.service = "Select the service you need";
    setErrors(next);
    if (Object.keys(next).length) { setStatus("error"); return; }
    setStatus("submitting");
    /* Production: POST to a server-side endpoint that validates, rate-limits and forwards
       to email/CRM. No API keys in the client. */
    setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <div style={{ padding: "var(--space-12)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", borderTop: "2px solid var(--orange-600)", display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "flex-start" }}>
        <span style={{ color: "var(--status-success)" }}><Icon name="check-circle" size={32} /></span>
        <h3 style={{ font: "var(--type-h3)" }}>Enquiry received.</h3>
        <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "44ch" }}>
          An engineer will review the scope and respond within {window.companyConfig.responseWindow}. If drawings were attached, we will confirm what we can measure from them.
        </p>
        <Button variant="outline" onClick={() => { setStatus("idle"); setValues({ name: "", company: "", email: "", country: "", service: "" }); }}>Send another enquiry</Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{ padding: "var(--space-10)", background: "var(--surface-page)", border: "1px solid var(--border-hairline)", display: "grid", gridTemplateColumns: "var(--cols-2)", gap: "var(--space-6)" }}>
      <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
        <h2 style={{ font: "var(--type-h3)" }}>Project enquiry</h2>
        <Annotation>All fields marked * required</Annotation>
      </div>
      <Input label="Full Name" name="fullname" required value={values.name} onChange={set("name")} error={errors.name} placeholder="Jane Okafor" />
      <Input label="Company Name" name="company" required value={values.company} onChange={set("company")} error={errors.company} placeholder="Northbridge Engineering" />
      <Input label="Work Email" name="email" type="email" required value={values.email} onChange={set("email")} error={errors.email} placeholder="jane@company.com" />
      <Input label="Country" name="country" required value={values.country} onChange={set("country")} error={errors.country} placeholder="United Kingdom" />
      <Input label="Phone Number" name="phone" type="tel" hint="Include country code" />
      <Select label="Project Type" name="projectType" options={PROJECT_TYPES} placeholder="Select project type" />
      <Select label="Service Required" name="service" required options={SERVICES} value={values.service} onChange={set("service")} error={errors.service} placeholder="Select a service" />
      <Select label="Estimated Project Stage" name="stage" options={STAGES} placeholder="Select stage" />
      <Textarea style={{ gridColumn: "1 / -1" }} label="Message / Project Requirements" name="message" rows={5} placeholder="Scope, drawings available, measurement standard, target dates…" />
      <FileUpload style={{ gridColumn: "1 / -1" }} accept=".pdf,.dwg,.dxf,.xlsx,.zip" />
      <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        <Checkbox name="consent" required label="I agree that VectorValue may store this enquiry and contact me about it. Details are used only to respond to this request and are not shared with third parties." />
        {status === "error" ? (
          <p role="alert" style={{ display: "flex", alignItems: "center", gap: 8, font: "var(--type-body-sm)", color: "var(--status-error)" }}>
            <Icon name="alert-circle" size={16} /> Check the highlighted fields and try again.
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

function ContactScreen({ go }) {
  const c = window.companyConfig;
  const channels = [
    { icon: "calendar", title: "Book a technical call", body: "Speak with an engineer about scope, method and deliverables.", action: "Book a Call", href: "/book-a-call" },
    { icon: "mail", title: "Email", body: c.email, action: null },
    { icon: "phone", title: "Phone", body: c.phone, action: null },
    { icon: "linkedin", title: "LinkedIn", body: c.linkedin, action: null },
  ];
  return (
    <main>
      <PageHero eyebrow="Contact" go={go}
        title="Let's discuss your next engineering requirement."
        lead="Estimation, quantity take-offs, foundation and structural design, technical documentation or project support — tell us what stage you are at."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        meta={[{ label: "Response", value: "Within " + c.responseWindow }, { label: "Working language", value: "English" }]}
      />
      <Section tone="subtle">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-12)", alignItems: "start" }}>
            <ContactForm />
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              {channels.map((ch) => (
                <div key={ch.title} style={{ display: "flex", gap: "var(--space-4)", paddingBottom: "var(--space-6)", borderBottom: "1px solid var(--border-default)" }}>
                  <span style={{ color: "var(--text-accent)", marginTop: 2 }}><Icon name={ch.icon} size={20} /></span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ font: "var(--type-h4)", fontSize: "var(--text-body)" }}>{ch.title}</span>
                    <span style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{ch.body}</span>
                    {ch.action ? <Button variant="link" withArrow href={ch.href} onClick={(e) => { e.preventDefault(); go(ch.href); }}>{ch.action}</Button> : null}
                  </div>
                </div>
              ))}
              <div style={{ padding: "var(--space-6)", background: "var(--ink-800)", color: "var(--text-inverse)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <Annotation tone="dark">Scope note</Annotation>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-inverse-secondary)" }}>
                  VectorValue delivers engineering, estimation and documentation services. We do not tender for construction, installation or piling execution.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {["Drawings welcome", "NDA on request", "Files handled server-side"].map((t) => <Tag key={t} mono>{t}</Tag>)}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <FAQBlock items={window.faqs.slice(2)} tone="paper" title="Before you send an enquiry" />
      <CTABand go={go} tone="subtle" />
    </main>
  );
}

function BookACallScreen({ go }) {
  const c = window.companyConfig;
  const configured = c.calendlyUrl.indexOf("YOUR_") !== 0;
  const steps = [
    { title: "Pick a time", body: "Choose a slot that suits your time zone. 30 minutes is usually enough to scope the work." },
    { title: "Share what you have", body: "Drawings, a scope note or a tender pack — whatever exists. Nothing is required in advance." },
    { title: "Talk to an engineer", body: "You will speak with someone who will work on the deliverable, not a sales desk." },
    { title: "Get a written follow-up", body: "A short note covering scope, assumptions, deliverables and indicative timing." },
  ];
  return (
    <main>
      <PageHero eyebrow="Book a Call" go={go}
        title="Book a conversation with VectorValue."
        lead="Choose a suitable time to discuss your project requirements, engineering scope, estimation needs or design requirements."
        crumbs={[{ label: "Home", href: "/" }, { label: "Book a Call" }]}
        meta={[{ label: "Duration", value: "30 minutes" }, { label: "Format", value: "Video or phone" }, { label: "Cost", value: "No charge" }]}
      />
      <Section tone="subtle">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "var(--split)", gap: "var(--space-12)", alignItems: "start" }}>
            <div style={{ background: "var(--surface-page)", border: "1px solid var(--border-hairline)", minHeight: 540, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-5) var(--space-6)", borderBottom: "1px solid var(--border-hairline)" }}>
                <span style={{ font: "var(--type-h4)", fontSize: "var(--text-body)" }}>Select a time</span>
                <Tag mono>{c.schedulingProvider}</Tag>
              </div>
              {configured ? (
                <iframe title="Scheduling" src={c.schedulingProvider === "calcom" ? c.calcomUrl : c.calendlyUrl} style={{ flex: 1, width: "100%", border: 0 }} />
              ) : (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-5)", padding: "var(--space-12)", textAlign: "center", backgroundImage: "var(--pattern-blueprint)", backgroundSize: "var(--grid-size) var(--grid-size)" }}>
                  <span style={{ color: "var(--text-muted)" }}><Icon name="calendar-clock" size={34} /></span>
                  <p style={{ font: "var(--type-body-lg)", color: "var(--text-secondary)", maxWidth: "40ch" }}>
                    Scheduling embed mounts here. The provider is configurable — Calendly, Cal.com, Google Calendar or Outlook.
                  </p>
                  <Annotation>Set VITE_CALENDLY_URL or VITE_CALCOM_URL · never hardcode credentials</Annotation>
                  <Button variant="outline" withArrow href="/contact" onClick={(e) => { e.preventDefault(); go("/contact"); }}>Send an enquiry instead</Button>
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <Eyebrow>What to expect</Eyebrow>
                {steps.map((s, i) => (
                  <div key={s.title} style={{ display: "flex", gap: "var(--space-4)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--border-default)" }}>
                    <Annotation style={{ minWidth: 22, color: "var(--text-accent)" }}>{String(i + 1).padStart(2, "0")}</Annotation>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ font: "var(--type-h4)", fontSize: "var(--text-body)" }}>{s.title}</span>
                      <span style={{ font: "var(--type-body-sm)", fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{s.body}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "var(--space-6)", background: "var(--ink-800)", color: "var(--text-inverse)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <Annotation tone="dark">After you book</Annotation>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-inverse-secondary)" }}>
                  You receive a calendar confirmation immediately. Internally the booking is routed to the engineer who will take the call, so the conversation starts with your project rather than an introduction.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <CTABand go={go} title="Prefer to write it down first?" body="Send the scope through the enquiry form and we will come back with questions before the call." />
    </main>
  );
}

Object.assign(window, { ContactScreen, BookACallScreen });
