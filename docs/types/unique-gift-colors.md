# UniqueGiftColors

This object contains information about the color scheme for a user&#39;s name, message replies and link previews based on a unique gift.

[Telegram docs](https://core.telegram.org/bots/api#uniquegiftcolors)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| model_custom_emoji_id | `string` | Yes | Custom emoji identifier of the unique gift&#39;s model |
| symbol_custom_emoji_id | `string` | Yes | Custom emoji identifier of the unique gift&#39;s symbol |
| light_theme_main_color | `number` | Yes | Main color used in light themes; RGB format |
| light_theme_other_colors | `number[]` | Yes | List of 1-3 additional colors used in light themes; RGB format |
| dark_theme_main_color | `number` | Yes | Main color used in dark themes; RGB format |
| dark_theme_other_colors | `number[]` | Yes | List of 1-3 additional colors used in dark themes; RGB format |
