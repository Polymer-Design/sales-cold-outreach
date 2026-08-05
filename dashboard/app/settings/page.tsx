import { getSystemConfig } from "@/lib/config";
import Topbar from "../topbar";

export default async function SettingsPage() {
  const cfg = getSystemConfig();

  return (
    <main>
      <Topbar active="settings" />
      <div className="wrap">
        <h1>Settings</h1>
        <p className="sub">
          Read straight from <code>config/system.yaml</code>. There&apos;s no separate settings
          database - to change any of this, edit the file and push to main.
        </p>

        <div className="cardgrid">
          <div className="card">
            <div className="kicker">Booking</div>
            <div className="kv">
              <span className="k">Tool</span>
              <span className="v">{cfg.booking.tool ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Interested-reply approval</span>
              <span className="v">{cfg.approval.interestedReplyEmail ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Startups scheduler</span>
              <span className="v mono">{cfg.booking.links.startups ? "set" : "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Churches scheduler</span>
              <span className="v mono">{cfg.booking.links.churches ? "set" : "—"}</span>
            </div>
          </div>

          <div className="card">
            <div className="kicker">Limits</div>
            <div className="kv">
              <span className="k">Max decision makers / org</span>
              <span className="v">{cfg.limits.maxDecisionMakersPerOrg ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">New leads scored / day</span>
              <span className="v">{cfg.limits.newLeadsScoredPerDay ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Emails drafted / day</span>
              <span className="v">{cfg.limits.emailsDraftedPerDay ?? "—"}</span>
            </div>
          </div>

          <div className="card">
            <div className="kicker">Scoring</div>
            <div className="kv">
              <span className="k">Hot threshold</span>
              <span className="v">{cfg.scoring.hotMin ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Warm threshold</span>
              <span className="v">{cfg.scoring.warmMin ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Draft cold tier</span>
              <span className="v">{cfg.scoring.draftColdTier ?? "—"}</span>
            </div>
          </div>

          <div className="card">
            <div className="kicker">Sequence</div>
            <div className="kv">
              <span className="k">Steps</span>
              <span className="v">{cfg.sequenceCfg.steps ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Wait days between steps</span>
              <span className="v">{cfg.sequenceCfg.waitDays ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Recycle after (days)</span>
              <span className="v">{cfg.sequenceCfg.recycleAfterDays ?? "—"}</span>
            </div>
          </div>

          <div className="card">
            <div className="kicker">Notifications</div>
            <div className="kv">
              <span className="k">Channel</span>
              <span className="v">{cfg.notifications.channel ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">To</span>
              <span className="v mono">{cfg.notifications.to ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">From</span>
              <span className="v mono">{cfg.notifications.from ?? "—"}</span>
            </div>
          </div>

          <div className="card">
            <div className="kicker">CAN-SPAM</div>
            <div className="kv">
              <span className="k">Physical address</span>
              <span className="v mono">{cfg.canSpam.physicalAddress ?? "—"}</span>
            </div>
            <div className="kv">
              <span className="k">Unsubscribe</span>
              <span className="v">{cfg.canSpam.unsubscribe ?? "—"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
