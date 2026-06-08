[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateRoomAssignment

# Type Alias: CreateRoomAssignment

```ts
type CreateRoomAssignment = {
  locationId?: string | null;
  reservationId: string;
  roomInstanceId: string;
  assignmentType: RoomAssignmentType;
  status: RoomAssignmentStatus;
  assignedAt: number;
  assignedBy?: string | null;
  releasedAt?: number | null;
  releasedBy?: string | null;
  housekeepingNotes?: string | null;
  notes?: string | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:96

Schema for creating a new room assignment.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:56 |
| <a id="reservationid"></a> `reservationId` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:57 |
| <a id="roominstanceid"></a> `roomInstanceId` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:58 |
| <a id="assignmenttype"></a> `assignmentType` | [`RoomAssignmentType`](../enumerations/RoomAssignmentType.md) | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:59 |
| <a id="status"></a> `status` | [`RoomAssignmentStatus`](../enumerations/RoomAssignmentStatus.md) | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:60 |
| <a id="assignedat"></a> `assignedAt` | `number` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:61 |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:62 |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:63 |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:64 |
| <a id="housekeepingnotes"></a> `housekeepingNotes?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:65 |
| <a id="notes"></a> `notes?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:66 |
