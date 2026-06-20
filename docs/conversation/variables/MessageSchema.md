[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / MessageSchema

# Variable: MessageSchema

```ts
const MessageSchema: ZodObject<Message>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/conversation/conversation-config.schema.ts#L77)

Message schema for conversation messages.

Lightweight message representation used within conversation configurations. Simplified version
compared to the full ConversationMessageSchema for efficient storage and retrieval in conversation
message arrays.

## Remarks

**Architecture Context:**
- **Used In**: Conversation message arrays for quick access
- **Relationship**: Simplified version of full message schemas (UserChatMessage, AssistantChatMessage, etc.)
- **Storage**: Embedded within conversation documents for fast message loading
