---
contact_name: Scott Weber
contact_title: COO/Co-Founder
organization: FermaBlend Technologies
icp: startups
apollo_contact_id: 5c5395fef651257b153e2418
score_total: 55
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T14:00:14Z
mailbox: ethan@growwithpolymer.com
apollo_contact_id_resolved: 6ae4a2ec62892a000ceddb27
---

## research
- Firmographic: 5 employees, near floor of the 5-50 band, founded 2024 (early-stage) (source: score_notes, reused from lead-scoring's Apollo org_data)
- Technographic: WordPress confirmed, no in-house design/dev job posting found (source: score_notes; reconfirmed via `scripts/platform_detect.py --url https://fermablend.com --icp startups` -> {"platform": "wordpress", "track": "new_build_track"}, checked 2026-10-30)
- fermablend.com describes a B2B-only microbial products company based in Solon, Ohio, developing liquid and solid-state fermentation products for environmental/agricultural applications, and claims 40+ products taken from ideation through commercialization (source: WebFetch https://fermablend.com, checked 2026-10-30)
- The homepage's "WHAT MAKES US UNIQUE?" stat block is duplicated on the page with two different, contradictory numbers: one copy reads "20+ YEARS years of microbial formulation expertise" (note the "YEARS years" typo), the other copy of the same block reads "50+ YEARS of microbial formulation expertise" - verified directly via raw page source fetch (curl), not just the rendered summary (source: direct fetch of https://fermablend.com, checked 2026-10-30)
- The site's "Our Team" section lists three co-founders/leaders: Scott Weber (COO/Co-Founder, product development and operations), Don Sweeney (CFO/Co-Founder), and Brian Taylor (VP of Sales & Marketing, "over 25 years of experience") - no dedicated marketing/web or design/dev role beyond Brian's sales-and-marketing title (source: WebFetch + raw page source fetch of https://fermablend.com, checked 2026-10-30)
- WebSearch for "FermaBlend Technologies careers jobs hiring" found no FermaBlend-specific openings or careers page, only unrelated companies with similar names - consistent with score_notes' "no in-house design/dev job posting found" (source: WebSearch, checked 2026-10-30)
- PageSpeed mobile (fermablend.com), run twice to confirm stability: performance 50 both times, accessibility 88 both times, best practices 96 both times, SEO 85/92; largest contentful paint 40.6s/40.8s (rounds to "40 seconds" consistently), speed index 20.8-23.0s, field experience category "SLOW" both runs - raw fact about their own site (source: `scripts/pagespeed_check.py --url https://fermablend.com`, checked 2026-10-30, run twice)

## proof_used
- knowledge/business-overview.md#the-basics (plain capability / positioning statement, used in email_1)
- knowledge/case-studies/fispoke.md (track: new_build, status: approved - matches FermaBlend's new_build_track), used once in email_2 only, paraphrased rather than quoting the same Nathan Berk line already used in the recently-committed startups--peakflo-yc-w22--saurabh-chauhan.md draft, to avoid a duplicate sentence fingerprint across this batch

## email_1
subject: two different numbers
body: |
  Hey Scott,

  FermaBlend's own homepage claims 20+ years of formulation expertise in one spot and 50+ years in another, same block, repeated with two different numbers.

  For a two-year-old company asking industrial buyers to trust deep technical science, that kind of inconsistency works against the pitch.

  We build fixed-price sites for small technical teams like yours: live in weeks, built to say what you actually do, once, correctly.

  Worth 15 minutes to talk through it?

  Ethan

## email_2
subject: who's minding the site
body: |
  Hey Scott,

  FermaBlend runs on WordPress with 5 people on staff, no dedicated marketing or web hire, Brian's sales-and-marketing title is the closest thing to it.

  That's a lot of credibility riding on a site nobody owns.

  We ran into the same gap with Fispoke: a fintech site that didn't match the product behind it. We rebuilt it off Wix so their team could publish without a developer.

  Up for a quick call this week?

  Ethan

## email_3
subject: quick last thought
body: |
  Hey Scott,

  Last note from me.

  If FermaBlend's site is working fine for the industrial buyers you're trying to win over, no worries at all.

  If a homepage that takes 40 seconds to load on a phone is quietly working against that, worth grabbing 15 minutes this week?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "5 employees, founded 2024, near floor of 5-50 band" -> verified against the lead's score_notes as given (reused verbatim, not re-derived)
- "WordPress, new_build_track" -> re-ran `scripts/platform_detect.py --url https://fermablend.com --icp startups`, returned {"platform": "wordpress", "track": "new_build_track"}, matches score_notes and frontmatter track assumption
- "B2B-only microbial products company, Solon Ohio, liquid/solid-state fermentation, 40+ products from ideation through commercialization" -> re-fetched https://fermablend.com (WebFetch + raw curl of page source) 2026-10-30, confirmed verbatim: "Operating solely as a B2B company", "40+ products designed from ideation through commercialization"
- "20+ years / 50+ years duplicated, contradictory stat block" -> re-verified via direct curl of raw page HTML (not just the WebFetch summary): the "WHAT MAKES US UNIQUE?" block appears twice on the homepage, once reading "20+ YEARS years of microbial formulation expertise" (literal "YEARS years" typo) and once reading "50+ YEARS of microbial formulation expertise" - confirmed genuinely duplicated/inconsistent, not a fetch artifact. Email only claims "20+ years in one spot and 50+ years in another", which is accurate to what's on the page either way
- "Scott Weber COO/Co-Founder, Don Sweeney CFO/Co-Founder, Brian Taylor VP of Sales & Marketing (25 years experience), no dedicated marketing/web or design/dev role" -> re-fetched page source, all three names/titles match verbatim; no fourth team member or web/design role listed
- "no careers/jobs page or design/dev postings found" -> re-ran WebSearch "FermaBlend Technologies careers jobs hiring", same result as original research pass: no FermaBlend-specific openings, consistent with score_notes
- PageSpeed claims ("40 seconds to load on a phone") -> re-ran `scripts/pagespeed_check.py --url https://fermablend.com` a second time independently: LCP 40.6s then 40.8s across the two runs, both round to "40 seconds"; performance score 50 both times; raw fact about the lead's own site, no comparative claim against Polymer's own sites made anywhere in copy, so pagespeed-benchmark.md approval status is not implicated
- Polymer positioning claim in email_1 ("fixed-price sites... live in weeks") -> verbatim-compatible with knowledge/business-overview.md "The basics": "A fixed price. A live site in weeks. The same team to keep it growing." No dollar figure or timeline-in-days/weeks specific number invented
- Fispoke claim in email_2 ("a fintech site that didn't match the product behind it... rebuilt it off Wix so their team could publish without a developer") -> verbatim-compatible with knowledge/case-studies/fispoke.md (status: approved, track: new_build): "no CMS and no way for Fispoke's own team to publish" / "Full rebuild off Wix" / "CMS templates for Team, Insights, and Careers so Fispoke's team can publish without touching code". No page count, dollar figure, or client quote borrowed - paraphrased rather than quoting Nathan Berk's line verbatim, since that exact quote is already used in the recently-committed data/queue/drafts/startups--peakflo-yc-w22--saurabh-chauhan.md (same batch) - this avoids a duplicate testimonial fingerprint across two sibling drafts
- Track/proof consistency: FermaBlend is new_build_track (WordPress, no custom-code override found); Fispoke case study is track: new_build - matches. No subscription-plan language anywhere in copy
- scripts/voice_check.py: clean on the full file, zero banned words/phrases/openers/em dashes
- word counts: email_1 76w, email_2 76w, email_3 49w - all within band (50-85 aim <80, 40-80, 30-60); email_3 clearly shortest, non-increasing brevity holds
- sign-off: plain "Ethan" all three emails, correct for startups ICP, no "God Bless" leakage
- single CTA per email, no booking link anywhere; CTA phrasing rotates ("worth 15 minutes to talk through it?", "up for a quick call this week?", "worth grabbing 15 minutes this week?") - deliberately avoided the exact "want to jump on a call?" phrase already used in this batch's startups--peakflo-yc-w22--saurabh-chauhan.md email_3 and startups--tenyour--joah-spearman.md email_1
- first sentences checked against this batch's recently-committed sibling drafts (startups--peakflo-yc-w22--saurabh-chauhan.md, startups--tenyour--joah-spearman.md, startups--smith-saint--madison-smith.md, startups--revella-health--shielvonda-haith.md, startups--visual-feeder--yaxi-yang.md): Peakflo's email_1 also opens on WordPress + a slow mobile load number + a verbatim Fispoke quote - close enough to this draft's original approach that email_1 was rewritten during this pass to open on the duplicated/contradictory stat-block finding instead (unique to FermaBlend, not available to any other lead), WordPress was moved to email_2, the load-time number was moved to email_3 only, and the Fispoke reference was paraphrased instead of quoted - sequence no longer shares a sentence skeleton or proof-point placement with Peakflo's
- cohesion: no repeated proof point (plain capability statement in email_1, Fispoke in email_2 only, callback-only closer in email_3); each email leads with a different research fact (stat-block inconsistency / staffing+platform / load time); escalating brevity holds
