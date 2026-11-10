---
title: Design
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: "1.0"
created: 2026-05-09
updated: 2026-11-05
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
    Inter Font: https://rsms.me/inter/
related: [INDEX, project, specification, architecture, journal]
---

# Design

Design stance, design system, and interaction patterns for the specification documentation. This document is the normative specification for how the site looks and behaves, and it is the only one; there is no separate UI document, because the template catalogue carries one Design template and because the interaction rules and the visual rules here explain each other. Its imperative translation for coding agents lives in `CLAUDE.md` at the repo root. Every value below is verified against `assets/css/style.css`.

## Design stance

The site is calm. Black on white, one typeface, a single light-grey accent. No colour flood, no decorative lines, no accent boxes, and no motion beyond the side-panel slide and short hover feedback. Since 2026-07-26 two bounded colour systems sit on top of that ground without loosening it, described under Colour that carries meaning.

Two reasons carry that stance. Reading is the primary function; a scholarly paper is read rather than scrolled past, so anything that competes with the text is a defect. And the practice is made visible through structure, through the division of the tree into specification, reference, evidence, tools, and paper, so no additional visual device is needed. The earlier phase-provenance lane was removed after the first deploy by operator decision (A2 in [specification.md](specification.md), 2026-06-10) in favour of an undisturbed reading flow.

## Design system

### Colour

The permitted palette is fixed. Five core tokens plus three general grey accents, and beyond them only the three overlay tokens of the floating surfaces, which are specified under Dark theme.

```
--bg:        #ffffff   background
--text:      #1a1a1a   text
--accent:    #d5d5d5   link underline, hover fill, tooltip border
--border:    #e0e0e0   borders, hairlines
--code-bg:   #f5f5f5   code background, card hover, footer
--grey-1:    #2a2a2a   darkest grey accent (error state)
--grey-2:    #525252   secondary text (dominant grey: TOC, captions, meta)
--grey-3:    #8a8a8a   muted grey (loading, separators)
```

The glossary underline keeps its own token name, `--glossar-underline`, because it is a separate decision from the grey scale; it resolves to `var(--grey-3)` in both themes and therefore holds no value of its own.

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

### Shape that carries meaning

The glossary classifies every term by the kind of thing it names, and that classification is drawn as a shape (A36, 2026-07-29). Eight values each own one geometric mark, a circle for a form of work, a closed semicircle for a practice, a square for a document function, a triangle for a role, a diamond for an artefact, a hexagon for a checking form, a cross for a failure mode and limit, and three stacked rules for an infrastructure term. They are inline SVG at twelve pixels with a 1.25-pixel stroke in `currentColor`, no fill, and no variation beyond the one form per value.

Shape is the second-best variable here, and it is used because the better one is spent. Bertin classes hue as selective and associative, which is why it encodes the interface typology, and he classes shape as associative without being selective, so a reader recognises a mark but cannot pick every term of one kind out of a list at a glance. The term index answers that with a filter field over its category column, where selection is a matter of the filter. In the entry and in the tooltip the mark stands beside the category word as an aid to recognition, and the word is what states the category, which is the same WCAG 2.1 1.4.1 rule the hue follows.

### Dark theme

The stylesheet resolves every colour through a token, so the theme is a token swap. Light is the first view (A29, operator decision 2026-07-26). The inline prelude in the head always writes a `data-theme` attribute on the root element, the stored choice where one exists and `light` otherwise, before first paint, so a reader who chose dark never sees a white flash. The stylesheet still carries the `prefers-color-scheme` block, and the always-set attribute overrides it, so the system preference no longer decides what a first-time visitor sees. The choice is kept in `localStorage` under `promptotyping-theme`. The toggle exposes the active state through `aria-pressed` and names the next action in its accessible label and title.

```
--bg #131313   --text #e9e9e9   --accent #3d3d3d
--border #2e2e2e   --code-bg #1c1c1c
--grey-1 #d4d4d4   --grey-2 #a6a6a6   --grey-3 #7d7d7d
```

