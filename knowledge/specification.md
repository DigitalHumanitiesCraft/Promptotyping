---
title: Specification
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.1
created: 2026-05-09
updated: 2026-05-09
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.7
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Specification
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-specification-v0.1
topics: ["[[Requirements Engineering]]", "[[Decision Records]]", "[[Information Visualisation]]"]
related: [INDEX, project, data, architecture, design, journal]
---

# Specification

Anforderungen, Funktionsumfang und Entscheidungen für den Refactor zum interaktiven Paper. Die Site rendert das Pollin-2026-Paper als scrollbare Single-Page mit Phasen-Provenance-Lane, Inline-Glossar, eingebetteten Vorlagen, Case-Study-Karten und Side-Panels.

## Anforderungen

### A1 — Paper als Lesefluss
Das Pollin-2026-Paper ist im Lesefluss vorhanden, sektioniert in sechs Markdown-Dateien, gerendert in einer zentralen Lese-Spalte (max. 720px). Akzeptanzkriterium: Wer auf https://dhcraft.org/Promptotyping/ kommt, kann das Paper von Abstract bis Schluss durchscrollen, Inhaltsverzeichnis links als sticky Sidebar.

### A2 — Phasen-Provenance-Lane
Jeder Absatz im Paper trägt eine Phasen-Klasse (Preparation, Exploration & Mapping, Distillation, Implementation), die sich als monochrome vertikale Markierung am linken Absatzrand zeigt. Akzeptanzkriterium: Beim Scrollen erscheint links ein vertikales Streifen-Muster, das die methodische Verteilung des Papers ablesbar macht. Hover auf einen Strich öffnet einen Tooltip mit Phasennamen plus "Springe zu allen Absätzen dieser Phase". Klick aktiviert Phasen-Filter, der nicht-zugeordnete Absätze ausgraut.

### A3 — Adressierbare Vorlagen
Acht Vorlagen sind unter versionierten Ankern adressierbar (`#vorlage-data-v0.2`, `#vorlage-journal-v0.1`, ...). Pro Vorlage existiert ein Latest-Alias (`#vorlage-data` zeigt auf neueste Version). Akzeptanzkriterium: `https://dhcraft.org/Promptotyping/#vorlage-data-v0.2` springt zur Vorlage und öffnet automatisch das Side-Panel mit der vollen Vorlagen-Spec.

### A4 — Subpath-URL-Aliase
Maschinenlesbare Subpath-URLs wie `/vorlagen/data/v0.2` rewriten auf den entsprechenden Anker. Akzeptanzkriterium: `https://dhcraft.org/Promptotyping/vorlagen/data/v0.2` lädt dieselbe Single-Page mit Auto-Scroll zum Anker `#vorlage-data-v0.2`. Implementation per `index.html`-Routing oder GitHub-Pages-Konfiguration.

### A5 — `template:`-Frontmatter-Feld als Maschinenadresse
Promptotyping-Repos können in ihren `knowledge/`-Dokumenten ein Frontmatter-Feld `template: { name, version, url }` führen, dessen `url` auf einen Vorlagen-Anker dieser Site zeigt. Akzeptanzkriterium: Ein Coding-Agent, der einen `template:`-URI sieht, kann ihn aufrufen und bekommt die maßgebliche Vorlagen-Spezifikation gerendert.

### A6 — Glossar als Hover- und Klick-Quelle
Jeder konstitutive Begriff im Paper-Lesefluss ist als Glossar-Trigger markiert (gepunktete Unterlinie). Hover zeigt Kurzdefinition als Tooltip, Klick öffnet rechtes Side-Panel mit voller Glossar-Definition, Quellenangaben, Verweisen ins Paper. Akzeptanzkriterium: Mindestens 30 Begriffe sind verlinkt und zugänglich; das Glossar selbst ist auch als eigener Anker `#glossar` direkt erreichbar.

### A7 — Case-Studies-Karten und Tiefenseiten
Im Paper-Lesefluss (Section 4) erscheinen kompakte Case-Study-Karten (Name, Genre, Demo-Link, ein Satz). 24+ Case Studies insgesamt, davon acht mit Tiefenseite im Side-Panel (HerData, Klawiter-Rescue, zbz-ocr-tei, M3GIM, Notker-Edition, CorrespExplorer, VetMedAI-Wissensbilanz, Agentic Edition Pipeline). Listenübersicht aller 24+ als sortier- und filterbare Tabelle.

### A8 — YouTube-Videos eingebettet
Teil 1 als Hero-Embed oben (vor Paper-Section 1). Teil 2 in Paper-Section 4 als didaktischer Anker bei der VetMedAI-Wissensbilanz. Akzeptanzkriterium: Beide Videos laufen aus der `youtube-nocookie.com`-Variante (Datenschutz), kein Tracking ohne Consent.

### A9 — DHCraft-Designsystem konsequent
Hellgrau `#d5d5d5` als Akzent, Schwarz auf Weiß, Inter als Font, Consolas für Code. Keine Akzentlinien, keine Farbflut, keine dekorativen Elemente. Phasen-Provenance-Lane in monochromen Stufen `#2a2a2a` bis `#b8b8b8`. Mobile-Layout kollabiert Side-Panels zu Bottom-Sheets, Phasen-Lane wird zur Top-Bar.

