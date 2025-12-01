[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CallChannelSchema

# Variable: CallChannelSchema

```ts
const CallChannelSchema: ZodObject<CallChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:130](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/interaction-channels.schema.ts#L130)

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