The five function hues lighten in the dark theme so they keep their contrast against `#131313`. The watercolour footer mark is dimmed to 85 per cent rather than shipped as a second file.

Floating surfaces carry a subtle overlay, and it runs through tokens like every other colour, `--shadow-panel` on the side panel, `--shadow-tooltip` on the tooltip, `--backdrop` behind the open panel. The geometry holds in both themes, `-2px 0 12px` and `0 2px 8px`. The shadow colour flips, because black at six per cent over `#131313` shows nothing; the light theme casts black at six and eight per cent, the dark theme casts white at the same two values. The backdrop deepens from thirty to sixty per cent black, where the dimming shows on the light text it covers. Cards carry no shadow.

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

The tree groups the pages under Specification, Reference, Evidence, and Tools and practice, one flat run per group with a gap between the runs and no label over any of them. The active page is marked by a left border and bold weight. The specification carries the one permanent subtree, its five numbered parts, and the part the reader is in is marked in the same greys at 0.8125rem with a left border. The Paper group and the subtree of the paper's sections left with the paper view on 2026-10-28. The tree is never collapsible, and since 2026-07-29 nothing else in the interface is either. Below 860px it stacks above the page and stays visible, showing the subtree of the page being read alone, tables scroll inside their own box, and the side panel becomes a bottom sheet. An on-this-page rail was built and removed the same day by operator decision. The static table of contents that replaced it at the head of the paper page was retired with that page on 2026-10-28.

The header carries the wordmark and the kind marker, with no mark beside it, and the signature band along its foot. Both the DHCraft watercolour and the Promptotyping logo were tried in that slot and dropped, because a chromatic detail image at 22 pixels reads as a smudge and would put a hue on the page that means nothing. The carrier mark stays in the footer and supplies the favicon. The footer's auto-fitting grid currently resolves into four content columns: carrier and licence, addresses and machine access, the state of the specification, and implementation. The implementation column names Digital Humanities Craft, the documented AI harnesses and models, and Promptotyping without repeating the repository link already present in the addresses column.

The start page is the specification front. The title and one-sentence scope lead into three task routes for understanding, evaluating, and applying the practice. A compact operational account and two-column keyed status block complete the page. The block becomes one column below 860px. The permanent navigation subtree is the only five-part index. Overview fits through its status block at a 1440 by 900 CSS-pixel viewport. Informative pages carry their note and status metadata under the title at 0.8125rem. The Specification page carries neither tagline nor standing line; each part retains compact version, date, and source metadata. Spacing and heading weight establish these transitions without horizontal rules.

## Side panels

The right-hand panel slides in from the right on a trigger.

### Triggers

- A glossary term in the reading flow (dotted underline, `cursor: help`)
- A template button in the first cell of each clickable Vorlagen-table row
- The "More" button of a case-study card
- An assertion in the vault view

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

### Glossary trigger

Glossary-defined terms render with a dotted grey underline (`1px dotted var(--glossar-underline)`) and `cursor: help`. Hover fills the background with `#f5f5f5`. A tooltip appears after a 400ms delay, handled in `pages-glossar.js`, and carries the term, the short definition and a link to the full entry; a click toggles the same tooltip, which is the only way in on a touch device. The tooltip surface fades in over `opacity 150ms`. The side panel that used to open on click is out of this flow since 2026-07-26 (A29 sits beside this in [specification.md](specification.md), the decision itself is A6).

### Vorlagen table

The practice section of the reading flow renders a table of all mirrored templates (catalogue and function names follow the Vault convention, English since 2026-07-19). Rows carry `.vorlage-row` and remain clickable as a pointer surface. A native `.vorlage-open` button in the first cell provides the keyboard action without changing the row's table semantics; its focus-visible state draws a 2px outline.

The Vorlagen hub adds two silent styling blocks:

