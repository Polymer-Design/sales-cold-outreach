import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { parsePricingConfig, itemByKey, type Item, type PricingConfig } from "./config.ts";
import {
  balances,
  canAddPage,
  computeSplit,
  defaultAddonState,
  entriesToLog,
  paidDownBySource,
  paymentChips,
  projectTotals,
  r2,
  type BuildInputs,
} from "./split.ts";
import { DEFAULT_GOALS, plannerNumbers } from "./goals.ts";

// The real config is gitignored (public repo) - see docs/money-module/ locally.
const CONFIG_PATH = path.resolve(import.meta.dirname, "../../../docs/money-module/pricing-config.json");
const haveConfig = fs.existsSync(CONFIG_PATH);
const skip = haveConfig ? false : `needs ${CONFIG_PATH} (gitignored; copy it from the Money handoff)`;
const cfg: PricingConfig = haveConfig ? parsePricingConfig(JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"))) : (null as never);

const CARD = 7000;
const item = (k: string) => itemByKey(cfg, k) as Item;
function inputs(it: Item, over: Partial<BuildInputs> = {}): BuildInputs {
  return { extraPages: 0, customAmount: it.price ?? 0, addons: defaultAddonState(it, cfg), friends: false, ...over };
}
function split(group: Item["group"], amount: number, over: { contractor?: number; topUp?: number; cardBalance?: number } = {}) {
  const o = computeSplit({
    group,
    amount,
    contractor: over.contractor ?? 0,
    topUp: over.topUp ?? 0,
    cardBalance: over.cardBalance ?? CARD,
    splits: cfg.splits,
  });
  return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, r2(v)]));
}

test("1. Church Core +2 pages + PC Groups, 50% at signing", { skip }, () => {
  const it = item("cCore");
  const inp = inputs(it, { extraPages: 2 });
  inp.addons.pcg.on = true;
  const t = projectTotals(it, inp, cfg);
  assert.equal(t.total, 18_500);
  const chip = paymentChips(it, t.total, 0)[0];
  assert.equal(chip.label, "50% at signing");
  assert.equal(chip.value, 9250);
  const o = split("build", chip.value);
  assert.equal(o.ethan, 2220);
  assert.equal(o.blair, 2220);
  assert.equal(o.ethanTax, 1017.5);
  assert.equal(o.blairTax, 1017.5);
  assert.equal(o.toCard, 2312.5);
  assert.equal(o.toRunway, 0);
  assert.equal(o.operating, 462.5);
});

test("1b. included add-ons (PC Events, YouTube) add $0 on Church Core", { skip }, () => {
  const it = item("cCore");
  const inp = inputs(it);
  inp.addons.pce.on = true;
  inp.addons.yt.on = true;
  assert.equal(projectTotals(it, inp, cfg).total, 14_000);
});

test("2. Partner, one month", { skip }, () => {
  const o = split("plan", paymentChips(item("partner"), 3000, 0)[0].value);
  assert.deepEqual([o.amount, o.ethan, o.blair, o.ethanTax, o.blairTax, o.toCard, o.operating], [3000, 795, 795, 330, 330, 300, 450]);
});

test("3. hosting reimbursement $120 with card at $50", { skip }, () => {
  const o = split("hosting", 120, { cardBalance: 50 });
  assert.equal(o.toCard, 50);
  assert.equal(o.operating, 70);
  for (const k of ["ethan", "blair", "ethanTax", "blairTax", "toRunway", "contractor"]) assert.equal(o[k], 0, k);
});

test("4. Sprint 100% ($3,000) with card at $500", { skip }, () => {
  const o = split("build", paymentChips(item("sprint"), 3000, 0)[0].value, { cardBalance: 500 });
  assert.deepEqual([o.toCard, o.toRunway, o.ethan, o.blair, o.ethanTax, o.blairTax, o.operating], [500, 250, 720, 720, 330, 330, 150]);
});

test("5. Startup Core 50% at signing ($4,750), contractor $1,000", { skip }, () => {
  const it = item("sCore");
  const amount = paymentChips(it, projectTotals(it, inputs(it), cfg).total, 0)[0].value;
  assert.equal(amount, 4750);
  const o = split("build", amount, { contractor: 1000 });
  assert.equal(o.net, 3750);
  assert.deepEqual([o.ethan, o.blair, o.ethanTax, o.blairTax, o.toCard, o.operating, o.contractor], [900, 900, 412.5, 412.5, 937.5, 187.5, 1000]);
});

