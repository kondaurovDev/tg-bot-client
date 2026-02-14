---
title: "InputTextMessageContent"
---

Represents the content of a text message to be sent as the result of an inline query.

[Telegram docs](https://core.telegram.org/bots/api#inputtextmessagecontent)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message_text | `string` | Yes | Text of the message to be sent, 1-4096 characters |
| parse_mode | `"HTML" | "MarkdownV2"` | No | Mode for parsing entities in the message text See formatting options for more details. |
| entities | [`MessageEntity`](/api/types/message-entity/)[] | No | List of special entities that appear in message text, which can be specified instead of parse_mode |
| link_preview_options | [`LinkPreviewOptions`](/api/types/link-preview-options/) | No | Link preview generation options for the message |
