---
title: Batch Mode
description: Processing all updates as an array
---

In batch mode, the bot receives all updates as an array and you process them together.

## Usage

```typescript
import { runTgChatBot } from "@effect-ak/tg-bot"

runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "batch",
  on_batch: async (updates) => {
    console.log(`Processing ${updates.length} updates`)
    // Process updates...
    return true // Continue polling
  }
})
```

Return `true` to continue polling, `false` to stop the bot.

## Example with Client

```typescript
import { runTgChatBot } from "@effect-ak/tg-bot"
import { makeTgBotClient } from "@effect-ak/tg-bot-client"

const client = makeTgBotClient({ bot_token: "YOUR_BOT_TOKEN" })

runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "batch",
  poll: {
    batch_size: 100,
    poll_timeout: 60
  },
  on_batch: async (updates) => {
    const messages = updates
      .map(u => u.message)
      .filter(m => m != null)

    await client.execute("send_message", {
      chat_id: "ADMIN_CHAT_ID",
      text: `Processed ${messages.length} messages`
    })

    return true
  }
})
```

## Error Handling

```typescript
on_batch: async (updates) => {
  try {
    // Process updates
    return true // Continue
  } catch (error) {
    console.error(error)
    return false // Stop bot
  }
}
```
