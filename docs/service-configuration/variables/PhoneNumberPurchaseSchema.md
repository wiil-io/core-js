[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.32**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseSchema

# Variable: PhoneNumberPurchaseSchema

```ts
const PhoneNumberPurchaseSchema: ZodObject<PhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:265](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/service-configuration/phone-number.schema.ts#L265)

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
