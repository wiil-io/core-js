[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:374](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/conversation/conversation-config.schema.ts#L374)

OTT conversation configuration schema.
Configuration for OTT (over-the-top) chat widget connections.
