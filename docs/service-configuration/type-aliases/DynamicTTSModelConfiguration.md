[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.43**](../../README.md)

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

Defined in: [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:121](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L121)

Text-to-speech model configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:50](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L50) |
| <a id="providermodelid"></a> `providerModelId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:51](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L51) |
| <a id="languageid"></a> `languageId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:78](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L78) |
| <a id="voiceid"></a> `voiceId?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:79](https://github.com/wiil-io/core-js/blob/042f5887f500e78f6e451a45268f58c38e51ac7e/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L79) |
