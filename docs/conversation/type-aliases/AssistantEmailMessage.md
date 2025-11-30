[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / AssistantEmailMessage

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

Defined in: [src/core/conversation/conversation-message.schema.ts:97](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L97)

Assistant email message schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:26](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L26) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:27](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L27) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:28](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L28) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:29](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L29) |
| <a id="subject"></a> `subject` | `string` | [src/core/conversation/conversation-message.schema.ts:40](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L40) |
| <a id="isemail"></a> `isEmail` | `true` | [src/core/conversation/conversation-message.schema.ts:41](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L41) |
| <a id="message_type"></a> `message_type` | [`AGENT`](../enumerations/MessageType.md#agent) | [src/core/conversation/conversation-message.schema.ts:91](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L91) |
