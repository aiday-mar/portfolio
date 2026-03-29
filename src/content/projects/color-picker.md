---
title: Maintaining Color Picker
slug: color-picker
description: Maintaining the color picker in the editor
tags:
  - TypeScript
  - UX/UI
  - CSS
category: vscode
---

I have been tasked with maintaining the color picker in VS Code. The color picker in VS Code is an inline editor widget that lets you view, modify, and insert colors directly in your source code. Here's an overview of its features:

## How It's Triggered

- Hover: When you hover over a color value in your code (e.g., #ff0000, rgb(255, 0, 0)), the color picker appears as part of the hover widget. This is handled by the HoverColorPickerParticipant.
- Standalone (Command Palette): You can open it via the "Show or Focus Standalone Color Picker" command (editor.action.showOrFocusStandaloneColorPicker), which opens a standalone picker at the cursor position.
- Color decorators: The ColorDetector scans your document for color values and renders small colored squares (decorators) inline next to each color literal. Clicking these opens the picker.

## UI Components

The widget (colorPickerWidget.ts) is composed of:

- Header (colorPickerHeader.ts): Shows the picked color swatch and the original color swatch side by side. Clicking the picked color cycles through color format presentations; clicking the original color reverts to it.
- Saturation box (colorPickerSaturationBox.ts): A 2D canvas for adjusting saturation (horizontal) and brightness/value (vertical) via drag.
- Hue strip (colorPickerStrip.ts:87): A vertical slider for selecting the hue (0–360°).
- Opacity strip (colorPickerStrip.ts): A vertical slider for adjusting alpha/opacity.
- Insert button (standalone mode only): Inserts the selected color into the editor (bound to Enter).
- Close button (standalone mode only): Dismisses the picker (bound to Escape).

## Color Format Support

The default color provider (defaultDocumentColorProvider.ts) offers three format presentations that you can cycle through by clicking the color swatch in the header:

- RGB — e.g., rgb(255, 0, 0) or rgba(255, 0, 0, 0.5)
- HSL — e.g., hsl(0, 100%, 50%)
- Hex — e.g., #ff0000 or #ff000080

Language extensions can register their own DocumentColorProvider to support additional formats (e.g., CSS named colors, language-specific color functions).

## Editor Settings

- editor.colorDecorators — Enables or disables inline color decorators.
- editor.colorDecoratorsLimit — Limits the number of color decorators rendered (for performance).
- editor.defaultColorDecorators — Controls whether the built-in default color provider is used (auto, always, or never). When set to auto, the default provider only activates if no language extension provides colors.