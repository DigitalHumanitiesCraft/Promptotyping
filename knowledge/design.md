---
title: Design
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: "1.0"
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 4.8, Claude Opus 5.5)
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
    DHCraft web tokens: https://github.com/DigitalHumanitiesCraft/brand-assets/tree/main/web
related: [INDEX, project, specification, architecture, journal]
---

# Design

Design stance, design system, and interaction patterns for the specification documentation. This document is the normative specification for how the site looks and behaves, and it is the only one; there is no separate UI document, because the template catalogue carries one Design template and because the interaction rules and the visual rules here explain each other. Its imperative translation for coding agents lives in `CLAUDE.md` at the repo root. Every value below is verified against `assets/css/style.css`.

## Design stance

The site is calm. Since 2026-11-10 it stands on the shared DHCraft design (A49), ink on the brand paper, Sora for headings and Instrument Sans for text, with the brand accent reserved for the primary action, focus and links. No colour flood, no decorative lines, no accent boxes, and no motion beyond the side-panel slide and short hover feedback. Two bounded colour systems of the project sit on top of that ground, described under Colour that carries meaning.

Two reasons carry that stance. Reading is the primary function; a scholarly paper is read rather than scrolled past, so anything that competes with the text is a defect. And the practice is made visible through structure, through the division of the tree into specification, reference, evidence, tools, and paper, so no additional visual device is needed. The earlier phase-provenance lane was removed after the first deploy by operator decision (A2 in [specification.md](specification.md), 2026-06-10) in favour of an undisturbed reading flow.

## Design system

### Colour

The values come from the shared token file `assets/dhcraft/dhcraft-tokens.css`, an unchanged copy of the brand-assets repository's folder `web/`, whose design document there (`web/design.md`) states the roles, their light and dark values and their measured contrast. The portal keeps its own role names and resolves them onto the shared roles in the token block of `assets/css/style.css`, so a later change of the shared values reaches the portal without an edit here.

```
--bg        var(--dh-ground)       background, paper #fdfcf8 or ink-deep #161d38
--text      var(--dh-ink)          text
--link      var(--dh-link)         links
--accent    var(--dh-line-strong)  link underline, control boundaries
--border    var(--dh-line)         hairlines
--code-bg   var(--dh-ground-alt)   code background, bands, footer
--surface   var(--dh-surface)      raised boxes such as the diagram nodes
--grey-1    var(--dh-ink)          strongest secondary ink
--grey-2    var(--dh-ink-soft)     secondary text (tree, captions, meta)
--grey-3    var(--dh-line-strong)  muted marks, lines of the diagram
--brand-accent, --on-brand-accent  primary action and its text
```

The glossary underline token `--glossar-underline` and the tooltip shadow `--shadow-tooltip` left the stylesheet on 2026-11-14 with the glossary (A6).

### Colour that carries meaning

Operator decision of 2026-07-26: the site stays unchromatic and serious, with one deliberate colour system on top. Two rules bound it.

Colour encodes exactly one thing, the epistemic function of an artefact, that is the five interface categories of the site's own typology on the Artefakt page. Bertin classes hue as selective and associative and as the only colour variable suited to qualitative information, which makes it the correct encoding for a nominal scale of five values, and it makes it the wrong encoding for the five parts of the specification, which are a rank order. The five hues are muted and derived from the watercolour of the Promptotyping logo, so a category name stays readable beside its mark.

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

### Shape that carries meaning (retired)

The glossary drew the category of each term as an uncoloured geometric mark beside the category word (A36). The marks left with the glossary on 2026-11-14, and no element of the site encodes a value by shape.

### Dark theme

