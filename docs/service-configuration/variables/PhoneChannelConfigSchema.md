[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:33](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/interaction-channels.schema.ts#L33)

Zod schema for phone channel configuration.

Configuration specific to phone-based channels supporting voice calls and SMS messaging.
This configuration links to a PhoneConfiguration resource that manages the actual phone number
and telephony provider settings.

## Remarks

**Architecture Context:**
- **Used By**: Call and SMS deployment channels
- **Relationship**: References PhoneConfiguration via phoneConfigurationId
- **Features**: Supports call forwarding to external numbers for escalation or overflow
