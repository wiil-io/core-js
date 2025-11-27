[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdatePhoneNumberPurchaseSchema

# Variable: UpdatePhoneNumberPurchaseSchema

```ts
const UpdatePhoneNumberPurchaseSchema: ZodObject<UpdatePhoneNumberPurchase>;
```

Defined in: src/core/service-configuration/phone-number.schema.ts:336

Zod schema for updating an existing phone number purchase.

All fields are optional (partial) except id. Allows updating transaction details.

## Remarks

Supports partial updates - only include the fields you want to modify.

## Example

```typescript
const updatePurchase: UpdatePhoneNumberPurchase = {
  id: 'purchase-123',
  status: PhonePurchaseStatus.COMPLETED,
  transactionId: 'txn-789',
  completedAt: Date.now()
};
```
