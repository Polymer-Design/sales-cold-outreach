import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { dispatchCallBooked } from "@/lib/github";

// Manual fallback for the "Log a booked call" button - fires the same
// repository_dispatch the Cal.com webhook (app/api/webhooks/cal) fires automatically.
// Useful if the webhook is down, misconfigured, or the booking happened somewhere else.
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const token = process.env.GITHUB_DISPATCH_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_DISPATCH_TOKEN isn't set on the server - see dashboard/README.md." },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    icp?: string;
    appointment_time?: string;
    org_name?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, icp, appointment_time, org_name } = body;
  if (!name?.trim() || !email?.trim() || !appointment_time?.trim()) {
    return NextResponse.json(
      { error: "Contact name, email, and appointment time are required." },
      { status: 400 }
    );
  }
  if (icp !== "startups" && icp !== "churches") {
    return NextResponse.json({ error: "ICP must be startups or churches." }, { status: 400 });
  }

  try {
    await dispatchCallBooked(
      {
        name: name.trim(),
        email: email.trim(),
        icp,
        appointment_time: appointment_time.trim(),
        org_name: org_name?.trim(),
        source: "dashboard manual form",
      },
      token
    );
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Dispatch failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
