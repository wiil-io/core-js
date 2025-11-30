[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

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

Defined in: [src/core/conversation/conversation-message.schema.ts:25](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/conversation/conversation-message.schema.ts#L25)

Base chat message schema.
