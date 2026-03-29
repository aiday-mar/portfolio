---
title: Github Pull Requests Copilot Integration
slug: github-pr-copilot
description: Integrating the Github Pull Requests extension into Copilot
tags:
  - TypeScript
  - Git
category: vscode
---

I have worked with two other colleages on integrating the Github Pull Requests extension into Copilot. The work since then has evolved to use Copilot skills which I describe here. In GitHub Copilot, a skill is a modular unit of domain-specific knowledge packaged as a SKILL.md file. Each skill has:

- A description — tells the agent when to invoke it (matched against the user's intent)
- Instructions — step-by-step guidance for how to perform the task
- A file path — points to the SKILL.md containing the full instructions, which the agent reads on demand

Skills act as specialized "playbooks" that extend the agent beyond general coding. 

### Suggest Fix for Issue Skill

The Suggest Fix for Issue skill analyzes a GitHub issue's description, comments, and surrounding context to propose a concrete code fix. It:

1. Reads through the issue details to understand the problem
2. Searches the workspace for relevant files and code
3. Generates a suggested fix with actual code blocks referencing real files
4. For bugs, attempts to identify the root cause and suggests a targeted fix

It's useful when you have a GitHub issue open and want guidance on how to resolve it — just point it at the issue and it will suggest implementation changes.

### Summarize Issue Skill

The Summarize Issue skill takes a JSON representation of a GitHub issue, pull request, or notification and produces a concise markdown summary. Key behaviors:

- Extracts main points and key details so users can quickly understand the content without reading everything
- Preserves links to referenced issues/PRs as markdown links (e.g., [#123](https://github.com/owner/repo/issues/123))
- Attributes comments to their authors (e.g., @username: summary of comment)
- Preserves any embedded markdown images exactly as they appear
- Summarizes PR changes in textual form (no code output)
- Ensures the summary is shorter than the original content