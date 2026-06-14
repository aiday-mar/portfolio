---
title: Action Sequences Extension
slug: actions-extension
description: A VS Code extension for running multi-step command workflows with one click
tags:
  - TypeScript
  - VS Code Extension
  - Developer Productivity
github: 'https://github.com/aiday-mar/actions-extension'
category: personal
---

I built the Action Sequences extension to remove repetitive command chains from my daily VS Code workflow. The idea is simple: define a named sequence of command IDs once in settings, then run the whole sequence from a dedicated sidebar view with a single click.

Instead of manually triggering a stack of commands every time (format, save, reopen, reload, etc.), I can package those operations into reusable workflows and execute them in order. That makes recurring tasks faster, more consistent, and less error-prone.

## What the extension does

The extension adds an Activity Bar container called Action Sequences and shows each configured workflow in a tree view. Selecting an item runs all commands in that sequence sequentially, with progress feedback while it executes.

It also includes quick actions for:

- Opening sequence settings directly
- Refreshing the list after configuration changes

## Configuration model

Sequences are configured through `actionsExtension.sequences` in settings JSON. Each sequence contains:

- `name`: Human-readable workflow name
- `commands`: Array of VS Code command IDs to run in order

Example:

```json
"actionsExtension.sequences": [
  {
    "name": "Format and Save",
    "commands": [
      "editor.action.formatDocument",
      "workbench.action.files.save"
    ]
  },
  {
    "name": "Reload Window",
    "commands": [
      "workbench.action.reloadWindow"
    ]
  }
]
```

## Why I built it

This project came from a practical need: reducing context switching and friction in repetitive editor tasks. I wanted an extension that feels native to VS Code, is easy to configure, and is UI first. 

You can find the source code here:
[Action Sequences on GitHub](https://github.com/aiday-mar/actions-extension)
