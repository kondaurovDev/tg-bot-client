---
title: "MessageReactionCountUpdated"
---

This object represents reaction changes on a message with anonymous reactions.

[Telegram docs](https://core.telegram.org/bots/api#messagereactioncountupdated)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| chat | [`Chat`](/api/types/chat/) | Yes | The chat containing the message |
| message_id | `number` | Yes | Unique message identifier inside the chat |
| date | `number` | Yes | Date of the change in Unix time |
| reactions | [`ReactionCount`](/api/types/reaction-count/)[] | Yes | List of reactions that are present on the message |
