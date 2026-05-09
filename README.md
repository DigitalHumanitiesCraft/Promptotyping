# Promptotyping

Öffentliche Methodik-Site für Promptotyping, eine iterative Context-Engineering-Methode in vier Phasen, um aus Daten und Frontier-LLMs Forschungsartefakte zu erzeugen.

**Live**: https://dhcraft.org/Promptotyping/

## Was hier liegt

Dieses Repo rendert die Site auf GitHub Pages. Aufbau:

- `knowledge/` — Wissensbasis (Specification der Site selbst, nach Promptotyping-Methode)
- `_content/` — Markdown-Inhalte (Pollin 2026 Paper, Vorlagen, Case Studies, Glossar, Literatur)
- `assets/` — CSS, JS, Logo
- `data/` — JSON-Datenfutter
- `index.html` — Site-Einstieg
- `404.html` — Subpath-Routing-Fallback
- `CLAUDE.md` — Action-Layer für Coding-Sessions

## Methodisches

Die Site ist gleichzeitig **Methodik-Spezifikation** und **Methodik-Anwendung**: Sie wendet Promptotyping auf sich selbst an. Die Wissensbasis im `knowledge/`-Ordner folgt den Vorlagen, die die Site selbst publiziert.

## Beziehung zum Pollin-2026-Paper

Das wissenschaftliche Methodenpaper liegt im Vault-Stand des Autors (Christopher Pollin). Die Site spiegelt es als interaktiven Lesefluss mit Phasen-Provenance-Lane, eingebettetem Glossar und versionierten Vorlagen-Ankern.

## Lokale Entwicklung

```bash
git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
cd Promptotyping
python -m http.server 8000
```

Browser auf http://localhost:8000.

## Stand

Refactor zu interaktivem Paper, Mai 2026. Phase 3 abgeschlossen (`knowledge/`-Wissensbasis befüllt). Phase 4 (Implementation) folgt in mehreren Sprints.

## Lizenz

Inhalte: CC BY 4.0
Code: MIT
