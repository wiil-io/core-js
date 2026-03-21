[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchase

# Type Alias: PhoneNumberPurchase

```ts
type PhoneNumberPurchase = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  friendlyName: string;
  phoneNumber: string;
  countryCode: string;
  chargedCredits: number;
  status: PhonePurchaseStatus;
  numberType: PhoneNumberType;
  statusDetails?: string | null;
  completedAt?: number | null;
  metadata?: Record<string, any> | null;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:147](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L147)

Type definition for phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L10) |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:133](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L133) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:134](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L134) |
| <a id="countrycode"></a> `countryCode` | `string` | [src/core/service-configuration/phone-number.schema.ts:135](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L135) |
| <a id="chargedcredits"></a> `chargedCredits` | `number` | [src/core/service-configuration/phone-number.schema.ts:136](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L136) |
| <a id="status"></a> `status` | [`PhonePurchaseStatus`](../../type-definitions/enumerations/PhonePurchaseStatus.md) | [src/core/service-configuration/phone-number.schema.ts:137](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L137) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:138](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L138) |
| <a id="statusdetails"></a> `statusDetails?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:139](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L139) |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | [src/core/service-configuration/phone-number.schema.ts:140](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L140) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/phone-number.schema.ts:141](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/phone-number.schema.ts#L141) |
