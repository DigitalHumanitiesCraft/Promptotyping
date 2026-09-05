# Editorial policy

Policy version: v2

This is a synthetic catalogue's declared policy, not a general standard for
historical dating. It applies identically to `letter` and `register` unless stated.
Interpret dates using the proleptic Gregorian calendar; make no calendar conversion.
Years are four digits in 0001–9999. Strip surrounding spaces only for interpretation;
always retain the exact input literal in output.

## Amendment and scope

An editor has established that square brackets in the **register** collection mark
an uncertain editorially supplied date. Under v2, a bracketed supported unqualified
base form in that collection is normalised at its own precision, with certainty
`uncertain`, status `normalized`, reason `editorial_supplied`. An impossible base is
invalid. Bracket meaning in the **letter** collection remains unestablished and
ambiguous. Do not transfer the register decision to letters. Original brackets
remain in `date_literal` and do not appear in `date_value`.

## Rules, in precedence order

1. An empty/whitespace-only string or exactly `o. D.` is missing: status/reason
   `missing`; value null, precision/certainty unknown.
2. An expression enclosed in square brackets is processed under the amendment only
   for collection `register`. Its trimmed inner text must be an unqualified base
   form listed below. Unsupported or qualified inner expressions remain ambiguous.
   All bracketed expressions in collection `letter` remain ambiguous, including
   apparently invalid dates. Ambiguous means reason `unresolved`, null value and
   unknown precision/certainty.
3. Supported base forms are YYYY-MM-DD, DD.MM.YYYY, German-month YYYY, and YYYY.
   Day/month numbers in numeric forms are exactly two digits. Month names are
   Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober,
   November, Dezember. Matching is case-sensitive with one space in month-year.
   Output uses ISO order at the supplied precision. A month or year must not be
   expanded into a fictitious day. Without brackets or a qualifier use certainty
   `certain`, status `normalized`, reason `direct`.
4. Outside brackets, a single `ca. ` prefix on a supported base form uses certainty
   `approximate`, reason `approximate`; a single `?` suffix uses certainty `uncertain`,
   reason `questioned`. Retain the base value and precision, status `normalized`.
   A combined prefix and suffix is unsupported and ambiguous; invent no interval.
5. A supported form with an impossible calendar value (including a non-leap-year
   29 February or an out-of-range year/month) is `invalid` with reason
   `invalid_calendar`, null value and unknown precision/certainty. This also applies
   to invalid bases with one qualifier and to register brackets processed by rule 2.
   Calendar invalidity takes precedence over certainty after form recognition.
6. Every other expression is `ambiguous`, reason `unresolved`, null value and unknown
   precision/certainty. This includes slash years, seasons, before/after expressions
   and unsupported spellings. Preserve the record for later editorial assessment.

## Examples

`17.05.1830` becomes `1830-05-17`, day, certain. `Mai 1830` becomes `1830-05`, month,
certain. `ca. 1830` becomes `1830`, year, approximate. `1830?` becomes `1830`, year,
uncertain. `31.02.1830` is invalid. `[1832]` is `1832`, year, uncertain with reason
editorial_supplied in registers; it remains ambiguous in letters.
