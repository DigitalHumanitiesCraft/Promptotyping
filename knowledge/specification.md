---
title: Specification
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
  name: Vorlage Specification
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/specification
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-specification
topics: ["[[Requirements Engineering]]", "[[Decision Records]]"]
knowledge-sources:
  standards:
    Schema.org ScholarlyArticle: https://schema.org/ScholarlyArticle
    YAML Frontmatter: https://yaml.org/spec/1.2.2/
related: [INDEX, project, architecture, design, journal]
---

# Specification

Anforderungen, Funktionsumfang und Entscheidungen für den Refactor zum interaktiven Paper. Die Site rendert das Pollin-2026-Paper als scrollbare Single-Page mit Inline-Glossar, eingebetteten Vorlagen, Case-Study-Karten und Side-Panels.

## Anforderungen

### A1 — Paper als Lesefluss
Das Pollin-2026-Paper ist im Lesefluss vorhanden, sektioniert in sieben Markdown-Dateien (eine pro H2-Section), die References-Sektion separat als `literatur.md`. Gerendert in einer zentralen Lese-Spalte (max. 720px). Akzeptanzkriterium: Wer auf https://dhcraft.org/Promptotyping/ kommt, kann das Paper von Abstract bis Conclusion durchscrollen, Inhaltsverzeichnis links als sticky Sidebar.

Substrat liegt in `_content/paper/01-introduction.md` … `_content/paper/07-conclusion.md` und `_content/literatur.md`.

### A2 — Phasen-Provenance-Lane (entfernt, Operator-Entscheidung 2026-06-10)
~~Jeder Absatz im Paper trägt eine Phasen-Klasse (Preparation, Exploration & Mapping, Distillation, Implementation), die sich als monochrome vertikale Markierung am linken Absatzrand zeigt. Hover auf einen Strich öffnet einen Tooltip mit Phasennamen; Klick aktiviert einen Phasen-Filter.~~

Entfernt nach dem Erstdeploy auf Operator-Entscheidung (2026-06-10). Die Lane (Legende, Mobile-Phase-Bar, Hover-Tooltip, Filter-Modus) ist aus HTML, CSS und JavaScript ausgebaut. Die `{:.phase-*}`-Tags im Paper-Markdown werden von der marked-Extension nur noch gestrippt (reiner Tag-Stripper, kein Lane-Rendering). Begründung: visuell ruhiger Lesefluss ohne Provenance-Spalte. Die ADR-4-Begründung bleibt als Entscheidungs-Provenienz erhalten, ist aber nicht mehr umgesetzt.

### A3 — Adressierbare Vorlagen
Die gespiegelten Vorlagen sind unter Latest-Ankern adressierbar (`#promptotyping-document-data`, `#promptotyping-document-journal`, ...). Bei Versions-Sprüngen werden zusätzliche Snapshot-Anker derselben Vorlagen-Sektion vergeben (`#promptotyping-document-data-v0.1`); der Latest-Anker bleibt der primäre Adresspunkt. Seit dem Vault-Vorlagen-Sweep vom 2026-07-19 tragen die Vorlagen unterschiedliche Versionen; die Spiegel ziehen mit dem nächsten Site-Update nach. Akzeptanzkriterium: `https://dhcraft.org/Promptotyping/#promptotyping-document-data` springt zur Vorlage und öffnet automatisch das Side-Panel mit der vollen Vorlagen-Spec.

### A4 — Doppelte kanonische URL-Form: Subpath und Hash
Jeder adressierbare Inhalt der Site existiert unter zwei gleichberechtigten URL-Formen — Subpath für Maschinen und URL-strukturierte Lesbarkeit, Hash-Anker als interne Anker und Fallback. Beide sind kanonisch, nicht eine Alias der anderen. Beide sind permanent stabil. Konvention für alle Anker-Typen:

