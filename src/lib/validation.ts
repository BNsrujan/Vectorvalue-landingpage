import { z } from "zod";

export const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Full name is required"),
  company: z.string().trim().min(1, "Company name is required"),
  email: z.string().regex(emailPattern, "Enter a valid work email"),
  country: z.string().trim().min(1, "Country is required"),
  service: z.string().min(1, "Select the service you need"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  stage: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, { message: "Consent is required" }),
  attachmentNames: z.array(z.string()).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().regex(emailPattern, "Enter a valid email address"),
  start: z.string().min(1, "Start time is required"),
  end: z.string().min(1, "End time is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  callType: z.string().optional(),
  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;
