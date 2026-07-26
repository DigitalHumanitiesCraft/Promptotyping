# CLAUDE.md — Action-Layer für Coding-Sessions in diesem Repo

Dieses Repo ist `DigitalHumanitiesCraft/Promptotyping`, die öffentliche Methodik-Site für Promptotyping. Es rendert auf https://dhcraft.org/Promptotyping/ als Spezifikationsdokumentation der Methode, mit dem Paper als einer ihrer Seiten, dem Glossar-Tooltip über dem Lesetext, den eingebetteten Vorlagen und der Use-Case-Galerie.

## Beim Session-Start lesen

Bevor du eine Aufgabe in diesem Repo angehst, lies in dieser Reihenfolge:

1. `knowledge/INDEX.md` — Navigation und Begriffslexikon
2. `knowledge/project.md` — was die Site ist, wer die Adressaten sind
3. Das jeweils aufgabenrelevante Dokument:
   - Paper-Arbeit → `knowledge/paper-writing.md` (Steuerung, Sprachregeln, Prüfpunkte), von dort `knowledge/paper.md` (der Text)
   - Was-soll-die-Site-können → `knowledge/specification.md`
   - Wie-ist-es-gebaut → `knowledge/architecture.md`
   - Wie-sieht-es-aus → `knowledge/design.md`
   - Was-ist-bisher-passiert → `knowledge/journal.md`

Die Wissensbasis im `knowledge/`-Ordner ist die Specification, aus der die Implementation folgt. Sie ist nicht beiläufig, sie ist normativ.

## Designprinzipien (aus knowledge/design.md übersetzt)

Die Site soll ruhig sein. Konkret bedeutet das beim Coden:

- **Verwende keine Farben außer den im Designsystem definierten Tokens.** Unbunt sind `--bg`, `--text`, `--accent`, `--border`, `--code-bg` und die vier Grautöne `--grey-1` bis `--grey-4`. Schreibe nie einen Hex-Wert ins Stylesheet außerhalb des Token-Blocks; der Dunkelmodus ist ein reiner Token-Tausch und bricht sonst.
- **Farbe bedeutet genau eine Sache**, die epistemische Funktion eines Artefakts, also die fünf Interface-Kategorien aus Abschnitt 4.2 (`--fn-verification`, `--fn-exploration`, `--fn-edition`, `--fn-capture`, `--fn-audit`). Das ist eine Nominalskala, und dort ist der Farbton nach Bertin die richtige Kodierung. Sie erscheint auf der Artefakt-Seite und an der Kartenkante der Use Cases, sonst nirgends. **Die Kategorie steht immer auch als Wort daneben** (WCAG 2.1, Erfolgskriterium 1.4.1, Stufe A). Färbe insbesondere nicht die fünf Teile der Spezifikation ein, das ist eine Rangfolge und keine Verschiedenheit der Art.
- **`--signature`** ist der eine laute Ort, ein prismatischer Verlauf als 2px-Band am Fuß der Kopfzeile, einmal pro Seite. Er trägt keine Information und darf deshalb laut sein. Verwende ihn nirgends sonst.
- **Schriften: Inter für Text, Consolas für Code, sonst keine.** Keine zweite Sans-Serif, keine Display-Schrift, keine Brand-Schrift.
- **Animationen: nur Slide-in/out für Side-Panels (200ms ease-out), keine anderen.** Keine Scroll-Linked-Animationen, kein Parallax, keine Hover-Bouncing-Effekte.
- **Keine dekorativen Elemente.** Wenn ein UI-Element keine Funktion hat, gehört es nicht hin.

## Repo-Struktur (Pflicht-Konvention)

```
.
├── index.html                  # Site-Einstieg
├── 404.html                    # Subpath-Routing-Fallback
├── README.md                   # Repo-README
├── CLAUDE.md                   # Diese Datei (Action-Layer)
├── knowledge/                  # Wissensbasis (Specification)
├── _content/                   # Markdown-Inhalte (Paper, Vorlagen, Case Studies, Glossar, Literatur)
├── assets/                     # CSS, JS, Vendor, Fonts, Logo, Paper-Abbildungen
├── data/                       # JSON-Datenfutter
├── tools/                      # Prüfskripte der Site (check_consistency.py)
└── vault/                      # Grounded-Vault-Instanz: Provenienz-Schicht unter dem Paper (Operator-Entscheidung 2026-07-19)
```

Die Abbildungen des Papers liegen unter `assets/figures/` und werden aus `knowledge/paper.md` mit einem repo-relativen Pfad referenziert. Das löst auf der Site auf, weil `404.html` jede Subpath-Adresse auf den Site-Root zurückwirft und die Anwendung dort läuft. In der GitHub-Vorschau von `paper.md` bleiben die Bilder deshalb leer, was der bewusste Preis für Portabilität ohne feste Domain ist.

`assets/promptotyping-logo.png` bleibt erhalten. `_content/` und `data/` werden in den Implementierungs-Sprints angelegt.

