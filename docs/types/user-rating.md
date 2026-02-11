# UserRating

This object describes the rating of a user based on their Telegram Star spendings.

[Telegram docs](https://core.telegram.org/bots/api#userrating)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| level | `number` | Yes | Current level of the user, indicating their reliability when purchasing digital goods and services A higher level suggests a more trustworthy customer; a negative level is likely reason for concern. |
| rating | `number` | Yes | Numerical value of the user&#39;s rating; the higher the rating, the better |
| current_level_rating | `number` | Yes | The rating value required to get the current level |
| next_level_rating | `number` | No | The rating value required to get to the next level; omitted if the maximum level was reached |
