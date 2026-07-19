---
title: Project
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: de
version: 0.3
created: 2026-05-09
updated: 2026-07-19
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.7
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Projekt-Wissensdokument
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/project
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-project
topics: ["[[Promptotyping]]", "[[Context Engineering]]"]
knowledge-sources:
  institutions:
    Digital Humanities Craft OG: https://dhcraft.org
    University of Graz: https://www.uni-graz.at
related: [INDEX, specification, architecture, design, journal]
---

# Project

Refactor des Repos `DigitalHumanitiesCraft/Promptotyping` zu einem interaktiven Paper. Die Site auf https://dhcraft.org/Promptotyping/ wird zur öffentlichen Methodik-Spezifikation für Promptotyping — adressierbar, versioniert, lesbar als Paper-Narrativ und maschinenlesbar als Endpunkt für `template:`-URIs in Promptotyping-Repos.

## Identität

Die Site ist das öffentliche Pendant zur Promptotyping-Methode, wie sie im Pollin-2026-Paper formalisiert ist und im Vault als systematisches Wissen weiterentwickelt wird. Sie ist nicht das Paper selbst — sie ist eine *interaktive Lese- und Adressierungs-Schicht über dem Paper*, in die alle methodischen Bestandteile (Vorlagen, Konvention, Case Studies, Glossar, Literatur) eingelassen sind.

Drei Adressatengruppen:

- **Forschende**, die Promptotyping anwenden wollen. Sie kommen über das Methode-Narrativ, lesen das Paper im Lesefluss, gehen mit konkreten Vorlagen weg.
- **Reviewer und Reproduzierende**, die ein Promptotyping-Repo gegen die Methode prüfen wollen. Sie kommen über die Konvention oder über eine konkrete Vorlagen-Adresse.
- **Coding-Agenten**, die `template:`-URIs aus Repo-Frontmatter-Feldern auflösen. Sie kommen über versionierte Anker und brauchen die Vorlagen als Maschinenlesbar-Endpunkt.

## Materialgrundlage

Das Methodik-Repo verarbeitet keine Forschungsdaten — es spiegelt Wissen. Dadurch entfällt die Vorlage Datengrundlage (siehe [journal.md](journal.md), Eintrag 2026-05-09 zur Vorlagen-Trigger-Korrektur). Die Materialgrundlage steht stattdessen kompakt hier.

Vier Quelltypen speisen die Site:

**Pollin 2026 Paper.** Der wissenschaftliche Methodentext. Seit 2026-06-09 ist die sektionierte Fassung in `_content/paper/01-introduction.md` … `07-conclusion.md` (plus `literatur.md`) die **kanonische Arbeitsfassung**; das Vault-Dokument `Pollin 2026 - Promptotyping A Context Engineering Method for Building Research Artifacts with Frontier LLMs.md` ist Lesefassung mit Verweisbanner. Status `draft`, Sprache Englisch, sieben Sektionen plus Abstract und Referenzen. Wird im Lesefluss gerendert; die `{:.phase-*}`-Tags im Markdown bleiben als methodische Annotation erhalten und werden beim Rendern gestrippt (Lane entfernt, A2 in [specification.md](specification.md)).

**Vault-Vorlagen und Konvention.** Der Vorlagen-Katalog unter `Vault Operations/Templates/Promptotyping/` plus die Konvention unter `Vault Operations/Konventionen/Konvention Promptotyping Documents.md`; beide sind im Vault Source of Truth. Seit dem Vorlagen-Sweep vom 2026-07-19 sind alle Vorlagen des Katalogs freigegeben, tragen englische Funktionsnamen und je eine eigene Versionshistorie. Beim Spiegeln ins Repo werden Vault-interne Wikilinks durch Site-Anker oder Inline-Erklärungen ersetzt; die gespiegelten Fassungen hinken dem Vault-Stand bis zum nächsten Site-Update nach (siehe Stand).

**Case-Study-Sammlung.** 24+ dokumentierte Case Studies, im Vault unter `Projects/Promptotyping/Case Studies/`. Jede Case Study trägt typischerweise: Repo-URL, Live-Demo-URL falls vorhanden, Status, Hauptaussage, methodische Aspekte. Sieben davon werden als Tiefenseiten gerendert (HerData, Klawiter-Rescue, zbz-ocr-tei, M3GIM, Notker-Edition, CorrespExplorer, coOCR-HTR; Kuratierung in A7 der [specification.md](specification.md)), die übrigen als Karten in der Galerie.

**YouTube-Videos zur Methode.**
- Teil 1, Methodik-Erklärung: https://youtu.be/8sUe4Jkh3uQ (42:11, vier Phasen, Distillation, Context Window Management, Promptotyping Documents, EIL, Sycophancy)
- Teil 2, Live-Demo mit Claude Code: https://youtu.be/hd_a-NBO_S4 (76 Excel-Dokumente zu funktionalem Dashboard, Thinking Matrix, Context Compression, iterative Fehlerkorrektur)

Die alte Living-Paper-JSON (`prototype/data.json` mit 18 Case-Studies-Einträgen aus November 2025) ist als Struktur-Schablone in `c:\tmp\promptotyping-old-data-schablone.json` gesichert. Sie dient als Format-Vorlage für die neue `data/case-studies.json`, deren Inhalte aber frisch aus dem Vault generiert werden.

