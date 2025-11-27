[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreatePhoneNumberPurchase

# Type Alias: CreatePhoneNumberPurchase

```ts
type CreatePhoneNumberPurchase = {
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
  metadata?: Record<string, any> | null;
};
```

Defined in: src/core/service-configuration/phone-number.schema.ts:316

Type definition for creating a phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
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
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | src/core/service-configuration/phone-number.schema.ts:273 |
