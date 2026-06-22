[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / HumanAgentChatMessageSchema

# Variable: HumanAgentChatMessageSchema

```ts
const HumanAgentChatMessageSchema: ZodObject<HumanAgentChatMessage>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:222](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-message.schema.ts#L222)

Human agent chat message schema.

Represents a message sent by a human support agent in a chat conversation.
Used when conversations are handed over from AI to live agents for complex
issue resolution or customer preference.

## Remarks

**Architecture Context:**
- **Extends**: BaseChatMessageSchema with human agent-specific fields
- **Message Type**: Always 'human_agent' (MessageType.HUMAN_AGENT)
- **Triggered By**: Handover from AI agent or direct human agent assignment
- **Session Tracking**: agent_session_id links to workforce management system
