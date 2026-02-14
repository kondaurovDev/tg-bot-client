---
title: "UsersShared"
---

This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.

[Telegram docs](https://core.telegram.org/bots/api#usersshared)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| request_id | `number` | Yes | Identifier of the request |
| users | [`SharedUser`](/api/types/shared-user/)[] | Yes | Information about users shared with the bot. |
