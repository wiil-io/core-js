[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / HumanAgentEmailMessageSchema

# Variable: HumanAgentEmailMessageSchema

```ts
const HumanAgentEmailMessageSchema: ZodObject<HumanAgentEmailMessage>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:247](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/conversation/conversation-message.schema.ts#L247)

Human agent email message schema.

Represents an email message sent by a human support agent. Used when email
conversations require human intervention for complex issues, escalations,
or sensitive customer interactions.

## Remarks

**Architecture Context:**
- **Extends**: BaseEmailMessageSchema with human agent-specific fields
- **Message Type**: Always 'human_agent' (MessageType.HUMAN_AGENT)
- **Channel**: Used exclusively for EMAIL conversation type
- **Session Tracking**: agent_session_id links to workforce management system
