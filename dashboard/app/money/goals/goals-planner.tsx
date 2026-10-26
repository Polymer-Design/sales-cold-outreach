"use client";

import { useEffect, useState } from "react";
import type { FullTimeSplit, PricingConfig } from "@/lib/money/config";
import {
  BUILD_KEYS,
  BUILD_LABEL,
  DEFAULT_GOALS,
  PLAN_KEYS,
  ladder,
  mergeGoals,
  plannerNumbers,
  type GoalsState,
} from "@/lib/money/goals";
import { usd, usdK } from "@/lib/money/split";

const STORE = "polymer-goals";
const ALLOC: { key: keyof FullTimeSplit; label: string; cls: string }[] = [
  { key: "ownerPay", label: "Owner pay", cls: "m-ethan" },
  { key: "taxes", label: "Taxes", cls: "m-etax" },
  { key: "operating", label: "Operating", cls: "m-ops" },
  { key: "reserve", label: "Reserve", cls: "m-runway" },
  { key: "growth", label: "Growth", cls: "m-card" },
];

function Stepper({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) {
  return (
    <span className="stepper">
      <button type="button" aria-label={`Fewer ${label}`} onClick={() => onChange(Math.max(0, value - 1))} disabled={value === 0}>
        −
      </button>
      <span>{value}</span>
      <button type="button" aria-label={`More ${label}`} onClick={() => onChange(value + 1)}>
        +
      </button>
    </span>
  );
}

export default function GoalsPlanner({
  cfg,
  ledger,
}: {
  cfg: PricingConfig;
  ledger: { cardHas: boolean; card: number; runway: number };
}) {
  const [s, setS] = useState<GoalsState>(DEFAULT_GOALS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      setS(mergeGoals(JSON.parse(localStorage.getItem(STORE) || "null")));
    } catch {
      /* private window or blocked storage: defaults are fine */
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORE, JSON.stringify(s));
    } catch {
      /* not persisted this visit */
    }
  }, [s, loaded]);

  const upd = (fn: (d: GoalsState) => void) =>
    setS((cur) => {
      const d = structuredClone(cur);
      fn(d);
      return d;
    });
  const n = plannerNumbers(s, cfg);
  const alloc = n.alloc;
  const allocOk = Math.abs(n.allocSum - 100) < 0.01;
  const gap = n.mixTotal - n.both;
  const scale = Math.max(n.both, n.mixTotal) || 1;
  const rungs = ladder(s, n, ledger);
  const runNeed = n.one * 3.5;
  const price = (k: string) => cfg.items.find((i) => i.key === k)?.price ?? 0;
  const item = (k: string) => cfg.items.find((i) => i.key === k);
  const exampleBuild = price("cCore");

  const rungCopy = [
    {
      goal: ledger.cardHas ? (ledger.card > 0 ? `${usd(ledger.card)} left` : "Paid off") : "Add the card balance",
      items: [
        "Hosting reimbursements go 100% to the card",
        `${cfg.splits.build.cardOrRunway}% of every build and ${cfg.splits.plan.cardOrRunway}% of every plan goes to the card`,
      ],
    },
    { goal: `${usd(5000)}/mo in monthly plans`, items: ["Track real hours per build and per plan", "Card/runway share builds the runway"] },
    {
      goal: `${usd(n.one)}/mo for 3 months`,
      items: ["At least $5k of it recurring", `Runway of about ${usdK(runNeed)} (you have ${usd(ledger.runway)})`, "Ethan can scale down his day job gradually before this"],
    },
    { goal: `${usd(n.both)}/mo for 3–6 months`, items: ["About half recurring", "Switch to the full-time split above", "Then raises and hiring come out of growth"] },
  ];

  return (
    <div className="stack">
      <div className="stats">
        <div className="stat accent">
          <div className="label">Both full-time needs</div>
          <div className="val">{usd(n.both)}</div>
          <div className="sub2">per month · {usdK(n.both * 12)} a year</div>
        </div>
        <div className="stat">
          <div className="label">First person full-time</div>
          <div className="val">{usd(n.one)}</div>
          <div className="sub2">per month</div>
        </div>
        <div className="stat">
          <div className="label">This mix brings in</div>
          <div className="val">{usd(n.mixTotal)}</div>
          <div className="sub2">
            {gap >= 0 ? "Covers both of you" : n.mixTotal >= n.one ? `Covers one · ${usd(-gap)} short of both` : `${usd(-gap)} short of both`}
          </div>
        </div>
      </div>

      <div className="cardgrid">
        <section className="card stack">
          <h2>Targets</h2>
          <label className="field">
            Take-home each, per year <span className="hint num">{usdK(s.takeHome)}</span>
            <input className="range" type="range" min={50000} max={150000} step={5000} value={s.takeHome} onChange={(e) => upd((d) => void (d.takeHome = +e.target.value))} />
          </label>
          <label className="field">
            Close rate on intro calls <span className="hint num">{s.closeRate}%</span>
            <input className="range" type="range" min={10} max={60} step={1} value={s.closeRate} onChange={(e) => upd((d) => void (d.closeRate = +e.target.value))} />
          </label>
          <label className="field">
            Billable hours each, per week <span className="hint num">{s.hrsEach} hrs</span>
            <input className="range" type="range" min={15} max={40} step={1} value={s.hrsEach} onChange={(e) => upd((d) => void (d.hrsEach = +e.target.value))} />
          </label>
          <div className="kicker" style={{ margin: "6px 0 0" }}>
            Full-time split
          </div>
          {ALLOC.map((a) => (
            <label key={a.key} className="field">
              <span>
                <i className={`sw ${a.cls}`} />
                {a.label} <span className="hint num">{alloc[a.key]}%</span>
              </span>
              <input
                className="range"
                type="range"
                min={0}
                max={70}
                step={0.5}
                value={alloc[a.key]}
                onChange={(e) => upd((d) => void (d.alloc = { ...(d.alloc ?? cfg.fullTimeSplit), [a.key]: +e.target.value }))}
              />
            </label>
          ))}
          <p className={`msg ${allocOk ? "ok" : "bad"}`}>
            {allocOk ? "Splits add up to 100%." : `Splits add up to ${n.allocSum}%. Adjust until they hit 100% (the math scales them for now).`}
          </p>
          <div className="stackbar" aria-hidden="true">
            {ALLOC.map((a) => (
              <span key={a.key} className={a.cls} style={{ width: `${(alloc[a.key] / (n.allocSum || 1)) * 100}%` }} />
            ))}
          </div>
          <div className="lines">
            {ALLOC.map((a) => (
              <div key={a.key}>
                <span>
                  <i className={`sw ${a.cls}`} />
                  {a.label}
                </span>
                <span className="num">{usd((exampleBuild * alloc[a.key]) / (n.allocSum || 1))}</span>
              </div>
            ))}
          </div>
          <p className="note">Shown on a {usd(exampleBuild)} Church Core.</p>
        </section>

        <section className="card stack">
          <h2>Client mix</h2>
          <table className="mix">
            <thead>
              <tr>
                <th>Monthly plan</th>
                <th className="r">Price</th>
                <th className="r">Hrs</th>
                <th>Clients</th>
                <th className="r">/mo</th>
              </tr>
            </thead>
            <tbody>
              {PLAN_KEYS.map((k) => (
                <tr key={k}>
                  <td>{item(k)?.name ?? k}</td>
                  <td className="r num">{usd(price(k))}</td>
                  <td className="r num">{item(k)?.hoursCap ?? 0}</td>
                  <td>
                    <Stepper value={s.plans[k]} label={item(k)?.name ?? k} onChange={(v) => upd((d) => void (d.plans[k] = v))} />
                  </td>
                  <td className="r num">{usd(s.plans[k] * price(k))}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="mix">
            <thead>
              <tr>
                <th>Build</th>
                <th className="r">Price</th>
                <th className="r">Est. hrs</th>
                <th>Per year</th>
                <th className="r">/mo</th>
              </tr>
            </thead>
            <tbody>
              {BUILD_KEYS.map((k) => (
                <tr key={k}>
                  <td>{BUILD_LABEL[k]}</td>
                  <td className="r num">{usd(price(k))}</td>
                  <td className="r">
                    <input
                      type="number"
                      min={0}
                      step={5}
                      value={s.buildHours[k]}
                      aria-label={`${BUILD_LABEL[k]} hours`}
                      onChange={(e) => upd((d) => void (d.buildHours[k] = Math.max(0, +e.target.value || 0)))}
                    />
                  </td>
                  <td>
                    <Stepper value={s.builds[k]} label={BUILD_LABEL[k]} onChange={(v) => upd((d) => void (d.builds[k] = v))} />
                  </td>
                  <td className="r num">{usd((s.builds[k] * price(k)) / 12)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="lines">
            <div className="total">
              <span>Mix total</span>
              <span className="num">{usd(n.mixTotal)}/mo</span>
            </div>
          </div>
          <div className="stack" style={{ gap: 6 }}>
            <span className="msg">Recurring vs. target ({usd(n.both)})</span>
            <div className="meter" aria-hidden="true">
              <span style={{ width: `${(n.mrr / scale) * 100}%` }} />
            </div>
            <span className="msg">Everything vs. target</span>
            <div className="meter" aria-hidden="true">
              <span style={{ width: `${(n.mixTotal / scale) * 100}%`, background: "var(--purple)" }} />
            </div>
            <p className="note">
              Monthly plans cover {Math.round((n.mrr / n.both) * 100)}% of the target.
              {n.mrr >= n.both * 0.5 ? " A slow build quarter won't sink you." : " The more of this that's recurring, the calmer slow months feel."}
            </p>
          </div>
        </section>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="label">Hours needed / month</div>
          <div className="val">{Math.round(n.hoursNeeded)} hrs</div>
          <div className="sub2">
            {Math.round(n.planHours)} plans + {Math.round(n.buildHours)} builds ·{" "}
            {n.hoursNeeded <= n.capacity
              ? `fits: about ${Math.round(n.capacity)} between you, ${Math.round(n.capacity - n.hoursNeeded)} to spare`
              : `over by ${Math.round(n.hoursNeeded - n.capacity)} hrs: hire a contractor, raise prices, or shift to higher-priced work`}
          </div>
        </div>
        <div className="stat">
          <div className="label">Weekly revenue at target</div>
          <div className="val">{usd(n.weeklyRevenueAtTarget)}</div>
          <div className="sub2">
            {n.planClients} plan clients · {(n.buildsPerYear / 12).toFixed(1)} builds a month
          </div>
        </div>
        <div className="stat">
          <div className="label">Intro calls a week</div>
          <div className="val">{n.introCallsPerWeek.toFixed(1)}</div>
          <div className="sub2">
            to land {n.buildsPerYear} builds and {n.planClients} plan clients in a year
          </div>
        </div>
      </div>

      <div className="cardgrid">
        <section className="card">
          <h2 style={{ marginBottom: 6 }}>The ladder</h2>
          {rungs.map((r, i) => (
            <div key={r.title} className={`rung${r.met ? " done" : ""}`}>
              <div className="dot">{r.met ? "✓" : i + 1}</div>
              <div>
                <div className="row between">
                  <strong>{r.title}</strong>
                  <span className={`pill ${r.met ? "good" : "neutral"}`}>{rungCopy[i].goal}</span>
                </div>
                <ul>
                  {rungCopy[i].items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
        <section className="card stack">
          <h2>Actuals</h2>
          <p className="note" style={{ margin: 0 }}>
            Enter the real numbers to tick the ladder off.
          </p>
          <label className="field">
            Monthly plan revenue (MRR)
            <input type="number" min={0} step={100} value={s.actMrr} onChange={(e) => upd((d) => void (d.actMrr = Math.max(0, +e.target.value || 0)))} />
          </label>
          <label className="field">
            Average monthly revenue, last 3 months
            <input type="number" min={0} step={100} value={s.actAvg} onChange={(e) => upd((d) => void (d.actAvg = Math.max(0, +e.target.value || 0)))} />
          </label>
          <button type="button" className="btn" onClick={() => setS(structuredClone(DEFAULT_GOALS))}>
            Reset my scenario
          </button>
        </section>
      </div>
    </div>
  );
}
