import Topbar from "../../topbar";
import DbNotice from "../../db-notice";
import MoneySummary from "../summary";
import Ledger from "../ledger";
import { loadMoney } from "@/lib/money/page-data";

export const dynamic = "force-dynamic";

export default async function CardPage() {
  const m = await loadMoney();
  return (
    <main>
      <Topbar active="money-card" />
      <div className="wrap">
        <h1>Card</h1>
        <p className="sub">The business credit card as a ledger, including what paid it down.</p>
        {!m ? (
          <DbNotice what="Money" />
        ) : (
          <>
            <MoneySummary entries={m.entries} goal={m.settings.runwayGoal} />
            <Ledger acct="card" entries={m.entries} goal={m.settings.runwayGoal} />
          </>
        )}
      </div>
    </main>
  );
}
