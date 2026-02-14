---
title: "sendDice"
---

Use this method to send an animated emoji that will display a random value

[Telegram docs](https://core.telegram.org/bots/api#senddice)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| chat_id | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| business_connection_id | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| message_thread_id | `number` | No | Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| direct_messages_topic_id | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| emoji | `"🎲" | "🎯" | "🏀" | "⚽" | "🎳" | "🎰"` | No | Emoji on which the dice throw animation is based Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰” Dice can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰” Defaults to “🎲” |
| disable_notification | `boolean` | No | Sends the message silently Users will receive a notification with no sound. |
| protect_content | `boolean` | No | Protects the contents of the sent message from forwarding |
| allow_paid_broadcast | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message The relevant Stars will be withdrawn from the bot&#39;s balance |
| message_effect_id | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| suggested_post_parameters | [`SuggestedPostParameters`](/api/types/suggested-post-parameters/) | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| reply_parameters | [`ReplyParameters`](/api/types/reply-parameters/) | No | Description of the message to reply to |
| reply_markup | [`InlineKeyboardMarkup`](/api/types/inline-keyboard-markup/) \| [`ReplyKeyboardMarkup`](/api/types/reply-keyboard-markup/) \| [`ReplyKeyboardRemove`](/api/types/reply-keyboard-remove/) \| [`ForceReply`](/api/types/force-reply/) | No | Additional interface options A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

## Return type

[`Message`](/api/types/message/)
