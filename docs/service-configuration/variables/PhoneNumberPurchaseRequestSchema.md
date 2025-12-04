[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseRequestSchema

# ~~Variable: PhoneNumberPurchaseRequestSchema~~

```ts
const PhoneNumberPurchaseRequestSchema: ZodObject<{
  friendlyName: ZodString;
  phoneNumber: ZodString;
  providerType: ZodEnum<typeof ProviderType>;
  phoneNumberInfo: ZodUnknown;
  numberType: ZodDefault<ZodEnum<typeof PhoneNumberType>>;
}, $strip> = CreatePhoneNumberPurchaseSchema;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:328](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/phone-number.schema.ts#L328)

Legacy schema export for backwards compatibility.

## Deprecated

Use CreatePhoneNumberPurchaseSchema instead.
