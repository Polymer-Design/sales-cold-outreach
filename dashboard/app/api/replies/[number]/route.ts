import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getBookingReplyPR, getPRDraftFile, updatePRDraftFile } from "@/lib/github";
import { parseDraft, buildDraftContent } from "@/lib/parse-draft";

export async function PATCH(req: Request, ctx: { params: Promise<{ number: string }> }) {
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

  let body: { subject?: string; body?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!body.subject?.trim() || !body.body?.trim()) {
    return NextResponse.json({ error: "Subject and body are required." }, { status: 400 });
  }

  try {
    const pr = await getBookingReplyPR(prNumber, token);
    const file = await getPRDraftFile(pr, token);
    const draft = parseDraft(file.content);
    const newContent = buildDraftContent(draft.fmText, body.subject.trim(), body.body.trim());
    await updatePRDraftFile(file.path, pr.head.ref, file.sha, newContent, token);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Save failed." },
      { status: 502 }
    );
  }
}
