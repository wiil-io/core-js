[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

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

Defined in: [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:63](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L63)

Phone agent setup result schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/base.schema.ts#L10) |
| <a id="processingstate"></a> `processingState` | \{ `status`: `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"`; `progressPercentage`: `number`; `message?`: `string`; \} | src/core/service-configuration/base-agent-setup.ts:104 |
| `processingState.status` | `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"` | src/core/service-configuration/base-agent-setup.ts:86 |
| `processingState.progressPercentage` | `number` | src/core/service-configuration/base-agent-setup.ts:87 |
| `processingState.message?` | `string` | src/core/service-configuration/base-agent-setup.ts:88 |
| <a id="success"></a> `success?` | `boolean` \| `null` | src/core/service-configuration/base-agent-setup.ts:105 |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` \| `null` | src/core/service-configuration/base-agent-setup.ts:106 |
| <a id="instructionconfigurationid"></a> `instructionConfigurationId?` | `string` \| `null` | src/core/service-configuration/base-agent-setup.ts:107 |
| <a id="errormessage"></a> `errorMessage?` | `string` | src/core/service-configuration/base-agent-setup.ts:108 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> \| `null` | src/core/service-configuration/base-agent-setup.ts:109 |
| <a id="phonenumber"></a> `phoneNumber?` | `string` \| `null` | [src/core/service-configuration/dynamic\_setup/phone-agent-setup.ts:47](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/service-configuration/dynamic_setup/phone-agent-setup.ts#L47) |
