import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getFunnelStats, getQueueCounts, getReplyCount, getSystemMode } from "@/lib/data";
import SignOutButton from "./sign-out-button";

const STAGE_LABELS: { key: "emailed" | "replied" | "interested" | "booked" | "won"; label: string }[] = [
  { key: "emailed", label: "Emailed" },
  { key: "replied", label: "Replied" },
  { key: "interested", label: "Interested" },
  { key: "booked", label: "Booked" },
  { key: "won", label: "Won" },
];

export default async function OverviewPage() {
  const session = await getServerSession(authOptions);
  const { counts, bookedRate, closeRate, leadsTotal } = getFunnelStats();
  const queue = getQueueCounts();
  const mode = getSystemMode();
  const replies = getReplyCount();
  const maxStage = Math.max(1, counts.emailed);

  return (
    <main>
      <div className="topbar">
        <div className="brand">
          <div className="mark">
            <span /><span /><span /><span />
          </div>
          <div className="name">Polymer</div>
        </div>
        <div className="topright">
          <span className={`modebadge ${mode}`}>{mode.replace("_", " ")}</span>
          {session?.user?.email && <span className="who">{session.user.email}</span>}
          <SignOutButton />
        </div>
      </div>

      <div className="wrap">
        <h1>Outreach Command Center</h1>
        <p className="sub">Real data, read straight from the repo. Rebuilds on every push to main.</p>

        <div className="stats">
          <div className="stat">
            <div className="label">Booked-call rate</div>
            <div className="val">{bookedRate !== null ? `${bookedRate}%` : "—"}</div>
            <div className="sub2">
              {counts.booked} booked / {counts.emailed} emailed
            </div>
          </div>
          <div className="stat">
            <div className="label">Close rate</div>
            <div className="val">{closeRate !== null ? `${closeRate}%` : "—"}</div>
            <div className="sub2">
              {counts.won} won / {counts.booked} booked
            </div>
          </div>
          <div className="stat">
            <div className="label">Emails sent</div>
            <div className="val">{counts.emailed}</div>
            <div className="sub2">{leadsTotal} leads total</div>
          </div>
          <div className="stat">
            <div className="label">Replies</div>
            <div className="val">{replies}</div>
            <div className="sub2">logged in data/replies/</div>
          </div>
        </div>

        <div className="card">
          <div className="kicker">The funnel</div>
          {counts.emailed === 0 ? (
            <p className="empty">
              Nothing yet, mode is <b>{mode.replace("_", " ")}</b>. This fills in once real sends start.
            </p>
          ) : (
            STAGE_LABELS.map((s) => (
              <div className="frow" key={s.key}>
                <span className="flabel">{s.label}</span>
                <div className="ftrack">
                  <div
                    className="ffill"
                    style={{ width: `${Math.max(4, (counts[s.key] / maxStage) * 100)}%` }}
                  >
                    {counts[s.key]}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="card">
          <div className="kicker">Needs you</div>
          <ul className="needslist">
            <li>
              <b>{queue.pendingApproval}</b> booking replies awaiting approval
            </li>
            <li>
              <b>{queue.drafts}</b> drafts in the queue
            </li>
            <li>
              <b>{queue.approvedToSend}</b> approved, waiting to be sent in Apollo
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
