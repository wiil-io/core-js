[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / AssistantEmailMessage

# Type Alias: AssistantEmailMessage

```ts
type AssistantEmailMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  subject: string;
  isEmail: true;
  message_type: AGENT;
};
```

Defined in: src/core/conversation/conversation-message.schema.ts:97

Assistant email message schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | src/core/conversation/conversation-message.schema.ts:26 |
| <a id="message"></a> `message` | `string` | src/core/conversation/conversation-message.schema.ts:27 |
| <a id="timestamp"></a> `timestamp` | `number` | src/core/conversation/conversation-message.schema.ts:28 |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | src/core/conversation/conversation-message.schema.ts:29 |
| <a id="subject"></a> `subject` | `string` | src/core/conversation/conversation-message.schema.ts:40 |
| <a id="isemail"></a> `isEmail` | `true` | src/core/conversation/conversation-message.schema.ts:41 |
| <a id="message_type"></a> `message_type` | [`AGENT`](../enumerations/MessageType.md#agent) | src/core/conversation/conversation-message.schema.ts:91 |
