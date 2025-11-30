[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationMessageSchema

# Variable: ConversationMessageSchema

```ts
const ConversationMessageSchema: ZodUnion<readonly [ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  message_type: ZodDefault<ZodLiteral<USER>>;
  user_message_id: ZodNullable<ZodOptional<ZodString>>;
  last_assistant_message_id: ZodOptional<ZodString>;
}, $strip>, ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  message_type: ZodDefault<ZodLiteral<AGENT>>;
  assistant_message_id: ZodString;
  last_user_message_id: ZodOptional<ZodString>;
}, $strip>, ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  subject: ZodString;
  isEmail: ZodDefault<ZodLiteral<true>>;
  message_type: ZodDefault<ZodLiteral<USER>>;
  provider_message_id: ZodNullable<ZodOptional<ZodString>>;
}, $strip>, ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  subject: ZodString;
  isEmail: ZodDefault<ZodLiteral<true>>;
  message_type: ZodDefault<ZodLiteral<AGENT>>;
}, $strip>]>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/conversation/conversation-config.schema.ts#L61)

Union of all conversation message types.