| Anker-Typ | Hash-Anker | Subpath-URL |
|---|---|---|
| Promptotyping-Document Latest | `#promptotyping-document-{slug}` | `/promptotyping-document/{slug}` |
| Promptotyping-Document Snapshot | `#promptotyping-document-{slug}-v{version}` | `/promptotyping-document/{slug}#v{version}` |
| Konzept | `#konzept-{name}` | `/konzepte/{name}` |
| Case Study | `#case-{name}` | `/case-studies/{name}` |
| Konvention | `#konvention-{version}` | `/konvention/{version}` |
| Glossar | `#glossar` | `/glossar` |
| Literatur | `#literatur` | `/literatur` |
| Paper-Sektion | `#abschnitt-{n}-{slug}` | `/paper/{n}-{slug}` |
| Überblick | `#ueberblick` | `/ueberblick` |
| Use Cases | `#use-cases` | `/use-cases` |
| Praxis-Eintrag | `#praxis-{slug}` | `/praxis/{slug}` |
| Skill | `#skills-{slug}` | `/skills/{slug}` |

Slug-Set für Promptotyping-Documents: `data`, `index`, `project`, `specification`, `architecture`, `design`, `journal`, `user-stories`, `action-layer` (Entwurf, ADR-9). Versionsstand: `specification` v0.2, `action-layer` v0.1-Entwurf, übrige v0.1; der Latest-Anker ist primärer und einziger Adresspunkt. Snapshot-Anker werden erst bei einem Versions-Sprung pro Vorlage vergeben — als zusätzlicher Hash-Sub-Anker auf derselben Vorlagen-Sektion, nicht als eigener Subpath.

Beispiel Paper-Sektion: `#abschnitt-3-four-phases` ↔ `/paper/3-four-phases`. Subsection-Anker (z.B. `#phase-distillation` für Section 3.3) sind innerhalb der Paper-Sektion verfügbar, ohne eigenen Subpath.

Akzeptanzkriterium: `https://dhcraft.org/Promptotyping/promptotyping-document/data` und `https://dhcraft.org/Promptotyping/#promptotyping-document-data` führen beide zur selben gerenderten Vorlage. Subpath-Form geht per `404.html`-Trick auf den Hash (siehe [architecture.md](architecture.md)). Welche Form verwendet wird, bleibt der zitierenden Stelle überlassen — beide sind stabil.

### A5 — `template:`-Frontmatter-Feld als Maschinenadresse
Promptotyping-Repos führen in ihren `knowledge/`-Dokumenten ein Frontmatter-Feld `template:` mit einem Block aus `name`, `version`, `url` (Subpath-Form, kanonisch) und optional `alias` (Hash-Form, gleichwertig). Die `url` zeigt auf die Latest-Adresse der Vorlage, die `alias`-Form auf den dazugehörigen Hash-Anker. Dieses Feld macht die Vorlagen-Adresse maschinenlesbar.

Schema:
```yaml
template:
  name: Vorlage Datengrundlage
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
```

Akzeptanzkriterium: Ein Coding-Agent, der einen `template:`-URI sieht, kann ihn aufrufen und bekommt die maßgebliche Vorlagen-Spezifikation gerendert. Die Site selbst trägt das Feld in ihren eigenen `knowledge/`-Dokumenten — sie demonstriert die Methode an sich selbst (siehe A12).

### A6 — Glossar als Hover- und Klick-Quelle
Jeder konstitutive Begriff im Paper-Lesefluss ist als Glossar-Trigger markiert (gepunktete Unterlinie). Hover zeigt Kurzdefinition als Tooltip, Klick öffnet rechtes Side-Panel mit voller Glossar-Definition, Quellenangaben, Verweisen ins Paper. Akzeptanzkriterium: Mindestens 30 Begriffe sind verlinkt und zugänglich; das Glossar selbst ist auch als eigener Anker `#glossar` direkt erreichbar.

