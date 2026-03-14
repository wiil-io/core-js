[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseRequestSchema

# ~~Variable: PhoneNumberPurchaseRequestSchema~~

```ts
const PhoneNumberPurchaseRequestSchema: ZodObject<{
  friendlyName: ZodString;
  phoneNumber: ZodString;
  countryCode: ZodString;
  numberType: ZodDefault<ZodEnum<typeof PhoneNumberType>>;
}, $strip> = CreatePhoneNumberPurchaseSchema;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:199](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/service-configuration/phone-number.schema.ts#L199)

Legacy schema export for backwards compatibility.

## Deprecated

Use CreatePhoneNumberPurchaseSchema instead.
