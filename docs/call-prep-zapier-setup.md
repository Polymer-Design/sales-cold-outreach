# Call-prep: Zapier setup (Ethan's manual steps)

Everything on the code side is built and lives in this repo (`.claude/skills/call-prep/`,
`.github/workflows/call-prep.yml`). This doc is the one manual thing left: wiring Dubsado to
tell GitHub when a call gets booked.

You need **two Zaps** (one per booking link), since each hardcodes which ICP it's for.

## 1. Make a GitHub token Zapier can use

This token lets Zapier "knock" on the repo to say a call was booked. It doesn't touch code
or secrets — it only fires the `call_booked` event.

1. GitHub → your avatar → **Settings → Developer settings → Personal access tokens →
   Tokens (classic) → Generate new token**.
2. Scope: check **`repo`** (the classic full-repo scope is the reliably-documented one for
   this endpoint; note the expiration and calendar-remind yourself to rotate it).
3. Copy the token. It's a credential — it goes into Zapier only, never into this repo.

## 2. Build the Zap (repeat once per ICP)

**Trigger:** Dubsado → whichever event fires when someone books through your scheduler.
Open your Zapier account, connect Dubsado, and look at the trigger list it offers you — I
can't see your account from here, so pick the one that matches "new appointment/inquiry
booked." If Dubsado's own trigger list doesn't have an obvious appointment event, "Project
Status Updated" is confirmed to exist — you'd need a Dubsado workflow that moves a lead to
a specific status right when they book, and trigger off that status change instead.

**Action:** search for **"Webhooks by Zapier"** → event **"POST"**.

Configure the POST:

| Field | Value |
|---|---|
| URL | `https://api.github.com/repos/polymer-design/sales-cold-outreach/dispatches` |
| Payload Type | `json` |
| Headers | `Authorization: Bearer YOUR_GITHUB_TOKEN`<br>`Accept: application/vnd.github+json` |
| Data | see below |

**Data (map Dubsado's fields into these):**
```json
{
  "event_type": "call_booked",
  "client_payload": {
    "name": "{{Dubsado: client name}}",
    "email": "{{Dubsado: client email}}",
    "icp": "startups",
    "appointment_time": "{{Dubsado: appointment date/time}}",
    "org_name": "{{Dubsado: company field, if it has one}}"
  }
}
```

Set `"icp"` to the literal string `"startups"` on the Zap tied to your startup scheduler
link, and `"churches"` on the one tied to the church scheduler link — this is the one
per-Zap hardcode, everything else maps from Dubsado's own fields.

**Test the Zap** — Zapier lets you send a test POST before turning it on. If it works,
you'll see a new run appear under this repo's **Actions → Call prep briefing** tab within
a minute or two, and a briefing email should land shortly after.

## 3. Turn both Zaps on

Free Zapier tier (100 tasks/month) is far more than your booking volume, so no paid plan
needed to start.

## Test without waiting on Dubsado

You can fire the workflow manually any time to check the whole pipeline end to end:
repo → **Actions → Call prep briefing → Run workflow**, fill in the test name/email/icp/time
fields, run it, and check your email a minute later.

## If Dubsado turns out not to have a clean "booked" trigger

Fall back to email-parsing (Dubsado always sends a booking confirmation email regardless of
API access) — flag it and Claude will build that path instead. It needs its own Google auth
setup, separate from the Drive one already configured.
