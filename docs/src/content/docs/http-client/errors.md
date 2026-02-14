---
title: Error Handling
description: Handling errors in the Telegram Bot API client
---

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

## Error Types

| Tag | Description |
|-----|-------------|
| `NotOkResponse` | Telegram API returned an error (e.g., invalid chat_id) |
| `UnexpectedResponse` | Response didn't match expected format |
| `ClientInternalError` | Internal error (network failure, etc.) |
| `UnableToGetFile` | File download failed |
| `NotJsonResponse` | Response was not valid JSON |
