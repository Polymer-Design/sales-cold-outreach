import Topbar from "../../topbar";
import DbNotice from "../../db-notice";
import NeedsConfig from "../needs-config";
import GoalsPlanner from "./goals-planner";
import { loadMoney } from "@/lib/money/page-data";
import { balances } from "@/lib/money/split";

export const dynamic = "force-dynamic";

export default async function GoalsPage() {
  const m = await loadMoney();
  return (
    <main>
      <Topbar active="money-goals" />
      <div className="wrap">
        <h1>Full-time goals</h1>
        <p className="sub">
          What client mix gets you both to full-time, assuming the card is paid off. These sliders are saved in your own
          browser, so Ethan and Blair can each play with their own scenario.
        </p>
        {!m ? <DbNotice what="Money" /> : !m.settings.pricing ? <NeedsConfig /> : <GoalsPlanner cfg={m.settings.pricing} ledger={balances(m.entries)} />}
      </div>
    </main>
  );
}
