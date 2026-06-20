[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:395](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/conversation-config.schema.ts#L395)

OTT conversation configuration schema.
Configuration for OTT (over-the-top) chat widget connections.
