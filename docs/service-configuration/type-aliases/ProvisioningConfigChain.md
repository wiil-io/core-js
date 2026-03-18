[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ProvisioningConfigChain

# Type Alias: ProvisioningConfigChain

```ts
type ProvisioningConfigChain = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  chainName: string;
  description?: string;
  sttConfig: {
     modelId: string;
     defaultLanguage: string;
  };
  agentConfigurationId: string;
  ttsConfig: {
     modelId: string;
     voiceId: string;
     defaultLanguage: string;
     voiceSettings?: Record<string, any>;
  };
};
```

Defined in: [src/core/service-configuration/provisioning-config.ts:151](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L151)

Type definition for provisioning configuration chain.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/base.schema.ts#L10) |
| <a id="chainname"></a> `chainName` | `string` | [src/core/service-configuration/provisioning-config.ts:141](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L141) |
| <a id="description"></a> `description?` | `string` | [src/core/service-configuration/provisioning-config.ts:142](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L142) |
| <a id="sttconfig"></a> `sttConfig` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:143](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L143) |
| `sttConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:40](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L40) |
| `sttConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:41](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L41) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/provisioning-config.ts:144](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L144) |
| <a id="ttsconfig"></a> `ttsConfig` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | [src/core/service-configuration/provisioning-config.ts:145](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L145) |
| `ttsConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:79](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L79) |
| `ttsConfig.voiceId` | `string` | [src/core/service-configuration/provisioning-config.ts:80](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L80) |
| `ttsConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:81](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L81) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/provisioning-config.ts:82](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/provisioning-config.ts#L82) |
