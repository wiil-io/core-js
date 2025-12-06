[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.26**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneNumberPurchaseRequestSchema

# ~~Variable: PhoneNumberPurchaseRequestSchema~~

```ts
const PhoneNumberPurchaseRequestSchema: ZodObject<{
  friendlyName: ZodString;
  phoneNumber: ZodString;
  providerType: ZodEnum<typeof ProviderType>;
  numberType: ZodDefault<ZodEnum<typeof PhoneNumberType>>;
}, $strip> = CreatePhoneNumberPurchaseSchema;
```

Defined in: [src/core/service-configuration/phone-number.schema.ts:322](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/service-configuration/phone-number.schema.ts#L322)

Legacy schema export for backwards compatibility.

## Deprecated

Use CreatePhoneNumberPurchaseSchema instead.
