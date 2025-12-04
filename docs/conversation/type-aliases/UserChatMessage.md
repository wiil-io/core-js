[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / UserChatMessage

# Type Alias: UserChatMessage

```ts
type UserChatMessage = {
  conversation_config_id: string;
  message: string;
  timestamp: number;
  llm_conversation_id?: string | null;
  message_type: USER;
  user_message_id?: string | null;
  last_assistant_message_id?: string;
};
```

Defined in: [src/core/conversation/conversation-message.schema.ts:166](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L166)

User chat message schema.

Represents a message sent by a user/customer in a chat conversation. Contains user-specific
identifiers for message threading and links to the previous assistant message to maintain
conversation context and flow.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="conversation_config_id"></a> `conversation_config_id` | `string` | [src/core/conversation/conversation-message.schema.ts:41](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L41) |
| <a id="message"></a> `message` | `string` | [src/core/conversation/conversation-message.schema.ts:42](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L42) |
| <a id="timestamp"></a> `timestamp` | `number` | [src/core/conversation/conversation-message.schema.ts:43](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L43) |
| <a id="llm_conversation_id"></a> `llm_conversation_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:44](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L44) |
| <a id="message_type"></a> `message_type` | [`USER`](../enumerations/MessageType.md#user) | [src/core/conversation/conversation-message.schema.ts:90](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L90) |
| <a id="user_message_id"></a> `user_message_id?` | `string` \| `null` | [src/core/conversation/conversation-message.schema.ts:91](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L91) |
| <a id="last_assistant_message_id"></a> `last_assistant_message_id?` | `string` | [src/core/conversation/conversation-message.schema.ts:92](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/conversation/conversation-message.schema.ts#L92) |

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
