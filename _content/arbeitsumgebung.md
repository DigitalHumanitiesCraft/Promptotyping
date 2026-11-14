---
title: Working environment
slug: arbeitsumgebung
status: complete
language: en
version: "0.5"
updated: 2026-11-10
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/arbeitsumgebung.md
---

# Working environment

## The Obsidian vault as a knowledge environment

The Knowledge Documents live in a Markdown vault. The unit of analysis is the vault as a whole rather than the individual document, because a document acquires its meaning from its function within the network of the others. Agents such as Claude Code and the Critical Expert work in the same file system, steered through the `CLAUDE.md` as an agent instruction document that fixes the rules, conventions and boundaries of agentic work. The file system is the interface. No server and no database is needed. Adding knowledge means writing a Markdown file, and reconfiguring the agent means editing an action document.

## AI harness and skills

Claude Code serves as the AI harness in which the practice scales, the environment in which an agent works on a project over longer stretches, with access to files, tools and execution. The [Promptotyping skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill) maintains the practice's routing and handoff discipline across those sessions. Process videos showing the procedure inside the environment are on the [YouTube channel](https://www.youtube.com/@DigitalHumanitiesCraft).

The skill lives in the repository [promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill), whose README gives the installation for each agent. Four operating cases determine how it is used.

- **Claude Code.** Copy the `promptotyping` folder of that repository to `~/.claude/skills/promptotyping` for all projects or to `.claude/skills/promptotyping` inside one project, and keep project-specific rules in the repository's `CLAUDE.md`.
- **Codex with skills.** Place the `promptotyping` package in the configured skills directory, usually `$CODEX_HOME/skills/`, and use the repository's `AGENTS.md` or other loaded agent instruction document for project-specific rules.
- **Another skill-capable harness.** Install the same package through that harness's documented skill mechanism and name the root agent instruction document it actually reads. The portable `SKILL.md` contains no product-specific path.
- **A harness without skills.** Keep a root agent instruction document and use the six self-contained prompts in the [tutorial](#tutorial). The recurring operations can be issued as ordinary instructions. A chat interface that cannot inspect files, edit the repository, and run checks does not meet the tutorial's harness prerequisite.
