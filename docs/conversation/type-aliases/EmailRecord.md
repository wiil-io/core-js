[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / EmailRecord

# Type Alias: EmailRecord

```ts
type EmailRecord = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  emailRequestId: string;
  providerMessageId: string;
  status: EmailStatus;
  sentAt?: number;
  deliveredAt?: number;
  bouncedAt?: number;
  errorCode?: string;
  errorMessage?: string;
  metadata?: Record<string, any>;
};
```

Defined in: [src/core/conversation/outbound-email.schema.ts:180](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L180)

Email record schema for tracking delivery status.

Records individual delivery events and status updates from email providers.
Links to the original EmailRequest and tracks provider-specific message IDs.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/base.schema.ts#L10) |
| <a id="emailrequestid"></a> `emailRequestId` | `string` | [src/core/conversation/outbound-email.schema.ts:148](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L148) |
| <a id="providermessageid"></a> `providerMessageId` | `string` | [src/core/conversation/outbound-email.schema.ts:149](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L149) |
| <a id="status"></a> `status` | [`EmailStatus`](../../type-definitions/enumerations/EmailStatus.md) | [src/core/conversation/outbound-email.schema.ts:150](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L150) |
| <a id="sentat"></a> `sentAt?` | `number` | [src/core/conversation/outbound-email.schema.ts:151](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L151) |
| <a id="deliveredat"></a> `deliveredAt?` | `number` | [src/core/conversation/outbound-email.schema.ts:152](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L152) |
| <a id="bouncedat"></a> `bouncedAt?` | `number` | [src/core/conversation/outbound-email.schema.ts:153](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L153) |
| <a id="errorcode"></a> `errorCode?` | `string` | [src/core/conversation/outbound-email.schema.ts:154](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L154) |
| <a id="errormessage"></a> `errorMessage?` | `string` | [src/core/conversation/outbound-email.schema.ts:155](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L155) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [src/core/conversation/outbound-email.schema.ts:156](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/conversation/outbound-email.schema.ts#L156) |
