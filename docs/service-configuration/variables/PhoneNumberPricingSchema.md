[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPricingSchema

# Variable: PhoneNumberPricingSchema

```ts
const PhoneNumberPricingSchema: ZodObject<PhoneNumberPricing>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:399](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/phone-number.schema.ts#L399)

Zod schema for phone number pricing information.

Represents pricing details for phone numbers from various providers.

## Example

```typescript
const pricing: PhoneNumberPricing = {
  number_type: PhoneNumberType.LOCAL,
  country: 'United States',
  isoCountry: 'US',
  phoneNumberPrices: [
    { base_price: '1.00', current_price: '1.00' }
  ],
  price: 1.00,
  priceUnit: 'per month',
  providerType: ProviderType.TWILIO,
  currency: 'USD'
};
```
