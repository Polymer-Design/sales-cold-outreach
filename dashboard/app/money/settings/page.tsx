import Topbar from "../../topbar";
import DbNotice from "../../db-notice";
import { loadMoney } from "@/lib/money/page-data";
import MoneySettingsForm from "./settings-form";

export const dynamic = "force-dynamic";

export default async function MoneySettingsPage() {
  const m = await loadMoney();
  return (
    <main>
      <Topbar active="money-settings" />
      <div className="wrap">
        <h1>Money settings</h1>
        <p className="sub">Splits are shared by both of you. Prices come from the imported pricing config.</p>
        {!m ? (
          <DbNotice what="Money" />
        ) : (
          <MoneySettingsForm
            splits={m.splits}
            configSplits={m.settings.pricing?.splits ?? null}
            customized={m.settings.splits !== null}
            configVersion={m.settings.pricing?.version ?? null}
            entryCount={m.entries.length}
          />
        )}
      </div>
    </main>
  );
}
