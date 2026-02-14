---
title: HTTP Client
description: Type-safe HTTP client for Telegram Bot API
---

The `@effect-ak/tg-bot-client` package provides a lightweight HTTP client with full TypeScript support for the Telegram Bot API.

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

## Sending Messages

### Basic Text Message

```typescript
await client.execute("send_message", {
  chat_id: "123456789",
  text: "Hello from TypeScript!"
})
```

### Message with Formatting

```typescript
await client.execute("send_message", {
  chat_id: "123456789",
  text: "*Bold* _italic_ `code`",
  parse_mode: "Markdown"
})
```

### Message with Inline Keyboard

```typescript
await client.execute("send_message", {
  chat_id: "123456789",
  text: "Choose an option:",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Option 1", callback_data: "opt_1" },
        { text: "Option 2", callback_data: "opt_2" }
      ]
    ]
  }
})
```

## Sending Files

### Sending a Document

```typescript
await client.execute("send_document", {
  chat_id: "123456789",
  document: {
    file_content: new TextEncoder().encode("Hello from file!"),
    file_name: "hello.txt"
  },
  caption: "Simple text file"
})
```

### Sending a Photo

```typescript
await client.execute("send_photo", {
  chat_id: "123456789",
  photo: {
    file_content: photoBuffer,
    file_name: "image.jpg"
  },
  caption: "Check out this photo!"
})
```

## Downloading Files

```typescript
const file = await client.getFile({
  file_id: "AgACAgIAAxkBAAI..."
})

console.log(file.name) // filename.jpg
console.log(file.size) // file size in bytes

const arrayBuffer = await file.arrayBuffer()
const text = await file.text()
```

## Message Effects

Built-in constants for message effects:

```typescript
import { MESSAGE_EFFECTS } from "@effect-ak/tg-bot-client"

await client.execute("send_message", {
  chat_id: "123456789",
  text: "Message with fire effect!",
  message_effect_id: MESSAGE_EFFECTS["🔥"]
})
```

Available effects: 🔥 👍 👎 ❤️ 🎉 💩

## Error Handling

The client throws `TgBotClientError` for all errors:

```typescript
import { TgBotClientError } from "@effect-ak/tg-bot-client"

try {
  await client.execute("send_message", {
    chat_id: "invalid",
    text: "Test"
  })
} catch (error) {
  if (error instanceof TgBotClientError) {
    switch (error.cause._tag) {
      case "NotOkResponse":
        console.error("API error:", error.cause.errorCode, error.cause.details)
        break
      case "UnexpectedResponse":
        console.error("Unexpected response:", error.cause.response)
        break
      case "ClientInternalError":
        console.error("Internal error:", error.cause.cause)
        break
      case "UnableToGetFile":
        console.error("File download error:", error.cause.cause)
        break
      case "NotJsonResponse":
        console.error("Invalid JSON response:", error.cause.response)
        break
    }
  }
}
```

## API Reference

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
