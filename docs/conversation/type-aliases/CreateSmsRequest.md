[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

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

Defined in: [src/core/conversation/outbound-sms.schema.ts:60](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L60)

Schema for creating a new SMS request.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:24](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L24) |
| <a id="to"></a> `to` | `string` | [src/core/conversation/outbound-sms.schema.ts:25](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L25) |
| <a id="from"></a> `from?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:26](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L26) |
| <a id="body"></a> `body` | `string` | [src/core/conversation/outbound-sms.schema.ts:29](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L29) |
| <a id="templateid"></a> `templateId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:30](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L30) |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> \| `null` | [src/core/conversation/outbound-sms.schema.ts:31](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L31) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-sms.schema.ts:34](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L34) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:35](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L35) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/conversation/outbound-sms.schema.ts:38](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/conversation/outbound-sms.schema.ts#L38) |
