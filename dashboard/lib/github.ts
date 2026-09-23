// Shared GitHub REST helpers - server-only. Every write here uses GITHUB_DISPATCH_TOKEN
// (a classic PAT, "repo" scope), the same credential Zapier used to hold for the old
// Dubsado -> Zapier -> GitHub hop.
const REPO = "Polymer-Design/sales-cold-outreach";
const API = `https://api.github.com/repos/${REPO}`;

export type CallBookedPayload = {
  name: string;
  email: string;
  icp: "startups" | "churches";
  appointment_time: string;
  org_name?: string;
  source?: string; // e.g. "cal.com webhook" or "dashboard manual form"
};

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };
}

export async function dispatchCallBooked(payload: CallBookedPayload, token: string) {
  const res = await fetch(`${API}/dispatches`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify({
      event_type: "call_booked",
      client_payload: {
        name: payload.name,
        email: payload.email,
        icp: payload.icp,
        appointment_time: payload.appointment_time,
        org_name: payload.org_name ?? "",
        source: payload.source ?? "",
      },
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`GitHub rejected the dispatch (${res.status}): ${detail.slice(0, 300)}`);
  }
}

export type OpenPR = {
  number: number;
  title: string;
  html_url: string;
  head: { ref: string; sha: string };
  body: string | null;
};

// The booking-reply skill always titles its PR "Booking reply: {name} @ {org}" and its
// only changed file lives under data/queue/pending-approval/ - filter on both so an
// unrelated open PR never shows up as something to approve here.
export async function listBookingReplyPRs(token: string): Promise<OpenPR[]> {
  const res = await fetch(`${API}/pulls?state=open&per_page=50`, {
    headers: authHeaders(token),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to list PRs (${res.status}): ${await res.text()}`);
  const prs: OpenPR[] = await res.json();
  const titled = prs.filter((pr) => pr.title.startsWith("Booking reply:"));

  const checked = await Promise.all(
    titled.map(async (pr) => {
      const filesRes = await fetch(`${API}/pulls/${pr.number}/files`, {
        headers: authHeaders(token),
        cache: "no-store",
      });
      if (!filesRes.ok) return null;
      const files: { filename: string }[] = await filesRes.json();
      const touchesQueue = files.some((f) => f.filename.startsWith("data/queue/pending-approval/"));
      return touchesQueue ? pr : null;
    })
  );
  return checked.filter((pr): pr is OpenPR => pr !== null);
}

// Looks a single PR up through the same filter listBookingReplyPRs applies (title +
// touches data/queue/pending-approval/) - every write endpoint (save edit, approve)
// uses this instead of touching an arbitrary PR number directly.
export async function getBookingReplyPR(prNumber: number, token: string): Promise<OpenPR> {
  const prs = await listBookingReplyPRs(token);
  const pr = prs.find((p) => p.number === prNumber);
  if (!pr) throw new Error(`PR #${prNumber} not found, not open, or not a booking-reply draft.`);
  return pr;
}

export type PRDraftFile = {
  path: string;
  sha: string;
  content: string; // decoded
};

export async function getPRDraftFile(pr: OpenPR, token: string): Promise<PRDraftFile> {
  const filesRes = await fetch(`${API}/pulls/${pr.number}/files`, {
    headers: authHeaders(token),
    cache: "no-store",
  });
  if (!filesRes.ok) throw new Error(`Failed to list PR files (${filesRes.status})`);
  const files: { filename: string }[] = await filesRes.json();
  const file = files.find((f) => f.filename.startsWith("data/queue/pending-approval/"));
  if (!file) throw new Error(`PR #${pr.number} has no file under data/queue/pending-approval/`);

  const contentRes = await fetch(
    `${API}/contents/${encodeURIComponent(file.filename)}?ref=${encodeURIComponent(pr.head.ref)}`,
    { headers: authHeaders(token), cache: "no-store" }
  );
  if (!contentRes.ok) throw new Error(`Failed to read ${file.filename} (${contentRes.status})`);
  const data: { content: string; sha: string; encoding: string } = await contentRes.json();
  const content = Buffer.from(data.content, data.encoding as BufferEncoding).toString("utf-8");
  return { path: file.filename, sha: data.sha, content };
}

// Pushes an edited draft back onto the PR's own branch - this is a normal commit on an
// unmerged branch, nothing lands on main and nothing sends until approvePR() merges it.
export async function updatePRDraftFile(
  path: string,
  branch: string,
  sha: string,
  newContent: string,
  token: string
) {
  const res = await fetch(`${API}/contents/${encodeURIComponent(path)}`, {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify({
      message: "Edit booking reply draft via Outreach Command Center",
      content: Buffer.from(newContent, "utf-8").toString("base64"),
      sha,
      branch,
    }),
  });
  if (!res.ok) throw new Error(`Failed to save edit (${res.status}): ${await res.text()}`);
}

// The approval step, full stop - CLAUDE.md's hard rule is "a human merges the approval
// PR"; this IS that merge, just clicked from the dashboard instead of GitHub's PR screen.
export async function approvePR(prNumber: number, token: string) {
  const res = await fetch(`${API}/pulls/${prNumber}/merge`, {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify({ merge_method: "squash" }),
  });
  if (!res.ok) throw new Error(`Failed to merge PR #${prNumber} (${res.status}): ${await res.text()}`);
}
