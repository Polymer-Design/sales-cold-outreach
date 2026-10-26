import { NextResponse } from "next/server";
import { fail, guard, readJson } from "@/lib/api-guard";
import { addEntries, validateEntry } from "@/lib/money/store";
import type { LedgerEntry } from "@/lib/money/split";

// One entry from a ledger form, or the splitter's card payment + runway deposit together.
export async function POST(req: Request) {
  const g = await guard();
  if ("error" in g) return g.error;
  const body = await readJson<{ entries?: Omit<LedgerEntry, "id">[] }>(req);
  const entries = body?.entries;
  if (!Array.isArray(entries) || !entries.length || entries.length > 2) {
    return NextResponse.json({ error: "Send one or two entries." }, { status: 400 });
  }
  for (const e of entries) {
    const err = validateEntry(e);
    if (err) return NextResponse.json({ error: err }, { status: 400 });
  }
  try {
    const ids = await addEntries(entries, g.email);
    return NextResponse.json({ ok: true, ids });
  } catch (err) {
    return fail(err, "Couldn't save.");
  }
}
