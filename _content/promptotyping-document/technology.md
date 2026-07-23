---
title: Vorlage Technology
slug: technology
version: "0.1"
status: draft
source: Entwurf im Repo, vault-first-Aufnahme in den Katalog ausstehend
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/technology.md
---

# Vorlage Technology

Diese Vorlage strukturiert ein Technology-Baseline-Dokument, das projektübergreifende Technologie-Entscheidungen für eine Artefaktfamilie trägt und begründet. Das resultierende Dokument heißt typischerweise `technology-baseline.md` und wird zentral publiziert, sodass Projektinstanzen per URL darauf verweisen; die `architecture.md` einer Instanz dokumentiert dann nur den projektspezifischen Stack und die Abweichungen von der Baseline. Der erste Absatz des resultierenden Dokuments trägt den Zweck in einem Satz.

Die Vorlage unterscheidet sich von den übrigen Vorlagen des Katalogs in einem Punkt. Die anderen Vorlagen strukturieren Dokumente, deren Inhalt pro Projekt neu entsteht; ein Baseline-Dokument trägt wiederverwendbaren Inhalt, der für alle Projekte derselben Artefaktfamilie gilt. Es wird deshalb selten geschrieben und oft referenziert.

## Geltungsbereich

Die Funktion trägt, sobald mehrere Projekte denselben Artefakttyp bauen und die Stack-Begründung wiederverwendbar ist. Triggerkriterium: Es existiert eine Menge von Technologie-Regeln (Sprachwahl, Abhängigkeits-Politik, Hosting-Form, Sicherheits- und Nachhaltigkeits-Anforderungen), die ein Fachverantwortlicher für eine ganze Artefaktfamilie vertritt und die man kennen muss, um ein einzelnes Artefakt dieser Familie zu bewerten oder zu regenerieren. Der Leitfall ist das selbstständige statische Web-Tool; weitere Familien (Datenpipeline, TEI-Editions-Toolchain) können eigene Baselines tragen.

