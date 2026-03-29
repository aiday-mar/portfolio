---
title: Slack VS Code Integration
slug: slack-integration
description: Integrating our internal slack codereview channel into VS Code as an extension pane
tags:
  - TypeScript
  - Extension
category: vscode
---

The Code Review Extension is a Visual Studio Code extension I built with TypeScript that integrates Slack's code review workflow directly into the editor. It connects to a team's Slack code review channel via OAuth authentication and surfaces pull request discussions in a dedicated sidebar pane, allowing developers to browse PRs, view diffs, read descriptions, open PRs in the browser, and approve them — all without leaving VS Code. The extension features a custom tree view that parses Slack messages to extract PR metadata (title, author, additions/deletions, changed files), a configurable auto-refresh mechanism for real-time updates, and a Copilot Chat context provider that exposes recent Slack channel activity as explicit context for AI-assisted conversations. It is built on a modular service-oriented architecture with separate components for authentication, Slack API communication, command registration, view rendering, and panel chat integration.