## Worum es im Refactor geht

Der bestehende Stand des Repos (November 2025) ist methodisch überholt: Sechs-Phasen-Modell statt vier, sieben alte Use Cases statt zwanzig, Living Paper v0.2 mit dekorativen interaktiven Modulen, kein adressierbares Vorlagen-System. Der Refactor löscht diesen Stand und baut die Site komplett neu — aus dem Vault-Wissen heraus, mit dem Pollin-2026-Paper als Lesefluss-Substrat, mit den versionierten Vorlagen als Anker, mit kuratierten Case Studies als Karten im Paper-Text.

## Worum es nicht geht

- **Kein wissenschaftliches Paper neu schreiben**. Das Paper ist im Vault, wird gespiegelt und in Sektionen aufgeteilt, aber inhaltlich nicht verändert.
- **Kein Methode-Refactor**. Die vier Phasen, die drei Dokumenttypen, der Vorlagen-Katalog und die Konzepte sind im Vault festgeschrieben. Die Site spiegelt sie, sie revidiert sie nicht.
- **Kein Vault-Refactor**. Vault-Korrekturen erfolgen nur, wenn beim Spiegeln Diskrepanzen auffallen, und werden im Vault diskutiert, nicht im Repo entschieden.
- **Keine Internationalisierung jetzt**. Site ist deutsch zuerst. Englische Fassung ist ein eigenes, späteres Projekt.

## Stand und Phase

Status: **Phase 4 implementiert, Operator-Review-Eingriffe umgesetzt** (2026-06-10). Site vollständig gebaut: Paper-Lesefluss, neun Vorlagen mit Side-Panels und Frontmatter-Inspector, kuratierte Use-Case-Galerie (18 Cases, 7 Tiefenseiten), Überblick-, Praxis-, Skills-, Arbeitsumgebung-, Glossar- (42 Einträge), Konventions- und Literatur-Sektion, Mobile-Layout, SEO. Nach dem Erstdeploy auf Operator-Entscheidung: Phasen-Provenance-Lane vollständig entfernt (Tags werden nur noch gestrippt), Sticky-Header und Footer ergänzt, Hero rein typografisch (Icon in die Vorlagen-Sektion verschoben), alle sechs Prozessvideos als Click-to-load-Facade integriert, neue Arbeitsumgebung-Sektion. Spezifikations-Erweiterungen A13 bis A18 und ADR-9/ADR-10 dokumentiert.

Stand-Nachtrag (2026-07-19): Logo optimiert und Header/Footer auf die Watercolor-Marke umgestellt (Commits `fe5ef82`, `cc915dc`); die Wissensbasis ist nach dem Inhaltsaudit sachlich richtiggestellt (Lane-Referenzen, Tiefenseiten, Katalog-Stände). Offen: Human Review der gespiegelten Inhalte (CEIL), Browser-Sichtprüfung, Live-Test des 404-Routings, und das Site-Update zum Vault-Vorlagen-Sweep (englisches Funktionsvokabular in `konvention` und `ueberblick`, Spiegel und Anker der sechs neuen Vorlagen, Versionsstände der bestehenden Spiegel).

## Beziehung zum Vault

Diese Wissensbasis ist eine **Spiegelung mit Eigenleben**. Die Vault-Vorlagen, von denen sie geleitet wird, sind im Vault Source of Truth. Was hier dokumentiert wird, ist die *Anwendung* dieser Vorlagen auf das konkrete Refactor-Projekt — also welche Trigger ziehen, welche Vorlagen für dieses Projekt gar nicht passen (siehe Vorlagen-Trigger-Korrektur), welche Designentscheidungen für dieses Projekt gefällt werden. Das ist nicht redundant zur Vault-Vorlage, sondern komplementär: die Vorlage beschreibt den Strukturraum, dieses Dokument trägt die Belegung.

## Erwartetes Outcome

- `https://dhcraft.org/Promptotyping/` rendert das Pollin-2026-Paper als scrollbares interaktives Paper
- Die Vorlagen des Katalogs sind unter Latest-Ankern adressierbar (`#promptotyping-document-data` etc.); Snapshot-Sub-Anker bei späteren Versions-Sprüngen
- Subpath-Aliase (`/promptotyping-document/data`) für Menschen; statische Markdown-URLs unter `_content/` als Maschinenadresse (ADR-10)
- Sieben Case-Study-Tiefenseiten plus filterbare, kuratierte Use-Case-Galerie (18 Cases, A7)
- Glossar als Hover- und Side-Panel-Quelle, Literaturverzeichnis als Anker-Liste
- Repos können `template: { url: "https://dhcraft.org/Promptotyping/promptotyping-document/data" }` in ihre Frontmatters schreiben und damit auf die kanonische Latest-Spezifikation verweisen

## Anschluss

- Vault-Wissensdokument [[Promptotyping]] — methodischer Kern
- Vault-Konvention [[Konvention Promptotyping Documents]] — Strukturprinzipien
- Vault-Vorlagen [[Vorlagen Promptotyping Documents]] — Vorlagen-Katalog
- Pollin 2026 Paper — Lesefluss-Substrat
