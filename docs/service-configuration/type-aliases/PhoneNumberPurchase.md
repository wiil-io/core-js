[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

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
  providerType: ProviderType;
  countryCode: string;
  amount: number;
  currency: string;
  status: PhonePurchaseStatus;
  numberType: PhoneNumberType;
  statusDetails?: string | null;
  completedAt?: number | null;
  metadata?: Record<string, any> | null;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:282](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L282)

Type definition for phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/base.schema.ts#L10) |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:266](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L266) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:267](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L267) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:268](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L268) |
| <a id="countrycode"></a> `countryCode` | `string` | [src/core/service-configuration/phone-number.schema.ts:269](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L269) |
| <a id="amount"></a> `amount` | `number` | [src/core/service-configuration/phone-number.schema.ts:270](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L270) |
| <a id="currency"></a> `currency` | `string` | [src/core/service-configuration/phone-number.schema.ts:271](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L271) |
| <a id="status"></a> `status` | [`PhonePurchaseStatus`](../../type-definitions/enumerations/PhonePurchaseStatus.md) | [src/core/service-configuration/phone-number.schema.ts:272](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L272) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:273](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L273) |
| <a id="statusdetails"></a> `statusDetails?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:274](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L274) |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | [src/core/service-configuration/phone-number.schema.ts:275](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L275) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/phone-number.schema.ts:276](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L276) |
