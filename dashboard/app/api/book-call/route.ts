import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Fires the same GitHub repository_dispatch event Zapier posts today (see
// docs/call-prep-zapier-setup.md) - this is the manual alternative to wiring a
// Dubsado trigger, since Make has no native Dubsado module. call-prep.yml doesn't
// care which of the two fired it.
const REPO = "Polymer-Design/sales-cold-outreach";

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

  const res = await fetch(`https://api.github.com/repos/${REPO}/dispatches`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: "call_booked",
      client_payload: {
        name: name.trim(),
        email: email.trim(),
        icp,
        appointment_time: appointment_time.trim(),
        org_name: org_name?.trim() ?? "",
      },
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json(
      { error: `GitHub rejected the dispatch (${res.status}): ${detail.slice(0, 300)}` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
