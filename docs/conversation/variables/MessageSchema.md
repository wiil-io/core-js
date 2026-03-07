[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.45**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / MessageSchema

# Variable: MessageSchema

```ts
const MessageSchema: ZodObject<Message>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/conversation/conversation-config.schema.ts#L63)

Message schema for conversation messages.

Lightweight message representation used within conversation configurations. Simplified version
compared to the full ConversationMessageSchema for efficient storage and retrieval in conversation
message arrays.

## Remarks

**Architecture Context:**
- **Used In**: Conversation message arrays for quick access
- **Relationship**: Simplified version of full message schemas (UserChatMessage, AssistantChatMessage, etc.)
- **Storage**: Embedded within conversation documents for fast message loading
