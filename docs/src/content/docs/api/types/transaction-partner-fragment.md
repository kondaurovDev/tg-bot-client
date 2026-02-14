---
title: "TransactionPartnerFragment"
---

Describes a withdrawal transaction with Fragment.

[Telegram docs](https://core.telegram.org/bots/api#transactionpartnerfragment)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| type | `"fragment"` | Yes | Type of the transaction partner, always “fragment” |
| withdrawal_state | [`RevenueWithdrawalState`](/api/types/revenue-withdrawal-state/) | No | State of the transaction if the transaction is outgoing |
