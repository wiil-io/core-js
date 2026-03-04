[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.37**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicWebAgentSetupResult

# Type Alias: DynamicWebAgentSetupResult

```ts
type DynamicWebAgentSetupResult = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  success: boolean;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  errorMessage?: string;
  metadata?: Record<string, any> | null;
  integrationSnippets: string[];
};
```

Defined in: [src/core/service-configuration/dynamic\_setup/web-agent-setup.ts:62](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/service-configuration/dynamic_setup/web-agent-setup.ts#L62)

Web agent setup result schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/base.schema.ts#L10) |
| <a id="success"></a> `success` | `boolean` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:94](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L94) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:95](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L95) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:96](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L96) |
| <a id="errormessage"></a> `errorMessage?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:97](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L97) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:98](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L98) |
| <a id="integrationsnippets"></a> `integrationSnippets` | `string`[] | [src/core/service-configuration/dynamic\_setup/web-agent-setup.ts:48](https://github.com/wiil-io/core-js/blob/9e9f9b9f49a3a42821de5b04e0cb59fe40e957fc/src/core/service-configuration/dynamic_setup/web-agent-setup.ts#L48) |
