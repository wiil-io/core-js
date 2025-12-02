[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / TravnexSupportModelSchema

# Variable: TravnexSupportModelSchema

```ts
const TravnexSupportModelSchema: ZodObject<TravnexSupportModel>;
```

Defined in: [src/core/service-configuration/support-llm.ts:61](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/support-llm.ts#L61)

Zod schema for Travnex supported model configuration.

Represents a language model registered in the Travnex platform's support registry. The registry
provides a centralized catalog of available models with their capabilities, supported languages,
and voices. Agent Configurations reference these models via modelId.

## Remarks

**Architecture Context:**
- **Used By**: Agent Configuration (modelId reference)
- **Purpose**: Central registry of supported LLM models with their capabilities
- **Model Types**: TEXT (text-only), VOICE (speech), MULTI_MODE (combined), etc.
- **Providers**: OpenAI, Anthropic, Google, ElevenLabs, and other LLM proprietors

**Model Lifecycle:**
- **Active**: Available for new deployments (discontinued: false)
- **Discontinued**: Legacy support only, not recommended for new deployments (discontinued: true)

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
