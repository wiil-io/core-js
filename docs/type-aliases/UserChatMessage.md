[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UserChatMessage

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

Defined in: src/core/conversation/conversation-message.schema.ts:94

User chat message schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | src/core/conversation/conversation-message.schema.ts:26 |
| <a id="message"></a> `message` | `string` | src/core/conversation/conversation-message.schema.ts:27 |
| <a id="timestamp"></a> `timestamp` | `number` | src/core/conversation/conversation-message.schema.ts:28 |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | src/core/conversation/conversation-message.schema.ts:29 |
| <a id="message_type"></a> `message_type` | [`USER`](../enumerations/MessageType.md#user) | src/core/conversation/conversation-message.schema.ts:53 |
| <a id="user_message_id"></a> `user_message_id?` | `string` \| `null` | src/core/conversation/conversation-message.schema.ts:54 |
| <a id="last_assistant_message_id"></a> `last_assistant_message_id?` | `string` | src/core/conversation/conversation-message.schema.ts:55 |
