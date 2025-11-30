[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UserEmailMessage

# Type Alias: UserEmailMessage

```ts
type UserEmailMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  subject: string;
  isEmail: true;
  message_type: USER;
  provider_message_id?: string | null;
};
```

Defined in: [src/core/conversation/conversation-message.schema.ts:96](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L96)

User email message schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:26](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L26) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:27](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L27) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:28](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L28) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:29](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L29) |
| <a id="subject"></a> `subject` | `string` | [src/core/conversation/conversation-message.schema.ts:40](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L40) |
| <a id="isemail"></a> `isEmail` | `true` | [src/core/conversation/conversation-message.schema.ts:41](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L41) |
| <a id="message_type"></a> `message_type` | [`USER`](../enumerations/MessageType.md#user) | [src/core/conversation/conversation-message.schema.ts:80](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L80) |
| <a id="provider_message_id"></a> `provider_message_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:81](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-message.schema.ts#L81) |
