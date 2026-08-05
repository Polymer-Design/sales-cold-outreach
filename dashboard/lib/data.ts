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

export type CallPrepBrief = {
  file: string;
  title: string;
  when: string | null;
  icp: string | null;
  track: string | null;
  leadScore: string | null;
  summary: string | null;
};

export function getCallPrepBriefs(): CallPrepBrief[] {
  const dir = path.join(REPO_ROOT, "data/call-prep");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse()
    .map((f) => {
      const text = fs.readFileSync(path.join(dir, f), "utf-8");
      const title = (text.match(/^#\s*(.+)$/m)?.[1] ?? f).replace(/^Call prep:\s*/, "");
      const when = text.match(/\*\*When:\*\*\s*([^\s*]+)/)?.[1] ?? null;
      const icp = text.match(/\*\*ICP:\*\*\s*(\S+)/)?.[1] ?? null;
      const track = text.match(/\*\*Track:\*\*\s*(\S+)/)?.[1] ?? null;
      const leadScore = text.match(/\*\*Lead score:\*\*\s*(.+)/)?.[1]?.trim() ?? null;
      const summary =
        text.match(/## What we found on them\n([\s\S]*?)(?=\n##|$)/)?.[1]?.trim() ?? null;
      return { file: f, title, when, icp, track, leadScore, summary };
    });
}

export type Experiments = { running: string; backlog: string[]; completedCount: number };

export function getExperiments(): Experiments {
  const full = path.join(REPO_ROOT, "data/experiments.md");
  if (!fs.existsSync(full)) return { running: "", backlog: [], completedCount: 0 };
  const text = fs.readFileSync(full, "utf-8");
  const running = text.match(/## Running\n([\s\S]*?)(?=\n## )/)?.[1]?.trim() ?? "";
  const backlogBlock = text.match(/## Backlog[^\n]*\n([\s\S]*?)(?=\n## )/)?.[1] ?? "";
  const backlog = [...backlogBlock.matchAll(/^-\s*(.+)$/gm)].map((m) => m[1].trim());
  const completedBlock = text.match(/## Completed\n([\s\S]*)/)?.[1] ?? "";
  const tableLines = completedBlock.split("\n").filter((l) => l.trim().startsWith("|"));
  return { running, backlog, completedCount: Math.max(0, tableLines.length - 2) };
}

export type PagespeedBenchmark = {
  status: string | null;
  refreshed: string | null;
  sampleSize: string | null;
  avgPerf: string | null;
  avgA11y: string | null;
  avgBestPractices: string | null;
  avgSeo: string | null;
  avgLcp: string | null;
};

export function getPagespeedBenchmark(): PagespeedBenchmark {
  const full = path.join(REPO_ROOT, "knowledge/pagespeed-benchmark.md");
  const empty: PagespeedBenchmark = {
    status: null,
    refreshed: null,
    sampleSize: null,
    avgPerf: null,
    avgA11y: null,
    avgBestPractices: null,
    avgSeo: null,
    avgLcp: null,
  };
  if (!fs.existsSync(full)) return empty;
  const text = fs.readFileSync(full, "utf-8");
  const grab = (re: RegExp) => text.match(re)?.[1]?.trim() ?? null;
  return {
    status: grab(/^status:\s*(\S+)/m),
    refreshed: grab(/^refreshed:\s*(\S+)/m),
    sampleSize: grab(/\*\*Sample size:\*\*\s*(.+)/),
    avgPerf: grab(/\*\*Average performance:\*\*\s*(.+)/),
    avgA11y: grab(/\*\*Average accessibility:\*\*\s*(.+)/),
    avgBestPractices: grab(/\*\*Average best practices:\*\*\s*(.+)/),
    avgSeo: grab(/\*\*Average SEO:\*\*\s*(.+)/),
    avgLcp: grab(/\*\*Average load \(LCP\):\*\*\s*(.+)/),
  };
}

// Real leads (not fixtures) live under data/leads/. Right now it only holds an
// example seed CSV, so this surfaces exactly what's there rather than a fake count.
export function getLeadsFiles(): string[] {
  const dir = path.join(REPO_ROOT, "data/leads");
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  const walk = (d: string, prefix = "") => {
    for (const f of fs.readdirSync(d)) {
      const full = path.join(d, f);
      if (fs.statSync(full).isDirectory()) walk(full, `${prefix}${f}/`);
      else if (f !== ".gitkeep") out.push(`${prefix}${f}`);
    }
  };
  walk(dir);
  return out;
}
