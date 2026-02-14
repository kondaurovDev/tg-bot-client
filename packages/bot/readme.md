# @effect-ak/tg-bot

[![NPM Version](https://img.shields.io/npm/v/%40effect-ak%2Ftg-bot)](https://www.npmjs.com/package/@effect-ak/tg-bot)
![NPM Downloads](https://img.shields.io/npm/dw/%40effect-ak%2Ftg-bot)

Effect-based Telegram bot runner with automatic long polling, error handling, and hot reload.

## Installation

```bash
npm install @effect-ak/tg-bot effect
```

`effect` is a peer dependency and must be installed separately.

## Quick Start

```typescript
import { runTgChatBot } from "@effect-ak/tg-bot"

runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "single",
  on_message: [
    {
      match: ({ update }) => !!update.text,
      handle: ({ update, ctx }) => ctx.reply(`You said: ${update.text}`)
    }
  ]
})
```

## Features

- **Effect-based** — built on [Effect](https://effect.website/)
- **Two Modes** — single (one-by-one) and batch processing
- **Long Polling** — no webhooks or public URLs needed
- **Type-Safe Handlers** — all Telegram update types supported
- **Hot Reload** — update handlers without restarting
- **Concurrent** — up to 10 updates processed in parallel

## Documentation

Full documentation, examples, and configuration: **[tg-bot-sdk docs](https://github.com/kondaurovDev/tg-bot-sdk)**

## License

MIT
