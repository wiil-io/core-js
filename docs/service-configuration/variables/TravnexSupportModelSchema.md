[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TravnexSupportModelSchema

# Variable: TravnexSupportModelSchema

```ts
const TravnexSupportModelSchema: ZodObject<TravnexSupportModel>;
```

Defined in: [src/core/service-configuration/support-llm.ts:44](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/support-llm.ts#L44)

Zod schema for Travnex supported model configuration.

Represents a model registered in the Travnex platform's support registry,
including model metadata, capabilities, and supported voices/languages.

## Example

```typescript
const supportModel: TravnexSupportModel = {
  modelId: 'gpt-4-turbo',
  proprietor: SupportedProprietor.OPENAI,
  name: 'GPT-4 Turbo',
  provider_model_id: 'gpt-4-1106-preview',
  description: 'Latest GPT-4 model with improved performance',
  type: LLMType.TEXT,
  discontinued: false,
  supportedVoices: null,
  supportLanguages: [
    { languageId: 'en', name: 'English', code: 'en-US', isDefault: true }
  ]
};
```
