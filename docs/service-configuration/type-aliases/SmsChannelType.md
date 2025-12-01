[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SmsChannelType

# Type Alias: SmsChannelType

```ts
type SmsChannelType = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
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

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:199](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L199)

Type definition for SMS channel.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/base.schema.ts#L10) |
| <a id="channelname"></a> `channelName?` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:100](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L100) |
| <a id="recordingenabled"></a> `recordingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:101](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L101) |
| <a id="channelidentifier"></a> `channelIdentifier` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:149](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L149) |
| <a id="deploymenttype"></a> `deploymentType` | [`SMS`](../../type-definitions/enumerations/DeploymentType.md#sms) | [src/core/service-configuration/interaction-channels.schema.ts:150](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L150) |
| <a id="configuration"></a> `configuration` | \{ `phoneConfigurationId`: `string`; `hasForwardingEnabled`: `boolean`; `forwardingPhoneNumber?`: `string` \| `null`; \} | [src/core/service-configuration/interaction-channels.schema.ts:151](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L151) |
| `configuration.phoneConfigurationId` | `string` | [src/core/service-configuration/interaction-channels.schema.ts:34](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L34) |
| `configuration.hasForwardingEnabled` | `boolean` | [src/core/service-configuration/interaction-channels.schema.ts:35](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L35) |
| `configuration.forwardingPhoneNumber?` | `string` \| `null` | [src/core/service-configuration/interaction-channels.schema.ts:36](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/interaction-channels.schema.ts#L36) |
