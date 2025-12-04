[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreatePhoneNumberPurchaseSchema

# Variable: CreatePhoneNumberPurchaseSchema

```ts
const CreatePhoneNumberPurchaseSchema: ZodObject<CreatePhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:300](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/core/service-configuration/phone-number.schema.ts#L300)

Zod schema for creating a new phone number purchase.

Omits auto-generated and transaction-specific fields.

## Remarks

Use this schema when initiating a new phone number purchase.

## Example

```typescript
const newPurchase: CreatePhoneNumberPurchase = {
  friendlyName: 'New Support Line',
  phoneNumber: '+12125551234',
  providerType: ProviderType.TWILIO,
  phoneNumberInfo: { ... },
  numberType: PhoneNumberType.LOCAL
};
```
