[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.35**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfigSchema

# Variable: UpdateTranslationChainConfigSchema

```ts
const UpdateTranslationChainConfigSchema: ZodObject<UpdateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:331](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/provisioning-config.ts#L331)

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
