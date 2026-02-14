---
title: "editStory"
---

Edits a story previously posted by the bot on behalf of a managed business account Requires the can_manage_stories business bot right

[Telegram docs](https://core.telegram.org/bots/api#editstory)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| business_connection_id | `string` | Yes | Unique identifier of the business connection |
| story_id | `number` | Yes | Unique identifier of the story to edit |
| content | [`InputStoryContent`](/api/types/input-story-content/) | Yes | Content of the story |
| caption | `string` | No | Caption of the story, 0-2048 characters after entities parsing |
| parse_mode | `"HTML" | "MarkdownV2"` | No | Mode for parsing entities in the story caption See formatting options for more details. |
| caption_entities | [`MessageEntity`](/api/types/message-entity/)[] | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode |
| areas | [`StoryArea`](/api/types/story-area/)[] | No | A JSON-serialized list of clickable areas to be shown on the story |

## Return type

[`Story`](/api/types/story/)
