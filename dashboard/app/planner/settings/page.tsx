import Topbar from "../../topbar";
import DbNotice from "../../db-notice";
import { dbConfigured } from "@/lib/db";
import { getPlannerSettings } from "@/lib/planner/store";
import SettingsForm from "./settings-form";

export const dynamic = "force-dynamic";

export default async function PlannerSettingsPage() {
  const settings = dbConfigured() ? await getPlannerSettings() : null;
  return (
    <main>
      <Topbar active="planner-settings" />
      <div className="wrap">
        <h1>Capacity & tier templates</h1>
        <p className="sub">
          Hours are production hours per week on Polymer. Monthly-plan hours are what you&apos;ve sold, taken off the top
          every week. A kickoff only counts as open if nobody goes over their weekly hours and Blair never has two concept
          phases in the same week.
        </p>
        {settings ? <SettingsForm initial={settings} /> : <DbNotice what="the Build Planner" />}
      </div>
    </main>
  );
}
