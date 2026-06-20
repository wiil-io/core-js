[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneChannelConfigSchema

# Variable: PhoneChannelConfigSchema

```ts
const PhoneChannelConfigSchema: ZodObject<{
  phoneConfigurationId: ZodString;
}, $strip>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:33](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/service-configuration/interaction-channels.schema.ts#L33)

Zod schema for phone channel configuration.

Configuration specific to phone-based channels supporting voice calls and SMS messaging.
This configuration links to a PhoneConfiguration resource that manages the actual phone number
and telephony provider settings.

## Remarks

**Architecture Context:**
- **Used By**: Call and SMS deployment channels
- **Relationship**: References PhoneConfiguration via phoneConfigurationId
- **Features**: Supports call forwarding to external numbers for escalation or overflow
