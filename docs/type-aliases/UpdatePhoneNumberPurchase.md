[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdatePhoneNumberPurchase

# Type Alias: UpdatePhoneNumberPurchase

```ts
type UpdatePhoneNumberPurchase = {
  version?: number;
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

Defined in: src/core/service-configuration/phone-number.schema.ts:346

Type definition for updating a phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="friendlyname"></a> `friendlyName?` | `string` | src/core/service-configuration/phone-number.schema.ts:260 |
| <a id="phonenumber"></a> `phoneNumber?` | `string` | src/core/service-configuration/phone-number.schema.ts:261 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/service-configuration/phone-number.schema.ts:262 |
| <a id="requesttime"></a> `requestTime?` | `number` | src/core/service-configuration/phone-number.schema.ts:263 |
| <a id="providertype"></a> `providerType?` | \| [`TWILIO`](../enumerations/ProviderType.md#twilio) \| [`SIGNALWIRE`](../enumerations/ProviderType.md#signalwire) \| [`TELNYX`](../enumerations/ProviderType.md#telnyx) | src/core/service-configuration/phone-number.schema.ts:264 |
| <a id="amount"></a> `amount?` | `number` | src/core/service-configuration/phone-number.schema.ts:265 |
| <a id="currency"></a> `currency?` | `string` | src/core/service-configuration/phone-number.schema.ts:266 |
| <a id="phonenumberinfo"></a> `phoneNumberInfo?` | `unknown` | src/core/service-configuration/phone-number.schema.ts:267 |
| <a id="status"></a> `status?` | \| [`PENDING`](../enumerations/PhonePurchaseStatus.md#pending) \| [`COMPLETED`](../enumerations/PhonePurchaseStatus.md#completed) \| [`FAILED`](../enumerations/PhonePurchaseStatus.md#failed) \| [`CANCELLED`](../enumerations/PhonePurchaseStatus.md#cancelled) | src/core/service-configuration/phone-number.schema.ts:268 |
| <a id="numbertype"></a> `numberType?` | \| [`LOCAL`](../enumerations/PhoneNumberType.md#local) \| [`TOLL_FREE`](../enumerations/PhoneNumberType.md#toll_free) | src/core/service-configuration/phone-number.schema.ts:269 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | src/core/service-configuration/phone-number.schema.ts:273 |
| <a id="id"></a> `id` | `string` | src/core/service-configuration/phone-number.schema.ts:337 |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | src/core/service-configuration/phone-number.schema.ts:338 |
| <a id="statusdetails"></a> `statusDetails?` | `string` \| `null` | src/core/service-configuration/phone-number.schema.ts:339 |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | src/core/service-configuration/phone-number.schema.ts:340 |
