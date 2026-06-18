[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / HumanAgentEmailMessage

# Type Alias: HumanAgentEmailMessage

```ts
type HumanAgentEmailMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  subject: string;
  isEmail: true;
  message_type: HUMAN_AGENT;
  agent_session_id: string;
};
```

Defined in: [src/core/conversation/conversation-message.schema.ts:292](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L292)

Human agent email message schema.

Represents an email message sent by a human support agent. Used when email
conversations require human intervention for complex issues, escalations,
or sensitive customer interactions.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:73](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L73) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:74](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L74) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:75](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L75) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:76](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L76) |
| <a id="subject"></a> `subject` | `string` | [src/core/conversation/conversation-message.schema.ts:98](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L98) |
| <a id="isemail"></a> `isEmail` | `true` | [src/core/conversation/conversation-message.schema.ts:99](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L99) |
| <a id="message_type"></a> `message_type` | [`HUMAN_AGENT`](../enumerations/MessageType.md#human_agent) | [src/core/conversation/conversation-message.schema.ts:248](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L248) |
| <a id="agent_session_id"></a> `agent_session_id` | `string` | [src/core/conversation/conversation-message.schema.ts:249](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/conversation-message.schema.ts#L249) |

## Remarks

**Architecture Context:**
- **Extends**: BaseEmailMessageSchema with human agent-specific fields
- **Message Type**: Always 'human_agent' (MessageType.HUMAN_AGENT)
- **Channel**: Used exclusively for EMAIL conversation type
- **Session Tracking**: agent_session_id links to workforce management system
