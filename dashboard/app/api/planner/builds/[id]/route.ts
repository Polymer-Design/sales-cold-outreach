import { NextResponse } from "next/server";
import { fail, guard, readJson } from "@/lib/api-guard";
import { moveBuild, removeBuild } from "@/lib/planner/store";

// Reschedule a client who slips: the kickoff snaps to that week's Monday.
export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const g = await guard();
  if ("error" in g) return g.error;
  const { id } = await ctx.params;
  const body = await readJson<{ kickoff?: string }>(req);
  if (!body?.kickoff || !/^\d{4}-\d{2}-\d{2}$/.test(body.kickoff)) {
    return NextResponse.json({ error: "Pick a kickoff date." }, { status: 400 });
  }
  try {
    await moveBuild(id, body.kickoff);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return fail(e, "Couldn't move the build.");
  }
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const g = await guard();
  if ("error" in g) return g.error;
  const { id } = await ctx.params;
  try {
    await removeBuild(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return fail(e, "Couldn't remove the build.");
  }
}
