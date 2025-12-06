[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreatePhoneNumberPurchase

# Type Alias: CreatePhoneNumberPurchase

```ts
type CreatePhoneNumberPurchase = {
  friendlyName: string;
  phoneNumber: string;
  providerType: ProviderType;
  countryCode: string;
  numberType: PhoneNumberType;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:319](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L319)

Type definition for creating a phone number purchase.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="friendlyname"></a> `friendlyName` | `string` | [src/core/service-configuration/phone-number.schema.ts:266](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L266) |
| <a id="phonenumber"></a> `phoneNumber` | `string` | [src/core/service-configuration/phone-number.schema.ts:267](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L267) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:268](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L268) |
| <a id="countrycode"></a> `countryCode` | `string` | [src/core/service-configuration/phone-number.schema.ts:269](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L269) |
| <a id="numbertype"></a> `numberType` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:273](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L273) |
