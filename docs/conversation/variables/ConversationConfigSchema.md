[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / ConversationConfigSchema

# Variable: ConversationConfigSchema

```ts
const ConversationConfigSchema: ZodObject<{
  platform_user_id: ZodOptional<ZodNumber>;
  channel_identifier: ZodString;
  partner_user_id: ZodOptional<ZodString>;
}, $strip>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:395](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/conversation/conversation-config.schema.ts#L395)

OTT conversation configuration schema.
Configuration for OTT (over-the-top) chat widget connections.
