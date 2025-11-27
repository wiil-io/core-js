[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ConversationSummary

# Type Alias: ConversationSummary

```ts
type ConversationSummary = {
  summary: string;
  key_points: string[];
  action_items: string[];
  sentiment: ConversationSummarySentiment;
};
```

Defined in: src/core/conversation/conversation-config.schema.ts:188

Conversation summary schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="summary"></a> `summary` | `string` | src/core/conversation/conversation-config.schema.ts:20 |
| <a id="key_points"></a> `key_points` | `string`[] | src/core/conversation/conversation-config.schema.ts:21 |
| <a id="action_items"></a> `action_items` | `string`[] | src/core/conversation/conversation-config.schema.ts:22 |
| <a id="sentiment"></a> `sentiment` | [`ConversationSummarySentiment`](../enumerations/ConversationSummarySentiment.md) | src/core/conversation/conversation-config.schema.ts:23 |
