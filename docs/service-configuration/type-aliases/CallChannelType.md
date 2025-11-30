[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CallChannelType

# Type Alias: CallChannelType

```ts
type CallChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  channelName?: string;
  recordingEnabled: boolean;
  channelIdentifier: string;
  deploymentType: CALLS;
  configuration: {
     phoneConfigurationId: string;
     hasForwardingEnabled: boolean;
     forwardingPhoneNumber?: string | null;
  };
};
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:120](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L120)

Type definition for call channel.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/base.schema.ts#L10) |
| <a id="channelname"></a> `channelName?` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:63](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L63) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | - | [src/core/service-configuration/interaction-channels.schema.ts:64](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L64) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:85](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L85) |
| <a id="deploymenttype"></a> `deploymentType` | [`CALLS`](../../type-definitions/enumerations/DeploymentType.md#calls) | - | [src/core/service-configuration/interaction-channels.schema.ts:86](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L86) |
| <a id="configuration"></a> `configuration` | \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} | `PhoneChannelConfigSchema` | [src/core/service-configuration/interaction-channels.schema.ts:87](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L87) |
| `configuration.phoneConfigurationId` | `string` | - | [src/core/service-configuration/interaction-channels.schema.ts:20](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L20) |
| `configuration.hasForwardingEnabled` | `boolean` | - | [src/core/service-configuration/interaction-channels.schema.ts:21](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L21) |
| `configuration.forwardingPhoneNumber?` | `string` \| `null` | - | [src/core/service-configuration/interaction-channels.schema.ts:22](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/interaction-channels.schema.ts#L22) |
