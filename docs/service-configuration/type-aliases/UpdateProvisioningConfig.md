[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateProvisioningConfig

# Type Alias: UpdateProvisioningConfig

```ts
type UpdateProvisioningConfig = {
  organizationId?: string;
  chainName?: string;
  description?: string;
  sttConfig?: {
     modelId: string;
     defaultLanguage: string;
  };
  agentConfigurationId?: string;
  ttsConfig?: {
     modelId: string;
     voiceId: string;
     defaultLanguage: string;
     voiceSettings?: Record<string, any>;
  };
  id: string;
};
```

Defined in: [src/core/service-configuration/provisioning-config.ts:180](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L180)

Type definition for updating a provisioning configuration chain.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId?` | `string` | - | [src/core/service-configuration/provisioning-config.ts:105](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L105) |
| <a id="chainname"></a> `chainName?` | `string` | - | [src/core/service-configuration/provisioning-config.ts:106](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L106) |
| <a id="description"></a> `description?` | `string` | - | [src/core/service-configuration/provisioning-config.ts:107](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L107) |
| <a id="sttconfig"></a> `sttConfig?` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | `SttModelConfigSchema` | [src/core/service-configuration/provisioning-config.ts:108](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L108) |
| `sttConfig.modelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:25](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L25) |
| `sttConfig.defaultLanguage` | `string` | - | [src/core/service-configuration/provisioning-config.ts:26](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L26) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | - | [src/core/service-configuration/provisioning-config.ts:109](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L109) |
| <a id="ttsconfig"></a> `ttsConfig?` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | `TtsModelConfigSchema` | [src/core/service-configuration/provisioning-config.ts:110](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L110) |
| `ttsConfig.modelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:54](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L54) |
| `ttsConfig.voiceId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:55](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L55) |
| `ttsConfig.defaultLanguage` | `string` | - | [src/core/service-configuration/provisioning-config.ts:56](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L56) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/provisioning-config.ts:57](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L57) |
| <a id="id"></a> `id` | `string` | - | [src/core/service-configuration/provisioning-config.ts:174](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L174) |
