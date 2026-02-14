---
title: Single Mode
description: Processing updates one-by-one with typed handlers
---

In single mode, the bot processes each update individually with a dedicated handler for each update type.

## Handler Format

```typescript
on_message: [
  {
    match: ({ update, ctx }) => ctx.command === "/start",
    handle: ({ update, ctx }) => ctx.reply("Welcome!")
  },
  {
    match: ({ update }) => !!update.text,
    handle: ({ ctx }) => ctx.reply("Got your message!")
  },
  {
    handle: ({ ctx }) => ctx.ignore  // fallback (no match = always runs)
  }
]
```

Handlers are checked in order. The first one where `match` returns `true` runs. If no `match` is provided, the handler always runs (fallback).

## Context Helpers

- `ctx.reply(text, options?)` — Send a message
- `ctx.replyWithDocument(document, options?)` — Send a document
- `ctx.replyWithPhoto(photo, options?)` — Send a photo
- `ctx.command` — Parsed command (e.g., "/start", "/help")
- `ctx.ignore` — Skip response

## Available Handlers

| Handler | Trigger |
|---------|---------|
| `on_message` | New incoming message |
| `on_edited_message` | Message was edited |
| `on_channel_post` | New channel post |
| `on_edited_channel_post` | Channel post was edited |
| `on_inline_query` | Inline query |
| `on_chosen_inline_result` | Chosen inline result |
| `on_callback_query` | Callback query from inline keyboard |
| `on_shipping_query` | Shipping query |
| `on_pre_checkout_query` | Pre-checkout query |
| `on_poll` | Poll state update |
| `on_poll_answer` | User changed their answer in a poll |
| `on_my_chat_member` | Bot's chat member status changed |
| `on_chat_member` | Chat member status changed |
| `on_chat_join_request` | Request to join chat |

## Bot Response

Handlers return a `BotResponse` object:

```typescript
import { BotResponse } from "@effect-ak/tg-bot"

// Send a message
BotResponse.make({ type: "message", text: "Hello!" })

// Send a photo
BotResponse.make({
  type: "photo",
  photo: { file_content: photoBuffer, file_name: "image.jpg" },
  caption: "Check this out!"
})

// Ignore update
BotResponse.ignore
```

All Telegram `send_*` methods are supported: `message`, `photo`, `document`, `video`, `audio`, `voice`, `sticker`, `dice`, etc.

## Error Handling

If a handler throws an error, the bot:
1. Logs the error with update details
2. Sends an error message to the user
3. Continues processing other updates (if `on_error: "continue"`)

Up to 10 updates are processed concurrently. If some handlers fail, others continue.