### A10 — Vanilla Tech-Stack
Kein Framework, kein Build-Step. HTML5/CSS3/JS, marked.js v9.1.6 vendoriert. GitHub-Pages-natives Hosting. Akzeptanzkriterium: `git clone` und Browser öffnen reicht, um die Site lokal zu rendern (per `python -m http.server` oder Live-Server).

## Funktionsumfang pro Site-Sektion

### Methode (Paper-Sektionen 1-3)
Das Paper-Narrativ als Lesefluss. Phasen-Provenance-Lane an jedem Absatz. Begriffe als Glossar-Trigger. Vorlagen-Tabelle im Section-3-Kontext (wenn Promptotyping Documents erklärt werden) als eingebettete Tabelle mit Klick-Links zu Side-Panel-Specs. Hero-Video Teil 1 oben.

### Vorlagen (eingebettet in Paper-Section 3, plus eigener Sektionsanker `#vorlagen`)
Tabelle aller acht Vorlagen mit Funktion, Empfohlenem Dateinamen, Promptotyping-Typ, Version. Klick auf Eintrag öffnet Side-Panel mit voller Spec inkl. Frontmatter-Schema, Sektionsstruktur, befüllbarem Block, Copy-Button. Pro Vorlage ein versionierter Anker plus Latest-Alias.

### Case Studies (Paper-Section 4)
24+ kompakte Karten im Section-4-Lesefluss, gruppiert nach Genre. Pro Karte: Name, Genre, ein Satz, Demo-Link, Repo-Link. Acht Karten haben "Mehr →"-Button für Tiefenseite im Side-Panel. Filter-Bar oben (Genre, Status, Demo verfügbar). VetMedAI-Wissensbilanz mit Teil-2-Video eingebettet.

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

### ADR-2: Versionierte Vorlagen-Anker plus Latest-Alias

**Kontext.** Vorlagen werden refaktoriert (z.B. `data` v0.1 → v0.2). Repos, die per `template:`-URI verlinken, brauchen Stabilität.

**Wahl.** Pro Vorlagen-Version eigener Anker (`#vorlage-data-v0.2`). Latest-Alias `#vorlage-data` zeigt auf neueste Version.

**Begründung.** Stabilität für Repos, die explizit eine Version brauchen. Bequemlichkeit für Repos, die immer den aktuellen Stand wollen. Beide Anker existieren parallel.

**Effekt.** URL-Sammlung wächst (acht Vorlagen × n Versionen), aber bleibt überschaubar. Alte Versionen werden im Vorlagen-Index als "frühere Version" markiert.

### ADR-3: Subpath-Aliase für Maschinenlesbarkeit

**Kontext.** Coding-Agenten parsen URLs strukturell. `#vorlage-data-v0.2` sieht wie ein Anker aus; `/vorlagen/data/v0.2` wie ein Pfad. Beides sollte funktionieren.

**Wahl.** Subpath-URLs sind Aliase, die per `index.html`-Routing auf Anker geleitet werden.

**Begründung.** Robust für Coding-Agenten, lesbar für Menschen.

**Effekt.** Routing-Logik in JavaScript (auf `DOMContentLoaded` prüft die URL und scrollt zum Anker).

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

### ADR-7: Frontmatter-Inspector als Modul

**Kontext.** Die `template:`-URI-Auflösung ist ein zentrales Feature, aber für einen externen Leser unsichtbar. Wer noch nie ein Promptotyping-Repo gesehen hat, versteht nicht, wozu die versionierten Anker da sind.

**Wahl.** Kleine interaktive Komponente in der Vorlagen-Sektion: Texteingabe für `template:`-URI, rendert die referenzierte Vorlage live darunter.

**Begründung.** Zeigt unmittelbar, wie Repos die Site nutzen. Macht die Maschinenlesbarkeit konkret.

**Effekt.** ~100 Zeilen JS, eingebettet in die Vorlagen-Sektion.

### ADR-8: Case-Study-Filter als Modul

**Kontext.** 24+ Case Studies sind viel. Ohne Filter sind sie schwer zu navigieren.

**Wahl.** Filter-Bar oberhalb der Case-Study-Karten: Genre (HerData / Editions / Externdaten / Klawiter-Typ / Sonderfall), Status (aktiv, abgeschlossen), Demo-Verfügbarkeit.

**Begründung.** Praktisch nötig bei 24+ Karten. Sortierung optional.

**Effekt.** ~50 Zeilen JS, eingebettet in die Case-Study-Sektion.

## Was nicht in dieser Spec steht

- **Englische Fassung**: eigenes Projekt nach Bewährung der deutschen
- **CMS-Funktionalität**: Site ist statisch, Inhalte werden per Git verändert
- **User-Accounts, Kommentare, Annotationen**: out of scope
- **Automatisches Vault-Sync**: manuelle Spiegelung beim Refactor
- **Print-Layout**: Browser-Print-CSS optional, kein Hauptfokus
