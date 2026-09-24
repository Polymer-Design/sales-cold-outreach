"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function LogCallForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [icp, setIcp] = useState<"startups" | "churches">("startups");
  const [orgName, setOrgName] = useState("");
  const [when, setWhen] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          icp,
          org_name: orgName,
          appointment_time: new Date(when).toISOString(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      setStatus("ok");
      setMessage("Logged - check Actions → Call prep briefing in a minute, the briefing email follows shortly after.");
      setName("");
      setEmail("");
      setOrgName("");
      setWhen("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="logcallform" onSubmit={submit}>
      <div className="formrow">
        <label>
          Contact name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Contact email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>
      <div className="formrow">
        <label>
          ICP
          <select value={icp} onChange={(e) => setIcp(e.target.value as "startups" | "churches")}>
            <option value="startups">Startups</option>
            <option value="churches">Churches</option>
          </select>
        </label>
        <label>
          Organization (optional)
          <input value={orgName} onChange={(e) => setOrgName(e.target.value)} />
        </label>
      </div>
      <div className="formrow">
        <label>
          Appointment time
          <input
            type="datetime-local"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit" className="logcallbtn" disabled={status === "sending"}>
        {status === "sending" ? "Logging…" : "Log booked call"}
      </button>
      {message && <p className={`formmsg ${status}`}>{message}</p>}
    </form>
  );
}
