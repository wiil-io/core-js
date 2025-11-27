[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / Message

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

Defined in: src/core/conversation/conversation-config.schema.ts:48

Message schema for conversation messages.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id?` | `string` | src/core/conversation/conversation-config.schema.ts:39 |
| <a id="messageid"></a> `messageId` | `string` | src/core/conversation/conversation-config.schema.ts:40 |
| <a id="content"></a> `content` | `string` | src/core/conversation/conversation-config.schema.ts:41 |
| <a id="message_type"></a> `message_type` | [`MessageType`](../enumerations/MessageType.md) | src/core/conversation/conversation-config.schema.ts:42 |
| <a id="timestamp"></a> `timestamp` | `Date` | src/core/conversation/conversation-config.schema.ts:43 |
| <a id="metadata"></a> `metadata` | `Record`\<`string`, `any`\> | src/core/conversation/conversation-config.schema.ts:44 |
| <a id="created_at"></a> `created_at?` | `number` | src/core/conversation/conversation-config.schema.ts:45 |
