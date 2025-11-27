[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / BaseEmailMessageSchema

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

Defined in: src/core/conversation/conversation-message.schema.ts:39

Base email message schema extending chat message with email-specific fields.
