[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CallChannelSchema

# Variable: CallChannelSchema

```ts
const CallChannelSchema: ZodObject<CallChannelType>;
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:87

Zod schema for call-based deployment channel.

## Example

```typescript
const callChannel: CallChannelType = {
  id: 'chan-123',
  organizationId: 'org-456',
  channelIdentifier: '+12125551234',
  deploymentType: DeploymentType.CALLS,
  recordingEnabled: true,
  configuration: {
    phoneConfigurationId: 'phone-config-789',
    hasForwardingEnabled: false
  }
};
```
