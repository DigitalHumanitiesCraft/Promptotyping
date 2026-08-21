# CLAUDE.md — Action-Layer für Coding-Sessions in diesem Repo

Dieses Repo ist `DigitalHumanitiesCraft/Promptotyping`, die öffentliche Methodik-Site für Promptotyping. Es rendert auf https://dhcraft.org/Promptotyping/ als Spezifikationsdokumentation der Methode, mit dem Paper als einer ihrer Seiten, dem Glossar-Tooltip über dem Lesetext, den eingebetteten Vorlagen und der Use-Case-Galerie.

## Beim Session-Start lesen

Bevor du eine Aufgabe in diesem Repo angehst, lies in dieser Reihenfolge:

1. `knowledge/INDEX.md` — Navigation und Begriffslexikon
2. `knowledge/handoff.md` — offene Übergabepunkte; ein leerer Zustand ist gültig
3. `knowledge/project.md` — was die Site ist, wer die Adressaten sind
4. `knowledge/governance.md` — Autorität, Quellenstatus, Schreibgrenzen, Write-back, Rechte, Publikation und Eskalation
5. Das jeweils aufgabenrelevante Dokument:
   - Paper-Arbeit → `knowledge/paper-specification.md`, das Specification-Dokument mit Argument, Terminologie, Sprachregeln, Apparat und Einreichweg; von dort `research-artefacts/promptotyping-paper.md`, der kanonische vierkapitelige Text in Version 0.9 (Review-Draft), seit der Promotion vom 2026-07-31 von der Site gerendert. Das Research Artefact bleibt headerless und beginnt mit seiner H1; Version, Status und Reviewer-Ansprache stehen in `paper-specification.md`. Die Zwei-Spuren-Übergangslage ist beendet; die konsolidierten Steuerungs- und Revisionsdokumente liegen commit-gepinnt in der Git-History (Provenienz-Tabelle am Ende von `paper-specification.md`).
   - Was-soll-die-Site-können → `knowledge/specification.md`
   - Wie-ist-es-gebaut → `knowledge/architecture.md`
   - Wie-sieht-es-aus → `knowledge/design.md`
   - Woher-kommt-eine-Entscheidung → `knowledge/journal.md`

Die Wissensbasis im `knowledge/`-Ordner ist die Specification, aus der die Implementation folgt. Sie ist nicht beiläufig, sie ist normativ.

## Designprinzipien (aus knowledge/design.md übersetzt)

Die Site soll ruhig sein. Konkret bedeutet das beim Coden:

