import { neon, neonConfig } from "@neondatabase/serverless";

// Local development only: point the driver at a Neon-compatible HTTP endpoint (e.g. a
// local proxy) instead of Neon's cloud. Unset in production.
if (process.env.NEON_LOCAL_FETCH_ENDPOINT) neonConfig.fetchEndpoint = process.env.NEON_LOCAL_FETCH_ENDPOINT;

// Postgres for the parts of the dashboard that need live shared writes (Planner, Money).
// Everything else still reads repo files at build time. DATABASE_URL comes from the Neon
// integration on Vercel; without it, those sections show a setup notice instead of failing.
export type Sql = (strings: TemplateStringsArray, ...values: unknown[]) => Promise<Record<string, unknown>[]>;

let override: Sql | null = null;
export function setSqlForTests(sql: Sql | null) {
  override = sql;
  schemaReady = null;
}

export function dbConfigured(): boolean {
  return Boolean(override || process.env.DATABASE_URL);
}

let schemaReady: Promise<void> | null = null;

export async function db(): Promise<Sql> {
  const sql = override ?? (process.env.DATABASE_URL ? (neon(process.env.DATABASE_URL) as unknown as Sql) : null);
  if (!sql) throw new Error("DATABASE_URL isn't set - connect the Neon database in Vercel (see dashboard/README.md).");
  schemaReady ??= ensureSchema(sql).catch((e) => {
    schemaReady = null;
    throw e;
  });
  await schemaReady;
  return sql;
}

// Idempotent, so it runs once per server instance instead of needing a separate migrate step.
async function ensureSchema(sql: Sql) {
  await sql`create table if not exists money_ledger_entries (
    id text primary key,
    acct text not null check (acct in ('card', 'runway')),
    kind text not null check (kind in ('charge', 'payment', 'deposit', 'withdrawal')),
    amount numeric(12, 2) not null check (amount > 0),
    date date not null,
    note text not null default '',
    source text check (source in ('hosting', 'project', 'plan', 'other')),
    item text,
    received numeric(12, 2),
    project_total numeric(12, 2),
    extra_pages integer,
    addons jsonb,
    friends_discount numeric(12, 2),
    payment text,
    created_at timestamptz not null default now(),
    created_by text
  )`;
  await sql`create table if not exists money_settings (
    id integer primary key default 1 check (id = 1),
    runway_goal numeric(12, 2),
    splits jsonb,
    pricing jsonb,
    updated_at timestamptz,
    updated_by text
  )`;
  await sql`create table if not exists planner_builds (
    id text primary key,
    name text not null,
    tier text not null check (tier in ('sprint', 'core', 'church')),
    kickoff date not null,
    created_at timestamptz not null default now(),
    created_by text
  )`;
  await sql`create table if not exists planner_settings (
    id integer primary key default 1 check (id = 1),
    data jsonb not null,
    updated_at timestamptz,
    updated_by text
  )`;
}

export const newId = () => crypto.randomUUID();