### A7 — Use-Case-Galerie: kuratierte Case-Study-Karten und Tiefenseiten
Eigene Sektion `#use-cases` mit kuratierter Galerie öffentlich dokumentierter Projekte (Operator-Entscheidung 2026-06-10): 18 Case Studies, klassifiziert und gefiltert nach der Use-Case-Typologie des Papers (Section 4.3), sekundär nach Interface-Typ (Section 5.3) und Demo-Verfügbarkeit. Das interne Genre-Vokabular (HerData-Genre, Klawiter-Typ usw.) erscheint nicht in der öffentlichen UI. Sieben Cases tragen eine Tiefenseite im Side-Panel (HerData, Klawiter-Rescue, zbz-ocr-tei, M3GIM, Notker-Edition, CorrespExplorer, coOCR-HTR). Kuratierungskriterium: fehlende Kundenfreigabe oder Vermittlungsformat statt Forschungsartefakt führt zum Ausschluss (ausgeschlossen: VetMedAI-Wissensbilanz, Agentic Edition Pipeline, SuGW, beide wiiw-Fälle, drei Screencast-Fälle); das vollständige Evidenz-Korpus bleibt im Paper (Section 4) dokumentiert. Datenquelle `data/case-studies.json`, Ausschlüsse dokumentiert in `_content/MANIFEST.md`.

### A8 — YouTube-Videos eingebettet
Teil 1 als Hero-Embed oben (vor Paper-Section 1). Teil 2 in Paper-Section 4 als didaktischer Anker bei der VetMedAI-Wissensbilanz. Akzeptanzkriterium: Beide Videos laufen aus der `youtube-nocookie.com`-Variante (Datenschutz), kein Tracking ohne Consent.

### A9 — DHCraft-Designsystem konsequent
Hellgrau `#d5d5d5` als Akzent, Schwarz auf Weiß, Inter als Font, Consolas für Code. Keine Akzentlinien, keine Farbflut, keine dekorativen Elemente. Mobile-Layout kollabiert Side-Panels zu Bottom-Sheets.

### A10 — Vanilla Tech-Stack
Kein Framework, kein Build-Step. HTML5/CSS3/JS, marked.js v9.1.6 vendoriert, js-yaml v4.1.0 vendoriert für Frontmatter-Parsing im Frontmatter-Inspector (siehe A11 und [architecture.md](architecture.md)). GitHub-Pages-natives Hosting. Akzeptanzkriterium: `git clone` und Browser öffnen reicht, um die Site lokal zu rendern (per `python -m http.server` oder Live-Server).

### A11 — Frontmatter-Inspector als interaktive Selbstdemonstration
Modul in der Vorlagen-Sektion mit Texteingabe (Textarea) für YAML-Frontmatter eines fremden `knowledge/`-Dokuments. Der Inspector parst den eingegebenen Block, extrahiert `template.url` (oder `template.alias`), validiert die URL gegen das Site-Anker-Schema und öffnet das Side-Panel mit der gerenderten Vorlage. Ein Beispiel-Frontmatter mit Latest-URL (`/promptotyping-document/data`) ist als Default-Wert vorbefüllt, sodass der Mechanismus sofort sichtbar wird.

Akzeptanzkriterium: Wer ein `template:`-Frontmatter aus einem realen Promptotyping-Repo (z.B. dem `data.md` aus `chpollin/zbz-ocr-tei`) ins Eingabefeld pastet, sieht rechts im Side-Panel die maßgebliche Vorlagen-Spezifikation. Bei ungültiger URL: Hinweis auf das erwartete Schema. Wenn ein Snapshot-Anker (`#promptotyping-document-{slug}-v{version}`) auf eine nicht vorhandene Version zeigt: Fallback auf den Latest-Anker mit Warnhinweis.

Implementations-Details in [architecture.md](architecture.md), Sektion Frontmatter-Inspector.

### A12 — Cross-Repo-Konsistenz: Site bewirbt nicht, sondern demonstriert
Die Site selbst — `knowledge/INDEX.md`, `knowledge/project.md`, `knowledge/specification.md`, `knowledge/architecture.md`, `knowledge/design.md`, `knowledge/journal.md` — trägt das `template:`-Feld konsequent. Jedes dieser Dokumente verlinkt auf seine eigene Vorlagen-URL der Live-Site (Subpath-Form kanonisch, Hash-Form als alias).

Akzeptanzkriterium: Eine `grep template: knowledge/*.md`-Inspektion zeigt sechs Treffer, alle mit beiden URL-Formen (`url:` als Latest-Subpath `/promptotyping-document/{slug}`, `alias:` als Latest-Hash `#promptotyping-document-{slug}`), alle nach Site-Anker-Schema. Sobald die Site Sprint 1+2 abgeschlossen hat, sind diese URLs aufrufbar — und die Site demonstriert ihre eigene Methode, ohne sie nur zu beschreiben.

