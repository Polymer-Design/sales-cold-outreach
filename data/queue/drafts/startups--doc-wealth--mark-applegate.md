---
contact_name: Mark Applegate
contact_title: Co-Founder / COO
organization: Doc Wealth
icp: startups
apollo_person_id: 66f68cc10e6d7300016edb94
score_total: 52
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-09
---

## research
- Homepage (fetched 2026-11-09, https://docwealth.com): positions the company as "Physician Tax Advisors - Tax Advice for Doctors," a financial-services firm serving physicians specifically; page content was otherwise thin (no numbers, no platform markers visible in the fetch)
- 14 employees, strong headcount growth (200% 12mo, 400% 24mo per org_data), financial services industry, no founded_year on record (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as wix -> new_build_track (source: scripts/platform_detect.py --url https://docwealth.com --icp startups, scoring 2026-11-09)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: doc wealth's headcount
body: |
  Hey Mark,

  Doc Wealth's headcount has quadrupled over the last two years, real growth for a firm built specifically around physician tax advice.

  Doctors vetting a new advisor usually judge trust from the website before they ever book a call.

  We build sites for growing financial-services firms in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who owns docwealth.com
body: |
  Hey Mark,

  At 14 people and growing fast, the site's usually whoever has the most spare time, not someone whose actual job it is.

  We're a dedicated team that builds it right once, then keeps it current as the firm grows.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, doc wealth
body: |
  Hey Mark,

  Last one from me.

  If the site's earning trust the way the rest of the business is growing, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what a rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "quadrupled over two years" -> matches org_data 24mo growth (4.0 = 400%) exactly. "Physician tax advice" positioning -> confirmed from homepage title tag fetch.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; track: new_build matches lead's wix-detected tag.
- scripts/voice_check.py: clean. word counts: 77w/49w/42w - within band.
- sign-off: plain "Ethan". single CTA per email, no booking link, first sentence specific to this company.
- checked against other drafts in data/queue/ - distinct hook, no reused phrasing.
