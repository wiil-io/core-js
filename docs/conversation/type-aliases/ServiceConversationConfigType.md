[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ServiceConversationConfigType

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

Defined in: [src/core/conversation/conversation-config.schema.ts:189](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L189)

Service conversation configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel_id"></a> `channel_id` | `string` | [src/core/conversation/conversation-config.schema.ts:113](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L113) |
| <a id="organization_id"></a> `organization_id` | `string` | [src/core/conversation/conversation-config.schema.ts:114](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L114) |
| <a id="project_id"></a> `project_id` | `string` | [src/core/conversation/conversation-config.schema.ts:115](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L115) |
| <a id="deployment_config_id"></a> `deployment_config_id` | `string` | [src/core/conversation/conversation-config.schema.ts:116](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L116) |
| <a id="channel_identifier"></a> `channel_identifier` | `string` | [src/core/conversation/conversation-config.schema.ts:117](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L117) |
| <a id="instruction_config_id"></a> `instruction_config_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:118](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L118) |
| <a id="partner_user_id"></a> `partner_user_id?` | `string` | [src/core/conversation/conversation-config.schema.ts:119](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L119) |
| <a id="conversation_type"></a> `conversation_type` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md) | [src/core/conversation/conversation-config.schema.ts:120](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L120) |
| <a id="model_id"></a> `model_id?` | `string` | [src/core/conversation/conversation-config.schema.ts:121](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L121) |
| <a id="user_id"></a> `user_id?` | `number` | [src/core/conversation/conversation-config.schema.ts:122](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L122) |
| <a id="created_at"></a> `created_at` | `number` | [src/core/conversation/conversation-config.schema.ts:123](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L123) |
| <a id="messages"></a> `messages?` | \| ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \})[] \| `null` | [src/core/conversation/conversation-config.schema.ts:124](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L124) |
| <a id="is_campaign"></a> `is_campaign` | `boolean` | [src/core/conversation/conversation-config.schema.ts:125](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L125) |
| <a id="customer_id"></a> `customer_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:126](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L126) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/ConversationStatus.md#pending) \| [`STARTED`](../../type-definitions/enumerations/ConversationStatus.md#started) \| [`ACTIVE`](../../type-definitions/enumerations/ConversationStatus.md#active) \| [`PAUSED`](../../type-definitions/enumerations/ConversationStatus.md#paused) \| [`ENDED`](../../type-definitions/enumerations/ConversationStatus.md#ended) \| [`SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#summarized) \| [`UPDATED_SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#updated_summarized) \| `null` | [src/core/conversation/conversation-config.schema.ts:127](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L127) |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | [src/core/conversation/conversation-config.schema.ts:128](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L128) |
| <a id="stt_model_id"></a> `stt_model_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:129](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L129) |
| <a id="tts_model_id"></a> `tts_model_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:130](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L130) |
| <a id="conversationsummary"></a> `conversationSummary?` | \| \{ `summary`: `string`; `key_points`: `string`[]; `action_items`: `string`[]; `sentiment`: [`ConversationSummarySentiment`](../../type-definitions/enumerations/ConversationSummarySentiment.md); \} \| `null` | [src/core/conversation/conversation-config.schema.ts:131](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L131) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/conversation-config.schema.ts:132](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L132) |
| <a id="state_history"></a> `state_history?` | \| \{ `status`: [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md); `timestamp`: `number`; `reason?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; \}[] \| `null` | [src/core/conversation/conversation-config.schema.ts:133](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L133) |
| <a id="updated_at"></a> `updated_at?` | `number` \| `null` | [src/core/conversation/conversation-config.schema.ts:134](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L134) |
| <a id="deleted_at"></a> `deleted_at?` | `number` \| `null` | [src/core/conversation/conversation-config.schema.ts:135](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L135) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/conversation-config.schema.ts:170](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L170) |
| <a id="record_id"></a> `record_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:171](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L171) |
| <a id="provider_message_id"></a> `provider_message_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:172](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L172) |
| <a id="direction"></a> `direction?` | \| [`INBOUND`](../enumerations/ConversationDirection.md#inbound) \| [`OUTBOUND`](../enumerations/ConversationDirection.md#outbound) \| `null` | [src/core/conversation/conversation-config.schema.ts:173](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L173) |
| <a id="resource_url"></a> `resource_url?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:174](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L174) |
| <a id="call_transfer"></a> `call_transfer?` | \| \{ `transfer_type?`: `"blind"` \| `"warm"` \| `null`; `transfer_target`: `string`; `transfer_initiated_at?`: `number`; `transfer_completed_at?`: `number`; `transfer_status`: `"pending"` \| `"completed"` \| `"failed"` \| `"returned"`; `transfer_reason?`: `string`; \} \| `null` | [src/core/conversation/conversation-config.schema.ts:175](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L175) |