### A13 — Methoden-Überblick als Einstieg
Deutschsprachige Sektion `#ueberblick` zwischen Hero und Paper: was Promptotyping ist (Kernsatz), die vier Phasen kompakt, die drei Dokumenttypen mit Diagnostik-Regel, die zwei Modi, Wegweiser in Paper, Vorlagen, Use Cases, Praxis und Skills. Begründung: Die Site ist auch Präsentation der Methode; ohne Überblick landet jeder Besucher direkt in einem englischen akademischen Paper. Substrat: `_content/ueberblick.md`. Akzeptanzkriterium: Ein Besucher ohne Vorkenntnisse versteht in zwei Minuten, was die Methode ist und wo er ansetzt.

### A14 — Praxis-Sektion (Methodenerweiterungen)
Sektion `#praxis` mit den empirisch gewachsenen Methodenerweiterungen aus der Vault-Wissensbasis (Verification Milestones, Promptotyping Interfaces, Subagents und Rollensimulation, Skript-vs-LLM-Trennung, Knowledge Curation, Demo-Repo-Reduktion, Claims-Verifikation, Epistemischer Status von User Stories, Vorlagen-Katalog). Jeder Eintrag trägt einen stabilen Anker `#praxis-{slug}` und nennt seinen dokumentierten Herkunftsfall; Link auf `#case-{id}` nur, wenn der Fall in der kuratierten Galerie ist. Substrat: `_content/praxis.md`.

### A15 — Skills und System Prompts
Sektion `#skills` mit den wiederverwendbaren System Prompts (Coding, Writing) als unveränderte, kopierbare Originaltexte plus Einordnung der Action-Layer-Praxis (CLAUDE.md, Custom Commands, System Prompts). Anker `#skills-coding`, `#skills-writing`. Substrat: `_content/skills/`. Verweis auf die Action-Layer-Vorlage (A16).

### A16 — Neunte Vorlage: Action-Layer
Die Vorlage Action-Layer (`CLAUDE.md`, empirisch destilliert aus dem 35-Repo-Sweep 2026-06) wird als neunter Slug `action-layer` publiziert. Anker-Namespace-Entscheidung in ADR-9. Die Vorlage ist seit 2026-07-19 im Vault freigegeben; die "Entwurf, in Erprobung"-Kennzeichnung auf der Site entfällt mit dem nächsten Site-Update.

### A17 Arbeitsumgebung-Sektion (Operator-Entscheidung 2026-06-10)
Sektion `#arbeitsumgebung` zwischen Skills und Glossar mit drei kurzen Abschnitten: Obsidian-Vault als Wissensumgebung (Vault als Analyseeinheit, `CLAUDE.md` als Action Document, Dateisystem als Schnittstelle), Promptotyping Agent Interface (experimentelles Browser-Interface zum Beobachten, Steuern, Mitschreiben; Vault-als-Zentrum; Status in Entwicklung) und AI Harness und Skills (Claude Code als Harness, Verweis auf `#skills`, Prozessvideos auf dem YouTube-Kanal). Substrat: `_content/arbeitsumgebung.md`. Routing `/arbeitsumgebung` über `404.html`, Anker im URL-Schema (A4) ergänzt.

### A18 Site-Header, Site-Footer, Hero und Video-Integration (Operator-Entscheidung 2026-06-10)
Sticky weißer Site-Header mit DHCraft-Logo und Wortmarke links, Sektions-Nav und GitHub-Link rechts; Nav-Links auf schmalen Viewports ausgeblendet (mobile Navigation über den TOC-Toggle). Site-Footer mit Hintergrund `#f5f5f5`, Träger-Hinweis, Repo- und YouTube-Link, Lizenzzeile und Maschinenadresse-Hinweis. Hero rein typografisch: die `promptotyping-logo.png` wandert aus dem Hero in den Kopf der Vorlagen-Sektion (`#vorlagen`). Alle sechs Prozessvideos sind ohne Verlassen der Seite abspielbar: Hero (Teil 1) und Section-4-Injektion (Teil 2) als Facade, Klawiter und coOCR-HTR als Facade in ihren Tiefenseiten (aus `video_url`), Lucina und Kulturpool als Video-Affordanz auf den Galerie-Karten. Click-to-load-Facade durchgängig über `youtube-nocookie.com`, kein Tracking vor dem Klick.

