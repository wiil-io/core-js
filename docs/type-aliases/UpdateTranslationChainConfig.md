[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateTranslationChainConfig

# Type Alias: UpdateTranslationChainConfig

```ts
type UpdateTranslationChainConfig = {
  version?: number;
  organizationId?: string;
  chainName?: string;
  description?: string;
  sttConfig?: {
     modelId: string;
     defaultLanguage: string;
  };
  processingModelId?: string;
  ttsConfig?: {
     modelId: string;
     voiceId: string;
     defaultLanguage: string;
     voiceSettings?: Record<string, any>;
  };
  isTranslation?: boolean;
  id: string;
};
```

Defined in: src/core/service-configuration/provisioning-config.ts:296

Type definition for updating a translation chain configuration.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | - | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId?` | `string` | - | src/core/service-configuration/provisioning-config.ts:223 |
| <a id="chainname"></a> `chainName?` | `string` | - | src/core/service-configuration/provisioning-config.ts:224 |
| <a id="description"></a> `description?` | `string` | - | src/core/service-configuration/provisioning-config.ts:225 |
| <a id="sttconfig"></a> `sttConfig?` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | `SttModelConfigSchema` | src/core/service-configuration/provisioning-config.ts:226 |
| `sttConfig.modelId` | `string` | - | src/core/service-configuration/provisioning-config.ts:25 |
| `sttConfig.defaultLanguage` | `string` | - | src/core/service-configuration/provisioning-config.ts:26 |
| <a id="processingmodelid"></a> `processingModelId?` | `string` | - | src/core/service-configuration/provisioning-config.ts:227 |
| <a id="ttsconfig"></a> `ttsConfig?` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | `TtsModelConfigSchema` | src/core/service-configuration/provisioning-config.ts:228 |
| `ttsConfig.modelId` | `string` | - | src/core/service-configuration/provisioning-config.ts:54 |
| `ttsConfig.voiceId` | `string` | - | src/core/service-configuration/provisioning-config.ts:55 |
| `ttsConfig.defaultLanguage` | `string` | - | src/core/service-configuration/provisioning-config.ts:56 |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | - | src/core/service-configuration/provisioning-config.ts:57 |
| <a id="istranslation"></a> `isTranslation?` | `boolean` | - | src/core/service-configuration/provisioning-config.ts:267 |
| <a id="id"></a> `id` | `string` | - | src/core/service-configuration/provisioning-config.ts:290 |
