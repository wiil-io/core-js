[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SttModelConfigSchema

# Variable: SttModelConfigSchema

```ts
const SttModelConfigSchema: ZodObject<SttModelConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:38](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/core/service-configuration/provisioning-config.ts#L38)

Zod schema for Speech-to-Text (STT) model configuration.

Defines the STT model used to convert user speech to text in voice-based interactions.
Part of the provisioning chain's input processing stage.

## Remarks

**Architecture Context:**
- **Used In**: ProvisioningConfigChain (sttConfig field)
- **Purpose**: Converts incoming voice to text for agent processing
- **Pipeline Position**: First stage (Speech → Text)

## Example

```typescript
const sttConfig: SttModelConfig = {
  modelId: 'whisper-v3',
  defaultLanguage: 'en-US'
};
```
