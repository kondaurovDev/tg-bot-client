---
title: "editMessageChecklist"
---

Use this method to edit a checklist on behalf of a connected business account

[Telegram docs](https://core.telegram.org/bots/api#editmessagechecklist)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| business_connection_id | `string` | Yes | Unique identifier of the business connection on behalf of which the message will be sent |
| chat_id | `number` | Yes | Unique identifier for the target chat |
| message_id | `number` | Yes | Unique identifier for the target message |
| checklist | [`InputChecklist`](/api/types/input-checklist/) | Yes | A JSON-serialized object for the new checklist |
| reply_markup | [`InlineKeyboardMarkup`](/api/types/inline-keyboard-markup/) | No | A JSON-serialized object for the new inline keyboard for the message |

## Return type

[`Message`](/api/types/message/)
