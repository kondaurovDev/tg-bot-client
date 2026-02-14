---
title: "UniqueGift"
---

This object describes a unique gift that was upgraded from a regular gift.

[Telegram docs](https://core.telegram.org/bots/api#uniquegift)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| gift_id | `string` | Yes | Identifier of the regular gift from which the gift was upgraded |
| base_name | `string` | Yes | Human-readable name of the regular gift from which this unique gift was upgraded |
| name | `string` | Yes | Unique name of the gift This name can be used in https://t.me/nft/... links and story areas |
| number | `number` | Yes | Unique number of the upgraded gift among gifts upgraded from the same regular gift |
| model | [`UniqueGiftModel`](/api/types/unique-gift-model/) | Yes | Model of the gift |
| symbol | [`UniqueGiftSymbol`](/api/types/unique-gift-symbol/) | Yes | Symbol of the gift |
| backdrop | [`UniqueGiftBackdrop`](/api/types/unique-gift-backdrop/) | Yes | Backdrop of the gift |
| is_premium | `boolean` | No | True, if the original regular gift was exclusively purchaseable by Telegram Premium subscribers |
| is_burned | `boolean` | No | True, if the gift was used to craft another gift and isn&#39;t available anymore |
| is_from_blockchain | `boolean` | No | True, if the gift is assigned from the TON blockchain and can&#39;t be resold or transferred in Telegram |
| colors | [`UniqueGiftColors`](/api/types/unique-gift-colors/) | No | The color scheme that can be used by the gift&#39;s owner for the chat&#39;s name, replies to messages and link previews; for business account gifts and gifts that are currently on sale only |
| publisher_chat | [`Chat`](/api/types/chat/) | No | Information about the chat that published the gift |
