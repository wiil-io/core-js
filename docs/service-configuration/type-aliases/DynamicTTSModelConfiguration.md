[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.49**](../../README.md)

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

Defined in: [src/core/service-configuration/base-agent-setup.ts:115](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/base-agent-setup.ts#L115)

Text-to-speech model configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/base-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/base-agent-setup.ts#L47) |
| <a id="providermodelid"></a> `providerModelId` | `string` | [src/core/service-configuration/base-agent-setup.ts:48](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/base-agent-setup.ts#L48) |
| <a id="languageid"></a> `languageId` | `string` | [src/core/service-configuration/base-agent-setup.ts:73](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/base-agent-setup.ts#L73) |
| <a id="voiceid"></a> `voiceId?` | `string` | [src/core/service-configuration/base-agent-setup.ts:74](https://github.com/wiil-io/core-js/blob/3a057dbb516d45ce94599e33861c329418b4e5b3/src/core/service-configuration/base-agent-setup.ts#L74) |
