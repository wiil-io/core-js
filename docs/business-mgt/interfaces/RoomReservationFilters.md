[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomReservationFilters

# Interface: RoomReservationFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:115](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L115)

Room reservation filter options.
 RoomReservationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across room reservation fields | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:117](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L117) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:119](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L119) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by booking channel ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:121](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L121) |
| <a id="resourceid"></a> `resourceId?` | `string` | Filter by room resource ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:123](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L123) |
| <a id="guestid"></a> `guestId?` | `string` | Filter by guest/customer ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:125](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L125) |
| <a id="status"></a> `status?` | [`ReservationStatus`](../../type-definitions/enumerations/ReservationStatus.md)[] | Filter by reservation statuses | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:127](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L127) |
| <a id="paymentstatus"></a> `paymentStatus?` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md)[] | Filter by payment statuses | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:129](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L129) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by check-in timestamp range | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:131](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L131) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:131](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L131) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:131](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L131) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source platform | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:133](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L133) |
