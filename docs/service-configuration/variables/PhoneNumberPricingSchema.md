[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPricingSchema

# Variable: PhoneNumberPricingSchema

```ts
const PhoneNumberPricingSchema: ZodObject<PhoneNumberPricing>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:365](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/phone-number.schema.ts#L365)

Zod schema for phone number pricing information.

Represents pricing details for phone numbers from various providers.

## Example

```typescript
const pricing: PhoneNumberPricing = {
  number_type: PhoneNumberType.LOCAL,
  country: 'United States',
  countryCode: 'US',
  phoneNumberPrices: [
    { base_price: '1.00', current_price: '1.00' }
  ],
  price: 1.00,
  priceUnit: 'per month',
  providerType: ProviderType.TWILIO,
  currency: 'USD'
};
```
