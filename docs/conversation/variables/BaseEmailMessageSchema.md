[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.9**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / BaseEmailMessageSchema

# Variable: BaseEmailMessageSchema

```ts
const BaseEmailMessageSchema: ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  subject: ZodString;
  isEmail: ZodDefault<ZodLiteral<true>>;
}, $strip>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:65](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/conversation/conversation-message.schema.ts#L65)

Base email message schema extending chat message with email-specific fields.

Extends BaseChatMessageSchema with email-specific attributes including subject line and email
identifier flag. Used as foundation for user and assistant email messages in email-based
conversation channels.

## Remarks

**Architecture Context:**
- **Extends**: BaseChatMessageSchema with email-specific fields
- **Extended By**: UserEmailMessageSchema, AssistantEmailMessageSchema
- **Channel**: Used exclusively for EMAIL conversation type
- **Threading**: Subject line enables email thread grouping and conversation continuity

**Email Features:**
- Subject line for email clients and threading
- isEmail flag distinguishes email messages from chat messages in unified message stores
