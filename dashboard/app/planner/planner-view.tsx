"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  PEOPLE,
  PERSON_NAME,
  TIER_KEYS,
  fmtLong,
  fmtShort,
  isoDate,
  loadLevel,
  mondayOf,
  needsSlotDeposit,
  parseDate,
  planner,
  waitLevel,
  type Build,
  type PlannerSettings,
  type TierKey,
} from "@/lib/planner/schedule";
import { useToast } from "../toast";

const round1 = (n: number) => Math.round(n * 10) / 10;
const KIND_LEGEND = [
  ["concept", "Concept (Blair's heaviest)"],
  ["design", "Page design"],
  ["review", "Waiting on client"],
  ["dev", "Development"],
  ["launch", "QA + launch"],
] as const;

async function api(url: string, method: string, body?: unknown) {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "That didn't save. Try again in a moment.");
  return data;
}

export default function PlannerView({ builds, settings, today }: { builds: Build[]; settings: PlannerSettings; today: string }) {
  const router = useRouter();
  const toast = useToast();
  const p = useMemo(() => planner(settings), [settings]);
  const load = useMemo(() => p.buildLoad(builds), [p, builds]);
  const todayT = parseDate(today);
  const now = p.week(todayT);

  const [offset, setOffset] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [tier, setTier] = useState<TierKey>("sprint");
  const [windowSel, setWindowSel] = useState<string | null>(null);
  const [otherDate, setOtherDate] = useState("");
  const [formMsg, setFormMsg] = useState<{ text: string; tone: "" | "ok" | "bad" } | null>(null);
  const [busy, setBusy] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // ---- booking form ----
  const windowOpts = p.windows(10, todayT).map((w) => {
    const c = p.conflicts(tier, w, load);
    return { w, ok: !c.length, why: c[0]?.msg };
  });
  const firstOk = windowOpts.find((o) => o.ok) ?? windowOpts[0];
  const sel = windowSel ?? String(firstOk.w);
  const chosenWeek = sel === "other" ? (otherDate ? p.week(parseDate(otherDate)) : null) : Number(sel);

  let fit: { text: string; tone: "ok" | "bad" | "" } = { text: "Pick a date.", tone: "" };
  if (chosenWeek !== null && !Number.isNaN(chosenWeek)) {
    const c = p.conflicts(tier, chosenWeek, load);
    const launch = p.launchDate(tier, chosenWeek);
    fit = !c.length
      ? { text: `Fits. Launch by ${fmtLong(launch)}.`, tone: "ok" }
      : {
          text: `Over capacity: ${c
            .slice(0, 2)
            .map((x) => x.msg)
            .join("; ")}${c.length > 2 ? ` (+${c.length - 2} more)` : ""}. You can still book it if you'll make up the hours.`,
          tone: "bad",
        };
  }

  function bookSlot(t: TierKey, w: number) {
    setTier(t);
    setWindowSel(String(w));
    setFormMsg(null);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    formRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    nameRef.current?.focus({ preventScroll: true });
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setFormMsg({ text: "Add the client name first.", tone: "bad" });
      nameRef.current?.focus();
      return;
    }
    if (chosenWeek === null || Number.isNaN(chosenWeek)) {
      setFormMsg({ text: "Pick a kickoff date.", tone: "bad" });
      return;
    }
    setBusy(true);
    try {
      const kickoff = isoDate(p.weekDate(chosenWeek));
      const { id } = await api("/api/planner/builds", "POST", { name: name.trim(), tier, kickoff });
      setSelectedId(id);
      setName("");
      setWindowSel(null);
      setFormMsg(null);
      toast(`Booked ${name.trim()} for ${fmtShort(p.weekDate(chosenWeek))}`);
      router.refresh();
    } catch (err) {
      setFormMsg({ text: (err as Error).message, tone: "bad" });
    } finally {
      setBusy(false);
    }
  }

  // ---- schedule grid ----
  const start = now + offset;
  const weeks = Array.from({ length: 12 }, (_, i) => start + i);
  const visible = builds
    .filter((b) => {
      const k0 = p.week(parseDate(b.kickoff));
      return k0 <= weeks[11] && k0 + p.tierOf(b).phases.length - 1 >= weeks[0];
    })
    .sort((a, b) => a.kickoff.localeCompare(b.kickoff));

  const selected = builds.find((b) => b.id === selectedId) ?? null;
  const proposal = selected ? p.proposal(selected) : null;

  async function copyDates() {
    if (!proposal) return;
    try {
      await navigator.clipboard.writeText(proposal.text);
      toast("Dates copied");
    } catch {
      toast("Couldn't reach the clipboard. Select the dates and copy them by hand.");
    }
  }

  const mb = round1(p.monthlyPerWeek("blair"));
  const me = round1(p.monthlyPerWeek("ethan"));
  const cad = +settings.cadence;

  return (
    <>
      <p className="lede">
        <span>
          Blair <b className="num">{p.cap("blair")}h</b>/wk{mb ? ` · ${mb}h to monthly plans` : ""}
        </span>
        <span>
          Ethan <b className="num">{p.cap("ethan")}h</b>/wk{me ? ` · ${me}h to monthly plans` : ""}
        </span>
        <span>Rule: one concept phase per week</span>
        <span>Kickoff = the discovery meeting (proposal, contract, first payment and onboarding come before it)</span>
      </p>

      <section className="stack" aria-labelledby="slots-h">
        <div className="row between">
          <h2 id="slots-h">Next open kickoff</h2>
          <span className="msg">Kickoffs every {cad === 1 ? "week" : `${cad} weeks`} on Mondays</span>
        </div>
        <div className="cardgrid">
          {TIER_KEYS.map((key) => {
            const t = settings.tiers[key];
            const w = p.nextOpen(key, load, todayT);
            const hrsB = t.phases.reduce((s, x) => s + (+x.blair || 0), 0);
            const hrsE = t.phases.reduce((s, x) => s + (+x.ethan || 0), 0);
            if (w === null) {
              return (
                <div key={key} className="card slotcard">
                  <div className="kicker">{t.name}</div>
                  <div className="when">No opening</div>
                  <p className="note">Nothing fits in the next year at current hours.</p>
                </div>
              );
            }
            const out = w - now;
            return (
              <div key={key} className="card slotcard">
                <div className="kicker">{t.name}</div>
                <div className="when">{fmtLong(p.weekDate(w))}</div>
                <span className={`wait ${waitLevel(out)}`}>{out <= 0 ? "Starts this week" : `${out} week${out === 1 ? "" : "s"} out`}</span>
                <p className="note">
                  Launch by {fmtLong(p.launchDate(key, w))}
                  <br />
                  <span className="num">
                    {hrsB}h Blair · {hrsE}h Ethan · {t.note}
                  </span>
                </p>
                <div style={{ marginTop: 12 }}>
                  <button type="button" className="btn" onClick={() => bookSlot(key, w)}>
                    Book this slot
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="stack" aria-labelledby="sched-h" style={{ marginTop: "clamp(18px, 2.4vw, 32px)" }}>
        <div className="row between">
          <h2 id="sched-h">Schedule</h2>
          <div className="row">
            <button type="button" className="btn" onClick={() => setOffset((o) => o - 4)} aria-label="Earlier weeks">
              ← Earlier
            </button>
            <button type="button" className="btn" onClick={() => setOffset(0)}>
              This week
            </button>
            <button type="button" className="btn" onClick={() => setOffset((o) => o + 4)} aria-label="Later weeks">
              Later →
            </button>
          </div>
        </div>
        <div className="legend">
          {KIND_LEGEND.map(([k, label]) => (
            <span key={k}>
              <i className={`sw ph-${k}`} />
              {label}
            </span>
          ))}
        </div>
        <div className="gridscroll">
          <table className="sched">
            <thead>
              <tr>
                <th className="rowhead">Week of</th>
                {weeks.map((w) => (
                  <th key={w} className={w === now ? "cur" : undefined}>
                    {fmtShort(p.weekDate(w))}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!visible.length && (
                <tr>
                  <td colSpan={13} className="dim" style={{ padding: "18px 14px" }}>
                    No builds in these weeks. Book one below and its phases appear here.
                  </td>
                </tr>
              )}
              {visible.map((b) => {
                const k0 = p.week(parseDate(b.kickoff));
                const ph = p.tierOf(b).phases;
                return (
                  <tr key={b.id}>
                    <th className="rowhead">
                      {b.name}
                      <small>{p.tierOf(b).name}</small>
                    </th>
                    {weeks.map((w) => {
                      const x = ph[w - k0];
                      return (
                        <td key={w} className="cell">
                          {x && (
                            <span className={`phasechip ph-${x.kind}`} title={`${x.name} · Blair ${x.blair}h, Ethan ${x.ethan}h`}>
                              {x.name}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              {PEOPLE.map((person, idx) => (
                <tr key={person} className={`loadrow${idx === 0 ? " first" : ""}`}>
                  <th className="rowhead">{PERSON_NAME[person]} hrs</th>
                  {weeks.map((w) => {
                    const used = round1((load[w]?.[person] ?? 0) + p.monthlyPerWeek(person));
                    return (
                      <td key={w}>
                        <span className={`lv ${loadLevel(used, p.cap(person))}`}>
                          {used}/{p.cap(person)}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="cardgrid" style={{ marginTop: "clamp(18px, 2.4vw, 32px)" }}>
        <section className="card" aria-labelledby="add-h">
          <h2 id="add-h" style={{ marginBottom: 14 }}>
            Book a signed build
          </h2>
          <form ref={formRef} className="fields" onSubmit={submit} noValidate>
            <label className="field">
              Client
              <input ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Grace Hill Church" autoComplete="off" />
            </label>
            <label className="field">
              Tier
              <select
                value={tier}
                onChange={(e) => {
                  setTier(e.target.value as TierKey);
                  setWindowSel(null);
                }}
              >
                {TIER_KEYS.map((k) => (
                  <option key={k} value={k}>
                    {settings.tiers[k].name}
                  </option>
                ))}
              </select>
            </label>
            <label className="field wide">
              Kickoff
              <select value={sel} onChange={(e) => setWindowSel(e.target.value)}>
                {windowOpts.map((o) => (
                  <option key={o.w} value={o.w}>
                    {fmtLong(p.weekDate(o.w))} — {o.ok ? "open" : `full (${o.why})`}
                  </option>
                ))}
                <option value="other">Another date…</option>
              </select>
            </label>
            {sel === "other" && (
              <label className="field wide">
                Kickoff date <span className="hint">any day; it snaps to that Monday</span>
                <input type="date" value={otherDate} onChange={(e) => setOtherDate(e.target.value)} />
              </label>
            )}
            <p className={`msg field wide ${formMsg?.tone ?? fit.tone}`} aria-live="polite">
              {formMsg?.text ?? fit.text}
            </p>
            <div className="field wide">
              <div>
                <button type="submit" className="btn primary" disabled={busy}>
                  {busy ? "Booking…" : "Book build"}
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="card" aria-labelledby="prop-h">
          <div className="row between" style={{ marginBottom: 12 }}>
            <h2 id="prop-h">Proposal dates</h2>
            <button type="button" className="btn" disabled={!proposal} onClick={copyDates}>
              Copy dates
            </button>
          </div>
          {!selected || !proposal ? (
            <p className="empty">Book a build, or pick “Dates” on a booked one, to get every phase date for the proposal or kickoff email.</p>
          ) : (
            <>
              <p style={{ fontWeight: 700, margin: "0 0 8px" }}>
                {selected.name} <span className="dim" style={{ fontWeight: 500 }}>· {proposal.tier.name}</span>
              </p>
              <ul className="phaselist">
                {proposal.phases.map((ph, i) => (
                  <li key={i}>
                    <i className={`sw ph-${ph.kind}`} />
                    <span>{ph.label}</span>
                    <span className="when">wk of {fmtShort(ph.weekOf)}</span>
                  </li>
                ))}
                <li>
                  <i />
                  <span>Launch</span>
                  <span className="when">{fmtLong(proposal.launch)}</span>
                </li>
              </ul>
            </>
          )}
        </section>
      </div>

      <section className="card" aria-labelledby="builds-h">
        <div className="row between" style={{ marginBottom: 6 }}>
          <h2 id="builds-h">Booked builds</h2>
          <span className="msg">Change a kickoff when a client slips; the schedule and open slots update for both of you.</span>
        </div>
        {!builds.length ? (
          <p className="empty">No builds booked yet. When a deposit lands, book it above; the open slots for every tier move to make room.</p>
        ) : (
          [...builds]
            .sort((a, b) => a.kickoff.localeCompare(b.kickoff))
            .map((b) => <BuildRow key={b.id} b={b} p={p} today={todayT} selected={b.id === selectedId} onSelect={() => setSelectedId(b.id)} onRemoved={() => selectedId === b.id && setSelectedId(null)} />)
        )}
      </section>
    </>
  );
}

function BuildRow({
  b,
  p,
  today,
  selected,
  onSelect,
  onRemoved,
}: {
  b: Build;
  p: ReturnType<typeof planner>;
  today: number;
  selected: boolean;
  onSelect: () => void;
  onRemoved: () => void;
}) {
  const router = useRouter();
  const toast = useToast();
  const [armed, setArmed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  // Native "change" fires once a full date is committed (picker or blur), unlike React's
  // onChange, which would PATCH on every keystroke while typing a date.
  useEffect(() => {
    const el = dateRef.current;
    if (!el) return;
    const onChange = () => {
      if (el.value && el.value !== b.kickoff) move(el.value);
    };
    el.addEventListener("change", onChange);
    return () => el.removeEventListener("change", onChange);
  });
  const t = p.tierOf(b);
  const st = p.status(b, today);
  const k0 = p.week(parseDate(b.kickoff));
  const pill = st.kind === "launched" ? "neutral" : st.kind === "upcoming" ? "warn" : "good";

  async function move(date: string) {
    if (!date) return;
    try {
      await api(`/api/planner/builds/${b.id}`, "PATCH", { kickoff: date });
      router.refresh();
    } catch (err) {
      toast((err as Error).message);
    }
  }

  async function remove() {
    if (!armed) {
      setArmed(true);
      timer.current = setTimeout(() => setArmed(false), 4000);
      return;
    }
    if (timer.current) clearTimeout(timer.current);
    try {
      await api(`/api/planner/builds/${b.id}`, "DELETE");
      onRemoved();
      toast("Build removed");
      router.refresh();
    } catch (err) {
      toast((err as Error).message);
    }
  }

  return (
    <div className={`buildrow${selected ? " sel" : ""}`}>
      <div className="nm">
        {b.name}
        <small>{t.name}</small>
      </div>
      <div className="dates row">
        <span className="num">
          {fmtShort(mondayOf(parseDate(b.kickoff)))} → {fmtShort(p.launchDate(b.tier, k0))}
        </span>
        <span className={`pill ${pill}`}>{st.label}</span>
        {needsSlotDeposit(b) && <span className="pill icp">Slot deposit (25%)</span>}
      </div>
      <label className="field kick">
        <span className="sr-only">Kickoff for {b.name}</span>
        <input ref={dateRef} type="date" defaultValue={b.kickoff} key={b.kickoff} />
      </label>
      <div className="row" style={{ gap: 2 }}>
        <button type="button" className="linkbtn" onClick={onSelect}>
          Dates
        </button>
        <button type="button" className={`linkbtn danger${armed ? " armed" : ""}`} onClick={remove}>
          {armed ? "Confirm remove" : "Remove"}
        </button>
      </div>
    </div>
  );
}
