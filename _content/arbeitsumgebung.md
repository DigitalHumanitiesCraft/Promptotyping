---
title: Working environment
slug: arbeitsumgebung
status: complete
language: en
version: "0.2"
updated: 2026-07-26
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/arbeitsumgebung.md
---

# Working environment

## The Obsidian vault as a knowledge environment

The Promptotyping Documents live in a Markdown vault. The unit of analysis is the vault as a whole rather than the individual document, because a document acquires its meaning from its function within the network of the others. Agents such as Claude Code and the Critical Expert work in the same file system, steered through the `CLAUDE.md` as an action document that fixes the rules, conventions and boundaries of agentic work. The file system is the interface. No server and no database is needed. Adding knowledge means writing a Markdown file, and reconfiguring the agent means editing an action document.

## Promptotyping Agent Interface

The Promptotyping Agent Interface is an experimental browser interface for three activities of the Critical Expert. Observing means following what the agent is doing and which files it changes. Steering means editing the `CLAUDE.md` and selecting the context handed to the agent. Working means writing in the same vault instead of only delegating. The central architectural decision places the vault at the centre, so the interface is a view onto the file system and holds no data store of its own. Status is in development, not yet public.

## AI harness and skills

Claude Code serves as the AI harness in which the method scales, the environment in which an agent works on a project over longer stretches, with access to files, tools and execution. The transferable system prompts that guide this work for coding and writing stand in the [skills](#skills) section. Process videos showing the procedure inside the environment are on the [YouTube channel](https://www.youtube.com/@DigitalHumanitiesCraft).
