import Topbar from "../../topbar";
import DbNotice from "../../db-notice";
import MoneySummary from "../summary";
import Ledger from "../ledger";
import { loadMoney } from "@/lib/money/page-data";

export const dynamic = "force-dynamic";

export default async function RunwayPage() {
  const m = await loadMoney();
  return (
    <main>
      <Topbar active="money-runway" />
      <div className="wrap">
        <h1>Runway</h1>
        <p className="sub">Savings toward the runway goal.</p>
        {!m ? (
          <DbNotice what="Money" />
        ) : (
          <>
            <MoneySummary entries={m.entries} goal={m.settings.runwayGoal} />
            <Ledger acct="runway" entries={m.entries} goal={m.settings.runwayGoal} />
          </>
        )}
      </div>
    </main>
  );
}
