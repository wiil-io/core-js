[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.18**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / CreateProvisioningConfigSchema

# Variable: CreateProvisioningConfigSchema

```ts
const CreateProvisioningConfigSchema: ZodObject<CreateProvisioningConfig>;
```

Defined in: [src/core/service-configuration/provisioning-config.ts:178](https://github.com/wiil-io/core-js/blob/21f78e57f02d188c257d7debf1363466bcfa4c64/src/core/service-configuration/provisioning-config.ts#L178)

Zod schema for creating a new provisioning configuration chain.

Omits auto-generated fields that are populated by the system.

## Remarks

Use this schema when creating new provisioning chains.

## Example

```typescript
const newChain: CreateProvisioningConfig = {
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
