---
title: Journal
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.7
created: 2026-05-09
updated: 2026-07-26
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Journal
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/journal
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-journal
related: [INDEX, project, specification, architecture, design]
---

# Journal

Chronologische Dokumentation des Refactor-Verlaufs.

## 2026-07-24 — Wissensbasis auf den revidierten Papertext nachgezogen

Nach dem Gesamtdurchgang der Revision (Rahmenwechsel, Auflösung von 3.4, neuer Abstract, überarbeiteter Evidenzteil, Begriffsauflösung von *instrument* zu *research artefact*) stand die Wissensbasis noch auf dem alten Text. Die tragende Entscheidung dieses Durchgangs ist die Trennung von kanonischem Text und ausgeliefertem Schnitt. Kanonisch ist `knowledge/paper.md`; die Zerlegung unter `_content/paper/` ist der Vor-Revisions-Stand der Site und wird erst bei der Freigabe neu geschnitten. `specification.md` (A1) und `architecture.md` halten das fest, einschließlich der Sektion Epistemic Infrastructure, die nur noch im ausgelieferten Schnitt existiert. Daraus folgte die Streichung der Zuordnung, die die Use-Case-Typologie der Galerie an eine Papersektion band, weil das Paper nur die fünf epistemischen Funktionen führt; die Neubasierung der Galerie ist als Site-Arbeit vermerkt. `INDEX.md` führt jetzt den tatsächlichen Bestand samt Revisionsdokumenten, und die zurückgenommene Primärartefakt-Definition ist durch die Beschreibung des `knowledge/`-Ordners als kuratiertes Wissensartefakt mit benannter Deckungsgrenze ersetzt. `submission-zfdg.md` ist aus dem revidierten Text neu gezogen, beide Kurz-Abstracts innerhalb der 750-Zeichen-Grenze, Exposé und Gliederung nach dem neuen Sektionsspiegel, die Zugänglichkeitszusage der Projekte auf den realen Zustand mit drei geschlossenen Repositorien umgestellt. `paper-argument-map.md` läuft auf einen Top-Träger (K-1b) zusammen, K-2.4a begründet nur noch die Dokumentform, die Blockkürzel bleiben als Bestätigungsanker erhalten. `report.md` bekommt einen datierten Nachtrag statt einer Fortschreibung. `revision-knowledge.md` bleibt als historisches Steuerwissen stehen, weil seine Prozessregeln, die Operator-Vorgaben und die Folgearbeit außerhalb des Papertexts weiterbinden; die dort vorgesehene `revision-decisions.md` ist nie entstanden, die Entscheidungen liegen in Chat, Commit-Nachrichten und `paper-writing.md`. Der Konsistenzpass fand keine toten Verweise zwischen den Dokumenten. Außerhalb der Wissensbasis steht die zurückgenommene These weiter im `README.md` und in den Site-Inhalten unter `_content/`; beides gehört in den Site-Durchgang nach der Freigabe.

### Offen (Operator)

Sichtbarkeit der drei geschlossenen Repositorien (ZBZ-Pipeline, HerData, mittelalterliche Rechtsgeschäfte), Freigabe von Lehr- und Workshop-Material für die Belegschicht, der Titel (seine dokumentierte Begründung über die Übersetzungs-Doppelung ist mit der Revision entfallen), und das Herkunftsfeld im Schema der Belegschicht.

## 2026-07-24 — Reasoning-Prompt-Seitenlinie vollständig getilgt (Operator-Entscheidung)

Der Operator hat entschieden, dass die Reasoning-Prompt-Seitenlinie im Promptotyping-Projekt nicht mehr gebraucht wird und komplett zu tilgen ist. Aus dem Paper waren die Passage in 2.6 und ihre Fußnote bereits am 2026-07-23 gestrichen; jetzt sind auch die abgeleiteten Split-Dateien unter `_content/paper/` (Abstract, 2.6, Projekt-Insight in 4) und der Grounded Vault bereinigt. Im Vault wurden das Quelldokument, sein Distillat und die drei Genealogie-Claims gelöscht, die MOC-Genealogy und die Register nachgezogen, die Summer-School-Quelle wegen ihres eigenständigen Gehalts erhalten und von der Seitenlinie befreit. In den Steuerdokumenten (`paper-writing.md`, `report.md`) ist der Eigenname entfernt, der historische Vorgang bleibt als Streichung dokumentiert. Der Vault-Validator läuft sauber.

## 2026-07-23 — Subagenten-Runde: Sektion-2-Hierarchisierung, Gelenk-Konsistenz, Forschungsdaten-Definition

Vierte Session des Tages. Aus den Prüfrunden über die Argument-Map (Paper-spricht-Simulation, Selbstkritik der Sektion 2) wurden fünf Verbesserungsergebnisse destilliert und über vier parallele Opus-Subagenten als Empfehlungen ausgearbeitet, danach auf Operator-Anweisung ("alles sofort Umsetzbare") eingebaut. Umgesetzt: (1) Forschungsdaten-Definition am Anfang von 2.3, Borgman 2015 als disziplinneutraler Genus, Schöch 2013 über die Dissertation als Humanities-Differentia; dabei Nebenbefund korrigiert, das Schwierigkeitsprofil in Sektion 1 zitierte verkürzt drei Faktoren, die Diss führt vier (human agency, context sensitivity, multiperspectivity, uncertainty, S. 35). (2) Gelenk-Konsistenz, der offene Scarcity-Marker in 2.4 ist als markierte Inferenz mit Sektion-1-Rückverweis aufgelöst, die Härtetest-Selbstbeschränkung steht jetzt an der Erstnennung in Sektion 1, der unbelegte Wirksamkeits-Komparativ in 4.2 ist ins belegte Flattening-Argument umgeformt. (3) Träger-Wechsel-Formel, 2.3 trägt die Auflösung der Spannung zwischen Semantic-Web-Kontinuität und Inversionsthese (die Explikationsarbeit zahlt aus, die Semantik überlebt den Trägerwechsel, entbehrlich wird nur das Format als alleiniger Träger), 3.3 verweist zurück. (4) Sektion-2-Hierarchisierung, Eröffnungsabsatz mit der Übersetzungs-Doppelung als Achse, drei ergänzte Einlösungssätze, gestraffte 2.4-Naht; die Argument-Map trägt jetzt eine Rolle-Zeile je Block (zwei Top-Träger K-1b und K-2.4a). (5) Die Selbstanwendungs-Episode bleibt auf Agent-Empfehlung außerhalb des Papertexts, dokumentiert in `paper-writing.md`. Referenzen Borgman und Schöch gesetzt.

### Dead Ends

Die Selbstanwendungs-Passage (Argument-Map-Episode als Beleg in 5.1 oder 6.2) wurde ausgearbeitet und verworfen; der ausarbeitende Agent selbst empfahl gegen den Einbau, weil ein fünfter selbstreferenzieller Zug mit unverifizierbarem Material die Evidenz-Disziplin des Papers unterliefe.

### Offen aus der Session

Die Verbreiterung der Schöch-Schulter (Entwicklung des Humanities-Data-Begriffs 2013 bis 2025, Kandidaten Flanders/Jannidis 2019, Owens, Posner, Collections as Data/Padilla, Borgman-Humanities-Kapitel, Edmond 2020) war als Recherche-Subagent unterwegs und ist beim Sessionende noch nicht eingegangen; der Prüfpunkt steht in `paper-writing.md`. Ebenso offen die Operator-Durchsicht der Argument-Map-Blöcke.

## 2026-07-23 — Theoriekette Modellierung, Argument-Map als Konzeptmodell des Papers

Dritte Session des Tages. Ausgangspunkt war die Operator-Frage, wie sich die Mapping-These (Promptotyping Documents als kontextualisiertes, strukturiertes Wissen, das auf Artefakte abgebildet wird) theoretisch argumentieren lässt. Nach einem Überblick über Kandidaten (Stachowiak, MDE, Davis/Shrobe/Szolovits, Latour, Rheinberger, McCarty, anglophone Modelltheorie Minsky/Giere/Morgan-Morrison) fiel die Entscheidung, aus dem eigenen erarbeiteten Bestand zu argumentieren. Die Verifikation am Diss-PDF ergab, dass die Dissertation die komplette Kette selbst zitiert (Stachowiak S. 57, Gruber-Definitionsgenealogie S. 134, Mayr/Thalheim-Vermittlung S. 57–59, McCarty S. 59 und 99, dort auch Latours ontological labour). Eingebaut wurden vier Passagen: Stachowiaks drei Merkmale mit der Konsequenz Artefakt-als-Modell-des-Modells und der stochastischen zweiten Abbildung als Verification-Begründung (3.3), die Gruber-Linie der Identitätsformel (3.3), die Semantic-Web-Inversion im Substrat-Absatz (3.3) und die DIKW-Prämisse des kognitiven Agenten (2.6). Referenzen Stachowiak 1973 und Gruber 1993 gesetzt und verifiziert; Broy/Berners-Lee-Sortierfehler in der Referenzliste behoben. Zweites Ergebnis der Session ist `knowledge/paper-argument-map.md`, das Konzeptmodell des Papers: jede tragende Argumentkette in Kompakt-Notation mit Bestätigungsstatus, entstanden aus dem Prüfmodus des Operators (Argumentation in formaler Notation abnehmen) und zugleich als Generierungsgrundlage ausgelegt, ein Distillation-Schritt der Methode auf das eigene Paper.

### Dead Ends

Anglophone Modelltheorie-Importe (Minsky 1965, Giere 2004, Morgan/Morrison 1999, Apostel 1961) wurden recherchiert und verworfen, weil der Operator aus dem selbst erarbeiteten Theoriebestand argumentieren will; die Diss-Verifikation bestätigte, dass dieser Bestand die Kette vollständig trägt.

## 2026-07-23 — Positionierungs-Anker, Konzeptmodell-Fundament, Katalog-Durchgang 3–7, Referenz-Verifikation

Zweite Session des Tages, drei Blöcke. Erstens Positionierung: Nach Web-Recherche wurden FAIR (2.3), FAIR4RS (4.1, 6.3, gestützt auf einen Kriterien-Check des szd-htr-Repos: stark bei Reusability/Provenienz und Accessibility, systematisch schwach bei Findability), RO-Crate und maDMP (3.3), TaDiRAH/Tool-Registries (4.2, Quelle Grallert et al. DHQ 2026) und Spec-Driven Development (2.5, Abgrenzung statt "no import from software engineering") ins Paper eingebaut; CRISP-DM wurde als Vergleichspunkt verworfen. Die zugehörige FAIR-Infrastruktur-Politik (MIT plus CC BY 4.0, Zitationsidentität mit ORCID, Releases ohne Kadenzvorschrift) ist vom Operator abgenommen und in `paper-writing.md` dokumentiert. Zweitens Theorie: Promptotyping Documents sind in 3.3 als semi-formale konzeptuelle Modelle (Mayr/Thalheim, über die Dissertation) fundiert; das neue Kernargument lautet, dass Frontier-Modelle den Formalisierungsschritt übernehmen, den die Modellierungstradition bisher als Menschenarbeit kannte (Rückverweis aus 2.4). Dazu Substrat-Absatz (Markdown als nativ verarbeitbares Format), Definitions-Fußnoten (Frontier LLM, Specification im RE-Sinn), Wheaton/Basel-Personas als Intro-Anker, präzisierte SCD-Genealogie in 2.6, Grounded Vault als benannte Architektur in 5.1, Machine Review als Mittelinstanz in 6.2. Drittens Konsolidierung: Katalog-Durchgang durch die Sektionen 3 bis 7, Abstract aus dem fertigen Text neu geschrieben, Streichliste ausgeführt (Status-Header, Fließtext-Quantitäten, Ankündigungssätze, "the author's"), Evaluationsfragen als eigener Abschnitt in `paper-writing.md`. Referenzen verifiziert und aufgelöst: Zenodo-Workshop-Record (v1.1.0, 2024), Berners-Lee-Titel (Farrar, Straus and Giroux 2025; Passage offen), Barbot et al. 2024 (JOHD), Mayr/Thalheim, Miksa, Broy/Kuhrmann, Macedo 2026 (SDD-Taxonomie), Pollin 2025d (CSL im Vault) und die L.I.S.A.-Publikation, die entgegen dem Arbeitsstand einzelautorschaftlich ist (Pollin 2026 statt Pollin/Steiner). Nebenprodukt der Session: der Fortunoff-Fall als Kandidat für Sektion 5 und als möglicher 2.4-Anker (Boundary-Object-Effekt in dokumentierter Zusammenarbeit).

## 2026-07-23 — Introduction-Neufassung, Stilkatalog, Wissensbasis-Refactor

Satzgenaue Feedback-Runden des Operators zur Introduction der v2. Die Eröffnung wurde inhaltlich neu fundiert: statt der Instrument-Dichotomie ein Affordance-Gradient (digitale Forschungsdaten sind nur durch Software zugänglich, generische Werkzeuge bis Gephi bleiben modellrelativ generisch), das Rechnungsbuch-Beispiel (Sozial- gegen Wirtschaftsgeschichte) mit Dissertations-Grounding, der Ursprung der Methode aus der DEPCHA-Flattening-Limitation (Diss 7.4). Sprachlich entstand ein Prüfkatalog, der jetzt normativ in `paper-writing.md` steht; Kernbefunde: leere Etikettsätze ("This gap is systematic") und Ankündigungssätze ("Three qualifications define the claim") sind AI-Slop und fliegen ersatzlos, Semikolon nicht als Ersatzkonnektor, "I" statt "the author", Werkzeug-Fußnoten mit Definition und URL, keine volatilen Quantitäten im Fließtext (die Projektzahl verschwindet aus Roadmap, später aus Abstract und Sektion 5). Die Etikettsatz-Regel ist zusätzlich im Projekt-Memory hinterlegt. Introduction und Sektion 2 sind katalog-durchlaufen; Sektionen 3 bis 7 und die Abstract-Neufassung stehen aus.

Auf Operator-Entscheidung wurde die Wissensbasis auf ein Zwei-Dokumente-Modell für das Paper-Schreiben umgebaut: `paper.md` (umbenannt aus `paper-v2-draft.md`) trägt den Text, das neue `paper-writing.md` das Wissen darüber (Arbeitsmodus, Kernaussagen, Sprachregeln, Entscheidungsstand, offene Prüfpunkte, Weg zur Einreichung). Gelöscht und dort zusammengeführt: `knowledge/plan.md`, `knowledge/paper-outline.md`, `knowledge/verification-paper-figures.md`, `knowledge/paper-draft-explorable-2026-07-23.md` und der Root-`PLAN.md`; die Volltexte trägt die Git-History (Stand `7c20964`). Im Grounded Vault wurde der Source-Identifier der Verifikations-Representation auf die commit-gepinnte URL umgestellt und der Registervermerk in `state.md` ergänzt; Validator grün (0 Fehler, 0 Warnungen).

### Dead Ends

Der Erhalt von `verification-paper-figures.md` wegen des Vault-Identifiers (Entscheidung 2026-07-20) ist durch das Commit-Pinning obsolet.

## 2026-07-23 — Paper-Zusammenführung zur v2

Der Operator übergab einen neuen vollständigen Working Draft v1 des Papers ("Making Research Data Explorable through Iterative Context and Agentic Engineering") mit eigenem Theorierahmen (Exploration als Forschung, Drucker, boundary objects, Möglichkeitsbehauptung). In mehreren Diskussionsrunden wurde die Zusammenführung mit der bestehenden Fassung `_content/paper/00–07` entschieden und gesteuert; die Entscheidungen sind in `paper-outline.md` (Entscheidungsstand) festgehalten. Wesentliche Weichenstellungen: Prototypen statt "bauen", Zwei-Achsen-Differenzierung von Semantikreichtum und Tokenökonomie der Forschungsdaten ("das Modell liest über die Daten und schreibt Code, der die Daten liest"), Research Software Engineering als vierte Antwort auf das Übersetzungsproblem und als Übergabepunkt, Semantic-Web-Linie bis Berners-Lee 2025 mit Inferenz-Bremse, Absage an Tool-Positivismus und Deskilling-Lesart, kein Superlativ, Funktions-Typologie (Verification, Exploration, Edition, Capture, Audit) als die Typologie des Papers, Konzept epistemic infrastructure aus dem Paper entfernt.

Angelegt: `paper-draft-explorable-2026-07-23.md` (Snapshot des Operator-Drafts), `paper-outline.md` (Gliederung und Einarbeitungsplan), `paper-v2-draft.md` (zusammengeführte Vollfassung als ein Dokument, wartet auf Operator-Lektüre). Das Zielbild von `plan.md` (additive Revision) ist durch die Zusammenführung überholt und nach Freigabe der v2 anzupassen; M3-Verifikationszahlen und M6-Standardisierungsstufe sind in die v2 eingeflossen.

## 2026-05-09 — Phasen 0, 2, 3 in einer Session, danach Critical-Expert-Korrektur

### Ziel der Session

Plan-Dokument im Vault unter `C:\Users\Chrisi\.claude\plans\ich-m-chte-dass-du-lovely-kazoo.md` umsetzen. Phasen 0, 2, 3 in einer zusammenhängenden Session, beginnend im Vault, dann ins Repo wechselnd. Anschließend Critical-Expert-Prüfung der angelegten Wissensbasis.

### Phase 0 — Vault-Reparatur

Korrektur der Source-of-Truth-Formulierung in mehreren Vault-Dokumenten. Die Aussage *"Promptotyping Documents sind die Source of Truth, Code ist deterministisch erzeugbar"* wurde im Wissensdokument `Applied Generative AI/Promptotyping.md` als methodisch ungenau identifiziert — das Pollin-2026-Paper formuliert wörtlich: *"the Promptotyping Documents ... are the primary artifact. The prototype is a functional by-product that may be discarded and regenerated from the documents."* Die paper-konforme Aussage trägt damit weniger als die "Source of Truth"-Rhetorik suggeriert.

Korrigiert in drei Vault-Dateien (sieben Stellen): `Applied Generative AI/Promptotyping.md` (Summary, Synthese), `Projects/Promptotyping/Vibe Coding, Promptotyping und AI Stewardship.md` (vier Stellen, plus zwei Wikilinks zur atomaren Quelle), `Patreon/Proto-AGI rollt schneller heran als erwartet.md` (eine Stelle).

Bewusst nicht angetastet: Vault-Operationen-Dokumente (verwenden "Source of Truth" für Repos/Schemas in anderer Bedeutung), historische Vortragsfolien (Leipzig 2025-12-02, Stand-Snapshot), VetMedAI-Archiv-Glossar.

### Phase 2 — Repo-Inventur und Bereinigung

Bestehender Repo-Stand vom November 2025: 6-Phasen-Methode, Living Paper v0.2 mit drei dekorativen Modulen, sieben alte Use Cases, paper-draft.md als zentrale Quelle. Methodisch überholt.

Entscheidung mit dem Critical Expert: **Radikaler Schnitt statt Archivierung**. Was nicht ins neue interaktive Paper gehört, wird gelöscht (Git-History bleibt natürlich erhalten).

Gelöscht:
- Top-Level: `README.md`, `DATA.md`, `DESIGN.md`, `INSTRUCTIONS.md`, `JOURNAL.md`, `REQUIREMENTS.md`, `paper-content.md`, `paper-draft.md`, `CHANGELOG_SESSION.md`, `install.sh` (VoiceMode-Installer, fremder Inhalt), `go` (leere Datei)
- Verzeichnisse: `herdata-knowledge/`, `paper-knowledge/`, `prototype/`, `public/`, `use cases/`, `.claude/worktrees/`

Behalten: `assets/promptotyping-logo.png`, `.claude/` (außer worktrees), `.git/`.

Gesichert als Schablone: `prototype/data.json` → `c:\tmp\promptotyping-old-data-schablone.json` (18 Case-Studies-JSON aus Living Paper, dient als Format-Vorlage für die neue `data/case-studies.json`).

### Phase 3 — knowledge/-Wissensbasis erste Fassung

Sieben Promptotyping-Documents nach den Vault-Vorlagen geschrieben:
1. `INDEX.md` (Vorlage Index v0.1)
2. `project.md` (Vorlage Projekt-Wissensdokument v0.1)
3. `data.md` (Vorlage Datengrundlage v0.2)
4. `specification.md` (Vorlage Specification v0.1)
5. `architecture.md` (Vorlage Architecture v0.1)
6. `design.md` (Vorlage Design v0.1)
7. `journal.md` (Vorlage Journal v0.1)

Plus `CLAUDE.md` im Repo-Root als Action-Layer und neue knappe `README.md`.

Erster Commit auf `main` (`fe2d479`): 74 Dateien, +1.136 / −19.001 Zeilen.

### Critical-Expert-Prüfung der Wissensbasis

