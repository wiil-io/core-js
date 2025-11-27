[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / DeploymentChannelUpdate

# Type Alias: DeploymentChannelUpdate

```ts
type DeploymentChannelUpdate = {
  id: string;
  organizationId?: string;
  deploymentType?:   | CALLS
     | SMS
     | WEB
     | MOBILE
     | WHATSAPP
     | EMAIL;
  channelName?: string;
  recordingEnabled?: boolean;
  channelIdentifier?: string;
  configuration?: Record<string, any>;
};
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:321

Type definition for deployment channel update (legacy compatibility).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/service-configuration/interaction-channels.schema.ts:260 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/service-configuration/interaction-channels.schema.ts:261 |
| <a id="deploymenttype"></a> `deploymentType?` | \| [`CALLS`](../enumerations/DeploymentType.md#calls) \| [`SMS`](../enumerations/DeploymentType.md#sms) \| [`WEB`](../enumerations/DeploymentType.md#web) \| [`MOBILE`](../enumerations/DeploymentType.md#mobile) \| [`WHATSAPP`](../enumerations/DeploymentType.md#whatsapp) \| [`EMAIL`](../enumerations/DeploymentType.md#email) | src/core/service-configuration/interaction-channels.schema.ts:262 |
| <a id="channelname"></a> `channelName?` | `string` | src/core/service-configuration/interaction-channels.schema.ts:263 |
| <a id="recordingenabled"></a> `recordingEnabled?` | `boolean` | src/core/service-configuration/interaction-channels.schema.ts:264 |
| <a id="channelidentifier"></a> `channelIdentifier?` | `string` | src/core/service-configuration/interaction-channels.schema.ts:265 |
| <a id="configuration"></a> `configuration?` | `Record`\<`string`, `any`\> | src/core/service-configuration/interaction-channels.schema.ts:266 |
