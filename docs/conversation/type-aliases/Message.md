[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.28**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:73](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L73)

Message schema for conversation messages.

Lightweight message representation used within conversation configurations. Simplified version
compared to the full ConversationMessageSchema for efficient storage and retrieval in conversation
message arrays.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id?` | `string` | [src/core/conversation/conversation-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L64) |
| <a id="messageid"></a> `messageId` | `string` | [src/core/conversation/conversation-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L65) |
| <a id="content"></a> `content` | `string` | [src/core/conversation/conversation-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L66) |
| <a id="message_type"></a> `message_type` | [`MessageType`](../enumerations/MessageType.md) | [src/core/conversation/conversation-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L67) |
| <a id="timestamp"></a> `timestamp` | `Date` | [src/core/conversation/conversation-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L68) |
| <a id="metadata"></a> `metadata` | `Record`\<`string`, `any`\> | [src/core/conversation/conversation-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L69) |
| <a id="created_at"></a> `created_at?` | `number` | [src/core/conversation/conversation-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/8997edaedd112c2beeab642bd1e540f1ccb7802d/src/core/conversation/conversation-config.schema.ts#L70) |

## Remarks

**Architecture Context:**
- **Used In**: Conversation message arrays for quick access
- **Relationship**: Simplified version of full message schemas (UserChatMessage, AssistantChatMessage, etc.)
- **Storage**: Embedded within conversation documents for fast message loading
