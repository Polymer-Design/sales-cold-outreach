---
contact_name: Maddie Bennett
contact_title: Marketing & Communications Director
organization: River Valley Church
icp: churches
apollo_contact_id: 5e6109e1412af6008c4a607a
score_total: 80
tier: hot
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- Attendance: homepage states "nearly 10,000 in attendance across 11 U.S. campuses" plus Eswatini, Tokyo, and Vancouver as additional locations (reused from lead's score_notes; reconfirmed via fresh fetch 2026-10-30) (source: https://rivervalley.org)
- Platform: confirmed webflow via scripts/platform_detect.py --url https://rivervalley.org --icp churches -> subscription_track; churchcenter_subdomain 'rivervalley' also confirmed (reused from lead's score_notes; re-run 2026-10-30, same result) (source: scripts/platform_detect.py output)
- All 15 campus cards on the /locations page use "#" placeholder links for the image and first "Learn More" button, and every single one still shows "More Information Coming Soon" instead of real campus info (source: https://rivervalley.org/locations, checked 2026-10-30)
- The Tokyo and Vancouver campus listings route visitors to separate external sites (rivervalleytokyo.com, rivervalleyvan.org) instead of keeping them on rivervalley.org (source: https://rivervalley.org/locations, checked 2026-10-30)
- Mobile PageSpeed: performance score consistently in the high 30s/100 across three separate runs (36, 39, 39); LCP is unusable as a cited number here, it swung wildly run to run (48.3s, 43.5s, 16.6s on the same URL/strategy within minutes), so only the stable performance score is cited, not a specific load time (source: scripts/pagespeed_check.py --url https://rivervalley.org --strategy mobile, three runs 2026-10-30)

## proof_used
- knowledge/business-overview.md (Grow plan: "Care + new pages, landing pages, CMS work, small automations" - plain capability statement, no approved subscription_track case study exists yet)

## email_1
subject: your 15 "coming soon" pages
body: |
  Hey Maddie,

  Every one of River Valley's 15 campus pages, from Apple Valley to Eswatini, still says "More Information Coming Soon," even with nearly 10,000 people attending each week.

  You're already on Webflow, so this isn't a rebuild. It's a team keeping pace with growth that's outrun the site's content.

  That's what our Grow plan is built for: a dedicated team adding real campus pages monthly, so newcomers land on something real instead of a placeholder.

  Worth 15 minutes to talk through?

  God Bless,
  Ethan

## email_2
subject: two campuses, two other domains
body: |
  Hey Maddie,

  River Valley's reach runs from Minnesota to Eswatini to Tokyo, but the Tokyo and Vancouver campus pages send visitors off to separate outside sites instead of keeping them on rivervalley.org.

  On mobile, where most of your people are checking in from, the homepage scores in the high 30s out of 100 on Google's speed test.

  Our Grow plan puts a team on that kind of ongoing cleanup, every month, without a rebuild.

  Want to jump on a call this week?

  God Bless,
  Ethan

## email_3
subject: last note, river valley
body: |
  Hey Maddie,

  I'll leave it here. If the campus pages and load time aren't a priority with everything else on your plate, no worries at all.

  If they are, happy to show you what a Grow plan would look like for River Valley, no pressure either way.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "nearly 10,000" attendance, 11 U.S. campuses, Eswatini/Tokyo/Vancouver -> verified against fresh fetch of https://rivervalley.org (2026-10-30), matches score_notes
- webflow / subscription_track -> verified via scripts/platform_detect.py --url https://rivervalley.org --icp churches, re-run 2026-10-30, same result as score_notes
- "15 campus pages", "#" placeholder links, "More Information Coming Soon" exact phrase -> verified against two independent fetches of https://rivervalley.org/locations (2026-10-30), consistent both times, 15 total cards (14 physical + Online)
- Tokyo -> rivervalleytokyo.com, Vancouver -> rivervalleyvan.org as external links off rivervalley.org -> verified against the same /locations fetches, consistent both times
- PageSpeed claim caught and corrected during this pass: original draft cited a specific LCP ("48 seconds") from one run of scripts/pagespeed_check.py. Re-ran the same check twice more as an adversarial re-fetch per Check 1 ("sources drift") and got 43.5s then 16.6s on the identical URL/strategy, an unusable swing. Performance score held stable across all three runs (36, 39, 39), so the draft was rewritten to cite "scores in the high 30s out of 100" instead of a load-time figure. This is a raw fact about the lead's own site (not a comparison to Polymer's benchmark), so no pagespeed-benchmark.md approval dependency applies.
- Track/proof consistency: lead is subscription_track (webflow) -> all three emails pitch the Grow plan (retainer), none pitch a rebuild. proof_used is knowledge/business-overview.md only, a plain capability statement ("Care + new pages, landing pages, CMS work, small automations" maps to "adding real campus pages monthly") - no case study borrowed, and none exists yet for subscription_track per knowledge/case-studies/README.md
- scripts/voice_check.py: clean (no banned words/phrases/openers/em dashes)
- word counts (recount via script, excluding greeting/signoff): email_1 80w (band 50-85), email_2 80w (band 40-80), email_3 45w (band 30-60) - all within band, email_2 trimmed twice during this pass to land exactly at the 80-word ceiling
- one CTA per email, correct "God Bless," + "Ethan" church sign-off on all three, no booking link anywhere
- subject lines and CTA phrasing checked against the rest of data/queue/drafts/ for exact duplicates: none found (one near-miss, "two campuses, two other domains" vs. an unrelated lead's "two campuses, one site" - different org, different ending, not a copy)
- cohesion: all three emails stay on the same two threads (unfinished/outsourced campus pages, Grow plan as the fix), no repeated case-study claim (none used), escalating brevity into email_3, no contradictions between emails
