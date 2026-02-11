# getChatGifts

Returns the gifts owned by a chat

[Telegram docs](https://core.telegram.org/bots/api#getchatgifts)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| chat_id | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| exclude_unsaved | `boolean` | No | Pass True to exclude gifts that aren&#39;t saved to the chat&#39;s profile page Always True, unless the bot has the can_post_messages administrator right in the channel. |
| exclude_saved | `boolean` | No | Pass True to exclude gifts that are saved to the chat&#39;s profile page Always False, unless the bot has the can_post_messages administrator right in the channel. |
| exclude_unlimited | `boolean` | No | Pass True to exclude gifts that can be purchased an unlimited number of times |
| exclude_limited_upgradable | `boolean` | No | Pass True to exclude gifts that can be purchased a limited number of times and can be upgraded to unique |
| exclude_limited_non_upgradable | `boolean` | No | Pass True to exclude gifts that can be purchased a limited number of times and can&#39;t be upgraded to unique |
| exclude_from_blockchain | `boolean` | No | Pass True to exclude gifts that were assigned from the TON blockchain and can&#39;t be resold or transferred in Telegram |
| exclude_unique | `boolean` | No | Pass True to exclude unique gifts |
| sort_by_price | `boolean` | No | Pass True to sort results by gift price instead of send date Sorting is applied before pagination. |
| offset | `string` | No | Offset of the first entry to return as received from the previous request; use an empty string to get the first chunk of results |
| limit | `number` | No | The maximum number of gifts to be returned; 1-100 Defaults to 100 |

## Return type

[`OwnedGifts`](../types/owned-gifts.md)
