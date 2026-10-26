import Topbar from "../topbar";
import DbNotice from "../db-notice";
import { dbConfigured } from "@/lib/db";
import { getPlannerSettings, listBuilds } from "@/lib/planner/store";
import { todayET } from "@/lib/today";
import PlannerView from "./planner-view";

export const dynamic = "force-dynamic";

export default async function PlannerPage() {
  const ready = dbConfigured();
  const [builds, settings] = ready ? await Promise.all([listBuilds(), getPlannerSettings()]) : [[], null];

  return (
    <main>
      <Topbar active="planner-schedule" />
      <div className="wrap">
        <h1>Build Planner</h1>
        {settings ? <PlannerView builds={builds} settings={settings} today={todayET()} /> : <DbNotice what="the Build Planner" />}
      </div>
    </main>
  );
}
