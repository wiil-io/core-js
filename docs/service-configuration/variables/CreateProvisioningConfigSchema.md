[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateProvisioningConfigSchema

# Variable: CreateProvisioningConfigSchema

```ts
const CreateProvisioningConfigSchema: ZodObject<CreateProvisioningConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:145](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/core/service-configuration/provisioning-config.ts#L145)

Zod schema for creating a new provisioning configuration chain.

Omits auto-generated fields that are populated by the system.

## Remarks

Use this schema when creating new provisioning chains.

## Example

```typescript
const newChain: CreateProvisioningConfig = {
  organizationId: 'org-456',
  chainName: 'New Voice Chain',
  description: 'Processing chain for multilingual support',
  sttConfig: {
    modelId: 'whisper-v3',
    defaultLanguage: 'en-US'
  },
  agentConfigurationId: 'agent-789',
  ttsConfig: {
    modelId: 'eleven-labs-v2',
    voiceId: 'rachel',
    defaultLanguage: 'en-US'
  }
};
```
