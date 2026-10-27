---
contact_name: Amanda Goodson
contact_title: Co-founder, COO
organization: Edlink
icp: startups
apollo_contact_id: 66f2d3dfd9c0c30001b64101
score_total: 67
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-10-27
pushed_at: 2026-10-27T13:30:07Z
---

## research
- Edlink is a unified API for K-12/university edtech integrations (LMS, SIS, identity providers); site claims "150+ edtech companies," "7,000 districts and universities," and "60 Million" people synced daily (source: WebFetch https://ed.link, run 2026-10-27)
- Site asset paths (`/website/_nuxt/...`) show the site is built on Nuxt, a custom Vue framework, not a hosted builder - per outreach-email Step 0's override rule ("if research turns up the site is clearly custom-code, pitch the monthly plan anyway"), overriding the stale platform_detect.py auto-tag (which returned "unknown" -> new_build_track since it has no Nuxt-specific marker) to **subscription_track** (source: WebFetch https://ed.link, run 2026-10-27)
- Site runs a Startup Program, Partner Program, and Referral Program, each with its own landing presence (source: same WebFetch)
- org_data (Apollo enrichment): 31 employees, founded 2019, industry "information technology & services"
- No marketing/growth hire found; only open role surfaced during lead-scoring's Step 4 research was a sales rep posting (source: score_notes, lead-scoring run 2026-10-26)

## proof_used
- knowledge/business-overview.md#monthly-plans (subscription_track has no approved case study yet; plain capability statement only, per the "no proof yet, write without proof" rule)

## email_1
subject: three programs, one site
body: |
  Hey Amanda,

  Edlink runs a Startup Program, a Partner Program, and a Referral Program, each needing its own pages, while syncing 60 million people a day for 7,000 districts.

  That's a lot of site surface area for a team with nobody dedicated to it, your last open role was a sales rep, not a web hire.

  Our monthly plans put a dedicated team on exactly that, new pages and updates, no project kickoff each time.

  Worth a quick call?

  Ethan

## email_2
subject: 150 edtech companies watching
body: |
  Hey Amanda,

  150+ edtech companies are already routing their LMS and SIS integrations through Edlink, which means every new program page has real weight behind it.

  A team that can turn those around fast, without pulling an engineer off the API, tends to matter more as that number keeps climbing.

  Open to chatting this week?

  Ethan

## email_3
subject: last one, Edlink
body: |
  Hey Amanda,

  This is my last note.

  A sales-rep hire over a web hire tells me the site's not the priority right now, and that's fair.

  If that changes, I'm easy to find.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-27
notes:
- "Startup Program, Partner Program, Referral Program" -> matches WebFetch of ed.link (2026-10-27)
- "60 million people synced daily, 7,000 districts, 150+ edtech companies" -> matches the same WebFetch exactly
- "last open role was a sales rep" -> matches score_notes (lead-scoring, 2026-10-26)
- Track override to subscription_track documented in the research block, correctly applying outreach-email Step 0's explicit exception (confirmed custom-code/Nuxt site, not a hosted builder) rather than the stale platform_detect.py "unknown" -> new_build_track auto-tag; proof uses plain capability statement from knowledge/business-overview.md#monthly-plans (no subscription case study exists), consistent with the overridden track
- scripts/voice_check.py: clean
- word counts: 80 / 56 / 34 - all within band
- sign-off: plain "Ethan" (startups), one CTA per email, no booking link
- CTA phrasing: "Worth a quick call?" / "Open to chatting this week?" / closer - distinct from this batch's other 5 drafts
