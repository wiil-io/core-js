[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / WiilSupportModel

# Type Alias: WiilSupportModel

```ts
type WiilSupportModel = {
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

Defined in: [src/core/service-configuration/support-llm.ts:82](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L82)

Type definition for WIIL Platform support model.

Represents a complete model configuration in the WIIL Platform support registry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId` | `string` | [src/core/service-configuration/support-llm.ts:66](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L66) |
| <a id="proprietor"></a> `proprietor` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/support-llm.ts:67](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L67) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/support-llm.ts:68](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L68) |
| <a id="provider_model_id"></a> `provider_model_id?` | `string` | [src/core/service-configuration/support-llm.ts:69](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L69) |
| <a id="description"></a> `description` | `string` | [src/core/service-configuration/support-llm.ts:70](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L70) |
| <a id="type"></a> `type` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | [src/core/service-configuration/support-llm.ts:71](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L71) |
| <a id="discontinued"></a> `discontinued` | `boolean` | [src/core/service-configuration/support-llm.ts:72](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L72) |
| <a id="supportedvoices"></a> `supportedVoices?` | \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null` | [src/core/service-configuration/support-llm.ts:73](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L73) |
| <a id="supportlanguages"></a> `supportLanguages?` | \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null` | [src/core/service-configuration/support-llm.ts:74](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/support-llm.ts#L74) |
