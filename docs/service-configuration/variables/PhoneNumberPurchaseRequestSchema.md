[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.4**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseRequestSchema

# ~~Variable: PhoneNumberPurchaseRequestSchema~~

```ts
const PhoneNumberPurchaseRequestSchema: ZodObject<{
  friendlyName: ZodString;
  phoneNumber: ZodString;
  requestTime: ZodDefault<ZodNumber>;
  providerType: ZodEnum<typeof ProviderType>;
  amount: ZodNumber;
  currency: ZodDefault<ZodString>;
  phoneNumberInfo: ZodUnknown;
  status: ZodDefault<ZodEnum<typeof PhonePurchaseStatus>>;
  numberType: ZodDefault<ZodEnum<typeof PhoneNumberType>>;
  metadata: ZodOptional<ZodNullable<ZodRecord<ZodString, ZodAny>>>;
}, $strip> = CreatePhoneNumberPurchaseSchema;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:360](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/phone-number.schema.ts#L360)

Legacy schema export for backwards compatibility.

## Deprecated

Use CreatePhoneNumberPurchaseSchema instead.
