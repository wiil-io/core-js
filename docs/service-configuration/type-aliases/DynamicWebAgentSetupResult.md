[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicWebAgentSetupResult

# Type Alias: DynamicWebAgentSetupResult

```ts
type DynamicWebAgentSetupResult = {
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
  integrationSnippets?: string[] | null;
};
```

Defined in: [src/core/service-configuration/dynamic\_setup/web-agent-setup.ts:62](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/dynamic_setup/web-agent-setup.ts#L62)

Web agent setup result schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L10) |
| <a id="processingstate"></a> `processingState` | \{ `status`: `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"`; `progressPercentage`: `number`; `message?`: `string`; \} | [src/core/service-configuration/base-agent-setup.ts:104](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L104) |
| `processingState.status` | `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"` | [src/core/service-configuration/base-agent-setup.ts:86](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L86) |
| `processingState.progressPercentage` | `number` | [src/core/service-configuration/base-agent-setup.ts:87](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L87) |
| `processingState.message?` | `string` | [src/core/service-configuration/base-agent-setup.ts:88](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L88) |
| <a id="success"></a> `success?` | `boolean` \| `null` | [src/core/service-configuration/base-agent-setup.ts:105](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L105) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` \| `null` | [src/core/service-configuration/base-agent-setup.ts:106](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L106) |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` \| `null` | [src/core/service-configuration/base-agent-setup.ts:107](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L107) |
| <a id="errormessage"></a> `errorMessage?` | `string` | [src/core/service-configuration/base-agent-setup.ts:108](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L108) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | [src/core/service-configuration/base-agent-setup.ts:109](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/base-agent-setup.ts#L109) |
| <a id="integrationsnippets"></a> `integrationSnippets?` | `string`[] \| `null` | [src/core/service-configuration/dynamic\_setup/web-agent-setup.ts:48](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/service-configuration/dynamic_setup/web-agent-setup.ts#L48) |
