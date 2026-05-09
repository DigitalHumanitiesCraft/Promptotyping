# Promptotyping

Öffentliche Methodik-Site für Promptotyping, eine iterative Context-Engineering-Methode in vier Phasen, um aus Daten und Frontier-LLMs Forschungsartefakte zu erzeugen.

**Live**: https://dhcraft.org/Promptotyping/

## Was hier liegt

Dieses Repo rendert die Site auf GitHub Pages. Aufbau:

- `knowledge/` — Wissensbasis (Specification der Site selbst, sechs Promptotyping-Documents nach den Vault-Vorlagen)
- `_content/` — Markdown-Inhalte (Pollin 2026 Paper, Vorlagen, Case Studies, Glossar, Literatur) — wird in Phase 4 angelegt
- `assets/` — CSS, JS, Logo
- `data/` — JSON-Datenfutter — wird in Phase 4 angelegt
- `index.html` — Site-Einstieg — wird in Phase 4 angelegt
- `404.html` — Subpath-Routing-Fallback — wird in Phase 4 angelegt
- `CLAUDE.md` — Action-Layer für Coding-Sessions

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

Refactor zu interaktivem Paper, Mai 2026.

- Phase 0 (Vault-Reparatur): abgeschlossen
- Phase 2 (Repo-Inventur, Bereinigung): abgeschlossen
- Phase 3 (`knowledge/`-Wissensbasis befüllen): abgeschlossen, einschließlich Critical-Expert-Refactor (Vorlagen-Trigger-Korrektur)
- Phase 4 (Implementation in fünf Sprints): folgt in eigenen Repo-Sessions

Verlauf in [knowledge/journal.md](knowledge/journal.md).

## Lizenz

Inhalte: CC BY 4.0
Code: MIT
