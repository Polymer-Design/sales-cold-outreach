import { getQueueCounts, getReplyCount, getSystemMode } from "@/lib/data";
import { getDomainsConfig, getSystemConfig } from "@/lib/config";
import Topbar from "../topbar";

export default async function SystemPage() {
  const mode = getSystemMode();
  const cfg = getSystemConfig();
  const domains = getDomainsConfig();
  const queue = getQueueCounts();
  const replies = getReplyCount();

  return (
    <main>
      <Topbar active="system" />
      <div className="wrap">
        <h1>System</h1>
        <p className="sub">Operational health - inbox status, sending mode, queue state.</p>

        <div className="card">
          <div className="cardhead">
            <div className="kicker" style={{ marginBottom: 0 }}>
              Mode
            </div>
            <span className={`modebadge ${mode}`}>{mode.replace("_", " ")}</span>
          </div>
          <p className="empty">
            {mode === "dry_run"
              ? "Nothing is written to Apollo. Drafts queue to data/ for review instead."
              : "Live - Apollo contacts, sequences, and sends are created for real."}
          </p>
        </div>

        <div className="cardgrid">
          <div className="card">
            <div className="kicker">Inbox health ({cfg.inboxHealth.provider ?? "—"})</div>
            <div className="kv">
              <span className="k">Watch below</span>
              <span className="v">{cfg.inboxHealth.watchBelow ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Alarm below</span>
              <span className="v">{cfg.inboxHealth.alarmBelow ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Warmup send cap</span>
              <span className="v">{cfg.inboxHealth.warmupDaily ?? "—"} / day</span>
            </div>
            <div className="kv">
              <span className="k">Healthy send cap</span>
              <span className="v">{cfg.inboxHealth.healthyDaily ?? "—"} / day</span>
            </div>
          </div>

          <div className="card">
            <div className="kicker">Queue</div>
            <div className="kv">
              <span className="k">Drafts</span>
              <span className="v">{queue.drafts}</span>
            </div>
            <div className="kv">
              <span className="k">Pending approval</span>
              <span className="v">{queue.pendingApproval}</span>
            </div>
            <div className="kv">
              <span className="k">Approved, awaiting send</span>
              <span className="v">{queue.approvedToSend}</span>
            </div>
            <div className="kv">
              <span className="k">Sent</span>
              <span className="v">{queue.sent}</span>
            </div>
            <div className="kv">
              <span className="k">Replies logged</span>
              <span className="v">{replies}</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="kicker">Mailbox routing</div>
          {domains.map((d) => {
            const allConnected = d.mailboxesTotal > 0 && d.mailboxesConnected === d.mailboxesTotal;
            return (
              <div className="kv" key={d.icp}>
                <span className="k" style={{ textTransform: "capitalize" }}>
                  {d.icp} - {d.domain ?? "no domain set"}
                </span>
                <span className="v">
                  <span className={`pill ${allConnected ? "good" : "crit"}`}>
                    {d.mailboxesConnected}/{d.mailboxesTotal} connected
                  </span>
                </span>
              </div>
            );
          })}
          <p className="note">
            Connected in Apollo via OAuth. Placeholders (REPLACE_ME) block live mode&apos;s preflight
            check.
          </p>
        </div>
      </div>
    </main>
  );
}
