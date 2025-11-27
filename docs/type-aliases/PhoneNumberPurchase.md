[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneNumberPurchase

# Type Alias: PhoneNumberPurchase

```ts
type PhoneNumberPurchase = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  friendlyName: string;
  phoneNumber: string;
  organizationId: string;
  requestTime: number;
  providerType: ProviderType;
  amount: number;
  currency: string;
  phoneNumberInfo: unknown;
  status: PhonePurchaseStatus;
  numberType: PhoneNumberType;
  transactionId?: string | null;
  statusDetails?: string | null;
  completedAt?: number | null;
  metadata?: Record<string, any> | null;
};
```

Defined in: src/core/service-configuration/phone-number.schema.ts:279

Type definition for phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="friendlyname"></a> `friendlyName` | `string` | src/core/service-configuration/phone-number.schema.ts:260 |
| <a id="phonenumber"></a> `phoneNumber` | `string` | src/core/service-configuration/phone-number.schema.ts:261 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/service-configuration/phone-number.schema.ts:262 |
| <a id="requesttime"></a> `requestTime` | `number` | src/core/service-configuration/phone-number.schema.ts:263 |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../enumerations/ProviderType.md) | src/core/service-configuration/phone-number.schema.ts:264 |
| <a id="amount"></a> `amount` | `number` | src/core/service-configuration/phone-number.schema.ts:265 |
| <a id="currency"></a> `currency` | `string` | src/core/service-configuration/phone-number.schema.ts:266 |
| <a id="phonenumberinfo"></a> `phoneNumberInfo` | `unknown` | src/core/service-configuration/phone-number.schema.ts:267 |
| <a id="status"></a> `status` | [`PhonePurchaseStatus`](../enumerations/PhonePurchaseStatus.md) | src/core/service-configuration/phone-number.schema.ts:268 |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../enumerations/PhoneNumberType.md) | src/core/service-configuration/phone-number.schema.ts:269 |
| <a id="transactionid"></a> `transactionId?` | `string` \| `null` | src/core/service-configuration/phone-number.schema.ts:270 |
| <a id="statusdetails"></a> `statusDetails?` | `string` \| `null` | src/core/service-configuration/phone-number.schema.ts:271 |
| <a id="completedat"></a> `completedAt?` | `number` \| `null` | src/core/service-configuration/phone-number.schema.ts:272 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | src/core/service-configuration/phone-number.schema.ts:273 |
