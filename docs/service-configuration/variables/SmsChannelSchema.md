[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.9**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SmsChannelSchema

# Variable: SmsChannelSchema

```ts
const SmsChannelSchema: ZodObject<SmsChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:148](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/service-configuration/interaction-channels.schema.ts#L148)

Zod schema for SMS-based deployment channel.

Defines an SMS messaging channel for text-based communication. Uses the same telephony
infrastructure as voice calls but optimized for asynchronous text messaging.

## Remarks

**Architecture Context:**
- **Channel Type**: Phone (SMS Messaging)
- **Integration**: SMS gateways, telephony providers
- **Features**: Asynchronous messaging, message history, multimedia support (MMS)
