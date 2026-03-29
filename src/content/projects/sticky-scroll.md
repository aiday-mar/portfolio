---
title: Sticky Scroll
slug: sticky-scroll
description: Sticky scrolling in the editor
tags:
  - TypeScript
  - Internship Feature
category: vscode
---

My main project during my internship in the VS Code team has been to implement the sticky scroll feature. Sticky scroll pins the enclosing scopes — such as functions, classes, loops, and conditional blocks — to the top of the editor as you scroll through a file. This gives you persistent context about where you are in the code without having to scroll back up. For example, when reading through a deeply nested function, the class name, method signature, and enclosing `if` or `for` blocks remain visible as sticky headers at the top of the viewport. As you scroll past the end of a scope, its sticky line smoothly transitions out and is replaced by the next relevant scope. The feature relies on the editor's syntax tree (provided by TextMate grammars, Tree-sitter, or the Language Server Protocol's folding ranges) to determine scope boundaries and nesting depth.