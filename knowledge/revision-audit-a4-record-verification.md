---
title: Revision-Audit A4 — Empirische Aussagen gegen die Repository-Artefakte
project:
  name: Promptotyping Paper
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: de
version: 0.1
created: 2026-07-24
updated: 2026-07-24
authors: [Claude Opus 5, im Auftrag Christopher Pollin]
generated-with: Claude Code mit Claude Opus 5
related: [paper, paper-writing, revision-audit-a1, revision-audit-a2, revision-audit-a5-vault-coverage]
---

# Revision-Audit A4 — Empirische Aussagen gegen die Repository-Artefakte

Auftrag war die Prüfung jeder empirischen Aussage des Papers über die dokumentierten Projekte gegen die tatsächlichen Artefakte des jeweiligen Repositories. Anlass ist ein Stichprobenbefund, nach dem eine Aussage in Sektion 3.5 aus einem frühen Journalstand stammte und im Paper zu einer allgemeinen Eigenschaft verallgemeinert wurde. Geschrieben wurde ausschließlich diese Datei. In den Projekt-Repositories wurde nichts geändert und nichts committet.

## Vorgehen und Prüfmethode

### Beweisregel

Als Beleg zählen Datendateien, Code, Ausgabeverzeichnisse, Testsuiten, Git-Historie, GitHub-API-Zustände und öffentlich abrufbare URLs. Journale, Knowledge-Dokumente und READMEs zählen als Herkunftsnachweis einer Aussage und als Hilfe beim Verstehen dessen, was gemeint ist. Sie zählen nicht als Beleg für die Richtigkeit. Wo nur ein Journal eine Aussage trägt und die Artefakte schweigen, steht das als Befund.

Diese Regel hat eine Ausnahme, die ich benenne, weil sie mehrere Befunde in Sektion 5.4 betrifft. Für die Lehr- und Kooperationsfälle existieren keine Artefakte im Sinne der Regel; dort ist das Vault-Dokument des jeweiligen Termins die beste verfügbare Aufzeichnung, und ich weise das an jeder Stelle aus.

### Prüfstand

Das Paper bewegte sich während der Prüfung. Bei Beginn stand `knowledge/paper.md` auf Commit `baae1db`, am Ende auf `baff634`, MD5 `d7a8a3307d8cefde7081a2c6c1301d28`. Sektion 3.5 wurde von einer parallelen Lane zwischen meinem ersten und meinem zweiten Lesen ausgetauscht; die alte Aussage über die Selbsteinschätzung des Modells ist ersetzt durch ein konkretes Konfabulationsbeispiel. Ich prüfe den Endstand. Die Sektion-5.2-Tabelle und die Worked Cases in 5.3 waren zu Beginn und am Ende identisch.

### Werkzeuge und Zählweise

Gezählt wurde durchgehend selbst. Jede Zahl aus READMEs, Journalen oder aus dem Verifikationsdokument vom 2026-07-19 wurde nachgerechnet. Eingesetzt wurden Python-Einzeiler und kurze Skripte über die Ausgabedateien, `git log` und `git ls-tree` für historische Zustände, `pytest --collect-only -q -p no:cacheprovider` für Testzahlen (die Cacheprovider-Abschaltung verhindert einen Schreibvorgang im fremden Repo), die GitHub-API über `gh` für Sichtbarkeit, Forks, Releases und Pages, sowie `curl` und WebFetch für öffentliche URLs. Jeder Befund unten nennt Pfad und Zählweise.

### Prüfumfang

Durchgearbeitet wurden Sektion 1, 2.3, 2.5, 2.6, 3.2 bis 3.5, 4.1 bis 4.3, 5.1 bis 5.5, 6.3 bis 6.5 sowie alle Fußnoten mit empirischem Gehalt. Repositories wurden über das Projektregister im Vault aufgelöst.

### Grenze

Die Messung der Zeichenfehlerrate gegen Ground Truth für die HTR-Pipeline liegt bis Ende September bei einer Projektmitarbeiterin. Diese Messung habe ich nicht durchgeführt und ihr Ergebnis nicht vorweggenommen. Wo eine Aussage erst durch sie entscheidbar wäre, steht das Verdikt „nicht prüfbar" mit dieser Begründung.

---

## Befunde nach Sektionen

### Sektion 3.3 — Die Promptotyping Documents

**3.3-a. Der reduzierte Frontmatter-Kern.**

> „An earlier specification required eight fields. A survey of the real knowledge bases found that not a single repository satisfied that core in full. The core was reduced to the six fields the practice actually carries, `title`, `project`, `method`, `status`, `created`, `updated`."

Geprüft gegen `C:\Users\Chrisi\Documents\obsidian\Vault Operations\Konventionen\Konvention Promptotyping Documents.md` Zeile 157 und gegen das Befunddokument `Projects/Promptotyping/Methodenentwicklung/2026-06-13 - Promptotyping-Wissensbasen Exploration (Befund).md` Zeile 37. Das Befunddokument hält fest, dass ein Multi-Agent-Lauf 98 Git-Repos unter `Documents/GitHub/` inventarisierte, davon rund 53 mit `knowledge/`-Ordner und 43 als echte Wissensbasis gewertet, und dass kein einziges Repo den Acht-Felder-Pflichtkern vollständig erfüllte. Die Reduktion auf genau die sechs genannten Felder steht in der Konvention.

Zusätzlich habe ich den Sechser-Kern selbst gegen zwölf reale Wissensbasen ausgezählt (Skript: für jede `.md` im `knowledge/`-Ordner das YAML-Frontmatter extrahieren, die sechs Felder per Zeilenanfang-Regex suchen):

| Repo | md-Dateien | mit Frontmatter | mit allen sechs Feldern |
|---|---|---|---|
| szd-htr | 14 | 14 | 14 |
| zbz-ocr-tei | 14 | 14 | 14 |
| m3gim | 15 | 15 | 14 |
| notker-edition | 11 | 11 | 11 |
| klawiter-rescue | 8 | 8 | 8 |
| teiCrafter | 11 | 11 | 11 |
| FemPrompt_SozArb | 15 | 15 | 15 |
| CorrespExplorer | 15 | 0 | 0 |
| kulturpool-demo | 9 | 0 | 0 |
| wiiw-patent-analysis-demo | 6 | 0 | 0 |
| vetmed-wissensbilanz | 31 | 29 | 0 |
| db_for_medieval_legal_transactions | 7 | 2 | 2 |

**Verdikt: bestätigt.** Die Aussage über die Reduktion hält. Sie hat einen Zusatz verdient, siehe ungefragte Befunde.

**3.3-b. Deterministisch generierte Dokumente.**

> „Deterministically generated documents are rendered from source data by scripts and committed alongside the curated layer […] In one edition project, a set of Python scripts traverses the TEI-XML corpus and the project's schema and renders Markdown documents describing corpus structure, anomalies, and schema-versus-corpus mismatches […] Generated documents carry frontmatter naming them as generated and are not edited by hand."

Das Editionsprojekt ist SuGW. `pipeline/integrity.py` Zeile 583 bis 604 schreibt `pipeline/output/validation_report.md` über eine Funktion `_generate_markdown`, die referentielle Integrität, Normalisierung, Annotationsbefunde und Schemavalidierung über den gesamten Korpus rendert. Die Existenz und Funktion der Skripte ist damit belegt.

Zwei Teilaussagen halten nicht. Erstens ist die Datei nicht committet; `git ls-files | grep -i validation_report` liefert keinen Treffer, die getrackten `.md`-Dateien des Repos sind ausschließlich READMEs, Guidelines und die sieben Knowledge-Dokumente. Zweitens trägt der Report kein Frontmatter, sondern eine Prosa-Zeile „Generated: 2026-05-16 / Commit: `5f69ec9afc`". Eine Suche nach `^generated:` im Frontmatter über die `knowledge/`-Ordner von szd-htr, zbz-ocr-tei, m3gim, klawiter-rescue, notker-edition, teiCrafter und FemPrompt_SozArb liefert null Treffer. Die 505 Dateien in `FemPrompt_SozArb/generated/vault/` tragen Frontmatter, deklarieren sich darin aber nicht als generiert (`type: concept`, kein `generated`-Feld); die Kennzeichnung geschieht über die Ordnerlage.

**Verdikt: Abschwächung nötig.** Formulierungsvorschlag für den letzten Satz: „Generated documents are marked as such, in the record by their directory or by a generation header rather than by a dedicated frontmatter field, and they are not edited by hand."

**3.3-c. Der Vorlagenkatalog.**

> „The recurring document functions have been consolidated into a versioned, publicly published catalogue of templates on the method's documentation site (https://dhcraft.org/Promptotyping/) […] Each template carries a permanent public address."

`_content/promptotyping-document/` enthält sechzehn Vorlagen. `curl -s -o /dev/null -w "%{http_code}" https://dhcraft.org/Promptotyping/` liefert 200, `.../\_content/promptotyping-document/data.md` ebenfalls 200. Die maschinenlesbare Adressierung funktioniert also ohne Browser.

**Verdikt: bestätigt.**

### Sektion 3.5 — Worked Example, die HTR-Pipeline

**3.5-a. Die konfabulierte Lesung.** Dies ist der schwerwiegendste Einzelbefund des Audits.

> „At a difficult passage in a hastily written Kurrent manuscript the transcription carried the plausible-looking reading ‚Langentour Kantgewalt' where the source has ‚Laufenden', and nothing in the transcribed text marks the passage as doubtful."

Die Fundstelle ist `results/korrespondenzen/o_szd.1090_gemini-3.1-flash-lite-preview.json`. Das Objekt ist eine Postkarte an einen Korrespondenzpartner vom 5. Dezember 1901, Signatur SZ-LAS/B3.12. Die ursprüngliche Modellausgabe steht in der `edit_history` von Seite 2 und unverändert im Text von Seite 3, die dasselbe Blatt mit Farbskalen abbildet:

