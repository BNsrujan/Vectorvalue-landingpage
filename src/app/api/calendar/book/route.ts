import { calendarErrorMessage, createBooking } from "@/lib/googleCalendar";
import { emailPattern } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.email || !body.start || !body.end) return Response.json({ error: "Name, email, start and end are required" }, { status: 400 });
    if (!emailPattern.test(body.email)) return Response.json({ error: "Enter a valid email address" }, { status: 400 });
    return Response.json(await createBooking(body));
  } catch (error) {
    return Response.json({ error: calendarErrorMessage(error) }, { status: 503 });
  }
}