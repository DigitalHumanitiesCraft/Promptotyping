---
title: Final Record Promptotyping Agent Interface
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: snapshot
language: de
version: "1.0"
created: 2026-08-22
updated: 2026-08-22
authors: [Christopher Pollin]
generated-with: Codex
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [project, architecture, governance, journal]
---

# Final Record Promptotyping Agent Interface

Dieser Record verdichtet das übertragbare Wissen des eigenständigen Repositories `DigitalHumanitiesCraft/promptotyping-interface` vor seiner Löschung. Das Repository entwickelte von Februar bis Juli 2026 einen Browserprototyp für die Beobachtung und Prüfung agentischer Arbeit in einem Obsidian-Vault. Der Code wird nicht in das Methoden-Repository übernommen. Dieser Text hält Problemstellung, Architekturentscheidungen, Befunde und Ablösungsgrund in einer eigenständig verständlichen Form.

## Verifizierter Endstand

| Merkmal | Stand |
|---|---|
| Quellrepository | `DigitalHumanitiesCraft/promptotyping-interface` |
| Letzter Commit | `14d1bb0e282e0001cf8769d7683f22862431166c` |
| Branch | `main`, deckungsgleich mit `origin/main` am 2026-08-22 |
| Technischer Umfang | Statischer Prototyp aus HTML, CSS und JavaScript ohne Build-Schritt |
| Automatisierte Prüfung | 143 Node.js-Tests in 25 Suites, alle am 2026-08-22 bestanden |
| Reife | Funktionsfähiger Forschungsprototyp ohne Produktionsabnahme |

Die automatisierten Tests deckten Parser, Diff-Verarbeitung, Provenienz, Zustandsverwaltung und Vault-Validierung ab. Eine manuelle QA-Checkliste lag vor. Der Review-Track führte zuletzt noch einen offenen Browserfehler, bei dem der Hinweis auf eine fehlende File System Access API nach dem ersten Rendern verdeckt werden konnte. Eine abschließende Browserabnahme gegen das aktuelle ACTIVE-WORK-Schema wurde nicht dokumentiert.

## Problemstellung

Der Prototyp untersuchte eine Beobachtungsschicht für Forschende, die mehrere agentisch bearbeitete Projekte parallel führen. Der Obsidian-Vault bildete die gemeinsame Arbeitsumgebung. `ACTIVE-WORK.md` lieferte den projektübergreifenden Zustand, während projektbezogene Knowledge Documents den fachlichen Kontext trugen. Das Interface sollte den Wechsel zwischen Portfolioübersicht und Dokumentarbeit unterstützen und Änderungen eines externen Agenten prüfbar machen.

Die erste Konzeption sah eine Browseranwendung mit eigener LLM-Anbindung und Dokumenteditor vor. Die Architekturprüfung verwarf diesen Ansatz. Claude Code arbeitete bereits im Dateisystem und verfügte dort über Werkzeuge, Ausführung und Projektregeln. Eine zweite LLM-Schicht im Browser hätte denselben Arbeitszusammenhang dupliziert und einen zusätzlichen Zustand erzeugt.

## Architektur des Prototyps

Die endgültige Architektur setzte den Vault und seine Dateien als Integrationsvertrag ein. Claude Code arbeitete außerhalb des Browsers im Dateisystem. Das Interface las denselben Bestand und hielt keinen eigenen fachlichen Datenspeicher.

Der Overview Mode leitete Projektkarten aus `ACTIVE-WORK.md` ab. Status, Kurzbeschreibung, nächste Schritte, Aktualisierungsdatum, Rechnungshinweis und Repository-Adresse wurden aus Inline-Feldern gelesen. Saved Views filterten aktive, wartende und termingebundene Einträge. Der Focus Mode zeigte die Dokumente eines Projekts als formatiertes Markdown und erhielt einen schmalen Hinweis auf andere Projekte.

Änderungen an geöffneten Dateien erzeugten einen zeilenbasierten Diff. Nutzende konnten einzelne Hunks übernehmen oder verwerfen. Separate Provenienzdateien hielten fest, welche Zeilen aus einem Agentenlauf oder einer menschlichen Bearbeitung hervorgegangen waren. Die normale Leseansicht zeigte den integrierten Text. Die Entstehungsgeschichte wurde nur bei Bedarf eingeblendet.

