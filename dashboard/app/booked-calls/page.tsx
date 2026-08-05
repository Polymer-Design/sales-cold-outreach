import { getCallPrepBriefs, getFunnelStats } from "@/lib/data";
import Topbar from "../topbar";

export default async function BookedCallsPage() {
  const briefs = getCallPrepBriefs();
  const { counts } = getFunnelStats();

  return (
    <main>
      <Topbar active="booked-calls" />
      <div className="wrap">
        <h1>Booked Calls</h1>
        <p className="sub">Call-prep briefings, generated automatically once a lead books.</p>

        <div className="stats" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div className="stat">
            <div className="label">Booked (funnel-tracked)</div>
            <div className="val">{counts.booked}</div>
          </div>
          <div className="stat">
            <div className="label">Call-prep briefs on file</div>
            <div className="val">{briefs.length}</div>
          </div>
        </div>

        <div className="card">
          <div className="kicker">Briefs</div>
          {briefs.length === 0 ? (
            <p className="empty">No call-prep briefs yet. One is written to data/call-prep/ the moment a lead books.</p>
          ) : (
            briefs.map((b) => (
              <div className="listcard" key={b.file}>
                <div className="listcardhead">
                  <span className="title">{b.title}</span>
                  <div className="badgerow">
                    {b.icp && <span className="pill icp">{b.icp}</span>}
                    {b.track && <span className="pill neutral">{b.track}</span>}
                  </div>
                </div>
                <div className="listcardmeta">
                  {b.when && <>When: {b.when} · </>}
                  {b.leadScore && <>Lead score: {b.leadScore}</>}
                </div>
                {b.summary && <div className="listcardbody">{b.summary}</div>}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
