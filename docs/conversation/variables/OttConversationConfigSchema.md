[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / OttConversationConfigSchema

# Variable: OttConversationConfigSchema

```ts
const OttConversationConfigSchema: ZodObject<{
  platform_user_id: ZodOptional<ZodNumber>;
  channel_identifier: ZodString;
  partner_user_id: ZodOptional<ZodString>;
  sdrtn_id: ZodNullable<ZodOptional<ZodString>>;
  channel_token: ZodString;
  connection_url: ZodNullable<ZodOptional<ZodString>>;
}, $strip>;
```

Defined in: [src/core/conversation/conversation-config.schema.ts:383](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/conversation/conversation-config.schema.ts#L383)

OTT conversation configuration with connection details.
