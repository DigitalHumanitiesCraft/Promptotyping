---
title: Report Lane-Durchgang ZfdG-Einreichung
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: snapshot
language: de
version: 0.1
created: 2026-07-23
updated: 2026-07-23
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5 (Koordination) und Claude Opus 4.7 (Lanes)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Report
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/report
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-report
related: [paper-writing, journal, project]
---

# Report Lane-Durchgang ZfdG-Einreichung

Stichtagsbericht zum parallelen Lane-Durchgang vom 2026-07-23 mit dem Ziel, das Promptotyping-Paper sauber formuliert, kontextualisiert und formal passgenau zur ZfdG-Einreichung zu führen. Der Bericht konsolidiert sieben Opus-Agenten-Ergebnisse nach Koordinator-Verifikation und trägt die Abnahme-Listen für den Operator. Steuerdokument des Papers bleibt [paper-writing.md](paper-writing.md); dieser Bericht ist Momentaufnahme, seine offenen Punkte wandern nach Abnahme dorthin beziehungsweise nach ACTIVE-WORK.

## Tätigkeiten im Berichtszeitraum

Sieben Opus-Subagenten in zwei Wellen, dazu Koordinator-Arbeit (Fable 5). Welle 1, ZfdG-Venue-Analyse: KI-Workflow-Cluster (sechs Artikel), FDM-Cluster (sechs Artikel), Stil- und Formprofil (sechs Beiträge plus offizielle Vorgabenseiten). Welle 2, Lanes: A Paper-Durchgang (Lucina-Ausbau, Sprachpass 3–7, Referenzen), B Site-Konzeptvarianten (read-only), C FAIR-Infrastruktur (LICENSE, Licence-Abschnitt), E Novelty- und Schöch-Recherche (read-only). Koordinator: Venue-Entscheidung ZfdG dokumentiert, Formalia und tragende Zitate an Originalquellen gegengeprüft, Streichung der Reasoning-Prompt-Seitenlinie in 2.6 ausgeführt, `project.md`-Stand nachgezogen, Entscheidungen in `paper-writing.md` eingetragen.

## Status quo

**Paper** (`knowledge/paper.md`): Introduction und Sektion 2 waren durch; der Sprachpass 3–7 ist gelaufen, das Edition-Exemplar 5.3 ist die Notker-Edition (faktenverifiziert am realen Repo `DigitalHumanitiesCraft/notker-edition`), Lucina ist vollständig entfernt, die Reasoning-Prompt-Seitenlinie ist vollständig entfernt, zehn von elf offenen Referenzen sind quellengeprüft gefüllt. Es bleiben die in [paper-writing.md](paper-writing.md) geführten Prüfpunkte, darunter Abstract-Neufassung (zuletzt), Quantitäten-Bereinigung, Diss-Seitenzahlen, Grallert-Heftangabe.

**Repository**: LICENSE (MIT plus CC-BY-4.0-Inhaltsklausel), präziser Licence-Abschnitt, `CITATION.cff` konsistent mit `license: MIT`, README als Landkarte inklusive Paper-Abschnitt, Videos, Use-Case-Verweis. Technology Baseline und Vorlagen-Entwurf Technology liegen als publizierte Entwürfe.

**Grounded Vault** (`vault/`): auf Stand bis einschließlich der Positionierungs-Anker; Nachzieh-Runde definiert (siehe Offene Punkte).

## Ergebnisse

### ZfdG-Formalia (offiziell verifiziert)

Gattung Fachartikel (englische Fachartikel dort 12.000–14.000 Wörter, unser Umfang unauffällig). Einstieg über Exposé, max. 1.000 Wörter, mit Literaturliste und vorläufigem Inhaltsverzeichnis. Zweisprachiges Abstract deutsch/englisch, je max. 750 Zeichen. Fußnoten-Kurzbeleg Autor-Jahr (offizielle ZfdG-CSL-Datei für Zotero existiert), Bibliographie alphabetisch, PID vor URL, Softwarezitation formalisiert. Dezimale Nummerierung, Zieltiefe zwei Ebenen, Titel/Untertitel mit Punkt. Artikel-Lizenz CC BY-SA 4.0. Review wahlweise closed (vor Publikation, sechs Monate und mehr) oder open public (sofortige Publikation, hypothes.is). Britische Schreibung bleibt per Operator-Entscheidung; die ZfdG schreibt keine Variante vor.

### Feinschliff-Kandidaten Paper (zur Abnahme, je einzeln annehmbar)

Alle tragenden Zitate der Kandidaten 1–5 wurden vom Koordinator am Volltext wörtlich bestätigt; DOIs folgen dem Muster 10.17175/{id}.

Nach Paper-Sektion geordnet:

