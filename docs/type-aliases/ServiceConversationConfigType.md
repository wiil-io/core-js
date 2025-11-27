[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ServiceConversationConfigType

# Type Alias: ServiceConversationConfigType

```ts
type ServiceConversationConfigType = {
  channel_id: string;
  organization_id: string;
  project_id: string;
  deployment_config_id: string;
  channel_identifier: string;
  instruction_config_id?: string | null;
  partner_user_id?: string;
  conversation_type: ServiceConversationType;
  model_id?: string;
  user_id?: number;
  created_at: number;
  messages?:   | (
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     message_type: USER;
     user_message_id?: string | null;
     last_assistant_message_id?: string;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     message_type: AGENT;
     assistant_message_id: string;
     last_user_message_id?: string;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     subject: string;
     isEmail: true;
     message_type: USER;
     provider_message_id?: string | null;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     subject: string;
     isEmail: true;
     message_type: AGENT;
   })[]
     | null;
  is_campaign: boolean;
  customer_id?: string | null;
  status?:   | PENDING
     | STARTED
     | ACTIVE
     | PAUSED
     | ENDED
     | SUMMARIZED
     | UPDATED_SUMMARIZED
     | null;
  durationInSeconds: number;
  stt_model_id?: string | null;
  tts_model_id?: string | null;
  conversationSummary?:   | {
     summary: string;
     key_points: string[];
     action_items: string[];
     sentiment: ConversationSummarySentiment;
   }
     | null;
  created_day?: string;
  state_history?:   | {
     status: ConversationStatus;
     timestamp: number;
     reason?: string;
     metadata?: Record<string, any>;
   }[]
     | null;
  updated_at?: number | null;
  deleted_at?: number | null;
  id: string;
  record_id?: string | null;
  provider_message_id?: string | null;
  direction?:   | INBOUND
     | OUTBOUND
     | null;
  resource_url?: string | null;
  call_transfer?:   | {
     transfer_type?: "blind" | "warm" | null;
     transfer_target: string;
     transfer_initiated_at?: number;
     transfer_completed_at?: number;
     transfer_status: "pending" | "completed" | "failed" | "returned";
     transfer_reason?: string;
   }
     | null;
};
```

Defined in: src/core/conversation/conversation-config.schema.ts:189

Service conversation configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel_id"></a> `channel_id` | `string` | src/core/conversation/conversation-config.schema.ts:113 |
| <a id="organization_id"></a> `organization_id` | `string` | src/core/conversation/conversation-config.schema.ts:114 |
| <a id="project_id"></a> `project_id` | `string` | src/core/conversation/conversation-config.schema.ts:115 |
| <a id="deployment_config_id"></a> `deployment_config_id` | `string` | src/core/conversation/conversation-config.schema.ts:116 |
| <a id="channel_identifier"></a> `channel_identifier` | `string` | src/core/conversation/conversation-config.schema.ts:117 |
| <a id="instruction_config_id"></a> `instruction_config_id?` | `string` \| `null` | src/core/conversation/conversation-config.schema.ts:118 |
| <a id="partner_user_id"></a> `partner_user_id?` | `string` | src/core/conversation/conversation-config.schema.ts:119 |
| <a id="conversation_type"></a> `conversation_type` | [`ServiceConversationType`](../enumerations/ServiceConversationType.md) | src/core/conversation/conversation-config.schema.ts:120 |
| <a id="model_id"></a> `model_id?` | `string` | src/core/conversation/conversation-config.schema.ts:121 |
| <a id="user_id"></a> `user_id?` | `number` | src/core/conversation/conversation-config.schema.ts:122 |
| <a id="created_at"></a> `created_at` | `number` | src/core/conversation/conversation-config.schema.ts:123 |
| <a id="messages"></a> `messages?` | \| ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \})[] \| `null` | src/core/conversation/conversation-config.schema.ts:124 |
| <a id="is_campaign"></a> `is_campaign` | `boolean` | src/core/conversation/conversation-config.schema.ts:125 |
| <a id="customer_id"></a> `customer_id?` | `string` \| `null` | src/core/conversation/conversation-config.schema.ts:126 |
| <a id="status"></a> `status?` | \| [`PENDING`](../enumerations/ConversationStatus.md#pending) \| [`STARTED`](../enumerations/ConversationStatus.md#started) \| [`ACTIVE`](../enumerations/ConversationStatus.md#active) \| [`PAUSED`](../enumerations/ConversationStatus.md#paused) \| [`ENDED`](../enumerations/ConversationStatus.md#ended) \| [`SUMMARIZED`](../enumerations/ConversationStatus.md#summarized) \| [`UPDATED_SUMMARIZED`](../enumerations/ConversationStatus.md#updated_summarized) \| `null` | src/core/conversation/conversation-config.schema.ts:127 |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | src/core/conversation/conversation-config.schema.ts:128 |
| <a id="stt_model_id"></a> `stt_model_id?` | `string` \| `null` | src/core/conversation/conversation-config.schema.ts:129 |
| <a id="tts_model_id"></a> `tts_model_id?` | `string` \| `null` | src/core/conversation/conversation-config.schema.ts:130 |
| <a id="conversationsummary"></a> `conversationSummary?` | \| \{ `summary`: `string`; `key_points`: `string`[]; `action_items`: `string`[]; `sentiment`: [`ConversationSummarySentiment`](../enumerations/ConversationSummarySentiment.md); \} \| `null` | src/core/conversation/conversation-config.schema.ts:131 |
| <a id="created_day"></a> `created_day?` | `string` | src/core/conversation/conversation-config.schema.ts:132 |
| <a id="state_history"></a> `state_history?` | \| \{ `status`: [`ConversationStatus`](../enumerations/ConversationStatus.md); `timestamp`: `number`; `reason?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; \}[] \| `null` | src/core/conversation/conversation-config.schema.ts:133 |
| <a id="updated_at"></a> `updated_at?` | `number` \| `null` | src/core/conversation/conversation-config.schema.ts:134 |
| <a id="deleted_at"></a> `deleted_at?` | `number` \| `null` | src/core/conversation/conversation-config.schema.ts:135 |
| <a id="id"></a> `id` | `string` | src/core/conversation/conversation-config.schema.ts:170 |
| <a id="record_id"></a> `record_id?` | `string` \| `null` | src/core/conversation/conversation-config.schema.ts:171 |
| <a id="provider_message_id"></a> `provider_message_id?` | `string` \| `null` | src/core/conversation/conversation-config.schema.ts:172 |
| <a id="direction"></a> `direction?` | \| [`INBOUND`](../enumerations/ConversationDirection.md#inbound) \| [`OUTBOUND`](../enumerations/ConversationDirection.md#outbound) \| `null` | src/core/conversation/conversation-config.schema.ts:173 |
| <a id="resource_url"></a> `resource_url?` | `string` \| `null` | src/core/conversation/conversation-config.schema.ts:174 |
| <a id="call_transfer"></a> `call_transfer?` | \| \{ `transfer_type?`: `"blind"` \| `"warm"` \| `null`; `transfer_target`: `string`; `transfer_initiated_at?`: `number`; `transfer_completed_at?`: `number`; `transfer_status`: `"pending"` \| `"completed"` \| `"failed"` \| `"returned"`; `transfer_reason?`: `string`; \} \| `null` | src/core/conversation/conversation-config.schema.ts:175 |
