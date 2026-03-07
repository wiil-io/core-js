[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.42**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfigSchema

# Variable: UpdateTranslationChainConfigSchema

```ts
const UpdateTranslationChainConfigSchema: ZodObject<UpdateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:331](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/provisioning-config.ts#L331)

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
