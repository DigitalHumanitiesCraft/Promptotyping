---
title: Design
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.8
created: 2026-05-09
updated: 2026-07-29
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 4.8)
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
    WCAG 2.1 SC 1.4.1 Use of Color: https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
  methods:
    Bertin, Semiology of Graphics (visual variables): https://www.axismaps.com/guide/visual-variables
  vocabularies:
    Inter Font: https://rsms.me/inter/
related: [INDEX, project, specification, architecture, journal]
---

# Design

Design stance, design system, and interaction patterns for the specification documentation. This document is the normative specification for how the site looks and behaves, and it is the only one; there is no separate UI document, because the template catalogue carries one Design template and because the interaction rules and the visual rules here explain each other. Its imperative translation for coding agents lives in `CLAUDE.md` at the repo root. Every value below is verified against `assets/css/style.css`.

## Design stance

The site is calm. Black on white, one typeface, a single light-grey accent. No colour flood, no decorative lines, no accent boxes, and no motion beyond the side-panel slide and short hover feedback. Since 2026-07-26 two bounded colour systems sit on top of that ground without loosening it, described under Colour that carries meaning.

Two reasons carry that stance. Reading is the primary function; a scholarly paper is read rather than scrolled past, so anything that competes with the text is a defect. And the method is made visible through structure, through the division of the tree into specification, reference, evidence, tools, and paper, so no additional visual device is needed. The earlier phase-provenance lane was removed after the first deploy by operator decision (A2 in [specification.md](specification.md), 2026-06-10) in favour of an undisturbed reading flow.

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

Both reconciliation flags this document used to carry are settled. The four grey tokens are named `--grey-1` to `--grey-4`, and the glossary underline is `#8a8a8a`.

### Colour that carries meaning

Operator decision of 2026-07-26: the site stays unchromatic and serious, with one deliberate colour system on top. Two rules bound it.

Colour encodes exactly one thing, the epistemic function of an artefact, that is the five interface categories of paper section 4.2. Bertin classes hue as selective and associative and as the only colour variable suited to qualitative information, which makes it the correct encoding for a nominal scale of five values, and it makes it the wrong encoding for the five parts of the specification, which are a rank order. The five hues are muted and derived from the watercolour of the Promptotyping logo, so a category name stays readable beside its mark.

```
--fn-exploration:  #216a4e
--fn-capture:      #7a8b1f
--fn-edition:      #d0a022
--fn-verification: #c9661c
--fn-audit:        #9b3a6b
```

They appear in two places, the function list on the Artefakt page and the left edge of a use-case card. The category always stands there as a word as well, because WCAG 2.1 success criterion 1.4.1 on level A forbids colour as the only visual means of conveying information.

The signature is the counterpart. A prismatic gradient runs as a two-pixel band along the foot of the header, once per page. It encodes nothing, which is precisely why it may be the loud one; it marks identity rather than a category and therefore falls under neither rule above.

```
--signature: linear-gradient(90deg, #00b37e, #b6ff1a 22%, #ffd400 45%,
             #ff6a00 70%, #ff2ea6)
```

Beyond these two, no element carries a hue.

### Shape that carries meaning

The glossary classifies every term by the kind of thing it names, and that classification is drawn as a shape (A36, 2026-07-29). Seven values each own one geometric mark, a circle for a form of work, a square for a document function, a triangle for a role, a diamond for an artefact, a hexagon for a checking form, a cross for a failure mode and limit, and three stacked rules for an infrastructure term. They are inline SVG at twelve pixels with a 1.25-pixel stroke in `currentColor`, no fill, and no variation beyond the one form per value.

Shape is the second-best variable here, and it is used because the better one is spent. Bertin classes hue as selective and associative, which is why it encodes the interface typology, and he classes shape as associative without being selective, so a reader recognises a mark but cannot pick every term of one kind out of a list at a glance. The term index answers that with a filter field over its category column, where selection is a matter of the filter. In the entry and in the tooltip the mark stands beside the category word as an aid to recognition, and the word is what states the category, which is the same WCAG 2.1 1.4.1 rule the hue follows.

### Dark theme

The stylesheet resolves every colour through a token, so the theme is a token swap. Light is the first view (A29, operator decision 2026-07-26). The inline prelude in the head always writes a `data-theme` attribute on the root element, the stored choice where one exists and `light` otherwise, before first paint, so a reader who chose dark never sees a white flash. The stylesheet still carries the `prefers-color-scheme` block, and the always-set attribute overrides it, so the system preference no longer decides what a first-time visitor sees. The choice is kept in `localStorage` under `promptotyping-theme`.

