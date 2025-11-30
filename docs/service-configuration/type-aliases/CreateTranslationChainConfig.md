[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateTranslationChainConfig

# Type Alias: CreateTranslationChainConfig

```ts
type CreateTranslationChainConfig = {
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

Defined in: [src/core/service-configuration/provisioning-config.ts:273](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L273)

Type definition for creating a translation chain configuration.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="organizationid"></a> `organizationId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:223](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L223) |
| <a id="chainname"></a> `chainName` | `string` | - | [src/core/service-configuration/provisioning-config.ts:224](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L224) |
| <a id="description"></a> `description?` | `string` | - | [src/core/service-configuration/provisioning-config.ts:225](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L225) |
| <a id="sttconfig"></a> `sttConfig` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | `SttModelConfigSchema` | [src/core/service-configuration/provisioning-config.ts:226](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L226) |
| `sttConfig.modelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:25](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L25) |
| `sttConfig.defaultLanguage` | `string` | - | [src/core/service-configuration/provisioning-config.ts:26](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L26) |
| <a id="processingmodelid"></a> `processingModelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:227](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L227) |
| <a id="ttsconfig"></a> `ttsConfig` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | `TtsModelConfigSchema` | [src/core/service-configuration/provisioning-config.ts:228](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L228) |
| `ttsConfig.modelId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:54](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L54) |
| `ttsConfig.voiceId` | `string` | - | [src/core/service-configuration/provisioning-config.ts:55](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L55) |
| `ttsConfig.defaultLanguage` | `string` | - | [src/core/service-configuration/provisioning-config.ts:56](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L56) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | - | [src/core/service-configuration/provisioning-config.ts:57](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L57) |
| <a id="istranslation"></a> `isTranslation` | `boolean` | - | [src/core/service-configuration/provisioning-config.ts:267](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L267) |