1. **2.3** Cremer/Paulmann 2025 (2025_006) als ZfdG-Beleg für die Format-Explizitheits-Achse (strukturiert gegen unstrukturiert) und als Brücke zu 6.2 (Modellierung erzeugt Differenzierung). Verdikt der Analyse: must-cite.
2. **2.3** Mähr/Federer/Kaspar 2026 (2026_006) für die Fundamentthese der menschlichen Datenarbeit ("Dateneingabe ... Verschmelzung von Quellenarbeit und Datenmodellierung", wörtlich bestätigt, Sektion 2.2 dort); zugleich Kemman-Trading-Zone-Instanz für 2.4. Must-cite.
3. **2.3** Schöch-Schulter verbreitern: Owens 2011 und Flanders/Jannidis 2019 in den Haupttext, Posner 2015 und Santa-Barbara-Statement in die Fußnote (alle Fundstellen verifiziert, Lane E). Borgman bleibt Genus, wird nicht Differentia (wäre zirkulär).
4. **2.5** SDD-Absatz ersetzen/erweitern nach dem Lane-E-Formulierungsvorschlag (fünf Frameworks mit belegten Daten; Kontemporaneität bei eigenständiger Genese; drei fehlende Schichten: Forschungsdaten, Verifikation/Epistemik mit Critical Expert, typisiertes Dokumentsystem). Belegte Datierung: Tessl 11/2024, BMAD 04/2025, Promptotyping-Blogpost 24.04.2025, Kiro 07/2025, OpenSpec 08/2025, Spec Kit 09/2025.
5. **2.5/6.2** Stanicka-Brzezicka 2026 (2026_005) als empirischer LLM-Grenzbefund und Beleg der Semantic-Web-Inversion ("grounded in curated, context-rich data", Sektion 6.1 dort, wörtlich bestätigt). Must-cite (leicht).
6. **2.6/6.2/6.3** Fischer/Pollin/Sahle/Scholger/Vogeler 2025 (2025_008) aufnehmen; eigene ZfdG-Vorarbeit, bislang nicht zitiert; belegt teiCrafter-Genealogie und liefert die Reproduzierbarkeits- und Evaluationseinwände, die 6.2/6.3 beantworten. Must-cite, höchste Priorität.
7. **6.3/6.4** Die Frontier-Modell-Spannung explizit adressieren: 2025_008 plädiert für freie, lokale Modelle als Reproduzierbarkeitsbedingung; Antwort im Paper über Dokument-statt-Artefakt-Reproduzierbarkeit plus Zugangs-Asymmetrie in 6.4.
8. **4.1** Andorfer 2026 (2026_003) als Editions-naher Statik-Beleg im Zielvenue (Definition und JS-Tooling-Verzicht wörtlich bestätigt); Abgrenzung des Erzeugungswegs (XSLT-deterministisch gegen dokumentgesteuerte Generierung) in einem Satz.
9. **4.1** Mariani 2025 (2025_012, PROV-A) als client-side/no-build-Präzedenzfall im Zielvenue.
10. **4.3** Datenvolumen-Marker `[to verify]` mit Andorfers Schnitzler-Werten (16.000 Editionseinheiten, 25 MB TEI-XML, wörtlich bestätigt) als externem Erfahrungsanker plausibilisieren; die eigene Grenzziehung bleibt als Operator-Erfahrungswert zu bestätigen.
11. **6.1/2.1** König 2026 (2026_002, "Fertig – vorerst") neben Hinrichs und Risam/Gil positionieren; deutschsprachiger Nachbarbegriff zur Disposable/Durable-Achse, Nicht-Zitation wäre im Zielvenue auffällig.
12. **4.2** Schonhardt 2026 (sb007_005, Unix-Prinzip) als theoretische Stütze der Monolith-Kritik; optional Bayerschmidt 2026 (2026_009) als zeitgleiches Explorations-Interface-Beispiel.
13. **6.2** optional Fischer/Kimmel/Puppe 2025 (2025_009) als externe GLAM-Korroboration (deterministische Nachprüfung, Experten-Prüfinterface).
14. **6.4** optional eine Halbzeile gegen den Data-Feminism-Reuse-Einwand (Lang/Suárez Cronauer wp_2026): FAIR-Qualität ersetzt die kritische Herkunftsprüfung nicht.
15. **4.1** optional Leipold et al. 2026 (2026_008, WikiFAIR) als Kontrastfolie (geteilte Infrastruktur gegen nulldependente Artefakte) in der Longevity-Argumentation.
16. **Formal** nach Freigabe der Fassung: Bibliographie auf ZfdG-CSL, Werkzeug-Fußnoten zusätzlich als Softwarezitationen in die Bibliographie, zweisprachiges Abstract, Exposé-Entwurf.

### Lane A (Paper-Durchgang, am Diff verifiziert, Commit `c07e65f`)

Lucina restlos entfernt (5.2-Zeile, 5.3-Exemplar); Notker-Exemplar im Fünf-Feld-Schema, alle Angaben am Repo verifiziert, Faktenkorrektur Repo-Owner (`DigitalHumanitiesCraft`, nicht `chpollin`); das Verifikations-Burden-Argument über die dokumentierte R-Disambiguierung kompensiert, Forward-Verweis auf 6.2 intakt. Sprachpass 3–7: acht Doppelpunkt-Konnektoren aufgelöst (dabei ein Etikettsatz getilgt), eine Negativ-Apposition umformuliert, Aphorismus-Schluss der Conclusion entschärft; Semikolon-Fälle und ein Signpost-Grenzfall bewusst dem Operator-Ermessen überlassen. Referenzen: zehn gefüllt und quellengeprüft (u. a. Pollin 2025c, Ruecker 2015 mit Autorkorrektur, Holmes/Takeda 2023, SycEval, Sarkar/Drosos); offen Grallert-Heftangabe (Preprint, Heft existiert noch nicht) sowie Baxter, Bleier, van Es (nicht im Auftrag).