The stylesheet resolves every colour through a token. The shared roles carry their light and dark values in `light-dark()`, and the attribute `data-theme` sets `color-scheme` on the root, so the theme follows from the attribute without a second copy of the roles. Light is the first view (A29, operator decision 2026-07-26). The inline prelude in the head always writes a `data-theme` attribute on the root element, the stored choice where one exists and `light` otherwise, before first paint, so a reader who chose dark never sees a white flash. The stylesheet still carries the `prefers-color-scheme` block, and the always-set attribute overrides it, so the system preference no longer decides what a first-time visitor sees. The choice is kept in `localStorage` under `promptotyping-theme`. The toggle exposes the active state through `aria-pressed` and names the next action in its accessible label and title.

The five function hues lighten in the dark theme so they keep their contrast against the dark ground; measured on 2026-11-10 against `#161d38` they reach 5.5:1 to 9.5:1. In light, against `#fdfcf8`, four hues reach 3.7:1 to 6.4:1 and the edition hue `#d0a022` only 2.3:1, below the 3:1 for graphical objects, as it was against white before; the category word beside it carries the meaning, and the hue itself is an open point. The watercolour mark in the header is a transparent raster and stands on both grounds unchanged.

Floating surfaces carry a subtle overlay, and it runs through tokens like every other colour, `--shadow-panel` on the side panel and `--backdrop` behind the open panel. The geometry `-2px 0 12px` holds in both themes. The shadow colour flips, because black at six per cent over a dark ground shows nothing; the light theme casts black at six per cent, the dark theme casts white at the same value. The backdrop deepens from thirty to sixty per cent black, where the dimming shows on the light text it covers. Cards carry no shadow.

### Typography

Sora for headings and the site name, Instrument Sans for text, a system monospace for code, from the shared tokens (`--dh-font-display`, `--dh-font-text`, `--dh-font-mono`).

- Sora 600 and 700 and Instrument Sans 400 and 600 are served as WOFF2 from `assets/dhcraft/fonts/` with their SIL Open Font License texts and `font-display: swap`. No Google Fonts, no external CDN; the site promises no tracking. Inter was retired on 2026-11-10 and its files deleted.
- Code uses `ui-monospace`, Cascadia Mono or Consolas, whichever the system has, without a download.

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

Density is two-tiered (operator decision 2026-07-26). Specification prose keeps the calm setting because it is read. The directories are scanned rather than read, so the reference pages Vorlagen and Use Cases (until 2026-11-14 also Glossar and Vault) carry `.is-reference` and set 0.9375rem at line height 1.45, with correspondingly smaller headings and tables.

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

The tree groups the pages under Specification, Reference, Evidence, and Tools and practice, one flat run per group with a gap between the runs and no label over any of them. The active page is marked by a left border and bold weight. The specification carries the one permanent subtree, its five numbered parts, and the part the reader is in is marked in the same greys at 0.8125rem with a left border. The Paper group and the subtree of the paper's sections left with the paper view on 2026-10-28. The tree is never collapsible, and since 2026-07-29 nothing else in the interface is either. Below 860px it stacks above the page and stays visible, showing the subtree of the page being read alone, tables scroll inside their own box, and the side panel becomes a bottom sheet. An on-this-page rail was built and removed the same day by operator decision. The static table of contents that replaced it at the head of the paper page was retired with that page on 2026-10-28.

The header carries the watercolour mark at 1.75rem beside the wordmark in Sora, the kind marker, and the signature band along its foot (A49). At 22 pixels the mark had read as a smudge on 2026-07-26; the shared design sets it larger, and the coordination decided its place on 2026-11-10. The favicon stays the earlier watercolour file. The footer is the shared `dh-foot` block on `--code-bg`, a row of statements that wraps, with publisher, licence with the logo excluded, source and changes, version and date, the machine address, and implementation. Version and date stand statically for a reader without JavaScript and are refreshed from the frontmatter of `_content/overview.md`.

The start page is the level from which the practice is reused (A48), described under Start page below. The permanent navigation subtree is the only five-part index. Informative pages carry their note and status metadata under the title at 0.8125rem. The Specification page carries neither tagline nor standing line; each part retains compact version, date, and source metadata. Spacing and heading weight establish these transitions without horizontal rules.

