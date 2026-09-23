import { listBookingReplyPRs, getPRDraftFile } from "@/lib/github";
import { parseDraft } from "@/lib/parse-draft";
import Topbar from "../topbar";
import ApprovalCard from "./approval-card";

export default async function ApprovalsPage() {
  const token = process.env.GITHUB_DISPATCH_TOKEN;
  let items: Array<{
    number: number;
    html_url: string;
    contact_name?: string;
    organization?: string;
    icp?: string;
    their_reply?: string;
    subject: string;
    body: string;
  }> = [];
  let loadError: string | null = null;

  if (!token) {
    loadError = "GITHUB_DISPATCH_TOKEN isn't set - see dashboard/README.md.";
  } else {
    try {
      const prs = await listBookingReplyPRs(token);
      items = await Promise.all(
        prs.map(async (pr) => {
          const file = await getPRDraftFile(pr, token);
          const draft = parseDraft(file.content);
          return {
            number: pr.number,
            html_url: pr.html_url,
            ...draft.frontmatter,
            subject: draft.subject,
            body: draft.body,
          };
        })
      );
    } catch (err) {
      loadError = err instanceof Error ? err.message : "Failed to load drafts.";
    }
  }

  return (
    <main>
      <Topbar active="approvals" />
      <div className="wrap">
        <h1>Approvals</h1>
        <p className="sub">
          Interested-reply drafts waiting on you. Edit if needed, then Approve - that
          merges the same PR the booking-reply skill opened, no GitHub UI needed.
        </p>

        {loadError && (
          <div className="card">
            <p className="formmsg error">{loadError}</p>
          </div>
        )}
        {!loadError && items.length === 0 && (
          <div className="card">
            <p className="empty">Nothing waiting on you right now.</p>
          </div>
        )}
        {items.map((item) => (
          <ApprovalCard key={item.number} item={item} />
        ))}
      </div>
    </main>
  );
}
