[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateRoomAssignment

# Type Alias: UpdateRoomAssignment

```ts
type UpdateRoomAssignment = {
  locationId?: string | null;
  reservationId?: string;
  roomInstanceId?: string;
  slotStart?: number;
  slotEnd?: number;
  assignmentType?:   | SOFT
     | HARD;
  status?:   | ASSIGNED
     | REASSIGNED
     | RELEASED;
  assignedAt?: number;
  assignedBy?: string | null;
  releasedAt?: number | null;
  releasedBy?: string | null;
  housekeepingNotes?: string | null;
  notes?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:101](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L101)

Schema for updating an existing room assignment.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:58](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L58) |
| <a id="reservationid"></a> `reservationId?` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:59](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L59) |
| <a id="roominstanceid"></a> `roomInstanceId?` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:60](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L60) |
| <a id="slotstart"></a> `slotStart?` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:61](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L61) |
| <a id="slotend"></a> `slotEnd?` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:62](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L62) |
| <a id="assignmenttype"></a> `assignmentType?` | \| [`SOFT`](../enumerations/RoomAssignmentType.md#soft) \| [`HARD`](../enumerations/RoomAssignmentType.md#hard) | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:63](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L63) |
| <a id="status"></a> `status?` | \| [`ASSIGNED`](../enumerations/RoomAssignmentStatus.md#assigned) \| [`REASSIGNED`](../enumerations/RoomAssignmentStatus.md#reassigned) \| [`RELEASED`](../enumerations/RoomAssignmentStatus.md#released) | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:64](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L64) |
| <a id="assignedat"></a> `assignedAt?` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:65](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L65) |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:66](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L66) |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:67](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L67) |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:68](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L68) |
| <a id="housekeepingnotes"></a> `housekeepingNotes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:69](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L69) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:70](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L70) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:92](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L92) |
