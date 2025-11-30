[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdatePhoneNumberPurchaseSchema

# Variable: UpdatePhoneNumberPurchaseSchema

```ts
const UpdatePhoneNumberPurchaseSchema: ZodObject<UpdatePhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:336](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L336)

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
