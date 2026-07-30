---
status: approved
refreshed: 2026-07-30
strategy: desktop
---

# Polymer client PageSpeed benchmark

Real desktop Lighthouse scores from 8 shipped Polymer client sites, across all four categories (performance, accessibility, best practices, SEO). Citable in outreach as a comparative claim ("our client sites average X"). Refreshed 2026-07-30 by `scripts/build_pagespeed_benchmark.py`.

- **Sample size:** 8 shipped sites (desktop)
- **Average performance:** 91 / 100
- **Average accessibility:** 94 / 100
- **Average best practices:** 95 / 100
- **Average SEO:** 97 / 100
- **Average load (LCP):** 1.1s
- **Date last refreshed:** 2026-07-30

## Per-site (desktop)

| site | perf | a11y | best practices | SEO | LCP (s) |
|---|---|---|---|---|---|
| https://socialscience.nyc/ | 98 | 97 | 77 | 100 | 0.9 |
| https://www.coastalcc.org/ | 83 | 86 | 96 | 92 | 0.9 |
| https://www.sounderbenefits.com/ | 72 | 100 | 92 | 92 | 0.8 |
| https://allinpoolcare.com/ | 98 | 91 | 100 | 100 | 1.0 |
| https://barberioschool.com/ | 88 | 88 | 100 | 100 | 2.2 |
| https://www.creativewx.com/ | 100 | 97 | 96 | 100 | 0.6 |
| https://coastalshoreservices.com/ | 91 | 100 | 100 | 100 | 1.1 |
| https://jeremysissongolf.com/ | 99 | 93 | 100 | 91 | 0.9 |

## Excluded from the average

- http://thelandmark.church/ — a large, content- and visually-heavy build where the client prioritized content interconnectivity over raw Lighthouse metrics; not representative of the speed/quality benchmark. (Measured desktop: perf 59, a11y 94, best practices 81, SEO 92, LCP 3.2s.)
- https://www.fispoke.com/ — measurement failed (Google PageSpeed API timeout); retry on a future run.