## Side panels

The right-hand panel slides in from the right on a trigger.

### Triggers

- A template button in the first cell of each clickable Vorlagen-table row
- The "More" button of a case-study card

### Behaviour

- Open and close both animate as `transform` over 200ms `ease-out`. The stylesheet uses a single ease-out transition for both directions; an earlier draft claiming `ease-in` on close was wrong.
- ESC closes the panel; a click outside the panel closes it.
- One panel at a time. A new trigger replaces the panel content.
- Tab and Shift+Tab remain within the open dialog; closing restores focus to the native control that opened it.
- A Markdown response belongs to the panel request that initiated it. Closing the panel or opening another invalidates a pending response.
- Opening a panel updates the URL hash (for example `#promptotyping-document-data`); browser back closes the panel.
- Layering: panel `z-index: 25`, backdrop `z-index: 24`.

### Content

- Header with the content title and a close button top right.
- Body with rendered Markdown at the 0.9375rem panel size.
- Optional footer with a copy button, a machine-URL link, and a frontmatter preview.

### Mobile bottom sheet

Below 860px the panel becomes a bottom sheet: full width, `max-height: 80vh`, a top border-radius of 0.5rem, and a `::before` drag handle (2.5rem by 0.25rem, `--border` fill). It slides up via `translateY` and the backdrop dims the content with `--backdrop`.

## Interaction patterns

### Glossary trigger and term index (retired)

The dotted glossary trigger with its tooltip (A6) and the term index at the head of the glossary page (A25) left the site with the glossary on 2026-11-14.

### Vorlagen table

The practice section of the reading flow renders a table of all mirrored templates (catalogue and function names follow the Vault convention, English since 2026-07-19). Rows carry `.vorlage-row` and remain clickable as a pointer surface. A native `.vorlage-open` button in the first cell provides the keyboard action without changing the row's table semantics; its focus-visible state draws a 2px outline.

The Vorlagen hub adds two silent styling blocks:

- `.vorlagen-block`: an additive sub-anchor block with a top margin of 3rem. Its clearance below the sticky header comes from the one global rule over `[id]`, so the block states no `scroll-margin-top` of its own.
- `.vorlagen-tb-links`: a wrapping link row at 0.875rem.

### Case-study cards

The use-case gallery renders case-study cards in a responsive grid (`auto-fill, minmax(280px, 1fr)`), grouped by the use-case typology of A7; the internal genre vocabulary stays out of the public UI. Each card has a `#e0e0e0` border, no shadow, 1rem padding, and a `#f5f5f5` hover fill. A "Mehr" button appears only for case studies that carry a depth page. A filter bar above the grid offers selectable chips and a secondary select control.

### Labels

Labels are English, in the British spelling the paper uses. A label names the thing and stays as short as it can. The five interface categories keep their English identifiers, and the category still stands as a word beside its hue (WCAG 2.1, 1.4.1).

## Focus and keyboard

A page change carries the focus into the content, so the reader continues in the page rather than back at the top of the tree. The receiving container is reachable by Tab in no other way, and it therefore shows no focus ring when it takes the focus programmatically. Every element that a keyboard reaches on its own keeps its visible ring, and that ring is not weakened anywhere.

## Motion and elevation

The only movement animation is the side-panel slide, 200ms `ease-out`. Interactive elements additionally carry short 150ms `ease-out` colour and background transitions as hover feedback (TOC links, tree entries, cards, buttons, chips, the video facade). The `CLAUDE.md` rule "only side-panel slide, no others" governs decorative and scroll-linked motion, which stays banned; the 150ms hover transitions are permitted micro-affordances. The scrollspy of A33 moves a class and nothing else, so it adds no motion. When `prefers-reduced-motion: reduce` is active, the stylesheet makes every transition and animation effectively immediate. An icon rotation on a contents toggle stood in this list until 2026-07-29 and named a control the site no longer has.

## Icons

