# ForumTopic

This object represents a forum topic.

[Telegram docs](https://core.telegram.org/bots/api#forumtopic)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message_thread_id | `number` | Yes | Unique identifier of the forum topic |
| name | `string` | Yes | Name of the topic |
| icon_color | `number` | Yes | Color of the topic icon in RGB format |
| icon_custom_emoji_id | `string` | No | Unique identifier of the custom emoji shown as the topic icon |
| is_name_implicit | `boolean` | No | True, if the name of the topic wasn&#39;t specified explicitly by its creator and likely needs to be changed by the bot |
