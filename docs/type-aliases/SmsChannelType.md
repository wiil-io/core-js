[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / SmsChannelType

# Type Alias: SmsChannelType

```ts
type SmsChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  deploymentType: SMS;
  configuration: {
     phoneConfigurationId: string;
     hasForwardingEnabled: boolean;
     forwardingPhoneNumber?: string | null;
  };
};
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:128

Type definition for SMS channel.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | - | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:63 |
| <a id="channelname"></a> `channelName?` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:65 |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | - | src/core/service-configuration/interaction-channels.schema.ts:66 |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:97 |
| <a id="deploymenttype"></a> `deploymentType` | [`SMS`](../enumerations/DeploymentType.md#sms) | - | src/core/service-configuration/interaction-channels.schema.ts:98 |
| <a id="configuration"></a> `configuration` | \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} | `PhoneChannelConfigSchema` | src/core/service-configuration/interaction-channels.schema.ts:99 |
| `configuration.phoneConfigurationId` | `string` | - | src/core/service-configuration/interaction-channels.schema.ts:20 |
| `configuration.hasForwardingEnabled` | `boolean` | - | src/core/service-configuration/interaction-channels.schema.ts:21 |
| `configuration.forwardingPhoneNumber?` | `string` \| `null` | - | src/core/service-configuration/interaction-channels.schema.ts:22 |
