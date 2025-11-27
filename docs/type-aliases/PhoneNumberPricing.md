[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneNumberPricing

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

Defined in: src/core/service-configuration/phone-number.schema.ts:408

Type definition for phone number pricing.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="number_type"></a> `number_type` | [`PhoneNumberType`](../enumerations/PhoneNumberType.md) | src/core/service-configuration/phone-number.schema.ts:392 |
| <a id="country"></a> `country` | `string` | src/core/service-configuration/phone-number.schema.ts:393 |
| <a id="isocountry"></a> `isoCountry` | `string` | src/core/service-configuration/phone-number.schema.ts:394 |
| <a id="phonenumberprices"></a> `phoneNumberPrices` | \{ `base_price`: `string`; `current_price`: `string`; \}[] | src/core/service-configuration/phone-number.schema.ts:395 |
| <a id="price"></a> `price` | `number` | src/core/service-configuration/phone-number.schema.ts:399 |
| <a id="priceunit"></a> `priceUnit` | `string` | src/core/service-configuration/phone-number.schema.ts:400 |
| <a id="providertype"></a> `providerType` | [`ProviderType`](../enumerations/ProviderType.md) | src/core/service-configuration/phone-number.schema.ts:401 |
| <a id="currency"></a> `currency` | `string` | src/core/service-configuration/phone-number.schema.ts:402 |
