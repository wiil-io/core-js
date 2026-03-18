[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / CallRequestStatus

# Enumeration: CallRequestStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:132](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L132)

Call request status for outbound call lifecycle tracking.

Tracks the progression of an outbound call request from creation
through execution and completion.

## Remarks

**Status Lifecycle:**
```
PENDING → SCHEDULED → IN_PROGRESS → COMPLETED
                   ↘ FAILED
       ↘ CANCELLED
```

## See

BusinessCallRequestSchema - Uses this for call tracking

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="pending"></a> `PENDING` | `"pending"` | Call request created, awaiting processing or scheduled time | [src/core/type-definitions/conversation.type.definition.ts:134](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L134) |
| <a id="scheduled"></a> `SCHEDULED` | `"scheduled"` | Call scheduled for future execution within calling hours | [src/core/type-definitions/conversation.type.definition.ts:136](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L136) |
| <a id="in_progress"></a> `IN_PROGRESS` | `"in_progress"` | Call currently active with AI agent engaged | [src/core/type-definitions/conversation.type.definition.ts:138](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L138) |
| <a id="completed"></a> `COMPLETED` | `"completed"` | Call successfully completed with conversation recorded | [src/core/type-definitions/conversation.type.definition.ts:140](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L140) |
| <a id="failed"></a> `FAILED` | `"failed"` | Call failed due to technical error, no answer, or busy signal | [src/core/type-definitions/conversation.type.definition.ts:142](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L142) |
| <a id="cancelled"></a> `CANCELLED` | `"cancelled"` | Call cancelled before execution by user or system | [src/core/type-definitions/conversation.type.definition.ts:144](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L144) |
