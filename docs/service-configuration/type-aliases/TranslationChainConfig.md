[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TranslationChainConfig

# Type Alias: TranslationChainConfig

```ts
type TranslationChainConfig = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  organizationId: string;
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

Defined in: [src/core/service-configuration/provisioning-config.ts:235](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L235)

Type definition for translation chain configuration.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | - | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | - | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/base.schema.ts#L10) |
| <a id="organizationid"></a> `organizationId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:223](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L223) |
| <a id="chainname"></a> `chainName` | `string` | - | [src/core/service-configuration/provisioning-config.ts:224](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L224) |
| <a id="description"></a> `description?` | `string` | - | [src/core/service-configuration/provisioning-config.ts:225](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L225) |
| <a id="sttconfig"></a> `sttConfig` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | `SttModelConfigSchema` | [src/core/service-configuration/provisioning-config.ts:226](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L226) |
| `sttConfig.modelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:25](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L25) |
| `sttConfig.defaultLanguage` | `string` | - | [src/core/service-configuration/provisioning-config.ts:26](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L26) |
| <a id="processingmodelid"></a> `processingModelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:227](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L227) |
| <a id="ttsconfig"></a> `ttsConfig` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | `TtsModelConfigSchema` | [src/core/service-configuration/provisioning-config.ts:228](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L228) |
| `ttsConfig.modelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:54](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L54) |
| `ttsConfig.voiceId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:55](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L55) |
| `ttsConfig.defaultLanguage` | `string` | - | [src/core/service-configuration/provisioning-config.ts:56](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L56) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/provisioning-config.ts:57](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L57) |
| <a id="istranslation"></a> `isTranslation` | `boolean` | - | [src/core/service-configuration/provisioning-config.ts:229](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L229) |
