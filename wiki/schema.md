---
tags:
  - wiki
  - schema
  - ai-instructions
date: 2026-04-10
---

# LLM Wiki Schema

This document defines the conventions for AI agents interacting with this LLM Wiki.

## Wiki Purpose
The wiki is a persistent, incrementally compounding artifact containing architectural decisions, research notes, and domain knowledge for the OhLijf web project.

## Agent Instructions
1. **Always Read Strategy**: Before making changes to codebase details, start by reading `AGENTS.md` and then reading `wiki/index.md` to discover relevant context.
2. **Maintenance Mandate**: When taking action or deciding on a technical approach, ensure you update existing wiki pages or create new ones if the codebase architecture shifts.
3. **Log Actions**: Whenever you create or modify a wiki page, append an entry to `wiki/log.md` formatted as `## [YYYY-MM-DD] action | Topic`.
4. **Link Generously**: Use Markdown inline links (e.g., `[[page-name]]` or standard `[Page Name](page-name.md)`) to interconnect related entities. Avoid orphan pages.

## Frontmatter Requirements
Since this project uses Obsidian, all new markdown pages must include standard YAML frontmatter:
```yaml
---
tags: [tag1, tag2]
date: YYYY-MM-DD
---
```
