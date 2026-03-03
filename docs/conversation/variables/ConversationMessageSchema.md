[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:86](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/conversation/conversation-config.schema.ts#L86)

Union of all conversation message types.
