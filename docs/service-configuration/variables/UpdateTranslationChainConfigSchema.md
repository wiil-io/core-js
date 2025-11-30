[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateTranslationChainConfigSchema

# Variable: UpdateTranslationChainConfigSchema

```ts
const UpdateTranslationChainConfigSchema: ZodObject<UpdateTranslationChainConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:289](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/provisioning-config.ts#L289)

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
