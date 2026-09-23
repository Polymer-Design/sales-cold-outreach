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

type Status = "idle" | "saving" | "approving" | "approved" | "error";

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

  if (status === "approved") {
    return (
      <div className="listcard">
        <div className="listcardhead">
          <span className="title">
            {item.contact_name || "Unknown"} @ {item.organization || "?"}
          </span>
          <span className="pill good">approved</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
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
            disabled={status === "approving" || status === "saving"}
          >
            {status === "approving" ? "Approving…" : "Approve"}
          </button>
          {dirty && (
            <button
              type="button"
              className="signout"
              onClick={onSave}
              disabled={status === "saving" || status === "approving"}
            >
              {status === "saving" ? "Saving…" : "Save draft"}
            </button>
          )}
        </div>
        {message && <p className={`formmsg ${status === "error" ? "error" : "ok"}`}>{message}</p>}
      </div>
    </div>
  );
}
