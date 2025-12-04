[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.19**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:283](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L283)

Service conversation configuration schema.

Complete conversation record extending base configuration with conversation-specific identifiers,
provider metadata, call direction, recording URLs, and transfer details. This is the primary
schema used for storing and retrieving conversation records in the system.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="channel_id"></a> `channel_id` | `string` | [src/core/conversation/conversation-config.schema.ts:173](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L173) |
| <a id="organization_id"></a> `organization_id` | `string` | [src/core/conversation/conversation-config.schema.ts:174](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L174) |
| <a id="project_id"></a> `project_id` | `string` | [src/core/conversation/conversation-config.schema.ts:175](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L175) |
| <a id="deployment_config_id"></a> `deployment_config_id` | `string` | [src/core/conversation/conversation-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L176) |
| <a id="channel_identifier"></a> `channel_identifier` | `string` | [src/core/conversation/conversation-config.schema.ts:177](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L177) |
| <a id="instruction_config_id"></a> `instruction_config_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:178](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L178) |
| <a id="partner_user_id"></a> `partner_user_id?` | `string` | [src/core/conversation/conversation-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L179) |
| <a id="conversation_type"></a> `conversation_type` | [`ServiceConversationType`](../../type-definitions/enumerations/ServiceConversationType.md) | [src/core/conversation/conversation-config.schema.ts:180](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L180) |
| <a id="model_id"></a> `model_id?` | `string` | [src/core/conversation/conversation-config.schema.ts:181](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L181) |
| <a id="user_id"></a> `user_id?` | `number` | [src/core/conversation/conversation-config.schema.ts:182](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L182) |
| <a id="created_at"></a> `created_at` | `number` | [src/core/conversation/conversation-config.schema.ts:183](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L183) |
| <a id="messages"></a> `messages?` | \| ( \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `user_message_id?`: `string` \| `null`; `last_assistant_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); `assistant_message_id`: `string`; `last_user_message_id?`: `string`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`USER`](../enumerations/MessageType.md#user); `provider_message_id?`: `string` \| `null`; \} \| \{ `conversation_config_id`: `string`; `message`: `string`; `timestamp`: `number`; `llm_conversation_id?`: `string` \| `null`; `subject`: `string`; `isEmail`: `true`; `message_type`: [`AGENT`](../enumerations/MessageType.md#agent); \})[] \| `null` | [src/core/conversation/conversation-config.schema.ts:184](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L184) |
| <a id="is_campaign"></a> `is_campaign` | `boolean` | [src/core/conversation/conversation-config.schema.ts:185](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L185) |
| <a id="customer_id"></a> `customer_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:186](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L186) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/ConversationStatus.md#pending) \| [`STARTED`](../../type-definitions/enumerations/ConversationStatus.md#started) \| [`ACTIVE`](../../type-definitions/enumerations/ConversationStatus.md#active) \| [`PAUSED`](../../type-definitions/enumerations/ConversationStatus.md#paused) \| [`ENDED`](../../type-definitions/enumerations/ConversationStatus.md#ended) \| [`SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#summarized) \| [`UPDATED_SUMMARIZED`](../../type-definitions/enumerations/ConversationStatus.md#updated_summarized) \| `null` | [src/core/conversation/conversation-config.schema.ts:187](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L187) |
| <a id="durationinseconds"></a> `durationInSeconds` | `number` | [src/core/conversation/conversation-config.schema.ts:188](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L188) |
| <a id="stt_model_id"></a> `stt_model_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:189](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L189) |
| <a id="tts_model_id"></a> `tts_model_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:190](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L190) |
| <a id="conversationsummary"></a> `conversationSummary?` | \| \{ `summary`: `string`; `key_points`: `string`[]; `action_items`: `string`[]; `sentiment`: [`ConversationSummarySentiment`](../../type-definitions/enumerations/ConversationSummarySentiment.md); \} \| `null` | [src/core/conversation/conversation-config.schema.ts:191](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L191) |
| <a id="created_day"></a> `created_day?` | `string` | [src/core/conversation/conversation-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L192) |
| <a id="state_history"></a> `state_history?` | \| \{ `status`: [`ConversationStatus`](../../type-definitions/enumerations/ConversationStatus.md); `timestamp`: `number`; `reason?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; \}[] \| `null` | [src/core/conversation/conversation-config.schema.ts:193](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L193) |
| <a id="updated_at"></a> `updated_at?` | `number` \| `null` | [src/core/conversation/conversation-config.schema.ts:194](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L194) |
| <a id="deleted_at"></a> `deleted_at?` | `number` \| `null` | [src/core/conversation/conversation-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L195) |
| <a id="id"></a> `id` | `string` | [src/core/conversation/conversation-config.schema.ts:252](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L252) |
| <a id="record_id"></a> `record_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:253](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L253) |
| <a id="provider_message_id"></a> `provider_message_id?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:254](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L254) |
| <a id="direction"></a> `direction?` | \| [`INBOUND`](../enumerations/ConversationDirection.md#inbound) \| [`OUTBOUND`](../enumerations/ConversationDirection.md#outbound) \| `null` | [src/core/conversation/conversation-config.schema.ts:255](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L255) |
| <a id="resource_url"></a> `resource_url?` | `string` \| `null` | [src/core/conversation/conversation-config.schema.ts:256](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L256) |
| <a id="call_transfer"></a> `call_transfer?` | \| \{ `transfer_type?`: `"blind"` \| `"warm"` \| `null`; `transfer_target`: `string`; `transfer_initiated_at?`: `number`; `transfer_completed_at?`: `number`; `transfer_status`: `"pending"` \| `"completed"` \| `"failed"` \| `"returned"`; `transfer_reason?`: `string`; \} \| `null` | [src/core/conversation/conversation-config.schema.ts:257](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/conversation/conversation-config.schema.ts#L257) |

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
