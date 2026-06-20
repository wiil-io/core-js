[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPricingSchema

# Variable: PhoneNumberPricingSchema

```ts
const PhoneNumberPricingSchema: ZodObject<PhoneNumberPricing>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:236](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/service-configuration/phone-number.schema.ts#L236)

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
