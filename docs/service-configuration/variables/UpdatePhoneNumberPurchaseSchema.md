[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneNumberPurchaseSchema

# Variable: UpdatePhoneNumberPurchaseSchema

```ts
const UpdatePhoneNumberPurchaseSchema: ZodObject<UpdatePhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:344](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/phone-number.schema.ts#L344)

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
