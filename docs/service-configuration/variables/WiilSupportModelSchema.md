[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / WiilSupportModelSchema

# Variable: WiilSupportModelSchema

```ts
const WiilSupportModelSchema: ZodObject<WiilSupportModel>;
```

Defined in: [src/core/service-configuration/support-llm.ts:65](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/service-configuration/support-llm.ts#L65)

Zod schema for WIIL Platform supported model configuration.

Represents a language model registered in the WIIL Platform's support registry. The registry
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

**Model ID Distinction:**
- **modelId**: WIIL Platform unique model identifier (NOT the provider's model ID)
- **provider_model_id**: Original model ID from the provider's system (e.g., 'gpt-4-1106-preview' from OpenAI)

## Example

```typescript
const supportModel: WIILSupportModel = {
  modelId: 'YUSI21217J1',
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
