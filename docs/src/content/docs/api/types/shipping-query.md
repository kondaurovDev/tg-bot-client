---
title: "ShippingQuery"
---

This object contains information about an incoming shipping query.

[Telegram docs](https://core.telegram.org/bots/api#shippingquery)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | `string` | Yes | Unique query identifier |
| from | [`User`](/api/types/user/) | Yes | User who sent the query |
| invoice_payload | `string` | Yes | Bot-specified invoice payload |
| shipping_address | [`ShippingAddress`](/api/types/shipping-address/) | Yes | User specified shipping address |
