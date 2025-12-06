[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.29**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPricing

# Type Alias: PhoneNumberPricing

```ts
type PhoneNumberPricing = {
  number_type: PhoneNumberType;
  country: string;
  countryCode: string;
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

Defined in: [src/core/service-configuration/phone-number.schema.ts:382](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L382)

Type definition for phone number pricing.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="number_type"></a> `number_type` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:366](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L366) |
| <a id="country"></a> `country` | `string` | [src/core/service-configuration/phone-number.schema.ts:367](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L367) |
| <a id="countrycode"></a> `countryCode` | `string` | [src/core/service-configuration/phone-number.schema.ts:368](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L368) |
| <a id="phonenumberprices"></a> `phoneNumberPrices` | \{ `base_price`: `string`; `current_price`: `string`; \}[] | [src/core/service-configuration/phone-number.schema.ts:369](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L369) |
| <a id="price"></a> `price` | `number` | [src/core/service-configuration/phone-number.schema.ts:373](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L373) |
| <a id="priceunit"></a> `priceUnit` | `string` | [src/core/service-configuration/phone-number.schema.ts:374](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L374) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:375](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L375) |
| <a id="currency"></a> `currency` | `string` | [src/core/service-configuration/phone-number.schema.ts:376](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/service-configuration/phone-number.schema.ts#L376) |
