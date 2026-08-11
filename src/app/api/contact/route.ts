import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: "Validation failed", fields: Object.fromEntries(
      Object.entries(result.error.flatten().fieldErrors).map(([key, messages]) => [key, messages?.[0]])
    ) }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !to) {
    return Response.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }

  const data = result.data;
  const subject = `New enquiry: ${data.service} — ${data.company}`;
  const lines = [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Country: ${data.country}`,
    `Service: ${data.service}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.projectType ? `Project type: ${data.projectType}` : null,
    data.stage ? `Project stage: ${data.stage}` : null,
    data.message ? `Message: ${data.message}` : null,
    data.attachmentNames?.length ? `Attachments (filenames only): ${data.attachmentNames.join(", ")}` : null,
  ].filter(Boolean);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_EMAIL_FROM || "VectorValue <onboarding@resend.dev>",
      to: [to],
      reply_to: data.email,
      subject,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "Email delivery failed. Please try again or email us directly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
