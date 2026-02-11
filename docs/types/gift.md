# Gift

This object represents a gift that can be sent by the bot.

[Telegram docs](https://core.telegram.org/bots/api#gift)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | `string` | Yes | Unique identifier of the gift |
| sticker | [`Sticker`](sticker.md) | Yes | The sticker that represents the gift |
| star_count | `number` | Yes | The number of Telegram Stars that must be paid to send the sticker |
| upgrade_star_count | `number` | No | The number of Telegram Stars that must be paid to upgrade the gift to a unique one |
| is_premium | `boolean` | No | True, if the gift can only be purchased by Telegram Premium subscribers |
| has_colors | `boolean` | No | True, if the gift can be used (after being upgraded) to customize a user&#39;s appearance |
| total_count | `number` | No | The total number of gifts of this type that can be sent by all users; for limited gifts only |
| remaining_count | `number` | No | The number of remaining gifts of this type that can be sent by all users; for limited gifts only |
| personal_total_count | `number` | No | The total number of gifts of this type that can be sent by the bot; for limited gifts only |
| personal_remaining_count | `number` | No | The number of remaining gifts of this type that can be sent by the bot; for limited gifts only |
| background | [`GiftBackground`](gift-background.md) | No | Background of the gift |
| unique_gift_variant_count | `number` | No | The total number of different unique gifts that can be obtained by upgrading the gift |
| publisher_chat | [`Chat`](chat.md) | No | Information about the chat that published the gift |
