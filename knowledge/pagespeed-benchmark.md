---
status: approved
refreshed: 2026-07-29
---

# Polymer client PageSpeed benchmark

Real mobile PageSpeed/Lighthouse scores from 8 shipped Polymer client sites. Citable in outreach as a comparative claim ("our client sites average X"). Refreshed 2026-07-29 by `scripts/build_pagespeed_benchmark.py`.

- **Sample size:** 8 shipped sites
- **Average mobile performance score:** 72 / 100
- **Average mobile load (LCP):** 8.0s
- **Date last refreshed:** 2026-07-29

## Per-site (mobile)

| site | performance score | LCP (s) |
|---|---|---|
| https://www.fispoke.com/ | n/a | n/a |
| https://socialscience.nyc/ | n/a | n/a |
| http://thelandmark.church/ | 50 | 19.6 |
| https://www.coastalcc.org/ | 63 | 22.0 |
| https://www.sounderbenefits.com/ | 58 | 2.6 |
| https://allinpoolcare.com/ | 69 | 6.6 |
| https://barberioschool.com/ | 79 | 4.1 |
| https://www.creativewx.com/ | 96 | 2.3 |
| https://coastalshoreservices.com/ | 86 | 2.7 |
| https://jeremysissongolf.com/ | 78 | 3.9 |

## Skipped this run (not counted in the average)

- https://www.fispoke.com/: 500: {
  "error": {
    "code": 500,
    "message": "Lighthouse returned error: Something went wrong.",
    "errors": [
      {
        "message": "Lighthouse returned error: Something went wrong.",
        "domain": "lighthouse",
        "reason": "lighthouseError"
      }
    ]
  }
}

- https://socialscience.nyc/: 500: {
  "error": {
    "code": 500,
    "message": "Lighthouse returned error: Something went wrong.",
    "errors": [
      {
        "message": "Lighthouse returned error: Something went wrong.",
        "domain": "lighthouse",
        "reason": "lighthouseError"
      }
    ]
  }
}

