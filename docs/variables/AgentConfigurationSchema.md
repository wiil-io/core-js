[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / AgentConfigurationSchema

# Variable: AgentConfigurationSchema

```ts
const AgentConfigurationSchema: ZodObject<AgentConfiguration>;
```

Defined in: src/core/service-configuration/agent-config.schema.ts:56

Zod schema for Agent Configuration validation.

Defines the complete configuration for an AI agent, including model selection,
operational modes, instruction sets, and telephony features.

## Example

```typescript
const agentConfig: AgentConfiguration = {
  id: 'agent-123',
  modelId: 'gpt-4',
  name: 'Customer Support Agent',
  defaultFunctionState: LLMType.MULTI_MODE,
  usesTravnexSupportModel: true,
  instructionConfigurationId: 'inst-456',
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
