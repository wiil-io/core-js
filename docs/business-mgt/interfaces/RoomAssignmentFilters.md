[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomAssignmentFilters

# Interface: RoomAssignmentFilters

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:87](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L87)

Room assignment filter options.
 RoomAssignmentFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="reservationid"></a> `reservationId?` | `string` | Filter by room reservation ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:89](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L89) |
| <a id="roominstanceid"></a> `roomInstanceId?` | `string` | Filter by room resource instance ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:91](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L91) |
| <a id="status"></a> `status?` | [`RoomAssignmentStatus`](../enumerations/RoomAssignmentStatus.md)[] | Filter by assignment statuses | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:93](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L93) |
| <a id="assignmenttype"></a> `assignmentType?` | [`RoomAssignmentType`](../enumerations/RoomAssignmentType.md) | Filter by assignment lock type | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:95](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L95) |
| <a id="assignedby"></a> `assignedBy?` | `string` | Filter by assigning staff user ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:97](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L97) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:99](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L99) |
