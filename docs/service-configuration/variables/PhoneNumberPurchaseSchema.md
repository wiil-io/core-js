[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.19**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseSchema

# Variable: PhoneNumberPurchaseSchema

```ts
const PhoneNumberPurchaseSchema: ZodObject<PhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:263](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/service-configuration/phone-number.schema.ts#L263)

Zod schema for phone number purchase transaction.

Represents a phone number purchase request and its lifecycle through the purchase process.

## Example

```typescript
const purchase: PhoneNumberPurchase = {
  id: '32422DEGER56',
  friendlyName: 'Main Support Line',
  phoneNumber: '+12125551234',
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
