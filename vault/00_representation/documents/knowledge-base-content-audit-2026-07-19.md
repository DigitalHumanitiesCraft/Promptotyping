---
type: representation
source-type: document
source: "[[_sources/knowledge-base-content-audit-2026-07-19]]"
converter: "Markdown copy; internal Obsidian wikilinks flattened to plain text; block IDs appended for anchoring"
channel: handover
metadata:
  title: "2026-07-19 - Promptotyping-Wissensbasen Inhaltsaudit (Befund)"
  creator: "Christopher Pollin, Digital Humanities Craft"
  date: "2026-07-19"
  format: "text/markdown"
  identifier: ""
  license: "CC BY 4.0 (vault content)"
  confidential: false
created: 2026-07-19
updated: 2026-07-19
checked:
  validation: 2026-07-20
---

# 2026-07-19 - Promptotyping-Wissensbasen Inhaltsaudit (Befund)

## Summary

Inhaltliches Audit aller lokalen Promptotyping-Wissensbasen gegen die Konvention Promptotyping Documents, als Fortsetzung der Exploration vom Juni (2026-06-13 - Promptotyping-Wissensbasen Exploration (Befund)), diesmal nicht auf Inventar-, sondern auf Dokumentinhalts-Ebene. 27 Wissensbasen wurden dokumentweise gelesen (Funktion nach erstem Absatz statt Dateiname, Frontmatter, Strukturprinzipien, Redundanz, Distillation-Verdikt), dazu zwei Vorlagen-Extraktionen (Verification, Integration) und eine Git-Forensik der zbz-ocr-tei-Doppelkopie. Das Audit verwendet erstmals das englische Funktionsvokabular, das damit in Kraft ist: Navigation, Charter, Material, Specification, Architecture, Domain Knowledge, Design, Quality Assurance, Provenance, Planning, Reporting, Agent Instructions, dazu die Kandidaten Verification und Integration. ^vocab

Drei Kernbefunde. Erstens ist das `status:`-Feld flächendeckend nicht als Maturity-Feld in Gebrauch; `active` ist der De-facto-Standard reifer Repos, daneben ein Dutzend freier Werte. Zweitens fehlt in rund einem Drittel der Wissensbasen Frontmatter vollständig. Drittens tragen mehrere aktive Wissensbasen sachlich veraltete Spezifikationen, am gravierendsten das Promptotyping-Repo selbst, dessen `architecture.md` und `design.md` eine seit 2026-06-10 entfernte Komponente als aktiv beschreiben.

## Methode

20 Sonnet-Agenten, alle rein lesend: 17 Repo-Audits (13 einzeln, 4 gebündelt) mit fester Prüfrubrik (Funktion vor Dateiname, Pflichtkern-Frontmatter, Selbstbeschreibungs-Verbot, volatile Zahlen, Index-Konsistenz, Redundanz-Stichprobe, Distillation-Verdikt, Root-CLAUDE.md), 2 Vorlagen-Extraktionen, 1 Doppelkopie-Forensik. Rohbefunde temporär im Task-Output, hier verdichtet. Die Repo-Landschaft bewegte sich während des Audits: die beiden AEP-Testlauf-Repos wurden im Laufe des Tages gelöscht (Forschungsleitstelle-Aufräumlauf, das Doppel-Journal-Problem ist damit gegenstandslos, im Template per ADR-004 gelöst), und FemPrompt wurde am 2026-07-18 restrukturiert, sodass zwei am Vormittag noch gelistete Dateien zur Prüfzeit bereits in Nachfolgedokumente aufgegangen waren. Alle Einzelbefunde sind Stichtagsbefunde.

## Querschnittsbefunde

### Status-Vokabular faktisch außer Kraft

`active` tragen unter anderem teiCrafter (9 von 11), das Promptotyping-Repo (6 von 6), vetmed-wissensbilanz (12 von 24), beide db_for_medieval-Repos (alle Dokumente). noe-museen nutzt in elf Dokumenten elf freie Werte (`verified`, `konsolidiert`, `laufend`, `zur-klaerung`, `teils-umgesetzt`, `final`), ride-static ergänzt `befund`, `decided`, `partial`, zbz-ocr-tei `snapshot`. Kein einziges Repo nutzt das Kanon-Vokabular konsequent. Die Praxis artikuliert zwei fehlende Bedeutungen, laufendes Prozessdokument (Journal, Plan) und Stichtagsdokument. Empfehlung: `active` (fortlaufende Prozessdokumente) und `snapshot` (Stichtagsdokumente) in der Konvention registrieren statt gegen die gesamte Praxis durchzusetzen; die übrigen freien Werte auf das erweiterte Vokabular normieren. ^statusvocab

### Frontmatter-Nullfälle

