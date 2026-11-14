---
title: Design
project:
  name: Promptotyping specification
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: "2.0"
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Design template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/design.md
topics: ["[[Scholar-Centered Design]]", "[[Typography]]"]
knowledge-sources:
  standards:
    WCAG 2.1: https://www.w3.org/TR/WCAG21/
  vocabularies:
    DHCraft web tokens: https://github.com/DigitalHumanitiesCraft/brand-assets/tree/main/web
related: [INDEX, specification, architecture, journal]
---

# Design

The page is a calm, matter-of-fact method page of Digital Humanities Craft, read rather than scrolled past. It stands on the shared DHCraft design and keeps every recurring element to at most three visual levels. The values lie in the token files, and this document states the stance, the system and the rules that the operator's reviews have made binding.

## Design stance

Reading is the primary function, so anything that competes with the text is a defect. The page carries no decorative elements, no colour flood, no accent boxes and no motion beyond short hover feedback. Structure comes from headings and prose, and explanatory text stays outside the blocks a reader copies or downloads. The operator's guiding phrase for the reduction of 2026-11-14 was "weniger ist mehr" (less is more).

## Design system

Tokens. Colours, fonts, radii and measures come from the shared DHCraft token file `assets/dhcraft/dhcraft-tokens.css` and its building blocks `assets/dhcraft/dhcraft-components.css`, unchanged copies of the folder `web/` of the brand-assets repository, loaded before the page's own stylesheet. The page maps its roles onto the shared `--dh-*` roles and introduces every further value as a custom property on `:root`. A shared value is changed by overriding its property in the page's stylesheet and recording the change here, never by editing the copies.

Typography. Sora for headings and the site name, Instrument Sans for text, the system monospace for code, served from `assets/dhcraft/fonts/` with their licence texts and no external font service. Headings stay on two levels below the one H1.

Colour. The brand accent marks the primary action, focus and links. Beyond it, a hue marks a category and always stands beside the category's word. The figure uses three category hues taken from the DHCraft mark, for the four forms of work, the Promptotype and the project knowledge base, and in the prose the category stands as a thick underline in its hue under its words. Where the use cases are shown by the epistemic function of their interface, the five function hues apply in the same way. One prismatic signature band at the foot of the header encodes nothing and appears once.

Themes. Light is the first view whatever the system setting, a decision of the operator of 2026-07-26 confirmed on 2026-11-10. A toggle switches to dark, the choice persists in the browser, and it is applied before first paint, so no reader sees a white flash. The dark theme follows from the shared roles.

Mark. The header carries the DHCraft watercolour mark beside the wordmark, and a watercolour file of the mark serves as favicon. The mark stands on both grounds unchanged.

Layout. The page has the width of the shared method-page frame, with a reading measure for prose. Below phone width every row stacks, and the page never scrolls horizontally.

## Interaction patterns

Nothing on the page opens or closes, a rule of the operator of 2026-07-29. A copyable field has a dashed frame set in from the text, sets its text in the monospace at a readable measure and carries an icon-only copy button inside the field, with an accessible name, a check mark after copying and a status announcement. Files to take away stand in a block of their own with one control per file. Links name their target in words, and a link leaving the site carries a small mark.

## Visualisation logic

The main figure is Figure 1 of the paper on the practice, drawn as inline SVG on the shared tokens with a title and a description, without a heading over it, without a caption block under it and sourced only as Pollin 2026, Promptotyping, submitted. Since 2026-11-14 it draws no arrowheads between the four forms of work. It names both roles, shows the Promptotype as a prototype together with knowledge base and research data, and shows bounded tasks, knowledge documents and modelled data as the basis of building. The researchers are drawn as a person in stroke without fill, and a dashed frame in the hue of the knowledge base encloses the documents. Every label is set at no less than 17 units, which reads at about eleven pixels at page width. On a narrow screen the figure keeps the width at which its lettering reads and scrolls inside a frame that takes keyboard focus. The README shows the same figure as `assets/img/promptotyping-practice.svg` with fixed colours.

The three document types are shown as a small figure of their own, drawn as code, with the files each type holds.

## Operator feedback that binds

The operator reviewed the start page in several rounds on 2026-11-10, and these points carry over to the single page.

- The style went in the right direction and was a touch unround in the first version.
- Tall, narrow cards with empty space and a return path hanging at the lower right gave way to prose.
- No heading over the figure, no caption block under it and no button row beside the abstract.
- The terms under the figure are two or three short paragraphs of prose with links in the sentences, and the files each form of work writes stand in the sentence.
- The document types get a small figure of their own, drawn as code.
- Files to take away stand in a block of their own with one download control per file, and explanatory prose stays outside the block. The same holds for the skill.
- Copyable fields are set cleanly, with label and copy button in the field's head row, framed with dashes and set in from the text, in console type at a readable measure, with an icon-only copy button inside the field.
- A recurring entry has at most three visual levels.
- The hues of the mark mark categories with a text label, purple stays the action accent, and light is the default whatever the system setting.
- The footer is clear, a few groups of short lines that do not repeat the last part of the page.
- He saw too many pages and much redundancy and asked for one page in the core and at most one more, which the decision of 2026-11-14 reduced to one.
- He approved the signature band.

Two earlier lessons hold as well. On 2026-07-26 the operator twice said he could not find his way, and the cause was that no page said what it was, so every part of the page opens with what it is. In the same month his requirement for colour, recorded in the journal as "unbunte solide Seite plus ein intensiver Farbklecks", an achromatic solid page with one intense splash of colour, was answered by the signature band, while every hue that informs stays muted.

## Accessibility

The page aims at WCAG 2.1 level AA and holds these minima.

- Colour is never the only carrier of a meaning, so a category always stands as a word beside its hue (success criterion 1.4.1).
- Text meets the contrast of the shared tokens, and graphical marks reach at least 3:1 against their ground. The edition function hue of the use cases falls short of this in light and has to be darkened before it is used again.
- Every control is reachable and operable by keyboard and keeps a visible focus ring that is never weakened, and a control without text carries an accessible name.
- The page reads, and its links work, without JavaScript.
- Under `prefers-reduced-motion` every transition is immediate.
- The figure carries a title and a description, and every image carries alternative text.
- At 360 pixels and at 1440 by 900 the page has no horizontal document scroll, in light and in dark.

## Coupling to the action layer

[`CLAUDE.md`](../CLAUDE.md) in the repository root translates this stance into instructions for agents, in its section on design principles, and names this document as its source of values.
