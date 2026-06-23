[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

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

Defined in: [src/core/conversation/conversation-config.schema.ts:383](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/conversation/conversation-config.schema.ts#L383)

OTT conversation configuration with connection details.
