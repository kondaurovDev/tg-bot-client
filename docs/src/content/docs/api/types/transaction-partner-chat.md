---
title: "TransactionPartnerChat"
---

Describes a transaction with a chat.

[Telegram docs](https://core.telegram.org/bots/api#transactionpartnerchat)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| type | `"chat"` | Yes | Type of the transaction partner, always “chat” |
| chat | [`Chat`](/api/types/chat/) | Yes | Information about the chat |
| gift | [`Gift`](/api/types/gift/) | No | The gift sent to the chat by the bot |
