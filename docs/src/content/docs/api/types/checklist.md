---
title: "Checklist"
---

Describes a checklist.

[Telegram docs](https://core.telegram.org/bots/api#checklist)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | `string` | Yes | Title of the checklist |
| tasks | [`ChecklistTask`](/api/types/checklist-task/)[] | Yes | List of tasks in the checklist |
| title_entities | [`MessageEntity`](/api/types/message-entity/)[] | No | Special entities that appear in the checklist title |
| others_can_add_tasks | `boolean` | No | True, if users other than the creator of the list can add tasks to the list |
| others_can_mark_tasks_as_done | `boolean` | No | True, if users other than the creator of the list can mark tasks as done or not done |
