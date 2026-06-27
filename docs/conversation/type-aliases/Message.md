[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / Message

# Type Alias: Message

```ts
type Message = {
  id?: string;
  messageId: string;
  content: string;
  message_type: MessageType;
  timestamp: Date;
  metadata: Record<string, any>;
  created_at?: number;
};
```

Defined in: [src/core/conversation/conversation-config.schema.ts:87](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L87)

Message schema for conversation messages.

Lightweight message representation used within conversation configurations. Simplified version
compared to the full ConversationMessageSchema for efficient storage and retrieval in conversation
message arrays.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id?` | `string` | [src/core/conversation/conversation-config.schema.ts:78](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L78) |
| <a id="messageid"></a> `messageId` | `string` | [src/core/conversation/conversation-config.schema.ts:79](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L79) |
| <a id="content"></a> `content` | `string` | [src/core/conversation/conversation-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L80) |
| <a id="message_type"></a> `message_type` | [`MessageType`](../enumerations/MessageType.md) | [src/core/conversation/conversation-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L81) |
| <a id="timestamp"></a> `timestamp` | `Date` | [src/core/conversation/conversation-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L82) |
| <a id="metadata"></a> `metadata` | `Record`\<`string`, `any`\> | [src/core/conversation/conversation-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L83) |
| <a id="created_at"></a> `created_at?` | `number` | [src/core/conversation/conversation-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/conversation/conversation-config.schema.ts#L84) |

## Remarks

**Architecture Context:**
- **Used In**: Conversation message arrays for quick access
- **Relationship**: Simplified version of full message schemas (UserChatMessage, AssistantChatMessage, etc.)
- **Storage**: Embedded within conversation documents for fast message loading
