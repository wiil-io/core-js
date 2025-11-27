[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ConversationStateHistory

# Type Alias: ConversationStateHistory

```ts
type ConversationStateHistory = {
  status: ConversationStatus;
  timestamp: number;
  reason?: string;
  metadata?: Record<string, any>;
};
```

Defined in: src/core/conversation/conversation-config.schema.ts:192

Conversation state history schema for tracking status changes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | [`ConversationStatus`](../enumerations/ConversationStatus.md) | src/core/conversation/conversation-config.schema.ts:78 |
| <a id="timestamp"></a> `timestamp` | `number` | src/core/conversation/conversation-config.schema.ts:79 |
| <a id="reason"></a> `reason?` | `string` | src/core/conversation/conversation-config.schema.ts:80 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | src/core/conversation/conversation-config.schema.ts:81 |
