---
title: "UniqueGiftSymbol"
---

This object describes the symbol shown on the pattern of a unique gift.

[Telegram docs](https://core.telegram.org/bots/api#uniquegiftsymbol)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | `string` | Yes | Name of the symbol |
| sticker | [`Sticker`](/api/types/sticker/) | Yes | The sticker that represents the unique gift |
| rarity_per_mille | `number` | Yes | The number of unique gifts that receive this model for every 1000 gifts upgraded |
