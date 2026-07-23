# Sample outreach - voice & hook refinement (2026-07-23)

Draft sequences for refining tone and the hook hierarchy before the ICPs and case study
library are final. **These leads are illustrative stand-ins, not citable**, same convention as
`docs/pilot-test.md`: they exist to test copy, not to send. Nothing here is queued or wired to
Apollo. All six emails pass `scripts/voice_check.py` and sit inside their length bands.

**Why illustrative and not real named churches:** this build session's network policy blocks
live scraping of third-party sites (the agent proxy 403s on outbound CONNECT to church
domains), so I can't gather the sourced, verifiable facts a real draft requires without
inventing claims about a real org. Two ways to make the next pass real: (a) paste a couple
real prospects with a few facts each and I'll draft against them, or (b) run the drafting step
in CI (GitHub Actions has open network) so it can research live. See the note at the bottom.

The point of these is the **hook**: it comes from crossing what the church runs (Planning
Center) against what Polymer builds (a site that pulls Church Center in), not from a vanity
metric. Load time is at most a supporting clause, shown where it would go.

---

## Lead A - groups friction (illustrative): Marcus, Executive Pastor, "Cedar Ridge Church" (~1,800)

**The hook (capability fit):** they run groups/giving/check-in through Planning Center, but the
website links *out* to the Church Center app instead of pulling it in, so a visitor has to leave
the site to do anything. Timed to a fall groups launch, that friction is the pitch. No proof
numbers used (no approved church case study exists yet), so the hook carries the email alone.

**Email 1** - subject: *your groups page*
> Hey Marcus, Cedar Ridge runs groups, giving, and check-in through Planning Center, but someone
> on your website has to leave it and open a separate app to find a group or register for
> anything. With the fall groups push starting, that extra hop is where a lot of people quietly
> fall off. We build church sites around Church Center, so groups, events, and giving sit right
> on the page, the same tools your team already runs, no second app to send people to. Worth 15
> minutes to see what that looks like before groups launch?
> \- Ethan

**Email 2** (+3d) - subject: *one tap from the homepage*
> One more thing, Marcus. Most people check out a church on their phone before they ever show up,
> and right now your service times and groups sit behind an app they have to download first. We
> can pull all of it straight from Planning Center onto your homepage, so it is one tap and your
> team never updates it twice. Want me to walk you through how that works?

**Email 3** (+7d) - subject: *last note*
> Last one, Marcus. If the site is not this season's problem with everything groups is taking, I
> understand. If it is, we can get your Church Center tools onto the homepage instead of behind a
> download. Worth a quick look?

---

## Lead B - giving friction mid-campaign (illustrative): Priya, Communications Director, "Grace Harbor Church" (~3,500)

**The hook (capability fit):** a capital campaign is asking people to give, but the giving flow
is buried and kicks out to a separate app. Polymer's Church Center giving integration puts a
pledge one tap from anywhere. Again, no invented outcome numbers.

**Email 1** - subject: *the Build Together page*
> Hey Priya, saw Grace Harbor is midway through the Build Together campaign. The campaign page
> asks people to give, but the giving link is three taps deep and opens a separate Church Center
> app instead of the site, which is friction right where you want none. We build church sites
> that put Planning Center giving straight on the page, so a pledge is one tap from anywhere on
> the site. Worth 15 minutes before the next campaign push?
> \- Ethan

**Email 2** (+3d) - subject: *mobile giving*
> Quick follow, Priya. Most campaign gifts now start on a phone, and right now getting to your
> giving form takes a few too many taps. We can wire Planning Center giving right into the
> homepage so a pledge is one tap, pulled from the tools you already run. Want to see how that
> looks?

**Email 3** (+7d) - subject: *last one*
> Last note, Priya. If the timing is off with everything the campaign is taking, I get it. If a
> site that keeps pace with the campaign would help, we can move quickly. Want me to sketch what
> the homepage could do?

---

## Where PageSpeed sits (supporting, never the opener)

If PageSpeed had measured Grace Harbor's homepage at, say, 5.1s on mobile, it slots in as a
*reinforcing clause* on an already-human hook, not the lead:

> ...opens a separate Church Center app instead of the site. It also takes about 5 seconds to
> load on a phone, which is where most of those gifts start. We build church sites that put
> Planning Center giving straight on the page...

Notice the email still opens on the campaign + giving friction. The load time is the second
beat, and only appears because a real measurement backed it. If speed were the *only* thing to
say, the research is too thin and the lead should go back for more digging.

## What I'd want to sharpen with you

- **Length:** email 1 runs ~80-95 words. Too long, or right for a first cold email?
- **Signature:** "- Ethan" on email 1 only, or on all three? Right now only email 1 signs off.
- **CTA phrasing:** "worth 15 minutes?" vs "want me to walk you through it?" vs something drier.
- **The friction framing:** does "a separate app / an extra hop / one tap from the homepage"
  land, or is it too in-the-weeds for a first touch to an Executive Pastor?

## Next pass with real prospects

Give me either: a couple real churches (name + site + one or two facts you already know), and
I'll draft sourced sequences against them here; or the go-ahead to run the drafting step in a
CI job where live research works. Same for startups once you've set the vertical.
