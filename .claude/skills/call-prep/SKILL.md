---
name: call-prep
description: Build Ethan a one-page briefing before a sales call - what we sent them, what we researched, their tech stack, their score, a recommended package. Triggered the moment a call is booked in Cal.com. Also mirrors everything into a per-org Google Drive folder for downstream use.
---

# Call prep briefing

Someone booked a call with Ethan. He's about to talk to them, possibly with zero warning.
The job: compile everything the system already knows about this person and their org into
one page, fast, get it to him before the call, and leave a durable, organized trail in
Drive that a later automation (not this one) can pick up once they sign.

## Input

A `repository_dispatch` payload (`client_payload`), sent either by the Cal.com booking
webhook or by a human clicking "Log a booked call" in the dashboard:
```json
{"name": "...", "email": "...", "icp": "startups|churches",
 "appointment_time": "2026-08-05T15:00:00-04:00", "org_name": "..." }
```
`org_name` may be blank if the booking didn't capture it - derive the org from the
email domain instead when missing. Every lead needs *some* org identifier - it's the
Drive folder name (Step 5), so never leave it empty; fall back to the domain
(e.g. "acme.com") rather than skip the folder.

## Step 1 — Match against what we already know

Search, in this order, by email (case-insensitive) and by the org's domain:
1. `data/leads/index.jsonl` — the lead record, score, tier, org research
2. `data/queue/` (all subfolders: drafts, pending-approval, approved-to-send, sent) — the
   actual 3-email sequence sent to them, and the `research` block gathered when drafting
3. `data/replies/log.jsonl` — any reply history and how it was classified

**If matched:** this is a real outreach lead. Pull everything found.
**If not matched:** they booked directly (referral, found us organically, from the website,
etc.) — say so plainly in the briefing rather than forcing a fit. Do a lighter live pass
instead per Steps 2-3 below. Don't fabricate an outreach history that doesn't exist.

## Step 2 — Research the company and industry

Whether matched or not, make sure the briefing actually answers "who is this and why do
they matter," not just platform/tech facts:
- What the company/org does, in one or two sentences (from their site, LinkedIn, or
  existing research if matched)
- Industry/vertical, and roughly how big (employee count or funding stage for startups;
  attendance/campus count for churches)
- Anything timely: recent funding, a launch, a new hire, a building campaign, press - the
  kind of thing that makes this call feel prepared, not generic
- The specific person booking: their role, and anything public they've said/published that's
  relevant

