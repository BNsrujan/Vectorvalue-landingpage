const CALENDAR_API = "https://www.googleapis.com/calendar/v3";

type AvailabilityWindow = { start: number; end: number };
type Slot = { start: string; end: string; label: string };

const defaultAvailability: Record<number, AvailabilityWindow[]> = {
  1: [{ start: 9, end: 17 }],
  2: [{ start: 9, end: 17 }],
  3: [{ start: 9, end: 17 }],
  4: [{ start: 9, end: 17 }],
  5: [{ start: 9, end: 17 }],
};

function config() {
  const required = ["GOOGLE_OAUTH_CLIENT_ID", "GOOGLE_OAUTH_SECRET", "GOOGLE_OAUTH_REFRESH"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) throw new Error(`Missing Google Calendar configuration: ${missing.join(", ")}`);
  return {
    calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
    timezone: process.env.OWNER_TIMEZONE || "UTC",
    duration: Number(process.env.CALL_DURATION_MINUTES || 30),
    padding: Number(process.env.CALL_SLOT_PADDING_MINUTES || 15),
    availability: parseAvailability(process.env.OWNER_AVAILABILITY_JSON),
  };
}

function parseAvailability(value?: string): Record<number, AvailabilityWindow[]> {
  if (!value) return defaultAvailability;
  try {
    const parsed = JSON.parse(value);
    return Object.fromEntries(Object.entries(parsed).map(([day, windows]) => [Number(day), windows])) as Record<number, AvailabilityWindow[]>;
  } catch {
    throw new Error("OWNER_AVAILABILITY_JSON must be valid JSON");
  }
}

async function getAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      client_secret: process.env.GOOGLE_OAUTH_SECRET || "",
      refresh_token: process.env.GOOGLE_OAUTH_REFRESH || "",
    }),
    cache: "no-store",
  });
  const body = await response.json();
  if (!response.ok || !body.access_token) throw new Error(body.error_description || "Unable to obtain Google access token");
  return body.access_token as string;
}

function parts(date: Date, timezone: string) {
  const values = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
  }).formatToParts(date).reduce<Record<string, string>>((result, item) => {
    if (item.type !== "literal") result[item.type] = item.value;
    return result;
  }, {});
  return values;
}

function localToUtc(local: string, timezone: string) {
  const [date, time] = local.split("T");
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const naive = Date.UTC(year, month - 1, day, hour, minute);
  let result = naive;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const current = parts(new Date(result), timezone);
    const represented = Date.UTC(Number(current.year), Number(current.month) - 1, Number(current.day), Number(current.hour), Number(current.minute), Number(current.second));
    result += naive - represented;
  }
  return new Date(result);
}

function dateKey(date: Date, timezone: string) {
  const value = parts(date, timezone);
  return `${value.year}-${value.month}-${value.day}`;
}

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function localDateKey(date: Date, timezone: string, offset: number) {
  return dateKey(addDays(date, offset), timezone);
}

function localWeekday(dateKeyValue: string, timezone: string) {
  const utc = localToUtc(`${dateKeyValue}T12:00`, timezone);
  return Number(new Intl.DateTimeFormat("en-US", { timeZone: timezone, weekday: "short" }).format(utc) === "Sun" ? 0 : new Intl.DateTimeFormat("en-US", { timeZone: timezone, weekday: "short" }).format(utc) === "Mon" ? 1 : new Intl.DateTimeFormat("en-US", { timeZone: timezone, weekday: "short" }).format(utc) === "Tue" ? 2 : new Intl.DateTimeFormat("en-US", { timeZone: timezone, weekday: "short" }).format(utc) === "Wed" ? 3 : new Intl.DateTimeFormat("en-US", { timeZone: timezone, weekday: "short" }).format(utc) === "Thu" ? 4 : new Intl.DateTimeFormat("en-US", { timeZone: timezone, weekday: "short" }).format(utc) === "Fri" ? 5 : 6);
}

function localLabel(utc: Date, timezone: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone: timezone, weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(utc);
}

async function googleRequest(path: string, init: RequestInit = {}) {
  const token = await getAccessToken();
  const response = await fetch(`${CALENDAR_API}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...(init.headers || {}) },
    cache: "no-store",
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error?.message || "Google Calendar request failed");
  return body;
}

export async function getAvailability(days = 14) {
  const settings = config();
  const now = new Date();
  const end = addDays(now, days);
  const busyResponse = await googleRequest(`/freeBusy`, {
    method: "POST",
    body: JSON.stringify({ timeMin: now.toISOString(), timeMax: end.toISOString(), timeZone: settings.timezone, items: [{ id: settings.calendarId }] }),
  });
  const busy = (busyResponse.calendars?.[settings.calendarId]?.busy || []).map((item: { start: string; end: string }) => ({ start: new Date(item.start).getTime() - settings.padding * 60_000, end: new Date(item.end).getTime() + settings.padding * 60_000 }));
  const dates: Array<{ date: string; label: string; slots: Slot[] }> = [];
  for (let offset = 1; offset <= days; offset += 1) {
    const key = localDateKey(now, settings.timezone, offset);
    const windows = settings.availability[localWeekday(key, settings.timezone)] || [];
    const slots: Slot[] = [];
    for (const window of windows) {
      for (let minutes = window.start * 60; minutes + settings.duration <= window.end * 60; minutes += settings.duration) {
        const hour = String(Math.floor(minutes / 60)).padStart(2, "0");
        const minute = String(minutes % 60).padStart(2, "0");
        const nextMinutes = minutes + settings.duration;
        const endHour = String(Math.floor(nextMinutes / 60)).padStart(2, "0");
        const endMinute = String(nextMinutes % 60).padStart(2, "0");
        const start = localToUtc(`${key}T${hour}:${minute}`, settings.timezone);
        const finish = localToUtc(`${key}T${endHour}:${endMinute}`, settings.timezone);
        if (!busy.some((period: { start: number; end: number }) => start.getTime() < period.end && finish.getTime() > period.start)) slots.push({ start: start.toISOString(), end: finish.toISOString(), label: localLabel(start, settings.timezone) });
      }
    }
    dates.push({ date: key, label: new Intl.DateTimeFormat("en-US", { timeZone: settings.timezone, weekday: "long", month: "short", day: "numeric" }).format(localToUtc(`${key}T12:00`, settings.timezone)), slots });
  }
  return { timezone: settings.timezone, duration: settings.duration, dates };
}

export async function createBooking(input: { name: string; email: string; company?: string; phone?: string; callType?: string; message?: string; start: string; end: string }) {
  const settings = config();
  const event = await googleRequest(`/calendars/${encodeURIComponent(settings.calendarId)}/events?sendUpdates=all`, {
    method: "POST",
    body: JSON.stringify({
      summary: `${input.callType || "Technical"} call · ${input.name}`,
      description: [`Contact: ${input.name}`, `Company: ${input.company || "Not provided"}`, `Phone: ${input.phone || "Not provided"}`, `Call type: ${input.callType || "Technical briefing"}`, "", input.message || "No project note provided."].join("\n"),
      start: { dateTime: input.start, timeZone: settings.timezone },
      end: { dateTime: input.end, timeZone: settings.timezone },
      attendees: [{ email: input.email }],
    }),
  });
  return { id: event.id, htmlLink: event.htmlLink };
}

export function calendarErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Calendar service unavailable";
}