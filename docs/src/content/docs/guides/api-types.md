---
title: API Types
description: TypeScript types for Telegram Bot API and Mini Apps
---

The `@effect-ak/tg-bot-api` package provides complete TypeScript types auto-generated from the [official Telegram Bot API documentation](https://core.telegram.org/bots/api).

## Features

- **Complete and Up-to-Date**: The entire API is generated from official documentation using a code generator
- **Types for WebApps**: Types that describe `Telegram.WebApp`, also auto-generated
- **Smart Type Mapping**: Telegram pseudo-types are converted to TypeScript:
  - `Integer` → `number`
  - `True` → `boolean`
  - `String or Number` → `string | number`
  - Enumerated types → union of literal types (e.g., `"private" | "group" | "supergroup" | "channel"`)

## WebApp Typings

Telegram provides a [documentation page](https://core.telegram.org/bots/webapps) describing `Telegram.WebApp`. Types are auto-generated from it:

```typescript
import type { WebApp } from "@effect-ak/tg-bot-client/webapp"

interface Telegram {
  WebApp: TgWebApp
}

declare const Telegram: Telegram

const saveData = () => {
  Telegram.WebApp.CloudStorage.setItem("key1", "some data", (error) => {
    if (error == null) {
      console.log("Saved!")
    }
  })
}
```

## Code Generation

The codegen scrapes the official Telegram documentation HTML and generates:
- **TypeScript types** for Bot API and Mini Apps (`src/specification/`)
- **Markdown docs** with method/type reference pages

### Pipeline

```
core.telegram.org/bots/api          core.telegram.org/bots/webapps
            |                                    |
       fetch & cache                        fetch & cache
            |                                    |
            v                                    v
        DocPage                             WebAppPage
            |                                    |
     ┌──────┴──────┐                             |
     v             v                             v
 ExtractedType  ExtractedMethod           ExtractedWebApp
     |             |                       |          |
     v             v                       v          v
  types.ts      api.ts                 webapp.ts   (types)
     |             |
     └──────┬──────┘
            v
     docs/ (markdown)
```

### Running the Generator

```bash
# generate everything (Bot API types + docs + Mini Apps types)
pnpm gen

# or individually
pnpm gen:bot:api
pnpm gen:webapp:api
```

## Type Mapping Details

| Telegram pseudo-type | TypeScript |
|---------------------|------------|
| `String` | `string` |
| `Integer`, `Int` | `number` |
| `Float` | `number` |
| `Boolean`, `True`, `False` | `boolean` |
| `Array of X` | `X[]` |
| `X or Y` | `X \| Y` |
| `InputFile` | `{ file_content: Uint8Array, file_name: string }` |
