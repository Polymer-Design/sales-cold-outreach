import { NextResponse } from "next/server";
import { dispatchWorkflow } from "@/lib/github";

// Vercel cron entry points (see vercel.json). Each reply-check slot gets its own path so
// every cron entry runs at most once per day, which Hobby-plan cron requires.
const JOBS: Record<string, string> = {
  "daily-pipeline": "daily-pipeline.yml",
  "reply-check-am": "reply-check.yml",
  "reply-check-midday": "reply-check.yml",
  "reply-check-pm": "reply-check.yml",
};

export async function GET(req: Request, ctx: { params: Promise<{ job: string }> }) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { job } = await ctx.params;
  const workflow = JOBS[job];
  if (!workflow) {
    return NextResponse.json({ error: `Unknown job '${job}'.` }, { status: 404 });
  }

  const token = process.env.GITHUB_DISPATCH_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "GITHUB_DISPATCH_TOKEN isn't set." }, { status: 500 });
  }

  try {
    await dispatchWorkflow(workflow, token);
    return NextResponse.json({ ok: true, dispatched: workflow });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Dispatch failed." },
      { status: 502 }
    );
  }
}
