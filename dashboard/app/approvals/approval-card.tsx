"use client";

import { useState } from "react";

type Item = {
  number: number;
  html_url: string;
  contact_name?: string;
  organization?: string;
  icp?: string;
  their_reply?: string;
  subject: string;
  body: string;
};

type Status = "idle" | "saving" | "approving" | "approved" | "rejecting" | "rejected" | "error";

export default function ApprovalCard({ item }: { item: Item }) {
  const [subject, setSubject] = useState(item.subject);
  const [body, setBody] = useState(item.body);
  const [dirty, setDirty] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function saveEdit(): Promise<boolean> {
    const res = await fetch(`/api/replies/${item.number}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, body }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `Save failed (${res.status})`);
    return true;
  }

  async function onSave() {
    setStatus("saving");
    setMessage("");
    try {
      await saveEdit();
      setDirty(false);
      setStatus("idle");
      setMessage("Saved.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Save failed.");
    }
  }

  async function onApprove() {
    setStatus("approving");
    setMessage("");
    try {
      if (dirty) await saveEdit();
      const res = await fetch(`/api/replies/${item.number}/approve`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Approve failed (${res.status})`);
      setStatus("approved");
      setMessage("Approved and merged.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Approve failed.");
    }
  }

  async function onReject() {
    if (!window.confirm("Remove this draft without sending it? This can't be undone.")) return;
    setStatus("rejecting");
    setMessage("");
    try {
      const res = await fetch(`/api/replies/${item.number}/reject`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Remove failed (${res.status})`);
      setStatus("rejected");
      setMessage("Removed.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Remove failed.");
    }
  }

  if (status === "approved" || status === "rejected") {
    return (
      <div className="listcard" id={`pr-${item.number}`}>
        <div className="listcardhead">
          <span className="title">
            {item.contact_name || "Unknown"} @ {item.organization || "?"}
          </span>
          <span className={`pill ${status === "approved" ? "good" : "neutral"}`}>
            {status === "approved" ? "approved" : "removed"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="card" id={`pr-${item.number}`}>
      <div className="listcardhead">
        <span className="title">
          {item.contact_name || "Unknown"} @ {item.organization || "?"}
        </span>
        <div className="badgerow">
          {item.icp && <span className="pill icp">{item.icp}</span>}
          <a href={item.html_url} target="_blank" rel="noreferrer" className="pill neutral">
            PR #{item.number}
          </a>
        </div>
      </div>

      {item.their_reply && (
        <div className="listcardbody" style={{ marginBottom: 14 }}>
          <b>Their reply:</b> {item.their_reply}
        </div>
      )}

      <div className="logcallform">
        <label>
          Subject
          <input
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setDirty(true);
            }}
          />
        </label>
        <label>
          Body
          <textarea
            rows={7}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setDirty(true);
            }}
          />
        </label>
        <div className="badgerow">
          <button
            type="button"
            className="logcallbtn"
            onClick={onApprove}
            disabled={status === "approving" || status === "saving" || status === "rejecting"}
          >
            {status === "approving" ? "Approving…" : "Approve"}
          </button>
          {dirty && (
            <button
              type="button"
              className="signout"
              onClick={onSave}
              disabled={status === "saving" || status === "approving" || status === "rejecting"}
            >
              {status === "saving" ? "Saving…" : "Save draft"}
            </button>
          )}
          <button
            type="button"
            className="signout"
            onClick={onReject}
            disabled={status === "approving" || status === "saving" || status === "rejecting"}
            title="Discard this draft without sending it - for bot replies, spam, etc."
          >
            {status === "rejecting" ? "Removing…" : "Remove"}
          </button>
        </div>
        {message && <p className={`formmsg ${status === "error" ? "error" : "ok"}`}>{message}</p>}
      </div>
    </div>
  );
}
