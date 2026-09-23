import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { dispatchCallBooked } from "@/lib/github";

// Cal.com's native webhook, no Zapier/Make relay needed - Settings -> Developer ->
// Webhooks in Cal.com, pointed at this URL, "Booking Created" trigger only, with a
// secret matching CAL_WEBHOOK_SECRET below. Cal.com signs the raw request body with
// that secret (HMAC-SHA256, hex) in the x-cal-signature-256 header.
//
// Slug -> ICP is hardcoded to the two real event types (see config/system.yaml
// booking.links) rather than guessed from anything in the payload.
const SLUG_TO_ICP: Record<string, "startups" | "churches"> = {
  intro: "startups",
  "church-website-intro-call": "churches",
};

function verifySignature(rawBody: string, signature: string | null, secret: string): boolean {
  if (!signature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

// Cal.com's UTM tracking metadata has moved between a couple of shapes across API
// versions - check the plausible spots rather than betting on exactly one.
function extractUtmSource(payload: Record<string, unknown>): string | undefined {
  const tracking = (payload.tracking ?? payload.metadata) as Record<string, unknown> | undefined;
  const val = tracking?.utmSource ?? tracking?.utm_source;
  return typeof val === "string" ? val : undefined;
}

export async function POST(req: Request) {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  const token = process.env.GITHUB_DISPATCH_TOKEN;
  if (!secret || !token) {
    console.error("CAL_WEBHOOK_SECRET or GITHUB_DISPATCH_TOKEN not set - dropping webhook.");
    // 200 so Cal.com doesn't hammer retries over a config problem only we can fix.
    return NextResponse.json({ ok: false, error: "not configured" }, { status: 200 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-cal-signature-256");
  if (!verifySignature(rawBody, signature, secret)) {
    console.error("Cal.com webhook: bad signature.");
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let event: { triggerEvent?: string; payload?: Record<string, unknown> };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (event.triggerEvent !== "BOOKING_CREATED") {
    // We only asked Cal.com to send this trigger, but ignore anything else cleanly.
    return NextResponse.json({ ok: true, ignored: event.triggerEvent ?? "unknown" });
  }

  const payload = event.payload ?? {};
  const slug =
    (payload.type as string | undefined) ??
    ((payload.eventType as Record<string, unknown> | undefined)?.slug as string | undefined);
  const icp = slug ? SLUG_TO_ICP[slug] : undefined;
  if (!icp) {
    console.error(`Cal.com webhook: unrecognized event-type slug "${slug}" - not dispatching.`);
    return NextResponse.json({ error: `Unrecognized event type: ${slug}` }, { status: 400 });
  }

  const attendees = (payload.attendees as { name?: string; email?: string }[] | undefined) ?? [];
  const attendee = attendees[0];
  const startTime = payload.startTime as string | undefined;
  if (!attendee?.email || !startTime) {
    console.error("Cal.com webhook: missing attendee or startTime.", JSON.stringify(payload));
    return NextResponse.json({ error: "Missing attendee or startTime in payload." }, { status: 400 });
  }

  // Best-effort org name from a custom booking question, if one exists on this event
  // type - not all of them have one, so this is allowed to come up empty.
  const responses = payload.responses as Record<string, { value?: string }> | undefined;
  const orgName =
    responses?.company?.value ?? responses?.organization?.value ?? responses?.churchName?.value;

  try {
    await dispatchCallBooked(
      {
        name: attendee.name ?? attendee.email,
        email: attendee.email,
        icp,
        appointment_time: startTime,
        org_name: orgName,
        source: `cal.com webhook${extractUtmSource(payload) ? ` (${extractUtmSource(payload)})` : ""}`,
      },
      token
    );
  } catch (err) {
    console.error("Cal.com webhook: dispatch failed.", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Dispatch failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
