---
title: "ShippingOption"
---

This object represents one shipping option.

[Telegram docs](https://core.telegram.org/bots/api#shippingoption)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | `string` | Yes | Shipping option identifier |
| title | `string` | Yes | Option title |
| prices | [`LabeledPrice`](/api/types/labeled-price/)[] | Yes | List of price portions |
