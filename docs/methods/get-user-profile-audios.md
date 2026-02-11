# getUserProfileAudios

Use this method to get a list of profile audios for a user

[Telegram docs](https://core.telegram.org/bots/api#getuserprofileaudios)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| user_id | `number` | Yes | Unique identifier of the target user |
| offset | `number` | No | Sequential number of the first audio to be returned By default, all audios are returned. |
| limit | `number` | No | Limits the number of audios to be retrieved Values between 1-100 are accepted Defaults to 100. |

## Return type

[`UserProfileAudios`](../types/user-profile-audios.md)
