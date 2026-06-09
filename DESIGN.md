---
name: Mark Gordon
description: Empowering people in developing healthy relationships.
colors:
  brand: "#0047ab"
  brand-dark: "#003580"
  text: "#4a4a4a"
  text-heading: "#262a2b"
  text-muted: "#617175"
  text-subtle: "#69727d"
  text-inverse: "#ffffff"
  quote: "#5dade2"
  surface: "#ffffff"
  surface-muted: "#f0f3f6"
  surface-alt: "#f9f9f9"
  footer: "#222329"
  footer-text: "#bfbfbf"
typography:
  display:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.29375rem"
  headline:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Open Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.8
  nav:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    letterSpacing: "normal"
rounded:
  button: "1.25rem"
  sm: "0.125rem"
spacing:
  section: "4rem"
  content: "75rem"
  narrow: "48rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.button}"
    padding: "15px 45px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.brand-dark}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.button}"
    padding: "15px 45px"
    typography: "{typography.label}"
  button-text:
    textColor: "{colors.text-inverse}"
    typography: "{typography.label}"
---

# Design System: Mark Gordon

## 1. Overview

**Creative North Star: "The Open Door"**

Mark Gordon's site should feel like walking into a coach's office where the door is already open: welcoming, credible, and direct. Visitors (couples at home and org leaders booking events) should immediately sense expert warmth, not a sales funnel. The visual system preserves the established cobalt-blue identity while elevating spacing, hierarchy, and polish beyond the WordPress-era baseline.

This is a **Committed** color strategy: Cobalt Conviction blue carries meaningful surface area (utility bar, CTA bands, section headings, buttons) while white and cool gray bands provide breathing room. Typography does the authority work: Montserrat in heavy uppercase for section anchors, Open Sans at generous line-height for readable prose.

The system explicitly rejects generic SaaS templates, cold corporate consulting aesthetics, and trendy AI-slop scaffolding (tracked eyebrows on every section, numbered section markers, identical icon-card grids). It should feel like Mark Gordon, not a category template.

**Key Characteristics:**

- Cobalt Conviction blue as the structural accent, not decoration
- Montserrat display + Open Sans body pairing (elevated, not replaced)
- Tonal section rhythm with subtle lift on interactive surfaces
- Pill buttons and uppercase CTAs with plain-spoken copy underneath
- Content-forward layouts: video, testimonials, course previews over abstract claims

## 2. Colors

A committed coaching palette: authoritative blue, cool neutrals, and a light sky accent for quotes.

### Primary