Die Funktion trägt nicht für die Architektur eines einzelnen Projekts; die gehört in `architecture.md` ([Vorlage Architecture](#promptotyping-document-architecture)). Sie trägt nicht für imperative Agenten-Anweisung; die gehört in den Action-Layer ([Vorlage Action-Layer](#promptotyping-document-action-layer)), der auf die Baseline verweisen kann. Ein Einzelprojekt ohne Familienzusammenhang braucht keine Baseline; dort genügt die Begründung in der eigenen `architecture.md`.

## Funktion des Dokuments

Das Dokument beantwortet, mit welchen Technologien Artefakte einer Familie gebaut werden und warum diese Regeln so lauten. Adressiert sind drei Lesergruppen. Ein Forschender oder Reviewer prüft, ob die Technologiewahl eines Projekts begründet ist, ohne die Begründung in jedem Repo suchen zu müssen. Ein Coding-Agent liest die Baseline als Vorgabe, bevor er ein Artefakt der Familie generiert oder regeneriert; die Regeln sind für ihn direkte Constraints. Der Methodenverantwortliche pflegt die Regeln an einer Stelle statt in jedem Repo.

Der Dokumenttyp ist Knowledge (deklarativ). Die Baseline sagt, was gilt und warum; wie ein Agent sich beim Bauen verhält, bleibt Action-Layer.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trägt jede Regel ihre Begründung. Eine Technologie-Vorgabe ohne Begründung ist eine Geschmacksentscheidung; die Baseline bindet jede Regel an ein prüfbares Argument (Generierbarkeit, Haltbarkeit, Sicherheit, Ressourcenlage) und, wo vorhanden, an eine externe Quelle.

Zweitens regelt es den Abweichungsfall mit. Eine Baseline, von der nicht abgewichen werden darf, ist ein Dogma; eine, von der stillschweigend abgewichen wird, ist wirkungslos. Die Baseline legt fest, dass Abweichungen in der `architecture.md` der Instanz mit Begründung dokumentiert werden, und macht die undokumentierte Abweichung zum Review-Befund.

Drittens benennt es die Grenzen der Artefaktfamilie. Wo das Format endet (Datenvolumen, Persistenz, Kollaboration), steht in der Baseline, samt dem Übergabepunkt an die nächste Zuständigkeit; das schützt vor der schleichenden Ausweitung eines Prototyps in Software mit Wartungspflichten.

## Frontmatter-Schema

Das Dokument folgt dem reduzierten Frontmatter-Pflichtkern aus der [Konvention Promptotyping Documents](#konvention-v0.1); `title`, `status`, `created`, `updated`. Da die Baseline projektübergreifend gilt, entfällt der `project:`-Block oder benennt das tragende Methodik-Repo. Empfohlen sind `language`, `version`, `authors` beziehungsweise `generated-with` und `machine-url`, weil die Baseline gerade für maschinelle Abrufung gebaut ist.

## Abschnitte im Detail

`## Warum diese Form` (Pflicht). Funktion: die Grundentscheidung für die Artefaktfamilie begründen. Inhalt: die Eigenschaften, die den Default motivieren, mit externen Quellen, wo der Fachdiskurs sie liefert.

`## Die Regeln` (Kern). Funktion: die operativen Vorgaben festlegen. Inhalt: pro Regel eine eigene Untersektion mit der Vorgabe und ihrer Begründung; wo eine Regel Ausnahmen kennt, stehen die Ausnahmekriterien explizit dabei (Muster Kompromissregel mit benannten Kriterien). Konkrete gelebte Beispiele aus realen Repos stützen die Regel.

`## Nachhaltigkeit` (empfohlen). Funktion: die Baseline gegen die externen Standards des Feldes stellen. Inhalt: Messung gegen die einschlägigen Prinzipienkataloge, ehrlich auch dort, wo der Artefakttyp im Default durchfällt, mit dem Weg, die Lücke zu schließen.

`## Grenzen und Übergabepunkt` (Pflicht). Funktion: das Ende der Artefaktfamilie markieren. Inhalt: die harten Grenzen des Formats und die Zuständigkeit, die jenseits davon trägt.

`## Anwendung in einer Projektinstanz` (Pflicht). Funktion: den Referenz- und Abweichungsmechanismus festlegen. Inhalt: wie `architecture.md` und Action-Layer auf die Baseline verweisen (Maschinenadresse), was die Instanz selbst führen muss und wie Abweichungen dokumentiert werden.

`## Quellen` (Pflicht, wo externe Quellen tragen). Funktion: die zitierten Standards und Diskursbeiträge nachweisen. Inhalt: Referenzen mit Autor, Jahr, Titel, DOI oder URL.

## Was nicht reingehört

- Projektspezifischer Stack und Modulstruktur; das gehört in die `architecture.md` der Instanz.
- Imperative Bau-Anweisungen an den Agenten; das ist Action-Layer.
- Designsystem und visuelle Vorgaben; die gehören in `design.md` ([Vorlage Design](#promptotyping-document-design)) beziehungsweise ein zentrales Designsystem-Dokument.
- Fachmethodische Regelwerke; die gehören ins Domänenwissen ([Vorlage Domänenwissen](#promptotyping-document-domain-knowledge)).

## Vorlage zum Befüllen

````markdown
---
title: Technology Baseline. [Artefaktfamilie]
status: draft
language: [de | en]
version: 0.1
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor]
generated-with: [Werkzeug, falls relevant]
machine-url: [statische URL dieses Dokuments]
---

# Technology Baseline. [Artefaktfamilie]

[Zweck-Satz. Für welche Artefaktfamilie die Baseline gilt und wie Instanzen auf sie verweisen.]

## Warum diese Form

[Eigenschaften, die den Default motivieren, mit Quellen.]

## Die Regeln

### [Regel]

[Vorgabe und Begründung. Ausnahmekriterien explizit, gelebte Beispiele aus realen Repos.]

## Nachhaltigkeit

[Messung gegen die einschlägigen Prinzipienkataloge, samt Lücken und Schließungsweg.]

## Grenzen und Übergabepunkt

[Harte Grenzen des Formats; Zuständigkeit jenseits davon.]

## Anwendung in einer Projektinstanz

[Referenzmechanismus, Pflichten der Instanz, Abweichungsdokumentation.]

## Quellen

[Autor, Jahr, Titel, DOI/URL.]
````

## Beispiel

Das Methodik-Repo führt `_content/technology-baseline.md` als Baseline für die Familie der selbstständigen statischen Web-Tools; Warum-Sektion mit Minimal Computing und Endings-Prinzipien, sieben Regeln einschließlich der Kompromissregel mit vier Kriterien, FAIR4RS-Messung mit dem Findability-Befund, Grenzen mit RSE-Übergabepunkt und der Anwendungsmechanismus über die Maschinenadresse.

## Begriffe

- Technology Baseline: projektübergreifendes Knowledge Document, das Technologie-Regeln und ihre Begründung für eine Artefaktfamilie trägt und von Projektinstanzen referenziert wird.
- Artefaktfamilie: Menge von Forschungsartefakten mit gleicher technischer Grundform (statisches Web-Tool, Datenpipeline), für die dieselben Technologie-Regeln gelten.
- Abweichungsdokumentation: Pflicht der Projektinstanz, jede Abweichung von der Baseline in der eigenen `architecture.md` mit Begründung zu führen.

## Versionshistorie

- 0.1 (2026-07-23): Entwurf, empirisch aus der Technology Baseline des Methodik-Repos. Vault-first-Aufnahme in den Vorlagen-Katalog ausstehend; bis dahin ist dieser Entwurf nicht Teil des freigegebenen Katalogs.

## Related

- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Architecture](#promptotyping-document-architecture)
- [Vorlage Action-Layer](#promptotyping-document-action-layer)
- [Vorlage Design](#promptotyping-document-design)
