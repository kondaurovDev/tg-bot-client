---
title: Configuration
description: Poll settings and error handling strategies
---

## Poll Settings

```typescript
runTgChatBot({
  bot_token: "YOUR_BOT_TOKEN",
  mode: "single",
  poll: {
    log_level: "debug",
    on_error: "continue",
    batch_size: 50,
    poll_timeout: 30,
    max_empty_responses: 5
  },
  on_message: [/* ... */]
})
```

## Options

| Option | Default | Description |
|--------|---------|-------------|
| `log_level` | `"info"` | `"info"` — basic logging, `"debug"` — all updates and responses |
| `on_error` | `"stop"` | `"stop"` — stop bot on error, `"continue"` — keep polling |
| `batch_size` | `10` | Updates per poll (10–100) |
| `poll_timeout` | `10` | Long polling timeout in seconds (2–120) |
| `max_empty_responses` | `undefined` | Stop after N consecutive empty responses (useful for testing) |
