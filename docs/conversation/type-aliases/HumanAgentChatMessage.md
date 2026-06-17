[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / HumanAgentChatMessage

# Type Alias: HumanAgentChatMessage

```ts
type HumanAgentChatMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  message_type: HUMAN_AGENT;
  agent_message_id: string;
  agent_session_id: string;
  last_user_message_id?: string;
};
```

Defined in: [src/core/conversation/conversation-message.schema.ts:291](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L291)

Human agent chat message schema.

Represents a message sent by a human support agent in a chat conversation.
Used when conversations are handed over from AI to live agents for complex
issue resolution or customer preference.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:73](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L73) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:74](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L74) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:75](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L75) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:76](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L76) |
| <a id="message_type"></a> `message_type` | [`HUMAN_AGENT`](../enumerations/MessageType.md#human_agent) | [src/core/conversation/conversation-message.schema.ts:223](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L223) |
| <a id="agent_message_id"></a> `agent_message_id` | `string` | [src/core/conversation/conversation-message.schema.ts:224](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L224) |
| <a id="agent_session_id"></a> `agent_session_id` | `string` | [src/core/conversation/conversation-message.schema.ts:225](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L225) |
| <a id="last_user_message_id"></a> `last_user_message_id?` | `string` | [src/core/conversation/conversation-message.schema.ts:226](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/conversation/conversation-message.schema.ts#L226) |

## Remarks

**Architecture Context:**
- **Extends**: BaseChatMessageSchema with human agent-specific fields
- **Message Type**: Always 'human_agent' (MessageType.HUMAN_AGENT)
- **Triggered By**: Handover from AI agent or direct human agent assignment
- **Session Tracking**: agent_session_id links to workforce management system
