---
title: Usage Examples
description: Sending messages, files, and using message effects
---

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
