[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / CallRequestFilters

# Interface: CallRequestFilters

Defined in: [src/core/conversation/outbound-call.schema.ts:148](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L148)

Call request filter options.
 CallRequestFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across phone numbers | [src/core/conversation/outbound-call.schema.ts:150](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L150) |
| <a id="status"></a> `status?` | [`CallRequestStatus`](../../type-definitions/enumerations/CallRequestStatus.md) | Filter by call status | [src/core/conversation/outbound-call.schema.ts:152](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L152) |
| <a id="scheduletype"></a> `scheduleType?` | [`ScheduleType`](../../type-definitions/enumerations/ScheduleType.md) | Filter by schedule type | [src/core/conversation/outbound-call.schema.ts:154](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L154) |
| <a id="agentconfigurationid"></a> `agentConfigurationId?` | `string` | Filter by agent configuration ID | [src/core/conversation/outbound-call.schema.ts:156](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L156) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `Date`; `end?`: `Date`; \} | Filter by date range (scheduledAt) | [src/core/conversation/outbound-call.schema.ts:158](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L158) |
| `dateRange.start?` | `Date` | - | [src/core/conversation/outbound-call.schema.ts:159](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L159) |
| `dateRange.end?` | `Date` | - | [src/core/conversation/outbound-call.schema.ts:160](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/conversation/outbound-call.schema.ts#L160) |
