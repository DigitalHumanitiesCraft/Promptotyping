# Figure provenance

The two figures of `knowledge/paper.md` are generated images. This file states
for each one what it shows, where it belongs in the paper, and the exact prompt
it was generated from, so that a change of wording can be carried into the
image without reconstructing the instruction. Section 4.1 of the paper requires
every artefact to disclose its conditions of production, and the same
obligation holds for the figures the paper carries.

Both were produced with the ChatGPT image model on 2026-07-26. The style is
fixed across both, flat monochrome line art on a white plate, near-black
strokes, bold uppercase headings, monospace reserved for file names, and no
title inside the image, because the caption in the paper carries it. The dark
theme of the site inverts the plate in CSS rather than shipping a second file.

One convention runs across the set. A solid filled shape means human
judgement, and it is the only filled shape in either image.

## figure-1-phases.png

Belongs to Section 3.2, caption Figure 1. It shows the four phases from left to
right with the material each works on, the Critical Expert above the third and
fourth phase, and one return path that re-enters at three depths.

```
Flat vector line art on a pure white #ffffff background, filling the entire
canvas. Strokes in near-black #1a1a1a, monochrome, no colour, no shadows,
no title anywhere. Bold uppercase sans-serif for headings, regular sans-serif
for captions, monospace for file names. 16:9.

Top right area, centred horizontally between columns 3 and 4: a thin open
circle containing a solid filled black disc, with the bold uppercase label
"CRITICAL EXPERT" directly beneath it. This disc is the only filled shape in
the image. Two thin arrows leave the label area and run diagonally downward,
one to the left ending above column 3, one to the right ending above column 4,
each with a solid arrowhead. Beside the left arrow, two lines of small regular
text, "reviews and updates" over "documents". Beside the right arrow, two
lines, "verifies" over "artefact".

One row of four bold uppercase headings, evenly spaced left to right, each
with a middle dot after the number:
  1 · PREPARATION    2 · EXPLORATION    3 · DISTILLATION    4 · IMPLEMENTATION
Directly under the second heading, in smaller bold uppercase: DEPTH VARIES

One row of icons beneath the headings:
 1  a three-tier database cylinder with a small dot on each tier, beside a
    document sheet with a folded top-right corner and four horizontal lines
 2  a square grid of about five by five cells, with a magnifying glass
    overlapping its lower right corner, and to the right a speech bubble
    containing three short horizontal lines
 3  three separate small square cards stacked vertically, each with a folded
    top-right corner and the letters MD inside, each with its monospace label
    set to the right on the same line, top to bottom:
    data.md, requirements.md, design.md
 4  a browser window frame with three small circles in its title bar,
    containing a line chart with plotted points on the left, a table grid on
    the right, and a block of horizontal lines across the lower half

Between the icons, three thin horizontal arrows with solid heads pointing
right, set at the vertical middle of the icons.

One row of centred captions beneath the icons:
 1  one line, "Data, sources, standards and research context"
 2  two lines, "What the data affords," over "and what it does not"
 3  one line, "Promptotyping Documents"
 4  one line, "Self-contained research artefact"

Beneath everything, a single return path drawn as one continuous thin line
with rounded corners. It drops from the right edge below column 4, runs
horizontally leftward across the full width, and sends three short vertical
risers upward, each ending in a solid arrowhead just beneath the captions of
columns 1, 2 and 3. The riser into column 3 is drawn thicker than the other
two. Above each riser, one small lowercase word at its arrowhead: "sources"
above the riser into column 1, "assumptions" above the riser into column 2,
"documents" above the riser into column 3.
```

Two deviations stand in the delivered image. The three words above the risers
were not drawn, which is without consequence because the caption names the
three depths. And the open ring for the agent, which would give the filled
disc its counterpart and make the division of labour visible, was dropped from
the instruction while the return path was being fixed; it is the one addition
worth making on a future run.

## figure-2-document-types.png

Belongs to Section 3.3, caption Figure 2. It shows the three document types
side by side, each headed by the question it answers and listing the files
that carry it.

```
Flat vector line art on a pure white #ffffff background, filling the entire
canvas. Strokes in near-black #1a1a1a, monochrome, no colour, no shadows,
no title. 4:3.

One thin outer rectangle divided into three equal columns by two thin vertical
rules. NO horizontal rules anywhere. Nothing hangs below the rectangle.

Each column carries four elements, stacked with generous spacing:
 a bold uppercase heading, centred
 one italic line in sentence case, centred
 an icon, centred, occupying no more than one third of the column height
 a monospace list, left-aligned, ONE ITEM PER LINE, with NO slashes, commas or
 separators of any kind

COLUMN 1
 DECLARATIVE DOCUMENTS
 What is the case
 icon: a document sheet with a folded top-right corner bearing horizontal text
 lines, with a magnifying glass resting over its lower right area
 data.md
 requirements.md
 design.md
 verification.md
 editorial guidelines
 mapping rules

COLUMN 2
 PROCESS DOCUMENTS
 How the work went, and why
 icon: a document sheet with a folded top-right corner bearing a clock face
 above a small graph of three connected dots
 journal.md
 learnings.md
 decisions.md

COLUMN 3
 ACTION DOCUMENTS
 How to act
 icon: a document sheet with a folded top-right corner bearing a gear above a
 checklist of three ticked boxes, each box followed by a short horizontal rule
 CLAUDE.md
 AGENTS.md
 testing strategy
 agent roles

All three document sheets are drawn at the same size and stroke weight, and
all three italic lines are in sentence case.
```