Every fact needs a source (URL, or "from data/leads/index.jsonl" if it's already on file).
If a live pass turns up nothing beyond the obvious, say so rather than padding it out.

## Step 3 — Refresh the tech-stack and scope read

Run fresh (don't trust a stale cached value if the lead record is old):
- `scripts/platform_detect.py --url <their site> --icp <icp>` — platform + track
  (new_build_track vs subscription_track — Ethan needs to know which pitch to lead with
  on the call)
- `scripts/sitemap_scope.py --url <their site>` — total page count, and a rough static-vs-
  CMS-collection split (e.g. "5 static pages, plus a 12-post blog and a 4-item case study
  collection"). This is a heuristic off their sitemap, not a certainty - present it as an
  estimate. If `found_sitemap` is false, say the count isn't available rather than guessing
  a number.
- `scripts/pagespeed_check.py --url <their site>` — concrete site-quality facts he can
  reference: performance, accessibility, best practices, and SEO scores plus load time (not
  just speed), same citable rule as outreach emails
- Church leads: note the Planning Center / ChMS signal if present

## Step 4 — Recommend a package

Using the track (Step 3), the page count and CMS scope (Step 3), and
`knowledge/business-overview.md`'s pricing and "which offer to lead with" section, name an
actual recommended package or plan - not just the track. Examples of the reasoning to show,
not just the conclusion:
- 1 page, new_build_track → Sprint/Campaign
- 3-5 pages (startups) or up to 10 (churches), new_build_track, no deep CMS scope → Core
- 6+ pages (startups) or 10+ (churches), or real CMS/migration complexity, or multi-campus,
  or Series B+ → Custom
- Already on Webflow/Webflow Source, or a custom-code site (Astro/Vercel/etc) →
  subscription_track monthly plan tier (Grow/Partner for startups, Care/Grow for churches)
  per `knowledge/business-overview.md`
- Church on Planning Center specifically → lead with Core (integrations already included)

This is a suggestion for Ethan to use or override on the call, not a locked quote - frame it
that way in the briefing, and never state a price as if it's already been offered to them.

## Step 5 — Write the briefing

Write to `data/call-prep/{date}--{name-slug}.md`:

```markdown
# Call prep: {name} — {org}
**When:** {appointment_time}          **ICP:** {icp}          **Track:** {new_build|subscription}
**Lead score:** {tier} ({total}), or "Not in our outreach system — booked directly"

## What we sent them
{subject lines + one-line summary of each of the 3 emails, or "n/a"}

## Company and industry
{what they do, size/stage, anything timely, the specific person - each fact sourced}

## What we found on them
{the research bullets gathered at draft time, each with its source}

## Their current stack and site scope
- Platform: {webflow/squarespace/wix/subsplash/wordpress/unknown}
- Pages: {total from sitemap_scope.py, with the static/CMS-collection split, or "not
  available" if no sitemap was found}
- {Planning Center / ChMS signal if church}
- PageSpeed: {performance, accessibility, best practices, SEO scores, load time}

## Recommended package
{the package/plan from Step 4, with the one-line reasoning (page count, track, etc.) -
framed as a suggestion, not a quote already given}

## Reply history
{if they replied to outreach: what they said, how it was classified. Else: "No prior reply — this is their first touch" or "Booked directly, no outreach history"}

## Suggested angle for the call
One or two sentences — given the track and what's known, what's the natural opening
thread to pull on. Not a script, just a running start.
```

## Step 6 — Deliver it

- Email it to Ethan via `scripts/notify.py` (`urgency: info`), subject
  `Call prep: {name} @ {org} — {appointment_time}` so it's scannable in an inbox.
- Commit the briefing file — it's the durable record, same pattern as everything else
  in `data/`.
- **Funnel:** record the booking so it counts toward the conversion rate:
  `python scripts/funnel.py record --email <email> --stage booked --icp <icp> --org <org>`.
  (Ethan marks the call's outcome later with `python scripts/funnel.py mark --email <email>
  --outcome won|lost` — the briefing email should remind him to do that after the call.)

## Step 7 — Mirror to Drive

Every booking gets a Drive folder, matched or not - this is what lets a later automation
(outside this repo) pick up the full context once someone signs, regardless of whether
they came from outreach or booked directly off the website.

```
python scripts/drive_intro_folder.py sync --org "{org}" \
    --file data/call-prep/{the briefing file just written} \
    [--file {the matched queue file from Step 1, if this was a real outreach lead}]
```

This creates (or reuses) a "Prospects" folder under the configured parent, then an org-named
folder under that, and uploads/updates the briefing (plus the sent-sequence file with its
research block, if matched) as plain markdown. If the command errors (missing credentials,
folder not shared, etc.), don't fail the whole run over it - the email + committed file are
the primary delivery; note the Drive failure in the notify email so Ethan knows to check it,
same spirit as every other "don't crash the job over a secondary step" pattern in this repo.

## Never

- Never invent research, a score, a reply history, or a page count that isn't backed by the
  files/tool output above. A missing sitemap means "not available," not a guess.
- Never state the recommended package as a price already quoted to them - it's Ethan's
  suggestion to use or change on the call.
- Never claim a PageSpeed comparison to Polymer's own sites (same rule as outreach emails —
  check `knowledge/pagespeed-benchmark.md`).
- If nothing matches and the live pass also comes up empty, send a short "booked, no
  background found" notice rather than a padded-out fake briefing — but still create the
  Drive folder; an empty-but-organized folder beats no folder at all.
