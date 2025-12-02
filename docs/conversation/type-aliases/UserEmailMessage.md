[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

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

Defined in: [src/core/conversation/conversation-message.schema.ts:168](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L168)

User email message schema.

Represents an email message sent by a user/customer. Extends base email schema with user-specific
fields and optional provider message ID for integration with external email services (Gmail, Outlook, etc.).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:41](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L41) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:42](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L42) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:43](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L43) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:44](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L44) |
| <a id="subject"></a> `subject` | `string` | [src/core/conversation/conversation-message.schema.ts:66](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L66) |
| <a id="isemail"></a> `isEmail` | `true` | [src/core/conversation/conversation-message.schema.ts:67](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L67) |
| <a id="message_type"></a> `message_type` | [`USER`](../enumerations/MessageType.md#user) | [src/core/conversation/conversation-message.schema.ts:139](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L139) |
| <a id="provider_message_id"></a> `provider_message_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:140](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/conversation/conversation-message.schema.ts#L140) |

## Remarks

**Architecture Context:**
- **Extends**: BaseEmailMessageSchema with user-specific fields
- **Message Type**: Always 'user' (MessageType.USER)
- **Channel**: Used exclusively for EMAIL conversation type
- **Provider Integration**: Links to external email service message IDs

**Email Integration:**
- provider_message_id enables tracking emails across platforms
- Supports Gmail API, Outlook Graph API, SendGrid, etc.
- Used for reply-to threading and email service synchronization
