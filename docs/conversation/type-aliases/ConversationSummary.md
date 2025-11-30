[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationSummary

# Type Alias: ConversationSummary

```ts
type ConversationSummary = {
  summary: string;
  key_points: string[];
  action_items: string[];
  sentiment: ConversationSummarySentiment;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:188](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L188)

Conversation summary schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="summary"></a> `summary` | `string` | [src/core/conversation/conversation-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L20) |
| <a id="key_points"></a> `key_points` | `string`[] | [src/core/conversation/conversation-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L21) |
| <a id="action_items"></a> `action_items` | `string`[] | [src/core/conversation/conversation-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L22) |
| <a id="sentiment"></a> `sentiment` | [`ConversationSummarySentiment`](../../type-definitions/enumerations/ConversationSummarySentiment.md) | [src/core/conversation/conversation-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L23) |
