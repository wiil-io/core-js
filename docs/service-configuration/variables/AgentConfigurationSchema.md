[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.6**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / AgentConfigurationSchema

# Variable: AgentConfigurationSchema

```ts
const AgentConfigurationSchema: ZodObject<AgentConfiguration>;
```

Defined in: [src/core/service-configuration/agent-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/b141e1b7fd95038279563ddc8b7255644acdf199/src/core/service-configuration/agent-config.schema.ts#L76)

Zod schema for Agent Configuration validation.

Agent Configurations define the core behavior, capabilities, and personality of AI agents in the
Service Configuration architecture. They are designed to be reusable across multiple deployments,
with each agent governed by an Instruction Configuration (1:N relationship). Multiple Agent
Configurations can share the same Instruction Configuration for consistent behavioral guidelines.

## Remarks

**Architecture Context:**
- **Managed By**: Service Configuration (lifecycle management)
- **Used By**: Deployment Configurations (N:1 - multiple deployments can use the same agent)
- **Associated With**: Instruction Configuration (1:N - one instruction set can govern multiple agents)
- **References**: Travnex Support Model Registry (via modelId)
- **Reusability**: Designed to be reused across multiple deployments with different channels

**Configuration Layers:**
- **Agent Configuration**: Defines capabilities, model, and operational mode
- **Instruction Configuration**: Defines behavioral guidelines and conversation flow
- Together they create a complete agent persona

## Example

```typescript
const agentConfig: AgentConfiguration = {
  id: '123*',
  modelId: 'gpt-4',
  name: 'Customer Support Agent',
  defaultFunctionState: LLMType.MULTI_MODE,
  usesTravnexSupportModel: true,
  instructionConfigurationId: '456*',
  assistantType: AssistantType.PHONE,
  call_transfer_config: [
    {
      transfer_number: '+15551234567',
      transfer_type: 'warm',
      transfer_conditions: ['billing support', 'escalate']
    }
  ],
  metadata: { department: 'support' },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
