[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.47**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfig

# Type Alias: UpdateTranslationChainConfig

```ts
type UpdateTranslationChainConfig = {
  chainName?: string;
  description?: string;
  sttConfig?: {
     providerType: SupportedProprietor;
     providerModelId: string;
     languageId: string;
  };
  processingConfig?: {
     providerType: SupportedProprietor;
     providerModelId: string;
  };
  ttsConfig?: {
     providerType: SupportedProprietor;
     providerModelId: string;
     languageId: string;
     voiceId?: string;
  };
  isTranslation?: boolean;
  id: string;
};
```

Defined in: [src/core/service-configuration/provisioning-config.ts:350](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L350)

Type definition for updating a translation chain configuration.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="chainname"></a> `chainName?` | `string` | [src/core/service-configuration/provisioning-config.ts:185](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L185) |
| <a id="description"></a> `description?` | `string` | [src/core/service-configuration/provisioning-config.ts:186](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L186) |
| <a id="sttconfig"></a> `sttConfig?` | \{ `providerType`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `providerModelId`: `string`; `languageId`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:187](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L187) |
| `sttConfig.providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/base-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L47) |
| `sttConfig.providerModelId` | `string` | [src/core/service-configuration/base-agent-setup.ts:48](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L48) |
| `sttConfig.languageId` | `string` | [src/core/service-configuration/base-agent-setup.ts:60](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L60) |
| <a id="processingconfig"></a> `processingConfig?` | \{ `providerType`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `providerModelId`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:188](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L188) |
| `processingConfig.providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/base-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L47) |
| `processingConfig.providerModelId` | `string` | [src/core/service-configuration/base-agent-setup.ts:48](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L48) |
| <a id="ttsconfig"></a> `ttsConfig?` | \{ `providerType`: [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md); `providerModelId`: `string`; `languageId`: `string`; `voiceId?`: `string`; \} | [src/core/service-configuration/provisioning-config.ts:189](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L189) |
| `ttsConfig.providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/base-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L47) |
| `ttsConfig.providerModelId` | `string` | [src/core/service-configuration/base-agent-setup.ts:48](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L48) |
| `ttsConfig.languageId` | `string` | [src/core/service-configuration/base-agent-setup.ts:73](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L73) |
| `ttsConfig.voiceId?` | `string` | [src/core/service-configuration/base-agent-setup.ts:74](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/base-agent-setup.ts#L74) |
| <a id="istranslation"></a> `isTranslation?` | `boolean` | [src/core/service-configuration/provisioning-config.ts:318](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L318) |
| <a id="id"></a> `id` | `string` | [src/core/service-configuration/provisioning-config.ts:344](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L344) |
