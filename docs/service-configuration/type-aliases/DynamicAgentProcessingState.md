[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

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

Defined in: [src/core/service-configuration/base-agent-setup.ts:116](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/base-agent-setup.ts#L116)

Agent processing state schema for tracking long-running setup operations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="status"></a> `status` | `"pending"` \| `"completed"` \| `"failed"` \| `"in_progress"` | [src/core/service-configuration/base-agent-setup.ts:86](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/base-agent-setup.ts#L86) |
| <a id="progresspercentage"></a> `progressPercentage` | `number` | [src/core/service-configuration/base-agent-setup.ts:87](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/base-agent-setup.ts#L87) |
| <a id="message"></a> `message?` | `string` | [src/core/service-configuration/base-agent-setup.ts:88](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/service-configuration/base-agent-setup.ts#L88) |