## Funktionsumfang pro Site-Sektion

### Methode (Paper-Sektionen 1-3)
Das Paper-Narrativ als Lesefluss. Begriffe als Glossar-Trigger. Vorlagen-Tabelle im Section-3-Kontext (wenn Promptotyping Documents erklärt werden) als eingebettete Tabelle mit Klick-Links zu Side-Panel-Specs. Hero-Video Teil 1 oben.

### Vorlagen (eigene Sektion `#vorlagen`)
Tabelle aller gespiegelten Vorlagen mit Funktion, Empfohlenem Dateinamen, Promptotyping-Typ, Version, Status. Der Vault-Katalog führt seit 2026-07-19 sechs weitere freigegebene Vorlagen (Testing, Plan, Report, Domänenwissen, Verification, Integration) und das englische Funktionsvokabular; deren Spiegel, Anker und die Vokabular-Aktualisierung der Sektionen `konvention` und `ueberblick` entstehen mit dem nächsten Site-Update. Klick auf Eintrag öffnet Side-Panel mit voller Spec inkl. Frontmatter-Schema, Sektionsstruktur, Copy-Button für den template:-Block und Rohtext-Link (Maschinenadresse, ADR-10). Pro Vorlage ein Latest-Anker, Snapshot-Anker bei Versionssprüngen.

### Use Cases (eigene Sektion `#use-cases`)
18 kuratierte Karten, gruppiert und gefiltert nach Use-Case-Typologie (A7, ADR-8-Nachtrag). Pro Karte: Name, Use Case, ein Satz, Demo-/Repo-/Video-Link soweit belegt. Sieben Karten mit Tiefenseite im Side-Panel. Teil-2-Video eingebettet in Paper-Section 4.

### Konzepte (eingebettet in Paper-Section 5-6, plus Anker)
Fünf Konzepte (Asymmetric Amplification, Epistemic Infrastructure, Critical-Expert-in-the-Loop, Scholar-Centered Design, Context Engineering) sind im Paper-Lesefluss erwähnt und mit Glossar-Anker verknüpft. Volldefinition im Glossar-Side-Panel.

### Glossar (`#glossar`)
Eigene Sektion am Seitenende, alphabetisch geordnet. Pro Eintrag: Begriff, Kurzdefinition, Volldefinition, Quellenangabe (mit Vault-Link), Verweise ins Paper. Selbe Datenquelle wie die Hover-Tooltips.

### Literatur (`#literatur`)
Geordnete Liste am Seitenende. Inline-Verweise im Paper als Anker-Sprung-Ziel. Pro Eintrag: Autor, Jahr, Titel, DOI/URL, Anker-ID.

## Entscheidungen (ADR)

### ADR-1: Single-Page mit Anker-IDs statt multi-page

**Kontext.** Die Site soll als interaktives Paper funktionieren. Multi-page wäre die übliche Wahl, würde aber den Lesefluss zerschneiden.

**Wahl.** Single-Page mit stabilen Anker-IDs.

**Begründung.** Lesefluss durchgehend, alle methodischen Bestandteile inline integriert, keine Folgeseiten. Anker erlauben Direktverlinkung. Anker-IDs sind permanent stabil.

**Effekt.** Site-Größe wächst, aber Lazy-Loading der Side-Panel-Inhalte hält die initiale Last gering. SEO via OpenGraph-Tags und sektionsweise Crawling.

### ADR-2: Latest-Anker primär, Snapshot-Sub-Anker bei Versions-Sprüngen

**Kontext.** Vorlagen können künftig refaktoriert werden (z.B. `data` v0.1 → v0.2). Repos, die per `template:`-URI verlinken, brauchen Stabilität — aber nicht unbedingt eine permanent eigene URL pro Version.

