[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ScheduleType

# Enumeration: ScheduleType

Defined in: [src/core/type-definitions/conversation.type.definition.ts:134](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L134)

Schedule type for outbound call timing configuration.

Determines when and how outbound calls are executed relative
to the call request creation time.

## See

BusinessCallRequestSchema - Uses this for call scheduling

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="immediate"></a> `IMMEDIATE` | `"immediate"` | Execute call as soon as possible within calling hours | [src/core/type-definitions/conversation.type.definition.ts:136](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L136) |
| <a id="scheduled"></a> `SCHEDULED` | `"scheduled"` | Execute call at specific scheduledAt timestamp | [src/core/type-definitions/conversation.type.definition.ts:138](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L138) |
| <a id="recurring"></a> `RECURRING` | `"recurring"` | Execute call on recurring schedule based on callingHours | [src/core/type-definitions/conversation.type.definition.ts:140](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/type-definitions/conversation.type.definition.ts#L140) |
