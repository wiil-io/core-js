[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

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
}, $strip>, ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  message_type: ZodDefault<ZodLiteral<HUMAN_AGENT>>;
  agent_message_id: ZodString;
  agent_session_id: ZodString;
  last_user_message_id: ZodOptional<ZodString>;
}, $strip>, ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  subject: ZodString;
  isEmail: ZodDefault<ZodLiteral<true>>;
  message_type: ZodDefault<ZodLiteral<HUMAN_AGENT>>;
  agent_session_id: ZodString;
}, $strip>, ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
  message_type: ZodDefault<ZodLiteral<SYSTEM>>;
  system_message_id: ZodString;
  event_type: ZodEnum<typeof SystemMessageEventType>;
  metadata: ZodOptional<ZodRecord<ZodString, ZodUnknown>>;
}, $strip>]>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:161](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/conversation/conversation-config.schema.ts#L161)

Union of all conversation message types.

Discriminated union supporting user, AI agent, human agent, and system messages
for both chat and email channels.
