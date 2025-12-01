[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateInstructionConfigurationSchema

# Variable: UpdateInstructionConfigurationSchema

```ts
const UpdateInstructionConfigurationSchema: ZodObject<UpdateInstructionConfiguration>;
```

Defined in: [src/core/service-configuration/instruction-config.schema.ts:154](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/instruction-config.schema.ts#L154)

Zod schema for updating an existing instruction configuration.

All fields from CreateInstructionConfigurationSchema are optional (partial),
with the id field required to identify the configuration to update.

## Remarks

Supports partial updates - only include the fields you want to modify.
The id field is mandatory to specify which instruction configuration to update.

## Example

```typescript
const updateInstruction: UpdateInstructionConfiguration = {
  id: '123*',
  introductionMessage: 'Hello! How may I assist you today?',
  guardrails: 'Updated safety guidelines...'
};
```
