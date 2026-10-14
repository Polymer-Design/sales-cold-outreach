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

**Recognizing synthetic/test data:** not every unmatched booking is a real direct booking -
some are QA/test entries exercising this pipeline. Signals worth checking before doing a
full research pass: an IANA-reserved domain (example.com/example.org/example.net, RFC
2606), a name/org that's literally "Test ___" or similar, a personal webmail address
(gmail.com etc) with no org name captured, or a live check on the implied site turning up
nothing (no platform markers, no sitemap, generic/default PageSpeed scores). One or two
signals together is enough to call it test data - say so plainly and skip the full
research pass rather than writing a padded-out fake briefing for a booking that was never
real.

**This changes where the output goes, not just what it says** - confirmed synthetic/test
data must never look like real pipeline activity on the dashboard:
- Write the briefing to `data/call-prep/_test/{date}--{name-slug}.md` (note the `_test`
  subfolder), not the top-level `data/call-prep/` folder the dashboard counts from.
- Skip the funnel record (`funnel.py record --stage booked`) entirely - this never
  happened as a real booking, so it must never count toward the conversion rate.
- Skip the Drive mirror (Step 6) entirely too - don't create a junk org folder in the
  client's real Drive for fake data.
- Still send the email (Step 7's synthetic-data template) and still commit the file - the
  point is keeping an audit trail without it polluting real counts, not hiding it.

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

Write to `data/call-prep/{date}--{name-slug}.md` - or, if Step 1 called this synthetic/
test data, to `data/call-prep/_test/{date}--{name-slug}.md` instead (see Step 1):

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

## Step 6 — Mirror to Drive (before the email, so the email can link to it)

**Skip this step entirely for confirmed synthetic/test data (Step 1)** - don't create a
junk org folder in the client's real Drive for fake data. The email (Step 7) falls back
to the GitHub blob link in that case, same as any other Drive-mirror failure.

Every other booking gets a Drive folder, matched or not - this is what lets a later
automation (outside this repo) pick up the full context once someone signs, regardless of
whether they came from outreach or booked directly off the website. Doing this **before**
Step 7 means the email can link straight to the real file instead of a repo path Ethan
can't open from his phone.

```
python scripts/drive_intro_folder.py sync --org "{org}" \
    --file data/call-prep/{the briefing file just written} \
    [--file {the matched queue file from Step 1, if this was a real outreach lead}]
```

This creates (or reuses) a "Prospects" folder under the configured parent, then an org-named
folder under that, and uploads/updates the briefing (plus the sent-sequence file with its
research block, if matched) as plain markdown. Its JSON output includes a direct `url` per
uploaded file (`https://drive.google.com/file/d/.../view`) - **use the briefing's own url
as the "Full briefing" link in Step 7's email.**

If the command errors (missing credentials, folder not shared, etc.), don't fail the whole
run over it - the email + committed file are still the primary delivery. Fall back to the
file's GitHub URL instead (this repo is public, so it renders for anyone):
`https://github.com/Polymer-Design/sales-cold-outreach/blob/main/data/call-prep/{file}`.
Also send a **separate, short, one-line-reason** notify email about the Drive failure
(urgency: watch) rather than folding it into the call-prep email - e.g. "Drive sync
failed: the Prospects parent folder isn't shared with our service account yet" - not the
raw error text or a paragraph of troubleshooting steps. Same spirit as every other "don't
crash the job over a secondary step" pattern in this repo.

## Step 7 — Deliver it

**The email is not the briefing file.** Ethan reads this on his phone between meetings and
needs the point in 60-90 seconds — plain English, short sections, nothing he has to
decode. File paths, script commands, ICP/track jargon, and the reasoning behind a
judgment call belong in the committed `.md` file (Step 5), not the email. The email just
says what matters and links out for anyone who wants the rest - **both links below must
be real, clickable URLs Ethan can open on his phone, never a bare repo-relative path.**

Email via `scripts/notify.py` (`urgency: info`), subject
`Call prep: {name} @ {org} — {appointment_time in plain form, e.g. "Today 3:00pm ET"}`.

**Normal case** (matched or not, as long as there's a real org to talk about) — keep every
section to 1-2 lines, skip a section entirely rather than write "n/a":

```
{org} — {what they do, one line}
{name}, {their title}
Site: {their website, as a real clickable URL (e.g. https://acme.com), or "not available"
  if there genuinely was no site to check}

WHEN: {plain date/time}
SCORE: {tier} ({total}) — or, if unmatched: "Booked directly, not in our outreach system"

WHAT WE SENT
{one line per email, or omit this section if there's no history}

WORTH KNOWING
- {2-4 short bullets max: a trigger signal, something timely, a reply if they replied}

THEIR SITE
{platform} · {page count, or "not available"} · PageSpeed {perf}/{access}/{bp}/{seo}

SUGGESTED PACKAGE
{package} — {one-line reasoning}

Full briefing: {the real Drive file url from Step 6, or the GitHub blob url fallback}
```

**Synthetic/test-data case** (see Step 5's note on recognizing this) — much shorter, no
forensic writeup in the email body (that belongs in the committed file only), but still a
real link, not a path:

```
Heads up — this looks like test data, not a real booking.

{name} <{email}>, {org}
{plain date/time}

Why: {one short plain-English reason}

If this is actually on your calendar, double-check it directly - nothing here is real to
prep from. Full file: {Drive or GitHub url}
```

- Commit the briefing file — it's the durable record, same pattern as everything else
  in `data/`.
- **Funnel:** record the booking so it counts toward the conversion rate:
  `python scripts/funnel.py record --email <email> --stage booked --icp <icp> --org <org>`.
  Ethan marks the call's outcome later (`funnel.py mark --outcome won|lost`) - remind him
  of that in plain English in the email ("Mark this won/lost after the call"), not as a
  copy-pasteable CLI command. **Skip this entirely for confirmed synthetic/test data** -
  see Step 1.

## Never

- Never invent research, a score, a reply history, or a page count that isn't backed by the
  files/tool output above. A missing sitemap means "not available," not a guess.
- Never state the recommended package as a price already quoted to them - it's Ethan's
  suggestion to use or change on the call.
- Never claim a PageSpeed comparison to Polymer's own sites (same rule as outreach emails —
  check `knowledge/pagespeed-benchmark.md`).
- If nothing matches and the live pass also comes up empty **but this is still a real
  booking** (not synthetic/test data), send a short "booked, no background found" notice
  rather than a padded-out fake briefing — but still create the Drive folder; an
  empty-but-organized folder beats no folder at all. This is different from confirmed
  synthetic/test data (Step 1), which skips the Drive folder and the funnel record
  entirely - "no background found" is a real lead with nothing on file yet; synthetic
  data isn't a real lead at all.
- Never let confirmed synthetic/test data write to the top-level `data/call-prep/`
  folder or call `funnel.py record` - both are what the Booked Calls dashboard counts
  from, and test data showing up there as if it were a real booking is exactly the
  failure this whole `_test` subfolder split exists to prevent.
- Never put file paths, script/CLI commands, internal jargon (ICP, track, tier names a
  first-time reader wouldn't know), or the reasoning behind a judgment call in the EMAIL
  body - that's all fine in the committed `.md` file, but the email is Ethan's 60-90-second
  scan on his phone, not a debug log. One link to the full file covers anyone who wants more.
