---
title: "MessageReactionUpdated"
---

This object represents a change of a reaction on a message performed by a user.

[Telegram docs](https://core.telegram.org/bots/api#messagereactionupdated)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| chat | [`Chat`](/api/types/chat/) | Yes | The chat containing the message the user reacted to |
| message_id | `number` | Yes | Unique identifier of the message inside the chat |
| date | `number` | Yes | Date of the change in Unix time |
| old_reaction | [`ReactionType`](/api/types/reaction-type/)[] | Yes | Previous list of reaction types that were set by the user |
| new_reaction | [`ReactionType`](/api/types/reaction-type/)[] | Yes | New list of reaction types that have been set by the user |
| user | [`User`](/api/types/user/) | No | The user that changed the reaction, if the user isn&#39;t anonymous |
| actor_chat | [`Chat`](/api/types/chat/) | No | The chat on behalf of which the reaction was changed, if the user is anonymous |
