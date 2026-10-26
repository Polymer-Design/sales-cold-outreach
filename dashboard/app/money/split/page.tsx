import Topbar from "../../topbar";
import DbNotice from "../../db-notice";
import MoneySummary from "../summary";
import NeedsConfig from "../needs-config";
import Splitter from "./splitter";
import { loadMoney } from "@/lib/money/page-data";

export const dynamic = "force-dynamic";

export default async function SplitPage() {
  const m = await loadMoney();
  return (
    <main>
      <Topbar active="money-split" />
      <div className="wrap">
        <h1>Split a payment</h1>
        <p className="sub">When a client payment lands, see exactly where every dollar goes, then log the card or runway portion.</p>
        {!m ? (
          <DbNotice what="Money" />
        ) : !m.settings.pricing || !m.splits ? (
          <NeedsConfig />
        ) : (
          <>
            <MoneySummary entries={m.entries} goal={m.settings.runwayGoal} />
            <Splitter cfg={m.settings.pricing} splits={m.splits} entries={m.entries} />
          </>
        )}
      </div>
    </main>
  );
}
