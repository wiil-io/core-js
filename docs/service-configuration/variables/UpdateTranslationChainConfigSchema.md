[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfigSchema

# Variable: UpdateTranslationChainConfigSchema

```ts
const UpdateTranslationChainConfigSchema: ZodObject<UpdateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:343](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/provisioning-config.ts#L343)

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
