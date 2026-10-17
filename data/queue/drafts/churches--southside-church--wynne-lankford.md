---
contact_name: Wynne Lankford
contact_title: Executive Pastor
organization: Southside Church
icp: churches
apollo_contact_id: 62440302bf006200015646ee
score_total: 55
tier: warm
status: pushed
pushed_at: 2026-10-17T14:50:00Z
drafted_at: 2026-10-17
---

## research
- Courthouse campus and an Online campus, 2 Sunday services (9am and 10:45am) (source: https://southsidechurchva.org)
- Site platform: Subsplash, confirmed via scripts/platform_detect.py --url https://southsidechurchva.org --icp churches (2026-10-17) - church-specific nuance per lead-scoring SKILL.md: Subsplash church already has budget/sophistication
- Giving routes through a SnapPages page, not Church Center; mobile app is Subsplash-based; a separate southside-church-26809.churchcenter.com form handles "Say yes to Jesus" and "Next Steps" (source: https://southsidechurchva.org)
- Mobile PageSpeed: performance 26/100, LCP 33.4s (source: scripts/pagespeed_check.py --url https://southsidechurchva.org --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/case-studies/landmark-church.md (direct fit: Landmark also migrated off Subsplash - organic search sessions +29.5%, platform costs cut ~70%)

## email_1
subject: southsidechurchva.org's 33-second load
body: |
  Hey Wynne,

  Southside's homepage takes 33 seconds to show its main content on mobile right now, and that's before anyone gets to the Subsplash app, SnapPages giving, or the separate Church Center form underneath it.

  We moved Landmark Church off that same kind of Subsplash setup onto one connected Webflow site with Planning Center wired in directly, and organic search sessions grew 29.5% with zero paid spend.

  Open to chatting about what that'd look like for Southside?

  God Bless,
  Ethan

## email_2
subject: 33 seconds, courthouse to online
body: |
  Hey Wynne,

  Between the Courthouse campus and the Online campus, a 33-second mobile load means a lot of people are gone before either one ever shows up on their phone.

  We'd bring it all onto one Webflow build with Church Center pulled in directly, the same move that cut Landmark Church's platform costs by about 70%.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no worries either way
body: |
  Hey Wynne,

  I'll stop here if this isn't landing. If the site's working fine as-is, no worries. If a 33-second mobile load is costing you both campuses, make sense to connect, even briefly?

  Appreciate you reading this far either way.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "takes 33 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://southsidechurchva.org --strategy mobile, LCP display "33.4 s" (draft rounds down to 33, not overclaiming)
- "Courthouse campus and an Online campus", 2 Sunday services, Subsplash app + SnapPages giving + separate Church Center form -> verified against https://southsidechurchva.org and scripts/platform_detect.py --url https://southsidechurchva.org --icp churches -> subsplash
- Subsplash church-specific angle applied (not the "outgrown DIY builder" framing)
- "organic search sessions grew 29.5%" and "cut Landmark Church's platform costs by about 70%" -> match knowledge/case-studies/landmark-church.md, status: approved, track: new_build (matches this lead) - Landmark also migrated off Subsplash, direct-fit proof
- voice_check.py: clean
- word counts: email_1 80w, email_2 65w, email_3 43w - all within band
- CTA/subject lines checked against the other 8 drafts - unique
