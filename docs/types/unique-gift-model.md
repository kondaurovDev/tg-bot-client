# UniqueGiftModel

This object describes the model of a unique gift.

[Telegram docs](https://core.telegram.org/bots/api#uniquegiftmodel)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | `string` | Yes | Name of the model |
| sticker | [`Sticker`](sticker.md) | Yes | The sticker that represents the unique gift |
| rarity_per_mille | `number` | Yes | The number of unique gifts that receive this model for every 1000 gift upgrades Always 0 for crafted gifts. |
| rarity | `"uncommon" | "rare" | "epic" | "legendary"` | No | Rarity of the model if it is a crafted model Currently, can be “uncommon”, “rare”, “epic”, or “legendary”. |
