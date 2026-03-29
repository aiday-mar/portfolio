---
title: EditContext API Adoption
slug: edit-context
description: Adoption of the EditContext API to power input
tags:
  - TypeScript
  - Chromium
  - DOM
category: vscode
---

Created a comprehensive analytics dashboard for visualizing business metrics. Built with Next.js and D3.js for highly customizable, interactive charts including line graphs, bar charts, pie charts, and heatmaps. Users can filter data by date range, category, and custom dimensions. Supports exporting reports as CSV or PDF. The backend uses PostgreSQL for data storage and Redis for caching frequently accessed queries.

```mermaid
graph LR
    subgraph TIM["Text Input Method"]
        STT["Speech to Text"]
        VK["Virtual Keyboard"]
        HW["Handwriting"]
        IME["Chinese/Japanese/Korean IME"]
    end

    subgraph OS["OS Text Input Service"]
        Engine["⚙️ Processing Engine"]
    end

    subgraph TEC["Text Edit Context"]
        Buf1["Text Buffer"]
    end

    subgraph Apps["Apps"]
        WP["Word Processor"]
        DA["Drawing App"]
    end

    STT <--> Engine
    VK <--> Engine
    HW <--> Engine
    IME <--> Engine
    Engine <--> Buf1
    Buf1 --> WP
    Buf1 --> DA
```
