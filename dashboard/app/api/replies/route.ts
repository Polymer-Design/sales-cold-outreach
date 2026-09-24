import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { listBookingReplyPRs, getPRDraftFile } from "@/lib/github";
import { parseDraft } from "@/lib/parse-draft";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const token = process.env.GITHUB_DISPATCH_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_DISPATCH_TOKEN isn't set on the server - see dashboard/README.md." },
      { status: 500 }
    );
  }

  try {
    const prs = await listBookingReplyPRs(token);
    const items = await Promise.all(
      prs.map(async (pr) => {
        const file = await getPRDraftFile(pr, token);
        const draft = parseDraft(file.content);
        return {
          number: pr.number,
          html_url: pr.html_url,
          ...draft.frontmatter,
          subject: draft.subject,
          body: draft.body,
        };
      })
    );
    return NextResponse.json({ items });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to list drafts." },
      { status: 502 }
    );
  }
}
