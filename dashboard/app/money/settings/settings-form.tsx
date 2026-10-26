"use client";

import { useState, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { SPLIT_KEYS, type Split } from "@/lib/money/config";
import { api } from "../api";

type Splits = { build: Split; plan: Split };
type Msg = { text: string; tone: "" | "ok" | "bad" } | null;

export default function MoneySettingsForm({
  splits,
  configSplits,
  customized,
  configVersion,
  entryCount,
}: {
  splits: Splits | null;
  configSplits: Splits | null;
  customized: boolean;
  configVersion: string | null;
  entryCount: number;
}) {
  const router = useRouter();
  const [s, setS] = useState<Splits | null>(splits ? structuredClone(splits) : null);
  const [splitMsg, setSplitMsg] = useState<Msg>(null);
  const [importMsg, setImportMsg] = useState<Msg>(null);

  async function saveSplits(next: Splits | null) {
    setSplitMsg({ text: "Saving…", tone: "" });
    try {
      await api("/api/money/settings", "PUT", { splits: next });
      setSplitMsg({ text: next ? "Saved for both of you." : "Back to the config's splits.", tone: "ok" });
      if (!next && configSplits) setS(structuredClone(configSplits));
      router.refresh();
    } catch (err) {
      setSplitMsg({ text: (err as Error).message, tone: "bad" });
    }
  }

  async function importFile(kind: "pricing" | "ledger", e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setImportMsg({ text: `Importing ${file.name}…`, tone: "" });
    try {
      const json = JSON.parse(await file.text());
      const out = await api<{ ledger?: { imported: number; skipped: number } }>("/api/money/import", "POST", { [kind]: json });
      setImportMsg({
        text:
          kind === "pricing"
            ? "Pricing config imported. The splitter and goals planner now use it."
            : `Ledger seed imported: ${out.ledger?.imported ?? 0} new, ${out.ledger?.skipped ?? 0} already there.`,
        tone: "ok",
      });
      router.refresh();
    } catch (err) {
      setImportMsg({ text: err instanceof SyntaxError ? "That file isn't valid JSON." : (err as Error).message, tone: "bad" });
    }
  }

  return (
    <div className="stack">
      <section className="card">
        <h2>Import</h2>
        <p className="note" style={{ marginBottom: 14 }}>
          This repo is public, so pricing and the ledger live only in the database. Import pricing-config.json and
          ledger-seed.json from the Money handoff once; re-importing the seed skips rows that are already there. When
          pricing changes, import the updated config here.
        </p>
        <div className="fields">
          <label className="field">
            Pricing config <span className="hint">{configVersion ? `current: ${configVersion}` : "not imported yet"}</span>
            <input type="file" accept="application/json,.json" onChange={(e) => importFile("pricing", e)} />
          </label>
          <label className="field">
            Ledger seed <span className="hint">{entryCount} ledger entries now</span>
            <input type="file" accept="application/json,.json" onChange={(e) => importFile("ledger", e)} />
          </label>
        </div>
        {importMsg && (
          <p className={`msg ${importMsg.tone}`} style={{ marginTop: 12 }} aria-live="polite">
            {importMsg.text}
          </p>
        )}
      </section>

      <section className="card">
        <h2>Payment splits</h2>
        <p className="note" style={{ marginBottom: 14 }}>
          Percent of net (amount received minus contractor cost). Owner pay is split 50/50. A group that doesn&apos;t add up
          to 100% is scaled to 100% for now.{customized ? " These have been edited from the config's defaults." : ""}
        </p>
        {!s ? (
          <p className="empty">Import the pricing config first; the default splits come from it.</p>
        ) : (
          <div className="cardgrid">
            {(["build", "plan"] as const).map((g) => {
              const total = SPLIT_KEYS.reduce((a, { key }) => a + (+s[g][key] || 0), 0);
              const ok = Math.abs(total - 100) < 0.01;
              return (
                <div key={g}>
                  <div className="kicker">{g === "build" ? "Builds" : "Monthly plans"}</div>
                  <div className="fields">
                    {SPLIT_KEYS.map(({ key, label }) => (
                      <label key={key} className="field">
                        {label} %
                        <input
                          type="number"
                          min={0}
                          max={100}
                          step={0.5}
                          value={s[g][key]}
                          onChange={(e) => {
                            const v = Math.max(0, +e.target.value || 0);
                            setS((cur) => (cur ? { ...cur, [g]: { ...cur[g], [key]: v } } : cur));
                          }}
                        />
                      </label>
                    ))}
                  </div>
                  <p className={`msg ${ok ? "ok" : "bad"}`} style={{ marginTop: 8 }}>
                    Adds up to {total}%{ok ? "" : " (scaled to 100% for now)"}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {s && (
          <div className="row" style={{ marginTop: 14 }}>
            <button type="button" className="btn primary" onClick={() => saveSplits(s)}>
              Save splits
            </button>
            {customized && (
              <button type="button" className="btn" onClick={() => saveSplits(null)}>
                Reset to config
              </button>
            )}
            {splitMsg && <span className={`msg ${splitMsg.tone}`}>{splitMsg.text}</span>}
          </div>
        )}
        <p className="note" style={{ marginTop: 14 }}>
          Hosting reimbursements always go 100% to the card (capped at its balance), with the rest to operating.
        </p>
      </section>
    </div>
  );
}
