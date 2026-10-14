# Call prep: Test Person — test sales polymer
**When:** 2026-08-01T15:00:00-04:00          **ICP:** startups          **Track:** new_build_track
**Lead score:** Not in our outreach system — booked directly

## What we sent them
n/a — no match found in `data/leads/index.jsonl`, `data/queue/` (drafts, pending-approval,
approved-to-send, sent), or `data/replies/log.jsonl` for `test@example.com` or the
`example.com` domain.

## Company and industry
No background found. The booking name ("Test Person"), org name ("test sales polymer"),
and email domain all point to synthetic data rather than a real prospect:
`test@example.com` uses the IANA-reserved `example.com` domain (RFC 2606), which has no
real company behind it. This looks like a QA/test entry exercising the call-prep pipeline,
matching the pattern of two prior entries in this folder
(`2026-08-02--fix-verification-test.md`, `2026-09-28--polymer-test.md`). Flagging this
plainly rather than presenting it as a real lead.

## What we found on them
Nothing beyond the above — there is no real organization to research.

## Their current stack and site scope
(Checked against `https://example.com`, the only domain this booking's email implies —
not a real prospect site, included only for completeness.)
- Platform: unknown (`scripts/platform_detect.py` found no platform markers) → tagged
  `new_build_track` by default
- Pages: not available — `scripts/sitemap_scope.py` found no sitemap at common paths
- PageSpeed (mobile, `https://example.com`): performance 100, accessibility 96, best
  practices 100, SEO 80, largest contentful paint 0.8s, speed index 0.8s

## Recommended package
Not a real recommendation — with no genuine site or page count to scope against, there's
no basis for Sprint/Core/Custom. If this somehow corresponds to a real call, Ethan should
scope live rather than rely on this briefing.

## Reply history
Booked directly, no outreach history.

## Suggested angle for the call
No real call to prep for — if this shows up on the calendar as an actual appointment,
verify with Ethan directly before treating it as a live prospect conversation.
