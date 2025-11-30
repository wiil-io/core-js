[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / InstructionConfigurationSchema

# Variable: InstructionConfigurationSchema

```ts
const InstructionConfigurationSchema: ZodObject<InstructionConfiguration>;
```

Defined in: [src/core/service-configuration/instruction-config.schema.ts:53](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/instruction-config.schema.ts#L53)

Zod schema for Instruction Configuration validation.

Defines the complete configuration for agent instructions, including role definition,
behavioral guidelines, knowledge sources, and enabled business services.

## Example

```typescript
const instructionConfig: InstructionConfiguration = {
  id: '123*',
  instructionName: 'customer-support-agent',
  role: 'Customer Support Specialist',
  introductionMessage: 'Hello! How can I help you today?',
  instructions: 'You are a helpful customer support agent...',
  guardrails: 'Never share sensitive customer data...',
  supportedServices: [BusinessSupportServices.APPOINTMENT_MANAGEMENT],
  knowledgeSourceIds: ['789*'],
  isTemplate: false,
  isPrimary: false,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
