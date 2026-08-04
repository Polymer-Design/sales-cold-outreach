import fs from "node:fs";
import path from "node:path";

// This app lives in dashboard/ at the repo root; everything it reads is the
// same data/ and config/ the Python pipeline already writes to. Reads happen
// at build time (Vercel rebuilds on every push to main), so the dashboard is
// always as fresh as the last commit - no separate database, no live token.
const REPO_ROOT = path.join(process.cwd(), "..");

function readJsonl<T>(relPath: string): T[] {
  const full = path.join(REPO_ROOT, relPath);
  if (!fs.existsSync(full)) return [];
  return fs
    .readFileSync(full, "utf-8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => JSON.parse(l) as T);
}

function countMdFiles(relDir: string): number {
  const full = path.join(REPO_ROOT, relDir);
  if (!fs.existsSync(full)) return 0;
  return fs.readdirSync(full).filter((f) => f.endsWith(".md")).length;
}

export type FunnelEvent = {
  at: string;
  email: string;
  stage: string;
  icp?: string;
  org?: string;
  note?: string;
};

const STAGE_KEYS = ["emailed", "replied", "interested", "booked", "won", "lost"] as const;
type StageKey = (typeof STAGE_KEYS)[number];

// A lead at a given stage has implicitly passed through everything before it -
// same folding logic as scripts/funnel.py, so the dashboard and the CLI agree.
const REACHES: Record<StageKey, StageKey[]> = {
  emailed: ["emailed"],
  replied: ["emailed", "replied"],
  interested: ["emailed", "replied", "interested"],
  booked: ["emailed", "replied", "interested", "booked"],
  won: ["emailed", "replied", "interested", "booked", "won"],
  lost: ["emailed", "replied", "interested", "booked", "lost"],
};

export function getFunnelStats(icpFilter?: "startups" | "churches") {
  const events = readJsonl<FunnelEvent>("data/funnel/events.jsonl").filter(
    (e) => !icpFilter || e.icp === icpFilter
  );

  const reached = new Map<string, Set<StageKey>>();
  for (const e of events) {
    const stage = e.stage as StageKey;
    const set = reached.get(e.email) ?? new Set<StageKey>();
    for (const s of REACHES[stage] ?? [stage]) set.add(s);
    reached.set(e.email, set);
  }

  const counts = Object.fromEntries(
    STAGE_KEYS.map((s) => [s, [...reached.values()].filter((set) => set.has(s)).length])
  ) as Record<StageKey, number>;

  const bookedRate = counts.emailed ? Math.round((counts.booked / counts.emailed) * 1000) / 10 : null;
  const closeRate = counts.booked ? Math.round((counts.won / counts.booked) * 1000) / 10 : null;

  return { counts, bookedRate, closeRate, leadsTotal: reached.size };
}

export function getQueueCounts() {
  return {
    drafts: countMdFiles("data/queue/drafts"),
    pendingApproval: countMdFiles("data/queue/pending-approval"),
    approvedToSend: countMdFiles("data/queue/approved-to-send"),
    sent: countMdFiles("data/queue/sent"),
  };
}

export function getSystemMode(): string {
  const full = path.join(REPO_ROOT, "config/system.yaml");
  if (!fs.existsSync(full)) return "unknown";
  const text = fs.readFileSync(full, "utf-8");
  const m = text.match(/^mode:\s*(\S+)/m);
  return m ? m[1] : "unknown";
}

export function getReplyCount(): number {
  return readJsonl("data/replies/log.jsonl").length;
}
