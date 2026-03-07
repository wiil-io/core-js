[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.45**](../../README.md)

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

Defined in: [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:121](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L121)

Text-to-speech model configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:50](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L50) |
| <a id="providermodelid"></a> `providerModelId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:51](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L51) |
| <a id="languageid"></a> `languageId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:78](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L78) |
| <a id="voiceid"></a> `voiceId?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:79](https://github.com/wiil-io/core-js/blob/ae110e467f185fc0bb9c7f87238dd2972a8fac8a/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L79) |
