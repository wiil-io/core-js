[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreatePhoneNumberPurchaseSchema

# Variable: CreatePhoneNumberPurchaseSchema

```ts
const CreatePhoneNumberPurchaseSchema: ZodObject<CreatePhoneNumberPurchase>;
```

Defined in: src/core/service-configuration/phone-number.schema.ts:304

Zod schema for creating a new phone number purchase.

Omits auto-generated and transaction-specific fields.

## Remarks

Use this schema when initiating a new phone number purchase.

## Example

```typescript
const newPurchase: CreatePhoneNumberPurchase = {
  friendlyName: 'New Support Line',
  phoneNumber: '+12125551234',
  organizationId: 'org-456',
  providerType: ProviderType.TWILIO,
  amount: 1.00,
  currency: 'USD',
  phoneNumberInfo: { ... },
  status: PhonePurchaseStatus.PENDING,
  numberType: PhoneNumberType.LOCAL
};
```
