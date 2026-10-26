// Money data access. Shared by Ethan and Blair: every read and write goes to Postgres.
import { db, newId } from "../db.ts";
import { parsePricingConfig, type PricingConfig, type Split } from "./config.ts";
import type { Acct, Kind, LedgerEntry, Source } from "./split.ts";

const num = (v: unknown) => (v == null ? null : Number(v));

function toEntry(r: Record<string, unknown>): LedgerEntry {
  return {
    id: String(r.id),
    acct: r.acct as Acct,
    kind: r.kind as Kind,
    amount: Number(r.amount),
    date: String(r.date),
    note: String(r.note ?? ""),
    source: (r.source as Source | null) ?? null,
    item: (r.item as string | null) ?? null,
    received: num(r.received),
    projectTotal: num(r.project_total),
    extraPages: num(r.extra_pages),
    addons: (typeof r.addons === "string" ? JSON.parse(r.addons) : r.addons) as LedgerEntry["addons"],
    friendsDiscount: num(r.friends_discount),
    payment: (r.payment as string | null) ?? null,
    createdAt: String(r.created_at),
    createdBy: (r.created_by as string | null) ?? null,
  };
}

export async function listEntries(): Promise<LedgerEntry[]> {
  const sql = await db();
  const rows = await sql`select id, acct, kind, amount, date::text as date, note, source, item, received,
      project_total, extra_pages, addons, friends_discount, payment,
      to_char(created_at at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') as created_at, created_by
    from money_ledger_entries order by date desc, created_at desc`;
  return rows.map(toEntry);
}

const ACCT_KINDS: Record<Acct, Kind[]> = { card: ["charge", "payment"], runway: ["deposit", "withdrawal"] };
const SOURCES: Source[] = ["hosting", "project", "plan", "other"];

// Validates at the API boundary; returns a readable error instead of a DB constraint error.
export function validateEntry(e: Partial<LedgerEntry>): string | null {
  if (e.acct !== "card" && e.acct !== "runway") return "Account must be card or runway.";
  if (!e.kind || !ACCT_KINDS[e.acct].includes(e.kind)) return `A ${e.acct} entry can't be a ${e.kind}.`;
  if (!(typeof e.amount === "number" && e.amount > 0)) return "Enter an amount above $0.";
  if (!e.date || !/^\d{4}-\d{2}-\d{2}$/.test(e.date)) return "Pick a date.";
  if (e.source != null && !SOURCES.includes(e.source)) return "Unknown payment source.";
  return null;
}

export async function addEntries(entries: Omit<LedgerEntry, "id">[], by: string | null, ids?: string[]) {
  const sql = await db();
  const created: string[] = [];
  for (const [i, e] of entries.entries()) {
    const id = ids?.[i] ?? newId();
    await sql`insert into money_ledger_entries
      (id, acct, kind, amount, date, note, source, item, received, project_total, extra_pages, addons,
       friends_discount, payment, created_by)
      values (${id}, ${e.acct}, ${e.kind}, ${Math.round(e.amount * 100) / 100}, ${e.date}, ${e.note ?? ""},
       ${e.source ?? null}, ${e.item ?? null}, ${e.received ?? null}, ${e.projectTotal ?? null},
       ${e.extraPages ?? null}, ${e.addons ? JSON.stringify(e.addons) : null}::jsonb,
       ${e.friendsDiscount ?? null}, ${e.payment ?? null}, ${by})
      on conflict (id) do nothing`;
    created.push(id);
  }
  return created;
}

export async function deleteEntry(id: string) {
  const sql = await db();
  await sql`delete from money_ledger_entries where id = ${id}`;
}

export type MoneySettings = {
  runwayGoal: number;
  splits: { build: Split; plan: Split } | null; // null = use the config's splits
  pricing: PricingConfig | null; // null = not imported yet
};

export async function getSettings(): Promise<MoneySettings> {
  const sql = await db();
  const [r] = await sql`select runway_goal, splits, pricing from money_settings where id = 1`;
  const parse = (v: unknown) => (typeof v === "string" ? JSON.parse(v) : v);
  const pricing = r?.pricing ? (parse(r.pricing) as PricingConfig) : null;
  return {
    runwayGoal: r?.runway_goal != null ? Number(r.runway_goal) : pricing?.runwayGoalDefault ?? 20_000,
    splits: r?.splits ? (parse(r.splits) as MoneySettings["splits"]) : null,
    pricing,
  };
}

export async function saveSettings(patch: Partial<MoneySettings>, by: string | null) {
  const sql = await db();
  await sql`insert into money_settings (id) values (1) on conflict (id) do nothing`;
  if (patch.runwayGoal !== undefined) {
    await sql`update money_settings set runway_goal = ${patch.runwayGoal}, updated_at = now(), updated_by = ${by} where id = 1`;
  }
  if (patch.splits !== undefined) {
    await sql`update money_settings set splits = ${patch.splits ? JSON.stringify(patch.splits) : null}::jsonb,
      updated_at = now(), updated_by = ${by} where id = 1`;
  }
  if (patch.pricing !== undefined) {
    const cfg = patch.pricing ? parsePricingConfig(patch.pricing) : null;
    await sql`update money_settings set pricing = ${cfg ? JSON.stringify(cfg) : null}::jsonb,
      updated_at = now(), updated_by = ${by} where id = 1`;
  }
}

// The ledger seed (docs/money-module/ledger-seed.json). Re-importing is safe: rows keep
// their seed ids, so an existing row is skipped rather than duplicated.
export async function importLedgerSeed(raw: unknown, by: string | null): Promise<{ imported: number; skipped: number }> {
  const seed = raw as { ledger?: unknown[]; settings?: { runwayGoal?: number } } | null;
  if (!seed || !Array.isArray(seed.ledger)) throw new Error("Not a ledger seed: expected a { ledger: [...] } object.");
  const rows: Omit<LedgerEntry, "id">[] = [];
  const ids: string[] = [];
  for (const r of seed.ledger as (Partial<LedgerEntry> & { id?: string })[]) {
    const e = { ...r, amount: Number(r.amount), note: r.note ?? "" } as Omit<LedgerEntry, "id">;
    const err = validateEntry(e);
    if (err) throw new Error(`Seed row ${r.id ?? "?"}: ${err}`);
    rows.push(e);
    ids.push(r.id ?? newId());
  }
  const sql = await db();
  const existing = new Set(
    (await sql`select id from money_ledger_entries where id = any(${ids})`).map((x) => String(x.id)),
  );
  const fresh = rows.filter((_, i) => !existing.has(ids[i]));
  await addEntries(fresh, by, ids.filter((id) => !existing.has(id)));
  if (typeof seed.settings?.runwayGoal === "number") {
    const [cur] = await sql`select runway_goal from money_settings where id = 1`;
    if (cur?.runway_goal == null) await saveSettings({ runwayGoal: seed.settings.runwayGoal }, by);
  }
  return { imported: fresh.length, skipped: rows.length - fresh.length };
}
