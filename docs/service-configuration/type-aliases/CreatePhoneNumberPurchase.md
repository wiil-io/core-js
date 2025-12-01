[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreatePhoneNumberPurchase

# Type Alias: CreatePhoneNumberPurchase

```ts
type CreatePhoneNumberPurchase = {
  friendlyName: string;
  phoneNumber: string;
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

Defined in: [src/core/service-configuration/phone-number.schema.ts:324](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L324)

Type definition for creating a phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:270](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L270) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:271](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L271) |
| <a id="requesttime"></a> `requestTime` | `number` | [src/core/service-configuration/phone-number.schema.ts:272](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L272) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:273](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L273) |
| <a id="amount"></a> `amount` | `number` | [src/core/service-configuration/phone-number.schema.ts:274](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L274) |
| <a id="currency"></a> `currency` | `string` | [src/core/service-configuration/phone-number.schema.ts:275](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L275) |
| <a id="phonenumberinfo"></a> `phoneNumberInfo` | `unknown` | [src/core/service-configuration/phone-number.schema.ts:276](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L276) |
| <a id="status"></a> `status` | [`PhonePurchaseStatus`](../../type-definitions/enumerations/PhonePurchaseStatus.md) | [src/core/service-configuration/phone-number.schema.ts:277](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L277) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:278](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L278) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/phone-number.schema.ts:282](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/phone-number.schema.ts#L282) |
