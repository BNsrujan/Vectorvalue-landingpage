"use client";

import React from "react";
import { Button } from "@/components/core/Button.jsx";
import { Icon } from "@/components/core/Icon.jsx";
import { Input } from "@/components/forms/Input.jsx";
import { Select } from "@/components/forms/Select.jsx";
import { Textarea } from "@/components/forms/Textarea.jsx";
import { Checkbox } from "@/components/forms/Checkbox.jsx";
import { Tag } from "@/components/core/Tag.jsx";
import { Container, Section, Annotation, PageHero } from "@/components/site-components.tsx";
import { companyConfig } from "@/lib/siteData";
import { emailPattern } from "@/lib/validation";

const callTypes = [
  { value: "technical", title: "Technical briefing", body: "Scope, drawings, discipline and deliverables." },
  { value: "estimate", title: "Estimate review", body: "Quantities, BOQ basis and commercial assumptions." },
  { value: "design", title: "Design discussion", body: "Structural, foundation or civil design options." },
];

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function shiftMonth(monthKey, delta) {
  const [year, month] = monthKey.split("-").map(Number);
  const total = year * 12 + (month - 1) + delta;
  const nextYear = Math.floor(total / 12);
  const nextMonth = (total % 12) + 1;
  return `${nextYear}-${String(nextMonth).padStart(2, "0")}`;
}

function formatMonthLabel(monthKey) {
  if (!monthKey) return "";
  const [year, month] = monthKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, 1)));
}

