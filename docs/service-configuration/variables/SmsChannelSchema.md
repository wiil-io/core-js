[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.16**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SmsChannelSchema

# Variable: SmsChannelSchema

```ts
const SmsChannelSchema: ZodObject<SmsChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:146](https://github.com/wiil-io/core-js/blob/4af96f1b4cda300f688910b998d30dd9a1d9a3f0/src/core/service-configuration/interaction-channels.schema.ts#L146)

Zod schema for SMS-based deployment channel.

Defines an SMS messaging channel for text-based communication. Uses the same telephony
infrastructure as voice calls but optimized for asynchronous text messaging.

## Remarks

**Architecture Context:**
- **Channel Type**: Phone (SMS Messaging)
- **Integration**: SMS gateways, telephony providers
- **Features**: Asynchronous messaging, message history, multimedia support (MMS)
