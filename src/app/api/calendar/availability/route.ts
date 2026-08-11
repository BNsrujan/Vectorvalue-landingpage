import { calendarErrorMessage, getAvailability } from "@/lib/googleCalendar";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const days = Math.min(31, Math.max(1, Number(new URL(request.url).searchParams.get("days") || 14)));
    return Response.json(await getAvailability(days));
  } catch (error) {
    return Response.json({ error: calendarErrorMessage(error) }, { status: 503 });
  }
}