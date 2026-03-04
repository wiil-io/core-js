[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.39**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseSchema

# Variable: PhoneNumberPurchaseSchema

```ts
const PhoneNumberPurchaseSchema: ZodObject<PhoneNumberPurchase>;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:264](https://github.com/wiil-io/core-js/blob/26d2b631ba1acb31c0e66c5e63fa8ed5c49cb11b/src/core/service-configuration/phone-number.schema.ts#L264)

Zod schema for phone number purchase transaction.

Represents a phone number purchase request and its lifecycle through the purchase process.

## Example

```typescript
const purchase: PhoneNumberPurchase = {
  id: '32422DEGER56',
  friendlyName: 'Main Support Line',
  phoneNumber: '+12125551234',
  countryCode: 'US',
  providerType: ProviderType.TWILIO,
  chargedCredits: 1500,
  status: PhonePurchaseStatus.COMPLETED,
  numberType: PhoneNumberType.LOCAL,
  completedAt: Date.now(),
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