- **Verwende keine Farben außer den im Designsystem definierten Tokens.** Unbunt sind `--bg`, `--text`, `--accent`, `--border`, `--code-bg` und die drei Grautöne `--grey-1` bis `--grey-3`. Schreibe nie einen Hex-Wert ins Stylesheet außerhalb des Token-Blocks; der Dunkelmodus ist ein reiner Token-Tausch und bricht sonst.
- **Farbe bedeutet genau eine Sache**, die epistemische Funktion eines Artefakts, also die fünf Interface-Kategorien der site-eigenen Typologie auf der Artefakt-Seite (`--fn-verification`, `--fn-exploration`, `--fn-edition`, `--fn-capture`, `--fn-audit`). Das Paper zieht seit dem 2026-07-31 eine eigene Linie mit sechs operationalen Formen (Tabelle 1, Abschnitt 3.2); die Site behält ihre fünf Namen, weil publizierte Kartenfilter und die Farbskala daran hängen. Das ist eine Nominalskala, und dort ist der Farbton nach Bertin die richtige Kodierung. Sie erscheint auf der Artefakt-Seite und an der Kartenkante der Use Cases, sonst nirgends. **Die Kategorie steht immer auch als Wort daneben** (WCAG 2.1, Erfolgskriterium 1.4.1, Stufe A). Färbe insbesondere nicht die fünf Teile der Spezifikation ein, das ist eine Rangfolge und keine Verschiedenheit der Art.
- **`--signature`** ist der eine laute Ort, ein prismatischer Verlauf als 2px-Band am Fuß der Kopfzeile, einmal pro Seite. Er trägt keine Information und darf deshalb laut sein. Verwende ihn nirgends sonst.
- **Schriften: Inter für Text, Consolas für Code, sonst keine.** Keine zweite Sans-Serif, keine Display-Schrift, keine Brand-Schrift.
- **Animationen: nur Slide-in/out für Side-Panels (200ms ease-out), keine anderen.** Keine Scroll-Linked-Animationen, kein Parallax, keine Hover-Bouncing-Effekte. Kurze 150ms-Farb- und Hintergrundübergänge als Hover-Feedback sind erlaubte Mikro-Affordanzen, ebenso die beiden Opazitätsübergänge, die zum Panel gehören, das Einblenden des Glossar-Tooltips über 150ms und das Abdunkeln des Side-Panel-Backdrops über 200ms.
- **Nichts klappt ein oder aus** (Operator-Entscheidung 2026-07-29, A33). Der Navigationsbaum zeigt seine Struktur permanent, der Scrollspy bewegt allein die Aktuell-Markierung. Zulässig sind zwei Geräte, das Side-Panel samt seiner mobilen Bottom-Sheet-Form und die Klick-zum-Laden-Fassade der Videos; beide verbergen keinen Text, den die Seite ohnehin trägt. Ein drittes kommt nicht hinzu.
- **Keine dekorativen Elemente.** Wenn ein UI-Element keine Funktion hat, gehört es nicht hin.

## Repo-Struktur (Pflicht-Konvention)

```
.
├── index.html                  # Site-Einstieg
├── 404.html                    # Subpath-Routing-Fallback
├── README.md                   # Repo-README
├── CLAUDE.md                   # Diese Datei (Action-Layer)
├── knowledge/                  # Dauerhafte Promptotyping Documents
│   └── handoff.md              # Verpflichtende Process Inbox
├── research-artefacts/         # Wissenschaftliche Outputs, darunter das Paper
├── source-material/            # Übernommene Quellen und Transkripte
├── snapshots/                  # Datierte Reports und Audits
├── handoffs/                   # Datierte Übergabestände
├── _content/                   # Site-Inhalte (Vorlagen, Case Studies, Glossar, Literatur)
├── assets/                     # CSS, JS, Vendor, Fonts, Logo, Paper-Abbildungen
├── data/                       # JSON-Datenfutter
├── tools/                      # Prüfskripte der Site (check_consistency.py, build_glossar.py) samt tests/
└── vault/                      # Grounded-Vault-Instanz: Provenienz-Schicht unter dem Paper (Operator-Entscheidung 2026-07-19)
```

Die Abbildungen des Papers liegen unter `assets/figures/`; der Text bindet seit der Vierkapitel-Fassung nur noch Abbildung 1 ein, referenziert mit einem repo-relativen Pfad. Die vier abgelegten Abbildungen bleiben samt Spezifikation, SVG, PNG und Provenienz liegen und werden nicht gelöscht. Das löst auf der Site auf, weil `404.html` jede Subpath-Adresse auf den Site-Root zurückwirft und die Anwendung dort läuft. In der GitHub-Vorschau von `research-artefacts/promptotyping-paper.md` bleiben die Bilder deshalb leer, was der bewusste Preis für Portabilität ohne feste Domain ist.

`assets/promptotyping-logo.png` bleibt erhalten. `_content/` und `data/` werden in den Implementierungs-Sprints angelegt.

Der Ordner `vault/` ist eine Instanz des Grounded-Vault-Templates (`DigitalHumanitiesCraft/grounded-vault`) und verankert die tragenden Claims des Papers in `research-artefacts/promptotyping-paper.md` quellenfest. Für jede Arbeit in `vault/` gilt dessen eigener Action-Layer `vault/CLAUDE.md`; die Python-Werkzeuge unter `vault/tools/` gehören zum Vault und sind die zulässigen Ausnahmen von der No-Build-Regel unten. `validate.py` prüft den Vault. `build_site_index.py` erzeugt `data/vault.json` für die Vault-Ansicht der Site; das Ergebnis wird committet, die Site holt zur Laufzeit eine statische Datei, und ein Build-Schritt zur Auslieferzeit entsteht nicht. Wer die Assertion-Schicht (bis August 2026 Claim-Schicht) ändert, führt das Skript nach.

