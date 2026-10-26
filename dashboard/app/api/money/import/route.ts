import { NextResponse } from "next/server";
import { fail, guard, readJson } from "@/lib/api-guard";
import { importLedgerSeed, saveSettings } from "@/lib/money/store";

// One-time imports from Money > Settings: pricing-config.json and/or ledger-seed.json.
// They live only in the database because this repo is public.
export async function POST(req: Request) {
  const g = await guard();
  if ("error" in g) return g.error;
  const body = await readJson<{ pricing?: unknown; ledger?: unknown }>(req);
  if (!body || (body.pricing === undefined && body.ledger === undefined)) {
    return NextResponse.json({ error: "Nothing to import." }, { status: 400 });
  }
  try {
    const out: { pricing?: boolean; ledger?: { imported: number; skipped: number } } = {};
    if (body.pricing !== undefined) {
      await saveSettings({ pricing: body.pricing as never }, g.email);
      out.pricing = true;
    }
    if (body.ledger !== undefined) out.ledger = await importLedgerSeed(body.ledger, g.email);
    return NextResponse.json({ ok: true, ...out });
  } catch (err) {
    return fail(err, "Import failed.", 400);
  }
}
