[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.4**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneNumberPurchase

# Type Alias: UpdatePhoneNumberPurchase

```ts
type UpdatePhoneNumberPurchase = {
  friendlyName?: string;
  phoneNumber?: string;
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

Defined in: [src/core/service-configuration/phone-number.schema.ts:354](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L354)

Type definition for updating a phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName?` | `string` | [src/core/service-configuration/phone-number.schema.ts:270](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L270) |
| <a id="phonenumber"></a> `phoneNumber?` | `string` | [src/core/service-configuration/phone-number.schema.ts:271](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L271) |
| <a id="requesttime"></a> `requestTime?` | `number` | [src/core/service-configuration/phone-number.schema.ts:272](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L272) |
| <a id="providertype"></a> `providerType?` | \| [`TWILIO`](../../type-definitions/enumerations/ProviderType.md#twilio) \| [`SIGNALWIRE`](../../type-definitions/enumerations/ProviderType.md#signalwire) \| [`TELNYX`](../../type-definitions/enumerations/ProviderType.md#telnyx) | [src/core/service-configuration/phone-number.schema.ts:273](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L273) |
| <a id="amount"></a> `amount?` | `number` | [src/core/service-configuration/phone-number.schema.ts:274](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L274) |
| <a id="currency"></a> `currency?` | `string` | [src/core/service-configuration/phone-number.schema.ts:275](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L275) |
| <a id="phonenumberinfo"></a> `phoneNumberInfo?` | `unknown` | [src/core/service-configuration/phone-number.schema.ts:276](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L276) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/PhonePurchaseStatus.md#pending) \| [`COMPLETED`](../../type-definitions/enumerations/PhonePurchaseStatus.md#completed) \| [`FAILED`](../../type-definitions/enumerations/PhonePurchaseStatus.md#failed) \| [`CANCELLED`](../../type-definitions/enumerations/PhonePurchaseStatus.md#cancelled) | [src/core/service-configuration/phone-number.schema.ts:277](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L277) |
| <a id="numbertype"></a> `numberType?` | \| [`LOCAL`](../../type-definitions/enumerations/PhoneNumberType.md#local) \| [`TOLL_FREE`](../../type-definitions/enumerations/PhoneNumberType.md#toll_free) | [src/core/service-configuration/phone-number.schema.ts:278](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L278) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/phone-number.schema.ts:282](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L282) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/phone-number.schema.ts:345](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L345) |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:346](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L346) |
| <a id="statusdetails"></a> `statusDetails?` | `string` \| `null` | [src/core/service-configuration/phone-number.schema.ts:347](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L347) |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | [src/core/service-configuration/phone-number.schema.ts:348](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L348) |
