# CLAUDE.md — Action-Layer für Coding-Sessions in diesem Repo

Dieses Repo ist `DigitalHumanitiesCraft/Promptotyping`, die öffentliche Methodik-Site für Promptotyping. Es rendert auf https://dhcraft.org/Promptotyping/ als interaktives Paper mit Inline-Glossar, eingebetteten Vorlagen und Case-Study-Karten.

## Beim Session-Start lesen

Bevor du eine Aufgabe in diesem Repo angehst, lies in dieser Reihenfolge:

1. `knowledge/INDEX.md` — Navigation und Begriffslexikon
2. `knowledge/project.md` — was die Site ist, wer die Adressaten sind
3. Das jeweils aufgabenrelevante Dokument:
   - Datenfragen → `knowledge/data.md`
   - Was-soll-die-Site-können → `knowledge/specification.md`
   - Wie-ist-es-gebaut → `knowledge/architecture.md`
   - Wie-sieht-es-aus → `knowledge/design.md`
   - Was-ist-bisher-passiert → `knowledge/journal.md`

Die Wissensbasis im `knowledge/`-Ordner ist die Specification, aus der die Implementation folgt. Sie ist nicht beiläufig, sie ist normativ.

## Designprinzipien (aus knowledge/design.md übersetzt)

Die Site soll ruhig sein. Konkret bedeutet das beim Coden:

- **Verwende keine Farben außer denen im Designsystem definierten**: `#ffffff` (Hintergrund), `#1a1a1a` (Text), `#d5d5d5` (Akzent), `#f5f5f5` (Code-Hintergrund), `#e0e0e0` (Border) sowie die vier Grautöne `#2a2a2a`, `#525252`, `#8a8a8a`, `#b8b8b8` (ehemals Phasen-Töne, jetzt allgemeine Grau-Akzente für Sekundärtext). Kein Teal, kein Türkis, kein Bunt.
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
├── assets/                     # CSS, JS, Vendor, Fonts, Logo
└── data/                       # JSON-Datenfutter
```

`assets/promptotyping-logo.png` bleibt erhalten. `_content/` und `data/` werden in den Implementierungs-Sprints angelegt.

## Tech-Stack-Regeln

- **Vanilla HTML5/CSS3/JS, kein Framework, kein Build-Step.** Wenn du dabei bist, npm zu verwenden, halte inne. Falsche Richtung.
- **marked.js v9.1.6 vendoriert** in `assets/vendor/marked.min.js`. Kein CDN.
- **Custom-Extensions für marked.js** sind erlaubt (z.B. für Klassen-Tags `{:.phase-preparation}`), bleiben aber in `assets/js/app.js`.
- **Browser-natives `location.hash` für Routing**, kein History-API-Hacking, kein React-Router.
- **GitHub Pages serviert direkt aus dem Repo-Root.** Kein `_site`, kein `docs/`, kein Jekyll-Build.

## Phasen-Provenance-Lane: entfernt (Operator-Entscheidung 2026-06-10)

Die Phasen-Provenance-Lane wurde nach dem Erstdeploy auf Operator-Entscheidung vollständig entfernt (Legende, Mobile-Phase-Bar, Hover-Tooltip, Filter-Modus aus HTML, CSS und JavaScript). Die `{:.phase-*}`-Tags im Paper-Markdown werden von der marked-Extension in `app.js` nur noch gestrippt: ein getaggter Absatz rendert als gewöhnlicher Absatz ohne Klasse und ohne sichtbaren Effekt. Lege keine neuen `{:.phase-*}`-Tags an und reaktiviere die Lane nicht; wer sie wiederbeleben will, beginnt einen Neu-Diskurs mit dem Critical Expert.

## URL-Anker-Schema (Pflicht-Konvention, Stand ADR-2/ADR-3)

- Vorlagen (Promptotyping Documents): Subpath `/promptotyping-document/{slug}` (Latest, kanonisch), gleichwertig Hash `#promptotyping-document-{slug}`. Neun Slugs: `data`, `index`, `project`, `specification`, `architecture`, `design`, `journal`, `user-stories`, `action-layer` (Entwurf, ADR-9). Snapshots erst bei Versionssprung über Sub-Anker `#promptotyping-document-{slug}-v{version}` bzw. `/promptotyping-document/{slug}#v{version}` — kein eigener Subpath pro Version. (Das ältere Schema `#vorlage-{name}-{version}` ist obsolet, siehe journal.md 2026-05-09 „URL-Schema-Korrektur".)
- Maschinenadresse (ADR-10): Für HTTP-Abruf ohne JavaScript ist die statische Markdown-URL kanonisch, Muster `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. Die Subpath-Auflösung läuft über `404.html` und setzt JavaScript voraus. `.nojekyll` im Repo-Root ist Pflicht, sonst publiziert GitHub Pages `_content/` nicht.
- Konzepte: `#konzept-{name}` (z.B. `#konzept-eil`, `#konzept-asymmetric-amplification`)
- Case Studies: `#case-{name}` (z.B. `#case-herdata`, `#case-klawiter-rescue`)
- Konvention: `#konvention-v0.1`
- Glossar: `#glossar`
- Literatur: `#literatur`
- Paper-Sektionen: `#abschnitt-{n}-{slug}` (z.B. `#abschnitt-3-four-phases`; sieben Section-Files unter `_content/paper/`)
- Überblick: `#ueberblick`; Use Cases: `#use-cases`; Praxis-Einträge: `#praxis-{slug}`; Skills: `#skills-{slug}` (A13 bis A15); Arbeitsumgebung: `#arbeitsumgebung`, Subpath `/arbeitsumgebung` (A17)

Anker dürfen nicht ohne Diskussion umbenannt werden — Repos können auf sie als `template:`-URI verlinken.

## Was du tun sollst

- **Inkrementell arbeiten**: ein Sprint nach dem Plan, ein Commit pro abgeschlossenem Schritt
- **Wissensbasis konsultieren**, bevor du eine Designentscheidung triffst
- **Bei Unklarheit fragen** statt eigenmächtig entscheiden — speziell bei Scope, Reihenfolge, Architektur
- **journal.md aktualisieren** am Ende jeder Session

## Was du nicht tun sollst

- **Nicht aus dem Vault zitieren ohne Markdown-Link.** Vault-interne Wikilinks (`[[CLAUDE]]`) bedeuten im Repo nichts.
- **Nicht das alte Living-Paper-Material reaktivieren.** Alles, was im November-2025-Stand war, ist gelöscht. Wer alte Module wiederbeleben will, beginnt einen Neu-Diskurs.
- **Keine englische Fassung in Phase 1.** Site ist deutsch, Pollin-Paper bleibt englisch im Lesefluss. Vollständige Zweisprachigkeit ist späteres Projekt.
- **Keine Module außer Frontmatter-Inspector und Case-Study-Filter.** Vault-Explorer, Context-Rot-Viz, Sycophancy-Trap sind explizit nicht in Scope.
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
