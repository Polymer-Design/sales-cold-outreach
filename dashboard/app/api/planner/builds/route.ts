import { NextResponse } from "next/server";
import { fail, guard, readJson } from "@/lib/api-guard";
import { addBuild, validateBuild } from "@/lib/planner/store";
import type { Build } from "@/lib/planner/schedule";

export async function POST(req: Request) {
  const g = await guard();
  if ("error" in g) return g.error;
  const body = await readJson<Partial<Build>>(req);
  const err = body ? validateBuild(body) : "Invalid request body.";
  if (err) return NextResponse.json({ error: err }, { status: 400 });
  try {
    const id = await addBuild(body as Build, g.email);
    return NextResponse.json({ ok: true, id });
  } catch (e) {
    return fail(e, "Couldn't book the build.");
  }
}