Der Ordner `vault/` ist eine Instanz des Grounded-Vault-Templates (`DigitalHumanitiesCraft/grounded-vault`) und verankert die tragenden Claims des Papers in `knowledge/paper.md` quellenfest. Für jede Arbeit in `vault/` gilt dessen eigener Action-Layer `vault/CLAUDE.md`; die Python-Werkzeuge unter `vault/tools/` gehören zum Vault und sind die zulässigen Ausnahmen von der No-Build-Regel unten. `validate.py` prüft den Vault. `build_site_index.py` erzeugt `data/vault.json` für die Vault-Ansicht der Site; das Ergebnis wird committet, die Site holt zur Laufzeit eine statische Datei, und ein Build-Schritt zur Auslieferzeit entsteht nicht. Wer die Claim-Schicht ändert, führt das Skript nach.

## Tech-Stack-Regeln

- **Vanilla HTML5/CSS3/JS, kein Framework, kein Build-Step.** Wenn du dabei bist, npm zu verwenden, halte inne. Falsche Richtung.
- **Die Site-Logik liegt in zehn einfachen Skripten unter `assets/js/`**, jedes eine IIFE, die `window.PromptotypingApp` erweitert. Kein ES-Modul, kein `import`. Verhaltensrelevant ist allein, dass `app.js` als letzte der zehn geladen wird und die beiden Shell-deklarierten Module danach folgen. `404.html` ist ein Rumpf ohne Site-Skript und leitet per `location.replace` auf `index.html` weiter; die Shell existiert genau einmal.
- **`python tools/check_consistency.py` läuft vor jedem Commit, der Katalog, Konvention, Vorlagenordner oder die Use-Case-Galerie anfasst.** Es meldet, wenn dieselbe Aussage an zwei Orten auseinanderläuft. Wer eine Adresse in `data/case-studies.json` anfasst, läuft es zusätzlich mit `--check-urls`; diese Gruppe braucht das Netz und ist deshalb nicht im Standardlauf. Was es prüft, steht in `knowledge/verification.md`.
- **marked.js v9.1.6 vendoriert** in `assets/vendor/marked.min.js`. Kein CDN.
- **Custom-Extensions für marked.js** sind erlaubt (z.B. für Klassen-Tags `{:.phase-preparation}`), bleiben aber in `assets/js/markdown.js`, wo die marked-Konfiguration insgesamt liegt.
- **Browser-natives `location.hash` für Routing**, kein History-API-Hacking, kein React-Router.
- **GitHub Pages serviert direkt aus dem Repo-Root.** Kein `_site`, kein `docs/`, kein Jekyll-Build.

## Phasen-Provenance-Lane: entfernt (Operator-Entscheidung 2026-06-10)

Die Phasen-Provenance-Lane wurde nach dem Erstdeploy auf Operator-Entscheidung vollständig entfernt (Legende, Mobile-Phase-Bar, Hover-Tooltip, Filter-Modus aus HTML, CSS und JavaScript). Die `{:.phase-*}`-Tags im Paper-Markdown werden von der marked-Extension in `markdown.js` nur noch gestrippt: ein getaggter Absatz rendert als gewöhnlicher Absatz ohne Klasse und ohne sichtbaren Effekt. Lege keine neuen `{:.phase-*}`-Tags an und reaktiviere die Lane nicht; wer sie wiederbeleben will, beginnt einen Neu-Diskurs mit dem Critical Expert.

## Seitenmodell: Spezifikationsdokumentation (Operator-Entscheidung 2026-07-25)

Die Site ist eine Spezifikationsdokumentation, wie sie eine Programmbibliothek oder eine publizierte Ontologie führt. Es ist **eine Seite zur Zeit sichtbar**; der Navigationsbaum in der Seitenleiste ist das Inhaltsverzeichnis. Das Raster hat zwei Spuren, den Baum und die Seite; eine dritte Spur mit den Überschriften der aktiven Seite gibt es nicht, das Paper trägt sein Inhaltsverzeichnis stattdessen in der Seite unter der H1 (A23). Die durchgehende Scroll-Spalte mit Hero und Video an der Spitze ist abgelöst und wird nicht reaktiviert.

Einzige Quelle für Seitencontainer, Navigationsbaum, Routenauflösung und den Spezifikationsindex der Startseite ist das Register `PAGES` in `assets/js/registry.js`. Eine neue Seite wird dort eingetragen, nicht in `index.html`. **Schreibe keine Navigationsmarkierung in `index.html` oder `404.html`**; beide tragen nur die Shell, und genau das hält sie synchron.

Die nicht aktiven Seiten bleiben als `display: none` im DOM. Das ist die Bedingung dafür, dass jeder publizierte Anker weiter auflöst, gleich welche Seite gerade zu sehen ist. Lazy-Mounting einzelner Seiten würde das brechen.

## URL-Anker-Schema (Pflicht-Konvention, Stand ADR-2/ADR-3)