## Tech-Stack-Regeln

- **Vanilla HTML5/CSS3/JS, kein Framework, kein Build-Step.** Wenn du dabei bist, npm zu verwenden, halte inne. Falsche Richtung.
- **Die Site-Logik liegt in zehn einfachen Skripten unter `assets/js/`**, jedes eine IIFE, die `window.PromptotypingApp` erweitert. Kein ES-Modul, kein `import`. Verhaltensrelevant ist allein, dass `app.js` als letzte der zehn geladen wird und die beiden Shell-deklarierten Module danach folgen. `404.html` ist ein Rumpf ohne Site-Skript, der den angefragten Pfad per `location.replace` als `?p=` an `index.html` durchreicht; die Shell existiert genau einmal, und das Subpath-Vokabular steht allein in `resolveTemplateUrl`.
- **`python tools/check_consistency.py` läuft vor jedem Commit, der Katalog, Konvention, Vorlagenordner oder die Use-Case-Galerie anfasst.** Es meldet, wenn dieselbe Aussage an zwei Orten auseinanderläuft. Wer eine Adresse in `data/case-studies.json` anfasst, läuft es zusätzlich mit `--check-urls`; diese Gruppe braucht das Netz und ist deshalb nicht im Standardlauf. Was es prüft, steht in `knowledge/verification.md`.
- **marked.js v9.1.6 vendoriert** in `assets/vendor/marked.min.js`. Kein CDN.
- **Custom-Extensions für marked.js** sind erlaubt, bleiben aber in `assets/js/markdown.js`, wo die marked-Konfiguration insgesamt liegt. Dort stehen heute der Fußnotenapparat und der Heading-ID-Generator.
- **Browser-natives `location.hash` für Routing**, kein History-API-Hacking, kein React-Router.
- **GitHub Pages serviert direkt aus dem Repo-Root.** Kein `_site`, kein `docs/`, kein Jekyll-Build.

## Seitenmodell: Spezifikationsdokumentation (Operator-Entscheidung 2026-07-25)

Die Site ist eine Spezifikationsdokumentation, wie sie eine Programmbibliothek oder eine publizierte Ontologie führt. Es ist **eine Seite zur Zeit sichtbar**; der Navigationsbaum in der Seitenleiste ist das Inhaltsverzeichnis. Das Raster hat zwei Spuren, den Baum und die Seite; eine dritte Spur mit den Überschriften der aktiven Seite gibt es nicht, das Paper trägt sein Inhaltsverzeichnis stattdessen in der Seite unter der H1 (A23). Die durchgehende Scroll-Spalte mit Hero und Video an der Spitze ist abgelöst und wird nicht reaktiviert.

Die fünf nummerierten Teile sind seit dem 2026-07-29 Sektionen **einer** Spezifikationsseite unter `#specification` (A32, Operator-Entscheidung, Paket F9); die Startseite `ueberblick` bleibt eigenständig. Ein Registereintrag mit `parent` ist ein Teil und keine Seite, behält seine Id als Element-Id in der zusammengeführten Seite und bleibt damit unter genau derselben Adresse erreichbar wie zuvor. Wer einen Teil anfasst, prüft `isPageId`, `hostPage` und `isRouteId`; sie beantworten, was gezeigt werden kann, in welcher Seite ein Teil sitzt und was überhaupt adressierbar ist.

Einzige Quelle für Seitencontainer, Navigationsbaum, Routenauflösung und den Spezifikationsindex der Startseite ist das Register `PAGES` in `assets/js/registry.js`. Eine neue Seite wird dort eingetragen, nicht in `index.html`. **Schreibe keine Navigationsmarkierung in `index.html` oder `404.html`**; beide tragen nur die Shell, und genau das hält sie synchron.

