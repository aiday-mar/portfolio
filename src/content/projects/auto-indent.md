---
title: Maintaining Auto-Indentation
slug: auto-indent
description: Maintaining the auto-indentation in the editor
tags:
  - TypeScript
category: vscode
---

I have been tasked with maintaining the auto-indentation in the editor. The auto-indent feature automatically adjusts indentation when users type, paste, move, or indent lines. It is controlled by the editor.autoIndent setting and defined in the EditorAutoIndentStrategy enum.

## Strategy Levels

The setting accepts five levels, each building on the previous:

| Level | Value | Behavior |
|-------|-------|----------|
| None | 0 | No automatic indentation |
| Keep | 1 | Keeps the indentation of the current line when pressing Enter |
| Brackets | 2 | Honors indentation from brackets (e.g., indent after `{`) |
| Advanced | 3 | Uses language-defined indentationRules (increase/decrease patterns) |
| Full | 4 | Uses both indentationRules and onEnterRules for full language-aware indentation |

The default is Advanced.

## Key Features

- On-Type Indent (cursorTypeEditOperations.ts:31) — The AutoIndentOperation class computes proper indentation when typing characters like closing brackets. It only activates at the Full level and when tokenization is cheap.

- On-Paste Indent (indentation.ts:370) — The AutoIndentOnPaste contribution re-indents pasted code to match the surrounding context. Controlled separately by editor.autoIndentOnPaste (boolean) and requires auto-indent level Full. There's also autoIndentOnPasteWithinString for pasting within strings.

- On-Enter Indent (autoIndent.ts:311) — getIndentForEnter() determines beforeEnter and afterEnter indentation using the language's onEnterRules and indentationRules.

- Inherited Indent (autoIndent.ts:82) — getInheritIndentForLine() walks preceding lines to determine the correct inherited indentation, respecting shouldIncrease, shouldDecrease, and shouldIndentNextLine patterns.

- Good Indent (autoIndent.ts:227) — getGoodIndentForLine() computes the ideal indentation for a line based on language rules and context, combining inherited indentation with enter actions.

## Language Integration
Auto-indent relies on two language configuration constructs:

- indentationRules — Regex patterns (increaseIndentPattern, decreaseIndentPattern, indentNextLinePattern, unIndentedLinePattern) that describe how indentation should change.
- onEnterRules — Rules that specify what should happen when Enter is pressed (e.g., indent, outdent, insert text).
Both are processed through ProcessedIndentRulesSupport in indentationLineProcessor.ts, which handles mixed-language lines by filtering tokens to only consider the relevant language.

## Key Files

| File | Purpose |
|------|---------|
| autoIndent.ts | Core indent computation algorithms |
| cursorTypeEditOperations.ts | On-type auto-indent operation |
| indentation.ts | AutoIndentOnPaste contribution and indent commands |
| editorOptions.ts:1434 | Setting definition and parsing |
| indentationLineProcessor.ts | Token-aware indent rule processing |