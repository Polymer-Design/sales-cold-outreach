---
name: outreach-email
description: Research a lead and draft their 3-email cold sequence in Ethan's voice. Use for every lead that clears the scoring tier cutoff.
---

# Outreach email drafting

The goal: an email that reads like a human researched this company and wrote it by hand.
Because that is literally what you're doing, minus the hand.

## Step 0 — Confirm the track before writing anything

Every lead is already tagged `new_build_track` or `subscription_track` by the lead-scoring
skill (via `scripts/platform_detect.py`). This changes the OFFER, not just the wording:

- **new_build_track**: pitch the website build (Sprint/Core/Custom per
  `knowledge/business-overview.md`). Case studies tagged `track: new_build` in their
  frontmatter apply here.
- **subscription_track** (lead is already on Webflow): pitch the $3k/mo ongoing
  retainer, NOT a rebuild - never suggest replacing a site that's already on Webflow.
  Case studies tagged `track: subscription` apply here. **These don't exist yet** (see
  `knowledge/case-studies/README.md`) - until one does, draft with a plain capability
  statement only, per the standing "no proof yet, write without proof" rule. Do not
  borrow a new-build case study's numbers for a subscription pitch; the story doesn't fit.
- Church-specific: if `platform: subsplash`, use the "your app's great, the website
  doesn't match it" angle, not the generic "outgrown your DIY builder" angle - a church on
  Subsplash already has budget and sophistication; don't undersell them.

## Step 1 — Research (before writing a word)

Collect 3-6 concrete, current facts about the lead. Every fact needs a source URL.
- Their website (what's on it, what's broken, what's dated, what platform it runs on)
- Churches: their churchcenter.com pages (what modules they use: giving, events, groups,
  check-in), sermon series, campus count, recent announcements
- Startups: funding announcements, product launches, job postings (especially marketing/web
  roles), founder posts, press
- The specific person: their role, anything they've said or published
- **PageSpeed** (`scripts/pagespeed_check.py --url <their-site>`, if not already run during
  scoring): returns all four Lighthouse scores (performance, accessibility, best practices,
  SEO) plus load time. Don't fixate on speed — a weak SEO or accessibility score is often the
  bigger, more-overlooked problem and a legitimate angle ("your site isn't set up to be found
  in search", "it fails basic accessibility checks"). Record whatever is genuinely weak, but
  treat it as SUPPORTING evidence, not the opener (see Step 3, part 1 for the hook hierarchy).
  Any number about THEIR own site is citable as a plain fact. A comparison to Polymer's own
  sites ("ours average X") is allowed now that `knowledge/pagespeed-benchmark.md` is
  `status: approved` — but use it sparingly and compare like for like (our benchmark is
  desktop), and the fact-check gate still checks that file's status every time.

Write these into the draft file's `research` block (format below). Weak research = weak
email. If you can't find one specific, current, non-obvious fact, flag the lead for skip
rather than writing a generic email.

## Step 2 — Pick the proof

From `knowledge/case-studies/` (status: approved, icp_fit matches) plus
`knowledge/business-overview.md`. One proof point per email, the most relevant, not the most
impressive. If no approved case study fits, use a plain capability statement from the
business overview and nothing more.

## Step 3 — Write the sequence

Read `knowledge/voice-and-tone.md` first, every time. Then read `config/playbook.yaml`
`active` and follow it — those values (subject style, first-line angle, length target, CTA
style, proof style, send time) are the current split-test winners. If this lead is enrolled
in a running experiment (check `data/experiments.md`), use that lead's assigned arm instead
of the playbook default for the variable under test, and record the arm on the draft.

The four-part structure maps onto a very short email; the parts are beats, not paragraphs:

1. **Grab attention** — sentence one is a specific observation about THEM, and the best hooks
   come from crossing your research against what Polymer does for their track (Step 0) plus a
   proof point. Not a compliment, not a vanity metric. Rank hooks, use the highest the
   research supports:
   - **Capability fit (best):** a fact about them that maps onto a Polymer capability or a
     matching case study. Church example: they run Planning Center but their site pulls none
     of it in, so events, groups, and giving live in a separate app people hunt for, and we
     build the site around Church Center so that friction disappears. Startups: a stock
     template that undercuts the raise, a gap their new marketing hire inherits, a rebuild off
     Wix (new_build), or, for a site already on Webflow, the ongoing-work angle (subscription).
   - **A fresh, specific moment (good):** a raise, a capital campaign, a new hire, a launch,
     and why now. Tie it to what we would do, not just "congrats."
   - **Site health (supporting only, never the opener):** a PageSpeed load time is secondary
     evidence that reinforces a capability hook ("...and it takes 6.2s to load on a phone,
     which is where your people open it"), never the opening line on its own and never a stat
     for its own sake. If a speed number is the only thing you have, the research is too thin.
   Whatever you lead with, it must be impossible to send to any other company.
2. **Generate interaction** — connect that observation to a problem or moment they're likely
   in right now. One or two sentences.
3. **Create desire** — the proof point. What we did for someone like them, stated flat, real
   numbers only.
4. **Call to action** — one ask: the intro call. Low-pressure phrasing beats assumptive
   closes ("worth 15 minutes?" not "grab time on my calendar here"). Previewing that a
   scheduler link will follow if they're interested ("let me know and I'll send over a
   scheduler link!") is also on-voice - it's still not putting the link in email 1.

**Constraints:** body 50-85 words, aim under 80 - external benchmark data (elite cold-email
performers average under 80 words on first touch) matches our own "extremely economical"
voice rule, so this is the default target until real reply-rate data says otherwise via
self-review. Subject 2-5 words, lowercase-leaning, specific, no
clickbait ("your event pages", "the new site"). No greeting beyond "Hey [first name],", on
its own line, then a blank line before the body - see `knowledge/voice-and-tone.md`
"Email register" for the full paragraph-break formatting. Sign-off per that file's "Sign-off
by stage and ICP" - startups get plain "Ethan", churches get "God Bless," then "Ethan".

**Email 2** (day +3): new angle, not a "just bumping this". Reference a different research
fact or a different proof point. 40-80 words. Sent as a reply in the same thread.
**Email 3** (day +7): the closer. Shortest of the three. Give them an easy out and one final
reason. 30-60 words. "If the site's not a priority this year, no worries. If it is..." energy,
in Ethan's phrasing, not that literal template.

## Step 4 — Queue for fact-check

Write the draft to `data/queue/drafts/{icp}--{org-slug}--{person-slug}.md`:

```markdown
---
contact_name:
contact_title:
organization:
icp: startups | churches
apollo_contact_id: # if known
score_total:
tier:
status: drafted
drafted_at:
---

## research
- fact one (source: URL)
- fact two (source: URL)

## proof_used
- knowledge/case-studies/fispoke.md OR knowledge/business-overview.md#section

## email_1
subject:
body: |
  ...

## email_2
...

## email_3
...
```

Then invoke the fact-check-email skill on it. A draft never advances with status: drafted.

## Never

- Never send-ready an email whose first line could be sent to a different company.
- Never invent or embellish facts, numbers, client names, or outcomes.
- Never mention AI, automation, or "came across your website" filler.
- Never write to a lead flagged do-not-contact or previously "not interested".
