---
title: Quick Start
description: Get up and running with Telegram Bot SDK
---

## HTTP Client

```typescript
import { makeTgBotClient } from "@effect-ak/tg-bot-client"

const client = makeTgBotClient({
  bot_token: "YOUR_BOT_TOKEN"
})

await client.execute("sendMessage", {
  chat_id: "123456789",
  text: "Hello, World!"
})
```

## Bot Runner

```typescript
import { runTgChatBot } from "@effect-ak/tg-bot"

runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "single",
  on_message: [
    {
      match: ({ ctx }) => ctx.command === "/start",
      handle: ({ ctx }) => ctx.reply("Welcome!")
    },
    {
      match: ({ update }) => !!update.text,
      handle: ({ update, ctx }) => ctx.reply(`You said: ${update.text}`)
    }
  ]
})
```

## Key Features

- **Always Up-to-Date**: Types generated from official Telegram API documentation
- **Fully Type-Safe**: Complete TypeScript support for all API methods and types
- **Zero Config**: Works out of the box with sensible defaults
- **No Webhooks Required**: Uses long polling — run anywhere without public URLs
