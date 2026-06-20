[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPricingSchema

# Variable: PhoneNumberPricingSchema

```ts
const PhoneNumberPricingSchema: ZodObject<PhoneNumberPricing>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:236](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/service-configuration/phone-number.schema.ts#L236)

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
  currency: 'USD'
};
```