Komplett ohne YAML-Frontmatter: vetmed-berichtswesen (11 Dokumente), kulturpool-demo (8), uc3-vetcore-proteomics (7), objekt-bestimmung-workshop-2026 (6), ai-coding-literacy (7); co-ocr-htr teilweise (4 Dokumente ohne, Rest lückig). Damit ist für ein Drittel des Bestands weder Statustracking noch maschinelle Auswertung möglich. Gegenpol vault-graph: durchgängig `version: 1.0` plus `template:`-Feld, die beste Disziplin des Bestands.

### Selbstbeschreibungs-Abschnitte, Regeländerung nicht propagiert

Die Umkehrung der Negativ-Selbstdefinition (Konventionsänderung 2026-06-29) ist in den Repos nicht angekommen. "Was fehlt"-Abschnitte tragen FemPrompt (INDEX), kisug (specification), teiCrafter (design), das Promptotyping-Repo (specification, design), ride-static (specification) und vault-graph (INDEX, testing), letzteres als korrekt gebaute Anwendung der alten Norm.

### Veraltete Inhalte in aktiven Wissensbasen

Das Promptotyping-Repo beschreibt die am 2026-06-10 entfernte Phasen-Provenance-Lane in `architecture.md` und `design.md` (dort rund ein Drittel des Dokuments) als aktive Komponente und führt die Tiefenseiten-Liste in vier Dokumenten inkonsistent (acht alte gegen sieben aktuelle). m3gims `data-entry-guidelines.md` beschreibt trotz Warn-Callout überwiegend das durch E-127 abgelöste Schema und ist zugleich die operative Handreichung des Erschließungsteams. szd-htr-ocr-pipelines `dia-xai-integration.md` referenziert ein nicht existierendes Export-Script und einen überholten Zeitplan. `updated:`-Felder driften fast überall (m3gim data.md, gesamtes Promptotyping-Repo).

### Redundanz ohne Single Source

Wiederkehrende Kopien statt Verweise: das Review-Modell viermal in szd-htr-ocr-pipeline (CLAUDE.md, verification-concept, evaluation-results, stats-dashboard), das EIL-Rollenmodell und der DIA-XAI-Rahmen zwei- bis dreifach in klawiter-rescue, die CER-Formelherleitung doppelt in zbz-ocr-tei (specification gegen cer-methodology), die Theorie-Glossare doppelt in FemPrompt (project gegen INDEX), Test-Strategie doppelt in db_for_medieval_edition (architecture gegen test-strategy).

### Datenschutz- und Betragsverstöße

Klarnamen Dritter in FemPrompt (`project.md`, Teamtabelle), vetmed-wissensbilanz (zwei Dokumente), SZD (`PROJECT.md`, Beteiligte), vetmed-berichtswesen (Journal, dort tolerierbar). ai-coding-literacy führt in `workshops/programmieren-2-0.md` zusätzlich einen konkreten Geldbetrag. Diese Reparaturen haben Vorrang vor allen Strukturfragen.

### Session-Artefakte und unmarkierte Snapshots

Bestätigt destillierbar oder löschbar: `projektbericht-zum-anhoeren.md` (uc3, reine Redundanz-Zweitfassung), `titelbild-prompt.md` (noe-museen, Produktions-Asset), `status-report.md` (ai-coding-literacy, überholter Stand vom Februar), `IMPROVEMENTS.md` (co-ocr-htr, erledigt-offen-Gemisch), `status.md` (db_for_medieval_edition, selbsterklärter lebender Tracker), m3gims datierte Sichtprüfung. Etliche weitere Dokumente sind inhaltlich tragfähig, aber unmarkierte Snapshots (`Datenbestand.md` kulturpool, `data.md` klawiter mit Zählständen, `wissensstand.md` noe-museen, `evaluation-results.md` szd-htr).

### Fehlplatzierte Funktionen

Agent-Instructions-Material im `knowledge/`-Ordner statt im Action-Layer: dia-xais `methods.md` ist im Kern ein paste-fertiger Agent-Prompt, ai-coding-literacys `design-audit-anleitung.md` ein Audit-Arbeitsauftrag, zbz-ocr-teis `index.md` trägt einen imperativen Maintenance-Abschnitt. kulturpool-demo hat zwei leere CLAUDE.md-Stubs (Root und `knowledge/`), also gar keinen Action-Layer; ohne Root-CLAUDE.md sind auch DEPCHA, uc3-vetcore, objekt-bestimmung und vetmed-wissensbilanz.

## Einzelbefunde nach Repo

