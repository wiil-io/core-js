[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.7**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfig

# Type Alias: UpdateTranslationChainConfig

```ts
type UpdateTranslationChainConfig = {
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

Defined in: [src/core/service-configuration/provisioning-config.ts:338](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L338)

Type definition for updating a translation chain configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="chainname"></a> `chainName?` | `string` | [src/core/service-configuration/provisioning-config.ts:267](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L267) |
| <a id="description"></a> `description?` | `string` | [src/core/service-configuration/provisioning-config.ts:268](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L268) |
| <a id="sttconfig"></a> `sttConfig?` | \{ `modelId`: `string`; `defaultLanguage`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:269](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L269) |
| `sttConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:39](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L39) |
| `sttConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:40](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L40) |
| <a id="processingmodelid"></a> `processingModelId?` | `string` | [src/core/service-configuration/provisioning-config.ts:270](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L270) |
| <a id="ttsconfig"></a> `ttsConfig?` | \{ `modelId`: `string`; `voiceId`: `string`; `defaultLanguage`: `string`; `voiceSettings?`: `Record`\<`string`, `any`\>; \} | [src/core/service-configuration/provisioning-config.ts:271](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L271) |
| `ttsConfig.modelId` | `string` | [src/core/service-configuration/provisioning-config.ts:78](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L78) |
| `ttsConfig.voiceId` | `string` | [src/core/service-configuration/provisioning-config.ts:79](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L79) |
| `ttsConfig.defaultLanguage` | `string` | [src/core/service-configuration/provisioning-config.ts:80](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L80) |
| `ttsConfig.voiceSettings?` | `Record`\<`string`, `any`\> | [src/core/service-configuration/provisioning-config.ts:81](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L81) |
| <a id="istranslation"></a> `isTranslation?` | `boolean` | [src/core/service-configuration/provisioning-config.ts:309](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L309) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/provisioning-config.ts:332](https://github.com/wiil-io/core-js/blob/4b63c8896ad37782b63ed301c387268f31cbfe58/src/core/service-configuration/provisioning-config.ts#L332) |
