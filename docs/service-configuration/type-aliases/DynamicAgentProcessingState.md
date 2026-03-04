[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.39**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / DynamicAgentProcessingState

# Type Alias: DynamicAgentProcessingState

```ts
type DynamicAgentProcessingState = {
  status: "pending" | "completed" | "failed" | "in_progress";
  progressPercentage: number;
  message?: string;
};
```

Defined in: [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:122](https://github.com/wiil-io/core-js/blob/26d2b631ba1acb31c0e66c5e63fa8ed5c49cb11b/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L122)

Agent processing state schema for tracking long-running setup operations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:92](https://github.com/wiil-io/core-js/blob/26d2b631ba1acb31c0e66c5e63fa8ed5c49cb11b/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L92) |
| <a id="progresspercentage"></a> `progressPercentage` | `number` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:93](https://github.com/wiil-io/core-js/blob/26d2b631ba1acb31c0e66c5e63fa8ed5c49cb11b/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L93) |
| <a id="message"></a> `message?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:94](https://github.com/wiil-io/core-js/blob/26d2b631ba1acb31c0e66c5e63fa8ed5c49cb11b/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L94) |
