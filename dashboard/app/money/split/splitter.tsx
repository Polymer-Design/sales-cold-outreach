"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Item, PricingConfig, Split } from "@/lib/money/config";
import {
  SOURCE_FOR_GROUP,
  balances,
  canAddPage,
  computeSplit,
  defaultAddonState,
  entriesToLog,
  pagesAllowed,
  paymentChips,
  projectTotals,
  r2,
  splitSentence,
  usd,
  usd2,
  type AddonState,
  type LedgerEntry,
} from "@/lib/money/split";
import { api } from "../api";

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export default function Splitter({
  cfg,
  splits,
  entries,
}: {
  cfg: PricingConfig;
  splits: { build: Split; plan: Split };
  entries: LedgerEntry[];
}) {
  const router = useRouter();
  const startItem = cfg.items.find((i) => i.key === "cCore") ?? cfg.items[0];
  const [itemKey, setItemKey] = useState(startItem.key);
  const item = cfg.items.find((i) => i.key === itemKey) as Item;

  const [pages, setPages] = useState(0);
  const [customAmount, setCustomAmount] = useState(startItem.price ?? 0);
  const [addons, setAddons] = useState<AddonState>(() => defaultAddonState(startItem, cfg));
  const [friends, setFriends] = useState(false);
  const [pi, setPi] = useState<number | null>(0);
  const [manualAmount, setManualAmount] = useState(0);
  const [contractor, setContractor] = useState(0);
  const [topUp, setTopUp] = useState(0);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<{ text: string; tone: "" | "ok" | "bad" } | null>(null);
  const [busy, setBusy] = useState(false);

  const isBuild = item.group === "build";
  const hosting = item.group === "hosting";
  const totals = projectTotals(item, { extraPages: pages, customAmount, addons, friends }, cfg);
  const chips = paymentChips(item, totals.total, pi);
  // A selected chip drives the amount and follows total changes; typing an amount clears it.
  const activePi = pi !== null && chips[pi] ? pi : pi !== null && chips.length ? 0 : null;
  const amount = activePi !== null ? chips[activePi].value : manualAmount;

  const { card: cardBalance } = useMemo(() => balances(entries), [entries]);
  const o = computeSplit({ group: item.group, amount, contractor: hosting ? 0 : contractor, topUp: hosting ? 0 : topUp, cardBalance, splits });

  function pickItem(key: string) {
    const it = cfg.items.find((i) => i.key === key) as Item;
    setItemKey(key);
    setPages(0);
    setCustomAmount(it.price ?? 0);
    setAddons(defaultAddonState(it, cfg));
    setFriends(false);
    setStatus(null);
    const first = paymentChips(it, it.price ?? 0, 0);
    if (first.length) setPi(0);
    else {
      setPi(null);
      setManualAmount(100);
    }
  }

  const rows: [string, number, string][] = [
    ["Ethan pay", o.ethan, "m-ethan"],
    ["Blair pay", o.blair, "m-blair"],
    ["Ethan taxes", o.ethanTax, "m-etax"],
    ["Blair taxes", o.blairTax, "m-btax"],
    ["Card payment", o.toCard, "m-card"],
    ["Runway", o.toRunway, "m-runway"],
    ["Operating", o.operating, "m-ops"],
  ];
  if (o.contractor > 0) rows.push(["Contractor", o.contractor, "m-contractor"]);

  const categories = [...new Set(cfg.items.map((i) => i.category))];
  const canLog = o.toCard > 0 || o.toRunway > 0;

  async function log() {
    setBusy(true);
    setStatus({ text: "Saving…", tone: "" });
    const label =
      item.name + (pagesAllowed(item) && pages ? ` +${pages} page${pages > 1 ? "s" : ""}` : "") + (note.trim() ? ` · ${note.trim()}` : "");
    const meta: Omit<LedgerEntry, "id" | "acct" | "kind" | "amount" | "date"> = {
      note: label,
      source: SOURCE_FOR_GROUP[item.group],
      item: item.key,
      received: amount,
    };
    if (isBuild) {
      meta.projectTotal = totals.total;
      if (pagesAllowed(item)) meta.extraPages = pages;
      const on = Object.entries(addons)
        .filter(([k, a]) => a.on && !(item.included ?? []).includes(k))
        .map(([key, a]) => ({ key, price: +a.price || 0 }));
      if (on.length) meta.addons = on;
      if (totals.discount) meta.friendsDiscount = totals.discount;
      if (activePi !== null) meta.payment = chips[activePi].label;
    }
    try {
      await api("/api/money/entries", "POST", { entries: entriesToLog(o, today(), meta) });
      setStatus({
        text: `Logged ${[o.toCard > 0 ? `${usd2(r2(o.toCard))} to card` : "", o.toRunway > 0 ? `${usd2(r2(o.toRunway))} to runway` : ""]
          .filter(Boolean)
          .join(" and ")}.`,
        tone: "ok",
      });
      router.refresh();
    } catch (err) {
      setStatus({ text: (err as Error).message, tone: "bad" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="splitgrid">
      <section className="card stack">
        <h2>What came in</h2>
        <label className="field">
          Item
          <select value={itemKey} onChange={(e) => pickItem(e.target.value)}>
            {categories.map((c) => (
              <optgroup key={c} label={c}>
                {cfg.items
                  .filter((i) => i.category === c)
                  .map((i) => (
                    <option key={i.key} value={i.key}>
                      {i.name}
                      {i.price ? ` · ${i.customTotal ? "from " : ""}${usd(i.price)}` : ""}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </label>

        {pagesAllowed(item) && (
          <div className="field">
            Extra pages ({usd(cfg.extraPagePrice)} each)
            <div className="row">
              <span className="stepper">
                <button type="button" aria-label="Fewer pages" onClick={() => setPages((n) => Math.max(0, n - 1))} disabled={pages === 0}>
                  −
                </button>
                <span>{pages}</span>
                <button type="button" aria-label="More pages" onClick={() => setPages((n) => n + 1)} disabled={!canAddPage(item, pages)}>
                  +
                </button>
              </span>
              {item.maxExtraPages != null && <span className="msg">Max {item.maxExtraPages} on {item.name}</span>}
            </div>
          </div>
        )}

        {item.customTotal && (
          <label className="field">
            {item.scheduleRule
              ? `Fixed quote (hours × $150–175, ${usd(item.minimum ?? item.price ?? 0)} minimum)`
              : "Full project amount (scoped price)"}
            <input type="number" min={0} step={250} value={customAmount} onChange={(e) => setCustomAmount(Math.max(0, +e.target.value || 0))} />
          </label>
        )}

        {!!item.addons?.length && (
          <div className="field">
            Add-ons
            <div>
              {item.addons.map((k) => {
                const A = cfg.addons[k];
                const included = (item.included ?? []).includes(k);
                const st = addons[k];
                return (
                  <div key={k} className="addonrow">
                    <label className="check">
                      <input
                        type="checkbox"
                        checked={included || st.on}
                        disabled={included}
                        onChange={(e) => setAddons((a) => ({ ...a, [k]: { ...a[k], on: e.target.checked } }))}
                      />
                      {A.name}
                    </label>
                    {included ? (
                      <span className="pill good">Included</span>
                    ) : A.editablePrice ? (
                      <span className="row" style={{ gap: 4 }}>
                        <span className="dim">$</span>
                        <input
                          style={{ width: 96 }}
                          type="number"
                          min={0}
                          step={250}
                          value={st.price}
                          aria-label={`${A.name} price`}
                          onChange={(e) => setAddons((a) => ({ ...a, [k]: { ...a[k], price: Math.max(0, +e.target.value || 0) } }))}
                        />
                      </span>
                    ) : (
                      <span className="num dim">{usd(A.price)}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {isBuild && (
          <label className="check">
            <input type="checkbox" checked={friends} onChange={(e) => setFriends(e.target.checked)} />
            Friends discount ({cfg.friendsDiscountPct}%)
          </label>
        )}

        {isBuild && (totals.pages > 0 || totals.addons > 0 || totals.discount > 0) && (
          <div className="lines" style={{ background: "var(--surface-2)", borderRadius: "var(--radius-sm)", padding: "4px 14px" }}>
            <div>
              <span>{item.customTotal ? "Scoped price" : item.name}</span>
              <span className="num">{usd(totals.base)}</span>
            </div>
            {totals.pages > 0 && (
              <div>
                <span>
                  {pages} extra page{pages > 1 ? "s" : ""}
                </span>
                <span className="num">+{usd(totals.pages)}</span>
              </div>
            )}
            {totals.addons > 0 && (
              <div>
                <span>Add-ons</span>
                <span className="num">+{usd(totals.addons)}</span>
              </div>
            )}
            {totals.discount > 0 && (
              <div>
                <span>Friends discount ({cfg.friendsDiscountPct}%)</span>
                <span className="num">−{usd(totals.discount)}</span>
              </div>
            )}
            <div className="total">
              <span>Project total</span>
              <span className="num">{usd(totals.total)}</span>
            </div>
          </div>
        )}

        <div className="field">
          Which payment
          {chips.length ? (
            <div className="chiprow">
              {chips.map((c, i) => (
                <button key={i} type="button" className="chipbtn" aria-pressed={activePi === i} onClick={() => setPi(i)}>
                  {c.label} · {usd(c.value)}
                </button>
              ))}
            </div>
          ) : (
            <span className="msg">Enter the amount the client reimbursed.</span>
          )}
        </div>

        <div className="fields">
          <label className="field">
            Amount received
            <input
              type="number"
              min={0}
              step={1}
              value={amount}
              onChange={(e) => {
                setManualAmount(Math.max(0, Math.round(+e.target.value || 0)));
                setPi(null);
              }}
            />
          </label>
          {!hosting && (
            <label className="field">
              Contractor cost <span className="hint">taken off before the split</span>
              <input type="number" min={0} step={50} value={contractor} onChange={(e) => setContractor(Math.max(0, +e.target.value || 0))} />
            </label>
          )}
          {!hosting && (
            <label className="field">
              Top up operating <span className="hint">from the card/runway share</span>
              <input type="number" min={0} step={50} value={topUp} onChange={(e) => setTopUp(Math.max(0, +e.target.value || 0))} />
            </label>
          )}
          <label className="field wide">
            Note
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Grace Church" />
          </label>
        </div>
      </section>

      <section className="card stack sticky" aria-live="polite">
        <h2>Where it goes</h2>
        <div className="stackbar" aria-hidden="true">
          {rows.map(([n, v, c]) => (v > 0 ? <span key={n} className={c} style={{ width: `${(v / (o.amount || 1)) * 100}%` }} /> : null))}
        </div>
        <div className="lines">
          {rows
            .filter(([n, v]) => v > 0 || (!hosting && (n === "Ethan pay" || n === "Blair pay")))
            .map(([n, v, c]) => (
              <div key={n}>
                <span>
                  <i className={`sw ${c}`} />
                  {n}
                </span>
                <span className="num">{usd2(r2(v))}</span>
              </div>
            ))}
          <div className="total">
            <span>Total</span>
            <span className="num">{usd2(o.amount)}</span>
          </div>
        </div>
        <p className="msg">{splitSentence(o, item.group)}</p>
        <div className="row">
          <button type="button" className="btn primary" disabled={!canLog || busy} onClick={log}>
            Log card / runway
          </button>
          {status && <span className={`msg ${status.tone}`}>{status.text}</span>}
        </div>
        <p className="note">Owner pay, taxes and operating aren&apos;t logged here. Move those in the bank.</p>
      </section>
    </div>
  );
}