Icons appear only where a control carries no text, currently the theme toggle, the panel close, the copy button, the mark on an outbound link and the repository link in the header. They are inline SVG at 16 pixels with a 1.5-pixel stroke in `currentColor` and no fills, carried in the markup rather than in a font or a sprite file. Navigation entries, headings and groups carry no icons, because there the label is the thing.

The footer carries no destination glyphs since it moved to the shared footer block on 2026-11-10; its links name their targets in words.

## Start page

The start page under `#overview` (A48 in [specification.md](specification.md)) is the reference page of the DHCraft method sites since the owner's review of 2026-11-10. Its structure, colours and downloads follow the brand-assets design document (`web/design.md`, Page structure of a method site, and Decisions of 2026-11-10). This section records how the portal realises them and the owner's feedback of that day as requirements, so that a rebuild keeps them.

### Owner feedback of 2026-11-10

- The style goes in the right direction and was a touch unround in the first version.
- The cards of the four forms were tall and narrow, with empty space and a return path hanging at the lower right. They became prose.
- Figure 1 of the paper is the main figure, on the shared tokens, as inline SVG with title and description, sourced only as Pollin 2026, Promptotyping, submitted.
- No heading over the figure, no caption block under it, and no button row beside the abstract.
- The terms under the figure are two or three short paragraphs of prose with links in the sentences, and the files each form writes stand in the sentence.
- The document types get a small figure of their own, drawn as code.
- Files to take away stand in a block of their own with one download control per file and one archive per set, and explanatory prose stays outside the block. The same holds for the skill.
- Every prompt is checked against skill and specification and kept in step with its source.
- Copyable fields are set cleanly, with label and copy button in the field's head row.
- The rehearsal file and the fit check stand where they are needed.
- A recurring entry has at most three visual levels, the step with its instruction, the field, the result.
- The four hues of the mark mark categories with a text label, purple stays the action accent, and light is the default whatever the system setting.

### Fourth round of 2026-11-10

- The owner found the third version much better and asked for dashed frames around the copyable fields, set in from the text, with console type at a readable measure and an icon-only copy button inside the field.
- He found the footer unclear and asked for few groups of short lines that do not repeat the seventh part.
- He saw too many pages and much redundancy and asked for one page in the core and at most one more.
- On the use-case page he counted far too many levels and asked for at most three in the head and per entry, with links of one form.

### Footer

The footer is one band on `--code-bg` with three groups of short lines, meant as the shared footer of the DHCraft method sites. The first group names the site, the publisher with a link, version and date, and a link to the citation part. The second group states the licences, content and code of the site, the shared web files and fonts, and the mark as proprietary. The third group links the repository, its changes, the specification and the Markdown sources, and the related method sites. The groups stand as columns of at least 14rem and stack on a phone, each with its name as a short title in the display face.

### Hierarchy

| Part | Question it answers | Form |
|---|---|---|
| Title | What is it, and for whom? | H1 and a three-sentence abstract at reading measure |
| Figure | How does the practice work? | Figure 1 of the paper in a frame on the surface, at the page width |
| Terms | What do the figure's labels mean? | Three paragraphs of prose that define promptotype, agentic review, scholarly validation, knowledge curation and project knowledge base (with glossary tooltips until 2026-11-14), then the document types drawn as three panels of files |
| Origin | Where does it come from, and what to cite? | One paragraph with the sources as links |
| Reuse | How do I start? | The fit check as one sentence, three numbered steps, the block of files |
| Example | What does a round look like? | Eleven numbered steps from Set up to Accept and version, each with instruction, field and result |
| Limits, licence and citation | What does it not establish, and how is it reused and cited? | Two paragraphs and the citation field |

### Figure and colours

