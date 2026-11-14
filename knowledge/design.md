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
generated-with: Claude Code (Claude Fable 5.2, Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Design template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/design.md
topics: ["[[Scholar-Centred Design]]", "[[Typography]]"]
knowledge-sources:
  standards:
    WCAG 2.1: https://www.w3.org/TR/WCAG21/
  vocabularies:
    DHCraft web tokens: https://github.com/DigitalHumanitiesCraft/brand-assets/tree/main/web
related: [INDEX, specification, architecture, journal]
---

# Design

The page is a calm, matter-of-fact practice site of Digital Humanities Craft, made to be read. It stands on the shared DHCraft design and keeps every recurring element to at most three visual levels, and its values lie in the shared token files.

## Design stance

Reading is the primary function, so anything that competes with the text is a defect. The page carries no decorative elements, no colour flood, no accent boxes and no motion beyond short hover feedback. Structure comes from headings and prose, and explanatory text stays outside the blocks a reader copies. Every section opens with a sentence that says what it is, because in the operator's review of 2026-07-26 no page said what it was and he could not find his way. The operator's guiding phrase for the reduction of 2026-11-14 was "weniger ist mehr" (less is more).

## Design system

Tokens. Colours, fonts, radii and measures come from the shared DHCraft token file `assets/dhcraft/dhcraft-tokens.css` and its building blocks `assets/dhcraft/dhcraft-components.css`, unchanged copies of the folder `web/` of the brand-assets repository, loaded before the page's own stylesheet `assets/css/site.css`, which only lays out the page with the shared `--dh-*` properties. A shared value is changed by overriding its property in the page's stylesheet and recording the change here, never by editing the copies.

Typography. Sora for headings and the site name, Instrument Sans for text, the system monospace for code, served from `assets/dhcraft/fonts/` with their licence texts and no external font service. Headings stay on two levels below the one H1.

Colour. Colour comes from the shared roles, and the purple brand accent with its link role marks action, links and focus. The figure uses three category hues, and each stands beside the word of its category.

Theme. The page shows the light scheme only, fixed by `data-theme="light"` on the root element whatever the system setting, a decision of the operator of 2026-07-26 confirmed on 2026-11-10.

Mark. The header carries the DHCraft watercolour mark beside the name Promptotyping, and a watercolour file of the logo serves as favicon.

Layout. The page uses the shared page frame with a reading measure for prose. Each entry of the lists of subcommands, templates, knowledge documents and use cases is one row, a name that links to its target and half a sentence, and rows are separated by hairlines. Below phone width every row stacks, and the page never scrolls horizontally. The footer holds a few short lines that do not repeat the last part of the page.

## Interaction patterns

Nothing on the page opens or closes, a rule of the operator of 2026-07-29. Links name their target in words. Templates, knowledge documents and use cases open on GitHub, where Markdown renders, and the templates can also be taken as one archive through the button beside their heading. A code block sets its text in the monospace and carries a text button "Copy" from the shared DHCraft files, which reads "Copied" after copying, announces the change to screen readers and is left out where the browser offers no clipboard access.

## Visualisation logic

The figure is Figure 1 of the paper on the practice, sourced only as Pollin 2026, Promptotyping, submitted. The page and the README embed the same file `assets/img/promptotyping-practice.svg` as an image with fixed colours on a white ground, without a heading over it or a caption under it. It names both roles, shows the Promptotype as a prototype together with knowledge base and research data, and shows bounded tasks, knowledge documents and modelled data as the basis of building. Its title and description and the alternative text on the page state its content, and every label is set at no less than 17 units. On a narrow screen the figure keeps the width at which its lettering reads, and its frame scrolls sideways.

## Accessibility

The page aims at WCAG 2.1 level AA and holds these minima.

- Colour is never the only carrier of a meaning, so a category always stands as a word beside its hue (success criterion 1.4.1).
- Text meets the contrast of the shared tokens, and graphical marks reach at least 3:1 against their ground.
- Every control is reachable and operable by keyboard and keeps a visible focus ring that is never weakened, and a control without text carries an accessible name.
- The page reads, and its links work, without JavaScript.
- Under `prefers-reduced-motion` every transition is immediate.
- The figure carries a title and a description, and every image carries alternative text.
- At 360 pixels and at 1440 by 900 the page has no horizontal document scroll.

## Coupling to the action layer

[`CLAUDE.md`](https://github.com/DigitalHumanitiesCraft/Promptotyping/blob/main/CLAUDE.md) in the repository root translates this stance into instructions for agents in its section The page and names this document as the one to read before the look of the page changes.
