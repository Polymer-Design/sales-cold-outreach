"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PEOPLE, PERSON_NAME, TIER_KEYS, type Person, type PlannerSettings } from "@/lib/planner/schedule";

export default function SettingsForm({ initial }: { initial: PlannerSettings }) {
  const router = useRouter();
  const [s, setS] = useState<PlannerSettings>(() => structuredClone(initial));
  const [msg, setMsg] = useState<{ text: string; tone: "ok" | "bad" | "" } | null>(null);
  const [busy, setBusy] = useState(false);

  const set = (fn: (d: PlannerSettings) => void) =>
    setS((cur) => {
      const d = structuredClone(cur);
      fn(d);
      return d;
    });
  const n = (v: string) => Math.max(0, +v || 0);

  async function save() {
    setBusy(true);
    setMsg({ text: "Saving…", tone: "" });
    try {
      const res = await fetch("/api/planner/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(s),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "That didn't save. Try again in a moment.");
      setS(data.settings);
      setMsg({ text: "Saved for both of you.", tone: "ok" });
      router.refresh();
    } catch (err) {
      setMsg({ text: (err as Error).message, tone: "bad" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="stack">
      <section className="card">
        <h2 style={{ marginBottom: 14 }}>Team capacity</h2>
        <div className="fields">
          {PEOPLE.map((p: Person) => (
            <label key={`h-${p}`} className="field">
              {PERSON_NAME[p]}, hrs/week
              <input type="number" min={0} step={0.5} value={s.hours[p]} onChange={(e) => set((d) => void (d.hours[p] = n(e.target.value)))} />
            </label>
          ))}
          {PEOPLE.map((p: Person) => (
            <label key={`m-${p}`} className="field">
              {PERSON_NAME[p]}, monthly-plan hrs/month
              <input type="number" min={0} step={0.5} value={s.monthly[p]} onChange={(e) => set((d) => void (d.monthly[p] = n(e.target.value)))} />
            </label>
          ))}
          <label className="field">
            Kickoff windows start
            <input type="date" value={s.anchor} onChange={(e) => e.target.value && set((d) => void (d.anchor = e.target.value))} />
          </label>
          <label className="field">
            Kickoff every
            <select value={s.cadence} onChange={(e) => set((d) => void (d.cadence = +e.target.value))}>
              <option value={1}>week</option>
              <option value={2}>2 weeks</option>
              <option value={3}>3 weeks</option>
              <option value={4}>4 weeks</option>
            </select>
          </label>
        </div>
      </section>

      <div className="cardgrid">
        {TIER_KEYS.map((key) => {
          const t = s.tiers[key];
          const tb = t.phases.reduce((a, p) => a + (+p.blair || 0), 0);
          const te = t.phases.reduce((a, p) => a + (+p.ethan || 0), 0);
          return (
            <section key={key} className="card">
              <h2>{t.name}</h2>
              <p className="note" style={{ marginBottom: 10 }}>
                {t.note}
              </p>
              <div className="tplscroll">
                <table className="tpl">
                  <thead>
                    <tr>
                      <th>Week</th>
                      <th>Phase</th>
                      <th>Blair h</th>
                      <th>Ethan h</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.phases.map((ph, i) => (
                      <tr key={i}>
                        <td className="num">W{i + 1}</td>
                        <td>
                          <i className={`sw ph-${ph.kind}`} />
                          {ph.name}
                        </td>
                        {PEOPLE.map((p) => (
                          <td key={p}>
                            <input
                              type="number"
                              min={0}
                              step={0.5}
                              value={ph[p]}
                              aria-label={`${t.name} week ${i + 1} ${PERSON_NAME[p]} hours`}
                              onChange={(e) => set((d) => void (d.tiers[key].phases[i][p] = n(e.target.value)))}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td />
                      <td className="dim">Total {tb + te}h</td>
                      <td className="dim num">{tb}</td>
                      <td className="dim num">{te}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>

      <div className="row">
        <button type="button" className="btn primary" onClick={save} disabled={busy}>
          Save settings
        </button>
        {msg && (
          <span className={`msg ${msg.tone}`} aria-live="polite">
            {msg.text}
          </span>
        )}
      </div>
    </div>
  );
}
