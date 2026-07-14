# Promptotyping

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14160875.svg)](https://doi.org/10.5281/zenodo.14160875)

Öffentliche Methodik-Site für Promptotyping, eine iterative Context-Engineering-Methode in vier Phasen, um aus Daten und Frontier-LLMs Forschungsartefakte zu erzeugen.

**Live**: https://dhcraft.org/Promptotyping/

## Was hier liegt

Dieses Repo rendert die Site auf GitHub Pages. Aufbau:

- `knowledge/` — Wissensbasis (Specification der Site selbst, sechs Promptotyping-Documents nach den Vault-Vorlagen)
- `_content/` — Markdown-Inhalte (Pollin 2026 Paper, neun Vorlagen, Use-Case-Tiefenseiten, Glossar, Praxis, Skills, Konvention, Literatur)
- `assets/` — CSS, JS, Vendor-Bibliotheken, lokale Fonts, Logo
- `data/` — JSON-Datenfutter (Case Studies, Glossar, Vorlagen)
- `index.html` — Site-Einstieg (Single-Page mit Phasen-Provenance-Lane)
- `404.html` — Subpath-Routing-Fallback
- `.nojekyll` — Pflichtdatei, damit GitHub Pages `_content/` ausliefert
- `CLAUDE.md` — Action-Layer für Coding-Sessions

Maschinenlesbarer Zugriff: Vorlagen und Inhalte sind als statisches Markdown abrufbar, Muster `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md` (Details in `knowledge/specification.md`, ADR-10).

## Methodisches

Die Site ist gleichzeitig **Methodik-Spezifikation** und **Methodik-Anwendung**: Sie wendet Promptotyping auf sich selbst an. Die Wissensbasis im `knowledge/`-Ordner folgt den Vorlagen, die die Site selbst publiziert. Eine `data.md` existiert bewusst nicht, weil die Vorlage Datengrundlage nur für Projekte trägt, die Daten verarbeiten — die Materialgrundlage dieses Methoden-Repos steht in `knowledge/project.md`.

## Beziehung zum Pollin-2026-Paper

Das wissenschaftliche Methodenpaper liegt im Vault des Autors (Christopher Pollin). Die Site spiegelt es als interaktiven Lesefluss mit Phasen-Provenance-Lane, eingebettetem Glossar und versionierten Vorlagen-Ankern.

## Lokale Entwicklung

```bash
git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
cd Promptotyping
python -m http.server 8000
```

Browser auf http://localhost:8000.

## Stand

Refactor zu interaktivem Paper, Mai bis Juni 2026.

- Phase 0 (Vault-Reparatur): abgeschlossen
- Phase 2 (Repo-Inventur, Bereinigung): abgeschlossen
- Phase 3 (`knowledge/`-Wissensbasis befüllen): abgeschlossen, einschließlich Critical-Expert-Refactor (Vorlagen-Trigger-Korrektur)
- Phase 4 (Implementation): abgeschlossen 2026-06-10; offen sind Human Review der Phasen-Klassifizierung und der gespiegelten Inhalte sowie der Live-Test nach Deploy

Verlauf in [knowledge/journal.md](knowledge/journal.md).

## Zitation

Pollin, Christopher; Steiner, Christian: Promptotyping. Zenodo. https://doi.org/10.5281/zenodo.14160875 (Concept-DOI, zeigt immer auf die aktuelle Version)

Methodenartikel: Pollin, Christopher: Promptotyping. Zwischen Vibe Coding, Vibe Research und Context Engineering. In: L.I.S.A. Wissenschaftsportal der Gerda Henkel Stiftung, 17.01.2026, https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin

## Lizenz

Inhalte: CC BY 4.0
Code: MIT
