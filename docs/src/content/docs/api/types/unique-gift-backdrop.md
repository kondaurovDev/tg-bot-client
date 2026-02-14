---
title: "UniqueGiftBackdrop"
---

This object describes the backdrop of a unique gift.

[Telegram docs](https://core.telegram.org/bots/api#uniquegiftbackdrop)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | `string` | Yes | Name of the backdrop |
| colors | [`UniqueGiftBackdropColors`](/api/types/unique-gift-backdrop-colors/) | Yes | Colors of the backdrop |
| rarity_per_mille | `number` | Yes | The number of unique gifts that receive this backdrop for every 1000 gifts upgraded |
