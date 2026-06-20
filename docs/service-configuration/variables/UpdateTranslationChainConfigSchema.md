[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfigSchema

# Variable: UpdateTranslationChainConfigSchema

```ts
const UpdateTranslationChainConfigSchema: ZodObject<UpdateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:343](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/service-configuration/provisioning-config.ts#L343)

Zod schema for updating an existing translation chain configuration.

All fields are optional (partial) except id.

## Example

```typescript
const updateTranslationChain: UpdateTranslationChainConfig = {
  id: 'chain-123',
  chainName: 'Updated Translation Chain',
  processingConfig: {
    providerType: 'OpenAI',
    providerModelId: 'gpt-4.1-mini'
  }
};
```
