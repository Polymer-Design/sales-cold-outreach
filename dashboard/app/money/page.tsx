import Link from "next/link";
import Topbar from "../topbar";
import DbNotice from "../db-notice";
import MoneySummary from "./summary";
import { loadMoney } from "@/lib/money/page-data";
import { SOURCE_LABEL, balances, sortEntries, usd, usd2 } from "@/lib/money/split";

export const dynamic = "force-dynamic";

export default async function MoneyOverviewPage() {
  const m = await loadMoney();
  const b = m ? balances(m.entries) : null;
  const goal = m?.settings.runwayGoal ?? 0;
  const recent = m ? sortEntries(m.entries).slice(0, 8) : [];

  return (
    <main>
      <Topbar active="money-overview" />
      <div className="wrap">
        <h1>Money</h1>
        <p className="sub">Pay the card off first, then build runway. Shared between Ethan and Blair.</p>
        {!m || !b ? (
          <DbNotice what="Money" />
        ) : (
          <>
            <MoneySummary entries={m.entries} goal={goal} />
            <div className="cardgrid">
              <section className="card">
                <div className="row between">
                  <div className="kicker" style={{ margin: 0 }}>
                    Card paydown
                  </div>
                  <Link href="/money/card" className="linkbtn">
                    Open ledger →
                  </Link>
                </div>
                <div className="big" style={{ margin: "12px 0" }}>
                  {usd2(b.card)}
                </div>
                <div className="meter" aria-hidden="true">
                  <span style={{ width: `${b.cardStart ? Math.min(100, ((b.cardStart - b.card) / b.cardStart) * 100) : 0}%` }} />
                </div>
                <p className="note">{b.cardHas ? `${usd(b.cardStart - b.card)} paid of ${usd(b.cardStart)} charged` : "Add the starting balance on the Card tab."}</p>
              </section>
              <section className="card">
                <div className="row between">
                  <div className="kicker" style={{ margin: 0 }}>
                    Runway
                  </div>
                  <Link href="/money/runway" className="linkbtn">
                    Open ledger →
                  </Link>
                </div>
                <div className="big" style={{ margin: "12px 0" }}>
                  {usd2(b.runway)}
                </div>
                <div className="meter" aria-hidden="true">
                  <span style={{ width: `${goal ? Math.min(100, Math.max(0, (b.runway / goal) * 100)) : 0}%` }} />
                </div>
                <p className="note">{goal ? `${Math.round((b.runway / goal) * 100)}% of the ${usd(goal)} goal` : "Set a goal on the Runway tab."}</p>
              </section>
            </div>
            <section className="card">
              <div className="row between" style={{ marginBottom: 6 }}>
                <h2>Recent activity</h2>
                <Link href="/money/split" className="btn primary">
                  Split a payment
                </Link>
              </div>
              {!recent.length ? (
                <p className="empty">Nothing logged yet.</p>
              ) : (
                recent.map((e) => {
                  const neg = (e.acct === "card" && e.kind === "payment") || (e.acct === "runway" && e.kind === "withdrawal");
                  const cls = e.acct === "card" ? (neg ? "minus" : "plus") : neg ? "out" : "in";
                  return (
                    <div key={e.id} className="entry" style={{ gridTemplateColumns: "92px minmax(0,1fr) auto" }}>
                      <span className="d">{e.date}</span>
                      <span className="n">
                        {e.note || e.kind}
                        <span className="tag">{e.acct === "card" ? "Card" : "Runway"}</span>
                        {e.source && <span className="tag">{SOURCE_LABEL[e.source]}</span>}
                      </span>
                      <span className={`a ${cls}`}>
                        {neg ? "−" : "+"}
                        {usd2(e.amount)}
                      </span>
                    </div>
                  );
                })
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
