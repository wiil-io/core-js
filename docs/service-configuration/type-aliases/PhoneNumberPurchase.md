[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

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
  amount: number;
  currency: string;
  phoneNumberInfo: unknown;
  status: PhonePurchaseStatus;
  numberType: PhoneNumberType;
  statusDetails?: string | null;
  completedAt?: number | null;
  metadata?: Record<string, any> | null;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:284](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L284)

Type definition for phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/base.schema.ts#L10) |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:268](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L268) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:269](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L269) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:270](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L270) |
| <a id="amount"></a> `amount` | `number` | [src/core/service-configuration/phone-number.schema.ts:271](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L271) |
| <a id="currency"></a> `currency` | `string` | [src/core/service-configuration/phone-number.schema.ts:272](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L272) |
| <a id="phonenumberinfo"></a> `phoneNumberInfo` | `unknown` | [src/core/service-configuration/phone-number.schema.ts:273](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L273) |
| <a id="status"></a> `status` | [`PhonePurchaseStatus`](../../type-definitions/enumerations/PhonePurchaseStatus.md) | [src/core/service-configuration/phone-number.schema.ts:274](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L274) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:275](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L275) |
| <a id="statusdetails"></a> `statusDetails?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:276](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L276) |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | [src/core/service-configuration/phone-number.schema.ts:277](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L277) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/phone-number.schema.ts:278](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L278) |
