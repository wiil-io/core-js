[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

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

Defined in: [src/core/service-configuration/support-llm.ts:61](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L61)

Type definition for Travnex support model.

Represents a complete model configuration in the Travnex support registry.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modelid"></a> `modelId` | `string` | [src/core/service-configuration/support-llm.ts:45](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L45) |
| <a id="proprietor"></a> `proprietor` | [`SupportedProprietor`](../../type-definitions/enumerations/SupportedProprietor.md) | [src/core/service-configuration/support-llm.ts:46](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L46) |
| <a id="name"></a> `name` | `string` | [src/core/service-configuration/support-llm.ts:47](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L47) |
| <a id="provider_model_id"></a> `provider_model_id?` | `string` | [src/core/service-configuration/support-llm.ts:48](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L48) |
| <a id="description"></a> `description` | `string` | [src/core/service-configuration/support-llm.ts:49](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L49) |
| <a id="type"></a> `type` | [`LLMType`](../../type-definitions/enumerations/LLMType.md) | [src/core/service-configuration/support-llm.ts:50](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L50) |
| <a id="discontinued"></a> `discontinued` | `boolean` | [src/core/service-configuration/support-llm.ts:51](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L51) |
| <a id="supportedvoices"></a> `supportedVoices?` | \| \{ `voiceId`: `string`; `name`: `string`; `description`: `string`; `gender`: `"neutral"` \| `"male"` \| `"female"`; `language?`: `string` \| `null`; `isDefault`: `boolean`; \}[] \| `null` | [src/core/service-configuration/support-llm.ts:52](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L52) |
| <a id="supportlanguages"></a> `supportLanguages?` | \| \{ `languageId`: `string`; `name`: `string`; `code`: `string`; `isDefault`: `boolean`; `isExperimental`: `boolean`; \}[] \| `null` | [src/core/service-configuration/support-llm.ts:53](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L53) |
