[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PhoneChannelConfigSchema

# Variable: PhoneChannelConfigSchema

```ts
const PhoneChannelConfigSchema: ZodObject<{
  phoneConfigurationId: ZodString;
  hasForwardingEnabled: ZodDefault<ZodBoolean>;
  forwardingPhoneNumber: ZodNullable<ZodOptional<ZodString>>;
}, $strip>;
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:19

Zod schema for phone channel configuration.

Configuration specific to phone-based channels (calls and SMS).
