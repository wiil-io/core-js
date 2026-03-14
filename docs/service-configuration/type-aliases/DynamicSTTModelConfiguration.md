[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicSTTModelConfiguration

# Type Alias: DynamicSTTModelConfiguration

```ts
type DynamicSTTModelConfiguration = {
  providerType: SupportedProprietor;
  providerModelId: string;
  languageId: string;
};
```

Defined in: src/core/service-configuration/base-agent-setup.ts:114

Speech-to-text model configuration schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="providertype"></a> `providerType` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | src/core/service-configuration/base-agent-setup.ts:47 |
| <a id="providermodelid"></a> `providerModelId` | `string` | src/core/service-configuration/base-agent-setup.ts:48 |
| <a id="languageid"></a> `languageId` | `string` | src/core/service-configuration/base-agent-setup.ts:60 |
