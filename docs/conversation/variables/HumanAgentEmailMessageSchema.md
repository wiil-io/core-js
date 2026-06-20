[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / HumanAgentEmailMessageSchema

# Variable: HumanAgentEmailMessageSchema

```ts
const HumanAgentEmailMessageSchema: ZodObject<HumanAgentEmailMessage>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:247](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/conversation/conversation-message.schema.ts#L247)

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
