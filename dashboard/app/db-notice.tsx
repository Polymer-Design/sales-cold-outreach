// Shown on Planner/Money pages until DATABASE_URL is set (Neon integration on Vercel).
export default function DbNotice({ what }: { what: string }) {
  return (
    <div className="card setup">
      <div className="kicker">One-time setup</div>
      <h2>Connect the database to use {what}</h2>
      <p className="note">
        {what} keeps shared data (so Ethan and Blair see the same thing) in Postgres. In Vercel, open the
        sales-cold-outreach project → Storage → Create Database → Neon (free) → connect it to this project. That
        sets DATABASE_URL; redeploy and this page goes live. Tables are created automatically on first use.
      </p>
    </div>
  );
}
