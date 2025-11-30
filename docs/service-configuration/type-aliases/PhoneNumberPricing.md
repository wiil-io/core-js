[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPricing

# Type Alias: PhoneNumberPricing

```ts
type PhoneNumberPricing = {
  number_type: PhoneNumberType;
  country: string;
  isoCountry: string;
  phoneNumberPrices: {
     base_price: string;
     current_price: string;
  }[];
  price: number;
  priceUnit: string;
  providerType: ProviderType;
  currency: string;
};
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:408](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L408)

Type definition for phone number pricing.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="number_type"></a> `number_type` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:392](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L392) |
| <a id="country"></a> `country` | `string` | [src/core/service-configuration/phone-number.schema.ts:393](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L393) |
| <a id="isocountry"></a> `isoCountry` | `string` | [src/core/service-configuration/phone-number.schema.ts:394](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L394) |
| <a id="phonenumberprices"></a> `phoneNumberPrices` | \{ `base_price`: `string`; `current_price`: `string`; \}[] | [src/core/service-configuration/phone-number.schema.ts:395](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L395) |
| <a id="price"></a> `price` | `number` | [src/core/service-configuration/phone-number.schema.ts:399](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L399) |
| <a id="priceunit"></a> `priceUnit` | `string` | [src/core/service-configuration/phone-number.schema.ts:400](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L400) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:401](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L401) |
| <a id="currency"></a> `currency` | `string` | [src/core/service-configuration/phone-number.schema.ts:402](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/phone-number.schema.ts#L402) |
