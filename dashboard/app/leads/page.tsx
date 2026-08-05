import { getFunnelStats, getLeadsFiles } from "@/lib/data";
import { getDomainsConfig, getIcpConfigs } from "@/lib/config";
import Topbar from "../topbar";

export default async function LeadsPage() {
  const icps = getIcpConfigs();
  const domains = getDomainsConfig();
  const leadsFiles = getLeadsFiles();

  return (
    <main>
      <Topbar active="leads" />
      <div className="wrap">
        <h1>Leads</h1>
        <p className="sub">ICP definitions and routing, read straight from config/.</p>

        <div className="cardgrid">
          {icps.map((icp) => {
            const domain = domains.find((d) => d.icp === icp.icp);
            const { counts, leadsTotal } = getFunnelStats(icp.icp);
            return (
              <div className="card" key={icp.icp}>
                <div className="cardhead">
                  <h2 style={{ textTransform: "capitalize" }}>{icp.icp}</h2>
                  <span className={`pill ${icp.status === "final" ? "good" : "warn"}`}>
                    {icp.status ?? "unknown"}
                  </span>
                </div>
                {icp.description && <p className="empty">{icp.description}</p>}
                <div className="kv">
                  <span className="k">Funnel-tracked leads</span>
                  <span className="v">{leadsTotal}</span>
                </div>
                <div className="kv">
                  <span className="k">Emailed</span>
                  <span className="v">{counts.emailed}</span>
                </div>
                {icp.attendanceFloor && (
                  <div className="kv">
                    <span className="k">Attendance floor</span>
                    <span className="v">{icp.attendanceFloor}+</span>
                  </div>
                )}
                <div className="kv">
                  <span className="k">Sending domain</span>
                  <span className="v mono">{domain?.domain ?? "—"}</span>
                </div>
                <div className="kv">
                  <span className="k">Mailboxes connected</span>
                  <span className="v">
                    {domain?.mailboxesConnected ?? 0} / {domain?.mailboxesTotal ?? 0}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card">
          <div className="kicker">Lead data on disk</div>
          {leadsFiles.length === 0 ? (
            <p className="empty">Nothing under data/leads/ yet.</p>
          ) : (
            <>
              <ul className="plain">
                {leadsFiles.map((f) => (
                  <li key={f}>
                    <code>{f}</code>
                  </li>
                ))}
              </ul>
              {leadsFiles.every((f) => f.includes(".example.")) && (
                <p className="note">
                  These are example seed fixtures, not real leads - live scoring writes to{" "}
                  <code>data/leads/index.jsonl</code> once Apollo search unblocks (still on the
                  free plan as of now).
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
