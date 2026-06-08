[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateRoomAssignment

# Type Alias: UpdateRoomAssignment

```ts
type UpdateRoomAssignment = {
  locationId?: string | null;
  reservationId?: string;
  roomInstanceId?: string;
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

Defined in: src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:97

Schema for updating an existing room assignment.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:56 |
| <a id="reservationid"></a> `reservationId?` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:57 |
| <a id="roominstanceid"></a> `roomInstanceId?` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:58 |
| <a id="assignmenttype"></a> `assignmentType?` | \| [`SOFT`](../enumerations/RoomAssignmentType.md#soft) \| [`HARD`](../enumerations/RoomAssignmentType.md#hard) | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:59 |
| <a id="status"></a> `status?` | \| [`ASSIGNED`](../enumerations/RoomAssignmentStatus.md#assigned) \| [`REASSIGNED`](../enumerations/RoomAssignmentStatus.md#reassigned) \| [`RELEASED`](../enumerations/RoomAssignmentStatus.md#released) | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:60 |
| <a id="assignedat"></a> `assignedAt?` | `number` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:61 |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:62 |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:63 |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:64 |
| <a id="housekeepingnotes"></a> `housekeepingNotes?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:65 |
| <a id="notes"></a> `notes?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:66 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:88 |
