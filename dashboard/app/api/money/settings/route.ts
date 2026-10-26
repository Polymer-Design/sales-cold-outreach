import { NextResponse } from "next/server";
import { fail, guard, readJson } from "@/lib/api-guard";
import { saveSettings, type MoneySettings } from "@/lib/money/store";
import { SPLIT_KEYS } from "@/lib/money/config";

export async function PUT(req: Request) {
  const g = await guard();
  if ("error" in g) return g.error;
  const body = await readJson<Partial<Pick<MoneySettings, "runwayGoal" | "splits">>>(req);
  if (!body) return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  const patch: Partial<MoneySettings> = {};
  if (body.runwayGoal !== undefined) {
    if (!(typeof body.runwayGoal === "number" && body.runwayGoal >= 0)) {
      return NextResponse.json({ error: "Runway goal must be $0 or more." }, { status: 400 });
    }
    patch.runwayGoal = body.runwayGoal;
  }
  if (body.splits !== undefined) {
    const ok =
      body.splits === null ||
      (["build", "plan"] as const).every((grp) =>
        SPLIT_KEYS.every(({ key }) => typeof body.splits?.[grp]?.[key] === "number" && body.splits[grp][key] >= 0),
      );
    if (!ok) return NextResponse.json({ error: "Every split needs a number, 0 or more." }, { status: 400 });
    patch.splits = body.splits;
  }
  try {
    await saveSettings(patch, g.email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return fail(err, "Couldn't save settings.");
  }
}
