# Research brief: examining the temporal evidence for correspondence

## Context and interest

A researcher is preparing a chronological account of a synthetic correspondence
collection. The catalogue combines descriptions of surviving letters (`letter`)
and register entries referring to correspondence (`register`). Their dating
conventions differ. Every row is a **catalogue record**, not necessarily a unique
letter. The catalogue does not establish relationships between witnesses, coverage
of the historical correspondence, or correspondence intensity.

The initial research question is: **Which records can be firmly assigned to May
1830, and which need further source examination before they can support a dated
account?** Later the researcher must be able to ask the same question for another
month. The artefact supports examination of evidence; it must not invent a complete
chronology or treat counts of catalogue records as counts of historical letters.

All material and identifiers are synthetic. Source references are catalogue
identifiers to display, not URLs to fetch. No external historical knowledge is needed.

## Researcher scenarios

1. Select a research month (initially 1830-05) and see counts of catalogue records
   in the three groups below, including groups with zero records.
2. Choose all records or one group to inspect a legible list/table. Show each ID,
   collection, exact original date string, normalised value if any, precision,
   certainty, classification reason and source reference. Selection and counts must
   update when the month changes, without changing the underlying data.
3. Trace a displayed classification to the original literal and source reference
   within the same interface. Explain why records in the review group cannot be
   treated as confirmed membership in the selected month.

Use a labelled month input with accessible name `Research month` and a labelled
group selector named `Evidence group`. Offer the labels `All records`, `In month`,
`Needs review`, `Outside month`. Other layout/design choices are yours. Include
keyboard-usable controls and a readable narrow layout. No animation, chart or
visual style is required. Counts always count the full loaded dataset by group;
the group selector filters the list only.

## Grouping rules for this review instrument

- **In month:** status normalized, certainty certain, and day/month precision
  explicitly placing the date in the selected month.
- **Outside month:** status normalized, certainty certain, and a day/month value
  in a different month, or a year value in a different year.
- **Needs review:** everything else. This includes a certain year matching the
  selected year but lacking a month, every approximate/uncertain date, and all
  missing, invalid or ambiguous dates.

This is a deliberately conservative review queue. Approximate and uncertain values
have no quantified error interval in this catalogue and remain in the queue even
if their nominal year differs. Queue membership **does not assert temporal overlap**.
Display that distinction and the limits on counting correspondence in plain language.

## Definition of a useful first artefact

The researcher can perform these scenarios on the supplied dataset, examine the
evidence for individual classifications and repeat the process after an editorial
amendment or addition of records. A correct JSON file alone does not fulfil the task.
