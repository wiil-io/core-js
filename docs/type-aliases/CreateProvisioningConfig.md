[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateProvisioningConfig

# Type Alias: CreateProvisioningConfig

```ts
type CreateProvisioningConfig = {
  version?: number;
  organizationId: string;
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

Defined in: src/core/service-configuration/provisioning-config.ts:154

Type definition for creating a provisioning configuration chain.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | - | src/core/service-configuration/provisioning-config.ts:105 |
| <a id="chainname"></a> `chainName` | `string` | - | src/core/service-configuration/provisioning-config.ts:106 |
| <a id="description"></a> `description?` | `string` | - | src/core/service-configuration/provisioning-config.ts:107 |
| <a id="sttconfig"></a> `sttConfig` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | `SttModelConfigSchema` | src/core/service-configuration/provisioning-config.ts:108 |
| `sttConfig.modelId` | `string` | - | src/core/service-configuration/provisioning-config.ts:25 |
| `sttConfig.defaultLanguage` | `string` | - | src/core/service-configuration/provisioning-config.ts:26 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | - | src/core/service-configuration/provisioning-config.ts:109 |
| <a id="ttsconfig"></a> `ttsConfig` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | `TtsModelConfigSchema` | src/core/service-configuration/provisioning-config.ts:110 |
| `ttsConfig.modelId` | `string` | - | src/core/service-configuration/provisioning-config.ts:54 |
| `ttsConfig.voiceId` | `string` | - | src/core/service-configuration/provisioning-config.ts:55 |
| `ttsConfig.defaultLanguage` | `string` | - | src/core/service-configuration/provisioning-config.ts:56 |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/provisioning-config.ts:57 |
