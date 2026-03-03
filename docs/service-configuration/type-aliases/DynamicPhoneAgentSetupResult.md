[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicPhoneAgentSetupResult

# Type Alias: DynamicPhoneAgentSetupResult

```ts
type DynamicPhoneAgentSetupResult = {
  success: boolean;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  errorMessage?: string;
  metadata?: Record<string, any> | null;
  phoneNumber: string;
};
```

Defined in: src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:31

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:36 |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:37 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:38 |
| <a id="errormessage"></a> `errorMessage?` | `string` | src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:39 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:40 |
| <a id="phonenumber"></a> `phoneNumber` | `string` | src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:21 |
