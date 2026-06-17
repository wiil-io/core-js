[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ServiceConversationConfigType

# Type Alias: ServiceConversationConfigType

```ts
type ServiceConversationConfigType = {
  channel_id: string;
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
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     message_type: HUMAN_AGENT;
     agent_message_id: string;
     agent_session_id: string;
     last_user_message_id?: string;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     subject: string;
     isEmail: true;
     message_type: HUMAN_AGENT;
     agent_session_id: string;
   }
     | {
     conversation_config_id: string;
     message: string;
     timestamp: number;
     llm_conversation_id?: string | null;
     message_type: SYSTEM;
     system_message_id: string;
     event_type: SystemMessageEventType;
     metadata?: Record<string, unknown>;
   })[]
     | null;
  is_campaign: boolean;
  customer_id?: string | null;
  location_id?: string | null;
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
  is_test_conversation: boolean;
  conversation_context?:   | {
     message?: string;
     productId?: string;
     menuItemId?: string;
     serviceId?: string;
     propertyId?: string;
     resourceId?: string;
     requiredServiceId?: string;
     locationId?: string;
   }
     | null;
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

Defined in: [src/core/conversation/conversation-config.schema.ts:415](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L415)

Service conversation configuration schema.

Complete conversation record extending base configuration with conversation-specific identifiers,
provider metadata, call direction, recording URLs, and transfer details. This is the primary
schema used for storing and retrieving conversation records in the system.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel_id"></a> `channel_id` | `string` | [src/core/conversation/conversation-config.schema.ts:251](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L251) |
| <a id="project_id"></a> `project_id` | `string` | [src/core/conversation/conversation-config.schema.ts:252](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L252) |
| <a id="deployment_config_id"></a> `deployment_config_id` | `string` | [src/core/conversation/conversation-config.schema.ts:253](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L253) |
| <a id="channel_identifier"></a> `channel_identifier` | `string` | [src/core/conversation/conversation-config.schema.ts:254](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L254) |
| <a id="instruction_config_id"></a> `instruction_config_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:255](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L255) |
| <a id="partner_user_id"></a> `partner_user_id?` | `string` | [src/core/conversation/conversation-config.schema.ts:256](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L256) |
| <a id="conversation_type"></a> `conversation_type` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md) | [src/core/conversation/conversation-config.schema.ts:257](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L257) |
| <a id="model_id"></a> `model_id?` | `string` | [src/core/conversation/conversation-config.schema.ts:258](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L258) |
| <a id="user_id"></a> `user_id?` | `number` | [src/core/conversation/conversation-config.schema.ts:259](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L259) |
| <a id="created_at"></a> `created_at` | `number` | [src/core/conversation/conversation-config.schema.ts:260](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L260) |
| <a id="messages"></a> `messages?` | \| ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`HUMAN_AGENT`](../enumerations/MessageType.md#human_agent); `agent_message_id`: `string`; `agent_session_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`HUMAN_AGENT`](../enumerations/MessageType.md#human_agent); `agent_session_id`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`SYSTEM`](../enumerations/MessageType.md#system); `system_message_id`: `string`; `event_type`: [`SystemMessageEventType`](../enumerations/SystemMessageEventType.md); `metadata?`: `Record`\<`string`, `unknown`\>; \})[] \| `null` | [src/core/conversation/conversation-config.schema.ts:261](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L261) |
| <a id="is_campaign"></a> `is_campaign` | `boolean` | [src/core/conversation/conversation-config.schema.ts:262](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L262) |
| <a id="customer_id"></a> `customer_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:263](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L263) |
| <a id="location_id"></a> `location_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:264](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L264) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/ConversationStatus.md#pending) \| [`STARTED`](../../type-definitions/enumerations/ConversationStatus.md#started) \| [`ACTIVE`](../../type-definitions/enumerations/ConversationStatus.md#active) \| [`PAUSED`](../../type-definitions/enumerations/ConversationStatus.md#paused) \| [`ENDED`](../../type-definitions/enumerations/ConversationStatus.md#ended) \| [`SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#summarized) \| [`UPDATED_SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#updated_summarized) \| `null` | [src/core/conversation/conversation-config.schema.ts:265](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L265) |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | [src/core/conversation/conversation-config.schema.ts:266](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L266) |
| <a id="stt_model_id"></a> `stt_model_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:267](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L267) |
| <a id="tts_model_id"></a> `tts_model_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:268](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L268) |
| <a id="conversationsummary"></a> `conversationSummary?` | \| \{ `summary`: `string`; `key_points`: `string`[]; `action_items`: `string`[]; `sentiment`: [`ConversationSummarySentiment`](../../type-definitions/enumerations/ConversationSummarySentiment.md); \} \| `null` | [src/core/conversation/conversation-config.schema.ts:269](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L269) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/conversation-config.schema.ts:270](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L270) |
| <a id="state_history"></a> `state_history?` | \| \{ `status`: [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md); `timestamp`: `number`; `reason?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; \}[] \| `null` | [src/core/conversation/conversation-config.schema.ts:271](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L271) |
| <a id="updated_at"></a> `updated_at?` | `number` \| `null` | [src/core/conversation/conversation-config.schema.ts:272](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L272) |
| <a id="deleted_at"></a> `deleted_at?` | `number` \| `null` | [src/core/conversation/conversation-config.schema.ts:273](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L273) |
| <a id="is_test_conversation"></a> `is_test_conversation` | `boolean` | [src/core/conversation/conversation-config.schema.ts:274](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L274) |
| <a id="conversation_context"></a> `conversation_context?` | \| \{ `message?`: `string`; `productId?`: `string`; `menuItemId?`: `string`; `serviceId?`: `string`; `propertyId?`: `string`; `resourceId?`: `string`; `requiredServiceId?`: `string`; `locationId?`: `string`; \} \| `null` | [src/core/conversation/conversation-config.schema.ts:275](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L275) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/conversation-config.schema.ts:332](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L332) |
| <a id="record_id"></a> `record_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:333](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L333) |
| <a id="provider_message_id"></a> `provider_message_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:334](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L334) |
| <a id="direction"></a> `direction?` | \| [`INBOUND`](../../type-definitions/enumerations/ConversationDirection.md#inbound) \| [`OUTBOUND`](../../type-definitions/enumerations/ConversationDirection.md#outbound) \| `null` | [src/core/conversation/conversation-config.schema.ts:335](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L335) |
| <a id="resource_url"></a> `resource_url?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:336](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L336) |
| <a id="call_transfer"></a> `call_transfer?` | \| \{ `transfer_type?`: `"blind"` \| `"warm"` \| `null`; `transfer_target`: `string`; `transfer_initiated_at?`: `number`; `transfer_completed_at?`: `number`; `transfer_status`: `"pending"` \| `"completed"` \| `"failed"` \| `"returned"`; `transfer_reason?`: `string`; \} \| `null` | [src/core/conversation/conversation-config.schema.ts:337](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-config.schema.ts#L337) |

## Remarks

**Architecture Context:**
- **Extends**: BaseConversationConfigSchema with conversation-specific fields
- **Storage**: Primary conversation entity in database with unique id
- **Provider Integration**: Tracks external provider IDs for email services, telephony platforms
- **Call Recordings**: resource_url links to call recording storage for compliance and quality assurance

**Use Cases:**
- Creating new conversations for inbound/outbound interactions
- Retrieving conversation history with full message arrays
- Analyzing call recordings and transfer patterns
- Integrating with external email providers (Gmail, Outlook, etc.)
