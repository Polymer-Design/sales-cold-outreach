---
contact_name: Aniket Gupta
contact_title: CEO
organization: xPay (YC W24)
icp: startups
apollo_contact_id: 6725d52841fd180001b23d57
score_total: 70
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-18
---

## research
- Homepage states three different currency-coverage numbers in three places: 140+ (meta
  description), 150+ (body), 100+ (pricing section); footer reads "PCI DSS Complaint"
  instead of "Compliant" (source: WebFetch of xpaycheckout.com, 2026-11-18)
- FAQ section header duplicates the testimonials header ("What our customers are saying
  about us?") and none of the FAQ questions show answers (source: WebFetch of
  xpaycheckout.com, 2026-11-18)
- "Products" appears twice in the footer navigation; a "Backed By" section shows no logos or
  names (source: WebFetch of xpaycheckout.com, 2026-11-18)
- International payment gateway (YC W24) for cross-border/Indian-entity businesses, org_data
  19 employees, founded 2023, strong growth (157%/12mo, 200%/24mo headcount) (source: Apollo
  org_data, via lead-scoring score_notes, 2026-11-17)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, startups icp_fit) - full rebuild with SEO/AEO/
  structured data built in from scratch for a fintech product, "the old Wix site had none of it"

## email_1
subject: three different numbers
body: |
  Hey Aniket,

  xPay's homepage lists three different currency counts, 140+ in the meta description, 150+
  in the body, 100+ on the pricing section, plus "PCI DSS Complaint" instead of "Compliant"
  in the footer. For a payments company selling trust on compliance, that's the opposite of
  reassuring.

  We build in accuracy and structured content from scratch, not bolted on later, the way we
  did for Fispoke's fintech rebuild.

  Open to a quick call about a cleanup?

  Ethan

## email_2
subject: the FAQ with no answers
body: |
  Hey Aniket,

  Your FAQ section header is identical to the testimonials header above it, "What our
  customers are saying about us?", and none of the FAQ questions actually show an answer.
  That's the page a buyer hits during final diligence on a payments vendor.

  We write and ship real FAQ content as part of a build, not a placeholder waiting to get
  filled in later.

  Up for a quick call this week?

  Ethan

## email_3
subject: no pressure, Aniket
body: |
  Hey Aniket,

  If the site's content is already getting cleaned up, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- Three conflicting currency counts, "PCI DSS Complaint" typo, duplicated FAQ/testimonials
  header with unanswered FAQs, duplicate "Products" footer link, empty "Backed By" section
  -> verified against same-session WebFetch of xpaycheckout.com (2026-11-18); not re-fetched
- Polymer facts: Fispoke line ("the old Wix site had none of it") matches
  knowledge/case-studies/fispoke.md exactly; track=new_build matches this lead's
  new_build_track; no numbers invented or borrowed beyond the quoted line
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 76/73/27 - all within band
- One CTA per email, sign-off plain "Ethan"
- Cohesion: distinct hooks (conflicting numbers/typo, broken FAQ, closer), escalating
  brevity, no repeated proof point (Fispoke line only in email_1)
