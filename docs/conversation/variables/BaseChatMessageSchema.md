[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / BaseChatMessageSchema

# Variable: BaseChatMessageSchema

```ts
const BaseChatMessageSchema: ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
}, $strip>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:40](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/conversation/conversation-message.schema.ts#L40)

Base chat message schema.

Foundation schema for all chat-based messages containing core fields shared by both user and
assistant messages. Extended by UserChatMessageSchema and AssistantChatMessageSchema with
role-specific identifiers for message threading and conversation flow tracking.

## Remarks

**Architecture Context:**
- **Extended By**: UserChatMessageSchema, AssistantChatMessageSchema for role-specific messages
- **Relationship**: N:1 - Multiple messages belong to one conversation (via conversation_config_id)
- **Storage**: Stored in conversation message arrays and separate message collections
- **LLM Context**: llm_conversation_id enables multi-turn context tracking with LLM providers

**Message Flow:**
- User sends message → UserChatMessage created → Agent processes → AssistantChatMessage generated
- Messages linked via user_message_id and assistant_message_id for threading