### Lane B (Site-Konzept, Empfehlung)

Drei Varianten ausgearbeitet; Empfehlung Variante 2, die `#vorlagen`-Sektion als Hub mit stiller Sub-Navigation und vier Blöcken (Katalog, Konvention, Maschinenzugriff, Technology Baseline) über additive Sub-Anker, ohne Anker-Bruch und ohne ADR-1-Konflikt. Sektionsname bleibt "Vorlagen" ("Spezifikation" kollidierte mit der Specification-Vorlage). Vorentscheidungen beim Operator: Variante bestätigen; Vorlage Technology vault-first in den Katalog freigeben (erst danach 16. Zeile und Anker `#promptotyping-document-technology`). Die Baseline selbst ist unabhängig davon sofort einbindbar.

### Lane C (FAIR-Infrastruktur, abgeschlossen, Commits `c28cb17`, `b0e933c`)

LICENSE und Licence-Abschnitt umgesetzt, CITATION.cff konsistent. Generator-Spezifikation (Frontmatter zu CITATION.cff/codemeta.json) liegt als Textentwurf im Lane-C-Bericht der Session vor; Umsetzung gehört in ein eigenes Tooling-Repo, zusammen mit der vault-first anzulegenden Vorlage Publication.

### Lane E (Novelty und Schöch, Belege verifiziert)

SDD-Datierungssynopse (siehe Kandidat 4); Ergebnis stützt die bestehende 2.5-Formulierung der Kontemporaneität. Schöch-Anker (siehe Kandidat 3) mit verifizierten Fundstellen; Edmond 2020 verworfen (trägt die Differentia nicht), Sahle Reserve für ZfdG-Nähe.

## Offene Punkte und nächste Schritte

Operator-Entscheidungen (zurückgestellt am 2026-07-23, hier geführt bis zur Entscheidung):

1. Abnahme der Feinschliff-Kandidaten 1–16 (einzeln; "alle außer N" genügt als Antwort).
2. Review-Modus ZfdG (closed oder open public).
3. Site-Variante 2 bestätigen; Vorlage Technology vault-first freigeben.
4. zbz-ocr-tei öffentlich stellen (danach Fußnote).
5. Attribution der Übersetzungsmechanismus-Anregung.
6. Erfahrungswerte bestätigen (Dauer/Kosten der Projekttabelle, Datenvolumen-Grenze 4.3).
7. Notker-Fußnote mit Repo-URL gewünscht? (Derzeit fußnotenlos, spiegelbildlich zum ZBZ-Exemplar.)

Arbeitsschritte ohne Operator-Input (nächste Sessions):

- Einarbeitung der abgenommenen Kandidaten (Lane-A-Folgeauftrag), danach Abstract-Neufassung und Quantitäten-Bereinigung, dann Exposé-Entwurf (deutsch oder englisch, max. 1.000 Wörter).
- Grounded-Vault-Nachzieh-Runde: Chapter-Register auf das Zwei-Dokumente-Modell, drei dort notierte Paper-Korrekturen (llmdh-Fußnotenwortlaut "Advanced Prompting Techniques" und Datum 8.–11.09.2025; Köln-Standort nur host-gestützt; Metadatenstandard-Frage nicht im Blogpost 2025 belegt, Formulierung in 3.3 weichziehen), SDD-Datierung als Quelle.
- Echte Vault-Session (Obsidian): Vorlage Technology und Vorlage Publication in den Katalog, Konventions-Update Maschinenadresse, Paper-Stand-Abgleich.
- Site-Umsetzung der bestätigten Variante, danach Site-QA-Lane.

## Anhang mit Belegen

- Commits des Berichtszeitraums: `d382605` (Baseline, Vorlagen-Entwurf, README), `1b1e1dc`/`20bce29` (README-Korrekturen), `17b0c16` (E1 ZfdG), `c28cb17`/`b0e933c` (Lizenz), `545f7a5` (project.md), `c07e65f` (Lane A), dazu dieser Berichts-Commit.
- Verifikationen des Koordinators: ZfdG-Exposé-Pflicht und CC BY-SA an https://zfdg.de/p-wie-publizieren; Abstract-/Zitierregeln an https://zfdg.de/s-wie-style; wörtliche Zitatprüfung an https://zfdg.de/2026_006, https://zfdg.de/2025_006, https://zfdg.de/2026_005, https://zfdg.de/2026_003; YouTube-IDs per oEmbed; Lane-A-Diff per `git show c07e65f`; Lane-C-Dateien am Repo-Root.
- Die vollständigen Rohberichte der sieben Agenten liegen in den Session-Transkripten; ihre tragenden Aussagen sind oben destilliert, nicht ersetzt.