## Übertragbare Befunde

### Das Dateisystem kann als Schnittstelle dienen

Ein agentischer Harness und ein menschliches Prüfinterface können über versionierte Dateien zusammenarbeiten. Diese Kopplung braucht eine klare Autorität pro Artefaktklasse. Projektwissen, Arbeitszustand und Prozessnachweise müssen jeweils einen kanonischen Träger besitzen. Ein zusätzliches Interface sollte daraus Ansichten ableiten und keinen parallelen Projektzustand führen.

### Beobachtung und Steuerung benötigen unterschiedliche Träger

Der Prototyp entfernte Activity Feed, Operations-Buttons und den Editor für die Agentenanweisung. Die Steuerung blieb im Harness und in den Knowledge Documents. Das Browserinterface konzentrierte sich auf den abgeleiteten Zustand und die Prüfung realer Dateiänderungen. Diese Trennung reduzierte die Zahl konkurrierender Bedienoberflächen.

### Diff-Review materialisiert eine zeitliche Prüfschwelle

Die epistemologische Analyse des Projekts beschrieb eine temporale Unterbrechung zwischen Generierung und Weiterverarbeitung. Der Diff-Workflow setzte diese Unterbrechung praktisch um. Er lieferte keine Garantie für die fachliche Richtigkeit. Er schuf einen adressierbaren Zustand, an dem menschliches Urteil einsetzen konnte.

### Provenienz beschreibt Entstehung

Die Herkunftsmarkierung dokumentierte, ob Text aus einem Agentenlauf oder einer menschlichen Bearbeitung stammte. Daraus folgte keine Qualitätsbewertung. Die Entscheidung für eine zuschaltbare Zeitachse bewahrte die Lesbarkeit des integrierten Dokuments und hielt den Prozess rekonstruierbar.

### Portfolioansichten hängen vom Steuerungsvertrag ab

Das Dashboard war eng an eine damalige Fassung von `ACTIVE-WORK.md` gebunden. Spätere Felder für Wissensbasis, Lanes, Operatorentscheidungen und differenzierte Wartelagen lagen außerhalb dieses Vertrags. Ein separates Interface erzeugt dauernden Anpassungsbedarf, sobald sich das kanonische Steuerungsmodell weiterentwickelt.

### Ein eigenes Interface braucht eine eigenständige Funktion

Der Prototyp bestätigte den Nutzen von Overview und Focus, abgeleiteten Statusansichten und expliziten Prüfpunkten. Die Forschungsleitstelle, ihre Lanes und die Agentenharnesses übernahmen diese Funktionen später näher an den kanonischen Quellen. Das separate Browserwerkzeug fügte keine hinreichend eigenständige Fähigkeit mehr hinzu.

## Ablösung

Das Repository wird als eigenständiges Werkzeug eingestellt. Die öffentliche Promptotyping-Site bleibt die Spezifikations- und Publikationsoberfläche der Methode. `ACTIVE-WORK.md` und die Forschungsleitstelle führen den projektübergreifenden Zustand. Agentenharnesses bearbeiten Dateien und dokumentieren ihre Arbeit direkt im jeweiligen Projektkontext.

Der allgemeine Methodenbegriff Promptotyping Interface bleibt gültig. Er bezeichnet zweckgebundene Oberflächen, die Zwischenstände, Daten und Prüfentscheidungen eines Forschungsprozesses zugänglich machen. Der eingestellte Prototyp war eine konkrete Ausprägung dieses Begriffs und begründet keine fortbestehende Softwarekomponente der Methode.

## Quellbasis des Records

Der Record wurde gegen den finalen Repository-Stand destilliert. Maßgebliche Träger waren `PROJECT.md`, `design/REQUIREMENTS.md`, `design/DESIGN-v3.md`, `docs/DECISIONS.md`, `docs/REVIEW-TRACK.md`, `docs/QA-CHECKLIST.md`, `knowledge-docs/EPISTEMOLOGICAL-ANALYSIS.md`, `knowledge-docs/DASHBOARD-LITERATURE.md`, `knowledge-docs/PROMPTOTYPING-METHOD.md`, die Testausgabe und die Git-History bis zum oben genannten Commit.
