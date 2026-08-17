---
target: homepage
total_score: 34
p0_count: 0
p1_count: 1
timestamp: 2026-08-15T22-50-00Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Carousel and nav states clear; HubSpot newsletter form loads async without skeleton |
| 2 | Match System / Real World | 4 | Speaking-first IA matches org-leader buyer; plain-spoken copy |
| 3 | User Control and Freedom | 4 | Mobile menu escape hatches, hash anchor scroll with sticky offset |
| 4 | Consistency and Standards | 4 | One primary CTA label; differentiated offering layouts; band rhythm holds |
| 5 | Error Prevention | 3 | n/a for marketing; blind-spot CTA is clear |
| 6 | Recognition Rather Than Recall | 3 | Contextual secondary CTAs per offering; Resources grouped under dropdown |
| 7 | Flexibility and Efficiency | 3 | Long-scroll by design; testimonials anchor in nav helps |
| 8 | Aesthetic and Minimalist Design | 4 | 9 purposeful bands; no course grids; text hero dominates |
| 9 | Error Recovery | 3 | n/a |
| 10 | Help and Documentation | 3 | Credibility line and Why Mark answer "who" without full bio |
| **Total** | | **34/40** | **Good — minor polish opportunities remain** |

Cognitive load: **2 checklist failures** (minimal choices mostly pass; long scroll is the main load). Acceptable for a marketing homepage with clear primary CTA repetition.

## Anti-Patterns Verdict

**LLM assessment:** Does not read as AI slop or WordPress-era template. Committed cobalt, differentiated offering panels, and text-first hero are product-specific. Speaking-first repositioning is evident in hierarchy.

**Deterministic scan:** Clean. `detect.mjs` returned no findings across homepage source files.

## Overall Impression

The homepage now delivers on "The Center of the Room" north star. A first-time visitor can identify Mark as a leadership speaker, see three topic angles, understand keynotes/workshops/coaching differentiation, and reach **Book Mark to Speak** within one viewport on mobile. Remaining gaps are polish-level: async form loading, mid-page scroll length, and newsletter band visual weight.

## What's Working

1. **Text hero with typographic authority** — Sentence-case h1 at display scale; primary + secondary CTAs visible above the fold on mobile.
2. **Differentiated offerings** — Cobalt keynotes band, workshops list split, coaching portrait. No identical ProductCard row.
3. **CTA discipline** — Book Mark to Speak at hero, challenge, and close; contextual secondaries elsewhere.
4. **Speaking-first nav** — Courses under Resources; testimonials anchor works with scroll offset.

## Priority Issues

### [P1] Newsletter form loading state
- **Why:** HubSpot embed appears after delay with opacity transition; empty min-height box may flash.
- **Fix:** Add lightweight skeleton or "Loading signup form…" text until `loaded` is true.
- **Suggested command:** `/impeccable polish newsletter form`

### [P2] Mid-page scroll length for event planners in a hurry
- **Why:** Nine bands is within brief but still a long scroll to final CTA from topics section.
- **Fix:** Optional sticky mobile "Book Mark to Speak" bar after hero scroll — only if analytics show drop-off.
- **Suggested command:** `/impeccable shape homepage scroll shortcuts`

### [P2] Section h2 style inconsistency
- **Why:** Some sections use sentence-case h2 (challenge, topics, Why Mark); others use uppercase display (What Mark Does via SectionHeading, testimonials).
- **Fix:** Accept mixed pattern (display anchors vs narrative headings) or standardize per DESIGN.md rules.
- **Suggested command:** `/impeccable typeset homepage sections`

## 30-Second Success Test

| Question | Homepage answer |
|----------|-----------------|
| **Who is this?** | Mark Gordon — keynote speaker, leadership facilitator, executive coach, author (35+ years). |
| **What does he do?** | Keynotes, workshops, and executive coaching on leadership, culture, trust, and relationships. |
| **For whom?** | Conferences, organizations, leadership teams, nonprofits, faith communities. |
| **Why care?** | Practical tools from real experience — not theory; addresses what's beneath the surface. |
| **What next?** | **Book Mark to Speak** (HubSpot discovery) — repeated at hero, challenge, and final cobalt band. |

**Verdict: PASS** — A stranger scanning the first viewport and skimming section headings can answer all five questions.

## Persona Red Flags

**Jordan (First-Timer):** Clear path to book speaking; may not immediately see workshop pricing (appropriate — discovery call first).

**Casey (Mobile):** Hero CTAs full-width; carousel dots meet 44px; Resources submenu expandable with parent link + chevron.

**Morgan (Couple at home):** Relationship Matters appears in Go Deeper, not hero — intentional per brief; courses under Resources only.

**Dana (Org leader):** Speaking topics and Bring Mark to Your Team visible early; faith community entry under Resources.

## Minor Observations

- "thrive" appears once in hero intro — borderline buzzword; acceptable in client-approved copy.
- LeadershipChallenge hides second intro paragraph on mobile — good brevity tradeoff.
- Speaking topics use 2-column grid at `sm` — avoids 3-up on phones while filling tablet width.

## Questions to Consider

- Does the newsletter band need equal visual weight to the final Book CTA, or should it be quieter?
- Would one pull-quote in the keynotes band strengthen social proof without adding a section?
- After launch, do analytics show users exiting before testimonials?