**Wahl.** Pro Vorlage gibt es einen Latest-Anker (`#promptotyping-document-data`, Subpath `/promptotyping-document/data`). Bei einem späteren Versions-Sprung wird ein Snapshot-Sub-Anker auf derselben Vorlagen-Sektion vergeben (`#promptotyping-document-data-v0.1`, Subpath `/promptotyping-document/data#v0.1`). Der Latest-Anker zeigt immer auf die aktuelle Version. Heute, mit allen Vorlagen einheitlich auf v0.1, gibt es nur Latest-Anker.

**Begründung.** Repos verlinken in der überwältigenden Mehrzahl der Fälle "die aktuelle Vorlage". Eine Latest-URL ohne Versions-Suffix ist für sie der natürliche Adresspunkt; bei einem Versions-Sprung kommen sie automatisch auf die neue Fassung. Wer explizit eine bestimmte Version zitieren will, hängt einen Sub-Anker an. Das ergibt eine kompakte URL-Sammlung statt eines Versions-Karthese pro Vorlage.

**Effekt.** Acht stabile URLs für die acht Vorlagen-Slugs. Alte Versionen werden bei einem Versions-Sprung in einer Versions-Liste auf der Vorlagen-Seite verlinkt, mit Snapshot-Sub-Anker als Adresspunkt. Frühere Anlauf-Form `#vorlage-{name}-{version}` mit eigener Subpath-Hierarchie ist verworfen — siehe Eintrag 2026-05-09 in [journal.md](journal.md).

### ADR-3: Beide URL-Formen kanonisch (Subpath und Hash gleichberechtigt), Slug englisch, Latest ohne Versions-Suffix

**Kontext.** Coding-Agenten parsen URLs strukturell. `#promptotyping-document-data` sieht wie ein Anker aus; `/promptotyping-document/data` wie ein Pfad. Beides sollte funktionieren — und keiner der beiden Formen darf den anderen als "minderwertig" markieren, sonst wird die Adressierbarkeit asymmetrisch. Zwei zusätzliche Entscheidungen sind in dieselbe Logik eingebettet: (a) Pfad-Slug englisch, weil "Promptotyping Document" der konzeptuelle Begriff aus Pollin 2026 Section 3.3 ist und in der englischen Form auch in den `template:`-URIs der Repos lebt; ein deutsches `vorlagen/` würde die Bezeichnung gegenüber der Konzept-Quelle inkonsistent machen. (b) Versions-Suffix in der Latest-URL entfällt — siehe ADR-2.

**Wahl.** Beide URL-Formen sind kanonisch und gleichberechtigt. Subpath-Form ist primär in `template:`-Frontmatter-URLs (`url:`), Hash-Form als `alias:`. Site rendert dieselben Inhalte unter beiden URLs. Slug-Sektion ist `/promptotyping-document/{slug}`, einheitlich für alle acht Vorlagen-Slugs. Latest-Adressierung ohne Versions-Suffix; Snapshot-Adressierung über Hash-Sub-Anker (siehe ADR-2).

**Begründung.** Subpath-Form ist robust für Coding-Agenten, die strukturelle URL-Pfade kennen. Hash-Form ist robust für Browser-interne Navigation (kein Server-Roundtrip). Wer das `template:`-Feld liest, bekommt mit `url` und `alias` zwei stabile Endpunkte. Wer eine URL kopiert, bekommt eine, die in beiden Formen funktioniert. Englischer Slug-Begriff hält die Adressierung in einer Sprache mit der Konzept-Quelle. Latest ohne Versions-Suffix erspart Repos den Pflege-Aufwand pro Vorlagen-Refactor — sie bleiben automatisch auf der aktuellen Vorlage.

**Effekt.** Eine zusätzliche `404.html`-Datei im Repo-Root mit JavaScript-basiertem Pfad-zu-Anker-Mapping rewritet Subpath auf Hash. Konvention für alle Anker-Typen ist in A4 dokumentiert. Site-eigene `knowledge/`-Documents tragen beide Formen (A12). Frühere Anlauf-Form `/vorlagen/{name}/{version}` ist verworfen — siehe Eintrag 2026-05-09 in [journal.md](journal.md).

