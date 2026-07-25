---
title: Verifikation
slug: verifikation
status: complete
language: de
version: "0.1"
created: 2026-07-25
updated: 2026-07-25
source: knowledge/paper.md, Abschnitt 2.4 und 6.2
machine-url: https://dhcraft.org/Promptotyping/_content/verifikation.md
---

# Verifikation

Der naheliegende Einwand gegen erzeugte Forschungsartefakte ist die Qualitaet. Die Antwort der Methode ist eine in den Dokumenten verankerte Pruefung. Sie ist systematisch noetig, weil die Abbildung vom halbformalen Dokumentsatz auf das laufende Artefakt stochastisch ausgefuehrt wird und ihre Treue damit nicht durch Konstruktion gesichert ist.

## Zwei Pruefarten

Die Methode unterscheidet, was eine Regel entscheidet, von dem, wofuer eine Person einsteht.

- **Validation** ist das, was eine formale Regel entscheidet, ein Schema, ein Test oder eine Constraint. Sie laeuft unbeaufsichtigt, weil die Rueckkopplung geschlossen ist und der Agent das Ergebnis selbst ablesen kann.
- **Verification** ist das, was die fachliche Expertise gegen die Quellen und gegen wissenschaftliches Urteil entscheidet. Sie delegiert nicht.

Diese Festlegung weicht bewusst von der Norm des Software Engineering ab, wo Verification die Pruefung gegen die Spezifikation und Validation die Pruefung gegen den beabsichtigten Gebrauch benennt. Sie folgt stattdessen den Wortwurzeln, *verus* fuer einen Wahrheitsanspruch, den ein Urteil tragen muss, und *validus* fuer das, was unter einer gesetzten Regel gilt. Die Abweichung gilt fuer die Pruefung erzeugter Ausgaben und laesst den gewoehnlichen Sinn unberuehrt, in dem Faelle eine Methode validieren.

## Drei Pruefebenen mit ihren Autonomiezonen

Das Paar arbeitet auf drei Ebenen, und jede traegt eine eigene Zone der Agenten-Autonomie.

**Datentreue.** Ob die Darstellungen des Artefakts den Quelldaten entsprechen, wird durch Stichproben geprueft und ueberall dort, wo Korrektheit deterministisch entscheidbar ist, durch Schema-Validierung, Testsuiten und Builds, die der Agent unbeaufsichtigt laufen laesst. Wo Treue so nicht entscheidbar ist, etwa bei Texterkennungsergebnissen, Annotationen und Transformationen, kann eine adversariale maschinelle Pruefung dazwischentreten, also eine LLM-Instanz mit dem Auftrag, eine Ausgabe gegen ihre Quellen anzugreifen. Diese Instanz wird fallweise freigegeben und rangiert in der Autoritaet unterhalb der menschlichen Verifikation.

**Anforderungserfuellung.** Geprueft wird gegen die Akzeptanzkriterien der Anforderungen, wozu User Stories mit Akzeptanzkriterien da sind. Dies ist die Ebene, die die Methode begonnen hat, an eine Agenteninstanz zu delegieren, die das laufende Artefakt gegen diese Kriterien bedient.

**Designkonformitaet.** Sie bleibt in der Zone der Fachperson und wird geprueft, indem das Artefakt gegen das Designdokument gelesen wird. Hier wird Tool Criticism zur Routinehandlung, weil die expliziten Annahmen des Werkzeugs einmal schriftlich vorliegen. Interpretation, Kontextualisierung und das Urteil darueber, ob die richtigen Fragen gestellt werden, bleiben ebenfalls hier. Ob eine in einem Dokument genannte Person dieselbe ist wie eine aehnlich benannte in einem anderen, ist ein Akt historischer Kontextualisierung und in den dokumentierten Projekten ausdruecklich als Entscheidung der Fachperson vermerkt.

## Der Critical Expert in the Loop

Die Rolle, die diese Pflichten traegt, ist der Critical Expert in the Loop. Sie unterscheidet sich vom generischen Human in the Loop dadurch, dass sie zugleich fachliche Expertise und Kenntnis der LLM-spezifischen Fehlermodi verlangt. Zwei Fehlermodi sind in heutigen LLMs strukturell.

- **Sycophancy** ist die Tendenz, den Annahmen der Nutzenden zuzustimmen, statt sie infrage zu stellen. Ausbleibender Widerspruch ist damit keine Bestaetigung.
- **Konfabulation** ist die Erzeugung plausibler, aber falscher Ausgaben. Der Begriff trifft das Verhalten genauer als Halluzination, weil das LLM eine Luecke mit dem fuellt, was passt, und den Mangel nicht meldet.

Die Aufgabe der Rolle reicht ueber das Pruefen von Ausgaben hinaus in den nicht explorierten Moeglichkeitsraum, also in die nicht gestellten Fragen und die nicht erzeugten Alternativen.

In dieser Rolle sitzen zwei Arten von Urteil, die sich trennen, sobald zwei Personen sie halten. Das eine entscheidet, ob das Artefakt die Forschungsfrage beantwortet, ob die Daten richtig dargestellt sind und was eine Darstellung an Kontext braucht, bevor sie gelesen werden darf. Das andere entscheidet ueber Arbeitsablauf, Technologie und die Gestalt des Artefakts, und es ist dieses Urteil, das einen Fehler in den Begriffen an den Agenten meldet, in denen der Agent arbeitet, also ueber die Kennung eines Elements. Wo beide Urteile bei einer Person zusammenfallen, ist das der hybride Fall. Wo das zweite fehlt, liegt die Grenze dessen, was die Methode erreicht.

## Was die Methode nicht leistet

Verifikation automatisiert sie nicht, und sie soll das auch nicht vorgeben. Verifikation ist genau die wissenschaftliche Arbeit, die die Verantwortungsteilung dem Menschen zuweist, und ihre Kosten sind der ehrliche Preis der Methode. Fuer die Bewertung KI-erzeugter Ergebnisse in editionswissenschaftlichen Aufgaben fehlen bis heute Benchmarks. Die Methode antwortet auf anderem Grund, indem sie die Pruefung dem Critical Expert und der deterministischen Schicht zuweist, sodass die Verifikation nicht auf einen Benchmark wartet, den es noch nicht gibt.