```
doch so gern um mich auf den Langentour[?] Kantgewalt[?]
zu halten.
```

Beide Wörter tragen den Unsicherheitsmarker `[?]`. Die Seite trägt insgesamt drei `[?]`. Die Gesamtkonfidenz des Objekts ist `medium`, mit der Begründung „Die Handschrift ist sehr flüchtig und weist einige schwer lesbare Wörter auf".

Der Halbsatz „nothing in the transcribed text marks the passage as doubtful" ist damit **widerlegt**. Die Stelle ist der Fall, an dem die Markup-Konvention getan hat, wofür sie da ist, und die Konfidenzstufe hat mitgezogen. Der dokumentierte Fehler ist eine markierte Falschlesung.

Zwei weitere Präzisierungen. Das Objekt ist eine Postkarte, kein Manuskript. Und die Korrektur zu „Laufenden" stammt aus einer Agent-Verifikation (`review.status = agent_verified`, `agent_model = claude-opus-4-6`), der korrigierte Text lautet „Laufenden[?]", trägt also weiterhin einen Unsicherheitsmarker. Die Formulierung „where the source has ‚Laufenden'" behauptet eine gesicherte Lesung, die im Repo als agentengestützter Vorschlag steht.

Herkunft des Fehlers: `knowledge/evaluation-results.md` Zeile 110 führt den Fall in einer Fehlertypologie-Tabelle als `| Nonsens | **Langentour Kantgewalt** | **Laufenden** | o_szd.1090 |`, also ohne die Marker. Zeile 114 desselben Dokuments verallgemeinert das zu „Bei unleserlichem Kurrent erfindet Gemini echte Woerter statt `[?]` zu setzen". Das Paper hat die markerlose Zitierform übernommen.

**Verdikt: widerlegt.** Formulierungsvorschlag: „At a difficult passage in a hastily written Kurrent hand the transcription carried the plausible-looking reading ‚Langentour[?] Kantgewalt[?]' where a later review reads ‚Laufenden[?]'. The uncertainty markers the prompts demand were set, and they located the doubt without resolving it; what the marker cannot do is tell a hesitant reading from an invented word, and that is the gap the verification concept had to close from outside the transcription step."

**3.5-b. Verteilung der Selbsteinschätzung.** Die im Auftrag genannte Vorgängeraussage steht nicht mehr im Paper. Da der Befund die Umformulierung trägt und für Sektion 6.2 verwertbar ist, halte ich meine eigene Auszählung fest.

Grundgesamtheit sind alle 2.470 Transkriptionsergebnisse (`results/*/*_gemini-*.json`, davon 2.452 Flash Lite und 18 Pro). Gezählt wurde das Feld `result.confidence`:

| Wert | Anzahl |
|---|---|
| high | 2.160 |
| medium | 262 |
| low | 14 |
| Feld fehlt | 34 |

Aufgeschlüsselt nach dem TEI-Objekttyp aus dem Kontextblock ergibt sich eine deutliche Differenzierung, nicht die im früheren Text behauptete Gleichverteilung:

| Objekttyp | n | high | medium | low |
|---|---|---|---|---|
| Zeitungsausschnitt | 305 | 292 | 5 | 0 |
| Typoskriptdurchschlag | 117 | 109 | 5 | 0 |
| Typoskript | 104 | 92 | 9 | 1 |
| Brief | 1.527 | 1.319 | 187 | 7 |
| Manuskript | 246 | 218 | 22 | 2 |
| Notizbuch | 30 | 5 | 20 | 4 |

Ein Notizbuch erhält in einem Sechstel der Fälle `high`, ein Zeitungsausschnitt in fast allen. Die Unsicherheitsmarker über den gesamten Bestand: 8.941 Vorkommen von `[?]` und 144 von `[...]` über 14.912.326 Transkriptionszeichen auf 19.068 Seiten, verteilt auf 571 der 2.470 Objekte. Der Systemprompt (`pipeline/prompts/system.md`, Regeln 3 und 4) verlangt beide Marker ausdrücklich.

**3.5-c. Das Annotationsprotokoll.**

> „An annotation protocol defines the transcription conventions precisely enough that two annotators working independently produce comparable error rates."

`knowledge/annotation-protocol.md` Zeile 26 formuliert das als Anforderung an das Protokoll: „Es muss so praezise sein, dass zwei Annotierende dasselbe Dokument unabhaengig transkribieren und vergleichbare CER-Werte erzielen (Inter-Annotator-Agreement)." Zeile 540 führt den zugehörigen Test unter den offenen Punkten: „Mindestens 2 Objekte sollten von 2 Personen unabhaengig transkribiert werden […] Welche Objekte?" `knowledge/verification-concept.md` Zeile 72 hält fest, dass das ursprünglich geplante manuelle 30-Objekt-Sample „nicht als eigener Arbeitsgang ausgefuehrt" wurde. In `results/groundtruth/` liegen 19 Dateien, davon 18 `_gt_draft.json`.

Das Paper macht aus einer Zielvorgabe eine erreichte Eigenschaft. Ob sie erreicht ist, wäre erst durch die ausstehende CER-Messung entscheidbar, die nicht Gegenstand dieses Audits ist.

**Verdikt: Abschwächung nötig.** Formulierungsvorschlag: „An annotation protocol fixes the transcription conventions and records the reason for each, and it sets inter-annotator agreement as the standard against which its own precision is to be measured."

**3.5-d. Die übrigen Aussagen der Sektion.** Fünf Aussagen halten gegen die Artefakte.

Die TEI-gesteuerte Zuweisung der Prompt-Varianten steht als Funktion `resolve_group(metadata, collection)` in `pipeline/tei_context.py` Zeile 285 und wertet `objecttyp` und `classification` aus dem TEI aus; `pipeline/config.py` Zeile 90 führt die neun Gruppen A bis I; `pipeline/prompts/` enthält die zugehörigen Dateien.

Das Drei-Status-Modell steht in `docs/app.js` Zeile 926 bis 936 als Mensch-geprüft, Agent-geprüft, Ungeprüft mit genau der im Paper genannten Autoritätsordnung; `knowledge/verification-concept.md` Zeile 27 datiert die Zusammenfassung des früheren Vier-Tier-Modells auf eine Operator-Entscheidung vom 2026-06-10. Beides bestätigt.

Die Bewahrung des Modelloriginals bei menschlicher Korrektur ist als `edit_history` auf 63 Seiten im Bestand nachweisbar, mit `original_transcription`, `edited_by`, `edited_at` und `source`.

Das Verifikationskonzept spezifiziert die vier genannten Bausteine (Ground-Truth-Strategie, automatische Qualitätssignale, Modellkonsensus mit Judge, agentenbasierte Vision-Checks). Dass die Signale von außerhalb des Transkriptionsschritts flaggen, ist in `pipeline/quality_signals.py` implementiert; die Marker-Dichte ist dort seit v1.5 ausdrücklich informativ und nicht mehr Teil von `needs_review`.

Die Pipeline und der Viewer sind über den Agenten entstanden. 150 der 167 Commits tragen einen Claude-Co-Author-Trailer.

**3.5-e. Der Bestandsumfang.**

> „tens of thousands of facsimile scans"

Die README nennt 20.318 Faksimiles zu 2.486 Objekten. Meine eigene Zählung über die Ergebnisdateien ergibt 19.068 transkribierte Seiten zu 2.470 Objekten; `docs/catalog.json` führt 2.452 Objekte mit summiert 17.132 `pageCount`. Die Größenordnung liegt bei gut zwanzigtausend, also am unteren Rand dessen, was „tens of thousands" trägt.

**Verdikt: Abschwächung nötig, niedrige Priorität.** Formulierungsvorschlag: „some twenty thousand facsimile scans".

### Sektion 4.1 — Der Artefakttyp

**4.1-a. Das FAIR4RS-Audit.**

> „An audit of one documented project, the worked example of Section 3.5, against the full criteria found no persistent identifier, no versioned releases, and no machine-readable citation metadata […] the audit is deposited as a Verification Document in that repository (`knowledge/verification-fair4rs.md`)."

