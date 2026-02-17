---
title: Mini App Types
description: TypeScript types for Telegram Mini Apps (Telegram.WebApp)
---

Telegram provides a [documentation page](https://core.telegram.org/bots/webapps) describing `Telegram.WebApp`. Types are auto-generated from it using the same [code generation pipeline](/api-types/how-it-works/).

## Usage

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

For details on how Mini App types are extracted from the HTML documentation, see [How it works → Mini App Extraction](/api-types/how-it-works/#mini-app-extraction).
