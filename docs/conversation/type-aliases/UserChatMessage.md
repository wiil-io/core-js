[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UserChatMessage

# Type Alias: UserChatMessage

```ts
type UserChatMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  message_type: USER;
  user_message_id?: string | null;
  last_assistant_message_id?: string;
};
```

Defined in: [src/core/conversation/conversation-message.schema.ts:94](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L94)

User chat message schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:26](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L26) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:27](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L27) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:28](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L28) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:29](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L29) |
| <a id="message_type"></a> `message_type` | [`USER`](../enumerations/MessageType.md#user) | [src/core/conversation/conversation-message.schema.ts:53](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L53) |
| <a id="user_message_id"></a> `user_message_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:54](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L54) |
| <a id="last_assistant_message_id"></a> `last_assistant_message_id?` | `string` | [src/core/conversation/conversation-message.schema.ts:55](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L55) |
