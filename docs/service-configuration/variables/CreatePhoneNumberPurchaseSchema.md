[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreatePhoneNumberPurchaseSchema

# Variable: CreatePhoneNumberPurchaseSchema

```ts
const CreatePhoneNumberPurchaseSchema: ZodObject<CreatePhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:169](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/phone-number.schema.ts#L169)

Zod schema for creating a new phone number purchase.

Omits auto-generated and transaction-specific fields.

## Remarks

Use this schema when initiating a new phone number purchase.

## Example

```typescript
const newPurchase: CreatePhoneNumberPurchase = {
  friendlyName: 'New Support Line',
  phoneNumber: '+12125551234',
  countryCode: 'US',
  providerType: ProviderType.TWILIO,
  phoneNumberInfo: { ... },
  numberType: PhoneNumberType.LOCAL
};
```
