import { calendarErrorMessage, getAvailability } from "@/lib/googleCalendar";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const month = new URL(request.url).searchParams.get("month") || undefined;
    return Response.json(await getAvailability(month));
  } catch (error) {
    return Response.json({ error: calendarErrorMessage(error) }, { status: 503 });
  }
}