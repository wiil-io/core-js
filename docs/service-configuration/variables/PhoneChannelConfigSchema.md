[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneChannelConfigSchema

# Variable: PhoneChannelConfigSchema

```ts
const PhoneChannelConfigSchema: ZodObject<{
  phoneConfigurationId: ZodString;
  hasForwardingEnabled: ZodDefault<ZodBoolean>;
  forwardingPhoneNumber: ZodNullable<ZodOptional<ZodString>>;
}, $strip>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:19](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/interaction-channels.schema.ts#L19)

Zod schema for phone channel configuration.

Configuration specific to phone-based channels (calls and SMS).
