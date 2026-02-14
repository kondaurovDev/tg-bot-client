---
title: "ExternalReplyInfo"
---

This object contains information about a message that is being replied to, which may come from another chat or forum topic.

[Telegram docs](https://core.telegram.org/bots/api#externalreplyinfo)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| origin | [`MessageOrigin`](/api/types/message-origin/) | Yes | Origin of the message replied to by the given message |
| chat | [`Chat`](/api/types/chat/) | No | Chat the original message belongs to Available only if the chat is a supergroup or a channel. |
| message_id | `number` | No | Unique message identifier inside the original chat Available only if the original chat is a supergroup or a channel. |
| link_preview_options | [`LinkPreviewOptions`](/api/types/link-preview-options/) | No | Options used for link preview generation for the original message, if it is a text message |
| animation | [`Animation`](/api/types/animation/) | No | Message is an animation, information about the animation |
| audio | [`Audio`](/api/types/audio/) | No | Message is an audio file, information about the file |
| document | [`Document`](/api/types/document/) | No | Message is a general file, information about the file |
| paid_media | [`PaidMediaInfo`](/api/types/paid-media-info/) | No | Message contains paid media; information about the paid media |
| photo | [`PhotoSize`](/api/types/photo-size/)[] | No | Message is a photo, available sizes of the photo |
| sticker | [`Sticker`](/api/types/sticker/) | No | Message is a sticker, information about the sticker |
| story | [`Story`](/api/types/story/) | No | Message is a forwarded story |
| video | [`Video`](/api/types/video/) | No | Message is a video, information about the video |
| video_note | [`VideoNote`](/api/types/video-note/) | No | Message is a video note, information about the video message |
| voice | [`Voice`](/api/types/voice/) | No | Message is a voice message, information about the file |
| has_media_spoiler | `boolean` | No | True, if the message media is covered by a spoiler animation |
| checklist | [`Checklist`](/api/types/checklist/) | No | Message is a checklist |
| contact | [`Contact`](/api/types/contact/) | No | Message is a shared contact, information about the contact |
| dice | [`Dice`](/api/types/dice/) | No | Message is a dice with random value |
| game | [`Game`](/api/types/game/) | No | Message is a game, information about the game More about games » |
| giveaway | [`Giveaway`](/api/types/giveaway/) | No | Message is a scheduled giveaway, information about the giveaway |
| giveaway_winners | [`GiveawayWinners`](/api/types/giveaway-winners/) | No | A giveaway with public winners was completed |
| invoice | [`Invoice`](/api/types/invoice/) | No | Message is an invoice for a payment, information about the invoice More about payments » |
| location | [`Location`](/api/types/location/) | No | Message is a shared location, information about the location |
| poll | [`Poll`](/api/types/poll/) | No | Message is a native poll, information about the poll |
| venue | [`Venue`](/api/types/venue/) | No | Message is a venue, information about the venue |
