[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.25**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / InstructionConfigurationSchema

# Variable: InstructionConfigurationSchema

```ts
const InstructionConfigurationSchema: ZodObject<InstructionConfiguration>;
```

Defined in: [src/core/service-configuration/instruction-config.schema.ts:72](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/service-configuration/instruction-config.schema.ts#L72)

Zod schema for Instruction Configuration validation.

The Instruction Configuration is the heart of agent behaviour in the Service Configuration architecture.
It contains the prompts, guidelines, and contextual instructions that fundamentally define how an agent
operates during conversations. A single Instruction Configuration can be associated with multiple Agent
Configurations (1:N relationship), allowing consistent behavioral guidelines across different agent types.

## Remarks

**Architecture Context:**
- **Central Role**: The Instruction Configuration is the core element that shapes agent behavior
- **Relationship**: 1:N with Agent Configurations - one instruction set can govern multiple agents
- **Reusability**: Designed to be reused across multiple deployments
- **Managed By**: Service Configuration (lifecycle management)
- **Used By**: Deployment Configurations reference instruction sets for agent behavior

**Example Use Case:**
A "Customer Service Guidelines" instruction set might govern both a "Sales Agent" and a "Support Agent",
ensuring uniform tone and compliance while each agent maintains its specialized capabilities.

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
