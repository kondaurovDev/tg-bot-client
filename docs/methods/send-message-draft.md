# sendMessageDraft

Use this method to stream a partial message to a user while the message is being generated; supported only for bots with forum topic mode enabled

[Telegram docs](https://core.telegram.org/bots/api#sendmessagedraft)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| chat_id | `number` | Yes | Unique identifier for the target private chat |
| draft_id | `number` | Yes | Unique identifier of the message draft; must be non-zero Changes of drafts with the same identifier are animated |
| text | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| message_thread_id | `number` | No | Unique identifier for the target message thread |
| parse_mode | `"HTML" | "MarkdownV2"` | No | Mode for parsing entities in the message text See formatting options for more details. |
| entities | [`MessageEntity`](../types/message-entity.md)[] | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode |

## Return type

`boolean`
