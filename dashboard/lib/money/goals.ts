// Full-time goals planner math (docs/money-module/SPEC.md §5). Pure: no UI, no DB.
// Prices and plan hour caps come from the pricing config; only the planner's own
// what-if defaults (take-home, mix counts, est. hours per build) live here.
import type { FullTimeSplit, PricingConfig } from "./config.ts";

export const PLAN_KEYS = ["care", "grow", "partner", "plus"] as const;
export const BUILD_KEYS = ["sprint", "sCore", "cCore", "cCustom"] as const;
export type PlanKey = (typeof PLAN_KEYS)[number];
export type BuildKey = (typeof BUILD_KEYS)[number];

export const BUILD_LABEL: Record<BuildKey, string> = {
  sprint: "Sprint / Campaign",
  sCore: "Startup Core",
  cCore: "Church Core",
  cCustom: "Church Custom",
};

export type GoalsState = {
  takeHome: number;
  closeRate: number;
  hrsEach: number;
  actMrr: number;
  actAvg: number;
  alloc: FullTimeSplit | null; // null = use the config's fullTimeSplit
  plans: Record<PlanKey, number>;
  builds: Record<BuildKey, number>;
  buildHours: Record<BuildKey, number>;
};

export const DEFAULT_GOALS: GoalsState = {
  takeHome: 80_000,
  closeRate: 30,
  hrsEach: 28,
  actMrr: 0,
  actAvg: 0,
  alloc: null,
  plans: { care: 2, grow: 2, partner: 2, plus: 1 },
  builds: { sprint: 8, sCore: 4, cCore: 6, cCustom: 2 },
  buildHours: { sprint: 25, sCore: 60, cCore: 90, cCustom: 130 },
};

export function mergeGoals(raw: Partial<GoalsState> | null | undefined): GoalsState {
  const s = structuredClone(DEFAULT_GOALS);
  if (!raw) return s;
  for (const k of ["takeHome", "closeRate", "hrsEach", "actMrr", "actAvg"] as const) {
    if (typeof raw[k] === "number") s[k] = raw[k] as number;
  }
  if (raw.alloc) s.alloc = { ...raw.alloc };
  Object.assign(s.plans, raw.plans ?? {});
  Object.assign(s.builds, raw.builds ?? {});
  Object.assign(s.buildHours, raw.buildHours ?? {});
  return s;
}

const priceOf = (cfg: PricingConfig, key: string) => cfg.items.find((i) => i.key === key)?.price ?? 0;
const hoursCapOf = (cfg: PricingConfig, key: string) => cfg.items.find((i) => i.key === key)?.hoursCap ?? 0;

export function targets(takeHome: number, alloc: FullTimeSplit) {
  const sum = alloc.ownerPay + alloc.taxes + alloc.operating + alloc.reserve + alloc.growth || 1;
  const payShare = alloc.ownerPay / sum;
  return {
    allocSum: sum,
    payShare,
    both: (2 * takeHome) / payShare / 12,
    one: takeHome / payShare / 12,
  };
}

export function plannerNumbers(s: GoalsState, cfg: PricingConfig) {
  const alloc = s.alloc ?? cfg.fullTimeSplit;
  const t = targets(s.takeHome, alloc);
  let mrr = 0;
  let planHours = 0;
  let planClients = 0;
  for (const k of PLAN_KEYS) {
    mrr += s.plans[k] * priceOf(cfg, k);
    planHours += s.plans[k] * hoursCapOf(cfg, k);
    planClients += s.plans[k];
  }
  let buildsPerMonth = 0;
  let buildHours = 0;
  let buildsPerYear = 0;
  for (const k of BUILD_KEYS) {
    buildsPerMonth += (s.builds[k] * priceOf(cfg, k)) / 12;
    buildHours += (s.builds[k] * s.buildHours[k]) / 12;
    buildsPerYear += s.builds[k];
  }
  const mixTotal = mrr + buildsPerMonth;
  const hoursNeeded = planHours + buildHours;
  const capacity = (s.hrsEach * 2 * 52) / 12;
  return {
    ...t,
    alloc,
    mrr,
    planHours,
    planClients,
    buildsPerMonth,
    buildHours,
    buildsPerYear,
    mixTotal,
    hoursNeeded,
    capacity,
    introCallsPerWeek: (buildsPerYear + planClients) / (s.closeRate / 100) / 52,
    weeklyRevenueAtTarget: (t.both * 12) / 52,
  };
}

export type Rung = { title: string; met: boolean };

// The four-step ladder; each rung auto-checks off real numbers.
export function ladder(
  s: GoalsState,
  n: { one: number; both: number },
  ledger: { cardHas: boolean; card: number; runway: number },
): Rung[] {
  return [
    { title: "Pay off the card", met: ledger.cardHas && ledger.card <= 0 },
    { title: "Prove it repeats", met: s.actMrr >= 5000 },
    {
      title: "First person goes full-time",
      met: s.actAvg >= n.one && s.actMrr >= 5000 && ledger.runway >= 3.5 * n.one,
    },
    { title: "Both full-time", met: s.actAvg >= n.both && s.actMrr >= n.both / 2 },
  ];
}
