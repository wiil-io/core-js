[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / BaseChatMessageSchema

# Variable: BaseChatMessageSchema

```ts
const BaseChatMessageSchema: ZodObject<{
  conversation_config_id: ZodString;
  message: ZodString;
  timestamp: ZodDefault<ZodNumber>;
  llm_conversation_id: ZodNullable<ZodOptional<ZodString>>;
}, $strip>;
```

Defined in: src/core/conversation/conversation-message.schema.ts:25

Base chat message schema.
