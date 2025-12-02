[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.9**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseSchema

# Variable: PhoneNumberPurchaseSchema

```ts
const PhoneNumberPurchaseSchema: ZodObject<PhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:269](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/phone-number.schema.ts#L269)

Zod schema for phone number purchase transaction.

Represents a phone number purchase request and its lifecycle through the purchase process.

## Example

```typescript
const purchase: PhoneNumberPurchase = {
  id: 'purchase-123',
  friendlyName: 'Main Support Line',
  phoneNumber: '+12125551234',
  requestTime: Date.now(),
  providerType: ProviderType.TWILIO,
  amount: 1.00,
  currency: 'USD',
  phoneNumberInfo: { ... },
  status: PhonePurchaseStatus.COMPLETED,
  numberType: PhoneNumberType.LOCAL,
  transactionId: 'txn-789',
  completedAt: Date.now(),
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