test("6. Sprint 100% with $200 operating top-up", { skip }, () => {
  const o = split("build", 3000, { topUp: 200 });
  assert.equal(o.toCard, 550);
  assert.equal(o.operating, 350);
});

test("7. Startup Core + $1,500 integration, friends discount, 50% at signing", { skip }, () => {
  const it = item("sCore");
  const inp = inputs(it, { friends: true });
  inp.addons.integ.on = true;
  const t = projectTotals(it, inp, cfg);
  assert.equal(t.subtotal, 11_000);
  assert.equal(t.discount, 1100);
  assert.equal(t.total, 9900);
  assert.equal(paymentChips(it, t.total, 0)[0].value, 4950);
});

test("8. scoped: $2,500 is one chip, $4,000 is 50/50", { skip }, () => {
  const it = item("scoped");
  assert.deepEqual(paymentChips(it, 2500, null).map((c) => c.value), [2500]);
  assert.deepEqual(paymentChips(it, 4000, null).map((c) => c.value), [2000, 2000]);
});

test("9. Church Custom at $22,000", { skip }, () => {
  const it = item("cCustom");
  const t = projectTotals(it, inputs(it, { customAmount: 22_000 }), cfg);
  assert.deepEqual(paymentChips(it, t.total, null).map((c) => c.value), [8800, 6600, 6600, 5500, 3300, 22_000]);
});

test("10. two 50% chips worth $7,000: only the clicked one is selected", { skip }, () => {
  const chips = paymentChips(item("cCore"), 14_000, 1);
  assert.equal(chips[0].value, 7000);
  assert.equal(chips[1].value, 7000);
  assert.deepEqual(chips.map((c) => c.selected), [false, true, false, false, false]);
});

test("11. page caps: Sprint 3, Campaign 2, Core uncapped", { skip }, () => {
  assert.equal(canAddPage(item("sprint"), 2), true);
  assert.equal(canAddPage(item("sprint"), 3), false);
  assert.equal(canAddPage(item("campaign"), 2), false);
  assert.equal(canAddPage(item("sCore"), 40), true);
  assert.equal(canAddPage(item("cCore"), 40), true);
  assert.equal(canAddPage(item("audit"), 0), false);
});

test("12. planner defaults: both ≈ $28,369/mo, one ≈ $14,184/mo", { skip }, () => {
  const n = plannerNumbers(DEFAULT_GOALS, cfg);
  assert.equal(Math.round(n.both), 28_369);
  assert.equal(Math.round(n.one), 14_184);
});

test("ledger balances, clamping, paid-down sources, and the Log button's entries", () => {
  const e = [
    { id: "1", acct: "card" as const, kind: "charge" as const, amount: 7000, date: "2026-10-26", note: "Start" },
    { id: "2", acct: "card" as const, kind: "payment" as const, amount: 2312.5, date: "2026-10-27", note: "", source: "project" as const },
    { id: "3", acct: "card" as const, kind: "payment" as const, amount: 50, date: "2026-10-28", note: "" },
    { id: "4", acct: "runway" as const, kind: "deposit" as const, amount: 250, date: "2026-10-28", note: "" },
    { id: "5", acct: "runway" as const, kind: "withdrawal" as const, amount: 100, date: "2026-10-29", note: "" },
  ];
  const b = balances(e);
  assert.equal(b.card, 4637.5);
  assert.equal(b.cardStart, 7000);
  assert.equal(b.runway, 150);
  assert.deepEqual(paidDownBySource(e), { bySource: { project: 2312.5, other: 50 }, total: 2362.5 });
  assert.equal(balances([{ ...e[0], amount: 10 }, { ...e[1], amount: 20 }]).card, 0);

  const logged = entriesToLog(
    { amount: 3000, contractor: 0, net: 3000, ethan: 720, blair: 720, ethanTax: 330, blairTax: 330, toCard: 500, toRunway: 250, operating: 150, topUp: 0, cardBefore: 500 },
    "2026-10-26",
    { note: "Sprint", source: "project", item: "sprint", received: 3000 },
  );
  assert.deepEqual(logged.map((x) => [x.acct, x.kind, x.amount]), [["card", "payment", 500], ["runway", "deposit", 250]]);
});
