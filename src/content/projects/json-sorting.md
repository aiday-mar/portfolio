---
title: JSON Sorting
slug: json-sorting
description: Implementing a command to sort JSON files in VS Code
tags:
  - TypeScript
  - JSON
category: vscode
---

VS Code includes a built-in **Sort JSON** command (`JSON: Sort Document`), which I implemented, that allows users to sort all keys in a JSON file alphabetically. When invoked, it recursively traverses the entire JSON document and reorders the keys of every object in ascending lexicographic order, while preserving the structure of arrays and nested objects. This is particularly useful for normalizing configuration files like `package.json`, `tsconfig.json`, or `.eslintrc` — where key ordering has no semantic meaning but consistent ordering makes diffs cleaner, code reviews easier, and merge conflicts less frequent. The command operates as a single undoable edit, so the entire sort can be reverted with a single `Ctrl+Z` / `Cmd+Z`.

