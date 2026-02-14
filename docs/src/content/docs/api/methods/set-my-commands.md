---
title: "setMyCommands"
---

Use this method to change the list of the bot&#39;s commands See this manual for more details about bot commands

[Telegram docs](https://core.telegram.org/bots/api#setmycommands)

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| commands | [`BotCommand`](/api/types/bot-command/)[] | Yes | A JSON-serialized list of bot commands to be set as the list of the bot&#39;s commands At most 100 commands can be specified. |
| scope | [`BotCommandScope`](/api/types/bot-command-scope/) | No | A JSON-serialized object, describing scope of users for which the commands are relevant Defaults to BotCommandScopeDefault. |
| language_code | `string` | No | A two-letter ISO 639-1 language code If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands |

## Return type

`boolean`
