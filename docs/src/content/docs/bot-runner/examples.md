---
title: Examples
description: Echo bot, command handler, hot reload, and Effect integration
---

## Echo Bot

```typescript
import { runTgChatBot, defineBot } from "@effect-ak/tg-bot"

const ECHO_BOT = defineBot({
  on_message: [
    {
      match: ({ update }) => !!update.text,
      handle: ({ update, ctx }) => ctx.reply(update.text!)
    }
  ]
})

runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "single",
  ...ECHO_BOT
})
```

## Command Handler

```typescript
import { runTgChatBot } from "@effect-ak/tg-bot"
import { MESSAGE_EFFECTS } from "@effect-ak/tg-bot-client"

runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "single",
  on_message: [
    {
      match: ({ ctx }) => ctx.command === "/start",
      handle: ({ ctx }) => ctx.reply("Welcome!", {
        message_effect_id: MESSAGE_EFFECTS["🎉"]
      })
    },
    {
      match: ({ ctx }) => ctx.command === "/help",
      handle: ({ ctx }) => ctx.reply("Available commands:\n/start - Start bot\n/help - Show help")
    }
  ]
})
```

## Hot Reload

```typescript
const bot = await runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "single",
  on_message: [
    {
      match: ({ update }) => !!update.text,
      handle: ({ ctx }) => ctx.reply("Version 1")
    }
  ]
})

// Later, reload with new handlers
bot.reload({
  type: "single",
  on_message: [
    {
      match: ({ update }) => !!update.text,
      handle: ({ ctx }) => ctx.reply("Version 2 - Hot reloaded!")
    }
  ]
})
```

## Using Effect

Advanced usage with Effect for composable async operations:

```typescript
import { Effect, Micro, pipe } from "effect"
import { launchBot } from "@effect-ak/tg-bot"

Effect.gen(function* () {
  const bot = yield* launchBot({
    bot_token: "YOUR_BOT_TOKEN",
    mode: "single",
    poll: { log_level: "debug" },
    on_message: [
      {
        match: ({ update }) => !!update.text,
        handle: async ({ ctx }) => {
          await Effect.sleep("2 seconds").pipe(Effect.runPromise)
          return ctx.reply("Delayed response!")
        }
      }
    ]
  })

  yield* pipe(
    Micro.fiberAwait(bot.fiber()!),
    Effect.andThen(Effect.logInfo("Bot stopped")),
    Effect.forkDaemon
  )
}).pipe(Effect.runPromise)
```
