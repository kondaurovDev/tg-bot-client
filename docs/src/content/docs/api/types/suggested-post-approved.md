---
title: "SuggestedPostApproved"
---

Describes a service message about the approval of a suggested post.

[Telegram docs](https://core.telegram.org/bots/api#suggestedpostapproved)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| send_date | `number` | Yes | Date when the post will be published |
| suggested_post_message | [`Message`](/api/types/message/) | No | Message containing the suggested post Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. |
| price | [`SuggestedPostPrice`](/api/types/suggested-post-price/) | No | Amount paid for the post |