Das Dokument existiert, ist auf den 2026-07-23 datiert und geht Prinzip für Prinzip durch. Zwei der drei Lücken bestehen fort: `git tag` liefert null, die GitHub-API meldet null Releases, eine DOI existiert nicht. Die dritte Lücke wurde am selben Tag geschlossen. Commit `2641b28` („Add publication metadata and unify licensing") legte `CITATION.cff` und `codemeta.json` an; beide liegen im Repo-Wurzelverzeichnis, die `.cff` mit ORCID und SPDX-Lizenz MIT, die `codemeta.json` nach CodeMeta 3.0. Das Verifikationsdokument selbst kündigt diesen Schritt im Maßnahmenblock an.

Die Aussage ist im Präteritum formuliert und damit für den Auditzeitpunkt korrekt. Eine Leserin, die das Repo aufruft, findet den dritten Punkt widerlegt.

**Verdikt: Abschwächung nötig.** Formulierungsvorschlag: „An audit of one documented project, the worked example of Section 3.5, against the full criteria found in July 2026 no persistent identifier, no versioned releases, and no machine-readable citation metadata; the citation metadata has since been added, the identifier gap stands."

**4.1-b. Die Provenienzerklärung.**

> „Every artefact carries a provenance declaration stating that it was generated, from which documents, with which models and tools, and how it was verified."

Stichprobe über sieben ausgelieferte Frontends. Der SZD-HTR-Viewer, die CorrespExplorer-Seiten, das M³GIM-Frontend, das VetMedAI-Dashboard (nennt Promptotyping, LLM und Methode in `docs/index.html`), die Notker-Edition (`docs/methode.html` und `docs/vault.html`) und die Klawiter-Seite (`docs/vocab/index.html` plus About-Seite) tragen eine solche Erklärung. Das Kulturpool-Frontend trägt keine; `index.html` enthält 126 nichtleere Zeilen, darin einen Footer und eine Lizenzangabe, aber keinen Hinweis auf Erzeugung, Modelle oder Verifikation.

**Verdikt: Abschwächung nötig, niedrige Priorität.** Der Satz steht in einer Liste normativer Richtlinien, wird aber im Indikativ gelesen. Vorschlag: den Punkt als Anforderung markieren („Each published artefact is to carry a provenance declaration…") oder den Ausreißer in Sektion 5.5 als Befund benennen.

### Sektion 4.2 — Typologie der Interfaces

> „A multi-source optical character recognition (OCR) comparison viewer with layout overlay is the paradigmatic case."

Der Fall ist die ZBZ-Pipeline. `knowledge/pipeline.md` Zeile 58 ff. führt Stufe 2 mit zwei OCR-Engines (`-e mistral`, `-e gemini`), Stufe 2a und 2b mit zwei LLM-Korrekturläufen und Stufe 3b als `generate_layout_overlays.py` mit „PNGs + side-by-side compare". Die Ausgabeverzeichnisse `output/mistral_results/`, `output/gemini_corrected_a/`, `_b/`, `output/llm_corrected*/` und `output/layout/` existieren. Der öffentliche Viewer unter `https://chpollin.github.io/zbz-ocr-tei/` lädt und zeigt die Korpusübersicht.

**Verdikt: bestätigt.**

### Sektion 5.1 — Prinzip der Darstellung

**5.1-a. Das Verifikationsprotokoll im Knowledge-Ordner.**

> „All quantitative figures were verified against the public repositories in July 2026; the verification protocol is itself a document in this paper's knowledge base."

Das Protokoll war `knowledge/verification-paper-figures.md`. Commit `ffbd3dd` vom 2026-07-23 („Restructure knowledge base to two-document paper model") hat die Datei gelöscht; der Commit-Body sagt es ausdrücklich: „pin the vault source identifier of the removed verification file to its last commit." Der aktuelle `knowledge/`-Ordner enthält keine Verification-Datei. Der Text lebt als Repräsentation unter `vault/00_representation/documents/verification-paper-figures-2026-07-19.md`, mit Identifier-Pinning auf Commit `7c209645`.

**Verdikt: widerlegt.** Formulierungsvorschlag: „the verification protocol is itself a document in the paper's evidence layer, pinned to the commit at which it was written."

Zusätzlich ist „against the public repositories" nicht durchgängig zutreffend, siehe 5.2-a.

**5.1-b. Der Grounded Vault als Companion.**

Der Vault existiert in der beschriebenen Schichtung: 76 Quellen unter `_sources/`, 13 Repräsentationen, Destillate und 126 Claims. `python tools/validate.py .` aus `vault/` meldet 0 Fehler und 0 Warnungen. Die Vorlagen sind einzeln als statisches Markdown über HTTPS abrufbar (siehe 3.3-c). Die angekündigte archivierte Release mit persistentem Identifikator existiert noch nicht (null Tags, null Releases im Companion-Repo), was der Text als Zukunftsform formuliert und damit korrekt trägt.

Zum Zustand der Testsuite des Vaults siehe die ungefragten Befunde.

### Sektion 5.2 — Das Projektinventar

**5.2-a. Öffentliche Zugänglichkeit.** Prioritär.

> „The table's projects run from early 2025 to early 2026, each traceable through a publicly accessible repository containing Promptotyping Documents, code, and data."

Sichtbarkeitsabfrage über `gh repo view … --json visibility` für alle Tabellenzeilen:

| Zeile | Repo | Sichtbarkeit |
|---|---|---|
| Hans Gross Kriminalmuseum | chpollin/km | public |
| CorrespExplorer | DigitalHumanitiesCraft/CorrespExplorer | public |
| **HerData** | **chpollin/HerData** | **private** |
| coOCR-HTR | DigitalHumanitiesCraft/co-ocr-htr | public |
| VetMedAI Wissensbilanz | DigitalHumanitiesCraft/vetmed-wissensbilanz | public |
| Kulturpool Explorer | chpollin/kulturpool-demo | public |
| wiiw Patent Analysis | DigitalHumanitiesCraft/wiiw-patent-analysis-demo | public |
| **Medieval Legal Transactions** | **chpollin/db_for_medieval_legal_transactions** | **private** |
| M³GIM | DigitalHumanitiesCraft/m3gim | public |
| **ZBZ OCR/TEI Pipeline** | **chpollin/zbz-ocr-tei** | **private** |
| Notker Edition | DigitalHumanitiesCraft/notker-edition | public |
| Klawiter Bibliography Rescue | chpollin/klawiter-rescue | public |
| FemPrompt SozArb | chpollin/FemPrompt_SozArb | public |

Drei der dreizehn Zeilen sind nicht öffentlich. Für ZBZ trägt Fußnote `[^zbz]` die Einschränkung ausdrücklich („the repository itself is pending release, subject to partner approval"), und das öffentliche Frontend lädt. Für HerData und Medieval Legal Transactions steht keine Einschränkung im Text. Bei HerData kommt hinzu, dass auch die in der README genannte Live-Demo `https://chpollin.github.io/HerData/` HTTP 404 liefert und die GitHub-API für das Repo keine Pages-Site kennt; das Projekt ist von außen gegenwärtig nicht erreichbar. Für Medieval Legal Transactions existiert ebenfalls keine Pages-Site.

**Verdikt: widerlegt.** Formulierungsvorschlag: „The table's projects run from mid-2025 to mid-2026. Most are traceable through a publicly accessible repository containing Promptotyping Documents, code, and data; three are held back by partner agreements or by unresolved third-party data rights, and the companion records which."

**5.2-b. Der Zeitraum der Tabellenprojekte.** Erstellungs- und letzte Arbeitsdaten aus `gh repo view` und `git log`: Klawiter-Repo April 2025, Hans Gross Juli bis September 2025, FemPrompt ab Juli 2025, HerData und M³GIM ab Oktober 2025, CorrespExplorer Dezember 2025, wiiw Januar 2026, coOCR und VetMedAI Januar 2026, ZBZ ab Januar 2026, Medieval ab Februar 2026, Kulturpool März 2026, Notker März 2026. Substanzielle Arbeit reicht bis Juli 2026 (m3gim bis 2026-07-24, klawiter bis 2026-07-18, zbz und teiCrafter bis 2026-07-10).

**Verdikt: Abschwächung nötig.** „from early 2025 to early 2026" verkürzt das Ende um rund ein halbes Jahr. Vorschlag im obigen Satz mitformuliert.

**5.2-c. Die Formationsphase.**

> „The record opens with a formation phase, from 2023 to early 2025 […] The remaining formation projects, among them a two-hour experiment on Stefan Zweig Digital metadata, the CVMA (Corpus Vitrearum Medii Aevi) stained-glass project, and the imareal room-object project"

Das CVMA-Repo `chpollin/stained-glass-metadata-annotation-tool` wurde am 2025-07-12 angelegt, die Commits laufen bis 2025-08-26. Für das imareal-Raum-Objekt-Projekt existieren zwei Klone, `room-object--vis` mit sechs Commits vom 2024-09-19 und `DigitalHumanitiesCraft/imareal-room-object` mit fünf Commits vom 2025-10-01/02. Mindestens das CVMA-Projekt und der jüngere imareal-Klon liegen außerhalb des Fensters „2023 to early 2025".

**Verdikt: Abschwächung nötig.** Vorschlag: das Fenster auf „from 2023 to mid-2025" erweitern oder die Formationsphase ohne Enddatum als „the projects that precede the consolidated vocabulary" fassen.

Für die Wheaton-Netzwerkvisualisierung („January 2025 […] the first promptotype") finde ich weder lokal noch auf GitHub ein Repository oder ein datiertes Artefakt. **Verdikt: nicht prüfbar.** Fehlen würde ein versioniertes Artefakt oder ein datierter Export.

Die Dauerangabe „two-hour experiment" ist eine Erfahrungsgröße ohne deterministisch prüfbares Korrelat. **Nicht prüfbar.**

**5.2-d. teiCrafter als Ursprungspunkt.**

> „teiCrafter (2023) is the origin point, an intuitive Vibe-Coding build without method; the tool remains in active development today"

Die README von `DigitalHumanitiesCraft/teiCrafter` datiert die erste Arbeit auf Herbst und Winter 2023 und verweist auf eine FORGE-2023-Präsentation vom 10. Oktober 2023 mit DOI 10.5281/zenodo.8425163. Das Repo trägt 208 Commits vom 2026-02-05 bis 2026-07-23, ist öffentlich und liefert den Editor über GitHub Pages aus. Ursprungsjahr und fortdauernde Entwicklung sind bestätigt.

Die zugehörige Fußnote hält dagegen nicht:

> „[^teicrafter]: teiCrafter is a Custom GPT that converts plain text to TEI XML (P5) from a mapping rule under Editor-in-the-Loop quality control, without a standalone code repository."

Die Beschreibung trifft den Stand von Februar 2024, wie ihn die genannte Dokumentationsseite `https://digedtnt.github.io/teiCrafter/` festhält (die Seite lädt, ist auf den 22. Februar 2024 datiert und beschreibt einen Custom GPT). Der heutige teiCrafter ist ein browserbasierter, verlustfreier TEI-XML-Editor mit eigenem öffentlichem Code-Repository, elf Knowledge-Dokumenten, Testordner, `CITATION.cff` und `codemeta.json`. Der Teilsatz „without a standalone code repository" ist widerlegt, und Fußnote und Fließtext beschreiben zwei verschiedene Artefakte unter einem Namen.

**Verdikt: widerlegt.** Formulierungsvorschlag: „[^teicrafter]: teiCrafter began in 2023 as a Custom GPT converting plain text to TEI XML (P5) from a mapping rule under Editor-in-the-Loop control (documented at https://digedtnt.github.io/teiCrafter/). It is today a browser-based lossless TEI editor with its own public repository, https://github.com/DigitalHumanitiesCraft/teiCrafter."

**5.2-e. Die Tabellenzahlen im Einzelnen.**

*Hans Gross Kriminalmuseum, „TEI + LIDO, 3.892 objects".* `km_archive/metadata/all_objects.json` und `enhanced_objects_v2.json` enthalten je 3.892 Einträge (`len(json.load(...))`). `Promptotyping/DATA.md` und `ReadMe.md` weisen 1.657 TEI-Karteikarten und 2.235 LIDO-Museumsobjekte aus, in Summe 3.892. **Bestätigt.**

*CorrespExplorer, „CMIF/TEI, 11.576 letters".* `docs/data/hsa.xml` enthält 11.576 `<correspDesc>`-Elemente, `docs/data/hsa-letters.json` 11.576 Einträge im Array `letters`. **Bestätigt, exakt.**

*CorrespExplorer, „First complete vault (7 docs, 46 journal phases, 74+ tests)".* Siehe 5.3-b.

*HerData, „TEI/Wikidata, 1.793 women-related letters (of 15.312)".* `data/ra-cmif.xml` enthält 15.312 `<correspDesc>`. In `docs/data/persons.json` summieren sich die `letter_count`-Werte der 448 kuratierten Frauen auf exakt 1.793. **Bestätigt, exakt.** Zur Präzision: die Datei führt daneben `mention_count` mit einer Summe von 6.246; „women-related" meint hier Korrespondentinnenschaft, nicht Erwähnung.

*HerData, „bias transparency section".* `docs/content/startpage/onboarding-step2-mapbias_en.md` und `docs/content/howto/data-heterogeneity_en.md` thematisieren die ungleiche Abdeckung ausdrücklich („Not all persons are documented to the same depth […] the map shows only those with a geocoordinate"). **Bestätigt der Sache nach.**

*coOCR-HTR, „Prototype in one day, 567 tests, community fork (ÖAW)".* Die Zählung der `it(`- und `test(`-Aufrufe über `docs/tests/*.test.js` ergibt 567 in 18 Dateien und 144 `describe`-Blöcken. **Exakt bestätigt.** Der erste Arbeitstag 2026-01-16 trägt 33 der 197 Commits, und alle fünfzehn Knowledge-Dokumente tragen `created: 2026-01-16`; das stützt „Prototype in one day". Zum Fork: die API meldet drei Forks. Zwei liegen null Commits vor dem Upstream. Der dritte, dessen Kontokennung die Österreichische Akademie der Wissenschaften ausweist, liegt 43 Commits voraus und wurde zuletzt am 2026-06-27 bespielt. **Bestätigt**, einschließlich der Einordnung als einziger Fall.

*VetMedAI Wissensbilanz, „~80 Excel files", „Largest knowledge base (~30 documents)".* `find . -iname "*.xls*"` liefert 77 Dateien, alle unter `data/`. `find knowledge -name "*.md"` liefert 31. Beide Näherungen halten. **Bestätigt.** Zur Superlativ-Formulierung siehe die ungefragten Befunde.

*Kulturpool Explorer, „Kulturpool API, ~19k objects", „Parallel agent orchestration (2 instances)".* `knowledge/Datenbestand.md` Zeile 10 nennt einen Gesamtbestand von 19.192 Objekten auf API-Seite. Der ausgelieferte Index `data/index.json` enthält 15.565 Objekte (`len(json.load(...))`). Da die Tabellenspalte „Data" heißt und die Quelle benennt, hält die Angabe; die Differenz zum ausgelieferten Datensatz ist erwähnenswert. **Bestätigt mit Vorbehalt.**

Die Parallel-Orchestrierung ist aus den Artefakten nicht rekonstruierbar. Das Repo hat zwei Commits („init" vom 2026-03-17 und den Metadaten-Commit vom 2026-07-23), führt kein Journal und keine Prozessdokumentation. `knowledge/Expertengruppe.md` passt inhaltlich zu der im Companion beschriebenen zweiten Instanz („simulating an interdisciplinary expert group"), belegt den parallelen Betrieb aber nicht. **Verdikt: nicht prüfbar.** Fehlen würde ein Journal oder eine Sitzungsaufzeichnung.

*wiiw Patent Analysis, „Patent cooperation CSV".* `data/db_networkCoPat_fake.rds` plus `read_rds.py`; `knowledge/data.md` Zeile 8 nennt 137.990 Zeilen. Die Quelle ist ein R-Datensatz, aus dem CSV abgeleitet wird; `docs/exploration/**/*.csv` sind die Ableitungen. Die Spaltenangabe „CSV" beschreibt damit das Arbeitsformat der Analyse. **Bestätigt mit Vorbehalt**, kein Änderungsbedarf.

*Medieval Legal Transactions, „~3.600 TEI-XML (~3.100 released)", „~190-test regression suite".* `find sources -name "*.xml" | wc -l` liefert 3.611; die Summe über die `done`-Unterordner ergibt 3.092 (2.023 + 578 + 352 + 54 + 38 + 34 + 13). Der generierte Validierungsreport bestätigt unabhängig „Files total: 3611". Die Zählung der `def test_`-Funktionen über `pipeline/tests/*.py` ergibt 192. **Alle drei bestätigt.**

*M³GIM, „49 decisions".* Siehe 5.3-d.

*ZBZ, „286 PDFs, ~4.150 pages", „13 knowledge docs, nine verified stages".* `find data/source -iname "*.pdf" | wc -l` liefert 286. Die Summe der `page_count`-Werte über die 286 Einträge in `data/doc_metadata.json` ergibt 4.152. Der `knowledge/`-Ordner enthält 14 Dateien, davon `index.md` als Navigationsdokument, also 13 Inhaltsdokumente. **Diese drei bestätigt.** Zu „nine verified stages" siehe 5.3-a.

*Notker Edition, „DOCX, Psalm 2 (13 verses)".* `data/tei/psalm2.xml` führt sieben `<div type="verse">` mit den Nummern 1-2, 3-5, 6, 7, 8-9, 10-11 und 12. Der Text von Vers 13 („Cum exarserit in breui ira eius. beati omnes qui confidunt in eo") steht innerhalb des Div für Vers 12, in fünf Zeugenlesarten. `knowledge/editorial-guidelines.md` Zeile 386 dokumentiert das ausdrücklich („Versgrenze 12/13 | DOCX hat nur ‚2,12' | Vers 13 als Stub, Daten in Vers 12"). Die dreizehn Verse sind inhaltlich vollständig vorhanden. **Bestätigt.**

*Klawiter, „MediaWiki SQL/BLOB, 6.296 entries", „7-stage pipeline + curation interface (1 day, ~250 tests)".* Zur Zahl 6.296: `data/output/census-report.json` weist für Namensraum 0 exakt 6.296 Seiten aus, die README erklärt die beiden koexistierenden Zählungen (6.296 Quellseiten, 5.179 Nicht-Redirect-Einträge im Frontend-JSON, was ich mit `len(d["entries"])` bestätigt habe). Die Referenzeinheit „entries" für die Quellseiten ist vertretbar. **Bestätigt.**

Zur Stufenzahl: `pipeline/` enthält acht nummerierte Skripte (`01_extract`, `02_fix_encoding`, `03_parse_entries`, `03b_llm_enrich`, `03c_normalize`, `04_classify`, `05_to_jsonld`, `06_validate`). `knowledge/pipeline.md` Zeile 22 schreibt „It runs in 8 stages", die README schreibt „Python pipeline (8 steps)". **Widerlegt**, Korrektur auf acht.

Zu „1 day": `knowledge/journal.md` führt die Sessions 1, 1b, 2, 3, 4, 5, 6, 7, 8 und 9 sämtlich unter dem 2026-03-29, darunter Session 7 mit der EIL-Kurationsschnittstelle und Session 9 mit der Explorationsschnittstelle. `git log` bestätigt 38 Commits an diesem Tag. **Bestätigt.**

Zu „~250 tests": `def test_`-Zählung über `tests/**/*.py` ergibt 266 in 22 Dateien. `python -m pytest --collect-only -q` meldet „413/487 tests collected (74 deselected)"; die Abwahl folgt aus `pytest.ini` (`-m "not llm and not semantic"`). **Widerlegt**, keine der beiden Zählweisen ergibt 250. Formulierungsvorschlag für die Tabellenzelle: „Data rescue: 8-stage pipeline + curation interface (1 day, 266 test functions)".

*FemPrompt SozArb, „326 academic papers", „505-file vault".* `corpus/papers_metadata.csv` enthält 326 Datenzeilen, `corpus/zotero_export.json` 326 Einträge. `find generated/vault -type f | wc -l` liefert exakt 505. **Beide exakt bestätigt.**

**5.2-f. Der Wachstumsvorbehalt.**

> „Several repositories have kept growing since the verified build states; in those cases the figures report the verified state."

Für ZBZ trifft das zu. Für M³GIM und CorrespExplorer nicht: die Tabellenzahl 49 entspricht einem Stand vom 2026-03-19, nicht dem geprüften Stand vom 2026-07-19 (129), und die Zahl 34 für die CorrespExplorer-User-Stories entspricht keinem Stand des Repos.

**Verdikt: widerlegt für zwei Zeilen.** Der Vorbehalt trägt erst, wenn die betroffenen Zahlen entweder datiert oder nachgezogen sind.

### Sektion 5.3 — Worked Cases

**5.3-a. ZBZ, „nine verified stages" und „nine-stage pipeline".** Prioritär.

Die Stufenzahl. `knowledge/pipeline.md` Zeile 58 ff. führt eine Tabelle mit sechs Hauptstufen (1 bis 6) und zehn Unterstufen (1a, 2a, 2b, 3a, 3b, 5b, 5b+, 5c), zusammen sechzehn Zeilen. `knowledge/project.md` Zeile 136 ff. führt sechs Meilensteine M0 bis M5, davon M3 gestrichen. Eine Neun findet sich in keiner der beiden Gliederungen.

Das Wort „verified" wiegt schwerer. Aus den 285 Manifesten unter `output/tei_final/*_manifest.json` habe ich die Workflow-Status der drei Ströme ausgezählt:

| Strom | unverifiziert | in_arbeit | verifiziert |
|---|---|---|---|
| ocr | 284 | 1 | 0 |
| layout | 284 | 0 | 1 |
| tei | 285 | 0 | 0 |

Von 855 Strom-Status sind 853 `unverifiziert`. `knowledge/project.md` Zeile 143 nennt als Zustand von M5 „Data delivered; all streams `unverifiziert` as handover default (E66/E67); scholarly curation lies with ZBZ". Und `knowledge/pipeline.md` hält zu E66 fest: „the former agent screening is abolished (no human had granted the ‚APPROVED' statuses; the agent certified itself)."

**Verdikt: widerlegt, beide Bestandteile.** Formulierungsvorschlag für die Tabellenzelle: „Full pipeline infrastructure (13 knowledge docs, six-stage pipeline with verification interfaces)". Für 5.3: „13 knowledge documents governing a six-stage pipeline with verification interfaces at each stage".

Die Konsequenz reicht in den Punkt Epistemic Yield hinein:

> „the interfaces interrupt the error cascade that characterises multi-stage automated pipelines, and expert judgement is applied at defined milestones, where it discriminates."

Der erste Halbsatz beschreibt die gebaute Möglichkeit und hält. Der zweite behauptet vollzogene Praxis, die die Manifeste nicht zeigen; die fachwissenschaftliche Kuration liegt beim Partner und hat begonnen an einem einzigen Layout-Strom. **Verdikt: Abschwächung nötig.** Vorschlag: „the interfaces interrupt the error cascade that characterises multi-stage automated pipelines by giving expert judgement a defined place at each milestone; the corpus was handed over with every stream marked unverified, and the scholarly verification lies with the partner institution."

**5.3-b. ZBZ, Kosten und Bauzeit.**

> „OCR processing cost less than 10 EUR. The initial build took approximately six weeks, and development has continued since."

Zur Kostenangabe finde ich im Repo kein Korrelat. Eine Suche nach Währungsangaben über `knowledge/*.md` und `reports/*.md` liefert nur qualitative Aussagen („API costs are negligible" in `pipeline.md` Zeile 93, „Fee unchanged" als Entscheidung E7). **Verdikt: nicht prüfbar.** Fehlen würde eine Kostenaufstellung oder ein API-Abrechnungsartefakt.

Zur Bauzeit: der erste Commit datiert auf 2026-01-29, der letzte auf 2026-07-23, insgesamt 306 Commits. In den ersten sechs Wochen (bis 2026-03-12) liegen 74 Commits, knapp ein Viertel. Nach Monaten: Januar 13, Februar 31, März 110, April 1, Mai 60, Juni 55, Juli 36. Der Begriff „initial build" ist aus den Artefakten nicht abgrenzbar, weil M4 (schemavalides TEI über den Gesamtkorpus) deutlich später erreicht wurde. **Verdikt: nicht prüfbar in der vorliegenden Form.** Vorschlag, falls die Angabe bleiben soll: sie als Erfahrungswert kennzeichnen und den realen Commit-Zeitraum danebenstellen („the work runs from late January to July 2026 across some three hundred commits").

**5.3-c. ZBZ, agentengenerierte Codebasis.**

> „a Python codebase generated and maintained entirely through the agent, whose generation the repository's commit history carries."

288 der 306 Commits tragen einen Claude-Co-Author- oder Generierungs-Trailer (`git log --format="%b" | grep -ci "co-authored-by: claude\|generated with"`). Die Behauptung, dass die Commit-Historie die Genese trägt, ist damit belegt. Das Wort „entirely" ist bei 94 Prozent eine leichte Überzeichnung; ich halte es für vertretbar, weil die restlichen Commits Merge- und Metadaten-Commits sind.

**Verdikt: bestätigt.**

**5.3-d. CorrespExplorer, die vier Kennzahlen.**

> „the first complete vault of the record, initially 7 documents, 34 user stories, 46 journal phases, 74+ tests."

*7 Dokumente initial.* Über die Commit-Reihe (`git ls-tree -r --name-only $c | grep -c "knowledge/.*\.md$"` je Commit) wächst der Ordner am 2025-10-19 von 4 auf 5, dann auf 7, verharrt dort über vierzehn Commits und geht dann auf 8. Der Sieben-Dokument-Zustand ist real. **Bestätigt.**

*34 User Stories.* `docs/knowledge/user-stories.md` enthält 37 `### US-`-Überschriften mit den lückenlosen Kennungen US-01 bis US-37. Die Datei wurde zuletzt am 2025-12-18 geändert, der letzte Repo-Commit datiert auf 2025-12-19; zwischen dem Verifikationslauf vom 2026-07-19 und heute kann sich nichts verändert haben. Die eigene Fallseite des Companions (`_content/case-studies/corresp-explorer.md` Zeile 20) schreibt „siebenunddreissig User Stories". **Widerlegt**, korrekt sind 37. Zur Herkunft des Fehlers siehe die ungefragten Befunde.

*46 Journalphasen.* `docs/knowledge/JOURNAL.md` trägt 49 `## `-Überschriften, davon 42 mit Phasenbezeichnung, die höchste ist Phase 46. Die Nummerierung hat Lücken (Phase 31 fehlt) und eine Doppelung (Phase 7 zweimal). Die Zahl 46 bezeichnet die höchste vergebene Marke. **Abschwächung nötig.** Vorschlag: „journal phases numbered up to 46".

*74+ Tests.* Die Suiten unter `docs/js/tests/` registrieren Tests als Objekte mit `name:`-Feld innerhalb eines `tests`-Arrays. Insgesamt enthalten die Dateien 74 `name:`-Felder, davon fünf die Suite-Namen selbst. Die Testfälle: aggregation 11, cmif-parser 13, dom-cache 9, formatters 26, state-manager 10, zusammen 69. **Widerlegt**, korrekt sind 69 Testfälle in fünf Suiten; die 74 zählen die Suite-Namen mit.

Formulierungsvorschlag für 5.3 und die Tabellenzelle: „the first complete vault of the record, initially 7 documents, 37 user stories, journal phases numbered up to 46, and 69 tests in five suites".

**5.3-e. CorrespExplorer, die übrigen Aussagen.**

*12 koordinierte Ansichten.* `docs/explore.html` trägt zwölf `data-view`-Buttons (overview, map, persons, letters, timeline, topics, places, network, mentions-flow, chronik, activity, comparison). **Exakt bestätigt.**

*Sechs Visualisierungstypen evaluiert, zwei mit dokumentierter Begründung verworfen.* Ich finde in `docs/knowledge/design.md` und `learnings.md` keine Evaluationsliste von sechs Typen und keine zwei begründeten Verwerfungen. Das Journal führt in Phase 34 die Entfernung eines Compare-Features und in Phase 12 ein „GND-Enrichment - deprecated", was zwei dokumentierte Verwerfungen sind, aber keine Exploration von sechs Visualisierungstypen. **Verdikt: nicht prüfbar.** Fehlen würde ein Explorationsdokument, das die sechs Kandidaten und die Ausscheidungsgründe führt.

*Erste empirische Beobachtung von Kontextdegradation bei etwa halber beworbener Fenstergröße.* Das Repo führt Context Rot qualitativ (`docs/knowledge/paper/interface-genesis-as-research.md` Zeile 119: „Akkumulierte Fehlentscheidungen im langen Kontext. Gegenstrategie: Regelmaessige Context-Bereinigung, JOURNAL.md als externes Gedaechtnis"). Eine Quantifizierung auf etwa fünfzig Prozent findet sich im Repo nirgends; die Zahl steht ausschließlich in den eigenen Companion-Texten (`_content/case-studies/corresp-explorer.md` Zeile 24, `_content/glossar.md` Zeile 99). **Verdikt: Abschwächung nötig.** Vorschlag: „The project also produced the record's first observation of context degradation well inside the advertised context window, recorded qualitatively in its process documentation and not measured."

**5.3-f. Notker, die Edition.** Sechs Aussagen halten vollständig.

Der Knowledge-Ordner enthält elf `.md`-Dateien, davon `INDEX.md` als Navigation und einen `_drafts`-Ordner; die neun inhaltlichen Dokumente sind architecture, data, design, editorial-guidelines, journal, offene-korrekturen, project, specification plus Index. **„nine-document knowledge base" bestätigt.**

Die drei funktionalen Schichten liegen als `<seg type="psalm">` (33), `<seg type="translation">` (71) und `<seg type="commentary">` (50) vor. **Bestätigt.**

Das konfigurierbare Drei-Slot-Layout steht in `docs/index.html` Zeile 934 als „SLOT SYSTEM — three configurable slots with content pool" mit `data-slot="A|B|C"`. **Bestätigt.**

Die IIIF-Anbindung an CSg 0021 über e-codices steht in `docs/index.html` Zeile 21 als `e-codices.unifr.ch/metadata/iiif/csg-0021/manifest.json` und in `data/tei/psalm2.xml` Zeile 99. **Bestätigt.**

Die synoptische Zeugenvergleichung führt genau fünf Zeugen (`<witness xml:id="wit-G|wit-R|wit-H|wit-A-psa|wit-C-psa">`). **Bestätigt.** Der Wiener Notker steht als `<div type="parallel_tradition" source="#wiener_notker">`. **Bestätigt.**

Die R-Disambiguierung steht in `knowledge/offene-korrekturen.md` Abschnitt 1.4 unter der Überschrift „R-Disambiguierung noch nicht durch Auftraggeber bestätigt", mit Priorität hoch. **Bestätigt**, einschließlich der Formulierung „still awaiting the commissioning scholar's confirmation".

**5.3-g. M³GIM, die Kennzahlen.**

*„25+ sessions".* `knowledge/journal.md` führt Sessions bis 59 (letzter Eintrag 2026-07-24), ältere unter `knowledge/_archive/journal-sessions-01-47.md`. **Bestätigt**, die Formulierung untertreibt.

*„49 documented decisions at the verified build state, and the register has since grown".* Über die Commit-Reihe von `knowledge/entscheidungen.md` und dem Nachfolger `knowledge/decisions.md` habe ich die eindeutigen E-Kennungen je Commit gezählt:

| Datum | Commit | eindeutige E-IDs |
|---|---|---|
| 2026-02-25 | 5ba6267 | 39 |
| 2026-03-04 | 7f05dc9 | 40 |
| **2026-03-19** | **8aa2d9c** | **49** |
| 2026-04-18 | 1dccb05 | 91 |
| 2026-06-21 | 283dbee | 108 |
| **2026-07-19** | **dd48000** | **129** |
| heute | HEAD | 129 |

Die Zahl 49 war ein realer Zustand, aber am 2026-03-19. Der „verified build state" ist der Prüflauf vom 2026-07-19, und dort standen 129. **Verdikt: widerlegt in der Zuordnung.** Formulierungsvorschlag: „49 documented decisions in March 2026, a register that has since grown to well over a hundred" oder, konsistent zur übrigen Tabelle, die Zahl auf den geprüften Stand ziehen.

*„an eight-tab archive explorer".* `docs/index.html` trägt elf `tab-bar__tab`-Buttons, davon drei mit `hidden` (mobilitaets-atlas, repertoire, biogramm). Sichtbar sind acht (bestand, chronik, statistik, indizes, karte, netzwerk, verknuepfungen, korb). **Bestätigt.**

*„the data model evolves through it".* Der Entscheidungsregister trägt die Modellentscheidungen, etwa E-103 bis E-105 als „Modellierungs-Audit gegen RiC-O 1.1 und AgRelOn" und E-127 als „Erfassungsschema v2, Migration des Altbestands". **Bestätigt der Sache nach.**

### Sektion 5.4 — Die Lehrfälle

Für diesen Abschnitt existieren keine Artefakte im Sinne der Beweisregel. Was existiert, sind Workshop-Repositories und Vault-Dokumente. Ich weise beides getrennt aus.

**5.4-a. AI Winter School (Februar 2026).** Das Vault-Dokument `Teaching/Workshops/2026-02-17 ACDH AI Winter School.md` nennt 16.–20.02.2026 mit Vortrag am 17.02.2026 am ACDH-CH Wien, ganztägig. Das deckt sich mit Fußnote `[^winterschool]`. Der genannte Selbstlernpfad `https://digitalhumanitiescraft.github.io/ai-coding-literacy` gehört zum öffentlichen Repo `DigitalHumanitiesCraft/ai-coding-literacy`. **Datum und Ort bestätigt (Vault-Beleg), Repository bestätigt (Artefakt).** Ob die Teilnehmenden alle vier Phasen durchliefen und einen lauffähigen Prototyp erzeugten, ist aus den Artefakten nicht entscheidbar. **Nicht prüfbar.**

Zum Datensatz: Fußnote `[^winterschool]` schreibt „the workshop dataset is public (https://osf.io/2s3ze)". Die OSF-API löst die GUID 2s3ze auf ein Dateiobjekt namens `DataAnalyses.zip` auf, 333 KB, angelegt am 2023-02-27, im öffentlichen Knoten `du39z` mit dem Titel „Intelligence and active/passive Enhancement" (angelegt 2022-03-22). Öffentlich ist der Datensatz. „The workshop dataset" liest sich aber, als sei er im oder für den Workshop entstanden. **Verdikt: Abschwächung nötig, niedrige Priorität.** Vorschlag: „the dataset worked on is a public OSF deposit (https://osf.io/2s3ze)".

**5.4-b. Data-Steward-Modul (Januar 2026, 210 Minuten).** Das Vault-Dokument `Teaching/Data Steward Graz/2026-01-09 Promptotyping Data Steward Graz.md` nennt 09.01.2026, 09:00–12:30, „210 Min. brutto, ca. 180 Min. netto", Universitätskurs Data Steward, Modul C.4 Forschungsdatenmanagement. **Bestätigt (Vault-Beleg), exakt in Datum und Dauer.**

**5.4-c. Museumsverband-Workshop (April 2026).** Fußnote `[^museum]` nennt den 24. April 2026 am Naturhistorischen Museum Wien. Das Vault-Dokument `Teaching/Workshops/2026-04-24 Promptotyping und Wissensmanagement Museumsbund NHM Wien/` nennt Datum, Ort (Kurssaal, NHM Wien) und Veranstalter (Museumsbund Österreich) übereinstimmend und beschreibt Workshop 1 als „Vom eigenen Datensatz zum Prototyp", was den Fließtext („taught the path from collection data to functional tools") trägt. **Bestätigt (Vault-Beleg).**

Der als Demonstrationsmaterial genannte Screencast `https://youtu.be/31Y6uRLnkQA` lädt (HTTP 200) und trägt den Titel „Wissens- und Projektmanagement mit Obsidian und Claude Code. Einführung". Er gehört zum zweiten Halbtag desselben Termins, während der Fließtext den Promptotyping-Halbtag beschreibt. **Abschwächung nötig, niedrige Priorität.** Vorschlag: den Screencast dem zweiten Halbtag zuordnen oder die Fußnote auf „the reference screencast of the accompanying knowledge-management workshop" umstellen.

Anmerkung zur Vollständigkeit: der Museumsbund-Zusammenhang umfasst drei Termine (12.02.2026 „Programmieren 2.0" am NHM Wien, 20.04.2026 „Kann KI kulturgeschichtliche Objekte bestimmen" in Salzburg mit eigenem öffentlichen Repo `chpollin/objekt-bestimmung-workshop-2026`, 24.04.2026 am NHM Wien). Der Fließtext nennt einen davon, was als Auswahl zu lesen ist.

**5.4-d. Videodokumentierte Fälle.** Beide in `[^videos]` genannten URLs laden. Die Titel lauten „Einführung in Promptotyping. (Teil 1)" und „Einführung in Promptotyping. (Teil 2, Live Demo mit Claude Code)". Der beschriebene didaktische Basisfall („building a dashboard from a large set of Excel files") passt zum VetMedAI-Bestand von 77 Excel-Dateien. **Bestätigt, soweit über Titel und Erreichbarkeit prüfbar.**

**5.4-e. Dokumentierte Drittnutzung.**

> „Documented third-party use beyond teaching settings, the community fork of the coOCR-HTR workbench by a researcher at the Austrian Academy of Sciences, is the one instance in the record, and there is little of it yet."

Siehe 5.2-e unter coOCR. **Bestätigt**, einschließlich der Einordnung als Einzelfall.

### Sektion 5.5 — Lesart der Evidenz

> „the documented cases converge technically on vanilla JavaScript, static deployment, and frontend-only architecture throughout."

Stichprobe über die ausgelieferten Frontends: CorrespExplorer, M³GIM, Notker, Klawiter, SZD-HTR-Viewer, Kulturpool und VetMedAI liefern alle statisch aus `docs/` beziehungsweise dem Repo-Wurzelverzeichnis, ohne Build-Chain. Vendorierte Bibliotheken liegen als Dateien im Repo (`HerData/docs/lib/deck.gl/dist.min.js`, `maplibre-gl`, `kulturpool-demo/lib/`), was die Kompromissregel aus 4.1 beschreibt. `node_modules` finden sich in coOCR (Vitest als Testwerkzeug) und im SuGW-Editionsrepo (Build-Skripte), nicht im ausgelieferten Artefakt.

**Verdikt: bestätigt.**

> „At the other pole the record holds bounded yield where the documents stayed thin, and it documents no outright failure."

Diese Aussage lässt sich aus den Artefakten weder bestätigen noch widerlegen, weil sie eine Bewertung über den Gesamtbestand ist. **Nicht prüfbar.** Ich merke an, dass sie im Companion bereits Gegenstand einer Korrektur war (Commit `e8b6ea8`).

### Sektion 6.3 bis 6.5

**6.4-a. Paralleler Agentenbetrieb.**

> „The documented record explicitly characterises monitoring several parallel agents as unsustainable over extended periods."

Der Satz enthält seine eigene Belegbehauptung („explicitly characterises"). Das Kulturpool-Repo, auf das die Aussage im Companion zurückgeht, hat zwei Commits und führt kein Journal. Eine Suche nach „unsustainable", „nicht durchhaltbar", „parallele Agenten" über die `knowledge/`-Ordner von szd-htr, zbz-ocr-tei, m3gim, klawiter-rescue und FemPrompt_SozArb liefert einen einzigen, inhaltlich unbezogenen Treffer (zbz `journal.md` Zeile 303, „The E92/E94 wave was built by parallel agents"). Die einzige Fundstelle mit dem behaupteten Inhalt sind die eigenen Paper-Vorstufen (`_content/paper/03-four-phases.md` Zeile 103 und `04-projects.md` Zeile 74), die ihrerseits auf „the process documentation" verweisen. Das Audit A5 kommt vault-seitig zum selben Ergebnis.

**Verdikt: nicht prüfbar.** Fehlen würde eine Prozessdokumentation, die die Aussage trägt. Formulierungsvorschlag, falls die Erfahrung erhalten bleiben soll: „Sustained multi-agent operation adds a practical concern that the record carries as experience rather than as measurement: monitoring several parallel agents does not hold over extended periods."

**6.5-a. Zwei Fälle außerhalb der Digital Humanities.**

> „two documented cases already operate outside the digital humanities, in economic research data and in social work research"

Der wirtschaftswissenschaftliche Fall ist `DigitalHumanitiesCraft/wiiw-patent-analysis-demo` (öffentlich, 26 Commits, sechs Knowledge-Dokumente, Patentkooperationsdaten). Der sozialarbeitswissenschaftliche Fall ist `chpollin/FemPrompt_SozArb` (öffentlich, 326 Papers, 505-Dateien-Vault). **Bestätigt.**

**6.3-a. Deterministische Schicht.**

> „Generated documents and transformation scripts re-run identically, so the path from source data to shipped derived data is repeatable even where the generation of the code was not."

Die deterministischen Pipelines existieren und sind ausführbar (SuGW `pipeline/cli.py`, Klawiter `pipeline/run_pipeline.py`, SZD-HTR `pipeline/build_viewer_data.py`, ZBZ `scripts/`). Ob sie identisch wiederlaufen, habe ich nicht durch Neuläufe geprüft, weil das Schreibvorgänge in fremden Repos bedeutet hätte. Die LLM-gestützten Stufen dieser Pipelines (ZBZ Stufe 1a, 2a, 2b, 3a; Klawiter 03b; SZD-HTR die Transkription) sind ihrerseits nicht deterministisch, was der Satz mit „generated documents and transformation scripts" implizit ausklammert.

**Verdikt: nicht prüfbar in Teilen.** Eine Präzisierung wäre möglich: „the deterministic stages of those pipelines re-run identically", weil mehrere der dokumentierten Pipelines Modellaufrufe als eigene Stufen führen.

---

## Übersichtstabelle

| # | Aussage (Sektion) | Verdikt | Priorität |
|---|---|---|---|
| 1 | „nothing in the transcribed text marks the passage as doubtful" (3.5) | widerlegt | hoch |
| 2 | „nine verified stages" / „nine-stage pipeline" (5.2, 5.3) | widerlegt | hoch |
| 3 | „each traceable through a publicly accessible repository" (5.2) | widerlegt | hoch |
| 4 | „the verification protocol is itself a document in this paper's knowledge base" (5.1) | widerlegt | hoch |
| 5 | „teiCrafter […] without a standalone code repository" (`[^teicrafter]`) | widerlegt | hoch |
| 6 | „expert judgement is applied at defined milestones, where it discriminates" (5.3, ZBZ) | Abschwächung nötig | hoch |
| 7 | „34 user stories" (5.3, CorrespExplorer) | widerlegt (korrekt 37) | mittel |
| 8 | „74+ tests" (5.2, 5.3, CorrespExplorer) | widerlegt (korrekt 69) | mittel |
| 9 | „7-stage pipeline" (5.2, Klawiter) | widerlegt (korrekt 8) | mittel |
| 10 | „~250 tests" (5.2, Klawiter) | widerlegt (266 Funktionen, 487 gesammelt) | mittel |
| 11 | „49 decisions at the verified build state" (5.2, 5.3, M³GIM) | widerlegt in der Zuordnung | mittel |
| 12 | „in those cases the figures report the verified state" (5.2) | widerlegt für zwei Zeilen | mittel |
| 13 | „two annotators […] produce comparable error rates" (3.5) | Abschwächung nötig | mittel |
| 14 | „no machine-readable citation metadata" (4.1) | Abschwächung nötig (inzwischen vorhanden) | mittel |
| 15 | „Generated documents carry frontmatter naming them as generated" (3.3) | Abschwächung nötig | mittel |
| 16 | „monitoring several parallel agents as unsustainable" (6.4) | nicht prüfbar | mittel |
| 17 | „Parallel agent orchestration (2 instances)" (5.2, Kulturpool) | nicht prüfbar | mittel |
| 18 | „the record's first empirical observation of context degradation at roughly half" (5.3) | Abschwächung nötig | mittel |
| 19 | „evaluated six visualisation types and discarded two" (5.3) | nicht prüfbar | mittel |
| 20 | „from 2023 to early 2025" (Formationsphase, 5.2) | Abschwächung nötig | mittel |
| 21 | „from early 2025 to early 2026" (Tabellenzeitraum, 5.2) | Abschwächung nötig | niedrig |
| 22 | „OCR processing cost less than 10 EUR" (5.3) | nicht prüfbar | niedrig |
| 23 | „initial build took approximately six weeks" (5.3) | nicht prüfbar in dieser Form | niedrig |
| 24 | „tens of thousands of facsimile scans" (3.5) | Abschwächung nötig | niedrig |
| 25 | „Every artefact carries a provenance declaration" (4.1) | Abschwächung nötig | niedrig |
| 26 | „the workshop dataset is public" (`[^winterschool]`) | Abschwächung nötig | niedrig |
| 27 | „the reference screencast used as demonstration material" (`[^museum]`) | Abschwächung nötig | niedrig |
| 28 | „~19k objects" (5.2, Kulturpool) | bestätigt mit Vorbehalt | niedrig |
| 29 | Wheaton als erster Promptotype, Januar 2025 (5.2) | nicht prüfbar | niedrig |
| 30 | „re-run identically" (6.3) | nicht prüfbar in Teilen | niedrig |
| 31 | 11.576 Briefe (5.2, 5.3) | bestätigt, exakt | — |
| 32 | 12 koordinierte Ansichten (5.3) | bestätigt, exakt | — |
| 33 | 1.793 von 15.312 Briefen (5.2) | bestätigt, exakt | — |
| 34 | 3.892 Objekte, TEI + LIDO (5.2) | bestätigt, exakt | — |
| 35 | 567 Tests (5.2) | bestätigt, exakt | — |
| 36 | 326 Papers, 505-Dateien-Vault (5.2) | bestätigt, exakt | — |
| 37 | 6.296 Einträge (5.2) | bestätigt | — |
| 38 | 286 PDFs, ~4.150 Seiten, 13 Knowledge-Dokumente (5.2, 5.3) | bestätigt | — |
| 39 | ~3.600 TEI-XML, ~3.100 released, ~190 Tests (5.2) | bestätigt | — |
| 40 | ~80 Excel, ~30 Dokumente (5.2) | bestätigt | — |
| 41 | Notker: 9 Dokumente, 3 Schichten, 3 Slots, 5 Zeugen, CSg 0021, Wiener Notker, offene R-Frage (5.3) | bestätigt, alle | — |
| 42 | M³GIM als Acht-Tab-Explorer (5.3) | bestätigt | — |
| 43 | coOCR-Prototyp an einem Tag; Klawiter an einem Tag (5.2) | bestätigt | — |
| 44 | ÖAW-Fork als einziger Drittnutzungsfall (5.4) | bestätigt | — |
| 45 | Drei-Status-Modell, Edit-History, Vier-zu-Drei-Konsolidierung, TEI-gesteuerte Prompt-Gruppen (3.5) | bestätigt, alle | — |
| 46 | Acht-Felder-Kern von keinem Repo erfüllt, Reduktion auf sechs (3.3) | bestätigt | — |
| 47 | Vorlagenkatalog öffentlich und maschinenlesbar abrufbar (3.3, 5.1) | bestätigt | — |
| 48 | teiCrafter weiter in aktiver Entwicklung (5.2) | bestätigt | — |
| 49 | ZBZ-Codebasis agentengeneriert, Commit-Historie trägt sie (5.3) | bestätigt | — |
| 50 | Multi-Source-OCR-Vergleich mit Layout-Overlay als paradigmatischer Fall (4.2) | bestätigt | — |
| 51 | Data-Steward-Modul 210 Minuten, Winter School 17.02.2026, Museumsbund 24.04.2026 (5.4) | bestätigt (Vault-Beleg) | — |
| 52 | Zwei Fälle außerhalb der DH (6.5) | bestätigt | — |
| 53 | Technische Konvergenz auf Vanilla JS und statische Auslieferung (5.5) | bestätigt | — |

---

## Entscheidungsbedürftige Punkte

**E1. Die Konfabulationsstelle in 3.5 trägt das Gegenteil des Behaupteten.** Der Fall `o_szd.1090` zeigt eine Falschlesung, die das Modell mit zwei `[?]` markiert und deren Objektkonfidenz auf `medium` steht. Als Beleg dafür, dass die Markierung fehlt, ist er widerlegt. Als Beleg dafür, dass ein Marker die Unsicherheit lokalisiert, ohne sie zu beheben, ist er stark, und er stützt die Verifikationsarchitektur der Sektion genauso gut. Zu entscheiden ist, ob die Stelle in diesem Sinn umgeschrieben oder gegen ein anderes Beispiel getauscht wird. Falls getauscht: die Fehlertypologie in `szd-htr/knowledge/evaluation-results.md` führt fünf weitere Fälle, deren Markerstand ich nicht einzeln geprüft habe.

**E2. Der ZBZ-Fall ist der Verifikationsexemplar des Papers und trägt die Verifikation nicht.** Von 855 Strom-Status sind 853 `unverifiziert`, und die Projektentscheidung E66 hat die frühere agentengestützte Freigabe genau deshalb abgeschafft, weil kein Mensch sie erteilt hatte. Zu entscheiden ist, ob der Fall als Beleg für vollzogene Expertenverifikation stehen bleibt oder auf das umgestellt wird, was er wirklich zeigt, nämlich eine gebaute Verifikationsinfrastruktur mit dokumentiertem Übergabezustand. Die zweite Lesart ist für Sektion 6.2 der stärkere Beleg, weil sie den Selbstzertifizierungsbefund mitliefert.

**E3. Drei Tabellenzeilen verweisen auf nicht öffentliche Repositories.** Für ZBZ ist die Einschränkung gesetzt. Für HerData und Medieval Legal Transactions nicht, und HerData ist derzeit auch über GitHub Pages nicht erreichbar. Zu entscheiden ist zwischen drei Wegen: die Repos öffnen, den Satz in 5.2 auf den realen Zustand umstellen, oder die betroffenen Zeilen mit einer Fußnote versehen, die den Grund nennt.

**E4. Der Umgang mit Momentaufnahmen ist über die Tabelle nicht einheitlich.** M³GIMs 49 stammt aus dem März 2026, CorrespExplorers 34 aus keinem Zustand, ZBZs Zahlen sind aktuell. Der Vorbehaltssatz in 5.2 behauptet Einheitlichkeit. Zu entscheiden ist die Regel, entweder jede Zahl datieren oder jede Zahl auf einen einheitlichen Stichtag ziehen. Das Verifikationsdokument vom 2026-07-19 hat dieselbe Wahl bereits als editorisch offen markiert.

**E5. Die Fußnote zu teiCrafter beschreibt ein anderes Artefakt als der Fließtext.** Zu entscheiden ist, ob die Fußnote den historischen Custom GPT und den heutigen Editor beide führt oder ob der Fall im Paper auf den Ursprung beschränkt bleibt und der heutige Editor unerwähnt.

**E6. Die Kosten- und Dauerangaben sind Erfahrungswerte.** „less than 10 EUR", „approximately six weeks", „two-hour experiment", „one day". Für „one day" gibt es bei coOCR und Klawiter einen harten Artefaktbeleg, für die übrigen nicht. Zu entscheiden ist, ob die nicht belegbaren Angaben als Erfahrungswerte gekennzeichnet, gestrichen oder durch die prüfbaren Commit-Zeiträume ersetzt werden.

---

## Bestätigte Aussagen

Der größere Teil der geprüften Zahlen hält, und mehrere halten exakt. Ich hebe hervor, was von außen nachrechenbar ist, weil das die belastbare Substanz der Evidenzsektion ausmacht.

Exakt bestätigt sind 11.576 CMIF-Briefe, 12 koordinierte Ansichten, 1.793 frauenbezogene Briefe aus 15.312, 3.892 Objekte des Kriminalmuseums mit der Aufteilung 1.657 TEI und 2.235 LIDO, 567 Tests der coOCR-Workbench, 326 Papers und ein Vault aus 505 Dateien. Nah an der Angabe liegen 4.152 statt „ungefähr 4.150" ZBZ-Seiten, 3.611 statt „~3.600" TEI-Dateien mit 3.092 statt „~3.100" freigegebenen, 192 statt „~190" Tests im Editionsprojekt, 77 statt „~80" Excel-Dateien und 31 statt „~30" Wissensdokumenten.

Der Notker-Fall hält vollständig, in allen sieben geprüften Einzelheiten, einschließlich der offenen R-Disambiguierung, die im Repo als hoch priorisierter offener Punkt geführt wird. Das ist der am dichtesten belegte Worked Case des Papers.

Für die HTR-Pipeline halten alle Prozessaussagen der Sektion 3.5 außer den beiden benannten: die TEI-gesteuerte Zuweisung der neun Prompt-Gruppen, das Drei-Status-Modell mit genau der behaupteten Autoritätsordnung, die Bewahrung des Modelloriginals in der Edit-History, die operatorgestützte Konsolidierung von vier auf drei Stufen am 2026-06-10, die vier Bausteine des Verifikationskonzepts und die agentengestützte Erzeugung von Pipeline und Viewer.

Die Methodenaussagen der Sektion 3.3 halten. Der Acht-Felder-Kern wurde tatsächlich von keiner der 43 untersuchten Wissensbasen erfüllt, und der reduzierte Sechser-Kern ist in sieben von zwölf von mir geprüften Repositories lückenlos getragen. Der Vorlagenkatalog ist öffentlich, versioniert und für einen Agenten ohne Browser als statisches Markdown mit HTTP 200 abrufbar.

Die Drittnutzungsaussage hält präzise. Von drei Forks der coOCR-Workbench trägt genau einer eigene Entwicklung, 43 Commits vor dem Upstream, und die Kontokennung weist ihn der genannten Institution zu. Die Zurückhaltung des Papers („there is little of it yet") ist damit richtig kalibriert.

---

## Ungefragte Befunde

**U1. Die Testsuite des Grounded Vault im Companion prüft nichts.** `vault/tests/test_validate.py` fährt gegen `vault/examples/minimal` und `vault/examples/broken`. Der Ordner `vault/examples/` existiert im Companion nicht. Folge: `python -m pytest tests -q` aus `vault/` meldet drei bestandene und einen fehlgeschlagenen Test, und die drei bestandenen bestehen leer, weil der Validator auf einem nicht existierenden Pfad nichts findet. Der fehlschlagende Test ist derjenige, der beweisen soll, dass der Validator alle zehn Defektklassen erkennt. Zum Vergleich: das Vorlagen-Repo `DigitalHumanitiesCraft/grounded-vault` führt `examples/minimal` und `examples/broken` und meldet vier bestandene Tests. Der Companion hat beim Kopieren die Fixtures verloren. Die Meldung „0 error(s), 0 warning(s)" auf dem echten Vault steht damit ohne die Gegenprobe, dass der Validator überhaupt anschlägt. Das berührt die Aussage in 5.1, der Companion sei „that claim made inspectable".

**U2. Das Verifikationsdokument vom 2026-07-19 hat mindestens eine Zahl invertiert, und das Paper hat die Inversion übernommen.** Der Befund `^c8` lautet „CorrespExplorer, ‚7 documents' und ‚37 user stories'. Real today: 13 knowledge files, 34 unique US-IDs. […] correct 37 to 34." Real sind 37 US-Kennungen und 13 Knowledge-Dateien; die Zahlen 37 und 34 sind vertauscht. Die Fallseite des Companions hatte vor der Korrektur die richtige Zahl. Der Claim `vault/20_claims/correspexplorer-knowledge-userstory-count-2026-07-19.md` reproduziert die Inversion, und das Paper folgt ihr. Das ist derselbe Mechanismus, dessentwegen dieses Audit beauftragt wurde, eine Ebene höher: eine agentengeschriebene Prüfung ist selbst eine Behauptung und braucht die Gegenprobe an den Artefakten.

**U3. Der ZBZ-Selbstzertifizierungsbefund ist ungenutzte Evidenz für Sektion 6.2.** `knowledge/pipeline.md` hält zu E66 fest, dass die Agent-Screening-Stufe abgeschafft wurde, weil kein Mensch die „APPROVED"-Status erteilt hatte und der Agent sich selbst zertifiziert hatte. Das ist ein dokumentierter, datierter Fall des Versagens agentengestützter Selbstprüfung aus dem eigenen Bestand, und es ist genau die Gefahr, gegen die Sektion 6.2 die Autoritätsordnung stellt. Das Paper führt den Fall nicht.

**U4. Die Schemavalidität des Editionskorpus ist ein ungenanntes Datum.** Der generierte Validierungsreport von SuGW (`pipeline/output/validation_report.md`, Stand 2026-05-16, Commit `5f69ec9afc`) meldet, dass 645 von 3.611 Dateien gegen `toolbox.rng` validieren und 2.966 nicht, bei 4.420 Schemafehlern und 2.229 Integritätsbefunden. Der Report ordnet das ein als „residual annotation issues in the source corpus, deliberately surfaced for editorial triage". Das Paper führt den Fall als „Agentic edition workflow (~190-test regression suite)". Die Zahl gehört nicht ins Paper (volatil), aber die Tatsache, dass der Fall seine Datenqualität sichtbar macht statt sie zu glätten, wäre ein Beleg für die Verifikationsargumentation.

**U5. Der `template:`-Mechanismus erreicht nur den disziplinierten Teil des Bestands.** Von zwölf geprüften Wissensbasen tragen vier gar kein Frontmatter (CorrespExplorer, Kulturpool, wiiw und fünf der sieben SuGW-Dokumente), und VetMedAI trägt es unvollständig. Sektion 3.3 beschreibt „a repository declares its method through a `template:` field […] The repository explains itself to the agent that reads it" als erreichten Zustand. Er gilt für die jüngere, refactorierte Generation. Ein Halbsatz, der das als Reifegrad statt als Bestandseigenschaft markiert, wäre genauer und kostet nichts an Argument.

**U6. „Largest knowledge base (~30 documents)" steht neben „505-file vault".** In derselben Tabelle trägt VetMedAI den Superlativ mit 31 Dokumenten, und FemPrompt trägt 505 Dateien. Die Begriffe sind verschieden (kuratierte Wissensbasis gegen generierten Vault), die Nachbarschaft in einer Tabelle liest sich trotzdem als Widerspruch. Eine Präzisierung der VetMedAI-Zelle („largest hand-curated knowledge base") räumt das aus.

**U7. Das Ground-Truth-Sample der HTR-Pipeline ist nicht der geplante Arbeitsgang geworden.** `knowledge/verification-concept.md` Zeile 72 hält fest, dass das 30-Objekt-Sample „nicht als eigener Arbeitsgang ausgefuehrt" wurde und durch Modellkonsensus, Drei-Modell-GT-Pipeline und Expert-Review ersetzt ist; in `results/groundtruth/` liegen 19 Dateien. Das Paper behauptet das nicht anders, es spricht in 3.5 von „specifies a ground-truth strategy". Ich vermerke es, weil es der Kontext ist, in dem die noch ausstehende CER-Messung steht, und weil die Aussage über die zwei Annotierenden (Befund 3.5-c) genau daran hängt.
