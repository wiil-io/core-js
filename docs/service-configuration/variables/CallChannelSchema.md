[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.27**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CallChannelSchema

# Variable: CallChannelSchema

```ts
const CallChannelSchema: ZodObject<CallChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:128](https://github.com/wiil-io/core-js/blob/4a6a8849502ba7a59ffc90a6343c4d70c3487085/src/core/service-configuration/interaction-channels.schema.ts#L128)

Zod schema for call-based deployment channel.

Defines a voice telephony channel for inbound and outbound phone calls. Integrates with
telephony providers (SignalWire, Twilio) through PhoneConfiguration.

## Remarks

**Architecture Context:**
- **Channel Type**: Phone (Voice Calls)
- **Integration**: PBX systems, contact centers, SIP trunks, cloud telephony
- **Features**: Call recording, DTMF input, call forwarding, SIP/VoIP support

## Example

```typescript
const callChannel: CallChannelType = {
  id: '123*',
  channelIdentifier: '+12125551234',
  deploymentType: DeploymentType.CALLS,
  recordingEnabled: true,
  configuration: {
    phoneConfigurationId: '789*',
    hasForwardingEnabled: false
  }
};
```
