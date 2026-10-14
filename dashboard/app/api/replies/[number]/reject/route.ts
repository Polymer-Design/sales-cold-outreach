import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getBookingReplyPR, rejectPR } from "@/lib/github";

// Discard a drafted reply without sending it (bot/autoresponder replies, spam, etc).
// getBookingReplyPR re-validates the PR matches the booking-reply convention first, so
// this can never be used to close an arbitrary open PR by number.
export async function POST(req: Request, ctx: { params: Promise<{ number: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const token = process.env.GITHUB_DISPATCH_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_DISPATCH_TOKEN isn't set on the server - see dashboard/README.md." },
      { status: 500 }
    );
  }

  const { number } = await ctx.params;
  const prNumber = Number(number);
  if (!Number.isInteger(prNumber)) {
    return NextResponse.json({ error: "Bad PR number." }, { status: 400 });
  }

  try {
    const pr = await getBookingReplyPR(prNumber, token);
    await rejectPR(pr.number, pr.head.ref, token);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Remove failed." },
      { status: 502 }
    );
  }
}
