[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneNumberPurchase

# Type Alias: UpdatePhoneNumberPurchase

```ts
type UpdatePhoneNumberPurchase = {
  friendlyName?: string;
  phoneNumber?: string;
  organizationId?: string;
  requestTime?: number;
  providerType?:   | TWILIO
     | SIGNALWIRE
     | TELNYX;
  amount?: number;
  currency?: string;
  phoneNumberInfo?: unknown;
  status?:   | PENDING
     | COMPLETED
     | FAILED
     | CANCELLED;
  numberType?:   | LOCAL
     | TOLL_FREE;
  metadata?: Record<string, any> | null;
  id: string;
  transactionId?: string | null;
  statusDetails?: string | null;
  completedAt?: number | null;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:346](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L346)

Type definition for updating a phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName?` | `string` | [src/core/service-configuration/phone-number.schema.ts:260](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L260) |
| <a id="phonenumber"></a> `phoneNumber?` | `string` | [src/core/service-configuration/phone-number.schema.ts:261](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L261) |
| <a id="organizationid"></a> `organizationId?` | `string` | [src/core/service-configuration/phone-number.schema.ts:262](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L262) |
| <a id="requesttime"></a> `requestTime?` | `number` | [src/core/service-configuration/phone-number.schema.ts:263](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L263) |
| <a id="providertype"></a> `providerType?` | \| [`TWILIO`](../../type-definitions/enumerations/ProviderType.md#twilio) \| [`SIGNALWIRE`](../../type-definitions/enumerations/ProviderType.md#signalwire) \| [`TELNYX`](../../type-definitions/enumerations/ProviderType.md#telnyx) | [src/core/service-configuration/phone-number.schema.ts:264](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L264) |
| <a id="amount"></a> `amount?` | `number` | [src/core/service-configuration/phone-number.schema.ts:265](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L265) |
| <a id="currency"></a> `currency?` | `string` | [src/core/service-configuration/phone-number.schema.ts:266](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L266) |
| <a id="phonenumberinfo"></a> `phoneNumberInfo?` | `unknown` | [src/core/service-configuration/phone-number.schema.ts:267](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L267) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/PhonePurchaseStatus.md#pending) \| [`COMPLETED`](../../type-definitions/enumerations/PhonePurchaseStatus.md#completed) \| [`FAILED`](../../type-definitions/enumerations/PhonePurchaseStatus.md#failed) \| [`CANCELLED`](../../type-definitions/enumerations/PhonePurchaseStatus.md#cancelled) | [src/core/service-configuration/phone-number.schema.ts:268](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L268) |
| <a id="numbertype"></a> `numberType?` | \| [`LOCAL`](../../type-definitions/enumerations/PhoneNumberType.md#local) \| [`TOLL_FREE`](../../type-definitions/enumerations/PhoneNumberType.md#toll_free) | [src/core/service-configuration/phone-number.schema.ts:269](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L269) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/phone-number.schema.ts:273](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L273) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/phone-number.schema.ts:337](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L337) |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:338](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L338) |
| <a id="statusdetails"></a> `statusDetails?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:339](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L339) |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | [src/core/service-configuration/phone-number.schema.ts:340](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L340) |
