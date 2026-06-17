[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateProvisioningConfigSchema

# Variable: UpdateProvisioningConfigSchema

```ts
const UpdateProvisioningConfigSchema: ZodObject<UpdateProvisioningConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:214](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/service-configuration/provisioning-config.ts#L214)

Zod schema for updating an existing provisioning configuration chain.

All fields are optional (partial) except id, which is required to identify the chain.

## Remarks

Supports partial updates - only include the fields you want to modify.

## Example

```typescript
const updateChain: UpdateProvisioningConfig = {
  id: 'chain-123',
  chainName: 'Updated Voice Chain',
  description: 'Updated description'
};
```
