# Editorial policy

Policy version: v1

This is a synthetic catalogue's declared policy, not a general standard for
historical dating. It applies identically to `letter` and `register` unless stated.
Interpret dates using the proleptic Gregorian calendar; make no calendar conversion.
Years are four digits in 0001–9999. Strip surrounding spaces only for interpretation;
always retain the exact input literal in output.

## Rules, in precedence order

1. An empty/whitespace-only string or exactly `o. D.` is missing: status/reason
   `missing`; value null, precision/certainty unknown.
2. An expression enclosed in square brackets is unresolved in either collection.
   Set status `ambiguous`, reason `unresolved`, value null and unknown precision/
   certainty, even if the inner expression looks like a date. Bracket meaning has
   not been established.
3. Supported base forms are YYYY-MM-DD, DD.MM.YYYY, German-month YYYY, and YYYY.
   Day/month numbers in numeric forms are exactly two digits. Month names are
   Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober,
   November, Dezember. Matching is case-sensitive with one space in month-year.
   Output uses ISO order at the supplied precision. A month or year must not be
   expanded into a fictitious day. Without a qualifier use certainty `certain`,
   status `normalized`, reason `direct`.
4. A single `ca. ` prefix on a supported base form uses certainty `approximate`,
   reason `approximate`; a single `?` suffix uses certainty `uncertain`, reason
   `questioned`. Retain the base value and precision, status `normalized`. A combined
   prefix and suffix is unsupported and ambiguous; do not invent an interval.
5. A supported form with an impossible calendar value (including a non-leap-year
   29 February or an out-of-range year/month) is `invalid` with reason
   `invalid_calendar`, null value and unknown precision/certainty. This also applies
   to invalid bases with one qualifier. Calendar invalidity takes precedence over
   certainty classification once a supported form has been recognised.
6. Every other expression is `ambiguous`, reason `unresolved`, null value and unknown
   precision/certainty. This includes slash years, seasons, before/after expressions
   and unsupported spellings. Preserve the record for later editorial assessment.

## Examples

`17.05.1830` becomes value `1830-05-17`, precision day, certainty certain.
`Mai 1830` becomes `1830-05`, month, certain. `ca. 1830` becomes `1830`, year,
approximate. `1830?` becomes `1830`, year, uncertain. `31.02.1830` is invalid.
`[1832]` is ambiguous in both collections under this policy version.
