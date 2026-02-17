# @effect-ak/tg-bot-client

[![NPM Version](https://img.shields.io/npm/v/%40effect-ak%2Ftg-bot-client)](https://www.npmjs.com/package/@effect-ak/tg-bot-client)
![NPM Downloads](https://img.shields.io/npm/dw/%40effect-ak%2Ftg-bot-client)

Type-safe HTTP client for Telegram Bot API with complete TypeScript support.

## Installation

```bash
npm install @effect-ak/tg-bot-client
```

## Quick Start

```typescript
import { makeTgBotClient } from "@effect-ak/tg-bot-client"

const client = makeTgBotClient({
  bot_token: "YOUR_BOT_TOKEN"
})

await client.execute("send_message", {
  chat_id: "123456789",
  text: "Hello, World!"
})
```

## Features

- **Type-Safe** — full TypeScript support with types from official documentation
- **Lightweight** — minimal dependencies
- **Complete API Coverage** — all Bot API methods supported
- **File Handling** — simplified upload and download
- **Message Effects** — built-in constants

## Documentation

Full documentation, usage examples, and error handling: **[tg-bot-sdk.website](https://tg-bot-sdk.website)**

## License

MIT