- Vorlagen (Promptotyping Documents): Subpath `/promptotyping-document/{slug}` (Latest, kanonisch), gleichwertig Hash `#promptotyping-document-{slug}`. Sechzehn Slugs: `data`, `index`, `project`, `specification`, `architecture`, `technology`, `design`, `journal`, `user-stories`, `action-layer` (ADR-9), `testing`, `plan`, `report`, `domain-knowledge`, `verification`, `integration`. Snapshots erst bei Versionssprung über Sub-Anker `#promptotyping-document-{slug}-v{version}` bzw. `/promptotyping-document/{slug}#v{version}` — kein eigener Subpath pro Version. (Das ältere Schema `#vorlage-{name}-{version}` ist obsolet, siehe journal.md 2026-05-09 „URL-Schema-Korrektur".)
- Maschinenadresse (ADR-10): Für HTTP-Abruf ohne JavaScript ist die statische Markdown-URL kanonisch, Muster `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. Die Subpath-Auflösung läuft über `404.html` und setzt JavaScript voraus. `.nojekyll` im Repo-Root ist Pflicht, sonst publiziert GitHub Pages `_content/` nicht.
- Praxis-Anker entstehen zur Laufzeit aus den Überschriften. Wer eine Überschrift übersetzt oder umformuliert, verschiebt damit ihre Adresse; sechs Slugs sind am 2026-07-26 gewandert und werden von `PRAXIS_ALIASES` in `assets/js/pages-content.js` am Leben gehalten. Jede weitere Änderung einer ankertragenden Überschrift braucht denselben Alias.
- Konzepte: `#konzept-{name}` (z.B. `#konzept-eil`, `#konzept-asymmetric-amplification`)
- Case Studies: `#case-{name}` (z.B. `#case-herdata`, `#case-klawiter-rescue`)
- Vault: `#vault` für die Ansicht, `#vault-{claim-slug}` für einen einzelnen Claim; Subpath `/vault` und `/vault/{claim-slug}`. Die Slugs sind die Dateinamen unter `vault/20_claims/`.
- Konvention: `#konvention-v0.1`
- Glossar: `#glossar`
- Literatur: `#literatur`
- Paper-Sektionen: `#abschnitt-{n}-{slug}` (z.B. `#abschnitt-3-the-method`). Die Site rendert `knowledge/paper.md` direkt und erzeugt die Anker beim Rendern; unter `_content/paper/` liegt nichts mehr.
- Überblick: `#ueberblick`; Use Cases: `#use-cases`; Praxis-Einträge: `#praxis-{slug}`; Skills: `#skills-{slug}` (A13 bis A15); Arbeitsumgebung: `#arbeitsumgebung`, Subpath `/arbeitsumgebung` (A17)

Anker dürfen nicht ohne Diskussion umbenannt werden — Repos können auf sie als `template:`-URI verlinken.

## Was du tun sollst

- **Inkrementell arbeiten**: ein abgegrenzter Schritt nach dem in der Wissensbasis dokumentierten Stand, ein Commit pro abgeschlossenem Schritt
- **Wissensbasis konsultieren**, bevor du eine Designentscheidung triffst
- **Bei Unklarheit fragen** statt eigenmächtig entscheiden — speziell bei Scope, Reihenfolge, Architektur
- **journal.md aktualisieren** am Ende jeder Session

## Was du nicht tun sollst

- **Nicht aus dem Vault zitieren ohne Markdown-Link.** Vault-interne Wikilinks (`[[CLAUDE]]`) bedeuten im Repo nichts.
- **Nicht das alte Living-Paper-Material reaktivieren.** Alles, was im November-2025-Stand war, ist gelöscht. Wer alte Module wiederbeleben will, beginnt einen Neu-Diskurs.
- **Die Site ist englisch.** Der Durchgang ist am 2026-07-26 gelaufen (Operator-Entscheidung 2026-07-25, journal.md, Sprachentscheidung). Englisch sind Shell, Bedienelemente, die neun Seitentexte direkt unter `_content/` und die Textfelder der drei Datendateien. Deutsch geblieben sind die sechzehn Vorlagen und die drei Dateien unter `_content/skills/` als Unterrichtsmaterial. Bei fünfzehn Vorlagen liegt der Grund darin, dass sie Vault-Spiegel sind und ihre Übersetzung in eine Vault-Sitzung gehört; die Vorlage `technology` ist seit dem 2026-07-26 im Repo kanonisch und bleibt deutsch, damit der Katalog einsprachig bleibt. Offen sind die sieben Fall-Tiefenseiten unter `_content/case-studies/`. Die publizierten Anker bleiben deutsch, weil fremde Repos sie als `template:`-URI führen, ebenso die Vorlagennamen als Identifikatoren.
- **Keine Module außer Frontmatter-Inspector, Case-Study-Filter, Begriffsregister und Vault-Ansicht.** Das Begriffsregister (A25, seit 2026-07-26) vertritt die abgelehnte Volltextsuche. Die Vault-Ansicht ist seit der Operator-Entscheidung 2026-07-25 in Scope (`knowledge/plan-site.md`, AP4); Context-Rot-Viz und Sycophancy-Trap bleiben es nicht.
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
