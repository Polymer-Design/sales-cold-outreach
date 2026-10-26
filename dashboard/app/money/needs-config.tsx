import Link from "next/link";

export default function NeedsConfig() {
  return (
    <div className="card setup">
      <div className="kicker">One-time setup</div>
      <h2>Import the pricing config first</h2>
      <p className="note">
        Prices, payment schedules, add-ons and split percentages come from pricing-config.json. It lives only in the
        database (this repo is public), so import it once from Money → Settings.
      </p>
      <div style={{ marginTop: 12 }}>
        <Link href="/money/settings" className="btn primary">
          Go to Settings
        </Link>
      </div>
    </div>
  );
}