function BookingForm() {
  const [callType, setCallType] = React.useState("technical");
  const [availability, setAvailability] = React.useState(null);
  const [availabilityStatus, setAvailabilityStatus] = React.useState("loading");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [selectedSlot, setSelectedSlot] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState("");

  const fetchMonth = React.useCallback((month, selectFirstAvailable) => {
    fetch(`/api/calendar/availability${month ? `?month=${month}` : ""}`)
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "Availability is unavailable");
        return body;
      })
      .then((body) => {
        setAvailability(body);
        setAvailabilityStatus("ready");
        if (selectFirstAvailable) {
          const firstDate = body.dates.find((date) => date.slots.length);
          setSelectedDate(firstDate ? firstDate.date : "");
          setSelectedSlot(firstDate ? firstDate.slots[0] : null);
        } else {
          setSelectedDate("");
          setSelectedSlot(null);
        }
      })
      .catch((requestError) => {
        setError(requestError.message);
        setAvailabilityStatus("error");
      });
  }, []);

  const loadMonth = (month, selectFirstAvailable) => {
    setAvailabilityStatus("loading");
    fetchMonth(month, selectFirstAvailable);
  };

  React.useEffect(() => {
    fetchMonth(undefined, true);
  }, [fetchMonth]);

  const submit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    if (!name || !emailPattern.test(email) || !selectedSlot) {
      setError("Add your name, a valid work email and select an available time.");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("submitting");
    try {
      const response = await fetch("/api/calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: form.get("company"),
          phone: form.get("phone"),
          callType: callTypes.find((type) => type.value === callType)?.title,
          message: form.get("message"),
          start: selectedSlot.start,
          end: selectedSlot.end,
        }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Booking could not be created");
      setStatus("success");
    } catch (requestError) {
      setError(requestError.message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-[var(--space-5)] border border-[var(--border-hairline)] border-t-2 border-t-[var(--orange-600)] bg-[var(--surface-page)] p-[var(--space-10)]">
        <span className="text-[var(--status-success)]"><Icon name="check-circle" size={32} /></span>
        <Annotation>Request received</Annotation>
        <h2 className="[font:var(--type-h3)]">We will find a useful time.</h2>
        <p className="max-w-[44ch] [color:var(--text-secondary)] [font:var(--type-body)]">
          An engineer will review your note and reply within {companyConfig.responseWindow}. The first call is practical: we will confirm scope, inputs, next steps and whether VectorValue is the right fit.
        </p>
        <Button variant="outline" onClick={() => { setStatus("idle"); setSelectedSlot(null); }}>Send another request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="border border-[var(--border-hairline)] border-t-2 border-t-[var(--orange-600)] bg-[var(--surface-page)] p-[clamp(24px,4vw,40px)]">
      <div className="mb-[var(--space-8)] flex flex-wrap items-start justify-between gap-[var(--space-4)]">
        <div>
          <Annotation>Step 01 · Choose the conversation</Annotation>
          <h2 className="mt-2 [font:var(--type-h3)]">What would be useful?</h2>
        </div>
        <Annotation>* Required</Annotation>
      </div>

      <div className="mb-[var(--space-8)] grid gap-3">
        {callTypes.map((type) => (
          <button
            key={type.value}
            type="button"
            onClick={() => setCallType(type.value)}
            className={`flex items-start justify-between gap-4 border p-4 text-left transition-colors ${callType === type.value ? "border-[var(--orange-600)] bg-[var(--orange-050)]" : "border-[var(--border-default)] bg-[var(--surface-page)] hover:border-[var(--ink-800)]"}`}
          >
            <span className="flex flex-col gap-1">
              <span className="[font:var(--type-h4)] [font-size:var(--text-body)]">{type.title}</span>
              <span className="[color:var(--text-secondary)] [font:var(--type-body-sm)]">{type.body}</span>
            </span>
            <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${callType === type.value ? "border-[var(--orange-600)] bg-[var(--orange-600)] text-white" : "border-[var(--border-strong)]"}`}>
              {callType === type.value ? <Icon name="check" size={13} strokeWidth={3} /> : null}
            </span>
          </button>
        ))}
      </div>

      <div className="mb-[var(--space-8)] border-t border-[var(--border-hairline)] pt-[var(--space-8)]">
        <Annotation>Step 02 · Tell us where to reach you</Annotation>
        <div className="mt-5 grid gap-[var(--space-6)] md:grid-cols-2">
          <Input label="Full Name" name="name" required placeholder="Jane Okafor" />
          <Input label="Work Email" name="email" type="email" required placeholder="jane@company.com" />
          <Input label="Company" name="company" placeholder="Northbridge Engineering" />
          <Input label="Phone" name="phone" type="tel" hint="Include country code" placeholder="+44 ..." />
        </div>
      </div>

      <div className="mb-[var(--space-8)] border-t border-[var(--border-hairline)] pt-[var(--space-8)]">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div><Annotation>Step 03 · Choose a date and time</Annotation><p className="mt-2 [color:var(--text-secondary)] [font:var(--type-body-sm)]"> {availability?.timezone || "your configured timezone"} · {availability?.duration || 30} minutes</p></div>
          {availabilityStatus === "loading" ? <Annotation>Checking calendar…</Annotation> : null}
        </div>
        {availabilityStatus === "error" ? <p className="mt-5 flex items-center gap-2 text-[var(--status-error)] [font:var(--type-body-sm)]"><Icon name="alert-circle" size={16} />Calendar availability is not configured yet.</p> : null}
        {availability ? (
          <>
            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => loadMonth(shiftMonth(availability.month, -1), false)}
                disabled={availability.month === availability.currentMonthKey || availabilityStatus === "loading"}
                aria-label="Previous month"
                className="flex h-9 w-9 items-center justify-center border border-[var(--border-default)] transition-colors hover:border-[var(--ink-800)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Icon name="chevron-left" size={16} />
              </button>
              <span className="[font:var(--type-h4)] [font-size:var(--text-body)]">{formatMonthLabel(availability.month)}</span>
              <button
                type="button"
                onClick={() => loadMonth(shiftMonth(availability.month, 1), false)}
                disabled={availability.month === availability.maxMonthKey || availabilityStatus === "loading"}
                aria-label="Next month"
                className="flex h-9 w-9 items-center justify-center border border-[var(--border-default)] transition-colors hover:border-[var(--ink-800)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Icon name="chevron-right" size={16} />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1 text-center [font:var(--type-mono)] text-[10px] uppercase text-[var(--text-muted)]">
              {weekdayLabels.map((day) => <span key={day}>{day}</span>)}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1">
              {Array.from({ length: availability.dates[0]?.weekday || 0 }).map((_, index) => (
                <span key={`pad-${index}`} />
              ))}
              {availability.dates.map((date) => (
                <button
                  key={date.date}
                  type="button"
                  disabled={!date.slots.length}
                  onClick={() => { setSelectedDate(date.date); setSelectedSlot(date.slots[0] || null); }}
                  className={`aspect-square border p-1 [font:var(--type-body-sm)] transition-colors disabled:cursor-not-allowed disabled:opacity-30 ${selectedDate === date.date ? "border-[var(--orange-600)] bg-[var(--orange-050)]" : "border-[var(--border-default)] hover:border-[var(--ink-800)]"}`}
                >
                  {Number(date.date.slice(-2))}
                </button>
              ))}
            </div>
            {selectedDate ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {(availability.dates.find((date) => date.date === selectedDate)?.slots || []).map((slot) => (
                  <button key={slot.start} type="button" onClick={() => setSelectedSlot(slot)} className={`border px-4 py-3 [font:var(--type-body-sm)] transition-colors ${selectedSlot?.start === slot.start ? "border-[var(--orange-600)] bg-[var(--orange-050)] text-[var(--ink-800)]" : "border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--ink-800)]"}`}>
                    {slot.label.split(", ").slice(-1)[0]}
                  </button>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
        <div className="mt-5 grid gap-[var(--space-6)] md:grid-cols-2">
          <Select label="Preferred time zone" name="timezone" options={["UTC−08 · Pacific", "UTC−05 · Eastern", "UTC · London", "UTC+04 · Gulf", "UTC+05:30 · India", "UTC+08 · Singapore"]} placeholder="Select time zone" />
          <Select label="Project stage" name="stage" options={["Feasibility", "Concept design", "Detailed design", "Tender / bid", "Pre-construction", "Ongoing project"]} placeholder="Select stage" />
        </div>
      </div>

      <div className="border-t border-[var(--border-hairline)] pt-[var(--space-8)]">
        <Textarea label="A short note about the project" name="message" rows={4} placeholder="What are you working on, and what would you like to resolve on the call?" />
        <div className="mt-[var(--space-6)] flex flex-col gap-[var(--space-5)]">
          <Checkbox name="consent" required label="I agree that VectorValue may store this request and contact me about it." />
          {status === "error" ? <p role="alert" className="flex items-center gap-2 text-[var(--status-error)] [font:var(--type-body-sm)]"><Icon name="alert-circle" size={16} />{error}</p> : null}
          <div className="flex flex-wrap items-center gap-[var(--space-5)]">
            <Button type="submit" variant="primary" size="lg" withArrow disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Request a Call"}</Button>
            <Annotation>Typical reply · {companyConfig.responseWindow}</Annotation>
          </div>
        </div>
      </div>
    </form>
  );
}

function PreparationPanel() {
  return (
    <aside className="flex flex-col gap-[var(--space-8)]">
      <div className="border border-[var(--border-hairline)] bg-[var(--surface-page)] p-[var(--space-8)]">
        <Annotation>What happens next</Annotation>
        <div className="mt-[var(--space-6)] grid gap-6">
          {[
            ["01", "We review", "Your note, drawings and project stage are checked before the call."],
            ["02", "We talk", "A focused conversation with an engineer, not a sales desk."],
            ["03", "We clarify", "You leave with a sensible scope, inputs and next step."],
          ].map(([index, title, body]) => (
            <div key={index} className="grid grid-cols-[36px_1fr] gap-4 border-t border-[var(--border-hairline)] pt-5">
              <span className="text-[var(--orange-600)] [font:var(--type-mono)]">{index}</span>
              <div className="flex flex-col gap-2"><h3 className="[font:var(--type-h4)] [font-size:var(--text-body)]">{title}</h3><p className="[color:var(--text-secondary)] [font:var(--type-body-sm)]">{body}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="[background:var(--ink-800)] p-[var(--space-8)] text-white [background-image:var(--pattern-blueprint-dark)] [background-size:var(--grid-size-lg)_var(--grid-size-lg)]">
        <Annotation tone="dark">Bring to the call</Annotation>
        <ul className="mt-5 grid gap-3 [font:var(--type-body-sm)] text-white/75">
          <li className="flex gap-3"><Icon name="file-text" size={17} /> Drawing register or scope note</li>
          <li className="flex gap-3"><Icon name="layers" size={17} /> Project stage and target date</li>
          <li className="flex gap-3"><Icon name="ruler" size={17} /> Measurement or design standard</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-2"><Tag tone="inverse" mono>Engineering only</Tag><Tag tone="inverse" mono>Remote delivery</Tag></div>
      </div>
      <p className="border-l-2 border-[var(--orange-600)] pl-5 [color:var(--text-secondary)] [font:var(--type-body-sm)]">VectorValue does not provide construction, installation, excavation or piling execution. We help you make the engineering decision before work begins.</p>
    </aside>
  );
}

export default function BookACallPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a Call"
        title="A useful conversation starts with the right context."
        lead="Tell us what you are deciding, where the project sits and what you need from an engineer. We will come prepared."
        crumbs={[{ label: "Home", href: "/" }, { label: "Book a Call" }]}
        meta={[{ label: "Response", value: `Within ${companyConfig.responseWindow}` }, { label: "Format", value: "Remote technical call" }]}
      />
      <Section tone="subtle">
        <Container>
          <div className="grid items-start gap-[var(--space-12)] [grid-template-columns:var(--split)]">
            <BookingForm />
            <PreparationPanel />
          </div>
        </Container>
      </Section>
    </main>
  );
}