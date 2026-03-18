[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

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

Defined in: [src/core/service-configuration/provisioning-config.ts:286](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L286)

Type definition for translation chain configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/base.schema.ts#L10) |
| <a id="chainname"></a> `chainName` | `string` | [src/core/service-configuration/provisioning-config.ts:275](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L275) |
| <a id="description"></a> `description?` | `string` | [src/core/service-configuration/provisioning-config.ts:276](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L276) |
| <a id="sttconfig"></a> `sttConfig` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:277](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L277) |
| `sttConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:40](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L40) |
| `sttConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:41](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L41) |
| <a id="processingmodelid"></a> `processingModelId` | `string` | [src/core/service-configuration/provisioning-config.ts:278](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L278) |
| <a id="ttsconfig"></a> `ttsConfig` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | [src/core/service-configuration/provisioning-config.ts:279](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L279) |
| `ttsConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:79](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L79) |
| `ttsConfig.voiceId` | `string` | [src/core/service-configuration/provisioning-config.ts:80](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L80) |
| `ttsConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:81](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L81) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/provisioning-config.ts:82](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L82) |
| <a id="istranslation"></a> `isTranslation` | `boolean` | [src/core/service-configuration/provisioning-config.ts:280](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/provisioning-config.ts#L280) |