| Repo | Zentrale Befunde |
|---|---|
| Promptotyping (Selbstanwendung) | Lane-Doku veraltet (architecture, design), Tiefenseiten-Inkonsistenz über vier Dokumente, INDEX-Drift (acht statt real mehr Vorlagen), status active durchgängig; höchster Reparaturbedarf relativ zum Anspruch |
| m3gim | insgesamt beste große Wissensbasis; data-entry-guidelines schematisch veraltet, data.md-updated driftet, decisions.md mit falschem template-Verweis, journal status complete |
| teiCrafter | vollständigste Funktionsabdeckung, dokumentierte Versionsdisziplin; status active repo-weit, design.md mit Selbstbeschreibungs-Abschnitt, lokale c:\tmp-Pfade in worked-examples |
| kisug | stärkster Verifikationsmechanismus des Bestands (Anti-Anchoring, Zweitprüfer fremder Modellfamilie); Spec mit Selbstbeschreibungs-Abschnitt, frontend.md status aktiv, template-Feld lückig |
| FemPrompt | vollständig, frisch restrukturiert; Klarnamen in project.md, Glossar-Redundanz, Versionsstand 0.2/0.3 gemischt |
| zbz-ocr-tei (DHCraft) | kanonische Kopie, sauber; CER-Formel doppelt, ecosystem-synthesis als complete statt Snapshot, project.md mischt Charter/Material/Planning |
| zbz-ocr-tei (Root) | 23 Commits hinter origin, nichts Eigenständiges; stilllegen |
| szd-htr-ocr-pipeline | kein Charter, kein decisions.md, Review-Modell vierfach, dia-xai-integration veraltet, freie type-Werte |
| co-ocr-htr | eingefroren (Backburner); INDEX und CLAUDE.md unvollständig gegen Ordner (drei Dateien unregistriert), IMPROVEMENTS.md auflösbar, Frontmatter lückig |
| klawiter-rescue | konsistente version 0.3; volatile Zahlen in data.md ohne Stichtag, EIL/DIA-XAI-Redundanz dreifach, production-readiness überladen und einziges deutschsprachiges Dokument |
| ride-static | status-Missbrauch systematisch (active/decided/befund/partial), zwei Dokumente im INDEX unsichtbar, kein Charter in knowledge/ |
| vetmed-berichtswesen | kein Frontmatter (11/11), Index listet nur die Hälfte der Dokumente, toter Link auf gelöschtes datenmodell.md, workshop-guide verwaist |
| vetmed-wissensbilanz | keine Root-CLAUDE.md, status active zwölffach, Klarname in zwei Dokumenten, tote Links im Glossar; Unterordner-Struktur trägt inhaltlich |
| noe-museen | elf freie status-Werte, kein Index (wissensstand.md als implizites Sammelsurium-Hub), titelbild-prompt fehlplatziert, spiele-konzepte gegen Code-Stand veraltet |
| kulturpool-demo | beide CLAUDE.md leer, kein Frontmatter, kein Charter, kein Journal, keine Spec; rein deskriptive Basis |
| agentic-edition-pipeline (Template) | konsistent als Skeleton; Pflichtkern fehlt (für Template klärungsbedürftig), 00_INDEX mischt Navigation und QA-Checkliste, 05_DESIGN trägt real Specification |
| db_for_medieval (beide) | status active flächendeckend; edition-status.md ist lebender Tracker im Wissenskleid, Test-Strategie doppelt, Cross-Repo-Architektur-Überlappung mit Driftrisiko |
| dia-xai | methods.md ist Agent-Prompt statt Wissensdokument, kein Index, keine Spec, frontend.md Sammelsurium |
| ide-zotero-vis | sauber und abgeschlossen; volatile Zählstände in INDEX und narrative |
| vault-graph | beste Frontmatter-Disziplin; folgt der alten Negativ-Selbstdefinition, methodik.md als einziger deutscher Dateiname |
| ai-coding-literacy | kein Frontmatter, kein Index/Journal/Spec; Klarname und Geldbetrag in workshops-Dokument, status-report.md löschbar |
| uc3-vetcore | kein CLAUDE.md, kein Frontmatter; projektbericht-zum-anhoeren löschbar, plan.md mischt vier Funktionen mit Session-Protokoll |
| SZD | kein Journal, Architektur dreifach überlappend (PROJECT, ARCHITECTURE, COLLECTIONS), Klarnamen, Versionsfeld lückig |
| objekt-bestimmung | kein CLAUDE.md, kein Frontmatter; journal und requirements stark, data.md Sammelsurium mit unmarkiertem Vollauf-Snapshot |
| DEPCHA | zwei gute Dokumente, aber kein Charter, kein Journal, kein CLAUDE.md, freie type-Werte |
| forschungsleitstelle | data/spec-Grenze unscharf, journal ohne Frontmatter, kein Charter |

## Vorlagen-Material

Beide Kandidatenfunktionen sind vorlagenreif, die Skelette sind empirisch aus den realen Vorkommen extrahiert.

