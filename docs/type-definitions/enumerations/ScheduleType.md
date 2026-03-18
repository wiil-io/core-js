[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.48**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / ScheduleType

# Enumeration: ScheduleType

Defined in: [src/core/type-definitions/conversation.type.definition.ts:155](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L155)

Schedule type for outbound call timing configuration.

Determines when and how outbound calls are executed relative
to the call request creation time.

## See

BusinessCallRequestSchema - Uses this for call scheduling

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="immediate"></a> `IMMEDIATE` | `"immediate"` | Execute call as soon as possible within calling hours | [src/core/type-definitions/conversation.type.definition.ts:157](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L157) |
| <a id="scheduled"></a> `SCHEDULED` | `"scheduled"` | Execute call at specific scheduledAt timestamp | [src/core/type-definitions/conversation.type.definition.ts:159](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L159) |
| <a id="recurring"></a> `RECURRING` | `"recurring"` | Execute call on recurring schedule based on callingHours | [src/core/type-definitions/conversation.type.definition.ts:161](https://github.com/wiil-io/core-js/blob/bcef8c50093e853c7d56e25bed9c820baafd1593/src/core/type-definitions/conversation.type.definition.ts#L161) |
