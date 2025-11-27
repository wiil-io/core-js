[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneNumberPurchaseRequestSchema

# ~~Variable: PhoneNumberPurchaseRequestSchema~~

```ts
const PhoneNumberPurchaseRequestSchema: ZodObject<{
  version: ZodOptional<ZodNumber>;
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

Defined in: src/core/service-configuration/phone-number.schema.ts:352

Legacy schema export for backwards compatibility.

## Deprecated

Use CreatePhoneNumberPurchaseSchema instead.
