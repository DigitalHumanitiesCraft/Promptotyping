---
title: Design
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.5
created: 2026-05-09
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code with Claude Opus 4.8
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Design
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/design
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-design
topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]", "[[Typography]]"]
knowledge-sources:
  standards:
    CSS3: https://www.w3.org/Style/CSS/
    WCAG 2.1 AA: https://www.w3.org/WAI/WCAG21/quickref/?levels=aa
  vocabularies:
    Inter Font: https://rsms.me/inter/
related: [INDEX, project, specification, architecture, journal]
---

# Design

Design stance, design system, and interaction patterns for the interactive-paper site. This document is the normative specification for how the site looks and behaves. Its imperative translation for coding agents lives in `CLAUDE.md` at the repo root. Every value below is verified against `assets/css/style.css`; the few points where the stylesheet and this document diverge are flagged inline for reconciliation.

## Design stance

The site is calm. Black on white, one typeface, a single light-grey accent. No colour flood, no decorative lines, no accent boxes, and no motion beyond the side-panel slide and short hover feedback.

Two reasons carry that stance. Reading is the primary function; a scholarly paper is read rather than scrolled past, so anything that competes with the text is a defect. And the method is made visible through structure, through the division into paper, templates, use cases, and practice, so no additional visual device is needed. The earlier phase-provenance lane was removed after the first deploy by operator decision (A2 in [specification.md](specification.md), 2026-06-10) in favour of an undisturbed reading flow.

## Design system

### Colour

The permitted palette is fixed. Six core tokens plus four general grey accents, nothing else.

```
--bg:        #ffffff   background
--text:      #1a1a1a   text
--accent:    #d5d5d5   link underline, hover fill, tooltip border
--border:    #e0e0e0   borders, hairlines
--code-bg:   #f5f5f5   code background, card hover, footer
--grey-1:    #2a2a2a   darkest grey accent (error state)
--grey-2:    #525252   secondary text (dominant grey: TOC, captions, meta)
--grey-3:    #8a8a8a   muted grey (loading, separators)
--grey-4:    #b8b8b8   lightest grey (reserved, currently unused)
```

No teal, no turquoise, no chromatic accent anywhere. Unlike the DHCraft slides, where teal marked dates, the site uses no accent colour at all.

Two reconciliation flags against the current stylesheet:

- The four grey tokens are still named `--phase-preparation`, `--phase-exploration`, `--phase-distillation`, and `--phase-implementation` in `style.css`, a legacy of the removed phase lane. They now carry no phase semantics and act as general grey accents; the token names should be renamed on the next CSS pass.
- The glossary underline uses `--glossar-underline: #888888`, one step off the permitted `#8a8a8a`. Reconcile to `#8a8a8a`.

Subtle overlay shadows exist on floating surfaces and are part of the system: the side panel carries `-2px 0 12px rgba(0,0,0,0.06)`, tooltips carry `0 2px 8px rgba(0,0,0,0.08)`, and the mobile backdrop dims with `rgba(0,0,0,0.3)`. Cards carry no shadow.

### Typography

Inter for text, Consolas for code, no other fonts.

- **Inter** is self-hosted as four static woff2 weights (Regular 400, Medium 500, Semibold 600, Bold 700) with `font-display: swap` and a system-sans fallback stack. No Google Fonts, no external CDN; the site promises no tracking.
- **Consolas** for code, a system monospace with fallback stack, no download.

Sizes (base `font-size: 16px`):

| Element | Size | Weight |
|---|---|---|
| Body | 1rem (16px) | 400 |
| H1 (paper title / hero) | 2.25rem | 700 |
| H2 (section heading) | 1.75rem | 600 |
| H3 | 1.375rem | 600 |
| H4 | 1.125rem | 600 |
| Inline code and code blocks | 0.9375rem (15px) | — |
| Side-panel body | 0.9375rem | — |

Line height is 1.6 for body text, 1.4 for code, and 1.3 for headings.

### Spacing

Vertical spacing follows an 8px base grid with a 4px half-step for fine adjustment. All values are rem multiples exposed as tokens.

| Token | rem | px | Use |
|---|---|---|---|
| `--space-1` | 0.25rem | 4px | micro-spacing, hairlines, hover offsets |
| `--space-2` | 0.5rem | 8px | inline spacing between related elements |
| `--space-4` | 1rem | 16px | paragraph spacing, list indent |
| `--space-6` | 1.5rem | 24px | mobile reading-column padding |
| `--space-8` | 2rem | 32px | desktop reading-column padding, section inset |
| `--space-12` | 3rem | 48px | section outset |
| `--space-16` | 4rem | 64px | hero spacing, large transitions |

