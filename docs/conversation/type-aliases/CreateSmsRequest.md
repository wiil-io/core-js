[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

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
  status: SmsStatus;
  maxRetries?: number;
  retryCount: number;
  retryDelayMinutes?: number;
  metadata?: Record<string, any> | null;
};
```

Defined in: [src/core/conversation/outbound-sms.schema.ts:102](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L102)

Schema for creating a new SMS request.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="phoneconfigurationid"></a> `phoneConfigurationId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:36](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L36) |
| <a id="to"></a> `to` | `string` | [src/core/conversation/outbound-sms.schema.ts:37](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L37) |
| <a id="from"></a> `from?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:38](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L38) |
| <a id="body"></a> `body` | `string` | [src/core/conversation/outbound-sms.schema.ts:41](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L41) |
| <a id="templateid"></a> `templateId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:42](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L42) |
| <a id="variables"></a> `variables?` | `Record`\<`string`, `any`\> \| `null` | [src/core/conversation/outbound-sms.schema.ts:43](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L43) |
| <a id="scheduledat"></a> `scheduledAt?` | `number` | [src/core/conversation/outbound-sms.schema.ts:46](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L46) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/conversation/outbound-sms.schema.ts:47](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L47) |
| <a id="status"></a> `status` | [`SmsStatus`](../../type-definitions/enumerations/SmsStatus.md) | [src/core/conversation/outbound-sms.schema.ts:50](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L50) |
| <a id="maxretries"></a> `maxRetries?` | `number` | [src/core/conversation/outbound-sms.schema.ts:53](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L53) |
| <a id="retrycount"></a> `retryCount` | `number` | [src/core/conversation/outbound-sms.schema.ts:54](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L54) |
| <a id="retrydelayminutes"></a> `retryDelayMinutes?` | `number` | [src/core/conversation/outbound-sms.schema.ts:55](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L55) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/conversation/outbound-sms.schema.ts:58](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/conversation/outbound-sms.schema.ts#L58) |