The paper's figure is copied from its source and converted at authoring time, colour literals to `currentColor` and `--surface`, ids prefixed with `pf-`, the description equal to the owner's legend, and the curation label rephrased without a colon. The four forms of work carry `--cat-forms` (green), the promptotype frames `--cat-proto` (orange) and the knowledge-base sheets `--cat-base` (blue), each beside the figure's own text label, with a 10 to 12 per cent tint of the hue as fill. The values are the mark's hues where they reach 3:1 against paper and white, `#5c9e4a`, `#4a7ab8` and the darker orange `#b8701a`, and in the dark scheme `#85aede` and `#e39a3b`. In the prose the category stands as a thick underline in its hue under its words. Below 48rem the figure keeps a width of 80rem, at which its lettering reads, and scrolls inside its frame, which takes keyboard focus.

### Changes to the figure for the paper

The owner asked on 2026-11-10 for three changes, which the coordination may carry into the paper's figure. In the start page's conversion of `figure-1-promptotyping-practice.svg` (viewBox 1672 by 860):

- Lettering. Every inline `font-size` below 17 units is raised to 17, which reads at about 11 pixels at the page width of 75rem. This concerns the file names (13), `describes` (14.5), `example files` (14), `each state can be versioned` and `checking and use` (15.5), the labels between the two frames (14.5 and 15.5), the subtitles in the ellipses and under PROMPTOTYPE (15.5) and the heads FOUR FORMS OF WORK (14), ARTEFACT, PROJECT KNOWLEDGE BASE and RESEARCH DATA (15). The file names at y 674 move apart, `data.md` from x 863 to 858, `specification.md` from 975 to 984, `journal.md` from 1103 to 1127 and `CLAUDE.md` from 1223 to 1242.
- Researchers. The filled core `<circle cx="730" cy="62" r="12">`, which reads as the end node of an activity diagram, gives way to a person drawn in stroke without fill, a head `<circle cx="730" cy="55" r="7">` and shoulders `<path d="M717,77 C717,66 743,66 743,77">`, inside the kept ring of radius 26.
- Knowledge base. A dashed frame `<rect x="816" y="480" width="484" height="236" rx="10">` in the blue of the knowledge base encloses label, type brackets, sheets and file names. The arrow `context for each task` starts at its left edge, `M816,600 H662` instead of `M826,600`, and the arrow `maintains` ends there, `H816` instead of `H826`.

The README shows the same figure as a standalone light SVG, `assets/img/promptotyping-practice.svg`, written from the converted figure with fixed colours.

### Tokens

Every value the start page introduces is a custom property on `:root`: `--radius`, `--radius-pill`, `--brand-mark`, `--figure-min`, `--step-marker`, the type steps `--text-xs` to `--text-lead` and `--text-h2-start`, and the three category hues. Hairlines stay 1px. Measures and radii of fields, panels and the download block come from the shared tokens.

### Evidence

On 2026-11-10 Playwright screenshots of the page served from the repository were read at 1440 by 900, 820 by 1100, 390 by 844 and 360 by 740, light and dark, and without JavaScript. Two independent agentic reviews with a fresh context checked the page against the user tasks, the shared design document and the sources. Worked in were the always count, the dead links without JavaScript, broken phone rows, a phone arrow without its target, repeated link names, the template destinations, the prompt order, an advisory heading, the long conditions, the catalogue inside one definition, the figure on a phone, the missing acceptance step, a yield that did not match its prompt, the source line of the figure and the citation width. Kept with reasons were the three cases of the paper, which the paper's section 3 names while `assets/data/case-studies.json` marks Klawiter-Rescue as `further`, the phrase that findings return most often to Distillation, which the paper states in section 2.2, and the signature band, which the owner saw and approved. Human reading and the owner's acceptance are outstanding.

## Introduction page (withdrawn)

The introduction page under `intro/` (A47) was withdrawn on 2026-11-14 by operator decision, because its text no longer followed the terms of the paper and the start page already shows the five subcommands of the skill. Its design rules left with it and remain in the git history.

## What the design is not

- No custom cursor
- No parallax, no scroll-linked animation
- No Lottie or WebGL, no 3D effects
- No typography animation (animated variable fonts)
- No sound effects