Die nicht aktiven Seiten bleiben als `display: none` im DOM. Das ist die Bedingung dafür, dass jeder publizierte Anker weiter auflöst, gleich welche Seite gerade zu sehen ist. Lazy-Mounting einzelner Seiten würde das brechen.

## URL-Anker-Schema (Pflicht-Konvention, Stand ADR-2/ADR-3)

- Vorlagen (Knowledge Documents, bis 2026-07-31 Promptotyping Documents; die Anker behalten das alte Segment): Subpath `/promptotyping-document/{slug}` (Latest, kanonisch), gleichwertig Hash `#promptotyping-document-{slug}`. Siebzehn Slugs: `data`, `index`, `project`, `specification`, `architecture`, `technology`, `design`, `journal`, `handoff`, `user-stories`, `action-layer` (ADR-9), `testing`, `plan`, `report`, `domain-knowledge`, `verification`, `integration`. Snapshots erst bei Versionssprung über Sub-Anker `#promptotyping-document-{slug}-v{version}` bzw. `/promptotyping-document/{slug}#v{version}` — kein eigener Subpath pro Version. (Das ältere Schema `#vorlage-{name}-{version}` ist obsolet, siehe journal.md 2026-05-09 „URL-Schema-Korrektur".)
- Maschinenadresse (ADR-10): Für HTTP-Abruf ohne JavaScript ist die statische Markdown-URL kanonisch, Muster `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. Die Subpath-Auflösung läuft über `404.html` und setzt JavaScript voraus. `.nojekyll` im Repo-Root ist Pflicht, sonst publiziert GitHub Pages `_content/` nicht.
- Praxis-Anker entstehen zur Laufzeit aus den Überschriften. Wer eine Überschrift übersetzt oder umformuliert, verschiebt damit ihre Adresse; sechs Slugs sind am 2026-07-26 gewandert und werden von `PRAXIS_ALIASES` in `assets/js/pages-content.js` am Leben gehalten. Jede weitere Änderung einer ankertragenden Überschrift braucht denselben Alias.
- Konzepte: `#konzept-{name}` (z.B. `#konzept-eil`, `#konzept-asymmetric-amplification`)
- Case Studies: `#case-{name}` (z.B. `#case-herdata`, `#case-klawiter-rescue`)
- Vault: `#vault` für die Ansicht, `#vault-{assertion-slug}` für eine einzelne Assertion (bis August 2026 Claim); Subpath `/vault` und `/vault/{assertion-slug}`. Die Slugs sind die Dateinamen unter `vault/30_assertions/` und haben die Umbenennung unverändert überlebt, publizierte Anker lösen weiter auf.
- Spezifikation: `#specification`, Subpath `/specification` (A32). Die fünf Teile sind Sektionen dieser Seite und behalten ihre Adressen, `#anwendung`, `#vorlagen`, `#konvention-v0.1`, `#artefakt`, `#verifikation` samt den gleichlautenden Subpfaden.
- Konvention: `#konvention-v0.1`
- Glossar: `#glossar`
- Literatur: `#literatur`
- Paper-Sektionen: `#abschnitt-{n}-{slug}` (z.B. `#abschnitt-2-promptotyping-as-a-method`). Die Site rendert `research-artefacts/promptotyping-paper.md` direkt und erzeugt die Anker beim Rendern; unter `_content/paper/` liegt nichts mehr. Jede Umgliederung des Papers verschiebt Anker, deshalb wird die Aliaskarte `PAPER_ANCHOR_ALIASES` in `assets/js/pages-paper.js` vollständig neu gezielt und nicht bloß ergänzt; sie ist flach und löst nicht transitiv auf.
- Überblick: `#ueberblick`; Use Cases: `#use-cases`; Paper: `#paper`; Worked Workflow: `#workflow`; Best Practices: `#praxis`, Praxis-Einträge: `#praxis-{slug}`; Skills: `#skills` und `#skills-{slug}` (A13 bis A15); Arbeitsumgebung: `#arbeitsumgebung`, Subpath `/arbeitsumgebung` (A17); Tutorial: `#tutorial`, Subpath `/tutorial` (A31)

Anker dürfen nicht ohne Diskussion umbenannt werden — Repos können auf sie als `template:`-URI verlinken.

## Was du tun sollst

- **Inkrementell arbeiten**: ein abgegrenzter Schritt nach dem in der Wissensbasis dokumentierten Stand, ein Commit pro abgeschlossenem Schritt
- **Wissensbasis konsultieren**, bevor du eine Designentscheidung triffst
- **Bei Unklarheit fragen** statt eigenmächtig entscheiden — speziell bei Scope, Reihenfolge, Architektur
- **Handoff-Punkte verarbeiten**: Quelle und aktuelles Ziel prüfen, dauerhaften Inhalt zuerst integrieren oder begründet verwerfen, danach den Journal-Nachweis schreiben und den Punkt vollständig entfernen
- **Journal als Provenienzindex pflegen**: ein Eintrag pro sachlich zusammengehörigem Übergang mit `integriert`, `verworfen` oder `korrigiert`; bei Funktionsverlust semantisch verdichten und kein Archiv erzeugen

## Was du nicht tun sollst

- **Nicht aus dem Vault zitieren ohne Markdown-Link.** Vault-interne Wikilinks (`[[CLAUDE]]`) bedeuten im Repo nichts.
- **Nicht das alte Living-Paper-Material reaktivieren.** Alles, was im November-2025-Stand war, ist gelöscht. Wer alte Module wiederbeleben will, beginnt einen Neu-Diskurs.
- **Die Site ist englisch.** Der Durchgang ist am 2026-07-26 gelaufen (Operator-Entscheidung 2026-07-25, journal.md, Sprachentscheidung). Englisch sind Shell, Bedienelemente, die neun Seitentexte direkt unter `_content/` und die Textfelder der drei Datendateien. Deutsch geblieben sind die siebzehn Vorlagen und die drei Dateien unter `_content/skills/` als Unterrichtsmaterial. Sechzehn Vorlagen sind Vault-Spiegel, deren Übersetzung in eine Vault-Sitzung gehört; die Vorlage `technology` ist seit dem 2026-07-26 im Repo kanonisch und bleibt deutsch, damit der Katalog einsprachig bleibt. Die sieben Fall-Tiefenseiten unter `_content/case-studies/` sind ebenfalls englisch; der Durchgang ist damit abgeschlossen. Die publizierten Anker bleiben deutsch, weil fremde Repos sie als `template:`-URI führen, ebenso die Vorlagennamen als Identifikatoren.
- **Keine Module außer Frontmatter-Inspector, Case-Study-Filter, Begriffsregister und Vault-Ansicht.** Das Begriffsregister (A25, seit 2026-07-26) vertritt die abgelehnte Volltextsuche. Die Vault-Ansicht ist seit der Operator-Entscheidung 2026-07-25 in Scope; Context-Rot-Viz und Sycophancy-Trap bleiben es nicht.
- **Keine Branches.** Alle Änderungen direkt auf `main`. (Das ist Christopher Pollins explizite Wahl, dokumentiert in journal.md.)

## Bei Konflikt zwischen Vault und Repo

Vault-Vorlagen sind Source of Truth für die Vorlagen selbst. Wenn beim Spiegeln eine Vorlage ins Repo Diskrepanzen mit dem Vault auffallen, gilt:

1. Wenn die Vault-Vorlage falsch ist → Vault korrigieren, dann ins Repo spiegeln
2. Wenn die Repo-Spiegelung falsch ist → Repo korrigieren, Vault bleibt
3. Wenn unklar → Christopher fragen

Niemals stillschweigend divergieren lassen.

## Co-Author-Tag für Commits

Commits, an denen Claude beteiligt war, tragen am Ende:

```
Co-Authored-By: Claude <tatsächlich verwendetes Modell> <noreply@anthropic.com>
```
