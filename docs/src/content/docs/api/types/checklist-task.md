---
title: "ChecklistTask"
---

Describes a task in a checklist.

[Telegram docs](https://core.telegram.org/bots/api#checklisttask)

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | `number` | Yes | Unique identifier of the task |
| text | `string` | Yes | Text of the task |
| text_entities | [`MessageEntity`](/api/types/message-entity/)[] | No | Special entities that appear in the task text |
| completed_by_user | [`User`](/api/types/user/) | No | User that completed the task; omitted if the task wasn&#39;t completed by a user |
| completed_by_chat | [`Chat`](/api/types/chat/) | No | Chat that completed the task; omitted if the task wasn&#39;t completed by a chat |
| completion_date | `number` | No | Point in time (Unix timestamp) when the task was completed; 0 if the task wasn&#39;t completed |
