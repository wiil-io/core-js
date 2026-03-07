[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.41**](../../README.md)

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

Defined in: [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:122](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L122)

Agent processing state schema for tracking long-running setup operations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:92](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L92) |
| <a id="progresspercentage"></a> `progressPercentage` | `number` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:93](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L93) |
| <a id="message"></a> `message?` | `string` | [src/core/service-configuration/dynamic\_setup/base-agent-setup.ts:94](https://github.com/wiil-io/core-js/blob/be8beb340b9bef4c811fca6103ccb9448b36b797/src/core/service-configuration/dynamic_setup/base-agent-setup.ts#L94) |
