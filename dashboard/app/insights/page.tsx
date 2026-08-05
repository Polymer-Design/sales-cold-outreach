import { getExperiments, getPagespeedBenchmark } from "@/lib/data";
import { getPlaybookConfig } from "@/lib/config";
import Topbar from "../topbar";

export default async function InsightsPage() {
  const playbook = getPlaybookConfig();
  const experiments = getExperiments();
  const pagespeed = getPagespeedBenchmark();

  return (
    <main>
      <Topbar active="insights" />
      <div className="wrap">
        <h1>Insights</h1>
        <p className="sub">The current copy playbook, split-test log, and proof-point benchmark.</p>

        <div className="card">
          <div className="cardhead">
            <div className="kicker" style={{ marginBottom: 0 }}>
              Active copy playbook
            </div>
            {playbook.updated && <span className="pill neutral">updated {playbook.updated}</span>}
          </div>
          <div className="kv">
            <span className="k">Subject style</span>
            <span className="v">{playbook.subjectStyle ?? "—"}</span>
          </div>
          <div className="kv">
            <span className="k">First-line angle</span>
            <span className="v">{playbook.firstLineAngle ?? "—"}</span>
          </div>
          <div className="kv">
            <span className="k">Body length target (email 1)</span>
            <span className="v">{playbook.bodyLengthTargetWords ?? "—"} words</span>
          </div>
          <div className="kv">
            <span className="k">CTA style</span>
            <span className="v">{playbook.ctaStyle ?? "—"}</span>
          </div>
          <div className="kv">
            <span className="k">Proof style</span>
            <span className="v">{playbook.proofStyle ?? "—"}</span>
          </div>
          <div className="kv">
            <span className="k">Send time (recipient-local)</span>
            <span className="v">{playbook.sendTimeLocal ?? "—"}</span>
          </div>
        </div>

        <div className="card">
          <div className="kicker">Split tests</div>
          <div className="kv">
            <span className="k">Running now</span>
            <span className="v">
              {experiments.running && !/^\*\(none/.test(experiments.running) ? experiments.running : "None"}
            </span>
          </div>
          <div className="kv">
            <span className="k">Completed</span>
            <span className="v">{experiments.completedCount}</span>
          </div>
          {experiments.backlog.length > 0 && (
            <>
              <p className="note" style={{ marginTop: 14, marginBottom: 6 }}>
                Backlog (not started):
              </p>
              <ul className="plain">
                {experiments.backlog.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="card">
          <div className="cardhead">
            <div className="kicker" style={{ marginBottom: 0 }}>
              PageSpeed benchmark
            </div>
            {pagespeed.status && (
              <span className={`pill ${pagespeed.status === "approved" ? "good" : "warn"}`}>
                {pagespeed.status}
              </span>
            )}
          </div>
          {pagespeed.avgPerf ? (
            <>
              <div className="stats" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 0 }}>
                <div className="stat">
                  <div className="label">Performance</div>
                  <div className="val">{pagespeed.avgPerf}</div>
                </div>
                <div className="stat">
                  <div className="label">Accessibility</div>
                  <div className="val">{pagespeed.avgA11y}</div>
                </div>
                <div className="stat">
                  <div className="label">Best practices</div>
                  <div className="val">{pagespeed.avgBestPractices}</div>
                </div>
                <div className="stat">
                  <div className="label">SEO</div>
                  <div className="val">{pagespeed.avgSeo}</div>
                </div>
              </div>
              <p className="note">
                Avg LCP {pagespeed.avgLcp} · sample {pagespeed.sampleSize} · refreshed {pagespeed.refreshed}
              </p>
            </>
          ) : (
            <p className="empty">Benchmark not built yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
