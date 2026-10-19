import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getHotTierPR, approvePR } from "@/lib/github";

// Approves every lead still in this hot-tier batch at once by merging the PR - each
// file's frontmatter already carries `status: hot_approved` (baked in when the pipeline
// opened the PR), so merging is the entire approval; nothing else to flip. The next
// daily-pipeline run picks up hot_approved drafts on main and pushes them to Apollo.
// Remove any lead you don't want included BEFORE approving - merging sends the whole
// batch as it currently stands.
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
    const pr = await getHotTierPR(prNumber, token);
    await approvePR(pr.number, token);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Approve failed." },
      { status: 502 }
    );
  }
}
