[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.77**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UserEmailMessageSchema

# Variable: UserEmailMessageSchema

```ts
const UserEmailMessageSchema: ZodObject<UserEmailMessage>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:170](https://github.com/wiil-io/core-js/blob/dbdfb645457e4fab159a4c3d5050b1d2afe779c3/src/core/conversation/conversation-message.schema.ts#L170)

User email message schema.

Represents an email message sent by a user/customer. Extends base email schema with user-specific
fields and optional provider message ID for integration with external email services (Gmail, Outlook, etc.).

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
