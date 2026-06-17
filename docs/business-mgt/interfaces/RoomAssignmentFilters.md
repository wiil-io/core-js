[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomAssignmentFilters

# Interface: RoomAssignmentFilters

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:111](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L111)

Room assignment filter options.
 RoomAssignmentFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="reservationid"></a> `reservationId?` | `string` | Filter by room reservation ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:113](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L113) |
| <a id="roominstanceid"></a> `roomInstanceId?` | `string` | Filter by room resource instance ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:115](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L115) |
| <a id="status"></a> `status?` | [`RoomAssignmentStatus`](../enumerations/RoomAssignmentStatus.md)[] | Filter by assignment statuses | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:117](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L117) |
| <a id="assignmenttype"></a> `assignmentType?` | [`RoomAssignmentType`](../enumerations/RoomAssignmentType.md) | Filter by assignment lock type | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:119](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L119) |
| <a id="assignedby"></a> `assignedBy?` | `string` | Filter by assigning staff user ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:121](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L121) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:123](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L123) |
