[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / InstructionConfigurationSchema

# Variable: InstructionConfigurationSchema

```ts
const InstructionConfigurationSchema: ZodObject<InstructionConfiguration>;
```

Defined in: src/core/service-configuration/instruction-config.schema.ts:55

Zod schema for Instruction Configuration validation.

Defines the complete configuration for agent instructions, including role definition,
behavioral guidelines, knowledge sources, and enabled business services.

## Example

```typescript
const instructionConfig: InstructionConfiguration = {
  id: 'inst-123',
  instructionName: 'customer-support-agent',
  role: 'Customer Support Specialist',
  organizationId: 'org-456',
  introductionMessage: 'Hello! How can I help you today?',
  instructions: 'You are a helpful customer support agent...',
  guardrails: 'Never share sensitive customer data...',
  supportedServices: [BusinessSupportServices.APPOINTMENT_MANAGEMENT],
  knowledgeSourceIds: ['kb-789'],
  isTemplate: false,
  isPrimary: false,
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
