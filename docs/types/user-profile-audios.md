# UserProfileAudios

This object represents the audios displayed on a user&#39;s profile.

[Telegram docs](https://core.telegram.org/bots/api#userprofileaudios)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| total_count | `number` | Yes | Total number of profile audios for the target user |
| audios | [`Audio`](audio.md)[] | Yes | Requested profile audios |