- `.vorlagen-block`: an additive sub-anchor block with a top margin of 3rem. Its clearance below the sticky header comes from the one global rule over `[id]`, so the block states no `scroll-margin-top` of its own.
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

The only movement animation is the side-panel slide, 200ms `ease-out`. Interactive elements additionally carry short 150ms `ease-out` colour and background transitions as hover feedback (TOC links, tree entries, cards, buttons, chips, the video facade, the tooltip fade). The `CLAUDE.md` rule "only side-panel slide, no others" governs decorative and scroll-linked motion, which stays banned; the 150ms hover transitions are permitted micro-affordances. The scrollspy of A33 moves a class and nothing else, so it adds no motion. When `prefers-reduced-motion: reduce` is active, the stylesheet makes every transition and animation effectively immediate. An icon rotation on a contents toggle stood in this list until 2026-07-29 and named a control the site no longer has.

## Icons

Icons appear only where a control carries no text, currently the theme toggle, the panel close, the copy button, the mark on an outbound link and the repository link in the header. The category marks of the glossary fall outside this rule, since they encode a value rather than name a control; they are specified under Shape that carries meaning. They are inline SVG at 16 pixels with a 1.5-pixel stroke in `currentColor` and no fills, carried in the markup rather than in a font or a sprite file. Navigation entries, headings and groups carry no icons, because there the label is the thing.

A destination mark is the one case that sits beside a label. The GitHub and YouTube glyphs in the footer identify where a link goes, the way the carrier watercolour in the same row does, and they do not stand in for a missing label the way an icon button does. They are set at 14 pixels in `currentColor` and never in the brand colour, which would put two hues on the page that say nothing about epistemic function.

## Introduction page

The page under `intro/` (A47 in [specification.md](specification.md)) addresses readers who know neither Git nor coding agents, and it follows the method pages of Second Brain Vault and Grounded Vault instead of the portal. Everything above this section binds the portal; this section alone binds the introduction page.

### Sections

