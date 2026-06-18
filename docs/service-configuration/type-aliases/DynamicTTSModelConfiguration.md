[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicTTSModelConfiguration

# Type Alias: DynamicTTSModelConfiguration

```ts
type DynamicTTSModelConfiguration = {
  providerType: SupportedProprietor;
  providerModelId: string;
  languageId: string;
  voiceId?: string;
};
```

Defined in: [src/core/service-configuration/base-agent-setup.ts:115](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/service-configuration/base-agent-setup.ts#L115)

Text-to-speech model configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/base-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/service-configuration/base-agent-setup.ts#L47) |
| <a id="providermodelid"></a> `providerModelId` | `string` | [src/core/service-configuration/base-agent-setup.ts:48](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/service-configuration/base-agent-setup.ts#L48) |
| <a id="languageid"></a> `languageId` | `string` | [src/core/service-configuration/base-agent-setup.ts:73](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/service-configuration/base-agent-setup.ts#L73) |
| <a id="voiceid"></a> `voiceId?` | `string` | [src/core/service-configuration/base-agent-setup.ts:74](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/service-configuration/base-agent-setup.ts#L74) |
