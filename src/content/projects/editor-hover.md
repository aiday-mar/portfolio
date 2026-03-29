---
title: Editor Hover Improvements
slug: editor-hover
description: Improvements done to the editor hover
tags:
  - TypeScript
  - UX/UI
category: vscode
---

One of the first features I have become an owner of in VS Code is the editor hover. I have been tasked with improving the UX of the editor hover. I have implemented two major changes: making the hover resizable and adding buttons to increase/decrease the verbosity of the editor hover.

## Hover Verbosity

When hovering over a symbol in VS Code, the hover widget displays type information, documentation, and signatures provided by language servers via the Language Server Protocol (LSP). However, for complex types — such as deeply nested generics, union types, or large interfaces — the hover content can become overwhelming, while for simple cases it may be too terse.

Hover verbosity adds **increase** and **decrease** buttons directly in the hover widget, letting users expand or collapse the level of detail shown without leaving the editor. Each click sends a new hover request to the language server with a verbosity hint, and the server responds with a more or less detailed version of the type information. This creates a drill-down experience: starting from a compact summary and expanding into the full type definition on demand.

Key implementation details:

- Each hover provider can declare support for verbosity levels via the `HoverVerbosityAction` enum (`Increase` or `Decrease`)
- The hover widget tracks the current verbosity level per hover part and sends it along with the position when re-requesting content
- The increase/decrease buttons are rendered only when the provider signals that further expansion or collapse is possible
- Multiple hover providers (e.g. TypeScript, ESLint, JSDoc) can each independently support verbosity for their own hover parts