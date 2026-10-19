import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getHotTierPR, getPRDraftFiles, deletePRFile, rejectPR } from "@/lib/github";

// Removes ONE lead from a hot-tier batch without sending it - the lead was never going
// out at all (reject), not a "send as-is vs edit first" choice. If it's the last lead
// left in the PR, there's nothing left to merge, so the PR itself gets closed the same
// way a single-lead booking-reply reject would.
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

  let body: { path?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!body.path) {
    return NextResponse.json({ error: "path is required." }, { status: 400 });
  }

  try {
    const pr = await getHotTierPR(prNumber, token);
    const files = await getPRDraftFiles(pr, token);
    const file = files.find((f) => f.path === body.path);
    if (!file) {
      return NextResponse.json(
        { error: `${body.path} isn't part of PR #${prNumber}.` },
        { status: 404 }
      );
    }
    await deletePRFile(file.path, pr.head.ref, file.sha, token);
    if (files.length === 1) {
      // That was the only lead in this batch - nothing left to merge.
      await rejectPR(pr.number, pr.head.ref, token);
    }
    return NextResponse.json({ ok: true, prClosed: files.length === 1 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Remove failed." },
      { status: 502 }
    );
  }
}
