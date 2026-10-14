# Call prep: Jamie Chen — Webflow
**When:** 2026-08-01T15:00:00-04:00          **ICP:** startups          **Track:** subscription_track
**Lead score:** Not in our outreach system — booked directly

**Flag before anything else:** two things about this booking are atypical and worth
double-checking before the call:
1. The appointment time given (2026-08-01) is already in the past relative to today
   (2026-10-14), and it exactly matches the fixture timestamp (`2026-08-01T15:00:00-04:00`)
   used by several prior entries in this folder that were confirmed test/QA data
   (`2026-08-01--drive-sync-test.md`, `2026-08-01--sitemap-scope-test.md`,
   `2026-08-01--test-person.md`). Unlike those, this booking's domain (webflow.com) is real
   and live, so it isn't being treated as fabricated — but the date match is a real signal
   worth confirming this is actually on the calendar.
2. The org itself is Webflow — the website builder/hosting platform Polymer builds client
   sites on top of. It is not a startup in need of a marketing site; it's one of the
   largest players in this exact space. Standard package-sizing logic (below) is being
   applied mechanically for completeness, but it almost certainly doesn't describe what
   this call is actually about.

## What we sent them
n/a — no match for `jamie@webflow.com` or the `webflow.com` domain in
`data/leads/index.jsonl`, `data/queue/` (drafts, pending-approval, approved-to-send, sent),
or `data/replies/log.jsonl`.

## Company and industry
Webflow is a visual website design/build/hosting platform. Their own homepage currently
positions them as "the agentic web platform for modern businesses" (source:
https://webflow.com/, `<title>` tag, fetched 2026-10-14). Could not confirm employee count,
funding stage, or recent news this session — no web search tool was available, and no
unverifiable figures are included here rather than guess.

Could not identify or verify "Jamie Chen" as a public role/title at Webflow this session
(no web search access). Treat their title/role as unknown until confirmed on the call.

## What we found on them
Nothing beyond the live site check below — no outreach history, no research notes on file.

## Their current stack and site scope
- Platform: **webflow** (`scripts/platform_detect.py`, confirmed via Webflow's own asset-host
  markers on their site) → tagged `subscription_track`
- Pages: sitemap found, 126,939 total URLs (`scripts/sitemap_scope.py`), estimated ~14,221
  static pages plus large CMS collections — dominated by their "made-in-webflow" customer
  showcase gallery (~106,893 entries), a blog (~1,539 posts), and a templates collection
  (~2,809). This is a heuristic off the sitemap, not an exact count, and the scale here is
  far outside anything this estimator is normally used to size.
- PageSpeed (mobile, `scripts/pagespeed_check.py`): performance 29, accessibility 100, best
  practices 92, SEO 100; largest contentful paint 38.1s, speed index 14.5s (flagged "SLOW"
  field-experience category).

## Recommended package
Mechanically, "already on Webflow" routes to the subscription_track monthly-plan pitch per
`knowledge/business-overview.md` — Grow or Partner for startups. Given the scale found
above, Partner ($3,000/mo, 15 hrs) would be the more defensible of the two if this were a
normal-sized prospect. In practice, a site at this scale and an org that *is* the platform
itself doesn't fit the assumptions behind any of our packages — this is a suggestion to
have in your back pocket, not a real recommendation for this call. Worth figuring out early
in the conversation what Jamie is actually looking for.

## Reply history
Booked directly, no outreach history.

## Suggested angle for the call
With no outreach trail and an org that's the platform we build on rather than a typical
prospect, open by finding out what prompted this call rather than assuming it's a standard
new-site or monthly-plan conversation — this one likely isn't.
