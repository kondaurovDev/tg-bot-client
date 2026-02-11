# repostStory

Reposts a story on behalf of a business account from another business account Both business accounts must be managed by the same bot, and the story on the source account must have been posted (or reposted) by the bot Requires the can_manage_stories business bot right for both business accounts

[Telegram docs](https://core.telegram.org/bots/api#repoststory)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| business_connection_id | `string` | Yes | Unique identifier of the business connection |
| from_chat_id | `number` | Yes | Unique identifier of the chat which posted the story that should be reposted |
| from_story_id | `number` | Yes | Unique identifier of the story that should be reposted |
| active_period | `number` | Yes | Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400 |
| post_to_chat_page | `boolean` | No | Pass True to keep the story accessible after it expires |
| protect_content | `boolean` | No | Pass True if the content of the story must be protected from forwarding and screenshotting |

## Return type

[`Story`](../types/story.md)
