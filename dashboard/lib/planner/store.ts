// Build Planner data access. Bookings and settings are shared by Ethan and Blair.
import { db, newId } from "../db.ts";
import { mergeSettings, snapToMonday, TIER_KEYS, type Build, type PlannerSettings, type TierKey } from "./schedule.ts";

export async function listBuilds(): Promise<Build[]> {
  const sql = await db();
  const rows = await sql`select id, name, tier, kickoff::text as kickoff,
      to_char(created_at at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') as created_at
    from planner_builds order by kickoff, created_at`;
  return rows.map((r) => ({
    id: String(r.id),
    name: String(r.name),
    tier: r.tier as TierKey,
    kickoff: String(r.kickoff),
    createdAt: String(r.created_at),
  }));
}

export function validateBuild(b: Partial<Build>): string | null {
  if (!b.name?.trim()) return "Add the client name first.";
  if (!b.tier || !TIER_KEYS.includes(b.tier)) return "Pick a tier.";
  if (!b.kickoff || !/^\d{4}-\d{2}-\d{2}$/.test(b.kickoff)) return "Pick a kickoff date.";
  return null;
}

// Kickoffs are always stored as the Monday of their week.
export async function addBuild(b: { name: string; tier: TierKey; kickoff: string }, by: string | null) {
  const sql = await db();
  const id = newId();
  await sql`insert into planner_builds (id, name, tier, kickoff, created_by)
    values (${id}, ${b.name.trim()}, ${b.tier}, ${snapToMonday(b.kickoff)}, ${by})`;
  return id;
}

export async function moveBuild(id: string, kickoff: string) {
  const sql = await db();
  await sql`update planner_builds set kickoff = ${snapToMonday(kickoff)} where id = ${id}`;
}

export async function removeBuild(id: string) {
  const sql = await db();
  await sql`delete from planner_builds where id = ${id}`;
}

export async function getPlannerSettings(): Promise<PlannerSettings> {
  const sql = await db();
  const [r] = await sql`select data from planner_settings where id = 1`;
  const data = r ? (typeof r.data === "string" ? JSON.parse(r.data) : r.data) : null;
  return mergeSettings(data as Partial<PlannerSettings> | null);
}

export async function savePlannerSettings(s: PlannerSettings, by: string | null) {
  const clean = mergeSettings(s);
  clean.anchor = snapToMonday(clean.anchor);
  clean.cadence = Math.min(4, Math.max(1, Math.round(clean.cadence)));
  const sql = await db();
  await sql`insert into planner_settings (id, data, updated_at, updated_by)
    values (1, ${JSON.stringify(clean)}::jsonb, now(), ${by})
    on conflict (id) do update set data = excluded.data, updated_at = now(), updated_by = excluded.updated_by`;
  return clean;
}
