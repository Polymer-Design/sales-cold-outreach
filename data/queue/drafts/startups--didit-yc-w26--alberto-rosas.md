---
contact_name: Alberto Rosas
contact_title: Chief Executive Officer
organization: Didit (YC W26)
icp: startups
apollo_person_id: 68636afa6028cd0001692678
score_total: 80
tier: hot
research_arm: deep
status: hot_approved
drafted_at: 2026-11-09
---

## research
- Didit's own blog (Dec 2, 2025, re-fetched 2026-11-09 at https://didit.me/blog/didit-enters-y-combinator/): raised ~$2M from YC, Saasholic, Hypersphere, Roar VC and Masia VC, entering YC's Winter 2026 batch, growing +20% month-over-month and "close to profitability"
- Homepage (fetched 2026-11-09, https://didit.me): single API for identity/fraud (KYC/KYB/AML/biometrics), serves 3,000+ organizations across 220+ countries; the site's image paths (/_next/image/) show it's a custom Next.js build, not a hosted builder like Wix/Squarespace
- **Track override:** platform_detect.py tagged this lead new_build_track (platform: unknown, its default for anything it can't fingerprint), but the homepage is confirmed custom-code (Next.js), which knowledge/business-overview.md says fits the monthly-plan pitch same as Webflow. Pitching subscription_track per outreach-email skill Step 0's override rule, not a rebuild.
- PageSpeed mobile (scripts/pagespeed_check.py --url https://didit.me --strategy mobile, run 2026-11-09): performance 83/100, largest contentful paint 4.4s - cited as a raw fact about their own site only, no comparative claim made
- 36 employees, founded 2023, 24mo headcount growth +83% (source: Apollo org_data, lead-scoring 2026-11-09)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no subscription-track case study exists yet per knowledge/case-studies/README.md, so no case study cited)

## email_1
subject: didit's 20% a month
body: |
  Hey Alberto,

  Growing 20% a month and closing in on profitable right out of YC W26 is a real run, most companies never see that curve.

  A product shipping new modules and compliance badges that fast usually outpaces whoever's maintaining the site between other work.

  We run ongoing monthly plans for teams like that: a dedicated team keeping a custom site current (new pages, landing pages, small builds) without pulling from your own roadmap.

  Worth 15 minutes?

  Ethan

## email_2
subject: didit.me, week to week
body: |
  Hey Alberto,

  At 36 people growing this fast, the site's usually the thing that gets touched last, not because it doesn't matter, just because nobody owns it full time.

  That's the gap a monthly plan closes: new landing pages, updates, small builds, handled without waiting on an engineer's spare hour.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, didit
body: |
  Hey Alberto,

  Last one from me.

  If the site's keeping pace with everything else moving at Didit, no worries at all.

  If it's not, happy to grab 15 minutes and walk through what ongoing support would actually look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "$2M raised, YC W26, +20% MoM, close to profitability" -> re-fetched https://didit.me/blog/didit-enters-y-combinator/ directly (primary source, dated Dec 2, 2025); all four figures confirmed verbatim. Deliberately did NOT cite the $7.5M seed figure - that number appears only in a banner/related-articles list on this same page, not described in the post body, and secondary sources (LinkedIn, third-party aggregator) disagreed on whether it's a separate round or the same raise restated - too unconfirmed to put in an email.
- Homepage claims (single API, KYC/KYB/AML/biometrics, 3,000+ orgs, 220+ countries, Next.js build) -> re-fetched https://didit.me, all confirmed; "Next.js" inference is from /_next/image/ asset paths, a reliable technical signal, not a guess.
- Track override -> confirmed correct call per knowledge/business-overview.md ("Astro, Vercel, or another custom-code site... fits a monthly plan... same as Webflow") and outreach-email skill Step 0's explicit override instruction. Noted on the draft and corrected on the lead record (data/leads/index.jsonl, track: subscription_track).
- No case study cited (none exists for subscription_track yet per knowledge/case-studies/README.md) - email_1 uses only a plain capability statement from knowledge/business-overview.md's monthly-plans section (Care/Grow/Partner/Partner Plus scope), no invented numbers.
- PageSpeed claim ("4.4s LCP") -> raw fact about Didit's own site only, no comparison to Polymer's benchmark made (correctly not needed here, not used in the draft copy at all actually - dropped from final copy in favor of the stronger growth hook, kept in research block for the record).
- scripts/voice_check.py: clean.
- word counts: email_1 78w, email_2 58w, email_3 40w - all within band.
- sign-off: plain "Ethan" (startups).
- single CTA per email, no booking link, first sentence (20%/month growth + profitability + YC W26) specific to this company.
- checked against other recent drafts in data/queue/, including today's Beyond Reach Labs draft - distinct hook/structure (growth-rate hook vs. press-spotlight hook), no reused phrasing.
- HOT TIER: email 1 requires Ethan's review via PR before anything touches Apollo.
