[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / SystemMessageSchema

# Variable: SystemMessageSchema

```ts
const SystemMessageSchema: ZodObject<SystemMessage>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:276](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/conversation/conversation-message.schema.ts#L276)

System message schema.

Represents system-generated messages for tracking conversation events such as
handovers, agent joins/leaves, and transfers. Not directly visible to users
but recorded for audit trails and conversation state tracking.

## Remarks

**Architecture Context:**
- **Extends**: BaseChatMessageSchema with system-specific fields
- **Message Type**: Always 'system' (MessageType.SYSTEM)
- **Purpose**: Audit trail, conversation state tracking, event logging
- **Visibility**: Typically hidden from end users, visible in admin dashboards
