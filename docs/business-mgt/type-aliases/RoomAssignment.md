[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.73**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomAssignment

# Type Alias: RoomAssignment

```ts
type RoomAssignment = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  reservationId: string;
  roomInstanceId: string;
  slotStart: number;
  slotEnd: number;
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

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:77](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L77)

Room assignment schema.
Records the physical room instance assigned to a room reservation.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:58](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L58) |
| <a id="reservationid"></a> `reservationId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:59](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L59) |
| <a id="roominstanceid"></a> `roomInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:60](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L60) |
| <a id="slotstart"></a> `slotStart` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:61](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L61) |
| <a id="slotend"></a> `slotEnd` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:62](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L62) |
| <a id="assignmenttype"></a> `assignmentType` | [`RoomAssignmentType`](../enumerations/RoomAssignmentType.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:63](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L63) |
| <a id="status"></a> `status` | [`RoomAssignmentStatus`](../enumerations/RoomAssignmentStatus.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:64](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L64) |
| <a id="assignedat"></a> `assignedAt` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:65](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L65) |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:66](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L66) |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:67](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L67) |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:68](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L68) |
| <a id="housekeepingnotes"></a> `housekeepingNotes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:69](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L69) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts:70](https://github.com/wiil-io/core-js/blob/ed55e9cb0290308a8b96537b377e48d8151ed9ad/src/core/business-mgt/reservation-mgt/assignment/reservation-room-assignment.schema.ts#L70) |
