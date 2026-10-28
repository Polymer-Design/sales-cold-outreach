import { getInboxHealth, getQueueCounts, getReplyCount, getSystemMode } from "@/lib/data";
import { getDomainsConfig, getSystemConfig } from "@/lib/config";
import { listBookingReplyPRs } from "@/lib/github";
import Topbar from "../topbar";

export default async function SystemPage() {
  const mode = getSystemMode();
  const cfg = getSystemConfig();
  const domains = getDomainsConfig();
  const queue = getQueueCounts();
  const replies = getReplyCount();
  const inboxHealth = getInboxHealth();

  const token = process.env.GITHUB_DISPATCH_TOKEN;
  let pendingApproval: number | null = null;
  if (token) {
    try {
      pendingApproval = (await listBookingReplyPRs(token)).length;
    } catch {
      pendingApproval = null;
    }
  }

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
            <div className="kicker">Inbox health thresholds ({cfg.inboxHealth.provider ?? "—"})</div>
            <div className="kv">
              <span className="k">Watch above (bounce rate)</span>
              <span className="v">{cfg.inboxHealth.bounceWatchAbovePct ?? "—"}%</span>
            </div>
            <div className="kv">
              <span className="k">Alarm above (bounce rate)</span>
              <span className="v">{cfg.inboxHealth.bounceAlarmAbovePct ?? "—"}%</span>
            </div>
            <div className="kv">
              <span className="k">Min sends to evaluate</span>
              <span className="v">{cfg.inboxHealth.minSendsToEvaluate ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">New contacts per inbox</span>
              <span className="v">{cfg.inboxHealth.newContactsPerMailboxDaily ?? "—"} / day (~3× that in total emails once follow-ups run)</span>
            </div>
          </div>

          <div className="card">
            <div className="kicker">Queue</div>
            <div className="kv">
              <span className="k">Drafts</span>
              <span className="v">{queue.drafts}</span>
            </div>
            <div className="kv">
              <span className="k">Pending approval (open PRs)</span>
              <span className="v">{pendingApproval ?? "—"}</span>
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
          <div className="cardhead">
            <div className="kicker" style={{ marginBottom: 0 }}>
              Mailbox health (bounce rate, trailing 30 days)
            </div>
            {inboxHealth.checkedAt && (
              <span className="note" style={{ margin: 0 }}>
                checked {new Date(inboxHealth.checkedAt).toLocaleString()}
              </span>
            )}
          </div>
          {inboxHealth.mailboxes.length === 0 ? (
            <p className="empty">
              No health data yet - scripts/apollo_inbox_health.py runs daily and writes
              data/inbox-health/latest.json once it has.
            </p>
          ) : (
            inboxHealth.mailboxes.map((m) => {
              const pillClass =
                m.status === "alarm" ? "crit" : m.status === "watch" ? "warn" : m.status === "healthy" ? "good" : "neutral";
              const label =
                m.status === "insufficient_data"
                  ? `warming up (${m.sent_last_30d} sent)`
                  : `${m.bounce_rate_pct}% bounce (${m.sent_last_30d} sent)`;
              return (
                <div className="kv" key={m.email}>
                  <span className="k">{m.email}</span>
                  <span className="v">
                    <span className={`pill ${pillClass}`}>{label}</span>
                  </span>
                </div>
              );
            })
          )}
        </div>

        <div className="card">
          <div className="kicker">Mailbox routing</div>
          {domains.map((d) => {
            const allConnected = d.mailboxesTotal > 0 && d.mailboxesConnected === d.mailboxesTotal;
            return (
              <div className="kv" key={d.icp}>
                <span className="k">
                  <span style={{ textTransform: "capitalize" }}>{d.icp}</span> -{" "}
                  {d.domain ?? "no domain set"}
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
