---
title: Overview
description: Type-safe HTTP client for Telegram Bot API
---

The `@effect-ak/tg-bot-client` package provides a lightweight HTTP client with full TypeScript support for the Telegram Bot API.

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

- **Type-Safe** — full TypeScript support with types generated from official documentation
- **Lightweight** — minimal dependencies
- **Complete API Coverage** — all Bot API methods supported
- **File Handling** — simplified file upload and download
- **Message Effects** — built-in constants for message effects
- **Custom Base URL** — support for self-hosted Telegram Bot API servers

## API

### `makeTgBotClient(config)`

Creates a new Telegram Bot API client.

- `config.bot_token` (string, required): Your bot token from @BotFather
- `config.base_url` (string, optional): Custom API base URL (default: `https://api.telegram.org`)

### `client.execute(method, input)`

Executes a Telegram Bot API method. Method names use snake_case (e.g., `send_message`).

### `client.getFile(input)`

Downloads a file from Telegram servers. Returns a standard [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object.

## Custom Base URL

For self-hosted Telegram Bot API servers:

```typescript
const client = makeTgBotClient({
  bot_token: "YOUR_BOT_TOKEN",
  base_url: "https://your-custom-server.com"
})
```