### ADR-4: Phasen-Provenance-Lane als ästhetischer Kniff

**Kontext.** Die Site soll nicht nur Inhalt zeigen, sondern eine methodische Aussage des Papers visuell tragen. Bunte Animationen oder Parallax-Schmuck wären ornamental.

**Wahl.** Linke Schmalspalte mit monochromen Markierungen pro Absatz, gemäß Phasen-Klasse.

**Begründung.** Macht die methodische Verteilung des Papers visuell ablesbar. Dient als Navigation (Hover, Klick, Filter-Modus). Konsistent mit DHCraft-Designsystem (kein Bunt, nur Schwarz-Grau-Weiß).

**Effekt.** Beim Spiegeln des Papers muss Christopher Pollin (Critical Expert) jeden Absatz einer Phase zuordnen. Aufwand 30-60 Minuten, einmalig.

### ADR-5: Vanilla, kein Build

**Kontext.** Bestehender Repo-Stand war auch Vanilla. Tooling-Aufwand soll minimal bleiben.

**Wahl.** HTML5/CSS3/JS ohne Build-Step. marked.js vendoriert.

**Begründung.** GitHub-Pages-natives Hosting funktioniert ohne Konfiguration. `git clone` reicht zum Ausführen lokal. Keine npm-Abhängigkeiten, kein Webpack, kein TypeScript-Compile.

**Effekt.** Kein Code-Splitting, kein Tree-Shaking. Bei wachsender JS-Größe (über 100KB) ggf. später re-evaluieren.

### ADR-6: Vault-Explorer-Modul ganz weglassen

**Kontext.** Das alte Living Paper hatte drei interaktive Module: Context-Rot-Viz, Vault-Explorer, Sycophancy-Trap. Im Plan war zunächst nur Vault-Explorer zu erhalten.

**Wahl.** Alle drei Module weglassen.

**Begründung.** Die Module sind didaktische Spielereien, nicht methodische Notwendigkeit. Zwei der drei (Context-Rot-Viz, Sycophancy-Trap) sind Animationen, die in einer ruhigen Lese-Umgebung ablenken. Der Vault-Explorer hätte einen `mock_vault.json` als Substrat gebraucht — dieser Aufwand lohnt sich nicht, wenn der Lesefluss des Papers selbst die Promptotyping-Documents zeigt.

**Effekt.** Drei Module-Dateien fallen weg, Code wird einfacher, Site bleibt fokussiert auf Lesen plus zwei sinnvolle Module: Frontmatter-Inspector und Case-Study-Filter.

### ADR-7: Frontmatter-Inspector als Paste-Live-Render-Modul

**Kontext.** Die `template:`-URI-Auflösung ist ein zentrales Feature, aber für einen externen Leser unsichtbar. Wer noch nie ein Promptotyping-Repo gesehen hat, versteht nicht, wozu die Latest- und Snapshot-Anker da sind. Eine reine URL-Eingabe würde nur den Anker-Klick replizieren, ohne die Mechanik der Frontmatter-Indirektion sichtbar zu machen.

**Wahl.** Texteingabe (Textarea) für ganzen YAML-Frontmatter-Block, nicht nur die URL. Inspector parst, extrahiert `template.url` (oder `alias`), validiert gegen Anker-Schema, öffnet Side-Panel mit gerenderter Vorlage. Default-Wert ist ein Beispiel-Frontmatter mit korrekt gesetztem `template:`-Feld in der Latest-Form (`url: /promptotyping-document/data`, `alias: #promptotyping-document-data`).

**Begründung.** Zeigt unmittelbar, wie Repos die Site nutzen — der ganze Mechanismus (Frontmatter mit `template:` → URL-Auflösung → Vorlagen-Render) wird in einem Schritt sichtbar. Macht die Maschinenlesbarkeit konkret. Beim Paste eines realen Frontmatters aus einem fremden Repo entsteht der Aha-Effekt: das ist nicht Theorie, das funktioniert jetzt.

