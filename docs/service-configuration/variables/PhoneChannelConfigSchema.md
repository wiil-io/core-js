[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.24**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / PhoneChannelConfigSchema

# Variable: PhoneChannelConfigSchema

```ts
const PhoneChannelConfigSchema: ZodObject<{
  phoneConfigurationId: ZodString;
}, $strip>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:33](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/service-configuration/interaction-channels.schema.ts#L33)

Zod schema for phone channel configuration.

Configuration specific to phone-based channels supporting voice calls and SMS messaging.
This configuration links to a PhoneConfiguration resource that manages the actual phone number
and telephony provider settings.

## Remarks

**Architecture Context:**
- **Used By**: Call and SMS deployment channels
- **Relationship**: References PhoneConfiguration via phoneConfigurationId
- **Features**: Supports call forwarding to external numbers for escalation or overflow
