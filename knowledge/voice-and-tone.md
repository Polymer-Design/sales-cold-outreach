# Voice and tone — every outbound email must pass this

Write like a sharp operator talking to another operator. Calm, specific, human, grounded.
If it sounds like a consulting deck or a SaaS homepage, it's wrong.

## Hard bans (any hit = automatic fail in fact-check)

**Banned words:** insights, the key to, success requires, streamline, leverage, optimize,
maximize, unlock, unleash, driving impact, enable, empower, solutions-oriented, world-class,
cutting-edge, innovative, next-gen, game-changer, best-in-class, future-proof, revolutionary,
scalable, disruptive, holistic, robust, dynamic, agile, seamless, synergy, elevate, delve,
nuanced, crucial, essential, incredibly, significantly

**Banned clichés:** customer-centric, growth hacking, data-driven (as filler), actionable
insights, move the needle, low-hanging fruit, quick wins, win-win, thought leader,
best practices, at scale (without a real number), paradigm shift, digital transformation,
value-add

**Banned openers:** "I hope this email finds you well", "I hope this finds you well",
"I wanted to reach out", "My name is", "I'm reaching out because", "In today's [anything]",
"When it comes to", "At the end of the day", "The truth is"

**Em dashes:** none in cold emails, period. Rewrite with a comma, period, or colon.
(The broader rule allows rare legitimate uses, but in a 100-word cold email there is no
legitimate use. Zero.)

## Email register

- Extremely economical. Short sentences. 1-3 sentence paragraphs.
- Sentence one is the point. No context-setting before the substance.
- One clear, specific CTA. Never stacked asks.
- **Formatting:** "Hey [Name]," on its own line, then a blank line, then each beat (attention /
  interaction / desire / CTA) as its own short paragraph with a blank line between them - not
  one dense block. Whitespace is part of the voice; a wall of text is not on-voice even if
  every sentence in it would pass on its own.
- Sign-off: see "Sign-off by stage and ICP" below - it varies, it is not always "- Ethan".
- Conversational is fine ("you think that'd be worth 15 minutes?"), sloppy is not. A genuine
  exclamation point ("congrats on the raise!", "glad that landed!") reads as warm, not
  unprofessional - don't stack them, but don't flatten real enthusiasm into deadpan either.
- CTA can ask permission plainly ("worth 15 minutes?") or preview what happens next without
  including it ("let me know if you're interested and I'll send over a scheduler link!") -
  both are on-voice. Never put the actual booking link in email 1; a forward reference to one
  coming later is fine and does not violate the no-link-in-the-cold-sequence rule.
- Real numbers where they exist. Never invented figures.
- If a draft runs longer than the relationship and purpose call for, cut it.

## ICP-conditional register

The core voice above holds for both ICPs. Two things shift by ICP:

- **Churches:** warmer and mission-oriented. It's on-voice to name what this does for the
  congregation ("help you engage your people more deeply," "one stop shop instead of sending
  your people to two or three different platforms") and to close on the mission, not just the
  offer ("our desire is for the local church to be more equipped to fulfill the Great
  Commission"). Don't force this into every sentence - one line of it per email is enough.
- **Startups:** plainer, higher-energy, capability-first. No mission language, no "God Bless."

## Sign-off by stage and ICP

- **Cold email 1-3 (startups):** plain first name, "Ethan". No dash needed, but "- Ethan" is
  also fine - either reads on-voice.
- **Cold email 1-3 (churches):** "God Bless," (or "God Bless!") on its own line, then "Ethan".
- **Booking-reply, after "interested" (both ICPs):** a short, situational close that matches
  the energy of their reply - "Cheers!", "Excited to chat!", "Thanks!" - then "Ethan". Churches
  still get "God Bless," instead of a generic close. Never "Best regards" or anything stiffer
  than the cold email itself.

## Surviving AI inbox triage (Gemini/Copilot/Grok-style assistants, not just human readers)

A growing share of decision makers have an AI layer in front of their inbox now - summarizing,
prioritizing, or auto-filing before a human ever sees the subject line. Those tools are
trained on exactly what mass cold-outreach looks like, so the defense isn't a new rule, it's
taking the existing rules in this file more seriously, plus a few additions that target
pattern-matching specifically:

- **Vary structure across leads, not just the facts.** Swapping `{company}` into an otherwise
  identical sentence skeleton is the single most detectable fingerprint of a sequence tool -
  an AI triage model sees the structure across thousands of training examples, not just the
  words. Two emails to two different leads should differ in sentence construction and rhythm,
  not just which proper nouns are plugged in. This is already implied by "impossible to send
  to any other company" (outreach-email skill, Step 3) - read it as a structural requirement,
  not just a content one.
- **Don't let a CTA phrase become a signature move.** "Worth 15 minutes?" repeated verbatim
  across every email ever sent is itself a fingerprint once it's gone out hundreds of times.
  Rotate genuinely different phrasings lead to lead (see outreach-email skill Step 3, part 4
  for the current options) - the point is variety, not a single memorized line.
- **Plain text over formatting.** No images, no logo, no colored buttons, no tracking-pixel
  signature graphics. A signature is a name, maybe a title and phone number - nothing that
  renders like a marketing template.
- **Minimize links.** Already true for email 1 (no booking link - see "Call to action" in
  outreach-email skill Step 3). Keep later emails just as link-light; every extra link raises
  both spam-filter score and "this is bulk" pattern confidence.
- **Reply-able, not broadcast-feeling.** Sent from a real named person's mailbox with a real
  reply-to (already true - see `config/domains.yaml`), not a "no-reply" or "team@" address.
  Never add a second CTA, a forwarded-to-someone-else option, or anything that reads like it
  came from a tool rather than a person.
- The CAN-SPAM footer (physical address + unsubscribe, `config/system.yaml` `can_spam`) is a
  legal requirement and stays - don't try to hide or shrink it to look less "bulk." That
  tension is accepted; everything above is about not adding extra bulk-mail signals on top of
  the one that's legally required.

## Self-test before shipping any draft

- [ ] Zero banned words/clichés/openers
- [ ] Zero em dashes
- [ ] First sentence would make sense as the only sentence
- [ ] One CTA
- [ ] Greeting on its own line; blank-line paragraph breaks between beats, not one dense block
- [ ] Sign-off matches the stage and ICP (see "Sign-off by stage and ICP")
- [ ] Every factual claim traceable to knowledge/ or the lead's research notes
- [ ] Reads out loud like a person, not a template with variables filled in
