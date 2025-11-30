[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseSchema

# Variable: PhoneNumberPurchaseSchema

```ts
const PhoneNumberPurchaseSchema: ZodObject<PhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:259](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L259)

Zod schema for phone number purchase transaction.

Represents a phone number purchase request and its lifecycle through the purchase process.

## Example

```typescript
const purchase: PhoneNumberPurchase = {
  id: 'purchase-123',
  friendlyName: 'Main Support Line',
  phoneNumber: '+12125551234',
  organizationId: 'org-456',
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