### Layout

Desktop uses a two-column grid inside a 1200px container: a sticky table of contents (`--toc-width: 240px`) and a reading column (`minmax(0, 1fr)` with `--read-width: 720px` max, centred). The side panel is not a grid track; it is a `position: fixed` overlay of `--panel-width: 360px` that slides in from the right over the content.

The TOC column shows the current paper section and scrolls sticky, with the active entry marked by a left border and bold weight. Below 768px the grid collapses to a single column with 1.5rem horizontal padding, the TOC becomes a collapsible hamburger drawer, and the side panel becomes a bottom sheet.

## Side panels

The right-hand panel slides in from the right on a trigger.

### Triggers

- A glossary term in the reading flow (dotted underline, `cursor: help`)
- A clickable Vorlagen-table row
- A case-study card "Mehr" link
- A literature reference in the paper

### Behaviour

- Open and close both animate as `transform` over 200ms `ease-out`. The stylesheet uses a single ease-out transition for both directions; an earlier draft claiming `ease-in` on close was wrong.
- ESC closes the panel; a click outside the panel closes it.
- One panel at a time. A new trigger replaces the panel content.
- Opening a panel updates the URL hash (for example `#promptotyping-document-data`); browser back closes the panel.
- Layering: panel `z-index: 25`, backdrop `z-index: 24`.

### Content

- Header with the content title and a close button top right.
- Body with rendered Markdown at the 0.9375rem panel size.
- Optional footer with a copy button, a machine-URL link, and a frontmatter preview.

### Mobile bottom sheet

Below 768px the panel becomes a bottom sheet: full width, `max-height: 80vh`, a top border-radius of 0.5rem, and a `::before` drag handle (2.5rem by 0.25rem, `--border` fill). It slides up via `translateY` and the backdrop dims the content with `rgba(0,0,0,0.3)`.

## Interaction patterns

### Glossary trigger

Glossary-defined terms render with a dotted grey underline (`1px dotted #888888`, pending reconciliation to `#8a8a8a`) and `cursor: help`. Hover fills the background with `#f5f5f5`. A hover tooltip with a short definition appears after a delay handled in `app.js`; a click opens the side panel with the full definition. The tooltip surface fades in over `opacity 150ms`.

### Vorlagen table

The method section of the reading flow renders a table of all mirrored templates (catalogue and function names follow the Vault convention, English since 2026-07-19). Rows carry `.vorlage-row`, are clickable and keyboard-focusable, and open the side panel with the full template spec; the focus-visible state draws a 2px outline.

The Vorlagen hub adds three silent styling blocks:

- `.vorlagen-subnav`: a text sub-navigation with `#525252` links and a middot separator between items.
- `.vorlagen-block`: an additive sub-anchor block with `scroll-margin-top` clear of the sticky header and a top margin of 3rem.
- `.vorlagen-tb-links`: a wrapping link row at 0.875rem.

### Case-study cards

The use-case gallery renders case-study cards in a responsive grid (`auto-fill, minmax(280px, 1fr)`), grouped by the use-case typology of A7; the internal genre vocabulary stays out of the public UI. Each card has a `#e0e0e0` border, no shadow, 1rem padding, and a `#f5f5f5` hover fill. A "Mehr" button appears only for case studies that carry a depth page. A filter bar above the grid offers selectable chips and a secondary select control.

## Motion and elevation

The only movement animation is the side-panel slide, 200ms `ease-out`. Interactive elements additionally carry short 150ms `ease-out` colour and background transitions as hover feedback (TOC links, cards, buttons, chips, the video facade, the tooltip fade, the TOC-toggle icon rotation). The `CLAUDE.md` rule "only side-panel slide, no others" governs decorative and scroll-linked motion, which stays banned; the 150ms hover transitions are permitted micro-affordances. The wording in `CLAUDE.md` should be tightened to name this micro-exception explicitly.

## What the design is not

- No custom cursor
- No parallax, no scroll-linked animation
- No Lottie or WebGL, no 3D effects
- No typography animation (animated variable fonts)
- No dark mode (light mode only in this phase)
- No sound effects
