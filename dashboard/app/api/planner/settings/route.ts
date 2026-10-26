import { NextResponse } from "next/server";
import { fail, guard, readJson } from "@/lib/api-guard";
import { savePlannerSettings } from "@/lib/planner/store";
import type { PlannerSettings } from "@/lib/planner/schedule";

export async function PUT(req: Request) {
  const g = await guard();
  if ("error" in g) return g.error;
  const body = await readJson<PlannerSettings>(req);
  if (!body?.hours || !body.monthly || !body.anchor || !body.tiers) {
    return NextResponse.json({ error: "Invalid settings." }, { status: 400 });
  }
  try {
    const saved = await savePlannerSettings(body, g.email);
    return NextResponse.json({ ok: true, settings: saved });
  } catch (e) {
    return fail(e, "Couldn't save settings.");
  }
}
