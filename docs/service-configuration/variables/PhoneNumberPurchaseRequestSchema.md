[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseRequestSchema

# ~~Variable: PhoneNumberPurchaseRequestSchema~~

```ts
const PhoneNumberPurchaseRequestSchema: ZodObject<{
  friendlyName: ZodString;
  phoneNumber: ZodString;
  organizationId: ZodString;
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

Defined in: [src/core/service-configuration/phone-number.schema.ts:352](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/phone-number.schema.ts#L352)

Legacy schema export for backwards compatibility.

## Deprecated

Use CreatePhoneNumberPurchaseSchema instead.
