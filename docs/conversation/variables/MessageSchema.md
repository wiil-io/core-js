[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / MessageSchema

# Variable: MessageSchema

```ts
const MessageSchema: ZodObject<Message>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/conversation/conversation-config.schema.ts#L77)

Message schema for conversation messages.

Lightweight message representation used within conversation configurations. Simplified version
compared to the full ConversationMessageSchema for efficient storage and retrieval in conversation
message arrays.

## Remarks

**Architecture Context:**
- **Used In**: Conversation message arrays for quick access
- **Relationship**: Simplified version of full message schemas (UserChatMessage, AssistantChatMessage, etc.)
- **Storage**: Embedded within conversation documents for fast message loading
