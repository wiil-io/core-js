[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.36**](../../README.md)

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

Defined in: [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:104](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L104)

Text-to-speech model configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:49](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L49) |
| <a id="providermodelid"></a> `providerModelId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:50](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L50) |
| <a id="languageid"></a> `languageId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:77](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L77) |
| <a id="voiceid"></a> `voiceId?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:78](https://github.com/wiil-io/core-js/blob/fb13aab2cdb27f890ccfbc762905c0de67688751/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L78) |
