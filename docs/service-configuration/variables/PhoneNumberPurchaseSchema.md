[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseSchema

# Variable: PhoneNumberPurchaseSchema

```ts
const PhoneNumberPurchaseSchema: ZodObject<PhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:265](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/phone-number.schema.ts#L265)

Zod schema for phone number purchase transaction.

Represents a phone number purchase request and its lifecycle through the purchase process.

## Example

```typescript
const purchase: PhoneNumberPurchase = {
  id: '32422DEGER56',
  friendlyName: 'Main Support Line',
  phoneNumber: '+12125551234',
  countryCode: 'US',
  providerType: ProviderType.TWILIO,
  amount: 1.00,
  currency: 'USD',
  status: PhonePurchaseStatus.COMPLETED,
  numberType: PhoneNumberType.LOCAL,
  completedAt: Date.now(),
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