- **Cobalt Conviction** (#0047AB): Top utility bar, primary buttons, CTA bands, section h2 headings, bullet accents, hover states on nav. The brand's signature; use confidently but never as wallpaper on entire pages.
- **Cobalt Deep** (#003580): Button hover, pressed states. One step darker on the same hue.

### Neutral

- **Ink Body** (#4A4A4A): Long-form prose, descriptions, list copy. Never lighten for "elegance"; readability wins.
- **Ink Heading** (#262A2B): Nav links, card prices, dark headings on light surfaces.
- **Slate Muted** (#617175): Secondary descriptions, supporting copy below CTAs.
- **Slate Subtle** (#69727D): Meta text, captions, de-emphasized labels.
- **Clean Surface** (#FFFFFF): Default page background, nav bar, card bodies.
- **Cool Band** (#F0F3F6): Alternating section backgrounds, borders, dropdown hovers.
- **Soft Panel** (#F9F9F9): Subtle panels where a whisper of separation is needed.
- **Footer Charcoal** (#222329): Footer background; anchors the page with weight.
- **Footer Mist** (#BFBFBF): Footer body copy and link default state.

### Tertiary

- **Sky Quote** (#5DADE2): Pull quotes, testimonial emphasis. A lighter accent; use sparingly for quoted voice.

### Named Rules

**The Committed Blue Rule.** Cobalt Conviction may occupy 30–60% of visible surface on marketing pages (utility bar, one CTA band, heading accents, buttons). It is never diluted into gradient text or decorative stripes.

**The Cool Neutral Rule.** Background neutrals stay cool-tinted (blue-gray family), not warm cream or sand. Warmth comes from copy, photography, and Mark's voice, not from a beige body background.

## 3. Typography

**Display Font:** Montserrat (ui-sans-serif, system-ui, sans-serif fallback)
**Body Font:** Open Sans (ui-sans-serif, system-ui, sans-serif fallback)

**Character:** Montserrat delivers approachable authority through weight contrast (300 logo, 900 section headings, 500 buttons). Open Sans keeps long relationship guidance readable at 14px with generous 1.8 line-height.

### Hierarchy

- **Display** (900, 1.75rem / 28px, line-height 1.2, letter-spacing 0.29375rem, uppercase): Section h2 anchors ("COURSES with IMpact"). Blue on light surfaces, white on dark/brand bands.
- **Headline** (600, 1.5rem / 24px, line-height 1.3): Card titles on dark headers, inner-page subheads.
- **Title** (600, 1.125rem / 18px, uppercase tracking-wide): Supporting headings within sections ("The results are…").
- **Body** (400, 0.875rem / 14px, line-height 1.8): All prose, lists, descriptions. Cap line length at 65–75ch in long-form content.
- **Label / Nav** (500, 0.9375rem nav / 1rem button, uppercase on buttons): Navigation links, CTA buttons, footer quick links.

### Named Rules

**The Weight-Contrast Rule.** Hierarchy comes from scale + weight jumps (≥1.25 ratio between steps), not from adding more font families. Two families only: Montserrat and Open Sans.

**The Uppercase Anchor Rule.** Uppercase Montserrat is reserved for section h2s, buttons, and short labels (≤4 words). Body copy and paragraphs are always sentence case in Open Sans.

## 4. Elevation

This system uses **tonal layering with subtle lift**. Depth is primarily conveyed through alternating surface bands (white → Cool Band → brand blue CTA → white) rather than heavy shadows. Interactive and contained elements get a light touch.

### Shadow Vocabulary

- **Resting lift** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): Sticky header, course cards at rest. Barely there; prevents flatness without SaaS-card cliché.
- **Dropdown float** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): Nav dropdown menus on hover/focus.

### Named Rules

**The Subtle Lift Rule.** Surfaces are flat at rest. `shadow-sm` appears only on contained elements (cards, sticky header) and `shadow-lg` only on floating overlays (dropdowns). Never stack shadows on nested containers.

**The Band Rhythm Rule.** Section depth alternates through background color (Clean Surface / Cool Band / Cobalt Conviction), not through nested cards. Cards are for discrete offerings (courses), not generic content wrapping.

## 5. Components

Component feel: **approachable authority** — confident shapes, generous padding, no ornamental chrome.

### Buttons

- **Shape:** Generously rounded pills (1.25rem / 20px radius)
- **Primary:** Cobalt Conviction background, white uppercase Montserrat 500, padding 15px 45px. Hover shifts to Cobalt Deep via color transition.
- **Text / Link CTA:** White uppercase text on brand bands, underline on hover, optional arrow suffix (→). No fill background.
- **Focus:** Rely on browser default focus-visible or underline shift; no custom glow rings unless added during a harden pass.

### Cards / Containers

- **Course Card:** Dark header band (#2d2d2d) with white Montserrat headline; white body with centered price, left-aligned bullet list with cobalt circle-check icons; primary button at bottom. Optional diagonal "NEW" ribbon in brand blue.
- **Corner Style:** Square corners on cards (no radius on outer article); internal elements use circles for bullet markers.
- **Background:** Clean Surface body, Cool Band border (`border-surface-muted`).
- **Shadow Strategy:** Resting lift only.
- **Internal Padding:** px-6 py-5 (header), px-6 py-8 (body).

### Navigation

- **Top Bar:** Full-width Cobalt Conviction, 44px height. Email left (hidden mobile), social icons + Login right. White text at text-xs.
- **Main Nav:** White sticky header with bottom border, logo left, Montserrat nav links right. Hover/active: Cobalt Conviction text. Dropdown: white panel, Cool Band border, shadow-lg on hover.
- **Mobile:** Hamburger flyout below lg breakpoint (1023px). Login remains visible in top bar.
- **Footer:** Footer Charcoal background, inverted logo, uppercase quick links, social circles with brand hover.

### Section Shell

- **Section wrapper:** Vertical padding 4rem (`py-section`), max-width 75rem centered, responsive horizontal padding (px-4 → px-8).
- **Variants:** default (white), muted (Cool Band), brand (Cobalt Conviction + inverse text).

### CTA Band

- Full-width Cobalt Conviction strip between content sections. Two-column on desktop: value proposition left, text-link CTA right. Centers on mobile.

### Quote Block

- Centered italic headline quote in Ink Heading, 2-column grid below with prose + cobalt bullet list. Primary button for discovery call.

### Inputs / Fields

- HubSpot-embedded forms for newsletter (external styling). When building native inputs: match body typography, Cool Band borders, Cobalt Conviction focus border. No native inputs styled yet in the token system.

## 6. Do's and Don'ts

### Do:

- **Do** use Cobalt Conviction (#0047AB) for buttons, top bar, CTA bands, and section h2 accents.
- **Do** pair Montserrat display headings with Open Sans body copy at 1.8 line-height.
- **Do** alternate Clean Surface and Cool Band (#F0F3F6) for section rhythm.
- **Do** use pill buttons (1.25rem radius) with verb + object labels ("Book Discovery Call", "Learn More").
- **Do** lead with real content (video embeds, testimonials, course details) over abstract marketing claims.
- **Do** apply `shadow-sm` only to cards and the sticky header; `shadow-lg` only to dropdown overlays.

### Don't:

- **Don't** use generic SaaS / startup templates: cream backgrounds, gradient text, hero-metric blocks, or buzzword copy.
- **Don't** adopt cold corporate consulting aesthetics: stock-photo grids, impersonal tone, identical feature-card rows.
- **Don't** use trendy minimal / AI-slop patterns: tracked uppercase eyebrows on every section, numbered section markers (01 / 02 / 03) as default scaffolding, or identical icon + heading + text card grids.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, callouts, or alerts.
- **Don't** use gradient text (`background-clip: text`) for headings or CTAs.
- **Don't** nest cards inside cards.
- **Don't** lighten body text (#4A4A4A) toward gray for "elegance"; bump toward Ink Heading if contrast is borderline.
