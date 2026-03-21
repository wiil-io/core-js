[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / CallRequestStatus

# Enumeration: CallRequestStatus

Defined in: [src/core/type-definitions/conversation.type.definition.ts:111](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L111)

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
| <a id="pending"></a> `PENDING` | `"pending"` | Call request created, awaiting processing or scheduled time | [src/core/type-definitions/conversation.type.definition.ts:113](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L113) |
| <a id="scheduled"></a> `SCHEDULED` | `"scheduled"` | Call scheduled for future execution within calling hours | [src/core/type-definitions/conversation.type.definition.ts:115](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L115) |
| <a id="in_progress"></a> `IN_PROGRESS` | `"in_progress"` | Call currently active with AI agent engaged | [src/core/type-definitions/conversation.type.definition.ts:117](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L117) |
| <a id="completed"></a> `COMPLETED` | `"completed"` | Call successfully completed with conversation recorded | [src/core/type-definitions/conversation.type.definition.ts:119](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L119) |
| <a id="failed"></a> `FAILED` | `"failed"` | Call failed due to technical error, no answer, or busy signal | [src/core/type-definitions/conversation.type.definition.ts:121](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L121) |
| <a id="cancelled"></a> `CANCELLED` | `"cancelled"` | Call cancelled before execution by user or system | [src/core/type-definitions/conversation.type.definition.ts:123](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L123) |