Verification (Belegbasis kisug, FemPrompt, szd-htr-ocr-pipeline), neun Sektionen: Prüfgegenstand, Prüfprobleme, Verdict-Vokabular, Prüfkette (deterministisch, adversarial, menschlich), Anti-Anchoring-Protokoll, Befundregister, Neuheits-Claims, Offene Befunde und Eskalation, Grenzen. Die Neuheits-Claims-Sektion ist die einzige nicht empirisch belegte; keine einzige Wissensbasis prüft bisher systematisch die eigenen Beitragsbehauptungen. Frontmatter zusätzlich zum Pflichtkern: `scope`, `prüfstand`, `verdict-vocabulary`. ^verif

Integration (Belegbasis teiCrafter, szd-htr-ocr-pipeline), acht Sektionen plus eine ergänzte: Zweck, Datenfluss, Austauschformat, Zuständigkeiten, Abnahmekriterien, Offene Punkte und Input-Gaps, Korrekturen und Fallgruben, Autoritäre Dokumente, ergänzt Wiedereinstiegs-Kontext. Frontmatter zusätzlich: `counterpart` (Objekt mit name, repository), `direction` (outbound, inbound, bidirectional). Nebenbefund: die SZD-teiCrafter-Schnittstelle ist inhaltlich konsistent, aber nur einseitig verlinkt, teiCrafter verweist nicht zurück.

## Konsequenzen

Entschieden mit diesem Audit: das englische Funktionsvokabular gilt (Umschreibung der Konvention, Vorlagen, Lese-Heuristik und Site steht aus).

Operator-Entscheidungen vom 2026-07-19 (im Anschluss an den Befund):

1. Status-Vokabular erweitert: `active` (fortlaufende Prozessdokumente) und `snapshot` (Stichtagsdokumente) sind registriert, andere freie Werte werden darauf normiert; umgesetzt in der Konvention.
2. Root-Kopie zbz-ocr-tei gelöscht, nachdem bestätigt ist, dass `arbeitsbericht-v3.md` den zurückgezogenen `final-report.md` ersetzt; kanonisch ist `DHCraft/zbz-ocr-tei`, Repo-Verzeichnis nachgezogen.
3. Vorlagen Verification, Integration und Action-Layer freigegeben (Status complete). ^decisions

Operator-Entscheidungen offen:

1. Konzeptdokument Agent-Sozialisierung umbenennen (Vorschlag Agent Instructions) oder mit Alias behalten; 25 eingehende Links, eigene Kurationsrunde.
2. Pflichtkern-Geltung für Template-Repos (agentic-edition-pipeline) klären, Skeleton-Dokumente tragen derzeit bewusst kein projektspezifisches Frontmatter.

Reparaturreihenfolge nach Dringlichkeit:

1. Datenschutz-Scrubs (FemPrompt, vetmed-wissensbilanz, SZD, ai-coding-literacy inklusive Geldbetrag).
2. Promptotyping-Repo sachlich richtigstellen (Lane, Tiefenseiten, INDEX, updated-Felder, status).
3. Konvention und Vorlagen umschreiben (Vokabular, Status-Entscheid, Selbstbeschreibungs-Regel propagieren), Vorlagen Verification und Integration aus den Skeletten anlegen.
4. Frontmatter-Nachrüstung und Action-Layer-Lücken in den Nullfall-Repos, beim jeweils nächsten Anfassen.
5. Session-Artefakte destillieren oder löschen, Snapshots kennzeichnen, Redundanzen auf Single Source ziehen, je Repo opportunistisch.
6. Audit-Skript unter `scripts/` gegen das finale Vokabular, damit die Prüfung wiederholbar wird.

Ausführungsstand (2026-07-19, Abendsession): Schritte 1 bis 3 sind erledigt. Datenschutz-Scrubs committet in vetmed-wissensbilanz (`0b3319b`), FemPrompt (`2e97632`), SZD (`c136e7e7`) und ai-coding-literacy (`447c584`); der Author-Vermerk in SZD/COLLECTIONS.md bleibt als Urheber-Attribution publizierten Inhalts stehen. Das Promptotyping-Repo ist richtiggestellt (`0f0d163`: Lane historisiert, Tiefenseiten auf die kuratierten sieben, Schema-Paraphrase, Frontmatter normiert); das dort dokumentierte Site-Update (Vokabular-Spiegel, sechs neue Vorlagen-Anker) ist der nächste Schritt in jenem Repo. Konvention und Vorlagen sind mit dem Vorlagen-Sweep (`94116e1` im Vault) vollständig umgeschrieben, alle Vorlagen freigegeben. Offen bleiben die opportunistischen Schritte 4 und 5 sowie das Audit-Skript (6).

## Related

- Konvention Promptotyping Documents
- 2026-06-13 - Promptotyping-Wissensbasen Exploration (Befund)
- Vorlagen Promptotyping Documents
- Promptotyping MOC
- Repo-Verzeichnis
