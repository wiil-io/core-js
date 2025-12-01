[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / BaseConversationConfigSchema

# Variable: BaseConversationConfigSchema

```ts
const BaseConversationConfigSchema: ZodObject<{
  channel_id: ZodString;
  organization_id: ZodString;
  project_id: ZodString;
  deployment_config_id: ZodString;
  channel_identifier: ZodString;
  instruction_config_id: ZodNullable<ZodOptional<ZodString>>;
  partner_user_id: ZodOptional<ZodString>;
  conversation_type: ZodEnum<typeof ServiceConversationType>;
  model_id: ZodOptional<ZodString>;
  user_id: ZodOptional<ZodNumber>;
  created_at: ZodDefault<ZodOptional<ZodNumber>>;
  messages: ZodNullable<ZodOptional<ZodArray<ZodUnion<readonly [ZodObject<{
     conversation_config_id: ZodString;
     message: ZodString;
     timestamp: ZodDefault<ZodNumber>;
     llm_conversation_id: ZodNullable<ZodOptional<...>>;
     message_type: ZodDefault<ZodLiteral<...>>;
     user_message_id: ZodNullable<ZodOptional<...>>;
     last_assistant_message_id: ZodOptional<ZodString>;
   }, $strip>, ZodObject<{
     conversation_config_id: ZodString;
     message: ZodString;
     timestamp: ZodDefault<ZodNumber>;
     llm_conversation_id: ZodNullable<ZodOptional<...>>;
     message_type: ZodDefault<ZodLiteral<...>>;
     assistant_message_id: ZodString;
     last_user_message_id: ZodOptional<ZodString>;
   }, $strip>, ZodObject<{
     conversation_config_id: ZodString;
     message: ZodString;
     timestamp: ZodDefault<ZodNumber>;
     llm_conversation_id: ZodNullable<ZodOptional<...>>;
     subject: ZodString;
     isEmail: ZodDefault<ZodLiteral<...>>;
     message_type: ZodDefault<ZodLiteral<...>>;
     provider_message_id: ZodNullable<ZodOptional<...>>;
   }, $strip>, ZodObject<{
     conversation_config_id: ZodString;
     message: ZodString;
     timestamp: ZodDefault<ZodNumber>;
     llm_conversation_id: ZodNullable<ZodOptional<...>>;
     subject: ZodString;
     isEmail: ZodDefault<ZodLiteral<...>>;
     message_type: ZodDefault<ZodLiteral<...>>;
  }, $strip>]>>>>;
  is_campaign: ZodDefault<ZodBoolean>;
  customer_id: ZodNullable<ZodOptional<ZodString>>;
  status: ZodOptional<ZodNullable<ZodEnum<typeof ConversationStatus>>>;
  durationInSeconds: ZodDefault<ZodOptional<ZodNumber>>;
  stt_model_id: ZodNullable<ZodOptional<ZodString>>;
  tts_model_id: ZodNullable<ZodOptional<ZodString>>;
  conversationSummary: ZodOptional<ZodNullable<ZodObject<{
     summary: ZodString;
     key_points: ZodArray<ZodString>;
     action_items: ZodArray<ZodString>;
     sentiment: ZodEnum<typeof ConversationSummarySentiment>;
  }, $strip>>>;
  created_day: ZodOptional<ZodString>;
  state_history: ZodOptional<ZodNullable<ZodArray<ZodObject<{
     status: ZodEnum<typeof ConversationStatus>;
     timestamp: ZodNumber;
     reason: ZodOptional<ZodString>;
     metadata: ZodOptional<ZodRecord<ZodString, ZodAny>>;
  }, $strip>>>>;
  updated_at: ZodNullable<ZodOptional<ZodNumber>>;
  deleted_at: ZodNullable<ZodOptional<ZodNumber>>;
}, $strip>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:172](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/conversation/conversation-config.schema.ts#L172)

Base conversation configuration schema.

Foundation schema for all conversation types capturing the essential attributes of an interaction session
between a user and an AI agent. Conversations link to deployment configurations, track message history,
monitor status progression, and collect voice processing metadata for telephony interactions.

## Remarks

**Architecture Context:**
- **Relationship to Deployments**: N:1 - Multiple conversations use one deployment configuration
- **Relationship to Projects**: N:1 - Conversations are scoped to projects for organizational grouping
- **Relationship to Channels**: N:1 - Multiple conversations occur through one channel
- **Extended By**: ServiceConversationConfigSchema adds conversation-specific fields (id, call transfer, etc.)
- **Storage**: Primary conversation record with embedded messages for performance

**Conversation Types:**
- **OTT_CHAT**: Over-the-top chat (web, mobile app messaging)
- **TELEPHONY_CALL**: Voice phone calls with STT/TTS processing
- **SMS**: Text message conversations
- **EMAIL**: Email-based interactions
- **WHATSAPP**: WhatsApp messaging conversations
