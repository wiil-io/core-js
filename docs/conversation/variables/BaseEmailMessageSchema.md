[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

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

Defined in: [src/core/conversation/conversation-message.schema.ts:39](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L39)

Base email message schema extending chat message with email-specific fields.
