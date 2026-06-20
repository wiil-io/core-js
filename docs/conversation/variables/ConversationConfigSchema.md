[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.69**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:395](https://github.com/wiil-io/core-js/blob/2566d82ae56a1f9913333c58bd398cfa7eaebbc7/src/core/conversation/conversation-config.schema.ts#L395)

OTT conversation configuration schema.
Configuration for OTT (over-the-top) chat widget connections.
