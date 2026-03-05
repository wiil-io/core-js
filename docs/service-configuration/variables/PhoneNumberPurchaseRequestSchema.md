[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.40**](../../README.md)

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

Defined in: [src/core/service-configuration/phone-number.schema.ts:199](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/service-configuration/phone-number.schema.ts#L199)

Legacy schema export for backwards compatibility.

## Deprecated

Use CreatePhoneNumberPurchaseSchema instead.
