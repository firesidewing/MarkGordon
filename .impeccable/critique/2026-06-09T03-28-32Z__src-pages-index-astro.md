---
target: homepage
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-06-09T03-28-32Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Tab/carousel states work; no loading feedback on video or HubSpot form |
| 2 | Match System / Real World | 3 | Plain-spoken overall; "empower" and crisis framing feel like legacy marketing copy |
| 3 | User Control and Freedom | 3 | Standard nav escape hatches; "What I Offer" parent link goes to `#` |
| 4 | Consistency and Standards | 2 | Four "Book Discovery Call" buttons, mixed shadows (`shadow-sm` vs `shadow-md`), heading punctuation varies |
| 5 | Error Prevention | 3 | n/a for marketing; blind-spot CTA is clear |
| 6 | Recognition Rather Than Recall | 2 | Six identical "Learn More" labels; users must remember which card they were reading |
| 7 | Flexibility and Efficiency | 2 | Long-scroll only; no jump links or audience shortcuts |
| 8 | Aesthetic and Minimalist Design | 2 | Dense page, three near-identical dark-header card patterns in a row |
| 9 | Error Recovery | 3 | n/a |
| 10 | Help and Documentation | 2 | No guided path for couples vs org leaders |
| **Total** | | **26/40** | **Acceptable — significant improvements needed** |

Cognitive load: **4 checklist failures** (single focus, visual hierarchy, one-thing-at-a-time, minimal choices). High load for a first visit.

## Anti-Patterns Verdict

**LLM assessment:** Does not scream "2026 AI slop." Cool gray bands, committed cobalt blue, and Montserrat/Open Sans are intentional brand preservation, not cream-and-gradient defaults. The tells are subtler: WordPress-era composition (stacked uppercase section anchors, identical icon-bullet cards, long scroll of same-shaped offerings). Someone familiar with coaching-site templates would recognize the lineage, not ChatGPT.

**Deterministic scan:** Clean. `detect.mjs` returned `[]` across 12 homepage source files. No gradient text, side-stripes, numbered eyebrows, or hero-metric blocks in markup.

**Visual overlays:** Injection attempted on `https://short-matter.vercel.app/`; `detect.js` from localhost:8400 failed to load (browser cannot reach local live-server). No reliable user-visible overlay. Visual review done via screenshots and accessibility snapshot instead.

## Overall Impression

Solid rebuild foundation: on-brand blue, video-first hero, real testimonials, purposeful CTA band. The page still reads as "everything we sell, in order" rather than "the open door" the design system describes. Biggest opportunity: split the dual audience (couples at home vs org/faith leaders) and give the hero real typographic authority.

## What's Working

1. **Video-led hero** — Mark on screen before claims. Matches "show, don't tell" and builds trust faster than stock photography.
2. **Committed blue rhythm** — Utility bar, CTA band, section headings, and buttons share one hue. Cool `#f0f3f6` bands avoid cream-slop. Feels like Mark Gordon, not generic SaaS.
3. **Blind-spot CTA band** — Specific offer, plain copy, text-link CTA with arrow. Best conversion moment on the page.

## Priority Issues

### [P1] Hero lacks typographic authority; h1 undersized
- **Why:** H1 uses `text-h2` (1.75rem) with the same uppercase tracking as every section h2. Hero does not dominate; video and headline compete at equal weight.
- **Fix:** Promote h1 to a display scale (`clamp(2.25rem, 5vw, 3.5rem)`), sentence case or title case for warmth, reserve uppercase tracking for section anchors only.
- **Suggested command:** `/impeccable typeset homepage hero`

### [P1] No audience routing — couples and org leaders share one funnel
- **Why:** PRODUCT.md names two co-primary audiences. Homepage presents courses, book, keynote, and coaching in sequence with no "I'm a couple" / "I'm booking for my organization" fork. Jordan abandons; org leaders hunt for keynote below the fold.
- **Fix:** Add a dual-path band after hero (or split hero CTAs): "Start a course" vs "Book Mark for your event." Reorder or tag sections by audience.
- **Suggested command:** `/impeccable shape homepage audience paths`

### [P1] Identical card grid in product section
- **Why:** Three `ProductCard` components share dark header + blue rule + dual buttons. Matches the "identical card grids" anti-pattern. Keynote and coaching blur together; same `Mark-47.jpg` for both.
- **Fix:** Differentiate layout per offering (book = image-forward, keynote = pull quote + single CTA, coaching = list + portrait). Use distinct photography.
- **Suggested command:** `/impeccable layout product section`

### [P2] Copy voice: "empower" repetition and buzzword leakage
- **Why:** "Empower" appears in h1, intro, mission, keynote subtitle, and footer tagline. PRODUCT.md and Impeccable ban this family. Undermines "plain-spoken coach" positioning.
- **Fix:** Rewrite hero and mission with specific verbs (teach, guide, repair, equip). One "empower" max on the page.
- **Suggested command:** `/impeccable clarify homepage copy`

### [P2] CTA fatigue — four "Book Discovery Call" buttons
- **Why:** Same primary action repeated in hero, quote block, keynote card, and coaching card. Dilutes urgency; users cannot tell which context matters.
- **Fix:** One discovery-call CTA in hero + quote block; keynote/coaching cards get contextual labels ("Book a keynote inquiry", "Schedule coaching consult").
- **Suggested command:** `/impeccable distill homepage CTAs`

## Persona Red Flags

**Jordan (First-Timer):** Lands on video + two blue pills with no explanation of difference between "Book Discovery Call" and "Buy The Book." Scrolls into two course cards both saying "Learn More" with no price comparison cue beyond scanning. "What I Offer" nav item links to `#` — dead end on click.

**Casey (Mobile):** Testimonial dot indicators are 10×10px — far below 44px touch target. Primary actions cluster top-right of hero on mobile stack (video first, then text), pushing CTAs below the fold after a full-width video. Long scroll to find keynote if booking for an event.

**Morgan (Couple at home):** Wants the book or a course; must scroll past blind-spot band, long quote block, two featured courses, tabbed mini-courses, and three product cards before newsletter. No "start here" for personal relationships.

**Dana (Faith-community / org leader):** Keynote and workshop paths buried in card grid alongside book. No package pricing hint, no "faith community" entry point above fold despite it being a primary audience in PRODUCT.md.

## Minor Observations

- "COURSES with IMpact" — inconsistent casing reads like a typo, not voice.
- "More Courses . . ." — ellipsis spacing feels dated.
- "blindspots" in CtaBand should be "blind spots."
- Course card titles on `#2d2d2d` headers appear low-contrast in screenshots (white subtitles read fine; title color may be inheriting wrong).
- Zero entrance motion; page is static. Not wrong for brand, but missed opportunity for video poster → play affordance polish.
- `ProductCard` uses `shadow-md` while `CourseCard` uses `shadow-sm` — elevation vocabulary drift.

## Questions to Consider

- What if the hero asked one question ("Personal growth or team event?") instead of stating a mission?
- Does the quote block need three paragraphs before the results list, or could one tight paragraph + list carry it?
- What would a confident version look like with half the sections and twice the whitespace?
