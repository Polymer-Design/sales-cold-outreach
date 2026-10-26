"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  SOURCE_LABEL,
  balances,
  paidDownBySource,
  sortEntries,
  usd,
  usd2,
  type Acct,
  type Kind,
  type LedgerEntry,
  type Source,
} from "@/lib/money/split";
import { api } from "./api";

const KINDS: Record<Acct, { value: Kind; label: string }[]> = {
  card: [
    { value: "charge", label: "New charge" },
    { value: "payment", label: "Payment" },
  ],
  runway: [
    { value: "deposit", label: "Deposit" },
    { value: "withdrawal", label: "Withdrawal" },
  ],
};
const SOURCES = Object.keys(SOURCE_LABEL) as Source[];

const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export default function Ledger({ acct, entries, goal }: { acct: Acct; entries: LedgerEntry[]; goal: number }) {
  const router = useRouter();
  const b = balances(entries);
  const list = sortEntries(entries.filter((e) => e.acct === acct));

  const [kind, setKind] = useState<Kind>(KINDS[acct][0].value);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [source, setSource] = useState<Source>("project");
  const [msg, setMsg] = useState<{ text: string; tone: "" | "ok" | "bad" } | null>(null);
  const [goalInput, setGoalInput] = useState(String(goal));
  const [goalMsg, setGoalMsg] = useState<{ text: string; tone: "" | "ok" | "bad" } | null>(null);

  useEffect(() => setDate(todayISO()), []);
  useEffect(() => setGoalInput(String(goal)), [goal]);

  async function add(e: FormEvent) {
    e.preventDefault();
    const amt = +amount;
    if (!(amt > 0)) {
      setMsg({ text: "Enter an amount above $0.", tone: "bad" });
      return;
    }
    setMsg({ text: "Saving…", tone: "" });
    const entry: Omit<LedgerEntry, "id"> = { acct, kind, amount: amt, date: date || todayISO(), note: note.trim() };
    if (acct === "card" && kind === "payment") entry.source = source;
    try {
      await api("/api/money/entries", "POST", { entries: [entry] });
      setAmount("");
      setNote("");
      setMsg({ text: "Added.", tone: "ok" });
      router.refresh();
    } catch (err) {
      setMsg({ text: (err as Error).message, tone: "bad" });
    }
  }

  async function saveGoal() {
    setGoalMsg({ text: "Saving…", tone: "" });
    try {
      await api("/api/money/settings", "PUT", { runwayGoal: Math.max(0, +goalInput || 0) });
      setGoalMsg({ text: "Goal saved.", tone: "ok" });
      router.refresh();
    } catch (err) {
      setGoalMsg({ text: (err as Error).message, tone: "bad" });
    }
  }

  const paid = b.cardStart - b.card;
  const pct = acct === "card" ? (b.cardStart ? Math.min(100, (paid / b.cardStart) * 100) : 0) : goal ? Math.min(100, Math.max(0, (b.runway / goal) * 100)) : 0;
  const by = paidDownBySource(entries);

  return (
    <div className="stack">
      <section className="card">
        <div className="kicker">{acct === "card" ? "Card balance" : "Runway saved"}</div>
        <div className="big">{usd2(acct === "card" ? b.card : b.runway)}</div>
        <p className="msg" style={{ margin: "10px 0" }}>
          {acct === "card"
            ? b.cardHas
              ? `${usd(paid)} paid of ${usd(b.cardStart)} charged`
              : "No entries yet."
            : goal
              ? `${Math.round((b.runway / goal) * 100)}% of the ${usd(goal)} goal`
              : "Set a goal"}
        </p>
        <div className="meter" aria-hidden="true">
          <span style={{ width: `${pct}%` }} />
        </div>

        {acct === "card" && by.total > 0 && (
          <div className="stack" style={{ marginTop: 18, gap: 8 }}>
            <span className="kicker" style={{ margin: 0 }}>
              Paid down with
            </span>
            <div className="stackbar" aria-hidden="true">
              {SOURCES.map((s) => (by.bySource[s] ? <span key={s} className={`m-src-${s}`} style={{ width: `${(by.bySource[s]! / by.total) * 100}%` }} /> : null))}
            </div>
            <div className="legend">
              {SOURCES.filter((s) => by.bySource[s]).map((s) => (
                <span key={s}>
                  <i className={`sw m-src-${s}`} />
                  {SOURCE_LABEL[s]} <span className="num">{usd(by.bySource[s]!)}</span> ({Math.round((by.bySource[s]! / by.total) * 100)}%)
                </span>
              ))}
            </div>
          </div>
        )}

        {acct === "runway" && (
          <div className="row" style={{ marginTop: 18 }}>
            <label className="field" style={{ maxWidth: 200 }}>
              Runway goal
              <input type="number" min={0} step={500} value={goalInput} onChange={(e) => setGoalInput(e.target.value)} />
            </label>
            <button type="button" className="btn" style={{ alignSelf: "flex-end" }} onClick={saveGoal}>
              Save goal
            </button>
            {goalMsg && (
              <span className={`msg ${goalMsg.tone}`} style={{ alignSelf: "flex-end", paddingBottom: 10 }}>
                {goalMsg.text}
              </span>
            )}
          </div>
        )}
      </section>

      <section className="card">
        <h2 style={{ marginBottom: 14 }}>Add an entry</h2>
        <form className="fields" onSubmit={add} noValidate>
          <label className="field">
            Type
            <select value={kind} onChange={(e) => setKind(e.target.value as Kind)}>
              {KINDS[acct].map((k) => (
                <option key={k.value} value={k.value}>
                  {k.label}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            Amount
            <input type="number" min={0} step={0.01} inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <label className="field">
            Date
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          {acct === "card" && kind === "payment" && (
            <label className="field">
              Paid with
              <select value={source} onChange={(e) => setSource(e.target.value as Source)}>
                {SOURCES.map((s) => (
                  <option key={s} value={s}>
                    {SOURCE_LABEL[s]}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label className="field wide">
            Note
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder={acct === "card" ? "e.g. Starting balance" : "e.g. Moved from operating"} />
          </label>
          <div className="field wide">
            <div className="row">
              <button type="submit" className="btn primary">
                Add entry
              </button>
              {msg && <span className={`msg ${msg.tone}`}>{msg.text}</span>}
            </div>
          </div>
        </form>
      </section>

      <section className="card">
        <h2 style={{ marginBottom: 6 }}>Entries</h2>
        {!list.length ? (
          <p className="empty">
            {acct === "card" ? "No entries yet. Add the starting balance as a new charge." : "No deposits yet. They'll show up here as you log payments."}
          </p>
        ) : (
          list.map((e) => <EntryRow key={e.id} e={e} />)
        )}
      </section>
    </div>
  );
}

function EntryRow({ e }: { e: LedgerEntry }) {
  const router = useRouter();
  const [armed, setArmed] = useState(false);
  const [err, setErr] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);
  const neg = (e.acct === "card" && e.kind === "payment") || (e.acct === "runway" && e.kind === "withdrawal");
  const cls = e.acct === "card" ? (neg ? "minus" : "plus") : neg ? "out" : "in";

  async function del() {
    if (!armed) {
      setArmed(true);
      t.current = setTimeout(() => setArmed(false), 3000);
      return;
    }
    if (t.current) clearTimeout(t.current);
    try {
      await api(`/api/money/entries/${e.id}`, "DELETE");
      router.refresh();
    } catch {
      setErr(true);
      setArmed(false);
    }
  }

  return (
    <div className="entry">
      <span className="d">{e.date}</span>
      <span className="n">
        {e.note || e.kind}
        {e.source && <span className="tag">{SOURCE_LABEL[e.source]}</span>}
      </span>
      <span className={`a ${cls}`}>
        {neg ? "−" : "+"}
        {usd2(e.amount)}
      </span>
      <button type="button" className={`linkbtn danger${armed ? " armed" : ""}`} onClick={del} aria-label={armed ? "Confirm delete" : "Delete entry"}>
        {err ? "Couldn't delete" : armed ? "Confirm" : "Delete"}
      </button>
    </div>
  );
}
