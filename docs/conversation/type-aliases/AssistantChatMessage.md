[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / AssistantChatMessage

# Type Alias: AssistantChatMessage

```ts
type AssistantChatMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  message_type: AGENT;
  assistant_message_id: string;
  last_user_message_id?: string;
};
```

Defined in: [src/core/conversation/conversation-message.schema.ts:95](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L95)

Assistant chat message schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:26](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L26) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:27](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L27) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:28](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L28) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:29](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L29) |
| <a id="message_type"></a> `message_type` | [`AGENT`](../enumerations/MessageType.md#agent) | [src/core/conversation/conversation-message.schema.ts:67](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L67) |
| <a id="assistant_message_id"></a> `assistant_message_id` | `string` | [src/core/conversation/conversation-message.schema.ts:68](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L68) |
| <a id="last_user_message_id"></a> `last_user_message_id?` | `string` | [src/core/conversation/conversation-message.schema.ts:69](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L69) |
