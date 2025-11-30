[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / UpdateInstructionConfigurationSchema

# Variable: UpdateInstructionConfigurationSchema

```ts
const UpdateInstructionConfigurationSchema: ZodObject<UpdateInstructionConfiguration>;
```

Defined in: [src/core/service-configuration/instruction-config.schema.ts:135](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/core/service-configuration/instruction-config.schema.ts#L135)

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
