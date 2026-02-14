---
title: "ChatOwnerLeft"
---

Describes a service message about the chat owner leaving the chat.

[Telegram docs](https://core.telegram.org/bots/api#chatownerleft)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| new_owner | [`User`](/api/types/user/) | No | The user which will be the new owner of the chat if the previous owner does not return to the chat |
