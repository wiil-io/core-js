[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / TravnexSupportModel

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

Defined in: src/core/service-configuration/support-llm.ts:61

Type definition for Travnex support model.

Represents a complete model configuration in the Travnex support registry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId` | `string` | src/core/service-configuration/support-llm.ts:45 |
| <a id="proprietor"></a> `proprietor` | [`SupportedProprietor`](../enumerations/SupportedProprietor.md) | src/core/service-configuration/support-llm.ts:46 |
| <a id="name"></a> `name` | `string` | src/core/service-configuration/support-llm.ts:47 |
| <a id="provider_model_id"></a> `provider_model_id?` | `string` | src/core/service-configuration/support-llm.ts:48 |
| <a id="description"></a> `description` | `string` | src/core/service-configuration/support-llm.ts:49 |
| <a id="type"></a> `type` | [`LLMType`](../enumerations/LLMType.md) | src/core/service-configuration/support-llm.ts:50 |
| <a id="discontinued"></a> `discontinued` | `boolean` | src/core/service-configuration/support-llm.ts:51 |
| <a id="supportedvoices"></a> `supportedVoices?` | \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null` | src/core/service-configuration/support-llm.ts:52 |
| <a id="supportlanguages"></a> `supportLanguages?` | \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null` | src/core/service-configuration/support-llm.ts:53 |
