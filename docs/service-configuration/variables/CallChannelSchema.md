[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CallChannelSchema

# Variable: CallChannelSchema

```ts
const CallChannelSchema: ZodObject<CallChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:84](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L84)

Zod schema for call-based deployment channel.

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
