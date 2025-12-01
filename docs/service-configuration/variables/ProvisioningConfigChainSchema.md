[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / ProvisioningConfigChainSchema

# Variable: ProvisioningConfigChainSchema

```ts
const ProvisioningConfigChainSchema: ZodObject<ProvisioningConfigChain>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:139](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/service-configuration/provisioning-config.ts#L139)

Zod schema for provisioning configuration chain.

Represents a complete voice interaction processing pipeline that chains Speech-to-Text (STT),
Agent Configuration, and Text-to-Speech (TTS) for end-to-end voice conversations. Referenced
by Deployment Configurations with CHAINED provisioning type.

## Remarks

**Architecture Context:**
- **Used By**: Deployment Configuration (provisioningConfigChainId for CHAINED type)
- **Purpose**: Orchestrates complete voice interaction pipeline
- **Pipeline Flow**: User Speech → STT → Text → Agent → Text Response → TTS → Agent Speech
- **Organization**: Scoped to organization for multi-tenant isolation

**Voice Processing Pipeline:**
1. **STT Stage**: Converts incoming user speech to text using sttConfig
2. **Agent Stage**: Processes text through agent (referenced by agentConfigurationId)
3. **TTS Stage**: Converts agent text response to speech using ttsConfig

## Example

```typescript
const provisioningChain: ProvisioningConfigChain = {
  id: 'chain-123',
  chainName: 'Customer Support Voice Chain',
  description: 'Voice processing chain for customer support calls',
  sttConfig: {
    modelId: 'whisper-v3',
    defaultLanguage: 'en-US'
  },
  agentConfigurationId: 'agent-789',
  ttsConfig: {
    modelId: 'eleven-labs-v2',
    voiceId: 'adam',
    defaultLanguage: 'en-US'
  },
  createdAt: Date.now(),
  updatedAt: Date.now()
};
```