```
--bg #131313   --text #e9e9e9   --accent #3d3d3d
--border #2e2e2e   --code-bg #1c1c1c
--grey-1 #d4d4d4   --grey-2 #a6a6a6   --grey-3 #7d7d7d   --grey-4 #5a5a5a
```

The five function hues lighten in the dark theme so they keep their contrast against `#131313`. The watercolour footer mark is dimmed to 85 per cent rather than shipped as a second file.

Subtle overlay shadows exist on floating surfaces and are part of the system: the side panel carries `-2px 0 12px rgba(0,0,0,0.06)`, tooltips carry `0 2px 8px rgba(0,0,0,0.08)`, and the mobile backdrop dims with `rgba(0,0,0,0.3)`. Cards carry no shadow.

### Typography

Inter for text, Consolas for code, no other fonts.

- **Inter** is self-hosted as four static woff2 weights (Regular 400, Medium 500, Semibold 600, Bold 700) with `font-display: swap` and a system-sans fallback stack. No Google Fonts, no external CDN; the site promises no tracking.
- **Consolas** for code, a system monospace with fallback stack, no download.

Sizes (base `font-size: 16px`):

| Element | Size | Weight |
|---|---|---|
| Body | 1rem (16px) | 400 |
| H1 (page title) | 2.25rem | 700 |
| H2 (section heading) | 1.75rem | 600 |
| H3 | 1.375rem | 600 |
| H4 | 1.125rem | 600 |
| Inline code and code blocks | 0.9375rem (15px) | — |
| Side-panel body | 0.9375rem | — |

Line height is 1.6 for body text, 1.4 for code, and 1.3 for headings.

Density is two-tiered (operator decision 2026-07-26). Specification prose keeps the calm setting because it is read. The directories are scanned rather than read, so the four reference pages Glossar, Vault, Vorlagen and Use Cases carry `.is-reference` and set 0.9375rem at line height 1.45, with correspondingly smaller headings and tables.

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
| `--space-16` | 4rem | 64px | large transitions, page foot |

### Layout

The site is laid out as specification documentation, in the manner of a library reference or a published ontology. One page is visible at a time, the sidebar tree is the table of contents, and the URL hash names the page. The former single scroll column, which carried all sections and the whole paper below one another, was replaced on 2026-07-25 by operator decision.

Desktop uses a two-track grid inside a 1240px container: the page tree (`--nav-width: 250px`) and the page (`minmax(0, 1fr)` with `--read-width: 820px` max, centred). The tree is sticky below the fixed header (`--header-height: 3.25rem`) and scrolls independently. The side panel stays outside the grid as a `position: fixed` overlay of `--panel-width: 360px`.

The tree groups the pages under Spezifikation, Referenz, Belege, Werkzeuge und Praxis, and Paper, one flat run per group with a gap between the runs and no label over any of them; the active page is marked by a left border and bold weight. Two entries carry a permanent subtree, the specification with its five numbered parts and the paper with its sections, and the section the reader is in is marked in the same greys at 0.8125rem with a left border. The tree is never collapsible, and since 2026-07-29 nothing else in the interface is either. Below 860px it stacks above the page and stays visible, showing the subtree of the page being read alone, tables scroll inside their own box, and the side panel becomes a bottom sheet. An on-this-page rail was built and removed the same day by operator decision. What replaced it for the one page that needs it is a static table of contents at the head of the paper page, two columns on the desktop and one below 860px, set in the greys of the system and carrying no colour of its own. It stands still while the reader scrolls, which is the difference from the rail.

The header carries the wordmark and the kind marker, with no mark beside it, and the signature band along its foot. Both the DHCraft watercolour and the Promptotyping logo were tried in that slot and dropped, because a chromatic detail image at 22 pixels reads as a smudge and would put a hue on the page that means nothing. The carrier mark stays in the footer, which is a four-column grid carrying carrier and licence, addresses, the state of the specification, and the machine-access note.

The start page is the specification front: title, one-sentence scope, a keyed status table (Fassung, Stand, kanonische Adresse, Maschinenadresse, Evidenz, Lizenz), and a generated index of the specification. Every other page carries a one-line status under its title at 0.8125rem, keys in `#8a8a8a` and values in `#525252`, separated from the body by a hairline; on the paper page the table of contents follows immediately below it. The index is derived from the same page registry as the sidebar, so the two cannot diverge.

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

