import { test } from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_SETTINGS,
  TIER_KEYS,
  mergeSettings,
  needsSlotDeposit,
  parseDate,
  planner,
  snapToMonday,
  type Build,
  type PlannerSettings,
} from "./schedule.ts";

// Acceptance tests from docs/build-planner-handoff.md: default settings, no monthly hours,
// windows at weeks 0, 2, 4... ("today" = the anchor Monday).
const TODAY = parseDate("2026-10-05");

function at(settings: PlannerSettings, builds: Build[]) {
  const p = planner(settings);
  const load = p.buildLoad(builds);
  return Object.fromEntries(TIER_KEYS.map((k) => [k, p.nextOpen(k, load, TODAY)]));
}
const build = (tier: Build["tier"], w: number): Build => {
  const p = planner(DEFAULT_SETTINGS);
  return { id: `${tier}${w}`, name: tier, tier, kickoff: new Date(p.weekDate(w)).toISOString().slice(0, 10) };
};

test("1. no builds: every tier's next open kickoff is the first window", () => {
  assert.deepEqual(at(DEFAULT_SETTINGS, []), { sprint: 0, core: 0, church: 0 });
});

test("2. Church Core at week 0: Sprint 2, Startup Core 2, Church Core 4", () => {
  assert.deepEqual(at(DEFAULT_SETTINGS, [build("church", 0)]), { sprint: 2, core: 2, church: 4 });
});

test("3. Startup Core at 0, Sprint at 2 and 4: every tier opens at 6", () => {
  const builds = [build("core", 0), build("sprint", 2), build("sprint", 4)];
  assert.deepEqual(at(DEFAULT_SETTINGS, builds), { sprint: 6, core: 6, church: 6 });
});

test("4. Blair monthly 40h/mo (~9.2h/wk) leaves 7.8h, so no concept fits: No opening", () => {
  const s = mergeSettings({ monthly: { blair: 40, ethan: 0 } });
  const p = planner(s);
  assert.equal(Math.round(p.monthlyPerWeek("blair") * 10) / 10, 9.2);
  assert.deepEqual(at(s, []), { sprint: null, core: null, church: null });
});

test("4b. smaller monthly load moves slots later instead of removing them", () => {
  // Blair 1h/wk to plans: an 8h Sprint concept still fits alone, but stacking any
  // concept-week load on top of an existing build gets pushed further out.
  const base = at(DEFAULT_SETTINGS, [build("church", 0)]);
  const s = mergeSettings({ monthly: { blair: 30, ethan: 0 } });
  const later = at(s, [build("church", 0)]);
  for (const k of TIER_KEYS) {
    assert.ok(later[k] === null || (later[k] as number) >= (base[k] as number), k);
  }
});

test("5. a kickoff picked mid-week is stored as that week's Monday", () => {
  assert.equal(snapToMonday("2026-11-05"), "2026-11-02"); // Thu -> Mon
  assert.equal(snapToMonday("2026-11-08"), "2026-11-02"); // Sun -> Mon
  assert.equal(snapToMonday("2026-11-02"), "2026-11-02");
});

test("conflict reasons are human readable and booking over capacity is still allowed", () => {
  const p = planner(DEFAULT_SETTINGS);
  const load = p.buildLoad([build("church", 0)]);
  const c = p.conflicts("sprint", 0, load);
  assert.ok(c.some((x) => x.msg === "second concept week of Oct 5"));
  assert.ok(c.some((x) => /^Blair at 18\/17h week of Oct 5$/.test(x.msg)));
});

test("launch date is the Friday of the last phase week", () => {
  const p = planner(DEFAULT_SETTINGS);
  const b = { ...build("church", 4), name: "Grace Hill Church" }; // kickoff Mon Nov 2
  const { launch, text } = p.proposal(b);
  assert.equal(new Date(launch).toISOString().slice(0, 10), "2026-12-25");
  assert.equal(
    text.split("\n").slice(0, 4).join("\n"),
    "Grace Hill Church · Church Core\nKickoff: Mon, Nov 2\nWeek of Mon, Nov 2: Homepage concept\nWeek of Mon, Nov 9: Review + revisions (your team)",
  );
  assert.equal(text.split("\n").at(-1), "Launch: Fri, Dec 25");
});

test("build status: upcoming, current phase, launched", () => {
  const p = planner(DEFAULT_SETTINGS);
  const b = build("sprint", 2);
  assert.equal(p.status(b, TODAY).label, "Upcoming");
  assert.equal(p.status(b, parseDate("2026-10-28")).label, "Review + revisions");
  assert.equal(p.status(b, parseDate("2026-11-16")).label, "Launched");
});

test("slot deposit flag: kickoff more than 30 days after booking", () => {
  assert.equal(needsSlotDeposit({ id: "a", name: "x", tier: "sprint", kickoff: "2026-12-07", createdAt: "2026-10-26T12:00:00Z" }), true);
  assert.equal(needsSlotDeposit({ id: "b", name: "x", tier: "sprint", kickoff: "2026-11-09", createdAt: "2026-10-26T12:00:00Z" }), false);
});
