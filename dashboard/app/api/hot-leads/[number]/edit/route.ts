import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getHotTierPR, getPRDraftFiles, updatePRDraftFile } from "@/lib/github";
import { buildHotDraftContent } from "@/lib/parse-hot-draft";

// Edits ONE lead's email_1 within a (possibly multi-lead) hot-tier PR. getHotTierPR
// re-validates the PR matches the hot-tier convention first, so this can never touch an
// arbitrary open PR by number; `path` must match a file already in that PR's diff.
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

  let body: { path?: string; subject?: string; body?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!body.path || !body.subject?.trim() || !body.body?.trim()) {
    return NextResponse.json({ error: "path, subject, and body are required." }, { status: 400 });
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
    const newContent = buildHotDraftContent(file.content, body.subject.trim(), body.body.trim());
    await updatePRDraftFile(file.path, pr.head.ref, file.sha, newContent, token);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Save failed." },
      { status: 502 }
    );
  }
}