Glossary-defined terms render with a dotted grey underline (`1px dotted var(--glossar-underline)`) and `cursor: help`. Hover fills the background with `#f5f5f5`. A tooltip appears after a 400ms delay, handled in `pages-glossar.js`, and carries the term, the short definition and a link to the full entry; a click toggles the same tooltip, which is the only way in on a touch device. The tooltip surface fades in over `opacity 150ms`. The side panel that used to open on click is out of this flow since 2026-07-26 (A29 sits beside this in [specification.md](specification.md), the decision itself is A6).

### Vorlagen table

The method section of the reading flow renders a table of all mirrored templates (catalogue and function names follow the Vault convention, English since 2026-07-19). Rows carry `.vorlage-row`, are clickable and keyboard-focusable, and open the side panel with the full template spec; the focus-visible state draws a 2px outline.

The Vorlagen hub adds three silent styling blocks:

- `.vorlagen-subnav`: a text sub-navigation with `#525252` links and a middot separator between items.
- `.vorlagen-block`: an additive sub-anchor block with `scroll-margin-top` clear of the sticky header and a top margin of 3rem.
- `.vorlagen-tb-links`: a wrapping link row at 0.875rem.

### Case-study cards

The use-case gallery renders case-study cards in a responsive grid (`auto-fill, minmax(280px, 1fr)`), grouped by the use-case typology of A7; the internal genre vocabulary stays out of the public UI. Each card has a `#e0e0e0` border, no shadow, 1rem padding, and a `#f5f5f5` hover fill. A "Mehr" button appears only for case studies that carry a depth page. A filter bar above the grid offers selectable chips and a secondary select control.

### Labels

Labels are English, in the British spelling the paper uses. A label names the thing and stays as short as it can. The five interface categories keep their English identifiers, and the category still stands as a word beside its hue (WCAG 2.1, 1.4.1).

### Term index

The term index heads the glossary page as a table of term, category and target pages. The filter field above it is a plain input in a `--border` frame with no icon and no placeholder decoration, and it searches all three columns. Target pages are links in the dominant grey, the term links into its own glossary entry, and a term that occurs nowhere outside the glossary says so in words rather than by a symbol. The index carries no colour; the one thing it distinguishes, the kind of thing a term names, is drawn as a shape beside its word.

## Focus and keyboard

A page change carries the focus into the content, so the reader continues in the page rather than back at the top of the tree. The receiving container is reachable by Tab in no other way, and it therefore shows no focus ring when it takes the focus programmatically. Every element that a keyboard reaches on its own keeps its visible ring, and that ring is not weakened anywhere.

## Motion and elevation

The only movement animation is the side-panel slide, 200ms `ease-out`. Interactive elements additionally carry short 150ms `ease-out` colour and background transitions as hover feedback (TOC links, tree entries, cards, buttons, chips, the video facade, the tooltip fade). The `CLAUDE.md` rule "only side-panel slide, no others" governs decorative and scroll-linked motion, which stays banned; the 150ms hover transitions are permitted micro-affordances. The scrollspy of A33 moves a class and nothing else, so it adds no motion. An icon rotation on a contents toggle stood in this list until 2026-07-29 and named a control the site no longer has.

## Icons

Icons appear only where a control carries no text, currently the theme toggle, the panel close, the copy button, the mark on an outbound link and the repository link in the header. The category marks of the glossary fall outside this rule, since they encode a value rather than name a control; they are specified under Shape that carries meaning. They are inline SVG at 16 pixels with a 1.5-pixel stroke in `currentColor` and no fills, carried in the markup rather than in a font or a sprite file. Navigation entries, headings and groups carry no icons, because there the label is the thing.

A destination mark is the one case that sits beside a label. The GitHub and YouTube glyphs in the footer identify where a link goes, the way the carrier watercolour in the same row does, and they do not stand in for a missing label the way an icon button does. They are set at 14 pixels in `currentColor` and never in the brand colour, which would put two hues on the page that say nothing about epistemic function.

## What the design is not

- No custom cursor
- No parallax, no scroll-linked animation
- No Lottie or WebGL, no 3D effects
- No typography animation (animated variable fonts)
- No sound effects
