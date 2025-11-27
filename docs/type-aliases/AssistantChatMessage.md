[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / AssistantChatMessage

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

Defined in: src/core/conversation/conversation-message.schema.ts:95

Assistant chat message schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | src/core/conversation/conversation-message.schema.ts:26 |
| <a id="message"></a> `message` | `string` | src/core/conversation/conversation-message.schema.ts:27 |
| <a id="timestamp"></a> `timestamp` | `number` | src/core/conversation/conversation-message.schema.ts:28 |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | src/core/conversation/conversation-message.schema.ts:29 |
| <a id="message_type"></a> `message_type` | [`AGENT`](../enumerations/MessageType.md#agent) | src/core/conversation/conversation-message.schema.ts:67 |
| <a id="assistant_message_id"></a> `assistant_message_id` | `string` | src/core/conversation/conversation-message.schema.ts:68 |
| <a id="last_user_message_id"></a> `last_user_message_id?` | `string` | src/core/conversation/conversation-message.schema.ts:69 |
