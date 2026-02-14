---
title: "SuggestedPostApprovalFailed"
---

Describes a service message about the failed approval of a suggested post Currently, only caused by insufficient user funds at the time of approval.

[Telegram docs](https://core.telegram.org/bots/api#suggestedpostapprovalfailed)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| price | [`SuggestedPostPrice`](/api/types/suggested-post-price/) | Yes | Expected price of the post |
| suggested_post_message | [`Message`](/api/types/message/) | No | Message containing the suggested post whose approval has failed Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. |
