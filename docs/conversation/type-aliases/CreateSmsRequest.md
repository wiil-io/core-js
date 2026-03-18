[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CreateSmsRequest

# Type Alias: CreateSmsRequest

```ts
type CreateSmsRequest = {
  phoneConfigurationId?: string | null;
  to: string;
  from?: string | null;
  body: string;
  templateId?: string | null;
  variables?: Record<string, any> | null;
  scheduledAt?: number;
  serviceConversationConfigId?: string | null;
  metadata?: Record<string, any> | null;
};
```

Defined in: src/core/conversation/outbound-sms.schema.ts:58

Schema for creating a new SMS request.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | src/core/conversation/outbound-sms.schema.ts:24 |
| <a id="to"></a> `to` | `string` | src/core/conversation/outbound-sms.schema.ts:25 |
| <a id="from"></a> `from?` | `string` \| `null` | src/core/conversation/outbound-sms.schema.ts:26 |
| <a id="body"></a> `body` | `string` | src/core/conversation/outbound-sms.schema.ts:29 |
| <a id="templateid"></a> `templateId?` | `string` \| `null` | src/core/conversation/outbound-sms.schema.ts:30 |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> \| `null` | src/core/conversation/outbound-sms.schema.ts:31 |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | src/core/conversation/outbound-sms.schema.ts:34 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | src/core/conversation/outbound-sms.schema.ts:35 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | src/core/conversation/outbound-sms.schema.ts:38 |