An earlier version of this figure carried a fourth row per column giving the
diagnostic use, which type to revise when a given kind of error appears in the
output. It was dropped by operator decision, and the caption in the paper now
points to the text for it. Restoring it is an addition without redesign, one
line per column reading `FACTUALLY WRONG → revise`,
`DECISION LOGIC UNCLEAR → consult` and `FORMALLY WRONG → adjust`.

## figure-1-promptotyping-iteration.png and figure-4-versioned-promptotypes.png

Both belong to the draft manuscript `knowledge/paper-draft.md` (Figure 1 in
Section 2.1, Figure 4 in Section 2.4) and were produced with the ChatGPT image
model on 2026-07-29, operator-generated; no prompt text was retained. The
first extends the four-phase figure by a fifth column for the accepted
promptotype and draws the three riser words of the return path that the
2026-07-26 run had dropped. The second shows three versioned promptotypes
connected by write-back and renewed iterations.

Two known deviations from the conventions of this set stand in both images
and go on the regeneration list rather than blocking use. Each image carries
caption text inside the plate (figure 4 additionally a title), against the
rule that the caption lives in the paper. And figure 4 breaks the
filled-shape convention, its three timeline dots are solid without meaning
human judgement, while the Critical Expert, whose acceptance the figure
depicts, does not appear in it. A future regeneration removes the in-image
text, hollows the timeline dots or re-introduces the expert mark, and keeps
the version labels, which the draft's Section 2.4 declares illustrative.

## Candidates archive (`candidates/`)

Every delivered figure version is archived under `candidates/`, whether or
not it is adopted, by operator decision of 2026-07-29. A file is named
`{content-slug}--{date}--{time}.png`, where the time comes from the delivery
file name and keeps versions of the same motif apart. Content slugs are used
instead of figure numbers because numbering shifts between manuscript
versions; the register below maps each candidate to the figure slot of the
manuscript version it was made for. Adopting a candidate means copying it to
the root of `assets/figures/` under its canonical `figure-*` name; the
candidate file stays.

All candidates so far were produced with the ChatGPT image model,
operator-generated, no prompt text retained. Delivery file names follow the
pattern `ChatGPT Image {date}, {time}.png` in the Downloads folder. The two
deliveries of 2026-07-29, 17:58 are byte-identical to the adopted
`figure-1-promptotyping-iteration.png` and `figure-4-versioned-promptotypes.png`
and are therefore not duplicated here.

| Candidate | Intended slot (manuscript of 2026-07-29, revised) | Note |
|---|---|---|
| `iteration-loop--2026-07-29--19-51-24.png` | Figure 1, Section 2.1 | Adds the promptotype box with its four components including documented grounds of acceptance, and the three labelled return paths; no in-image caption apart from the write-back label |
| `checking-architecture--2026-07-29--19-51-31.png` | unassigned; visualises Section 2.4 / Table 2 | Knowledge base, working context, agent in harness, artefact, three checking forms, acceptance; carries the "never authorises" boundary |
| `iteration-anatomy--2026-07-29--19-51-52.png` | Figure 5, Section 4.3 | Comparative anatomy of five cases across seven forms of work; filled versus hollow dots encode emphasis, a deviation from the filled-shape convention of this set |
| `m3gim-prospective--2026-07-29--19-52-17.png` | Figure 8, Section 4.6 | Bidirectional loop among data model, capture, generated interface, discussion, documented revision |
| `zbz-e66--2026-07-29--19-52-21.png` | Figure 9, Section 4.7 | Workflow before and after decision E66 |
| `notker-acceptance--2026-07-29--19-52-25.png` | Figure 10, Section 4.8 | Purpose-specific acceptance; carries in-image caption-like text on the acceptance card |
| `poster-de--2026-07-29--19-43-33.png` | none, German poster | First rendering; findings on the poster are in `knowledge/journal.md`, 2026-07-29 |
| `poster-de--2026-07-29--19-45-38.png` | none, German poster | Second rendering of the same state |
| `checking-architecture--2026-07-29--20-01-22.png` | unassigned; visualises Section 2.4 / Table 2 | Second version: agent nested in the harness, evidence box collecting validation and review, acceptance closes the loop back into the knowledge base, Critical Expert carries the filled-disc mark |
| `iteration-anatomy--2026-07-29--20-00-10.png` | Figure 5, Section 4.3 | Second version: legend added (documented major emphasis, primary emphasis, documented write-back), hollow dots dropped, in-image closing line removed; resolves the convention deviation of the first version |
| `notker-acceptance--2026-07-29--19-59-50.png` | Figure 10, Section 4.8 | Second version: left box named Promptotyping Documents, acceptance card states the accepted purpose and what the acceptance does not imply |
| `zbz-e66--2026-07-29--19-59-45.png` | Figure 9, Section 4.7 | Second version: evidence box added, Critical Expert verification with filled-disc mark, human-authorised status named as such on both sides of E66 |
| `m3gim-prospective--2026-07-29--19-59-34.png` | Figure 8, Section 4.6 | Second version: six-node circular loop with labelled transitions in place of the network arrangement |
