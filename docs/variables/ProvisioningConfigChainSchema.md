[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ProvisioningConfigChainSchema

# Variable: ProvisioningConfigChainSchema

```ts
const ProvisioningConfigChainSchema: ZodObject<ProvisioningConfigChain>;
```

Defined in: src/core/service-configuration/provisioning-config.ts:104

Zod schema for provisioning configuration chain.

Represents a complete provisioning chain linking STT, agent configuration, and TTS
for end-to-end voice interaction processing.

## Example

```typescript
const provisioningChain: ProvisioningConfigChain = {
  id: 'chain-123',
  organizationId: 'org-456',
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