**Effekt.** Ein eigenständiges JS-Modul `assets/js/modules/frontmatter-inspector.js`. Vendoriert wird js-yaml v4.1.0 unter `assets/vendor/js-yaml.min.js` für robustes YAML-Parsing. Implementations-Details in [architecture.md](architecture.md).

### ADR-8: Case-Study-Filter als Modul

**Kontext.** 24+ Case Studies sind viel. Ohne Filter sind sie schwer zu navigieren.

**Wahl.** Filter-Bar oberhalb der Case-Study-Karten: Genre (HerData / Editions / Externdaten / Klawiter-Typ / Sonderfall), Status (aktiv, abgeschlossen), Demo-Verfügbarkeit.

**Begründung.** Praktisch nötig bei 24+ Karten. Sortierung optional.

**Effekt.** Ein eigenständiges JS-Modul `assets/js/modules/case-study-filter.js`. Datenquelle ist `data/case-studies.json`.

**Nachtrag 2026-06-10 (Operator-Entscheidung, ersetzt die Filter-Taxonomie).** Primärfilter ist die Use-Case-Typologie des Papers (Section 4.3), Sekundärfilter Interface-Typ und Demo-Verfügbarkeit. Das Genre-Vokabular ist internes Arbeitsvokabular, kommt im Paper nicht vor und ist für externe Besucher unverständlich; es erscheint nicht in der öffentlichen UI. Galerie kuratiert auf 18 Einträge (A7).

### ADR-9: Action-Layer-Vorlage als neunter Slug unter `/promptotyping-document/`

**Kontext.** Die Vorlage Action-Layer adressiert die `CLAUDE.md` im Repo-Root, nicht ein Dokument in `knowledge/`. Offen war (Journal 2026-06-09), ob sie einen eigenen Anker-Typ braucht.

**Wahl.** Neunter Slug `action-layer` im bestehenden Namespace `/promptotyping-document/`.

**Begründung.** Die eigene Regel "function before filename": Die Vorlage beschreibt die Funktion Action-Layer einer Promptotyping-Wissensbasis; wo die Datei liegt, ändert nichts an ihrer Zugehörigkeit zum Vorlagen-Katalog. Ein eigener Anker-Typ würde das Adress-Schema fragmentieren.

**Effekt.** `_content/promptotyping-document/action-layer.md`, Status "Entwurf, in Erprobung", Anker `#promptotyping-document-action-layer`.

### ADR-10: Statische Markdown-URL als Maschinenadresse, `.nojekyll` als Bedingung

**Kontext.** Plan-Review 2026-06-10, zwei Befunde. Erstens: GitHub Pages publiziert Unterstrich-Verzeichnisse ohne `.nojekyll` nicht; `_content/` wäre live unerreichbar gewesen. Zweitens: Die Subpath-URLs erfüllen den erklärten Zweck "robust für Coding-Agenten" nicht, weil GitHub Pages dafür die `404.html` mit HTTP-Status 404 liefert und der Inhalt erst nach JavaScript-Ausführung entsteht; ein HTTP-Abruf ohne Browser bekommt eine Fehlerseite.

**Wahl.** `.nojekyll` im Repo-Root. Die statische Markdown-URL `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md` ist die dokumentierte Maschinenadresse (Frontmatter-Feld `machine-url` der Mirrors, Anmerkung in `_content/konvention.md`, Hinweis in der Vorlagen-Sektion). Subpath- und Hash-Form bleiben die menschenlesbaren Adressen; das `template:`-Feld (url/alias) bleibt unverändert.

**Effekt.** Agenten erhalten unter der Maschinenadresse das Markdown mit HTTP 200 ohne JavaScript. Die Vault-Konvention soll die Maschinenadresse beim nächsten Konventions-Update übernehmen (offener Punkt, Vault-seitig).

## Was nicht in dieser Spec steht

- **Englische Fassung**: eigenes Projekt nach Bewährung der deutschen
- **CMS-Funktionalität**: Site ist statisch, Inhalte werden per Git verändert
- **User-Accounts, Kommentare, Annotationen**: out of scope
- **Automatisches Vault-Sync**: manuelle Spiegelung beim Refactor
- **Print-Layout**: Browser-Print-CSS optional, kein Hauptfokus
