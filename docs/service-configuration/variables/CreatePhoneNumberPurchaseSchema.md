[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.20**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreatePhoneNumberPurchaseSchema

# Variable: CreatePhoneNumberPurchaseSchema

```ts
const CreatePhoneNumberPurchaseSchema: ZodObject<CreatePhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:300](https://github.com/wiil-io/core-js/blob/a254626669af0c881a04ad742f84e3e167437bdc/src/core/service-configuration/phone-number.schema.ts#L300)

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
