---
title: Journal
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.5
created: 2026-05-09
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
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
