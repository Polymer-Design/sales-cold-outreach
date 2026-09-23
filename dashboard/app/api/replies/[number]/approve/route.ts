import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getBookingReplyPR, approvePR } from "@/lib/github";

// This IS the approval CLAUDE.md's hard rule requires ("a human merges the approval
// PR") - just clicked here instead of on GitHub's own PR screen. getBookingReplyPR
// re-validates the PR matches the booking-reply convention before merging anything,
// so this endpoint can never be used to merge an arbitrary open PR by number.
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
    await approvePR(pr.number, token);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Approve failed." },
      { status: 502 }
    );
  }
}
