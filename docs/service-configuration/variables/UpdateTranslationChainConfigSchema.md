[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfigSchema

# Variable: UpdateTranslationChainConfigSchema

```ts
const UpdateTranslationChainConfigSchema: ZodObject<UpdateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:331](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/core/service-configuration/provisioning-config.ts#L331)

Zod schema for updating an existing translation chain configuration.

All fields are optional (partial) except id.

## Example

```typescript
const updateTranslationChain: UpdateTranslationChainConfig = {
  id: 'chain-123',
  chainName: 'Updated Translation Chain',
  processingModelId: 'new-model-id'
};
```
