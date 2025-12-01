[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.4**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TravnexSupportModel

# Type Alias: TravnexSupportModel

```ts
type TravnexSupportModel = {
  modelId: string;
  proprietor: SupportedProprietor;
  name: string;
  provider_model_id?: string;
  description: string;
  type: LLMType;
  discontinued: boolean;
  supportedVoices?:   | {
     voiceId: string;
     name: string;
     description: string;
     gender: "neutral" | "male" | "female";
     language?: string | null;
     isDefault: boolean;
   }[]
     | null;
  supportLanguages?:   | {
     languageId: string;
     name: string;
     code: string;
     isDefault: boolean;
     isExperimental: boolean;
   }[]
     | null;
};
```

Defined in: [src/core/service-configuration/support-llm.ts:78](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L78)

Type definition for Travnex support model.

Represents a complete model configuration in the Travnex support registry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId` | `string` | [src/core/service-configuration/support-llm.ts:62](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L62) |
| <a id="proprietor"></a> `proprietor` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/support-llm.ts:63](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L63) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/support-llm.ts:64](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L64) |
| <a id="provider_model_id"></a> `provider_model_id?` | `string` | [src/core/service-configuration/support-llm.ts:65](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L65) |
| <a id="description"></a> `description` | `string` | [src/core/service-configuration/support-llm.ts:66](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L66) |
| <a id="type"></a> `type` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | [src/core/service-configuration/support-llm.ts:67](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L67) |
| <a id="discontinued"></a> `discontinued` | `boolean` | [src/core/service-configuration/support-llm.ts:68](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L68) |
| <a id="supportedvoices"></a> `supportedVoices?` | \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null` | [src/core/service-configuration/support-llm.ts:69](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L69) |
| <a id="supportlanguages"></a> `supportLanguages?` | \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null` | [src/core/service-configuration/support-llm.ts:70](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/core/service-configuration/support-llm.ts#L70) |
