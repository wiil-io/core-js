[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TranslationChainConfig

# Type Alias: TranslationChainConfig

```ts
type TranslationChainConfig = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  chainName: string;
  description?: string;
  sttConfig: {
     modelId: string;
     defaultLanguage: string;
  };
  processingModelId: string;
  ttsConfig: {
     modelId: string;
     voiceId: string;
     defaultLanguage: string;
     voiceSettings?: Record<string, any>;
  };
  isTranslation: boolean;
};
```

Defined in: [src/core/service-configuration/provisioning-config.ts:278](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L278)

Type definition for translation chain configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/base.schema.ts#L10) |
| <a id="chainname"></a> `chainName` | `string` | [src/core/service-configuration/provisioning-config.ts:267](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L267) |
| <a id="description"></a> `description?` | `string` | [src/core/service-configuration/provisioning-config.ts:268](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L268) |
| <a id="sttconfig"></a> `sttConfig` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:269](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L269) |
| `sttConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:39](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L39) |
| `sttConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:40](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L40) |
| <a id="processingmodelid"></a> `processingModelId` | `string` | [src/core/service-configuration/provisioning-config.ts:270](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L270) |
| <a id="ttsconfig"></a> `ttsConfig` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | [src/core/service-configuration/provisioning-config.ts:271](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L271) |
| `ttsConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:78](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L78) |
| `ttsConfig.voiceId` | `string` | [src/core/service-configuration/provisioning-config.ts:79](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L79) |
| `ttsConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:80](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L80) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/provisioning-config.ts:81](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L81) |
| <a id="istranslation"></a> `isTranslation` | `boolean` | [src/core/service-configuration/provisioning-config.ts:272](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L272) |
