[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.47**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / SttModelConfigSchema

# Variable: SttModelConfigSchema

```ts
const SttModelConfigSchema: ZodObject<SttModelConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:39](https://github.com/wiil-io/core-js/blob/81a2e002271d89bdaa7b84f1befea192faa0209f/src/core/service-configuration/provisioning-config.ts#L39)

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
