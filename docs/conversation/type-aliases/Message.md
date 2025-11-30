[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L48)

Message schema for conversation messages.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id?` | `string` | [src/core/conversation/conversation-config.schema.ts:39](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L39) |
| <a id="messageid"></a> `messageId` | `string` | [src/core/conversation/conversation-config.schema.ts:40](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L40) |
| <a id="content"></a> `content` | `string` | [src/core/conversation/conversation-config.schema.ts:41](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L41) |
| <a id="message_type"></a> `message_type` | [`MessageType`](../enumerations/MessageType.md) | [src/core/conversation/conversation-config.schema.ts:42](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L42) |
| <a id="timestamp"></a> `timestamp` | `Date` | [src/core/conversation/conversation-config.schema.ts:43](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L43) |
| <a id="metadata"></a> `metadata` | `Record`\<`string`, `any`\> | [src/core/conversation/conversation-config.schema.ts:44](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L44) |
| <a id="created_at"></a> `created_at?` | `number` | [src/core/conversation/conversation-config.schema.ts:45](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-config.schema.ts#L45) |
