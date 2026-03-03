[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UserChatMessageSchema

# Variable: UserChatMessageSchema

```ts
const UserChatMessageSchema: ZodObject<UserChatMessage>;
```

Defined in: [src/core/conversation/conversation-message.schema.ts:89](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/conversation/conversation-message.schema.ts#L89)

User chat message schema.

Represents a message sent by a user/customer in a chat conversation. Contains user-specific
identifiers for message threading and links to the previous assistant message to maintain
conversation context and flow.

## Remarks

**Architecture Context:**
- **Extends**: BaseChatMessageSchema with user-specific fields
- **Message Type**: Always 'user' (MessageType.USER)
- **Threading**: Links to previous assistant message via last_assistant_message_id
- **Flow**: User message → Agent processes → AssistantChatMessage generated

**Message Threading:**
- user_message_id: Unique identifier for this user message
- last_assistant_message_id: References the assistant's previous message being responded to
- Enables tracking conversation turns and maintaining context
