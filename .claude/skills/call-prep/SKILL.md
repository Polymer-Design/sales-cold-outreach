---
name: call-prep
description: Build Ethan a one-page briefing before a sales call - what we sent them, what we researched, their tech stack, their score. Triggered the moment a call is booked in Dubsado.
---

# Call prep briefing

Someone booked a call with Ethan. He's about to talk to them, possibly with zero warning.
The job: compile everything the system already knows about this person and their org into
one page, fast, and get it to him before the call.

## Input

A `repository_dispatch` payload (`client_payload`) with whatever Zapier sent from Dubsado's
booking form:
```json
{"name": "...", "email": "...", "icp": "startups|churches",
 "appointment_time": "2026-08-05T15:00:00-04:00", "org_name": "..." }
```
`org_name` may be blank if Dubsado's form didn't capture it - derive the org from the
email domain instead when missing.

## Step 1 — Match against what we already know

Search, in this order, by email (case-insensitive) and by the org's domain:
1. `data/leads/index.jsonl` — the lead record, score, tier, org research
2. `data/queue/` (all subfolders: drafts, pending-approval, approved-to-send, sent) — the
   actual 3-email sequence sent to them, and the `research` block gathered when drafting
3. `data/replies/log.jsonl` — any reply history and how it was classified

**If matched:** this is a real outreach lead. Pull everything found.
**If not matched:** they booked directly (referral, found us organically, etc.) — say so
plainly in the briefing rather than forcing a fit. Do a lighter live pass instead: basic
org lookup (what they do, size, any obvious recent news) and platform/PageSpeed per Step 2.
Don't fabricate an outreach history that doesn't exist.

## Step 2 — Refresh the tech-stack read

Run fresh (don't trust a stale cached value if the lead record is old):
- `scripts/platform_detect.py --url <their site> --icp <icp>` — platform + track
  (new_build_track vs subscription_track — Ethan needs to know which pitch to lead with
  on the call)
- `scripts/pagespeed_check.py --url <their site>` — concrete site-quality facts he can
  reference: performance, accessibility, best practices, and SEO scores plus load time (not
  just speed), same citable rule as outreach emails
- Church leads: note the Planning Center / ChMS signal if present

## Step 3 — Write the briefing

Write to `data/call-prep/{date}--{name-slug}.md`:

```markdown
# Call prep: {name} — {org}
**When:** {appointment_time}          **ICP:** {icp}          **Track:** {new_build|subscription}
**Lead score:** {tier} ({total}), or "Not in our outreach system — booked directly"

## What we sent them
{subject lines + one-line summary of each of the 3 emails, or "n/a"}

## What we found on them
{the research bullets gathered at draft time, each with its source}

## Their current stack
- Platform: {webflow/squarespace/wix/subsplash/wordpress/unknown}
- {Planning Center / ChMS signal if church}
- PageSpeed: {performance, accessibility, best practices, SEO scores, load time}

## Reply history
{if they replied to outreach: what they said, how it was classified. Else: "No prior reply — this is their first touch" or "Booked directly, no outreach history"}

## Suggested angle for the call
One or two sentences — given the track and what's known, what's the natural opening
thread to pull on. Not a script, just a running start.
```

## Step 4 — Deliver it

- Email it to Ethan via `scripts/notify.py` (`urgency: info`), subject
  `Call prep: {name} @ {org} — {appointment_time}` so it's scannable in an inbox.
- Commit the briefing file — it's the durable record, same pattern as everything else
  in `data/`.

## Never

- Never invent research, a score, or a reply history that isn't backed by the files above.
- Never claim a PageSpeed comparison to Polymer's own sites (same rule as outreach emails —
  check `knowledge/pagespeed-benchmark.md`).
- If nothing matches and the live pass also comes up empty, send a short "booked, no
  background found" notice rather than a padded-out fake briefing.
