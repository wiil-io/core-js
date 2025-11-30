[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationStateHistory

# Type Alias: ConversationStateHistory

```ts
type ConversationStateHistory = {
  status: ConversationStatus;
  timestamp: number;
  reason?: string;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L192)

Conversation state history schema for tracking status changes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md) | [src/core/conversation/conversation-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L78) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L79) |
| <a id="reason"></a> `reason?` | `string` | [src/core/conversation/conversation-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L80) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/conversation-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L81) |
