[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.42**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicPhoneAgentSetupResult

# Type Alias: DynamicPhoneAgentSetupResult

```ts
type DynamicPhoneAgentSetupResult = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  processingState: {
     status: "pending" | "completed" | "failed" | "in_progress";
     progressPercentage: number;
     message?: string;
  };
  success?: boolean | null;
  agentConfigurationId?: string | null;
  instructionConfigurationId?: string | null;
  errorMessage?: string;
  metadata?: Record<string, any> | null;
  phoneNumber?: string | null;
};
```

Defined in: [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:61](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L61)

Phone agent setup result schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/base.schema.ts#L10) |
| <a id="processingstate"></a> `processingState` | \{ `status`: `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"`; `progressPercentage`: `number`; `message?`: `string`; \} | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:110](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L110) |
| `processingState.status` | `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:92](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L92) |
| `processingState.progressPercentage` | `number` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:93](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L93) |
| `processingState.message?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:94](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L94) |
| <a id="success"></a> `success?` | `boolean` \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:111](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L111) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:112](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L112) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:113](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L113) |
| <a id="errormessage"></a> `errorMessage?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:114](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L114) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:115](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L115) |
| <a id="phonenumber"></a> `phoneNumber?` | `string` \| `null` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/04b4b4a882ec18acfbfc1d773d3f01653525db24/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L47) |
