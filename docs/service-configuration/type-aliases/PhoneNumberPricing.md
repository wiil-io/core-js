[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-number.schema.ts:379](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L379)

Type definition for phone number pricing.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="number_type"></a> `number_type` | [`PhoneNumberType`](../../type-definitions/enumerations/PhoneNumberType.md) | [src/core/service-configuration/phone-number.schema.ts:363](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L363) |
| <a id="country"></a> `country` | `string` | [src/core/service-configuration/phone-number.schema.ts:364](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L364) |
| <a id="isocountry"></a> `isoCountry` | `string` | [src/core/service-configuration/phone-number.schema.ts:365](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L365) |
| <a id="phonenumberprices"></a> `phoneNumberPrices` | \{ `base_price`: `string`; `current_price`: `string`; \}[] | [src/core/service-configuration/phone-number.schema.ts:366](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L366) |
| <a id="price"></a> `price` | `number` | [src/core/service-configuration/phone-number.schema.ts:370](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L370) |
| <a id="priceunit"></a> `priceUnit` | `string` | [src/core/service-configuration/phone-number.schema.ts:371](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L371) |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../../type-definitions/enumerations/ProviderType.md) | [src/core/service-configuration/phone-number.schema.ts:372](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L372) |
| <a id="currency"></a> `currency` | `string` | [src/core/service-configuration/phone-number.schema.ts:373](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L373) |