| Section | Question it answers | Form |
|---|---|---|
| Hero | What is it, for whom, and how does a round run? | Title, one lead paragraph, the four parts as one line, audience line, two actions, and the playable example |
| Try it | How do I start on my own data? | Tool line, seven steps (Set up, then the example's steps with Cut to size after Distil and Check and accept at the end), each with one paragraph, a copyable prompt and a self-check, and on wide screens a sticky project folder titled with the step in view. Set up carries a schematic agent window |
| Good to know | What leaves my computer, what is it not, where do I read on? | Three columns of short sentences with source links |

### Example

One synthetic round in seven named steps, Prepare, Explore, Distil, Build, Check, Write back and Rebuild. A family correspondence with partly uncertain dates becomes a timeline. The steps are buttons with their names; a done step carries a check mark, the current step is filled, a coming step has a dashed number. The example's title shares its row with the controls Previous, Next and Play. The caption names who acts, the step and the concrete instance, and on wide screens it reserves the height of its longest step, measured on a hidden probe once the web fonts have loaded, so the panes below stay still while the example plays. At 1440 by 900 the whole example fits the first screen in both languages. Below stand two panes. The project folder lists every file of the round with a one-line gloss and a state word, new as a green pill, changed as an ink pill, read with a small arrow, not yet in faint text. The prototype pane shows nothing, version 1, version 1 with the reader's marks, or version 2. In the timeline a letter drawn on one day is a dot, a letter the check marks carries a dashed ring, and a span is a bar, so shape carries the distinction. Orange means only the reader's mark. The Check step says why version 1 failed, since data.md had recorded the uncertain dates and the specification never turned them into a requirement.

The Set up step draws a schematic agent window in HTML with the three places a newcomer uses, the folder chosen at the start of a session, the chat field and the question before a change. Numbered marks in the window match a key below it, and the caption says that it is a schematic and that Claude Code and Codex look different. It is drawn rather than captured, because a screenshot would show the account and sessions of a real installation and would hold for one agent only.

Below 48rem the prototype pane comes first and the folder drops its absent rows and the glosses of untouched files, so the files a step changes stay near the caption. This is the page's one device that hides content, and the hidden rows add nothing the step is about.

### Visual system

DHCraft corporate design, loosely. Tokens follow the dhcraft-site palette in OKLCH and live in the token block of `intro/site.css`; Sora and Instrument Sans are vendored under `intro/assets/fonts/` with their licences; buttons and step markers are pills; the header carries the white DHCraft mark on navy. The hero stands on the navy night ground, the reading sections on paper. At most three text levels, borders only on controls, prompts and the state words, and no box inside a box. Sections are separated by their ground. Text runs on three levels, headings in Sora, body text, and meta text at the smallest step for glosses, states, legends, prompts and notes; the lead paragraph alone is set one step larger. The navigation bar is opaque and wraps on narrow screens instead of scrolling.

### Terms

| English | German |
|---|---|
| working practice | Arbeitspraxis |
| AI coding agent | KI-Coding-Agent |
| session | Sitzung |
| project folder | Projektordner |
| prototype | Prototyp |
| Prepare, Explore, Distil, Build, Check, Write back, Rebuild | Vorbereiten, Erkunden, Destillieren, Bauen, Prüfen, Zurückschreiben, Neu bauen |
| Set up, Cut to size, Check and accept | Einrichten, Zuschneiden, Prüfen und annehmen |

### Evidence

On 2026-11-04 three subagents read screenshots and page text in the roles of a historian without Git or agent experience (English, desktop), a research data manager at a university library (German, phone) and the head of a museum digital collections team (English, desktop). A fourth reviewed code, screenshots and the running page against the vault document on interface practice for agent-built frontends. They are model readers, not people.

- All three understood the example's point, that a wrong display is corrected in the documents before the code. Two read version 1's failure as the documents failing, and one read its legend as false. The Check step now names the gap between data.md and the specification, and the legend says what version 1 actually draws.
- All three would have stopped before the first step, not knowing which program to open or where to type, and stumbled over session, skill, commit and local server. The page now opens the try-it steps with Set up, says in the lead that the assistant forgets between conversations, and explains each of these words where it first appears.
- Two could not map the example's seven steps onto the tutorial's six. The try-it section now names the relation and carries the same step names.
- A second reader, an art historian, then retold the round and the reason for version 1's failure correctly. They still missed how to choose the folder in the assistant, whether to install Git and Python, and a file to rehearse with. Set up and Prepare now answer these, and `intro/example/letters.csv` holds the invented letters of the example.
- The reviewer found lost keyboard focus at the stepper's ends, unreadable absent rows, changed files below the fold on the phone, a clipped navigation at 320 pixels, too many type sizes, rules on non-controls and a translucent header. All are corrected, and the reproducible ones are regression cases under `intro/tests/` ([verification.md](verification.md)).

A check of the providers' pages on the same day corrected two statements. Codex is included in every ChatGPT plan, the free one too, while Claude Code needs the Pro plan or above. Codex in its recommended mode works inside the project folder without asking and asks before it reaches beyond it, so only Claude Code asks before every change. The page now names these plans and modes with their sources, links three documented cases, says that the duration of a round has not been measured, asks for a licence on generated code and documents, and states that fully local work is not covered.

Prices stay off the page because they change (journal, 2026-11-04). On 2026-11-10 the page took over the paper's name for the LLM role, agent instead of assistant, glossed in the lead, named the four forms of work in the try-it section, defined acceptance as the researchers' judgement of fit, and points to the citation file. Open are whether the workshop covers the setup, a human reading and the operator's acceptance.

## What the design is not

- No custom cursor
- No parallax, no scroll-linked animation
- No Lottie or WebGL, no 3D effects
- No typography animation (animated variable fonts)
- No sound effects
