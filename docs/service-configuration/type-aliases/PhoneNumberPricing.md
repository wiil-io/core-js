[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.9**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-number.schema.ts:416](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L416)

Type definition for phone number pricing.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="number_type"></a> `number_type` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:400](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L400) |
| <a id="country"></a> `country` | `string` | [src/core/service-configuration/phone-number.schema.ts:401](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L401) |
| <a id="isocountry"></a> `isoCountry` | `string` | [src/core/service-configuration/phone-number.schema.ts:402](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L402) |
| <a id="phonenumberprices"></a> `phoneNumberPrices` | \{ `base_price`: `string`; `current_price`: `string`; \}[] | [src/core/service-configuration/phone-number.schema.ts:403](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L403) |
| <a id="price"></a> `price` | `number` | [src/core/service-configuration/phone-number.schema.ts:407](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L407) |
| <a id="priceunit"></a> `priceUnit` | `string` | [src/core/service-configuration/phone-number.schema.ts:408](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L408) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:409](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L409) |
| <a id="currency"></a> `currency` | `string` | [src/core/service-configuration/phone-number.schema.ts:410](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L410) |
