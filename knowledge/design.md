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

Reading is the primary function, so anything that competes with the text is a defect. The page carries no decorative elements, no colour flood, no accent boxes beyond the card of a list and the block a reader copies, and no motion beyond short hover feedback. Structure comes from headings and prose, and explanatory text stays outside the blocks a reader copies. Every section opens with a sentence that says what it is, because in the operator's review of 2026-07-26 no page said what it was and he could not find his way. The operator's guiding phrase for the reduction of 2026-11-14 was "weniger ist mehr" (less is more).

## Design system

Tokens. Colours, fonts, radii and measures come from the shared DHCraft token file `assets/dhcraft/dhcraft-tokens.css` and its building blocks `assets/dhcraft/dhcraft-components.css`, unchanged copies of the folder `web/` of the brand-assets repository, loaded before the page's own stylesheet `assets/css/site.css`, which only lays out the page with the shared `--dh-*` properties. A shared value is changed by overriding its property in the page's stylesheet and recording the change here, never by editing the copies.

Typography. Sora for headings and the site name, Instrument Sans for text, the system monospace for code, served from `assets/dhcraft/fonts/` with their licence texts and no external font service. Headings stay on two levels below the one H1.

Colour. Colour comes from the shared roles, and the purple brand accent with its link role marks action, links and focus. The figure uses three category hues, and each stands beside the word of its category. For contrast the page overrides three shared roles in its stylesheet, with a white ground, the deepest ink for text and a darker secondary text, after the operator found the page too grey on 2026-11-14 and asked for a lighter ground and darker type.

Theme. The page shows the light scheme only, fixed by `data-theme="light"` on the root element whatever the system setting, a decision of the operator of 2026-07-26 confirmed on 2026-11-10.

Mark. The header carries the DHCraft watercolour mark beside the name Promptotyping, and a watercolour file of the logo serves as favicon.

Layout. The page uses the shared page frame. Text, lists, the start prompt and the head of a section share one right edge, the text width set in the page's stylesheet, and only the figures take the full width of the frame. Sections are set apart by space and their headings, without a line between them, since the operator counted too many borders around the section Skill on 2026-11-14. Each entry of the lists of subcommands, templates, knowledge documents and use cases is one row, a name and half a sentence. A list stands on a card, the raised surface of the shared tokens with a hairline frame, and both the name and the half sentence stand in the text colour. Inside the card the two columns and the space between rows order the list, without a line between rows. The card and the text colour follow the operator's review of the same day, in which he found the list without lines hard to read and too grey and asked for a card. The operator's review of 2026-11-14 read "Wir sind hier zu viele Querstriche" (too many horizontal lines) and asked where things were not yet lined up, and a measurement of the page found five right edges. In the section Skill the start prompt stands first, at the text width and in the text face, and the subcommands follow as a list to look things up in. A subcommand stands in the regular weight of the monospace, and the semibold weight marks a link. Below phone width every row stacks, and the page never scrolls horizontally.

The lead under the title stands in the size of the body text, so the first screen holds three text styles. The text under the figure sets each core term in bold italics where it introduces it, so that a reader who scrolls finds Preparation, Distillation or Promptotype at a glance, as the operator asked on 2026-11-14. Under the figure its two explaining paragraphs stand side by side at the width of the figure. From the section Skill on, the sections stand in the text column, and Cite stands beside them as a panel in the column that would otherwise stay empty. The panel has three levels, its heading with the copy button, the citation, and one row of links with an icon each for the DOI, `CITATION.cff` and the licence, and it stays in view while the page scrolls. It carries no frame. A first panel with a name and a half sentence per link and the sentence on the limits of the practice was, in the operator's words of the same day, again too many levels and too much text, and he asked for icons. The sentence on the limits stands with the use cases. Where both columns do not fit, it follows the sections as the last part. The operator asked for it on 2026-11-14, when he had to scroll far and read the word for citing three times in the last section.

The footer follows the one of dhcraft.org, which the operator named as the model on the same day. It is a dark band over the full width with its content in the page frame, the mark with the name of the site on the left, the links of the project with an icon each on the right, and the licence in one quiet line below. It is the footer block of the shared DHCraft files, to which it was added on 2026-11-14, and the page's stylesheet carries no rule for it.

## Interaction patterns

Nothing on the page opens or closes, a rule of the operator of 2026-07-29. Links name their target in words. Templates, knowledge documents and use cases open on GitHub, where Markdown renders, and the templates can also be taken as one archive through the button beside their heading. A prompt, a command or a citation to copy stands in the copy field of the shared DHCraft files, with a dashed border, slightly indented, in the monospace face, as on the operator's slides. Copying is an icon inside the field that carries its name for screen readers, turns into a tick after copying, shows its words when copying fails and is left out where the browser offers no clipboard access. The start prompt in the section Skill is such a field. Its lines wrap, it stands in Consolas where the system has it, and its three instructions stand in bold.

## Visualisation logic

The page carries Figures 1 and 2 of the paper on the practice, sourced only as Pollin 2026, Promptotyping, submitted. The first, `assets/img/promptotyping-practice.svg`, stands under the lead and shows the practice from the research data and their contexts through the four forms of work to the Promptotype as one box, with the three kinds of engineering at their places. The second, `assets/img/promptotype-example.svg`, follows the two paragraphs and opens a Promptotype with CorrespExplorer as the example, with a selection of the documents of its knowledge base. Both are embedded as images with fixed colours on a white ground, without a heading over them or a caption under them, and the README embeds the same files. Title, description and alternative text state their content, and every label is set at no less than 18 units. On a narrow screen a figure keeps the width at which its lettering reads, and its frame scrolls sideways.

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
