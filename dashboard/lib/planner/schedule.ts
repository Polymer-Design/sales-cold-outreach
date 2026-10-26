// Build Planner scheduling math (docs/build-planner-handoff.md "Scheduling logic").
// Pure: no UI, no DB, no clock - callers pass `today` so tests are deterministic.
// All dates are UTC-noon timestamps to dodge DST off-by-ones.

export type Person = "blair" | "ethan";
export const PEOPLE: Person[] = ["blair", "ethan"];
export const PERSON_NAME: Record<Person, string> = { blair: "Blair", ethan: "Ethan" };

export type PhaseKind = "concept" | "design" | "review" | "dev" | "launch";
export type Phase = { name: string; kind: PhaseKind; blair: number; ethan: number };
export type TierKey = "sprint" | "core" | "church";
export const TIER_KEYS: TierKey[] = ["sprint", "core", "church"];
export type Tier = { name: string; note: string; phases: Phase[] };

export type PlannerSettings = {
  hours: Record<Person, number>;
  monthly: Record<Person, number>;
  anchor: string;
  cadence: number;
  tiers: Record<TierKey, Tier>;
};

export type Build = { id: string; name: string; tier: TierKey; kickoff: string; createdAt?: string };

export const DEFAULT_SETTINGS: PlannerSettings = {
  hours: { blair: 17, ethan: 15 },
  monthly: { blair: 0, ethan: 0 },
  anchor: "2026-10-05",
  cadence: 2,
  tiers: {
    sprint: {
      name: "Sprint / Campaign",
      note: "One page · 4 weeks",
      phases: [
        { name: "Concept", kind: "concept", blair: 8, ethan: 1 },
        { name: "Review + revisions", kind: "review", blair: 3, ethan: 1 },
        { name: "Development", kind: "dev", blair: 4, ethan: 4 },
        { name: "QA + launch", kind: "launch", blair: 1, ethan: 3 },
      ],
    },
    core: {
      name: "Startup Core",
      note: "Up to 5 pages · 8 weeks",
      phases: [
        { name: "Homepage concept", kind: "concept", blair: 9, ethan: 1 },
        { name: "Review + revisions", kind: "review", blair: 3, ethan: 1 },
        { name: "Interior pages", kind: "design", blair: 7, ethan: 2 },
        { name: "Interior pages", kind: "design", blair: 6, ethan: 3 },
        { name: "Client feedback", kind: "review", blair: 3, ethan: 1 },
        { name: "Development", kind: "dev", blair: 4, ethan: 4 },
        { name: "Development", kind: "dev", blair: 3, ethan: 4 },
        { name: "QA + launch", kind: "launch", blair: 1, ethan: 3 },
      ],
    },
    church: {
      name: "Church Core",
      note: "Up to 10 pages + integrations · 8 weeks",
      phases: [
        { name: "Homepage concept", kind: "concept", blair: 10, ethan: 1 },
        { name: "Review + revisions", kind: "review", blair: 4, ethan: 1 },
        { name: "Interior pages", kind: "design", blair: 8, ethan: 3 },
        { name: "Interior pages", kind: "design", blair: 8, ethan: 4 },
        { name: "Client feedback", kind: "review", blair: 4, ethan: 2 },
        { name: "Dev + integrations", kind: "dev", blair: 7, ethan: 7 },
        { name: "Dev + integrations", kind: "dev", blair: 6, ethan: 7 },
        { name: "QA + launch", kind: "launch", blair: 2, ethan: 4 },
      ],
    },
  },
};

const DAY = 86_400_000;

// Merges a stored (possibly partial or older) settings record over the defaults.
export function mergeSettings(stored: Partial<PlannerSettings> | null | undefined): PlannerSettings {
  const s: PlannerSettings = structuredClone(DEFAULT_SETTINGS);
  if (!stored) return s;
  if (stored.hours) Object.assign(s.hours, stored.hours);
  if (stored.monthly) Object.assign(s.monthly, stored.monthly);
  if (stored.anchor) s.anchor = stored.anchor;
  if (stored.cadence) s.cadence = stored.cadence;
  for (const k of TIER_KEYS) {
    const t = stored.tiers?.[k];
    if (t && Array.isArray(t.phases)) s.tiers[k].phases = structuredClone(t.phases);
  }
  return s;
}

export function parseDate(s: string): number {
  const [y, m, d] = s.split("-").map(Number);
  return Date.UTC(y, m - 1, d, 12);
}
export function isoDate(t: number): string {
  return new Date(t).toISOString().slice(0, 10);
}
export function mondayOf(t: number): number {
  const dow = (new Date(t).getUTCDay() + 6) % 7;
  return t - dow * DAY;
}
export function snapToMonday(date: string): string {
  return isoDate(mondayOf(parseDate(date)));
}
export function todayNoon(now = new Date()): number {
  return Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 12);
}
export const fmtShort = (t: number) =>
  new Date(t).toLocaleDateString("en-US", { timeZone: "UTC", month: "short", day: "numeric" });
export const fmtLong = (t: number) =>
  new Date(t).toLocaleDateString("en-US", { timeZone: "UTC", weekday: "short", month: "short", day: "numeric" });

