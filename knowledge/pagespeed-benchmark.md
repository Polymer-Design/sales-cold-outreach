---
status: approved
refreshed: 2026-07-30
strategy: desktop
---

# Polymer client PageSpeed benchmark

Real desktop Lighthouse scores from 9 shipped Polymer client sites, across all four categories (performance, accessibility, best practices, SEO). Citable in outreach as a comparative claim ("our client sites average X"). Refreshed 2026-07-30 by `scripts/build_pagespeed_benchmark.py`.

- **Sample size:** 9 shipped sites (desktop)
- **Average performance:** 88 / 100
- **Average accessibility:** 94 / 100
- **Average best practices:** 94 / 100
- **Average SEO:** 96 / 100
- **Average load (LCP):** 1.3s
- **Date last refreshed:** 2026-07-30

## Per-site (desktop)

| site | perf | a11y | best practices | SEO | LCP (s) |
|---|---|---|---|---|---|
| https://www.fispoke.com/ | n/a | n/a | n/a | n/a | n/a |
| https://socialscience.nyc/ | 98 | 97 | 77 | 100 | 0.9 |
| http://thelandmark.church/ | 59 | 94 | 81 | 92 | 3.2 |
| https://www.coastalcc.org/ | 83 | 86 | 96 | 92 | 0.9 |
| https://www.sounderbenefits.com/ | 72 | 100 | 92 | 92 | 0.8 |
| https://allinpoolcare.com/ | 98 | 91 | 100 | 100 | 1.0 |
| https://barberioschool.com/ | 88 | 88 | 100 | 100 | 2.2 |
| https://www.creativewx.com/ | 100 | 97 | 96 | 100 | 0.6 |
| https://coastalshoreservices.com/ | 91 | 100 | 100 | 100 | 1.1 |
| https://jeremysissongolf.com/ | 99 | 93 | 100 | 91 | 0.9 |

## Skipped this run (not counted in the average)

- https://www.fispoke.com/: request failed: HTTPSConnectionPool(host='www.googleapis.com', port=443): Read timed out. (read timeout=120)
