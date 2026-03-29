---
title: Variable Fonts and Line-Heights
slug: variable-fonts
description: Allowing extensions and users to define variable fonts and line heights in the editor
tags:
  - TypeScript
  - Optimization
category: vscode
---

Before the work detailed in this section, VS Code only allowed one uniform font and line height to be used in the editor. The idea came up to allow users to define variable fonts and line heights using TextMate scopes. TextMate is a grammar system originally created for the TextMate editor on macOS, and it has since become the standard for syntax highlighting in many modern editors, including VS Code. It works by assigning **scopes** — hierarchical labels like `comment.block`, `keyword.control`, or `string.quoted.double` — to tokens in source code based on pattern-matching rules. These scopes form a tree structure that describes the syntactic role of every piece of text in a file. In VS Code, TextMate grammars power the default tokenization engine, and users can target specific scopes to customize colors, font styles, and — with this new feature — font sizes and line heights. The setting to define vaiable fonts and line heights using TextMate is as follows:

```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
      {
          "scope": <textmate-scope>,
          "settings": {
            "fontSize": 3,
            "lineHeight": 3
          }
      }
    ]
}
```

In the section that follows, I discuss how the variable line heights were implemented. 

## Line Heights Manager

Under the hood, variable line heights are tracked by a `LineHeightsManager`. The editor needs to know the height of every line — both for rendering (how tall to draw each line) and for coordinate math (given a pixel offset, find which line it is on). When every line has the same height this is trivial arithmetic, but once decorations can override individual line heights, we need a data structure that can answer these queries efficiently.

### Core Data Structure

The manager maintains a **sorted array** of `CustomLine` entries — one for each line that has a non-default height. Each entry stores:

- **lineNumber** — the line in the document
- **specialHeight** — the custom height requested by a single decoration
- **maximumSpecialHeight** — the tallest custom height on that line (a line may have multiple decorations)
- **prefixSum** — the total accumulated height of all lines *before* this one
- **decorationId** — which decoration owns this entry

Because the array is sorted by line number, lookups use **binary search** for O(log n) performance, and the prefix sums give O(1) accumulated-height queries.

### Pseudocode

```
LineHeightsManager:
    lines = []              // sorted by line number: [{lineNumber, height, prefixSum, decorationId}]
    defaultHeight
    pending = []            // queued mutations, applied lazily

    // ── Queries ──────────────────────────────────────

    heightFor(line):
        commit()
        entry = binarySearch(lines, line)
        if entry exists → return entry.height
        else → return defaultHeight

    accumulatedHeight(line):
        commit()
        entry = binarySearch(lines, line)
        if entry exists:
            return entry.prefixSum + entry.height
        prev = closestEntryBefore(line)
        if no prev:
            return defaultHeight × line
        gap = line - prev.lineNumber
        return prev.prefixSum + prev.height + defaultHeight × gap

    // ── Mutations (batched) ──────────────────────────

    insert(decorationId, startLine, endLine, height):
        queue("insert", decorationId, startLine, endLine, height)

    remove(decorationId):
        queue("remove", decorationId)

    onLinesDeleted(fromLine, toLine):
        queue("deleteRange", fromLine, toLine)

    onLinesInserted(fromLine, toLine):
        queue("insertRange", fromLine, toLine)

    // ── Commit ──────────────────────────────────────

    commit():
        for each op in pending:
            if op is "remove":
                drop all entries with matching decorationId
            if op is "insert":
                drop old entries for this decorationId
                for each line in [startLine..endLine]:
                    append {line, height, 0, decorationId}
            if op is "deleteRange":
                drop entries where fromLine ≤ lineNumber ≤ toLine
                shift entries after toLine backward by (toLine - fromLine + 1)
            if op is "insertRange":
                shift entries at or after fromLine forward by (toLine - fromLine + 1)
        clear pending
        rebuild()

    rebuild():
        sort lines by lineNumber
        // resolve multiple decorations per line → keep max height
        for each line group:
            maxHeight = max(heights in group)
        // recompute prefix sums
        prevLine = 0, runningSum = 0
        for each entry in lines:
            gap = entry.lineNumber - prevLine - 1
            runningSum += gap × defaultHeight
            entry.prefixSum = runningSum
            runningSum += entry.maxHeight
            prevLine = entry.lineNumber
```

### Key Design Decisions

1. **Batched commits** — mutations are queued and only applied when a query is made. This avoids redundant recomputation when multiple decorations change at once.

2. **Prefix sums** — by storing the cumulative height up to each custom line, the manager can answer "what is the pixel offset of line N?" without summing all preceding heights. Lines between two custom entries all share the default height, so the gap is filled with simple multiplication.

3. **Multiple decorations per line** — when several decorations target the same line with different heights, the manager keeps all entries but tracks the `maximumSpecialHeight` so rendering uses the tallest one.

4. **Document edits** — when lines are inserted or deleted, the manager shifts line numbers and prefix sums for all entries after the edit point. Decorations that span the edit boundary are detected and re-applied so they remain contiguous.

