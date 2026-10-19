"use client";

import { useState } from "react";

export type HotLead = {
  path: string;
  contact_name?: string;
  contact_title?: string;
  organization?: string;
  icp?: string;
  score_total?: string;
  tier?: string;
  status?: string;
  subject: string;
  body: string;
};

type LeadStatus = "idle" | "saving" | "removing" | "removed" | "error";

function LeadCard({
  prNumber,
  lead,
  onRemoved,
}: {
  prNumber: number;
  lead: HotLead;
  onRemoved: (path: string) => void;
}) {
  const [subject, setSubject] = useState(lead.subject);
  const [body, setBody] = useState(lead.body);
  const [dirty, setDirty] = useState(false);
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSave() {
    setStatus("saving");
    setMessage("");
    try {
      const res = await fetch(`/api/hot-leads/${prNumber}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: lead.path, subject, body }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Save failed (${res.status})`);
      setDirty(false);
      setStatus("idle");
      setMessage("Saved.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Save failed.");
    }
  }

  async function onRemove() {
    if (!window.confirm(`Remove ${lead.organization || "this lead"} from the batch? It won't be sent.`))
      return;
    setStatus("removing");
    setMessage("");
    try {
      const res = await fetch(`/api/hot-leads/${prNumber}/remove`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: lead.path }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Remove failed (${res.status})`);
      setStatus("removed");
      onRemoved(lead.path);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Remove failed.");
    }
  }

  if (status === "removed") return null;

  return (
    <div className="listcard">
      <div className="listcardhead">
        <span className="title">
          {lead.contact_name || "Unknown"}
          {lead.contact_title ? ` (${lead.contact_title})` : ""} @ {lead.organization || "?"}
        </span>
        <div className="badgerow">
          {lead.icp && <span className="pill icp">{lead.icp}</span>}
          {lead.score_total && <span className="pill neutral">score {lead.score_total}</span>}
        </div>
      </div>

      <div className="logcallform">
        <label>
          Email 1 subject
          <input
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setDirty(true);
            }}
          />
        </label>
        <label>
          Email 1 body
          <textarea
            rows={9}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setDirty(true);
            }}
          />
        </label>
        <div className="badgerow">
          {dirty && (
            <button
              type="button"
              className="logcallbtn"
              onClick={onSave}
              disabled={status === "saving" || status === "removing"}
            >
              {status === "saving" ? "Saving…" : "Save edit"}
            </button>
          )}
          <button
            type="button"
            className="signout"
            onClick={onRemove}
            disabled={status === "saving" || status === "removing"}
            title="Discard this lead without sending it - won't be included when the batch is approved."
          >
            {status === "removing" ? "Removing…" : "Remove"}
          </button>
        </div>
        {message && <p className={`formmsg ${status === "error" ? "error" : "ok"}`}>{message}</p>}
      </div>
    </div>
  );
}

export default function HotBatchGroup({
  prNumber,
  html_url,
  leads: initialLeads,
}: {
  prNumber: number;
  html_url: string;
  leads: HotLead[];
}) {
  const [leads, setLeads] = useState(initialLeads);
  const [approveStatus, setApproveStatus] = useState<"idle" | "approving" | "approved" | "error">(
    "idle"
  );
  const [approveMessage, setApproveMessage] = useState("");

  function handleRemoved(path: string) {
    setLeads((prev) => prev.filter((l) => l.path !== path));
  }

  async function onApprove() {
    if (leads.length === 0) return;
    const names = leads.map((l) => l.organization || "?").join(", ");
    if (!window.confirm(`Approve and send to: ${names}? This merges the PR and queues them for Apollo.`))
      return;
    setApproveStatus("approving");
    setApproveMessage("");
    try {
      const res = await fetch(`/api/hot-leads/${prNumber}/approve`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Approve failed (${res.status})`);
      setApproveStatus("approved");
      setApproveMessage("Approved and merged - the next pipeline run pushes these to Apollo.");
    } catch (err) {
      setApproveStatus("error");
      setApproveMessage(err instanceof Error ? err.message : "Approve failed.");
    }
  }

  if (leads.length === 0 && approveStatus !== "approved") {
    return null; // every lead in this batch was removed - nothing left to show or approve
  }

  return (
    <div className="card" id={`pr-${prNumber}`}>
      <div className="kicker" style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          Batch · <a href={html_url} target="_blank" rel="noreferrer">PR #{prNumber}</a>
        </span>
        <span>
          {leads.length} lead{leads.length === 1 ? "" : "s"} waiting
        </span>
      </div>

      {approveStatus === "approved" ? (
        <p className="formmsg ok">{approveMessage}</p>
      ) : (
        <>
          {leads.map((lead) => (
            <LeadCard key={lead.path} prNumber={prNumber} lead={lead} onRemoved={handleRemoved} />
          ))}
          <div className="badgerow" style={{ marginTop: 14 }}>
            <button
              type="button"
              className="logcallbtn"
              onClick={onApprove}
              disabled={approveStatus === "approving" || leads.length === 0}
            >
              {approveStatus === "approving"
                ? "Approving…"
                : `Approve batch (${leads.length})`}
            </button>
          </div>
          {approveMessage && approveStatus === "error" && (
            <p className="formmsg error">{approveMessage}</p>
          )}
        </>
      )}
    </div>
  );
}