const round1 = (n: number) => Math.round(n * 10) / 10;

export type Load = Record<number, { blair: number; ethan: number; concepts: number }>;

// Bound to one settings object so every caller agrees on the anchor and templates.
export function planner(settings: PlannerSettings) {
  const anchorMon = mondayOf(parseDate(settings.anchor || DEFAULT_SETTINGS.anchor));
  const week = (t: number) => Math.round((mondayOf(t) - anchorMon) / (7 * DAY));
  const weekDate = (w: number) => anchorMon + w * 7 * DAY;
  const tierOf = (b: Pick<Build, "tier">) => settings.tiers[b.tier] ?? settings.tiers.sprint;
  const monthlyPerWeek = (p: Person) => ((+settings.monthly[p] || 0) * 12) / 52;
  const cap = (p: Person) => +settings.hours[p] || 0;
  const launchDate = (tier: TierKey, k0: number) => weekDate(k0 + settings.tiers[tier].phases.length - 1) + 4 * DAY;

  function buildLoad(builds: Build[]): Load {
    const load: Load = {};
    for (const b of builds) {
      const k0 = week(parseDate(b.kickoff));
      tierOf(b).phases.forEach((ph, i) => {
        const e = (load[k0 + i] ??= { blair: 0, ethan: 0, concepts: 0 });
        e.blair += +ph.blair || 0;
        e.ethan += +ph.ethan || 0;
        if (ph.kind === "concept") e.concepts++;
      });
    }
    return load;
  }

  // Human-readable reasons a kickoff week doesn't fit; empty array means it fits.
  function conflicts(tier: TierKey, k0: number, load: Load): { w: number; msg: string }[] {
    const out: { w: number; msg: string }[] = [];
    settings.tiers[tier].phases.forEach((ph, i) => {
      const w = k0 + i;
      const e = load[w] ?? { blair: 0, ethan: 0, concepts: 0 };
      for (const p of PEOPLE) {
        const total = e[p] + (+ph[p] || 0) + monthlyPerWeek(p);
        if (total > cap(p) + 1e-9) {
          out.push({ w, msg: `${PERSON_NAME[p]} at ${round1(total)}/${cap(p)}h week of ${fmtShort(weekDate(w))}` });
        }
      }
      if (ph.kind === "concept" && e.concepts > 0) {
        out.push({ w, msg: `second concept week of ${fmtShort(weekDate(w))}` });
      }
    });
    return out;
  }

  function windows(n: number, today: number): number[] {
    const cad = Math.max(1, +settings.cadence || 2);
    const now = week(today);
    const first = Math.ceil(now / cad) * cad;
    return Array.from({ length: n }, (_, i) => first + i * cad);
  }

  function nextOpen(tier: TierKey, load: Load, today: number): number | null {
    for (const w of windows(52, today)) if (!conflicts(tier, w, load).length) return w;
    return null;
  }

  function status(b: Build, today: number): { kind: "upcoming" | "active" | "launched"; label: string } {
    const k0 = week(parseDate(b.kickoff));
    const phases = tierOf(b).phases;
    const now = week(today);
    if (now > k0 + phases.length - 1) return { kind: "launched", label: "Launched" };
    if (now < k0) return { kind: "upcoming", label: "Upcoming" };
    return { kind: "active", label: phases[now - k0].name };
  }

  function proposal(b: Build) {
    const t = tierOf(b);
    const k0 = week(parseDate(b.kickoff));
    const phases = t.phases.map((ph, i) => ({
      ...ph,
      label: ph.kind === "review" ? `${ph.name} (your team)` : ph.name,
      weekOf: weekDate(k0 + i),
    }));
    const launch = launchDate(b.tier, k0);
    const text = [
      `${b.name} · ${t.name}`,
      `Kickoff: ${fmtLong(weekDate(k0))}`,
      ...phases.map((p) => `Week of ${fmtLong(p.weekOf)}: ${p.label}`),
      `Launch: ${fmtLong(launch)}`,
    ].join("\n");
    return { tier: t, phases, launch, text };
  }

  return {
    settings,
    week,
    weekDate,
    tierOf,
    monthlyPerWeek,
    cap,
    launchDate,
    buildLoad,
    conflicts,
    windows,
    nextOpen,
    status,
    proposal,
  };
}

// Packages that can't start within 30 days pay a 25% deposit to hold the slot.
export function needsSlotDeposit(b: Build): boolean {
  if (!b.createdAt) return false;
  const booked = Date.parse(b.createdAt);
  return parseDate(b.kickoff) - booked > 30 * DAY;
}

// Load cell coloring: green under 85%, amber 85-100%, red over capacity.
export function loadLevel(used: number, capacity: number): "zero" | "ok" | "tight" | "over" {
  if (used === 0) return "zero";
  if (used > capacity) return "over";
  if (used >= 0.85 * capacity) return "tight";
  return "ok";
}

// Wait chip on the open-slot cards: <=2 weeks green, <=5 amber, >5 red.
export function waitLevel(weeksOut: number): "now" | "later" | "far" {
  return weeksOut <= 2 ? "now" : weeksOut <= 5 ? "later" : "far";
}
