---
contact_name: Shehbaz Virk
contact_title: Founder
organization: Cair Health
icp: startups
apollo_contact_id: 660517c6e6642e0007cbb162
score_total: 68
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-17
pushed_at: 2026-11-17
---

## research
- Six named AI agents for healthcare revenue-cycle management: claims coding, submission, denials, payer calls, payment posting; HIPAA and SOC2 compliant; claims 80+ integrations (source: cairhealth.com, WebFetch 2026-11-17, per score_notes)
- org_data: 7 employees, founded 2023 (source: Apollo org_data, per score_notes)
- Site platform: webflow -> subscription_track (source: scripts/platform_detect.py, per score_notes)

## proof_used
- knowledge/business-overview.md (plain capability statement only - no subscription_track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: a site that keeps pace
body: |
  Hey Shehbaz,

  Cair Health runs six AI agents handling claims coding, submission, denials, and payer calls, HIPAA and SOC2 compliant. That's a lot of product to ship while also keeping a site current.

  You're already on Webflow, the right call for a team moving this fast. We take that ongoing site work off a small team's plate: new pages, updates, integration fixes, so your team stays on the product.

  Worth 15 minutes to talk through what that'd look like for Cair?

  Ethan

## email_2
subject: a plan built for this
body: |
  Hey Shehbaz,

  Following up. A 7-person team building AI agents for healthcare RCM probably isn't the best use of anyone's time updating a Webflow site between releases.

  We run a monthly plan built around exactly that: new pages, content updates, integration fixes, for $1,000/mo.

  Worth a quick call on it?

  Ethan

## email_3
subject: short note from me
body: |
  Hey Shehbaz,

  Short note. If the site's staying current fine on its own, no worries at all.

  If it's falling behind the product, happy to talk through what ongoing support would look like for Cair.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-17
notes:
- "six AI agents... claims coding, submission, denials, payer calls" -> matches research block (same WebFetch 2026-11-17 used at scoring), light arm reuses this, no new search
- Track: subscription_track - correctly pitches a monthly plan, not a rebuild; no subscription_track case study exists yet, so no case study cited, plain capability statement only per the standing rule
- Pricing "$1,000/mo" -> matches knowledge/business-overview.md Grow tier exactly ("Care + new pages, landing pages, CMS work, small automations"); "new pages" is cited so Grow (not Care, which excludes new pages) is the correct tier; "Already on Webflow... lead with Grow or Partner" followed
- voice_check.py: clean
- Word counts: email_1 82w, email_2 51w, email_3 36w - within band
- Sign-off "Ethan" - correct for startups
- Cohesion: first sentence (named agent count + compliance specifics) sendable to no other org; escalating brevity (82->51->36); no proof-point repetition since no case study used
