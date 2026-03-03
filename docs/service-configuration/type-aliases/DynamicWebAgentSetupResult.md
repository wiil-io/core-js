[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.35**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicWebAgentSetupResult

# Type Alias: DynamicWebAgentSetupResult

```ts
type DynamicWebAgentSetupResult = {
  success: boolean;
  agentConfigurationId: string;
  instructionConfigurationId: string;
  errorMessage?: string;
  metadata?: Record<string, any> | null;
  integrationSnippets: string[];
};
```

Defined in: [src/core/service-configuration/dynamic\_setup/web-agent-setup.ts:32](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/dynamic_setup/web-agent-setup.ts#L32)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="success"></a> `success` | `boolean` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:36](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L36) |
| <a id="agentconfigurationid"></a> `agentConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:37](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L37) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:38](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L38) |
| <a id="errormessage"></a> `errorMessage?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:39](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L39) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:40](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L40) |
| <a id="integrationsnippets"></a> `integrationSnippets` | `string`[] | [src/core/service-configuration/dynamic\_setup/web-agent-setup.ts:22](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/core/service-configuration/dynamic_setup/web-agent-setup.ts#L22) |