Nach Anlage der Wissensbasis Prüfung gegen die Vorlagen-Konvention. Ergebnis: substanzielle Inkonsistenzen in mehreren Dokumenten. Die Prüfung folgt der Maßgabe der Konvention — *"Trigger pro optionaler Sektion prüfen"* — und stellt fest, dass auch die Vorlagen-Wahl als Ganzes triggerbedingt ist.

Befunde:

**Hauptbefund: Vorlage Datengrundlage trägt nicht.** Die Vorlage selbst sagt im Geltungsbereich: *"Die Vorlage trägt, sobald das Projekt Daten verarbeitet oder produziert. Bei reinen Tool-, Bibliotheks- oder Methoden-Repos entfällt sie; das Identitätsdokument trägt die Materialgrundlage dann selbst in einer kompakten Sektion."* Das Promptotyping-Repo verarbeitet keine Forschungsdaten — es spiegelt Wissen. Die Vorlage Datengrundlage hätte also nicht angewendet werden dürfen. Die Materialgrundlage gehört in `project.md`.

**Weitere Befunde**:
- Stand-Inkonsistenz zwischen `project.md` (sagte "Phase 3 läuft mit Anlage dieses Dokuments") und `journal.md` (sagte "Phase 3 abgeschlossen") — bei Lektüre nach Session-Ende verwirrend
- Begriffslexikon in `INDEX.md` ohne mehrere konstitutive Begriffe (Frontmatter-Inspector, Case-Study-Filter, Subpath-Alias, Genre)
- "Lese-Reihenfolge" in `INDEX.md` ohne Selbst-Erwähnung als Einstiegspunkt
- A4 in `specification.md` nur für Vorlagen-Subpaths, nicht für andere Anker-Typen (Konzepte, Case Studies, Glossar)
- A8 in `specification.md` ungelöste Frage zur Phasen-Klasse des Hero-Videos
- ADR-7 in `specification.md` mit unsauberer Zeilenschätzung "~100 Zeilen JS"
- Vault-Pfade in `data.md` falsch (relative Pfade `../../obsidian/`, real wäre `..\..\..\..\obsidian\`)
- Custom-Extension für marked.js in `architecture.md` erwähnt, aber nicht spezifiziert
- Lazy-Loading-Behauptung in `architecture.md` ohne Implementations-Spezifikation (IntersectionObserver fehlte)
- JSON-Schema für `data/case-studies.json` in `architecture.md` nicht definiert
- Spacing-System in `design.md` als "4px-Grid" beschrieben, faktisch 8px-Grid mit 4px-Halbschritt
- Mobile-Layout in `design.md` nur erwähnt, nicht spezifiziert
- Phasen-Klassen-Lücken (Code-Blöcke, Listen, Tabellen) in `design.md` nicht festgehalten
- Frontmatter-Inkonsistenz: `topics:` und `knowledge-sources:` nicht überall sinnvoll gesetzt
- `template:`-Feld zeigt auf nicht-existierende Anker (bewusst meta-rekursiv, aber funktional kaputt bis Sprint 1+2)
- Selbstgefällige Aussagen in `journal.md` ("Das ist die Probe aufs Exempel der Methode")

### Phase 3.5 — Refactor der Wissensbasis (Vorlagen-Trigger-Korrektur)

Lösung für den Hauptbefund: **`data.md` löschen, Inhalt in `project.md` als Materialgrundlage-Sektion integrieren**. Sechs Documents statt sieben. Die Vorlage selbst empfiehlt diesen Weg explizit ("das Identitätsdokument trägt die Materialgrundlage dann selbst").

Lösung für die anderen Befunde:
- `project.md` Stand auf "Phase 3 abgeschlossen" gesetzt, konsistent mit `journal.md`
- `INDEX.md` Begriffslexikon um sieben Begriffe erweitert (Frontmatter-Inspector, Case-Study-Filter, Subpath-Alias, Genre, `template:`-Feld plus Schärfung von "Vorlage" um Trigger-Logik)
- `INDEX.md` Lese-Reihenfolge schärft Selbst-Erwähnung
- `specification.md` A4 mit voller Subpath-Konvention für alle Anker-Typen (Tabelle)
- `specification.md` A8 mit expliziter Phasen-Klassen-Behandlung für Hero-Video
- `specification.md` ADR-7 ohne Zeilenschätzung, verweist auf `architecture.md` für Implementation
- `architecture.md` mit vollständiger Custom-Extension-Spezifikation (Tokenizer + Renderer für marked.js v9)
- `architecture.md` mit IntersectionObserver-basiertem Lazy-Loading-Code
- `architecture.md` mit JSON-Schema für `data/case-studies.json`
- `architecture.md` mit `404.html`-Routing-Code für alle Anker-Typen
- `design.md` Spacing-System als "8px-Grid mit 4px-Halbschritt" korrigiert
- `design.md` Mobile-Layout vollständig spezifiziert (Top-Bar mit IntersectionObserver, Bottom-Sheet mit Drag-Handle)
- `design.md` Phasen-Klassen-Lücken explizit dokumentiert (Code-Blöcke etc. ohne Lane)
- Alle Documents auf `version: 0.2` gehoben (Repo-weite Schema-Version)
- Frontmatter-Konsistenz: `topics:` und `knowledge-sources:` selektiv ergänzt wo sinnvoll, weggelassen wo nicht trägt
- `journal.md` Selbst-Lob entfernt, Beobachtungen sachlich formuliert

### Beobachtungen

**Die Critical-Expert-Prüfung war nötig**, nicht überflüssig. Eine LLM-generierte Wissensbasis kann substanziell, aber nicht selbstkonsistent sein. Die Prüfung fand zwölf inhaltliche Schwächen, eine davon strukturell (Vorlagen-Trigger). Ohne Prüfung wäre Phase 4 mit einer falsch fundierten Specification gestartet — speziell die fehlende JSON-Schema-Spezifikation und die fehlende Custom-Extension-Implementation hätten Sprint 1 oder 2 blockiert.

**Vorlagen tragen nicht automatisch.** Die Methode verlangt Trigger-Prüfung pro Sektion und pro Vorlage. Die Vorlage Datengrundlage v0.2 hat einen klaren Trigger formuliert ("Daten verarbeitet oder produziert"). Beim ersten Anlauf habe ich diesen Trigger ignoriert — vermutlich, weil "data.md" als Dateiname so etabliert ist, dass die Frage nach dem Trigger nicht aktiv gestellt wurde. Der Critical Expert hat sie gestellt.

**`template:`-Feld ist meta-rekursiv konstruktiv.** Die Verlinkung auf zukünftige Site-Anker zwingt, das Anker-Schema vor der Implementation festzulegen. In `specification.md` wird die Konvention für *alle* Anker-Typen definiert, was Sprint 1+2 die Arbeit erleichtert.

### Stand am Ende der Session

Repo-Verzeichnis nach Refactor:
```
.claude/    .git/    assets/    knowledge/    CLAUDE.md    README.md
```

`knowledge/` enthält **sechs** Documents (nicht sieben), alle auf `version: 0.2`. Die Wissensbasis ist die Specification, aus der Phase 4 Sprint 1 startet — diesmal mit gerechtfertigter Vorlagen-Wahl, vollständigem JSON-Schema, spezifizierter Custom-Extension und konsistentem Anker-Schema.

### Nächste Schritte

1. Zweiter Commit auf `main` mit der Refactor-Korrektur
2. Phase 4 Sprint 1 in eigener Session: Site-Skeleton, Paper-Lesefluss, Phasen-Provenance-Lane

Phase 4 wird in einer eigenen Repo-fokussierten Claude-Code-Session weitergeführt.

## 2026-05-09 — Sprint-1-Vorbereitung und URL-Schema-Korrektur

### Pollin-2026-Sektionierung

Das Pollin-2026-Paper liegt im Repo nicht mehr als ein Stück, sondern als sieben Section-Files unter `_content/paper/01-introduction.md` … `_content/paper/07-conclusion.md`. Die References-Sektion sitzt separat als `_content/literatur.md` unter eigenem Anker. Damit ist Sprint 1 das Substrat zum Lesefluss-Render bereitgestellt; Phasen-Klassen-Tags pro Absatz kommen in Sprint 1 oder 2 dazu.

### URL-Schema-Korrektur für Promptotyping-Document-Vorlagen

Erste Anlauf-Form (vor dieser Korrektur):

- Subpath `/vorlagen/{name}/{version}` (z.B. `/vorlagen/datengrundlage/v0.2`)
- Hash `#vorlage-{name}-{version}`

Diese Form hatte zwei Probleme. Erstens schreibt sie eine Versions-Angabe in jede Frontmatter-`url:` der Repos hinein. Bei jedem Vorlagen-Refactor müssten alle Repos, die per `template:`-URI verlinken, ihre URLs nachziehen — oder der Verweis zeigt auf eine veraltete Fassung. Das ist Pflege-Aufwand pro Repo bei jedem Vorlagen-Refactor. Zweitens ist `vorlagen/` der deutsche Slug, während der Hauptbegriff der Site "Promptotyping Document" ist — eine englische Konzept-Bezeichnung aus Pollin 2026 Section 3.3, die auch in den `template:`-URIs der Repos in englischer Form lebt. Der Slug-Wechsel zwischen Konzept und URL macht die Adressierung gegenüber der Konzept-Quelle inkonsistent.

Korrektur in dieser Session:

- Subpath `/promptotyping-document/{slug}` (Latest, kanonisch)
- Hash `#promptotyping-document-{slug}` (Latest, gleichwertig)
- Snapshot-Adressierung bei späteren Versions-Sprüngen über Hash-Sub-Anker `#promptotyping-document-{slug}-v{version}` bzw. Subpath `/promptotyping-document/{slug}#v{version}` — kein eigener Subpath pro Version mehr.

Acht Slugs: `data`, `index`, `project`, `specification`, `architecture`, `design`, `journal`, `user-stories`. Der Latest-Anker ist primärer und einziger Adresspunkt, solange keine Version eines Vorlagen-Slugs ablöst. Alle Repos, die `template:`-URIs in der Latest-Form pflegen, bekommen bei einem späteren Versions-Sprung automatisch die neue Vorlage; wer eine konkrete Version festschreiben will, hängt einen Sub-Anker an.

### Versions-Konsistenz: alle Vorlagen v0.1

Beim ersten Anlauf war die Annahme, die Vorlage Datengrundlage sei v0.2, die anderen sieben v0.1. Das war ein Vault-internes Artefakt — der heutige Refactor ist die erste öffentliche Fassung der Vorlagen, also sind alle acht einheitlich v0.1. Snapshot-Sub-Anker werden erst bei einem späteren Versions-Sprung relevant; heute existieren nur Latest-Anker.

### Eigene Wissensbasis konsistent mit `template:`-Feld

Die sechs `knowledge/`-Documents im Repo (`INDEX.md`, `project.md`, `specification.md`, `architecture.md`, `design.md`, `journal.md`) tragen das `template:`-Feld in der neuen Latest-Form, mit `url:` als Subpath und `alias:` als Hash. Damit demonstriert die Site die Methode an sich selbst (Akzeptanzkriterium A12): wer das Frontmatter eines dieser Files in den Frontmatter-Inspector pastet, sieht die zugehörige Vorlagen-Spezifikation gerendert — sobald Sprint 1+2 die Inhalte unter den Ankern ausliefert.

### `specification.md` und `architecture.md` angepasst

Die Anpassungen im Detail:

- A4-Tabelle in `specification.md` mit der neuen Anker- und Subpath-Konvention
- A5 mit Latest-URL im `template:`-Schema-Beispiel
- A11 mit Default-Frontmatter-Verweis und Snapshot-Fallback
- A12 mit angepasster Akzeptanz-Inspektion (`/promptotyping-document/{slug}` + Hash-Form)
- ADR-2 in `specification.md` neu gefasst: Latest primär, Snapshot über Hash-Sub-Anker
- ADR-3 mit Begründung für Latest-Adressierung und englischen Slug
- ADR-7 mit Latest-Default-Frontmatter
- 404.html-Routing in `architecture.md` parst `/promptotyping-document/{slug}` und übernimmt einen vorhandenen `#v...`-Hash als Snapshot-Sub-Anker
- Frontmatter-Inspector-Default-Frontmatter auf Latest-URL umgestellt
- Datenfluss-Block und Verzeichnis-Struktur auf `_content/promptotyping-document/` umbenannt
- `data/vorlagen.json` zu `data/promptotyping-documents.json`

### Sub-Agent-parallele Bearbeitung

Vault-seitig laufen parallel zwei Stränge in einer eigenen Sub-Agent-Session: Anpassung der Vault-Konvention für `template:`-Felder und Erweiterung der acht Vault-Vorlagen um den `template:`-Befüll-Block. Diese Vault-Änderungen liegen außerhalb des Repo-Scopes; sie kommen über die Vault-Spiegelung in den Sprint-2- bis Sprint-4-Iterationen ins Repo.

### Nächster Schritt

Sprint 1 in eigener Repo-Session: Site-Skeleton, Paper-Lesefluss, Phasen-Provenance-Lane.

## 2026-06-09 — Vault-Abgleich, Paper-Kanonizität, Konsistenz-Korrekturen, Vorlagen-Sweep gestartet

### Ziel der Session

Zusammenführung der Promptotyping-Bestände (Vault, Repo, flüchtige Bestände, System-Prompt-Entwurf) vor Sprint 1. Session lief vault-seitig mit gezielten Repo-Korrekturen; Scope-Ausnahme auf explizite Operator-Anweisung.

### Befunde und Entscheidungen

**Konventionsänderung User Stories im Vault nachgezogen.** Die am 2026-05-30 beschlossene Änderung (Epics und User Stories als Default-Sektion in `specification.md`, separate `user-stories.md` nur als dokumentierte Ausnahme großer Editionsprojekte) war im Vault noch nicht umgesetzt — Konvention, Vorlage Specification und Vorlage User Stories trugen den alten Default. Nachgezogen: Vorlage Specification auf Vorlagen-Version 0.2 (neue Sektion Epics und User Stories mit Validierungsstatus und Ableitung), Vorlage User Stories auf Ausnahme-Trigger, Konvention und Kataloge entsprechend. Konsequenz für die Site: Latest der Specification ist v0.2; da v0.1 nie publiziert wurde, ist ein v0.1-Snapshot-Anker vermutlich entbehrlich (Operator-Entscheidung beim Spiegeln in Sprint 2–4). Der Journal-Eintrag „Versions-Konsistenz: alle Vorlagen v0.1" (2026-05-09) ist damit überholt.

**Paper-Kanonizität entschieden.** Die sektionierte Fassung in `_content/paper/` ist die kanonische Arbeitsfassung des Pollin-2026-Papers; das Vault-Dokument trägt seit heute einen Verweisbanner als Lesefassung. Begründung: Die Sprints arbeiten auf `_content/`, eine Doppelquelle hätte bei der anstehenden Paper-Weiterarbeit zwangsläufig divergiert.

**CLAUDE.md-Anker-Schema korrigiert.** Die Sektion URL-Anker-Schema führte noch das obsolete Schema `#vorlage-{name}-{version}` und „Paper-Sektionen 1 bis 6" — beides Stand vor der URL-Schema-Korrektur vom 2026-05-09 und im Widerspruch zu den `template:`-Feldern der eigenen knowledge-Documents. Auf ADR-2/ADR-3-Stand gebracht (`/promptotyping-document/{slug}`, sieben Paper-Sektionen). Kein neues ADR nötig, nur Nachzug einer dokumentierten Entscheidung.

**project.md aktualisiert.** Stand auf Phase 3.5, Materialgrundlage auf die realen Vorlagen-Versionen (sieben v0.1, Specification v0.2), Paper-Absatz auf die Kanonizitäts-Entscheidung.

**Vault-seitig persistiert.** Der System-Prompt-Entwurf des Operators ist als `Projects/Promptotyping/Promptotyping-Site – Wissensdokument.md` im Vault gesichert (gegen Repo-Stand verifiziert, `human-reviewed: false`); ACTIVE-WORK führt den Site-Strang mit Sprint-1-Task.

**Vorlagen-Sweep gestartet.** Multi-Agent-Workflow über 35 lokale Promptotyping-Repos (Reader pro Repo → drei Synthesizer → adversariale Beleg-Verifikation) mit drei Zielen: Neuentwurf Vorlage CLAUDE.md/Action-Layer (größte Kataloglücke; Trennung Methodenkern vs. Tool-Spezifik), Schärfung Vorlage Journal (learnings, Context Memory, Session-Ende-Disziplin), empirische Validierung der Specification v0.2. Ergebnisse fließen als Belegbasis-Dokument und Vorlagen-Entwürfe (`human-reviewed: false`) in den Vault; Publikation über die Spiegelung in Sprint 2–4. Offenes ADR dabei: Anker-Namespace für die Action-Layer-Vorlage (neunter Slug unter `/promptotyping-document/` vs. eigener Typ), da `CLAUDE.md` im Repo-Root liegt, nicht in `knowledge/`.

### Stand

Phase 3.5 abgeschlossen, Sprint-1-Substrat bereit, Wissensbasis und Action-Layer konsistent. Sweep läuft.

### Nachtrag (gleicher Tag, Sessionabschluss)

Der Vorlagen-Sweep wurde auf Operator-Anweisung (keine Multi-Agent-Workflows mehr) vor der Verifikationsphase abgebrochen. Aus dem Workflow-Journal geborgen: alle 35 Reader-Ergebnisse plus die Synthesen Action-Layer und Specification; die Journal-Synthese wurde solo aus den Reader-Befunden nachgezogen, ersatzweise zur ausgefallenen adversarialen Prüfung wurden zwölf zentrale Belege per Stichprobe gegen die Repos verifiziert (alle bestätigt). Ergebnisse im Vault persistiert: neue Vorlage Action-Layer (`CLAUDE.md`, Entwurf, neunte Vorlage im Katalog), Belegbasis-Dokument „Action-Layer- und Journal-Praxis in Promptotyping-Repos 2026-06" (mit Journal-v0.2-Kandidaten und Specification-v0.3-Befunden), zwei zwingende Korrekturen in Vorlage Specification v0.2 (Beispiel-Sektion war doppelt veraltet: HerData konsolidiert, sugw führt `user-stories.md`; Begriffe-Definition formal/narrativ bereinigt). Rohdaten flüchtig unter `C:/tmp/promptotyping-vorlagen-sweep/`. Konsequenz für die Site: Die Sprint-2–4-Spiegelung umfasst neun Vorlagen; der Anker für die Action-Layer-Vorlage bleibt offen bis zum ADR Anker-Namespace.

### Nächste Schritte

1. Sweep-Ergebnisse human-reviewen (CEIL): Vorlage Action-Layer und Belegbasis freigeben, Vorlage Journal auf v0.2 heben
2. ADR Anker-Namespace Action-Layer-Vorlage vor Sprint-2-Spiegelung
3. Sprint 1 in eigener Repo-Session: Site-Skeleton, Paper-Lesefluss, Phasen-Provenance-Lane
4. Die ungecommitteten Repo-Änderungen dieser Session committen (CLAUDE.md, project.md, journal.md)

## 2026-06-10 — Phase 4: Site komplett implementiert (orchestrierte Session, Plan-Review, Kuratierung)

### Ziel der Session

Operator-Auftrag: die ideale Methodik-Site ausarbeiten und umsetzen — Paper, Vorlagen, Use Cases, Skills, Best Practices, Dokumentation. Auf Operator-Anweisung lief Phase 4 als eine orchestrierte Session mit vier Subagenten-Arbeitspaketen (Skeleton, Content-Spiegelung, Module/Sektionen, Politur) statt der geplanten fünf Einzel-Sessions; die Sprint-Schnitte blieben als Arbeitspakete erhalten. Alle Commits direkt auf main (Operator-Entscheidung, bestätigt).

### Plan-Review vor der Implementierung

Auf Operator-Wunsch wurde der Implementierungsplan vor dem Bau reviewt. Befunde:

1. **`.nojekyll` fehlte im Plan.** GitHub Pages publiziert Unterstrich-Verzeichnisse ohne diese Datei nicht; `_content/` wäre live unerreichbar gewesen, die Site tot. Behoben.
2. **Subpath-URLs erfüllen den Maschinenzweck nicht.** GitHub Pages liefert für Subpaths die 404.html mit HTTP-Status 404; Inhalt entsteht erst nach JavaScript-Ausführung. Ein Agent per HTTP-Abruf bekommt eine Fehlerseite. Entscheidung: statische Markdown-URL unter `_content/` als dokumentierte Maschinenadresse (ADR-10, `machine-url`-Frontmatter, Site-Anmerkung in konvention.md).
3. **Genre-Taxonomie war Insider-Vokabular.** Operator-Entscheidung: Use-Case-Typologie (Paper 4.3) als Primärfilter, Interface-Typ und Demo sekundär; Genre raus aus der UI (ADR-8-Nachtrag).
4. **Lücken gegenüber dem Auftrag:** Überblick (A13), Praxis (A14), Skills (A15) als neue Sektionen spezifiziert und gebaut; Konvention bekam ihren Sektionsbesitzer.
5. **Phasen-Lane:** Mechanismus (Inline-Tags plus marked-Extension) bestätigt; Klassifizierungs-Policy geändert auf ehrlich statt flächendeckend — nur Absätze mit erkennbarer Phasenzuordnung tragen Tags, Legende am Paper-Anfang ergänzt. Endstand: 23 getaggte Absätze, alle in Section 3; Sections 1, 2, 4 bis 7 bewusst ohne Tags. Critical-Expert-Nachprüfung durch den Operator offen.
6. Inter lokal gehostet statt Google Fonts (Tracking-Versprechen der Site).

### Kuratierung der Use-Case-Galerie (Operator-Entscheidung)

18 von 26 Vault-Case-Studies in der Galerie; ausgeschlossen wegen fehlender Kundenfreigabe bzw. Vermittlungsformat: VetMedAI-Wissensbilanz, Agentic Edition Pipeline, SuGW, wiiw-patent-analysis, wiiw-figaro-subagents, drei Screencast-Fälle. Sieben Tiefenseiten (coOCR-HTR ersetzt VetMedAI und Agentic Edition Pipeline; SuGW als Ersatz verworfen, da vom Kunden nicht freigegeben). Das vollständige Evidenz-Korpus bleibt im Paper dokumentiert; die Galerie sagt das explizit. ADR-9 entschieden: Action-Layer-Vorlage als neunter Slug `action-layer` (function before filename), Status Entwurf.

### Gebaut

- **Skeleton:** index.html, 404.html (Routing inkl. neuer Anker-Typen), style.css (DHCraft-Designsystem, lokale Inter-Fonts), app.js (marked-Extension, Lazy Loading, Lane-Interaktion, TOC-Scroll-Spy, Side-Panel-Gerüst), Vendor marked 9.1.6 und js-yaml 4.1.0, .nojekyll, Click-to-Load-Videos.
- **Content-Spiegelung:** neun Vorlagen-Mirrors mit machine-url, konvention.md mit Site-Anmerkung, Glossar (42 Einträge, md plus json), case-studies.json (18 Einträge, Use-Case-Schema v0.3), sieben Tiefenseiten, praxis.md (neun Methodenerweiterungen), skills/ (Coding- und Writing-Prompt verbatim), MANIFEST.md als Spiegelungs-Provenienz.
- **Module/Sektionen:** ueberblick.md plus Render, Vorlagen-Tabelle mit Side-Panels und Copy-Buttons, promptotyping-documents.json, Frontmatter-Inspector (A11), Use-Case-Galerie mit Filter, Praxis-/Skills-/Glossar-/Konventions-Sektionen, Glossar-Trigger im Paper, Literatur-Sprunglinks, Konzept-Alias-Anker.
- **Politur:** Mobile (Hamburger-TOC, Bottom-Sheet, Phasen-Top-Bar), SEO (OpenGraph, JSON-LD ScholarlyArticle, canonical), Accessibility (Fokus-Management, aria-pressed, Keyboard-Trigger), Konsistenz-Checks (TOC, Anker, fetch-Pfade, IDs).

### Befunde

- Ein abgebrochener Erstlauf des Content-Agenten hatte eine ungefilterte case-studies.json (27 Einträge inkl. aller ausgeschlossenen) und zwei verbotene Tiefenseiten hinterlassen; der Zweitlauf hat das erkannt und bereinigt. Lehre: Bei wiederholten Agentenläufen auf demselben Working Tree den Altbestand explizit in den Auftrag schreiben.
- CLAUDE.md führte noch das obsolete Paper-Anker-Schema `#paper-section-{n}` und die Jeder-Absatz-Lane-Regel; beides auf den Spec-Stand gezogen.
- Emoji-Scan über das gesamte Repo (alle Unicode-Emoji-Bereiche): null Treffer.

### Stand

Phase 4 abgeschlossen, Site lokal vollständig funktionsfähig und verifiziert (node --check, HTTP-Smoke-Tests, Headless-Render mit 9 Vorlagen-Zeilen, 18 Karten, 42 Glossar-Einträgen). HANDOVER-SPRINT-1.md gelöscht (Zweck erfüllt). Nicht gepusht; Push auf main ist operator-gated.

### Nächste Schritte

1. Operator: Push auf main, dann Live-Test des 404-Subpath-Routings und der GitHub-Pages-Auslieferung von `_content/` (lokal nicht testbar)
2. CEIL-Review: Phasen-Klassifizierung (23 Absätze, Section 3), gespiegelte Inhalte (Überblick, Praxis, Glossar, Tiefenseiten), Vorlage Action-Layer Freigabe
3. Vault-seitig: Maschinenadresse (ADR-10) in die Vault-Konvention übernehmen; Sweep-Folgearbeiten (Journal v0.2) wie oben
4. Logo-Optimierung (1.1 MB PNG, og:image)

## 2026-06-10 — Operator-Review nach Erstdeploy

Nach dem ersten Deploy hat der Operator die Site gesichtet und mehrere Eingriffe beauftragt. Umgesetzt in dieser Session (alles auf main, nicht committet):

- **Phasen-Provenance-Lane entfernt.** Auf Operator-Entscheidung ist die Lane vollständig ausgebaut: Legende, Mobile-Phase-Bar, Hover-Tooltip und Filter-Modus raus aus HTML, CSS und JavaScript. Die marked-Extension bleibt als reiner Tag-Stripper, der `{:.phase-*}`-Tags entfernt, ohne sie zu rendern. Die `{:.phase-*}`-Zeilen sind aus `paper/03-four-phases.md` und `ueberblick.md` gelöscht. Spec A2 als entfernt markiert, ADR-4-Begründung als Provenienz erhalten.
- **Site-Header und Site-Footer.** Sticky weißer Header (DHCraft-Logo plus Wortmarke links, Sektions-Nav und GitHub-Link rechts; Nav auf schmalen Viewports ausgeblendet, Mobile-Navigation über TOC-Toggle). Footer mit Träger-Hinweis, Repo- und YouTube-Link, Lizenzzeile und Maschinenadresse-Hinweis. Sticky-Offset über `scroll-margin-top` auf den Sektionen berücksichtigt. DHCraft-Logo als `assets/img/dhcraft-logo.svg` vendoriert.
- **Hero und Icon.** Hero rein typografisch; die `promptotyping-logo.png` aus dem Hero entfernt und dezent in den Kopf der Vorlagen-Sektion verschoben. `og:image` unverändert.
- **Video-Integration vollständig.** Alle sechs Prozessvideos ohne Verlassen der Seite abspielbar: Hero (Teil 1) und Section-4-Injektion (Teil 2) als Facade, Klawiter und coOCR-HTR als Facade in ihren Tiefenseiten (aus `video_url` der case-studies.json), Lucina und Kulturpool als Video-Affordanz auf den Galerie-Karten. Click-to-load durchgängig über youtube-nocookie.com.
- **Use-Case-Verweis.** Am Ende von Paper-Section 4 ein kompakter Verweisblock auf die kuratierte Galerie (Beispiel-Links plus Link auf `#use-cases`).
- **Neue Sektion Arbeitsumgebung** (`#arbeitsumgebung`, zwischen Skills und Glossar): Obsidian-Vault als Wissensumgebung, Promptotyping Agent Interface, AI Harness und Skills. Substrat `_content/arbeitsumgebung.md`, registriert in app.js, index.html, 404.html-Routing und TOC. Spec A17.
- **Überblick überarbeitet.** Satz über die grauen Striche entfernt; Abschnitt "Zwei Modi" ersetzt durch "Artefakte und Skalierung" (Methode artefakt-offen, Skalierung von der Chat-Session bis zum AI Harness).
- **Stilbereinigung.** Em/En-Dashes in den bearbeiteten deutschen Texten (ueberblick.md, MANIFEST.md, Tiefenseiten) durch Umformulierung entfernt; englischer Paper-Text unangetastet. MANIFEST um arbeitsumgebung.md ergänzt.

### Stand

Operator-Review-Eingriffe umgesetzt, JS syntaxgeprüft (node --check), case-studies.json valide. Nicht committet, nicht gepusht (operator-gated).

### Nächste Schritte

1. Operator: Sichtprüfung im Browser (Header sticky, Anker-Offset, alle sechs Videos, mobile Nav), dann Commit und Push auf main
2. Logo-Optimierung (1.1 MB PNG) weiterhin offen

## 2026-06-21 — Logo-Optimierung (autonome Politur in ruhender Lane)

Die order-promptotyping hat die eine buildbare Politur freigegeben: die Optimierung des 1.1-MB-PNG-Logos und seiner og:image-Referenz, reversibel und intern, autonom erledigbar. Umgesetzt:

- **Befund.** `assets/promptotyping-logo.png` war 1.154.138 B, 1024×1024 RGBA, 56.457 Unique-Colors und 102 Alpha-Stufen (Gradient-Flammen, weiche Kanten). Eine Datei bedient zwei Rollen: og:image (1024²) und die `.vorlagen-icon` im Vorlagen-Kopf, die per CSS nur 100px breit angezeigt wird (`style.css:827`).
- **Kandidatenmessung.** Fünf Varianten erzeugt und gegen das Original per MAE (mittlerer Absolutfehler je Kanal, 0–255) gemessen: Lossless-RGBA 1.060.733 B / MAE 0; Quant256-FASTOCTREE-1024 123.268 B / MAE 0,94; Quant256-600 40.625 B / MAE 0,95 (vs. herunterskaliert); WebP-q90-1024 157.076 B / MAE 9,35; WebP-lossless 731.562 B / MAE 0.
- **Entscheidung.** Quant256-FASTOCTREE @1024 mit Floyd-Steinberg-Dithering, in-place gespeichert. 89 % kleiner (1.154.138 → 123.268 B) bei MAE 0,94, visuell verifiziert (Read des Kandidaten: kein Banding, scharfe Kanten, Flammen-Gradienten erhalten). Begründung aus der Persona: PNG bleibt PNG (og:image-Crawler-Kompatibilität maximal), Dimension bleibt 1024² (kein Auflösungsverlust für og oder Icon-Retina), Dateiname und Pfad bleiben (alle drei Referenzen — index.html, 404.html, app.js:669 — bleiben gültig, keine Markup-Migration). Downscale auf 600² und WebP verworfen: ersteres senkt extern sichtbare og-Auflösung, letzteres ist für og:image bei manchen Crawlern unsicher und hatte höheren Fehler.
- **og:image-Referenz.** In index.html und 404.html die technischen Deskriptoren `og:image:type` (image/png), `og:image:width` (1024) und `og:image:height` (1024) ergänzt — Crawler rendern Karten zuverlässiger und ohne Nachladen der Maße. `og:image:alt` und eine Twitter-Card bewusst nicht gesetzt: das ist Inhalts- bzw. Feature-Scope, gehört in die Wachphase, nicht in eine reversible Politur.

### Stand

Logo-Politur abgeschlossen und nach main gesichert. Lane bleibt ruhend. Weckpunkt unverändert: Operator-Verdikt aus dem CEIL-Review (gespiegelte Inhalte, Phasen-Klassifizierung) und der Browser-/Subpath-Sichtprüfung. Keine weitere substantielle Arbeit bis dahin.

## 2026-07-19 — Wissensbasis-Richtigstellung nach dem Vault-Inhaltsaudit

### Ziel der Session

Die Befunde des vault-weiten Inhaltsaudits vom 2026-07-19 für dieses Repo beheben: die Wissensbasis beschrieb die am 2026-06-10 entfernte Phasen-Provenance-Lane in mehreren Dokumenten weiter als aktiv, führte die Tiefenseiten in zwei alten Achter-Listen, ein veraltetes case-studies-Schema und gedriftete Frontmatter.

### Verlauf

Lane-Referenzen in INDEX, project, architecture und design auf den realen Stand gezogen: die Lane als historische Entscheidung mit Verweis auf A2 und ADR-4, die Lane-Spezifikationssektion in design.md entfernt, die marked-Extension als Tag-Stripper beschrieben. Auch die specification trug die Entfernung außerhalb von A2 nicht durch (Lead, A8, A9, A13, Funktionsumfang); nachgezogen. Tiefenseiten überall auf die kuratierten sieben (A7), Vorlagen-Zählungen auf zählfreie Formulierungen mit Verweis auf den Vault-Katalog umgestellt, das JSON-Schema in architecture.md durch eine Paraphrase der realen v0.3-Struktur (`caseStudies`, `useCase`, `interfaceTypes`) ersetzt. Frontmatter repo-weit auf `version: 0.3` gehoben, `status` auf das seit 2026-07-19 erweiterte Konventions-Vokabular normiert (Knowledge-Dokumente `complete`, Journal `active`), `template:`-Versionen auf den Stand des Vault-Vorlagen-Sweeps.

### Ergebnis

Die Wissensbasis stimmt wieder mit Site und Code überein. Offen bleibt das Site-Update zum Vault-Vorlagen-Sweep: englisches Funktionsvokabular in den Spiegeln `konvention` und `ueberblick`, Spiegel und Anker der sechs neuen Vorlagen (Testing, Plan, Report, Domänenwissen, Verification, Integration), Versionsstände der bestehenden Spiegel, Entwurfs-Kennzeichnung des Action-Layers entfernen (A16). Dokumentiert in specification (A3, A16, Sektion Vorlagen) und project (Stand-Nachtrag).

### Dead Ends

Keine.

## 2026-07-19 — Plan-Workstream Paper-Revision angelegt

### Ziel der Session

Aus der Vault-Session (Diskussion Genealogie und Seitenlinie, Delegations-These, Projektzuschnitt) den Steuerungs-Workstream für die Paper-Revision in der Wissensbasis verankern.

### Verlauf

`plan.md` nach Vorlage Plan angelegt und im INDEX registriert: Zielbild (additive Revision mit Genealogie- und Standardisierungs-Teil, danach abgeleitete Ausgaben Blogpost, Site, Vault-Abgleich; Grounded Vault und das integrative Vier-Schichten-Paper ausdrücklich ausgeklammert und als eigene Vorhaben geparkt), sieben Phasen mit zwölf Milestones, Status-Tracker, offene Entscheidungen E1–E3. Bei der Verifikation gegen den realen Stand fiel auf, dass der lokale Vault-Klon der Session hinter origin lag; nach dem Fast-Forward zeigte sich der Vorlagen-Sweep vom 2026-07-19 (englisches Funktionsvokabular, Vorlagen Verification und Integration, Status-Vokabular mit `active` und `snapshot`, Vorlage Plan auf 0.2). Das plan.md wurde entsprechend korrigiert: `status: active`, `template: version: 0.2`, Sweep-Stand in M2 und M6, das offene Site-Update zum Sweep als vorziehbarer Teil von M11 übernommen.

### Dead Ends

Die im Promptotyping MOC des Vaults notierten ungemergten `claude/*`-Branches existieren remote nicht mehr; der Sichtungspunkt entfiel (MOC-Korrektur in M12 eingeplant).

## 2026-07-19 — Site-Update: Vault-Vorlagen-Sweep gespiegelt

### Ziel der Session

Das im vorigen Eintrag als offen dokumentierte Site-Update zum Vault-Vorlagen-Sweep umsetzen: Spiegel und Anker der sechs neuen Vorlagen anlegen, das englische Funktionsvokabular in `konvention` und `ueberblick` nachziehen, die Versionsstände der bestehenden Spiegel angleichen und die Entwurfs-Kennzeichnung des Action-Layers entfernen.

### Verlauf

Zuerst das Spiegel-Muster an den bestehenden Mirrors (`journal.md`, `specification.md`) und den Registrierungsstellen (`_content/MANIFEST.md`, `assets/js/app.js`, `404.html`) verifiziert. Befund: Das Rendering ist vollständig datengetrieben. Die Vorlagen-Tabelle wird aus `data/promptotyping-documents.json` generiert (`app.js` Zeile 655), das Routing für `promptotyping-document-{slug}` in `404.html` und `app.js` ist generisch, `openTemplatePanel` lädt `_content/promptotyping-document/{slug}.md` dynamisch. Ein neuer Spiegel wird damit allein durch die Mirror-Datei plus JSON-Eintrag funktionsfähig; keine Slug-Allowlist im Code.

Die sechs neuen Spiegel nach dem Muster der bestehenden angelegt (Frontmatter `title, slug, version, status, source, mirrored, machine-url`, Body aus der Vault-Vorlage mit auf Site-Anker aufgelösten Wikilinks). Der Domänenwissen-Slug ist `domain-knowledge`, wie ihn das `template:`-Feld der Vault-Vorlage selbst führt (englischer Slug, konform mit ADR-3); die im Auftrag genannte Alternative `domaenenwissen` wäre gegen die Konzept-Quelle inkonsistent gewesen. In `data/promptotyping-documents.json` alle Einträge auf englisches Funktionsvokabular gezogen, die sechs neuen ergänzt, Reihenfolge nach dem Vault-Katalog, Versionsstände und der Action-Layer-Status (`Entwurf` → `complete`) nachgezogen. In `_content/konvention.md` die Funktionen-Tabelle, den Vorlagen-Katalog und die Lese-Heuristik auf das englische Funktionsvokabular und die fünfzehn Vorlagen gebracht (Vorlagen-Namen bleiben deutsch, sie sind Identifikatoren), die Report- und Action-Layer-Status-Vermerke auf freigegeben gesetzt. `assets/js/app.js` von der festen Zählung „Neun Vorlagen" auf eine zählfreie Formulierung. Beim Action-Layer-Spiegel den Entwurfs-Banner entfernt, Frontmatter auf `complete`/0.2, und die zuvor offene Anker-Namespace-Stelle auf den durch ADR-9 entschiedenen Slug `action-layer` aufgelöst. `_content/MANIFEST.md` um die sechs Zeilen und einen Sweep-Nachtrag erweitert, die Versionsspalte angeglichen.

Der Spiegel `report.md` ließ sich nicht direkt über das Write-Werkzeug schreiben, weil ein PreToolUse-Hook Dateinamen mit „report" als Subagent-Berichtsdateien blockiert. Umgangen über einen neutral benannten Scratch-File plus `cp` an den Zielpfad.

### Ergebnis

Die Site führt fünfzehn adressierbare Vorlagen; die sechs neuen (Testing, Plan, Report, Domänenwissen, Verification, Integration) sind als Mirror-Datei, JSON-Eintrag und Site-Anker `#promptotyping-document-{slug}` registriert, jede mit `machine-url` nach dem Muster `_content/promptotyping-document/{slug}.md`. Funktionsvokabular in `konvention` und `ueberblick` (dort ohne Funktionskatalog, daher kein Eingriff nötig) auf Englisch. Action-Layer freigegeben. `knowledge/specification.md` (A3, A4-Slugset, A16, Sektion Vorlagen) und dieses Journal nachgeführt.

Nicht Teil dieses Updates: die vollständige Neuspiegelung der Bodies der acht übrigen Bestands-Vorlagen auf ihren Sweep-Inhalt (nur die `version`-Felder wurden angeglichen, wie beauftragt) und die Strukturprinzipien-Sektion in `konvention` (Axis außerhalb des Funktionsvokabulars). `plan.md` blieb unangetastet (führt der Orchestrator).

### Dead Ends

Keine.

## 2026-07-19 — Adversariale Verifikation der Sektion-4-Zahlen

### Ziel der Session

Milestone M3 des Plans: jede quantitative Angabe der Paper-Sektion 4 (Tabelle und Insights) gegen die realen Repositorien prüfen, mit Widerlegungsauftrag statt Bestätigungssuche. (Eintrag nachgetragen; die Session hatte das Journal nicht geführt, der Audit vom selben Tag hat die Lücke benannt.)

### Verlauf

Ein unabhängiger Agent prüfte sämtliche Zahlen über lokale Klone, Shallow-Clones und die GitHub-API. Befunde in drei Klassen: bestätigt, zu korrigieren (zehn Posten, nach Abweichungsgröße geordnet), nicht verifizierbar (Erfahrungswerte zu Dauer und Kosten, ein nicht mehr auffindbares Repository). Die Befunde wurden als eigenes Verifikationsdokument `verification-paper-figures.md` festgehalten, damit der Korrekturpass in einer späteren Session laufen kann.

### Ergebnis

Verifikationsdokument committet (2b95587). Die Korrekturen selbst blieben bewusst offen; die Momentaufnahme-Drift dreier weitergewachsener Repos (CorrespExplorer, M³GIM, ZBZ) wurde als editoriale Entscheidung (datieren oder aktualisieren) an den Operator gegeben.

### Dead Ends

Keine.

## 2026-07-20 — System Prompts repo-kanonisch und optimiert

### Ziel der Session

Die zwei System Prompts (Coding, Writing) waren bislang Vault-Spiegelungen mit `source:`-Verweis. Auf Operator-Entscheidung werden sie repo-kanonisch; die Vault-Quellen entfallen. Zugleich inhaltliche Optimierung.

### Verlauf

`_content/skills/coding.md` und `writing.md` von der Mirror-Rolle auf kanonisch umgestellt: Frontmatter `source:` und `mirrored:` entfernt, `status: complete` und `updated: 2026-07-20` gesetzt, `machine-url` und `slug` unveraendert. Die Prompt-Bodies optimiert: die ueberholte Formulierung „Code is deterministically generatable / Documents as Source of Truth" durch die Paper-Fassung ersetzt (primary artifact, functional by-product, Pollin 2026 §2.5); die Dokumenttyp-Listen des Coding-Prompts auf den aktuellen Funktionskatalog gezogen (specification, architecture, design, domain-knowledge, verification als First-Class-Funktion, report), Hinweis auf Trigger-Logik und `template:`-Adressierung ergaenzt, kompakter Multi-Agent-Block (`.claude/agents/`, Organisationsdokument, §3.5) und ein Satz zu deterministisch generierten Knowledge Documents; im Writing-Prompt zusaetzlich `verification.md` aufgenommen. `_content/MANIFEST.md` fuer beide Skills von „Vault-Spiegelung" auf „kanonisch im Repo" korrigiert.

Vault-seitig sind die zwei Quelldateien unter `Projects/Promptotyping/System Prompts/` geloescht und das Promptotyping MOC auf die Site-Anker `#skills-coding` und `#skills-writing` umgebogen (Commit im Obsidian-Repo).

### Ergebnis

Die Skills sind die maßgebliche Fassung der zwei System Prompts. Rendering unveraendert (Bodies im ```text-Block, `slug` und `machine-url` stabil).

### Dead Ends

Keine.

## 2026-07-20 — Wissensbasis-Currency (Slugs, Plan-Tracker, Handoff)

### Ziel der Session

Restdrift der Repo-Wissensbasis beheben, parallel zur Aktualisierung des Promptotyping-Wissens im Obsidian-Vault.

### Verlauf

`CLAUDE.md` URL-Anker-Schema von „Neun Slugs" auf fünfzehn gezogen (die sechs Sweep-Vorlagen Testing, Plan, Report, Domänenwissen, Verification, Integration ergänzt, Action-Layer-Entwurfsmarke entfernt). Den Status-Tracker in `plan.md` auf den realen Stand gebracht: M3 (Sektion-4-Zahlen) und M6 (Standardisierungsstufe) auf completed, die M5-Notiz um den erledigten Seitenlinien-Atom-Punkt bereinigt, M12 (Vault-Abgleich) auf in progress mit dem heutigen Fortschritt (Seitenlinien-Atom korrigiert, Promptotyping-Atom auf Paper-Stand, MOC aktualisiert). `HANDOFF.md` gelöscht, weil die Übergabenotiz vom 2026-07-19 inhaltlich überholt ist (Git-History sichert sie).

Nicht angetastet: `verification-paper-figures.md` bleibt, weil die Grounded-Vault-Representation seine GitHub-URL als `source:`-Identifier trägt.

### Dead Ends

Keine.

## 2026-07-23 — Technology Baseline, Vorlagen-Entwurf Technology, README-Neufassung

### Ziel der Session

Aus der Operator-Frage nach einem README, das das Repo als Methoden-Spezifikation abbildet, entstand die Idee eines projektunabhängigen Technologie-Wissensdokuments (Meta-Wissen zu statischen Webseiten als Forschungstools, Vanilla-Argumentation, Abhängigkeits-Politik, Nachhaltigkeit). Zusätzlich Abgleich des Papers gegen einen früheren Outline-Entwurf des Operators ("Making Research Data Explorable", Abstract plus Gliederung).

### Verlauf

Abgleich alter Entwurf gegen `paper.md`: alle tragenden Referenzziele des Entwurfs sind im heutigen Paper vorhanden (Drucker, Whitelaw, Hinrichs, Windhager, Galey/Ruecker, Koolen, Edmond, Siemens, Kemman, Star/Griesemer, Boundary Objects), die Übersetzungsthese ist vom Sektionsthema (2.4 des Entwurfs) zum Titel- und Theoriekern aufgestiegen, die Speed/Feasibility-Rahmung ist auf Operator-Entscheidung durch den Möglichkeits-Claim ersetzt. Die im Entwurf vorgesehenen technischen Guidelines (Sektion 4) existieren im Paper nur komprimiert (4.1); ihre operative Langform fehlte bislang und ist genau das heute konzipierte Baseline-Dokument.

Drei Entwürfe erzeugt, uncommitted zur Operator-Verifikation: `_content/technology-baseline.md` (Technology Baseline für die Artefaktfamilie statisches Web-Tool, deutsch, aligned mit Paper 4.1/4.3 einschließlich der Vier-Kriterien-Kompromissregel), `_content/promptotyping-document/technology.md` (Vorlagen-Entwurf Technology, Version 0.1, status draft; strukturiert Baseline-Dokumente als wiederverwendbare Knowledge Documents mit Referenz- und Abweichungsmechanismus), `README.md` neu als Landkarte des Repos (Methode kompakt, Inhalts-Inventar, Vorlagen-Tabelle ohne volatile Versionsspalte, Maschinenzugriff mit `template:`-Schema und Maschinenadresse, Selbstanwendung).

### Offen

- Vorlage Technology vault-first in den Katalog aufnehmen (echte Vault-Session); bis dahin ist der Slug `technology` nicht Teil des freigegebenen Katalogs und nicht in `data/promptotyping-documents.json`, `CLAUDE.md`-Anker-Schema und Vorlagen-Sektion der Site verdrahtet.
- Site-Verdrahtung der Technology Baseline entscheiden (eigener Anker oder nur Maschinenadresse).
- Folgeprojekt-Idee (Operator, 2026-07-23): Promptotyping-Wissensbasen über die `template:`-/Frontmatter-Metadaten repoübergreifend miteinander verknüpfen und als Kontextorganisation nutzen (Follow-your-nose über die Maschinenadressen). Bewusst kein Teil dieses Repos; bei Aufnahme eigener Diskurs.
- Demo-Projekt-Idee (Operator, 2026-07-23, aus der ZfdG-Venue-Analyse entstanden): Publikationskorpora mehrerer DH-Zeitschriften über die Zeit mit Opus-Subagenten explorieren und clustern, Forschungsinteressen-Verschiebungen zwischen Zeiträumen empirisch aus den Daten extrahieren (Kategorienbildung datengetrieben statt vorab gesetzt) und statistisch in einem statischen Frontend darstellen. Typologisch ein Exploration-Interface nach Paper 4.2 und ein kanonischer Promptotyping-Anwendungsfall; als eigenes Repo zu starten, nicht hier.

Nachtrag: Commit-Freigabe durch den Operator am 2026-07-23; damit ist die README-Neufassung englisch entschieden und `_content/MANIFEST.md` um beide neue Dateien ergänzt.

## 2026-07-23 — Lane-Durchgang zur ZfdG-Einreichung (sieben Opus-Agenten)

### Ziel der Session

Venue-Entscheidung für das Paper und paralleler Lane-Betrieb, um die Einreichung inhaltlich, formal und infrastrukturell vorzubereiten; Konsolidierung als Forschungsbericht.

### Verlauf

E1 entschieden: ZfdG (nach Recherche-Abwägung gegen DHQ, IJDH, DSH, TGDK-SI). Sieben Opus-Subagenten: drei zur ZfdG-Venue-Analyse (KI-Cluster, FDM-Cluster, Stilprofil), vier als Lanes (A Paper-Durchgang mit Lucina→Notker-Ersatz, Sprachpass 3–7 und zehn verifizierten Referenzen, Commit `c07e65f`; B drei Site-Konzeptvarianten mit Empfehlung Hub-Variante; C LICENSE/Dual-Licensing, Commits `c28cb17`/`b0e933c`; E SDD-Datierung und Schöch-Anker, verifiziert). Koordinator-Verifikationen: ZfdG-Formalia an den offiziellen Seiten (Exposé-Pflicht, zweisprachiges Abstract je 750 Zeichen, Fußnoten-Kurzbeleg, CC BY-SA), vier tragende Zitate wörtlich am Volltext, Lane-Diffs am Git-Stand. Operator-Entscheidungen im Chat: britische Schreibung bleibt; die Reasoning-Prompt-Seitenlinie vollständig aus 2.6 gestrichen (E2 damit entfallen); Berners-Lee-Passage bestätigt (Hörbuch, Gesamtzitation ohne Seitenzahl); organisatorische Punkte zurückgestellt. Scout-Nebenbefund mit Gewicht: die eigene ZfdG-Vorarbeit "When it was 2024" (2025_008) fehlte im Referenzverzeichnis, jetzt Kandidat höchster Priorität.

### Ergebnis

Konsolidierter Stichtagsbericht [report.md](report.md) mit sechzehn abnahmefertigen Feinschliff-Kandidaten, sieben offenen Operator-Punkten und der definierten Grounded-Vault-Nachzieh-Runde. `project.md`-Stand nachgezogen, INDEX um den Report ergänzt.

### Dead Ends

Keine; die amerikanische Schreibungs-Empfehlung des Stilprofils wurde vom Operator überstimmt (britisch bleibt), dokumentiert statt umgesetzt.

## 2026-07-23 — Fertigstellung des Papers: Umbau, Finalrunde, Politur, Einreichpaket

### Kontext

Fortsetzung nach Kontext-Kompaktierung. Der laufende Umbau-Agent (Lane A-3) hatte die Kompaktierung nicht überlebt und die Sektion 3.3 halb zerlegt hinterlassen (Stachowiak/Gruber-Absätze gelöscht, neue 3.4 nie eingefügt); das Material war aus dem Git-HEAD vollständig rekonstruierbar.

### Verlauf

Vier Opus-Runden auf `paper.md`, jeweils vom Koordinator gegen den realen Dateistand verifiziert:

1. **Umbau vollendet + Finalrunde A-4** (`cc34357`, `75747f8`): neue Sektion 3.4 „Documents as Conceptual Models" mit Brückensatz Repräsentations-/Übersetzungskette, Worked Example nach 3.5, alle Querverweise; operator-freigegebener Abstract und Introduction wortgleich eingesetzt (skriptgeprüft), Verflüssigung über Sektionen 2–7, Listen-Umbauten 4.1/5.3, Satzteilungen 3.3/4.2/5.2.
2. **Finalrunde Marker und Apparat** (`e8b41bd`): alle Klammermarker aufgelöst (Berners-Lee ohne Seitenangabe, Attributions- und Anker-Klammer 2.4 gestrichen, 4.3 qualitativ, 5.1 umformuliert; Operator-Regel: nie Seitenzahlen); Referenzen bibliographisch verifiziert und vervollständigt (Opus-Recherche, u.a. Grallert final in DHQ 20.1 mit sechster Autorin, Liu bei TOSEM angenommen und in 2.5 zitiert); Fußnoten Karpathy/Notker/teiCrafter; Video-Absatz 3.2 (Iterationspraktiken, beide Einführungsvideos); Ethik-Absatz 6.4 (asymmetrische Amplifikation, bewusste kritische Auseinandersetzung mit proprietären Frontier-Systemen, Pollin 2026a/b umbuchstabiert); Acknowledgements (Selbstanwendung, Modelle, Verantwortungsklausel); Audit-Fallblock aus 5.3 auf Operator-Entscheidung entfernt (FemPrompt bleibt im Inventar).
3. **Politur** (`f5fb3cd`): fünf Redundanzschnitte (Token-Ökonomie auf 2.3 zentriert, Double Addressee, Kapazitätsmauer, Evidenz-Vorbehalt, Drucker-Bullet), drei leere Etikettsätze gestrichen, Commit-Zahlen und „22 universities" als flüchtige Aktivitätsquantitäten entfernt, Standards-Fußnoten nach Operator-Regel (TEI, XML, RDF, OWL, TaDiRAH; RiC-O/CMIF in bestehenden Fußnoten; Alltagsformate ausgenommen, Regeln 20/21 in paper-writing.md), Glossen Kurrent/Reasoning-Model/vendored, Kursiv-Regel normalisiert, 3.4 und 5.2 strukturell geteilt; 5.2-Formationsphase konzeptionell kollektiv gefasst (Komponenten-zu-Projekt-Zuordnung bewusst nicht behauptet); ZBZ-Fußnote (öffentliches Frontend, Repo pending Partner-Freigabe) und Teaching-Case-Belege (ACDH-CH AI Winter School 17.02.2026 mit OSF-Datensatz; Museumsbund-Workshop NHM Wien 24.04.2026 mit Referenz-Screencast) aus dem Vault recherchiert und verifiziert.
4. **Koordinator-Nachtrag**: Bookkeeping Ontology mit Pollin 2019 (RODBH, CEUR-WS) zitiert, DEPCHA-Fußnote; Kreuzcheck der Selbstzitationen gegen chpollin.github.io ohne Lücken.

Parallel: ZfdG-Einreichpaket `submission-zfdg.md` (`a8025bf`) mit Exposé (487 Wörter), Kurz-Abstracts DE 731 / EN 739 Zeichen (Limits programmatisch verifiziert), Formalia-Checkliste; Review-Modus-Entscheidung auf Operator-Wunsch aus dem Repo in die Vault-ACTIVE-WORK verlagert.

### Ergebnis

`paper.md` ist vollständiger Draft zur Operator-Lektüre: null offene Marker, 28 balancierte Fußnoten, verifizierte Referenzen, End-Verifikation gegen die vier Kernverbote bestanden. Google-Docs-Übergabe über die headerlose Datei.

### Dead Ends

Der 2.4-Evidenz-Anker (Dokumentenset als Partner-Kommunikation) wurde gegen den dokumentierten Bestand geprüft und nicht gefunden; die Klammer wurde ersatzlos gestrichen statt überclaimt.

## 2026-07-23 — Wissensbasis englisch refaktoriert, Vault-Bibliographie-Durchgang abgeschlossen

Zwei Stränge nach der Paper-Fertigstellung. Erstens der Refactor der Kern-Wissensdokumente (INDEX, project, specification, architecture, design) auf kompaktes Englisch, je Dokument von einem Opus-Agenten gegen den realen Code verifiziert; Befunde dabei: ein fiktiver Code-Block in architecture.md ersetzt, elf Drift-Punkte zwischen design.md und style.css korrigiert oder als Abgleich-Flags dokumentiert (u.a. `#888888` off-palette, `--phase-*`-Altlastnamen), flüchtige Zählwerte durch qualitative Formulierungen ersetzt. Sprachregelung im INDEX festgehalten: Kern-Dokumente englisch, Prozess- und Steuerdokumente deutsch.

Zweitens der Grounded-Vault-Durchgang zur vollen Bibliographie-Rückführbarkeit nach freigegebenem Plan: Scope-Erweiterung als datierte Entscheidung, Register aller 69 zitierten Werke (`vault/knowledge/register-paper-sources.md`) mit Zugangsklassen, 67 neue CSL-Records, fünfzig Klasse-A-Quellen von vier parallelen Opus-Lanes ingestiert und quote-geprüft destilliert, 67 Claims, zwei neue Topic-Maps (Frame, ArtefactVerification), Chapter-Register um eine generierte Literatur-Grounding-Tabelle je Paper-Sektion erweitert, Validator durchgehend grün. Befunde erster Ordnung an die Paper-Arbeit geroutet (state.md): Barbot-2024-TaDiRAH-Überattribution in 4.2, Andorfer-25-MB-Trägerunschärfe in 4.3, Liu-Zitation in 2.5 noch am selben Tag repositioniert, Gruber-Seitenkorrektur (199 statt 134). Offen bleiben sechs Klasse-B-Werke (Operator-Kopien) und neun Klasse-C-Werke (Paywall), sichtbar im Register, sowie die Nachprüfung zweier Kemman-Zitate mit sauberem PDF-Extraktor.

## 2026-07-23 — Phase-A-Revisions-Audits und B/C-Literatur-Nachzug

Der Operator gab die vollständige Umsetzung der offenen Punkte frei. Das im Chat übergebene Revisionswissen wurde wortgetreu als `revision-knowledge.md` eingepflegt (INDEX-Eintrag, Koordinator-Anhang zum Erledigt-Stand), und die drei Prozessregeln daraus (anker-freie Audit-Aufträge, freies Lektorat vor Problemfeld-Kontakt, Steelman-Pflicht mit Operator-Schranke) stehen jetzt in `paper-writing.md`. Vier Opus-Audits liefen parallel mit anker-freien Briefs: A0 (freies Lektorat, geschlossener Lese-Scope), A1 (Claim-Evidenz, Transfer), A2 (Korpus, Zirkularität und Semantik-Mehrwert), A3 (redaktionell, Diffs mit Wortzahl-Bilanz); Reports als `revision-audit-a0` bis `-a3`, vom Koordinator gegen die Kernverbote nachbereinigt. Kernbild: keine Strukturmängel; die stärksten Konvergenzen sind der 5.5-Rang-Claim (A0 blind und A2 gezielt) und die SDD-Abgrenzung 2.5 (A0 und A3); A1 fand die Transfer-Behauptung bis auf einen Modusbruch in 2.6 bereits evidenztreu, A2 lieferte mit dem Notker-Fall echte Gegenevidenz gegen die reine Zirkularitätslesart. Die Phase-B-Fragen wurden dem Operator als nummerierte Liste vorgelegt; Entscheidungen stehen aus und gehören nach `revision-decisions.md`. Parallel schloss der B/C-Literatur-Nachzug im Vault ab (zwölf von sechzehn Werken in legitimen offenen Kopien gefunden und destilliert, vier bleiben acquisition open, Validator grün; Details im Vault-Journal), und die Kemman-Zitat-Nachprüfung bestätigte beide offenen Zitate wörtlich. Offen für die nächste Session: Phase-B-Entscheidungen des Operators, danach Phase C als Einzel-Commits; Operator-Kopien für Stachowiak, Berners-Lee 2025, Borgman, Broy/Kuhrmann, Drucker 2014; die zbz-Partnerfreigabe.

## 2026-07-25 — Begriffsklärung am Paper, erste Einarbeitungsrunde

Der Operator startete eine systematische Klärung aller Begriffe des Papers. Vorgehen: erst Inventar aller Termini mit ihren Definitionen im Papertext und ihrer Quellenlage, dann Klärung nach Tragfähigkeit, danach Einarbeitung. Zwischenbefund zum Prozess: Definitionen kaskadieren, und Substanzklärung und Formulierung wurden zunächst vermischt; vereinbart ist die Trennung in einen Klärungs- und einen Formulierungsdurchgang, mit einer Regel, dass ein beim Klären neu auftauchender Begriff notiert und zurückgestellt wird.

**Quellenentfernung.** Mähr/Federer/Kaspar 2026 wurde auf Operator-Entscheidung vollständig entfernt: die beiden Textstellen in 2.3 und 2.4, der Literatureintrag, die Nennung im ZfdG-Exposé samt Literaturauswahl, im Vault die CSL-Referenz, die Quelldatei, das Distillat, die zwei darauf gestützten Claims sowie die Einträge in Register, MOC-Frame und state. In 2.4 stand nach dem Schnitt ein Pronomen ohne Bezug, jetzt "This relocation holds". Die Nennungen in `report.md`, `revision-frame-proposal.md` und `paper-writing.md` bleiben als Prozessprotokoll stehen. Folge für 4.2: das Capture Interface hat damit keine Fremdquelle mehr.

**Neue Operator-Quellen.** Geiger 2023 (Forschungsdaten nach Funktionskriterien, ergänzt Borgman in 2.3) und Pichler/Reiter 2022 (Operationalisierung, schließt eine Lücke, die das Paper bisher nur über die eigene Dissertation trug). Beide als CSL-Record und Registerzeile im Vault mit Status `csl`; Distillate und Claims stehen aus. Drucker capta/data jetzt wörtlich, Stachowiak mit Seitenangabe 129–131.

**Eingearbeitete Begriffsklärungen.** Artefakttyp dreistufig, formatneutrale Definition in 1 (das leere "working" ersetzt durch die Lauffähigkeit auf den Projektdaten), statisches Web-Tool als begründeter Default in 4.1, Nebenformen (Pipeline, generiertes Dokument, Notebook, Custom GPT) als die Fälle, in denen eine Bedingung des Defaults bricht; Abstract entsprechend angeglichen. Übergabepunkt in 4.3 als Wechsel des Verpflichtungsregimes über fünf unabhängig kippende Achsen statt als Größengrenze, womit der Widerspruch zum Spektrum-Satz in 3.2 entfällt. Agentic Engineering und der Agentenbegriff als sechster Verortungsbegriff in 2.5, mit vier Merkmalen als Gradient und der Autonomiespanne als methodisch entscheidender Größe; in 1 die Verortung als Skalierung statt als Notwendigkeit. Promptotyp in 2.2 und 6.1 neu gefasst, das Erzeugnis wird regeneriert statt gepflegt, und sein Ertrag ist das Verständnis über Daten, Frage und Möglichkeitsraum statt dessen, was er den Dokumenten beibrachte. Promptotyping Documents in 3.3 als Wissensdokumente definiert (Operator-Arbeitsdefinition aus der Context-Engineering-Lehre, drei Eigenschaften duale Lesbarkeit, Kompaktheit, Portabilität), mit der Gleichsetzung zu den versionierten Markdown-Dateien aus 3.2 und der Versionierung über git; der umständliche Doppeladressaten-Absatz entfällt. Exploration in 3.2 um die eigene Datensichtung und die skriptgestützte Aggregation erweitert und mit einer Entfallsbedingung versehen; "dead ends are positive findings" gestrichen; die Distillations-Abbruchbedingung von "reconstruct" auf Aufnehmen und Weiterarbeiten abgeschwächt, weil Rekonstruktion der Nicht-Determinismus-Aussage in 6.3 widersprach. Evaluationsfrage als offene Future-Work-Frage am Ende von 6.5.

### Zweite Runde, Entscheidungen im Q&A-Verfahren

Der Operator stellte auf ein Frage-Antwort-Verfahren um, eine vorgelegte Definition je Runde. Vier Entscheidungen und zwei Recherchen.

**Forschungsartefakt** ist jetzt eine offene Gattung mit Software als Regelfall. Das Artefakt ist das, wozu die Dokumente für den Forschungskontext eines Projekts gemacht werden, an dessen Daten gebunden; neben Software ausdrücklich ein Workflow, ein Datenmodell, ein abgeleiteter Datensatz oder eine generierte Beschreibung. Die Bindung läuft über den Forschungskontext statt über die Forschungsfrage, weil der explorative Fall die Frage erst hervorbringt und die engere Fassung ihn ausgeschlossen hätte. §4.1 grenzt nur noch gegen das generische Werkzeug ab, der Abstract ist angeglichen. Damit entfällt auch der Widerspruch beim deterministisch generierten Dokument, das die Gattung nun trägt.

**Verifikation und Validierung** nach Operator-Schnitt, Verifikation ist die Prüfung durch den Fachexperten, Validierung die formale Regelprüfung. Eine Recherche zeigte, dass die maschinelle Hälfte den etablierten Gebrauch exakt trifft (XML, XSD, Schematron, SHACL, TEI-Praxis), die menschliche Hälfte dagegen gegen drei Traditionen läuft, gegen ISO 9000 und IEEE 1012, wo Validierung die auf Gebrauch und Stakeholder bezogene Prüfung ist, gegen die formalen Methoden und das aktuelle LLM-Nachtraining, wo Verifikation den deterministischen Fall bezeichnet, und gegen die wissenschaftstheoretische Vorbelastung des Wortes seit Popper. Publizierte Arbeiten mit diesem Schnitt gibt es nicht, Negativbefund der Recherche. Der Operator entschied den Schnitt mit Offenlegung. §6.2 heißt jetzt Verification and Validation und führt beide als Paar, die Festlegung steht im Text, die Offenlegung samt Normbelegen in einer Fußnote, ISO 9000:2015 und IEEE 1012-2016 stehen im Referenzverzeichnis und mit CSL-Record und Registerzeile im Vault, beide Zugangsklasse C. Die Reichweite ist auf die Prüfung des Erzeugten begrenzt, die fünf Stellen mit Methodenvalidierung bleiben unberührt.

**Dokumenttypologie** neu geschnitten. Der deklarative Untertyp hieß wie der Oberbegriff und heißt jetzt Declarative Documents, womit alle drei Namen den Modus bezeichnen. Der Operator stellte klar, dass alle drei Wissensdokumente sind, spezialisiert nach der Art des Wissens. Nach diesem Prinzip wurden die sechzehn Vorlagen zugeordnet, Sachwissen über den Gegenstand ist deklarativ, Wissen über den Arbeitsverlauf ist Prozess, Wissen über das Handeln ist Action; `testing` und `technology` sind damit Action Documents, `verification` bleibt deklarativ. Verworfen wurden die Ordnung nach Zeitform, weil ein Plan in der Zukunft liegt und kein Prozessdokument ist, und die Ordnung nach Adressierung, weil sie jede Verbindlichkeit zum Action Document macht.

**Urheberschaft.** Auf Operator-Einwand wurden die emerged-Formulierungen ersetzt, in §3.3 bei der Typologie und beim Kernsatz der Dokumente, in §4.2 bei den fünf Interface-Kategorien. Sie verschleierten, dass klassifiziert wurde.

**Versionierung, empirisch geprüft.** Ein Agent prüfte zwölf Repositories. Frontmatter ist die Regel, `updated` trägt die Praxis fast durchgehend, `version` steht in der Hälfte der Dokumente und wird nur in einem Teil der Repos tatsächlich hochgezählt, in anderen steht es seit dem Anlegen unverändert; auch wo es mitläuft, springt es seltener als sich der Inhalt ändert. Die git-Historie ist damit der verlässliche Mechanismus, und der Satz im Paper trifft die Praxis. Eine Versionsnummer gehört nicht in den Frontmatter-Pflichtkern. Zweiter Befund, Commit-Messages benennen Dokumentänderungen nur in dokumentzentrierten Repos verlässlich, in Pipeline-Repos gehen sie in Sammelcommits unter; rekonstruierbar bleibt die Änderungsgeschichte über den Dateipfad.

**Weitere Einarbeitungen.** Borgman und Geiger zu einer Definition zusammengeführt, Autorennamen aus dem Fließtext in die Klammer verlegt, was auch Schöch, Owens sowie Flanders und Jannidis betrifft. Das leere "functional" in §1 gestrichen. In §3.2 die zweite Promptotyping-Definition zur Ablaufbeschreibung umgebaut, dabei "constitute" und "downstream" entfernt und die Versionierung an die erste Verwendung gezogen. Die Asymmetrie von gepflegten Dokumenten und regeneriertem Artefakt in §2.2 explizit gemacht, die Diachronie der Dokumente in §3.3 ergänzt, den schweren Satz in §6.1 auseinandergezogen. Neues Arbeitsblatt [paper-terminology.md](paper-terminology.md) mit allen Begriffen, Fundstellen, Quellen und Statuscodes.

### Dritte Runde, Vault-Audit und Nachzug

Der Operator fragte, ob der Vault nach der Begriffsarbeit ein Refactoring braucht. Drei Opus-Agenten prüften read-only, danach zogen vier Lanes mit getrennten Schreibgrenzen nach.

**Befund.** Die Architektur hält. Alle Anker lösen auf, kein Claim ohne Distillat, kein Distillat ohne Quelle, der Validator und die Tests laufen sauber, die Instanz ist gegenüber dem Template unverändert konform, und die Entfernung der Mähr-Quelle ist vaultweit rückstandsfrei. Gedriftet ist ausschließlich die Steuerungsschicht, also genau der Bereich, den der Validator nicht liest.

**Die Wurzel.** Der Vault erklärte `_content/paper/` zum Deliverable, kanonisch ist `knowledge/paper.md`. Daraus folgte, dass das Kapitelregister eine nicht mehr geführte Ablage beschrieb und dass der aufwendigste Prüfvertrag des Validators, der Fußnotenabgleich über `30_deliverable/`, über einen leeren Ordner läuft und deshalb grün meldet, ohne etwas geprüft zu haben. Das vaulteigene Abdeckungswerkzeug meldet für den Papertext eine große Mehrheit prüffähiger Aussagen ohne deckenden Claim, allerdings über einen lexikalischen Abgleich, der eine Warnung und kein Urteil ist. Beides steht jetzt als datierte Entscheidung in `vault/knowledge/specification.md`, ausdrücklich als offene Schwäche formuliert.

**Nachgezogen.** Einundzwanzig Distillate und neunundzwanzig Claims in ihren Verweisen auf Paperstellen; die quote-geprüften Statements und die Anker blieben unangetastet. Sechzehn Zählclaims tragen jetzt einen datierten Vermerk, welche ihrer Zahlen das Paper nach der Politur nicht mehr führt, in drei Abstufungen für ganz entfallene, teilweise entfallene und inzwischen bestätigte Zahlen. Drei Claims sind als verwaist markiert. Bei zwei Dateien, deren Name die alte Sektionsnummer trägt, blieb der Name erhalten und der Text hält den Unterschied zwischen Prüfzeitpunkt und heutiger Struktur fest, damit Anker auflösen. In der Steuerungsschicht wurden der Deliverable-Ort an vier Stellen korrigiert, das Sektionsregister und die Claim-Abdeckung gegen die heutige Struktur neu gezogen, elf Rollenangaben im Quellenregister gegen den Papertext geprüft und korrigiert, die fehlende Inventarzeile für die m3gim-Vokabularableitung ergänzt und die widersprüchlichen Sammelzahlen durch einen Verweis auf das Register ersetzt. Ein Claim behauptete in seiner Prämisse mehr, als seine Anker tragen; die Prämisse ist gestrichen.

**Neue Schicht.** Der im Template vorgesehene, bisher leere Glossarbereich trägt jetzt einunddreißig Einträge, und zwar nach dem umgekehrten Auswahlkriterium. Aufgenommen ist, was keine Fremdquelle trägt, also die Eigenprägungen, die Stipulationen und die Arbeitsdefinitionen; belegte Begriffe bleiben draußen, weil Distillat und Claim sie bereits verankern. Fünf Einträge stützen sich auf eigene Publikationen, die übrigen weisen sich selbst als quellenlos aus. Wo eine Setzung gegen etablierten Gebrauch steht, hält der Eintrag die verworfene Alternative und den Grund fest; beim Begriffspaar Verifikation und Validierung ist damit auch der Negativbefund der Recherche gesichert.

**Fehler dieser Sitzung.** Die Änderung in 2.2 vom Forschungsfrage- auf den Forschungskontextbegriff war berichtet, aber nicht gesetzt; der Glossar-Agent fand die Abweichung, sie ist behoben.

**Offen nach beiden Runden.** Ohne Beleg bleiben die Herleitung der Dokumenttypologie aus dem Knowledge Engineering, die Confabulation, der Trading-Zone-Ursprung, die User Story, das Adversarial Machine Review und die Fremdquelle des Capture Interface. Zum SUGW-Projekt (`chpollin/db_for_medieval_legal_transactions_edition`, Veröffentlichung angekündigt) ist offen, ob die geschulten Projektbeteiligten selbständig weiterarbeiten; davon hängt ab, ob 5.4 einen zweiten Drittnutzungsfall führt. Nicht besprochen sind die Interface-Typologie in 4.2 samt der Operator-Anregung, sie mit den Taxonomien wissenschaftlicher Arbeit zusammenzuführen, die Phasen Preparation und Implementation, die Evidenz- und Diskussionsbegriffe sowie sechs Hilfsbegriffe, darunter der dreifach laufende Kontextbegriff. Außerhalb des Papers nachzuziehen sind die beiden Kurzabstracts und die Gliederung im ZfdG-Einreichpaket, die Typologie-Benennung auf der Vorlagenseite der Site und die Distillate für Geiger 2023 und Pichler/Reiter 2022.

### Vierte Runde, vier Operator-Antworten eingearbeitet

Der Operator beantwortete vier der offenen Fragen, und die Antworten stehen im Papertext.

**Genese.** Die Methode hat drei Vorläufer, und ihre Rollen waren vertauscht. Der Blogbeitrag von April 2025 ist der erste Gedanke und die Namensgebung, der L.I.S.A.-Beitrag vom Januar 2026 die erste ausgearbeitete Beschreibung, und die Dissertation liefert Problem und Vokabular. Der Satz in Abschnitt 1 führt sie jetzt chronologisch in einer Reihe statt in drei Nebensätzen.

**Berners-Lee.** Der Operator hat das Buch als Hörbuch rezipiert, was keinen zitierfähigen Lokator ergibt. Die Aussage im Paper ist deshalb auf das zurückgeschnitten, was der frei zugängliche Verlagsessay trägt, nämlich die Rückkehr zum persönlichen Agenten als unerledigtem Teil der Web-Geschichte. Die Zuschreibung, Berners-Lee verorte die Einlösung der Agentenidee in LLM-Systemen, ist gestrichen; das Argument des Absatzes hängt nicht an ihr, weil der folgende Satz den engeren eigenen Anspruch ohnehin abgrenzt. Die Registerzeile hält Rezeptionsweg und Grund fest.

**Confabulation.** Der Begriff ist jetzt belegt, über Summerfield 2025. Die Referenz ist im Paper, der CSL-Record im Vault, die Registerzeile trägt Zugangsklasse C und den Vermerk, dass die Hörbuch-Rezeption keinen Lokator liefert und das Paper deshalb ohne Seitenangabe zitiert.

**SUGW.** Im mittelalterlichen Rechtsgeschäfte-Projekt haben die geschulten Projektbeteiligten den Publikationsprozess selbst übernommen und durchgeführt. Damit gäbe es einen zweiten Fall selbständiger Drittnutzung neben dem Community-Fork. Die Nennung braucht die Zustimmung des Projekts, die noch nicht eingeholt ist; an der Stelle in 5.4 steht ein Markdown-Kommentar, der die Aufgabe und die Nachbesserung am Wortlaut festhält, und kein Fußnotentext, damit nichts Vorläufiges in den publizierten Satz gerät.

### Nachzug, die Restarbeit ohne Operator-Entscheidung

**Die Fußnote zu Verifikation und Validierung ist ganz belegt.** Die zweite Hälfte behauptete ohne Quelle, formale Methoden und das LLM-Nachtraining reservierten die Verifikation für den deterministischen Fall. Beide Belege stehen jetzt im Text, das Model Checking als automatische Entscheidung, ob ein System eine gesetzte Eigenschaft erfüllt (Baier/Katoen 2008), und das bestärkende Lernen mit verifizierbarer Belohnung, das das gelernte Belohnungsmodell durch eine deterministische Prüffunktion ersetzt (Lambert et al. 2024). Beide Werke haben CSL-Records und Registerzeilen.

**Zwei ungenaue Zuschreibungen.** Die Größenordnung in 4.3 stand als "tens of thousands of edition units", das Distillat trägt über sechzehntausend; der Text nennt jetzt die belegte Zahl mit dem Zusatz, dass eine Datei einer Einheit entspricht. Der Claimname im Vault behält seine alte Form, weil Anker auflösen müssen. Die zweite Zuschreibung, die dem Blogbeitrag eine Metadaten-Standard-Frage unterstellte, ist im heutigen Papertext nicht mehr vorhanden; sie fiel bei einer früheren Politur weg.

**Der Trading-Zone-Ursprung ist im Papertext.** Galison wird jetzt in Abschnitt 1 als Urheber des Begriffs genannt, mit Kemman als Beleg und Seitenangabe, weil der Vault den Ursprung im Kemman-Distillat wörtlich trägt und Galison selbst nicht gelesen ist.

**Die Dokumenttypologie ist auf der Site nachgezogen.** Die alte Benennung führte Knowledge, Process und Action als drei nebengeordnete Typen. Die neue Ordnung macht Knowledge Document zum Oberbegriff und die drei zu Spezialisierungen nach Art des Wissens. Betroffen waren `data/glossar.json`, `_content/glossar.md`, `_content/konvention.md` samt Lese-Heuristik-Tabelle und die Technologie-Vorlage. Der Slug `knowledge-document` bleibt und trägt jetzt den Oberbegriff, weil Anker nicht umbenannt werden; der neue Eintrag `declarative-document` trägt den Typ und nennt die frühere Benennung, damit ältere Verweise auflösbar bleiben. Im Papertext blieb eine Stelle stehen, die generierte Dokumente noch "Knowledge Documents in function" nannte, jetzt "Declarative Documents in function".

**Das ZfdG-Paket ist auf dem heutigen Stand.** Beide Kurzabstracts führen die offene Artefakt-Gattung und das Begriffspaar Verifikation und Validierung, die Gliederung nennt 6.2 unter dem neuen Titel, und die Modellierungstheorie im Exposé nennt jetzt Mayr und Thalheim statt Gruber, wie der Papertext. Beide Abstracts bleiben unter der Grenze von 750 Zeichen, geprüft mit 748 und 726.

**Der Vault kennt die Inventarpflicht.** `schema.md` führt sie beim Schichtenmodell, `operations.md` beim Prüfvertrag der Validierung, zusammen mit dem Grundsatz, dass ein Lauf ohne Fehler noch kein Erfolgskriterium ist, solange die Instanz ihren Erwartungswert an Warnungen nicht deklariert hat.

### Zwei nachgeholte Distillate, und was sie am Papertext korrigieren

Die beiden Quellen, die den Forschungsdatenbegriff in 2.3 tragen, waren nur als CSL-Record geführt. Beide sind jetzt beschafft, archiviert, quellenfest destilliert und mit je einem Claim an den Papertext gebunden. Der neue Inventarcheck meldete beide sofort als registerlos und die beiden Claims als von keiner Topic Map erreichbar, was er soll; nach dem Nachtrag läuft der Vault wieder auf null Fehler bei der einen erwarteten Warnung.

**Geiger 2023 sagt weniger, als die Zitation ihm zuschrieb.** Der Glossareintrag verweigert eine einheitliche Definition ausdrücklich und hält die Uneinheitlichkeit für einen Vorzug, weil der Begriff als diskursives Brückenkonzept arbeitet. Was er trägt, sind drei funktionale Selektionskriterien, das Begründungs-, das Wahrheits- und das Reproduktionskriterium. Genau diese drei stehen im Papersatz, jeweils als Pflicht, die die Daten einlösen; die Zuschreibung hält also, nur ist der Beleg ein Kriterienkatalog und keine Definition. Das steht als offene Frage im Distillat.

**Pichler und Reiter 2022 tragen die Hälfte des Wortes nicht, das im Papertext stand.** Die Operationalisierung war dort als Überführung in "observable and validatable instances" gefasst. Der Aufsatz definiert sie als Entwicklung einer Messung für einen Begriff und ist gegenüber der Validität im strengen Sinn ausdrücklich skeptisch, weil viele Begriffe kontextabhängig oder gar nicht präzise genug definiert sind. Der Satz führt jetzt die Definition der Quelle.

### Das Boundary Object ist entfernt

Operator-Entscheidung vom 2026-07-25. Der Begriff war durch eine Agentenrecherche ins Paper gekommen und stand dem Operator nicht aus eigener Lektüre zur Verfügung. Der Grund für die Entfernung ist inhaltlich: Star und Griesemer beschreiben die Zirkulation eines Objekts zwischen sozialen Welten, das Paper benutzte den Begriff für das Verhältnis von Forscherin und Modell, und ein Modell ist keine soziale Welt mit eigener Arbeitspraxis. Nach Stars eigener Nachschrift von 2010 gehören zum Begriff drei Komponenten, und der Papertext trug nur die erste, die interpretative Flexibilität, die er dem Agenten gegenüber gerade nicht will. Fünf Stellen sind angepasst, die Einführung in 2.4, der Rückverweis in der Genealogie, die Aufzählung in 6.5, der Übergabeabsatz und die zweite Kernbehauptung der Conclusion; der Literaturverzeichniseintrag ist gestrichen, das ZfdG-Exposé nachgezogen.

Die Trading Zone bleibt und trägt allein. Sie ist im Feld des Operators verankert, über Kemman und über die digitale Hermeneutik der Luxemburger Richtung, und war schon in der Dissertation in Gebrauch. Der Satz, dass die Trading Zone eine geschriebene Verfassung bekommt, hing an Star ohnehin nicht.

Im Vault bleiben Distillat und Claim als geprüftes Material und sind als verwaist markiert. Der CSL-Record bleibt ebenfalls, weil der Validator ihn als Quellensatz des Distillats verlangt; er hat jetzt keinen Eintrag im Literaturverzeichnis mehr, was der Bibliographievergleich als zweiten Record ohne Papereintrag meldet, neben soiland-2022. Das ist der erwartete Zustand.

### Zitierweise, Seitenangaben wandern in den Vault

Operator-Entscheidung vom 2026-07-25. Der Papertext führt Autor und Jahr, der Lokator sitzt in der Registerzeile des Vaults und, wo ein wörtliches Zitat geprüft wurde, im Distillat. Betroffen waren zwei Stellen, die Seitenangabe zur allgemeinen Modelltheorie und die zur Trading-Zone-Definition; beide stehen jetzt im Register. Die Regel steht in `paper-writing.md` unter Zitierweise.

Die Seitenangabe 129–131 zu den drei Modelleigenschaften ist damit zugleich bestätigt. Sie stammt aus dem Lehrmaterial, in das der Operator die Passage übernommen hat, und ist keine Vermutung; die Registerzeile hält Bestätigung und Herkunft fest.

**Zwei Operatorkopien sind keine.** Broy und Kuhrmann werden einmal zitiert, für den Spezifikationsbegriff des Requirements Engineering, ohne Lokator, ohne Zitat und mit der ausdrücklichen Feststellung, dass formale Vollständigkeit nicht beansprucht wird. Ein solcher Lehrbuchverweis trägt keine prüfbare Aussage, also braucht er kein Exemplar. Drucker 2014 steht neben Drucker 2011 als zweiter Ort desselben Capta-Arguments, das im Distillat zu 2011 wörtlich geprüft vorliegt; die Sekundärliteratur bestätigt, dass das Argument im Buch wiederkehrt. Beide Zeilen sind auf `no copy needed` umgestellt, mit Begründung. Offen bleibt damit als Operatorkopie nur Borgman.

### Berners-Lee, zurückgeholt in abgeschwächter Form

Der Operator bezeugt aus eigener Rezeption des Hörbuchs, dass Berners-Lee in den heutigen agentischen Systemen eine Bewegung auf die Agentenidee seiner Vision zu sieht. Der Satz in 2.3 führt das jetzt wieder, in der schwächeren Fassung, die genau diese Bewegung behauptet und keine Einlösung. Grundlage ist die Operator-Bezeugung, nicht ein Lokator; die Registerzeile hält beides fest, den Weg der Rezeption und den Umstand, dass der Satz bis zu einer Textausgabe auf der Bezeugung ruht. Die Abschwächung war vorher zu weit gegangen, weil sie den Satz auf das reduzierte, was der Verlagsessay trägt, und damit eine gelesene Aussage der Quelle unterschlug.

### Eine Fußnote zur Kopplung von Modellen und formalen Wissensstrukturen

Der Absatz zum Semantic Web in 2.3 sagt, dass das Arrangement dieses Papers ohne formale Inferenz auskommt und explizite Semantik als Kontext aufnimmt. Daran hängt jetzt eine Fußnote von zwei Sätzen, die die engere Kopplung benennt, die anderswo verfolgt wird, und sie als zweite Route kennzeichnet, auf der die Investition eines Fachs in explizite Semantik produktiv wird. Sie eröffnet keine Diskussion über Modellevaluation und keine über neurosymbolische Systeme; die Operator-Vorgabe war ausdrücklich, das Thema nicht aufzumachen.

Die erste Fassung war zu lang und stützte sich auf zwei Arbeiten von 2024, was der Operator zurecht als veraltet zurückwies. Sie steht jetzt auf einer Übersichtsarbeit vom April 2026, die Graphen, Modelle und Agenten zusammen behandelt und die Integrationswege nach Prompting, Augmentierung, Training und Agenten ordnet.

### Rückfluss ins Grounded-Vault-Template

Die drei Befunde dieser Instanz stehen jetzt im Template (`DigitalHumanitiesCraft/grounded-vault`, Commit `f74a014`), test-first umgesetzt, neun Tests grün, Ruff sauber.

**Der Inventarcheck** ist portiert, samt der beiden Fixtures, der Registerdatei im positiven Beispiel und dem nicht verzeichneten Dokument im kaputten. Das Template führt als Standardregister `knowledge/state.md`; diese Instanz führt zwei, weil sie das Quellenregister zusätzlich hat.

**Die Warnungen sind deklarierbar geworden.** Eine Instanz trägt ihre bekannten Warnungen unter `expected-warnings` in das Frontmatter der Specification ein. Alles darüber wird mit Stern gedruckt und getrennt gezählt, und eine Deklaration, die nicht mehr auslöst, meldet sich als `W-STALE-EXPECTATION`, was die umgekehrte Drift fängt, wenn ein Vertrag später doch greift. Diese Instanz deklariert `W-NO-DELIVERABLE`.

**Die Fixture-Anweisung ist korrigiert.** Das Template wies Instanzen an, `examples/` zu löschen, und lieferte gleichzeitig die Testsuite, die genau gegen diese Fixtures läuft. Der Setup-Schritt nennt jetzt den Grund, sie zu behalten.

Validator und Tests dieser Instanz sind auf den Template-Stand gezogen, damit die beiden nicht auseinanderlaufen; die Instanz hat einundzwanzig Tests, weil sie zusätzlich gegen den realen Vault prüft.

## 2026-07-25, Nachmittag: Videos als Quellen, vier Operatorentscheidungen, Umbau der Site beschlossen

### Die beiden Videos werden Quellen

Die Rohtranskripte der beiden Einführungsvideos vom Jänner 2026 lagen im Repo-Root. Sie sind zu lesbaren Skripten mit Zeitmarken aufbereitet (`knowledge/skriptum-video-1.md`, `knowledge/skriptum-video-2.md`) und anschließend in den Vault aufgenommen worden, bis einschließlich der Destillate. Die Rohfassungen liegen in `vault/_sources/`, die Repräsentationen mit Block-IDs unter `00_representation/documents/`, die Destillate tragen zusammen 84 Statements. Claims wurden bewusst nicht gebaut, weil sie an den Entscheidungen hingen, die unten stehen. Validator ohne Fehler bei der deklarierten Warnung, 21 Tests grün.

Der Ertrag ist größer als erwartet. Die drei Praktiken, die Abschnitt 3.2 bisher unbelegt behauptete, haben jetzt Anker. Dazu kommt operatives Wissen, das im publizierten Material fehlte, unter anderem die Begründung des Screenshot- und Konsolen-Rückkanals, die Fehleradressierung über den Identifier, das Journal als Ersatz des Commits, die Thinking Matrix als Konsistenzprüfung, die Zweischritt-Destillation mit Reasoning-Auftrag, die Formatökonomie zwischen XLSX und CSV und das Experteninterview als Preparation-Schritt.

### Vier Operatorentscheidungen

**Milestone-Verifikation als Norm mit benannter Ausnahme.** Das Paper behauptete, der Critical Expert verifiziere jeden Milestone vor dem nächsten, während der Mitschnitt zeigt, wie der Lauf auf eine bloße Fortsetzungsanweisung weitergeht und die Prüfung erst mehrere Milestones später kommt. Statt den Anspruch zu halten oder ihn zu streichen, führt Abschnitt 3.2 jetzt beides: die Prüfung ist pro Milestone geschuldet, der Aufschub ist eine Operatorentscheidung mit Preis, und er hinterlässt eine Prüfschuld, die vor Verwendung oder Übergabe einzulösen und im Prozessdokument festzuhalten ist.

**Die Iteration greift in jede frühere Phase zurück.** Bisher kannte der Text eine Rücksprungstelle, von der Implementation in die Distillation. Abschnitt 3.2 beschreibt den Wiedereintritt jetzt nach der Art der neuen Erkenntnis, in die Distillation bei falscher Spezifikation, in die Exploration bei einem Datenbefund, in die Preparation bei neuen Quellen. Die Begründung des Operators: eine iterative Context-Engineering-Methode, die nur eine Rücksprungstelle kennt, unterbietet ihren eigenen Namen.

**Zwei Urteile in der Rolle.** Das Video führt einen Expert Developer in the Loop neben dem Critical Expert. Statt einer zweiten Rolle benennt Abschnitt 2.5 jetzt zwei Urteile innerhalb der Rolle, das fachliche über Forschungsfrage, Datentreue und Kontextualisierung und das entwicklungsseitige über Workflow, Technologie und Artefaktform. Im hybriden Fall fallen sie zusammen, bei zwei Personen sind sie die beiden Seiten der Trading Zone, und die Dokumente sind die schriftliche Form der Übersetzung dazwischen. Damit hat der zweite Claim des Papers seine Prüfstelle im Methodenteil, statt von der Einleitung in die Diskussion zu springen.

**Konvention auf den Paperstand.** Der Pflichtkern geht von acht auf sechs Felder, und das Status-Vokabular wird über alle fünfzehn Fülltemplates vereinheitlicht. Umsetzung nach Abschluss des laufenden Konsistenzdurchgangs.

### Sprachentscheidung

Die Site wird vollständig englisch. Damit fällt die Regel, die eine englische Fassung aus Phase 1 ausschloss. Begründung: Paper, Vault, README, Template-Slugs und Maschinenadressen sind bereits englisch, und die Übertragbarkeitsbehauptung von Abschnitt 6.5 ist mit einer ausschließlich deutschen Spezifikation nicht einlösbar. Deutsch bleiben das Unterrichtsmaterial, das als solches ausgewiesen wird, und die Vorlagennamen, die Identifikatoren in fremden Frontmatter-Blöcken sind.

### Weitere Papereingriffe

Die LLM-Terminologie ist an sechsundvierzig Stellen gesetzt, mit Regel 22 im Prüfkatalog. Abschnitt 2.6 trägt jetzt die kompaktierte Bookkeeping Ontology als den Schritt zwischen dem formalen und dem semi-formalen Ende des Spektrums, nach Operatorauskunft eine Arbeit aus der Dissertationszeit. Das Datum des Asymmetric-Amplification-Posts ist geprüft und in die Referenz gesetzt. Die vierundneunzig URLs aus Paper, Literaturliste und README sind erreichbar; die beiden Repositories, die die Galerie verlinkt, antworten mit 404 und bestätigen die Angabe des Papers.

### Umbau der Site

Der Plan liegt in `knowledge/plan-site.md`. Die Site wird von der Paper-Publikation zur Spezifikation der Methode. Der Papertext bleibt als eigene Ansicht und wird künftig direkt aus `knowledge/paper.md` gerendert, womit die Spiegelung unter `_content/paper/` entfällt und die größte Driftklasse strukturell verschwindet. Glossar und Vault bekommen je eine Unteransicht.

### Abbruch zweier Agenten und was daraus offen bleibt

Die beiden Site-Agenten wurden gestoppt, bevor sie ihre Pakete abschließen konnten. Der Zustand ist geprüft und der Arbeitsbaum ist wieder in sich stimmig, aber die Pakete sind unvollständig.

**AP1 Paperansicht** hatte `app.js` vollständig umgebaut, `index.html` und `404.html` jedoch nur angefangen, sodass die Seite ein Element mit der ID `paper` erwartete, das es nicht gab. Der Rest ist von Hand nachgezogen worden: der Paper-Host in beiden Dateien, das Inhaltsverzeichnis auf die kanonische Gliederung, der Wegfall der eigenständigen Literatur-Sektion, die im Papertext selbst liegt, und die Entfernung der sieben gespiegelten Sektionsdateien. Geprüft ist, dass jedes Ziel des Inhaltsverzeichnisses einer erzeugten oder statischen ID entspricht, dass keine ID doppelt vorkommt und dass kein Codepfad mehr auf `_content/paper/` zeigt. Nicht geprüft ist das Rendering im Browser, also Fußnotenapparat, Sektionierung und Ankerauflösung im laufenden Betrieb. Das ist der erste Punkt der nächsten Sitzung.

**AP2 Konsistenzdurchgang** hat die dringende Arbeit erledigt, die toten Repo-Links sind aus Galerie und Tiefenseiten entfernt. Nicht erledigt ist der gesamte Glossarteil, `data/glossar.json` und `_content/glossar.md` sind unberührt. Offen bleiben damit die Dokumenttypologie im Glossar, der Phasenname, der zurückgenommene Primärartefakt-Anspruch, die Fünfzig-Prozent-Angabe, Asymmetric Amplification, Sycophancy, die Sektionsverweise in sechsundzwanzig Einträgen, die Vorlagenzahl, die Interface-Typologie, der Eintrag zur entfernten Phase Lane sowie die Quellenliste in `_meta`, die noch auf die gelöschten Spiegeldateien zeigt. Ebenso offen sind `_content/literatur.md` und die Zahlendifferenzen der Case Studies.

Da die Site ohnehin auf Englisch umgestellt wird, ist zu prüfen, ob der Glossarteil dieses Pakets direkt in der Übersetzung erledigt wird statt zweimal.

## 2026-07-25, zweite Sitzung — Kritik-Durchgang am Paper und Umsetzung

Der Operator hat eine konstruktive Kritik des Gesamttexts angefordert. Fünfzehn Befunde, im Chat einzeln entschieden, die Entscheidungen und ihre Umsetzung stehen vollständig in `paper-writing.md`. Die vier folgenreichsten: der Titel bleibt, weil die Übersetzung von Daten in Artefakte tragendes Argument ist und am 2026-07-24 allein die Gleichsetzung mit der Vermittlung zwischen Fachwissenschaft und Entwicklung gestrichen wurde; die früheren Sektionen 2.1 und 2.2 sind zusammengezogen, womit alles Folgende in Sektion 2 eine Nummer nach unten rückt; der Artefaktbegriff in Sektion 1 ist auf das eingeschränkt, was das Inventar belegt; und die Lehrfälle in 5.4 beanspruchen nur noch Kommunizierbarkeit.

Ein Befund ist ausdrücklich abgelehnt worden. Ein Negativfall wird nicht geschrieben. Die Offenlegung in 5.1 bleibt die Stelle, an der die Lücke benannt ist, und die abgeschaffte agentenbasierte Screening-Stufe steht ohnehin in 3.4.

Neu belegt ist die Eröffnungsprämisse. Carver et al. 2022 tragen den gemessenen Unterdeckungsbefund, die Zuspitzung auf den Long Tail bleibt markierte Inferenz. Quelle, Distillat und Claim liegen im Grounded Vault, dessen Sektionsverweise mit umnummeriert sind; die Repräsentationsschicht blieb unangetastet.

Offen für die nächste Sitzung: die Site rendert `knowledge/paper.md` direkt, also erbt sie die neue Sektionsstruktur automatisch, aber das Inhaltsverzeichnis in `index.html` und `404.html` führt die Sektionen von Hand und muss auf die fünf Untersektionen der 2 gezogen werden. Ebenso offen bleibt der Glossarteil aus der vorigen Sitzung.

## 2026-07-25, dritte Sitzung — AP2 und AP5, Konsistenzdurchgang und Glossar

Operator-Entscheidung zum Zuschnitt: das Glossar ist das Vokabular der Methode und der Site, nicht nur des Papers. Begriffe, die der Papertext nicht führt, bleiben und weisen sich in der Quellenzeile als Site-Vokabular aus. Vier Begriffe aus dem heutigen Papertext sind neu aufgenommen, Forschungsartefakt, Agentic Engineering, Spec-Driven Development sowie Verification und Validation.

Der Befund war größer als der Journaleintrag der vorigen Sitzung. Sämtliche Quellenanker der 43 Einträge zeigten auf die ursprüngliche Sieben-Dateien-Gliederung, nicht erst auf die gestern verschobene Nummerierung. Neu gefasst sind der Methodeneintrag ohne die zurückgenommene Primärartefakt-These, die Phase Exploration unter ihrem heutigen Namen, Asymmetric Amplification nach der Definition in 6.4 statt über die jagged frontier, die Interface-Typologie mit allen fünf Kategorien, Verification Milestone und Promptotyping Interface gegen den heutigen Artefaktbegriff, die Vorlage mit den englischen Funktionsnamen statt der überholten Neunerzahl, und die Phasen-Provenance-Lane im Präteritum als entferntes Feature. Zwei unbelegte Quantitäten sind gestrichen, die Fünfzig-Prozent-Angabe zum Kontextfenster und die Zustimmungsraten bei Sycophancy; beide stehen jetzt qualitativ, wie das Paper sie führt. `_content/glossar.md` wird ab sofort aus `data/glossar.json` erzeugt statt von Hand gepflegt.

Der Konsistenzdurchgang hat außerdem die Architekturdrift beseitigt, die die Umstellung auf das direkte Rendern hinterlassen hatte. `_content/literatur.md` war seit AP1 verwaist und ist gelöscht; die Literatur-Sektion der Navigation zeigt auf das Referenzverzeichnis des Papers selbst. `architecture.md`, `specification.md`, `MANIFEST.md`, `CLAUDE.md`, `INDEX.md`, `project.md`, `paper-writing.md` und vier Vault-Dokumente beschrieben weiterhin den zerlegten Schnitt unter `_content/paper/` als Publikationsform; sie sind auf den tatsächlichen Bauzustand gezogen. Historische Dokumente, also Journale, Revisions-Audits und die Repräsentationsschicht des Vaults, bleiben unangetastet.

Offen aus diesem Paket: die Case-Study-Galerie führt achtzehn Fälle gegen dreizehn Zeilen im Papierinventar, darunter Aldersbach und Lucina, die der Operator aus dem Paper genommen hat. Die Kuratierungsnotiz in `data/case-studies.json` deckt eine Abweichung ausdrücklich, sie deckt aber nicht, dass zwei Fälle auf der Site stehen, die das Paper bewusst nicht mehr führt. Das braucht eine Entscheidung.

## 2026-07-25, vierte Sitzung — AP3 und AP4, und ein gravierender Renderfehler

Der Browser-Check, der seit zwei Sitzungen offenstand, hat einen Fehler gefunden, der die publizierte Site seit dem Umstellungs-Commit `39d7bcf` betroffen hat. Sichtbar waren nur Abstract und Einleitung, die Sektionen 2 bis 7 fehlten vollständig. Ursache war ein unverankertes `\s*$` in der Leerzeilen-Sperre des Fußnoten-Tokenizers. Ohne `m`-Flag trifft `$` allein das Ende des ganzen Dokuments, weshalb die letzte Fußnotendefinition, die im Papertext zwischen Sektion 1 und Sektion 2 steht, den gesamten Rest als Fortsetzungszeilen verschluckt hat. Der Renderer der Definitionen gibt einen Leerstring zurück, also verschwand der halbe Text ohne Fehlermeldung. Der Fehler war weder an der Konsole noch an der Dateistruktur zu sehen und nur im gerenderten DOM. Lehre für die Zukunft: eine Renderpfad-Änderung gilt erst nach einem Blick in das gerenderte Dokument als erledigt.

AP3 hat drei Seiten gegen den kanonischen Papertext geschrieben, Anwendung mit den vier Phasen in Handlungsauflösung, Artefakt und Grenze, Verifikation. Die Lesespalte führt jetzt die Methode zuerst und das Paper zuletzt, was den im Plan beschriebenen Rollenwechsel vollzieht.

AP4 macht die Belegschicht öffentlich. Sieben Topic Maps mit ihren Claims, ein Claim öffnet sich im Seitenpanel mit Aussage, Status und Ankern, und die Anker verlinken auf die Distillate im Repositorium. Zur Architektur hat der Operator gefragt, was die bessere Entscheidung ist. Der Generator liegt jetzt unter `vault/tools/build_site_index.py` und erzeugt das committete `data/vault.json`. Begründung: die No-Build-Regel zielt auf Build-Schritte zur Auslieferzeit, und ein einmalig im Scratchpad erzeugter Index hätte genau die Driftklasse neu angelegt, deren Beseitigung die vorige Sitzung gefüllt hat. Die Ausnahmeklausel in der CLAUDE.md ist entsprechend erweitert, ebenso das Anker-Schema um `#vault` und `#vault-{claim-slug}`.

Alles headless getrieben und geprüft: zehn Papersektionen, dreißig Fußnoten gegen dreißig Referenzen, vierundvierzig Glossar-Trigger, sieben Topic Maps mit hundertsiebenunddreißig Claim-Einträgen, keine leere Sektion, keine Ladefehler, und ein Klick auf einen Claim öffnet das Panel mit korrekten Ankerzielen.

Die Case-Study-Frage ist entschieden. Aldersbach und Lucina bleiben in der Galerie, und die Kuratierungsnotiz sagt jetzt ausdrücklich, dass die Galerie ein eigenes Raster fährt und Fälle führt, die das Paper nicht mehr führt.

## 2026-07-25, fünfte Sitzung — AP6, AP7 und die Glossar-Navigation

AP7 ist zur Hälfte erledigt. Der Vorlagen-Katalog trägt jetzt eine Spalte „Trägt, wenn", die pro Vorlage das Kriterium nennt, unter dem ihre Funktion einschlägig ist. Die Kriterien standen bereits in der Funktionstabelle der Konvention und sind von dort abgeleitet, nicht neu erfunden; die Zuordnung läuft über das Funktionsfeld der Vorlage. Die zweite Hälfte, die Katalogisierung der Vorlage `technology`, bleibt liegen. Der Vorlagenkatalog wird vault-first gepflegt, und eine neue Vorlage im Repo anzulegen, ohne dass die Vault-Vorlage existiert, würde genau die stillschweigende Divergenz erzeugen, die die CLAUDE.md verbietet. Das braucht eine echte Vault-Sitzung.

AP6 ist umgesetzt und war nicht mehr blockiert. Die beiden Videoskripte liegen seit der Vault-Sitzung vom selben Tag als bereinigte Repräsentationen mit Block-IDs vor, womit das Material da war, auf das der Plan gewartet hat. Die Seite führt den Fall durch die vier Phasen und hebt drei Stellen heraus, an denen die Aufzeichnung methodisch mehr zeigt als eine Beschreibung: die nachgeholte Exploration mitten in der Implementierung, die aufgeschobene Milestone-Prüfung mit ihrer Verifikationsschuld, und das Design-Experiment als bewusstes Abtasten des Möglichkeitsraums. Die Dateizahl ist bewusst qualitativ gehalten, weil die Quelle selbst zwei verschiedene Zahlen führt und keine davon gegroundet ist.

Das Glossar hat eine eigene Navigation bekommen, eine Zeile mit den Anfangsbuchstaben, die auf den jeweils ersten Eintrag springen. Damit ist auch Punkt 11 des Zielzustands erfüllt.

Der Plan ist auf Stand gezogen. AP1 bis AP7 sind umgesetzt, offen aus dem Zielzustand bleibt allein der Pflichtkern der Konvention, den Punkt 5 auf eine Fassung entschieden haben will; das ist eine Operator-Entscheidung.

Geprüft im gerenderten DOM: vierzehn Sektionen in der geplanten Reihenfolge, die Workflow-Seite gefüllt, fünfzehn Trigger-Zellen im Katalog, zwölf Sprungmarken im Glossar, hundertsiebenunddreißig Claim-Einträge in der Vault-Ansicht, zehn Papersektionen, keine leere Sektion, keine Ladefehler.

## 2026-07-25, sechste Sitzung — AP8, Umbau zur Spezifikationsdokumentation

Der Operator hat nach der fünften Sitzung festgestellt, dass das Frontend weiterhin aussieht wie vorher. Das war zutreffend und lag am Plan selbst. AP1 bis AP7 haben Inhalt, Reihenfolge und Rollenverhältnis umgebaut, ein visueller Umbau stand in keinem der sieben Pakete. Die Stylesheet-Änderungen der letzten Commits waren additiv, für die Vault-Ansicht, die Trigger-Spalte und die Buchstaben-Navigation; Kopfzeile, Typografie, Spaltenlayout und Seitenleiste stammten unverändert aus dem Erstdeploy. Es war ein anderer Text im gleichen Gehäuse.

Die Zielvorgabe kam dann präzise: eine Spezifikationsdokumentation, wie sie eine Programmbibliothek oder eine publizierte Ontologie führt. Die Startseite ist die Spezifikation, alles Weitere sind eigene Unterseiten. Das ist als AP8 in den Plan aufgenommen.

Umgesetzt ist damit ein Wechsel des Seitenmodells. Bisher lagen vierzehn Sektionen und das gesamte Paper in einer durchgehenden Scroll-Spalte, darüber ein zentrierter Titel mit Video. Jetzt ist eine Seite zur Zeit sichtbar, der Navigationsbaum in der Seitenleiste ist das Inhaltsverzeichnis, und rechts steht eine Leiste mit den Überschriften der aktiven Seite. Der Baum gruppiert nach Spezifikation, Referenz, Praxis und Paper.

Tragend dafür ist ein Seitenregister in `app.js`. Aus derselben Liste entstehen die Seitencontainer, der Navigationsbaum, die Routenauflösung und der erzeugte Spezifikationsindex auf der Startseite. `index.html` und `404.html` tragen deshalb überhaupt keine Navigationsmarkierung mehr und können nicht auseinanderlaufen, was bisher eine offene Fehlerquelle war und in der vierten Sitzung schon einmal zugeschlagen hat.

Die Ankerkompatibilität ist die eigentliche Arbeit an dieser Umstellung. Ein Hash wählt jetzt zuerst eine Seite und dann ein Element darin. Die Auflösung läuft über die exakte Seiten-Kennung, sonst über eine Präfixtabelle, sonst über den DOM-Vorfahren des Elements. Die nicht aktiven Seiten bleiben im DOM, nur ausgeblendet, sodass jeder publizierte Anker weiter auflöst, gleich welche Seite gerade zu sehen ist.

Das Hero-Video ist entfallen. Teil 1 der Videoeinführung sitzt jetzt auf der Seite Beispiel-Workflow, wo der Fall ohnehin durchgeführt wird.

Die Startseite ist zur Spezifikationsfront umgeschrieben. Sie trägt Titel, Geltungssatz, eine Statustabelle mit Fassung, Stand, kanonischer Adresse, Maschinenadresse, Evidenzverweis und Lizenz, und darunter den erzeugten Index der Spezifikation. Ihr alter Satz, die Seite rendere das Paper als durchgehenden Lesefluss, war seit der Aufteilung falsch und ist ersetzt.

Ein Fund am Rande: beim Prüfen der Tiefenlinks stellte sich heraus, dass ein Sprung auf ein Ziel weit unten in der Seite zu kurz landet, weil die Webfonts unter dem ersten Scroll nachladen und das Layout verschieben. Der Sprung läuft jetzt zweimal, einmal sofort und einmal nach `document.fonts.ready`.

Geprüft im Browser: alle vierzehn Seiten rendern, dreizehn Routenklassen lösen auf die richtige Seite auf, darunter `#abschnitt-3-the-method`, `#case-herdata`, `#promptotyping-document-data`, `#praxis-knowledge-curation`, `#vault-{slug}` und `#konzept-eil`. Screenshots geprüft für Startseite, Vorlagen, Paper, Vault und die Mobilansicht. Nicht verifizierbar blieb die Scrollposition tiefer Anker im Screenshot, weil Chrome headless nach einem programmatischen Scroll ein leeres Bild liefert; die Seitenauflösung dieser Anker ist über den DOM geprüft.

### Nachtrag zur sechsten Sitzung

Drei Korrekturen nach dem ersten Blick des Operators auf die neue Shell.

Die einklappbare Seitenleiste entfällt. Der Baum ist immer sichtbar, auf schmalen Viewports steht er als Block über der Seite. Damit sind Hamburger-Schaltfläche, Overlay-Drawer und Backdrop aus HTML, CSS und JavaScript entfernt.

Die Leiste „Auf dieser Seite" entfällt ebenfalls. Das Raster ist damit zweispalig, der Baum und die Seite.

Das Markenzeichen im Kopf ist vom DHCraft-Aquarell auf das Promptotyping-Logo gewechselt. DHCraft bleibt im Fußbereich, wo es als Träger hingehört.

Dazu eine strukturelle Klärung: Die fünf Teile der Spezifikation im engeren Sinn, Anwendung, Vorlagen, Konvention, Artefakt und Grenze, Verifikation, tragen jetzt eine führende Nummer. Der Baum zeigt die Spezifikation damit als geordnetes Dokument statt als Reihe gleichrangiger Geschwister. Referenz, Praxis und Paper bleiben eigene Gruppen daneben.

## 2026-07-26 — Optimierungsrunde an der Spezifikationsdokumentation

Fünf Punkte aus der Optimierungsliste der Vorsitzung, vom Operator gesammelt freigegeben.

**Startseite entdoppelt.** Die vier Phasen standen in voller Länge auf der Startseite und ein zweites Mal, in Handlungsauflösung, in Teil 1 der Spezifikation. Die Absätze sind von der Startseite entfernt, Teil 1 trägt sie. Zwei weitere Doppelungen bleiben stehen und sind hier vermerkt, weil sie über den freigegebenen Umfang hinausgehen: „Knowledge Documents und ihre drei Spezialisierungen" auf der Startseite gegen „Klassifikation der Dokumenttypen" plus „Lese-Heuristik" in Teil 3, und die Artefakthälfte von „Artefakte und Skalierung" gegen „Die Voreinstellung" plus „Grenzen des Formats" in Teil 4. Die Skalierungshälfte steht nirgends sonst.

**Startseite umbenannt.** Der Baum führt sie als „Einstieg". Der publizierte Anker `#ueberblick` bleibt unangetastet, nur das Label wechselt.

**Gruppen geschärft.** Aus dem Sammelbecken „Praxis" sind zwei Gruppen geworden, „Belege" mit Beispiel-Workflow und Use Cases, „Werkzeuge und Praxis" mit Best Practices, Skills und Arbeitsumgebung. Der Baum führt damit fünf Gruppen.

**Statuszeile pro Seite.** Jede Seite außer der Startseite trägt unter dem Titel eine Zeile mit Geltung, Fassung, Stand und Maschinenadresse. Die Geltung kommt aus dem Seitenregister, wo jeder Eintrag jetzt `normativ` oder `informativ` führt; die übrigen Felder kommen aus dem Frontmatter der Substratdatei, das `renderMarkdownInto` beim Rendern mitnimmt, oder für die erzeugten Seiten aus dem Register. Drei ältere Spiegelungen hatten kein `version`- und kein `updated`-Feld und haben es bekommen.

**Markenzeichen im Kopf.** Das DHCraft-Aquarell ist entfallen, ein farbiges Detailbild auf 22 Pixeln widerspricht dem monochromen System. Das Promptotyping-Logo hat dasselbe Problem, es ist ein detailreiches Bild und wird auf dieser Größe zum Fleck. Der Kopf trägt jetzt die Wortmarke plus den Gattungsvermerk. DHCraft bleibt im Fußbereich als Träger.

Ein Fund beim Prüfen: die Statuszeile fehlte auf drei Seiten. Ursache war ein `insertBefore` gegen den Seitencontainer, während mehrere Renderer die H1 in einen eigenen Block wickeln; der Referenzknoten war dann kein Kind des Containers, die Ausnahme brach die Schleife ab und die restlichen Seiten kamen nicht mehr dran. Der Einsprung läuft jetzt über `insertAdjacentElement` an der Überschrift selbst.

Nicht erledigt bleibt die Vorlage `technology`. Der Vorlagenkatalog wird vault-first gepflegt, und die Vault-Vorlage existiert nicht. Das braucht weiterhin eine echte Vault-Sitzung.

Geprüft im gerenderten DOM: vierzehn Seiten, fünf Gruppen in der geplanten Ordnung, dreizehn Statuszeilen, fünf davon normativ, keine leere Seite, keine Ladefehler. Screenshots von Startseite und Teil 1 angesehen.

### Nachtrag: alle offenen Punkte ausgearbeitet

Auf Operator-Auftrag ist alles, was in Site, Paper und Konvention noch offen ist, in `knowledge/entscheidungen-offen.md` zusammengezogen und bis zur Zustimmungsreife ausgearbeitet. Die Punkte lagen verstreut in `plan-site.md`, `paper-writing.md`, `report.md` und im Journal selbst.

Der wichtigste Fund ist kein offener Punkt, sondern ein Widerspruch. Der Operator hat am 2026-07-25 entschieden, dass die Site vollständig englisch wird; die `CLAUDE.md` trug bis heute die gegenteilige Regel, „Keine englische Fassung in Phase 1". Ein Agent hätte in der nächsten Sitzung nach der falschen Regel gebaut, ohne die Belegstelle zu kennen. Die Regel ist auf die Entscheidung gezogen, mit den drei Punkten, die die Entscheidung offen lässt, nämlich der Umgang mit den publizierten deutschen Ankern, das noch nicht existierende Unterrichtsmaterial und die Vault-Spiegel.

Zweiter Fund: der Pflichtkern der Konvention ist nicht unentschieden, wie der Zielzustand von `plan-site.md` es führt, sondern entschieden und nicht ausgeführt. Der Operator hat am 2026-07-25 acht auf sechs Felder festgelegt, und der Papertext nennt die sechs in Abschnitt 3.3 bereits namentlich. Damit steht fest, dass `template` und `zweck` fallen. Offen ist allein die Folgefrage, wie der Wegfall von `template` aus dem Pflichtkern zur Adressierbarkeit nach ADR-3 und ADR-10 steht, für die das Dokument einen Vorschlag macht.

Ausgearbeitet sind ferner die beiden ZfdG-Kurzabstracts, deutsch und englisch, beide unter der Grenze von 750 Zeichen gemessen, der Aufbau des Exposés, die Spezifikation der Vorlage `technology`, die Spezifikation einer einfarbigen Wortmarke für den Fall, dass doch ein Zeichen gewünscht ist, und je eine Empfehlung zu den sieben zurückgestellten Punkten aus `report.md`.

### Nachtrag: Attributionspunkt gestrichen

Operator-Entscheidung 2026-07-26: keine Attribution der Übersetzungsmechanismus-Anregung, der Punkt entfällt ganz. Er ist aus allen laufenden Listen entfernt, aus `entscheidungen-offen.md`, aus der Liste der zurückgestellten Punkte in `report.md` samt dessen Lead, aus den offenen Prüfpunkten und dem Entscheidungsstand in `paper-writing.md` und aus dem Schlussabschnitt der Argument-Map.

Der Punkt war ohnehin gegenstandslos, was meine Empfehlung übersehen hatte. `revision-frame-proposal.md` hält bereits fest, dass er sich mit dem Rahmenwechsel ersatzlos erledigt, weil die Charakterisierung „LLMs operate as translation mechanisms" aus Abstract, Sektion 1 und 2.4 verschwunden ist. Gegen den heutigen Papertext geprüft: die Wendung kommt null Mal vor. Die verbliebenen Übersetzungsstellen tragen die Übersetzung von Forschungsdaten in Forschungsartefakte und die zwischen Fachperson und Entwicklung, beides Argumente des Operators. Die Acknowledgements bleiben unverändert.

## 2026-07-26, zweite Runde — Farbsystem, Dunkelmodus, Kopf und Fuß

Vier Gestaltungsentscheidungen des Operators, davon eine an mich delegiert.

**Dichte zweistufig.** Die Spezifikationsprosa behält die ruhige Satzweise, weil sie gelesen wird. Glossar, Vault, Vorlagen und Use Cases tragen `.is-reference` und sind dichter gesetzt, weil sie gescannt werden.

**Dunkelmodus.** Das Stylesheet löst jede Farbe über ein Token auf, also ist das Thema ein Token-Tausch und nichts weiter. Systemwunsch als Voreinstellung, `data-theme` am Wurzelelement gewinnt, ein Inline-Prelude im Head setzt die gespeicherte Wahl vor dem ersten Paint, damit niemand einen weißen Blitz sieht.

**Kopf entschlackt, Fuß ausgebaut.** Der Paper-Link im Kopf ist entfallen, er steht im Baum; rechts stehen Repository und der Umschalter. Der Fuß ist vierspaltig, Träger und Lizenz, Adressen, Stand der Spezifikation, Maschinenzugriff.

**Icons nur ohne Text.** Ein eigener Satz als Inline-SVG, 16px, 1.5px Strich, `currentColor`, keine Füllflächen, keine Abhängigkeit.

**Farbe, an mich delegiert, mit dem Auftrag zu begründen.** Entschieden ist die Kombination aus Funktionsspektrum und Signatur. Die Begründung steht nicht auf Geschmack. Nach Bertins Semiologie ist der Farbton selektiv und assoziativ und die einzige Farbvariable, die für qualitative Information taugt; verschiedene Farbtöne behaupten eine Verschiedenheit der Art. Die fünf epistemischen Funktionen aus Abschnitt 4.2 sind genau das, eine Nominalskala mit fünf Werten. Die fünf Teile der Spezifikation sind dagegen eine Rangfolge, weshalb Variante C auf der Sachebene ausscheidet und nicht nach Geschmack. WCAG 2.1, Erfolgskriterium 1.4.1 auf Stufe A, verlangt, dass Farbe nie das einzige Mittel ist; die Kategorie steht deshalb immer als Wort neben ihrer Marke. Die Signaturlinie trägt keine Information und fällt unter keine der beiden Bedingungen, weshalb genau sie die laute sein darf. Damit ist die Vorgabe des Operators aufgelöst, unbunte solide Seite plus ein intensiver Farbklecks: was informiert, bleibt gedämpft und lesbar, was signiert, wird prismatisch.

Die fünf Töne sind aus dem Aquarell des Promptotyping-Logos gezogen, damit die Palette nicht erfunden ist. Für den Dunkelmodus sind sie aufgehellt.

**Zwei Altlasten mitbehoben.** Die vier Grautöne hießen in `style.css` noch `--phase-*`, ein Rest der 2026-06-10 entfernten Phasen-Lane; sie heißen jetzt `--grey-1` bis `--grey-4`. Die Glossar-Unterstreichung stand auf `#888888` statt auf dem erlaubten `#8a8a8a`. Beide Punkte waren in `design.md` als Reconciliation-Flags vermerkt und sind dort gestrichen.

**Der h1-Defekt ist behoben.** Glossar, Vault, Vorlagen und Use Cases trugen ihren Seitentitel als `h2`, ein Erbe aus der Zeit als Sektionen einer Spalte. Folge war, dass die Statuszeile über dem Titel landete und diese vier Seiten keine Seitenüberschrift hatten.

**Zur Suche.** Der Operator hat die Volltextsuche nicht abgelehnt, sondern eine Begründung verlangt. Ich kann sie nicht geben. Von den drei Adressaten in `project.md` kommen Reviewer über eine konkrete Adresse und Agents über `template:`-URIs, beide suchen nie; Anwendende lesen den Fluss. Die einzige Stelle, an der die Navigation wirklich zu grob ist, ist das Paper mit knapp achtzehntausend Wörtern und zehn Überschriften. Vorgeschlagen sind daher ein Begriffsregister, das die Glossar-Dekoration als Nebenprodukt abwirft, und ein Inhaltsverzeichnis auf der Paperseite. Beide offen.

Geprüft im Browser, hell und dunkel: vierzehn Seiten, sechzehn `h1`, keine Ladefehler, siebzehn Karten mit Funktionskante, die fünf Funktionsmarken auf der Artefakt-Seite, die Signaturlinie in beiden Themen.

### Nachtrag: Refactor der Markdown-Dokumente

Ein Konsistenzdurchgang durch `knowledge/` und `_content/`, angestoßen vom Operator. Er hat zwei Fehler in meinem eigenen Dokument vom selben Tag zutage gefördert.

**Fehler eins.** `entscheidungen-offen.md` hat unter B3 die Vorlage `technology` als ungeschrieben geführt und ihre Spezifikation ausgearbeitet. Die Vorlage existiert seit dem 2026-07-23 als Repo-Erstfassung unter `_content/promptotyping-document/technology.md`, mit Geltungsbereich, Abgrenzung und Triggerkriterium, und `_content/MANIFEST.md` hält das korrekt fest. Offen ist nicht das Schreiben, sondern die vault-first-Aufnahme in den Katalog. Der Eintrag ist entsprechend neu geschrieben.

**Fehler zwei, der schwerere.** C1 und C2 haben das zweisprachige ZfdG-Abstract und das Exposé als fehlend geführt, und ich habe zwei Abstracts neu entworfen. `knowledge/submission-zfdg.md` trägt das vollständige Einreichpaket seit dem 2026-07-25 und ist in `INDEX.md` gelistet; ich habe es nicht konsultiert. Gemessen: deutsches Abstract 748 Zeichen, englisches 726, beide unter 750; Exposé 779 Wörter, unter 1.000. Meine Entwürfe sind ersatzlos gestrichen, sie lagen näher am Fließtext-Abstract, als Regel 9 des Prüfkatalogs erlaubt. Offen bleibt allein die Prüfung, ob eine spätere Änderung am Papertext die Abstracts einholt.

Beide Fehler haben dieselbe Ursache. Ich habe die verstreuten Offen-Vermerke der Steuerdokumente eingesammelt, ohne sie gegen den Dateibestand zu halten. Ein Vermerk, der einmal zutraf, bleibt stehen, wenn niemand ihn löscht; das Einsammeln solcher Vermerke reproduziert genau diese Drift, wenn es nicht geprüft wird.

**Weiter im Durchgang.** `specification.md` A9 und A18 auf den Stand nach der Gestaltungsrunde gezogen, A22 für Farbsystem und Dunkelmodus ergänzt. In `design.md` die Haltungsabsätze präzisiert, die noch von einer durchgehend unbunten Site und von der alten Vierteilung Paper, Vorlagen, Use Cases, Praxis sprachen, und den Spacing-Vermerk zum entfernten Hero. Das `MANIFEST` sagt jetzt, dass `mirrored` die Erstspiegelung hält und bei einem Sweep nicht fortgeschrieben wird, was die scheinbare Drift der fünfzehn Vorlagen-Spiegel erklärt. `INDEX.md` um `plan-site.md` und die beiden Videoskripte ergänzt, die ungelistet waren.

**Frontmatter.** Sieben Wissensdokumente trugen ein `updated`, das älter war als ihre letzte inhaltliche Änderung; die vier substanziell geänderten sind zusätzlich in der Version gehoben. B2, das Markenzeichen, ist als entschieden markiert, mit dem Argument aus der Farbentscheidung, dass eine Marke im Kopf ein Farbort wäre, der nichts bedeutet.

## 2026-07-26, dritte Runde — die zwei Übersetzungen, Mollick und der Frontmatter-Kern

**Anlass war eine Abbildung.** Der Operator legte eine Folie vor, die Forschungsdaten links, eine Sphäre in der Mitte und Forschungsartefakte rechts zeigt. Ich hielt die dargestellte Bewegung für einen Verstoß gegen die Tool-Positivismus-Absage in 2.1, was falsch war; die Bewegung ist die Übersetzung des Titels. Der Fehlgriff hat eine reale Schwäche im Text freigelegt. Sektion 1 belegte den Begriff `translation` zuerst mit der Vermittlung zwischen Fachwissenschaft und Entwicklung, während der Titel ihn für den Weg von den Daten zum Artefakt führt, und die einzige Stelle, die beide auseinanderhielt, stand in 3.3, also hinter beiden Verwechslungsstellen.

**Umgesetzt im Paper.** Sektion 1 markiert das zweite Übersetzungsproblem bei seiner Ersteinführung und stellt die Beziehung zur Titelbewegung her, 2.3 qualifiziert seinen Rückverweis, 3.3 verweist zurück statt zu wiederholen, 6.5 spricht vom Plural. Die Dauer-Formel „documented for two decades" ist an der ersten Stelle gefallen, weil sie Gewicht über Dauer behauptet und die Zahl altert; zwei weitere Vorkommen in 2.2 und der Conclusion stehen noch. Fußnote 2 sagt jetzt, dass die Abhängigkeit am Fähigkeitsniveau hängt und kleinere oder lokal lauffähige LLMs die Arbeitsweise nach meiner Erfahrung nicht tragen, ohne systematischen Vergleich im Record.

**Mollick und die zerklüftete Fähigkeitsgrenze.** 2.4 trägt neben Sycophancy und Konfabulation eine dritte Eigenschaft, die Ungleichmäßigkeit der Fähigkeit selbst. Belegt über Dell'Acqua et al. 2023, das Feldexperiment mit 758 Beratern, und Mollick 2024. Daraus folgt, dass die Umgangskompetenz aus dem Gebrauch wächst, dass das System zwischen Instrument und Gegenüber steht und dass die Dokumente die Form sind, in der diese Kompetenz gehalten wird. Das Wort Augenhöhe kommt auf Wunsch des Operators nicht vor, der Gedanke schon. `AGENTS.md` ist mit Fußnote auf die Spezifikation in 3.3 aufgenommen.

**Die Dokumenttypologie geschärft.** Der Operator hat die Schwäche der Process-Kategorie benannt. Eine Beschreibung des Projektablaufs, etwa `pipeline.md` oder `workflow.md`, ist eine Aussage über den Gegenstand und damit deklarativ; die Prozessdokumente halten die Arbeit am Projekt. Die Lese-Heuristik der Konvention ordnete das bereits korrekt zu, der Papertext nicht. 3.3 sagt es jetzt. Der zweite Befund betraf die Formulierung „A second distinction cuts across the types", die der eigene Beleg nicht trägt, weil alle Beispiele innerhalb der deklarativen Klasse liegen; sie gilt jetzt innerhalb dieser Klasse.

**Frontmatter-Erhebung.** Ein Opus-Subagent hat 490 Dokumente mit Frontmatter in 40 Wissensbasen unter `Documents/GitHub/` erhoben. Alle sechs Kernfelder zusammen tragen 233 Dokumente, `method` ist das bindende Feld. `zweck` kommt in keinem einzigen vor, `template` in 79, `generated-with` in 102 mit vierzehn Wertvarianten für dieselbe Aussage. Deterministische Skripterzeugung ist genau zweimal markiert, in `ide/ride-static/knowledge/`, über die Kombination aus `generated`, `source` und `inputs`. Daraus folgte eine Korrektur am Papertext, weil 3.3 behauptete, der Sechser-Kern sei das, was die Praxis trägt; er ist in etwa der Hälfte der Dokumente erfüllt, was das Argument schärft statt es zu schwächen.

**Provenienz im Header.** Erster Entwurf war ein Enum aus curated, generated und mixed. Der Operator hat ihn widerlegt, weil Provenienz eine Folge von Arbeitsschritten ist und `mixed` damit zum Sammelbecken für den Regelfall wird. Die Auflösung ist gröber statt feiner. Der Header beantwortet eine einzige Frage, aus der eine Handlung folgt, nämlich ob das Dokument beim nächsten Lauf überschrieben wird. `authors` trägt ausschließlich Menschen, weil die Verantwortung bei dem liegt, der den Auftrag erteilt. `generated-with` bekommt das sprachneutrale Format `Harness (LLM)`. `output-of` trägt den Befehl, der das Dokument erzeugt; der Name `generated-by` fiel wegen der Verwechselbarkeit mit `generated-with`, `regenerate` wegen der Nebenbedeutung von Wiederherstellung. Die Abfolge der Arbeitsschritte gehört nicht in den Header, sondern ins Journal, was aus der eben geschärften Typologie folgt.

**Dublin Core.** Auf Vorschlag des Operators sind die Felder an DCMI Metadata Terms angeschlossen, ohne Namespace-Präfixe im Schlüssel, weil ein Doppelpunkt in YAML Quoting erzwingt und ein Teil der Felder ohnehin keine Entsprechung hat. Acht Felder mappen wörtlich, `dcterms:description` wird aus dem ersten Absatz gewonnen. Der Treffer bei `template` auf `dcterms:conformsTo` trägt am weitesten, weil die Vorlagen-Adressierbarkeit damit eine standardkonforme Aussage wird. Alle Definitionen sind an der DCMI-Quelle geprüft. Das PROV-Mapping für `output-of` bleibt offen, weil `prov:wasGeneratedBy` als Range eine Aktivität hat und nicht ein Werkzeug.

**Konvention bereinigt.** `_content/konvention.md` führte in der Tabelle acht Pflichtfelder, in den Prüffragen sechs. Das ist aufgelöst, `zweck` und `template` sind aus dem Kern heraus, `template` mit dem Folgesatz zur Inspector-Adressierbarkeit aus `entscheidungen-offen.md` A2. Neu sind die Sektionen zur Provenienz und zum Dublin-Core-Anschluss. Auf Anweisung des Operators trägt die Konvention keine Erhebungszahlen und keine Historie entfallener Felder; das ist Verlaufswissen und steht hier. Die fünfzehn Fülltemplates führten den Sechser-Kern bereits korrekt, ein Sweep war unnötig. Ein Opus-Subagent hat die zwölf historischen Rückbezüge auf das entfallene `zweck:`-Feld aus drei Vorlagen entfernt, die positive Regel steht überall. `data.md` hat `output-of` bekommen, weil dort die Skripterzeugung der Regelfall ist.

**Vault-Nachzug offen.** Konvention und Vorlagen sind Vault-Spiegel, und der Schreibschutz-Hook blockt eine Repo-Sitzung. Die Änderungen sind repo-first ausgeführt und im Vault nachzuziehen, gemeinsam mit der ohnehin anstehenden englischen Fassung nach `entscheidungen-offen.md` A1.

**Drei Abbildungen im Text verankert.** Verweis und Bildunterschrift stehen in 3.2 für die vier Phasen, in 3.3 für die Dokumenttypologie und in 6.2 für die Zonen der Autonomie beim Prüfen. Die Bilddateien fehlen noch, weshalb die Unterschriften als Absätze ohne Bild-Tag stehen und die Site nichts Fehlendes zu laden versucht. Die Rechtefrage hat der Operator als gegenstandslos entschieden.

**Nachlauf durch drei Opus-Subagenten.** Der erste hat sechs Fülltemplates auf die Provenienzregeln gezogen und `output-of` gezielt in `verification.md` ergänzt, weil dort eine deterministische Prüfstufe der Regelfall ist; neun Vorlagen blieben begründet unberührt. Offen bleibt aus seinem Bericht, dass zwölf Befüll-Beispiele `generated-with: [Werkzeug, falls relevant]` führen und damit das Klammerformat nicht zeigen. Der zweite hat `entscheidungen-offen.md` und `paper-writing.md` nachgezogen und dabei sechs Widersprüche gefunden, darunter den veralteten Titel und einen um eine Nummer verschobenen Sektionsspiegel. Der dritte hat die Belegschicht nachgezogen, mit zwei Claims zur zerklüfteten Fähigkeitsgrenze und einem zur Frontmatter-Erhebung; Mollick bleibt ohne Distillat, weil keine legitime offene Kopie mit zitierbarem Locator existiert.

**Eine Grenze der Erhebung, die erst beim Belegen sichtbar wurde.** Die 490 Dokumente sind ausschließlich solche, die überhaupt Frontmatter tragen, und das Audit vom 2026-07-19 fand in etwa einem Drittel der Wissensbasen gar keines. Die Quote beschreibt also den bereits frontmattertragenden Bestand und untertreibt den Abstand zur Konvention über alles gerechnet. Der Papertext sagt das jetzt.

**Offen am Papertext.** Der Herkunftssatz, der das Übersetzungsproblem im Requirements Engineering verortet, bevor die DH-Antworten folgen. Die Dauer-Formeln an zwei Stellen, in 2.2 und in der Conclusion, wobei die Conclusion zwei davon trägt. Die drei Bilddateien.

## 2026-07-26, vierte Runde — drei Subagenten an Frontend, Inhalt und Wissensbasis

Der Durchgang lief in drei Lanes mit disjunktem Dateibesitz, weil die Grenze der Parallelisierung hier nicht die Zahl der Aufgaben ist, sondern der Umstand, dass `app.js` und `style.css` je eine Datei ohne Modulgrenze sind. Zwei Agenten darin wären ein garantierter Konflikt. Keiner der drei durfte committen, und keiner durfte die Wissensbasis über die eigene Arbeit fortschreiben; die Spezifikations-Deltas kamen als Text zurück und sind vom Orchestrator eingetragen. Parallel arbeitete eine zweite Claude-Code-Sitzung des Operators am Papertext im selben Working Tree, weshalb nur explizite Pfade gestaged wurden.

**Frontend-Kern.** Die Paperseite trägt jetzt ein zweistufiges Inhaltsverzeichnis aus denselben Überschriften, aus denen die `#abschnitt-*`-Anker entstehen (A23). Der Fokus wandert beim Seitenwechsel in den Inhalt, während das Auflösen des Anfangs-Hashs ihn stehen lässt, damit beim Laden nichts gestohlen wird (A24). Das Begriffsregister über den Glossareinträgen ersetzt die abgelehnte Volltextsuche (A25). Es baut zur Laufzeit aus `data/glossar.json` gegen die im DOM gemounteten Seiten, was nur funktioniert, weil die inaktiven Seiten als `display: none` stehen bleiben; Lazy-Mounting bräche das Register in derselben Bewegung, in der es die Ankerauflösung bräche. Das Modul wird von `app.js` zur Laufzeit nachgeladen statt in der Shell deklariert, weil `index.html` und `404.html` keine Markierung tragen dürfen.

**Ein Befund des Registers über die Site.** Acht der siebenundvierzig Glossarbegriffe kommen ausserhalb des Glossars nirgends vor. Das Glossar führt damit Vokabular, das die Spezifikation nicht benutzt. Das Register weist die Fälle als solche aus, statt sie zu verstecken.

**Inhalt und Daten.** B1 ist ausgeführt. Die Startseite trägt Titel, Geltungssatz, Statustabelle, Index, „Was die Methode ist" und „Wo ansetzen". Die Dokumenttypen-Einteilung und die Artefakt-Voreinstellung sind ersatzlos zugunsten von Teil 3 und Teil 4 gefallen, die Skalierungsaussage steht in Teil 1 unter „Zwei Modi". Sie ist dabei gekürzt worden, weil zwei ihrer vier Sätze im Zielabschnitt bereits ausführlicher standen und der wörtliche Umzug genau die Doppelung erzeugt hätte, die B1 beseitigt. Die Lucina Digital Edition ist aus der Galerie entfernt, weil sie im Papertext bewusst fehlt; A7 führt das jetzt als dritten Ausschlussgrund.

**Wissensbasis.** Die neun `revision-*`-Protokolle sind zu `revision.md` konsolidiert und in place archiviert, also über Status und datierten Vermerk statt über einen Ordnerwechsel. Der Agent hat das Verschieben nach `knowledge/archiv/` unterlassen, weil vier Stellen im Vault die Protokolle unter ihrem heutigen Pfad führen, drei in `vault/knowledge/state.md` und eine im Claim zur HERDATA-Briefzahl; ein Verschieben hätte die Belegschicht gebrochen. Der Operator hat einen Archivordner ausdrücklich abgelehnt, womit die in-place-Lösung auch die gewollte ist.

**Was die Prüfung am Dateibestand ergeben hat.** `revision-frame-proposal.md` behauptet eine `revision-decisions.md`, die nie einen Commit gesehen hat; sie lag am 2026-07-24 uncommittet im Working Tree und ist verloren. Die Prozessregel in `paper-writing.md`, die für jeden Revisionsbefund eine dokumentierte Entscheidung in dieser Datei verlangt, hat damit keinen Träger. Drei Protokolle führten ein Modell in `authors:`, was die Konvention verbietet; es steht jetzt in `generated-with`. Zwei Steuerdokumente führten eine `Vorlage Planung`, die der Katalog nicht kennt. `_content/konvention.md` verkürzt das Statusvokabular auf drei Werte, während drei Fülltemplates acht führen und der Bestand `complete` und `snapshot` benutzt; das ist vault-first zu lösen und bleibt offen.

**Offen aus diesem Durchgang.** Der horizontale Überlauf der Paperseite unter etwa 560 Pixeln, verursacht von der Projektinventar-Tabelle ohne eigenen Scrollcontainer. Die acht ungenutzten Glossarbegriffe. Das Statusvokabular der Konvention. Die vier Vault-Verweise, falls die Protokolle doch verschoben werden sollen.

## 2026-07-26, fünfte Runde — Sprachdurchgang, Code-Refactor und die erste Selbstprüfung der Site

Fünf Durchgänge zu je drei Agenten mit disjunktem Dateibesitz, dazwischen Operator-Entscheidungen. Kein Agent durfte committen, keiner die Wissensbasis über die eigene Arbeit fortschreiben; die Spezifikations-Deltas kamen als Text zurück und sind vom Orchestrator eingetragen. Parallel arbeitete eine zweite Claude-Code-Sitzung des Operators am Papertext im selben Working Tree.

**Der Sprachdurchgang A1 ist gelaufen.** Shell, Bedienelemente, neun Seitentexte und die Textfelder der drei Datendateien sind englisch. Für die fünf destillierten Seiten war die Quelle `paper.md` statt des deutschen Destillats, damit die Site die Begrifflichkeit des Papers trägt und nicht eine zweite Fassung davon. Deutsch bleiben die Vorlagen als Vault-Spiegel, die Skills als Unterrichtsmaterial und die publizierten Anker als Identifikatoren. Die sieben Fall-Tiefenseiten sind der Rest.

**Ein Wert, der zugleich Text und Identifikator ist, bricht ohne Fehlermeldung.** Das ist der teuerste Befund des Tages und er trat dreimal auf. Die `#praxis-*`-Anker entstehen zur Laufzeit aus den Überschriften, also verschob die Übersetzung sechs publizierte Adressen; `PRAXIS_ALIASES` hält sie am Leben. Die fünf Kategorienamen der Artefakt-Seite sind Schlüssel gegen `FUNCTION_SLUGS`, ihre Übersetzung hätte die Farbkodierung stillschweigend abgeschaltet. Die Vorlagennamen stehen in fremden Frontmatter-Blöcken. Die Regel steht jetzt in der `CLAUDE.md`.

**Zwei Quellen für dieselbe Aussage laufen auseinander, immer.** Der Fuss nannte Version 0.1, die Statustabelle 0.2; beide kommen jetzt aus dem Frontmatter von `ueberblick.md`. `404.html` war eine vollständige Kopie der Shell und ist ein Rumpf, der per `location.replace` weiterleitet, weil die Adressleiste unter dem alten `history.replaceState` ohnehin die Hash-Form zeigte. Der Preis ist ein Roundtrip, der Gewinn die ganze Driftklasse.

**`app.js` liegt in zehn Dateien.** Geschnitten nach Verantwortung, jede eine IIFE auf `window.PromptotypingApp`, kein ES-Modul und kein Bundler. Verhaltensrelevant ist allein, dass `app.js` zuletzt lädt. Keine der 67 Funktionen war tot. Der Beweis, dass nichts brach, ist der Vergleich der Vereinigungsmenge aller Element-IDs über vierzehn Seiten und neun Deep-Links, vorher wie nachher identisch, gefolgt von einem zeilenweisen DOM-Vergleich bei eingefrorenem Inhalt.

**Gestaltung.** Fünf Haarlinien gefallen, weil eine Linie, die nur Elemente stapelt, keine Grenze ist. GitHub- und YouTube-Marke als einfarbige Zielmarken im Fuss, das GitHub-Zeichen als reines Icon im Kopf, wo die Regel Icons genau dort erlaubt, wo ein Bedienelement keinen Text trägt. Die vierte Fussspalte, die den Maschinenzugriff ein zweites Mal erklärte, ist in die Adressspalte gefaltet.

**Die Orientierungsklage war ein Symptom.** Der Operator hat zweimal gesagt, er finde sich nicht zurecht, und zweimal wurde an der Navigation geschraubt. Der Baum war nicht das Problem. Keine Seite sagte, was sie ist; unter dem Titel standen nur Herkunftsangaben. Der Registersatz steht jetzt unter jedem Seitentitel. Dazu hat der Baum zwei Blöcke statt fünf Gruppen, der Startseitenindex führt nur noch die fünf nummerierten Teile, die In-Page-Leiste der Templates-Seite ist weg, und die Promptotyping-Marke ebenfalls, weil sie im Dunkelmodus zum Fleck wurde und ein Farbort ohne Bedeutung war.

**Das Paper gegen die Site gelesen, vier Widersprüche.** Die Teststrategie steht im Paper und in der Konventionsprosa als Action Document und stand in der Funktionstabelle derselben Datei sowie im Katalog als Declarative; das ist aufgelöst. Beim Entscheidungsprotokoll wurde nicht umgeklappt, sondern getrennt, weil ein ADR-Auszug aus der Spezifikation und ein aus dem Journal herausgehobenes Entscheidungsregister zwei Dinge sind, die sich einen Dateinamen teilen. Die Technology Baseline nennt das Paper als Action Document, während der Katalog sie zurückhält; das bleibt B3. Rollen- und Orchestrierungsregeln haben keine Vorlage, was der Katalogregel entspricht.

**Die konstitutive Definition fehlte auf der Site.** Paper 3.3 definiert das Promptotyping Document über doppelte Lesbarkeit, Kompaktheit und Portabilität. Keine dieser drei Eigenschaften stand auf einer Seite. Ohne sie liest sich die Spezifikation als Sammlung von Dateiformaten. Teil 3 beginnt jetzt mit ihnen.

**Die Site prüft sich zum ersten Mal selbst.** `tools/check_consistency.py` entscheidet regelentscheidbar, ob Katalog und Konvention über jeden Dokumenttyp übereinstimmen, ob Katalog und Vorlagenordner sich decken, und ob die Slug-Liste der `CLAUDE.md` vollständig ist. Es wurde gegen den Fehler getestet, für den es geschrieben ist, indem der alte Wert wieder eingesetzt wurde; das Skript meldet ihn und beendet sich mit 1. Dabei fiel ein blinder Fleck auf, drei von fünfzehn Vorlagen wurden übersprungen, weil der Katalog die Funktion in Prosa führt und die Konvention den blossen Namen. `knowledge/verification.md` hält fest, was wogegen geprüft wird, mit Verdikt, und ebenso, was nicht automatisch prüfbar ist.

**Die Lehre daraus.** Ich habe an diesem Tag sehr gründlich geprüft, ob nach dem Refactor jede ID noch da ist und jeder Anker auflöst. Alles grün, und der Widerspruch zwischen Paper und Konvention lag die ganze Zeit da. Gerendertes DOM prüft Struktur und nicht Übereinstimmung. Die Site spezifizierte die Verifikation in Teil 5 und führte keine; der Vault unter ihr hatte seine von Anfang an.

**Vault-Nachzug, gewachsen.** Konvention und Praxis sind repo-first englisch, dazu trägt die Konvention jetzt den Definitionsvorspann und die korrigierte Typologie. Zusammen mit dem Pflichtkern nach A2 und der Aufnahme der Technology-Vorlage nach B3 ist das eine Vault-Sitzung.

**Offen.** Die sieben Fall-Tiefenseiten. Die neun Glossarbegriffe ohne Fundstelle ausserhalb des Glossars. `_content/glossar.md` ist ein generiertes Dokument ohne Generator im Repo, was die eigene Regel verletzt, dass generierte Dokumente von Skripten gerendert und nicht von Hand gepflegt werden. Die Doppelung der Subpath-Auflösung zwischen `404.html` und `resolveTemplateUrl`, die aus dem Stub folgt und sich beseitigen liesse, wenn der Stub den rohen Pfad weiterreicht. Der Glossareintrag zu den User Stories nennt acht Prüfkriterien und zählt sieben.
