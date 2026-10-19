import { listHotTierPRs, getPRDraftFiles } from "@/lib/github";
import { parseHotDraft } from "@/lib/parse-hot-draft";
import Topbar from "../topbar";
import HotBatchGroup, { type HotLead } from "./hot-batch-group";

export default async function HotLeadsPage() {
  const token = process.env.GITHUB_DISPATCH_TOKEN;
  let batches: Array<{ prNumber: number; html_url: string; leads: HotLead[] }> = [];
  let loadError: string | null = null;

  if (!token) {
    loadError = "GITHUB_DISPATCH_TOKEN isn't set - see dashboard/README.md.";
  } else {
    try {
      const prs = await listHotTierPRs(token);
      batches = await Promise.all(
        prs.map(async (pr) => {
          const files = await getPRDraftFiles(pr, token);
          const leads = files.map((file) => {
            const draft = parseHotDraft(file.content);
            return { path: file.path, ...draft.frontmatter, subject: draft.subject, body: draft.body };
          });
          return { prNumber: pr.number, html_url: pr.html_url, leads };
        })
      );
      // Oldest batch first so a PR that's been waiting longest surfaces at the top.
      batches.sort((a, b) => a.prNumber - b.prNumber);
    } catch (err) {
      loadError = err instanceof Error ? err.message : "Failed to load hot-tier drafts.";
    }
  }

  const totalLeads = batches.reduce((n, b) => n + b.leads.length, 0);

  return (
    <main>
      <Topbar active="hot-leads" />
      <div className="wrap">
        <h1>Hot Leads</h1>
        <p className="sub">
          Hot-tier leads (score 75+) hold here for your review before email 1 ever sends -
          per the standing rule, only hot tier and interested-reply bookings need a human
          look first. Edit email 1 if it needs a tweak, Remove a lead you don&apos;t want
          sent, or Approve the batch once it&apos;s ready - that merges the same PR the
          pipeline opened, no GitHub UI needed.
        </p>

        {loadError && (
          <div className="card">
            <p className="formmsg error">{loadError}</p>
          </div>
        )}
        {!loadError && totalLeads === 0 && (
          <div className="card">
            <p className="empty">Nothing waiting on you right now.</p>
          </div>
        )}
        {batches.map((b) => (
          <HotBatchGroup key={b.prNumber} prNumber={b.prNumber} html_url={b.html_url} leads={b.leads} />
        ))}
      </div>
    </main>
  );
}
