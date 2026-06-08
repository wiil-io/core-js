[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalAssignment

# Type Alias: RentalAssignment

```ts
type RentalAssignment = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  reservationId: string;
  rentalInstanceId: string;
  assignmentType: RentalAssignmentType;
  status: RentalAssignmentStatus;
  assignedAt: number;
  assignedBy?: string | null;
  releasedAt?: number | null;
  releasedBy?: string | null;
  conditionAtPickup?:   | {
     recordedAt: number;
     recordedBy: string;
     notes?: string | null;
     damageReported: boolean;
     imageUrls?: string[] | null;
   }
     | null;
  conditionAtReturn?:   | {
     recordedAt: number;
     recordedBy: string;
     notes?: string | null;
     damageReported: boolean;
     imageUrls?: string[] | null;
   }
     | null;
  notes?: string | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:117

Rental assignment schema.
Records the physical rental unit assigned to a rental reservation.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:76 |
| <a id="reservationid"></a> `reservationId` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:77 |
| <a id="rentalinstanceid"></a> `rentalInstanceId` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:78 |
| <a id="assignmenttype"></a> `assignmentType` | [`RentalAssignmentType`](../enumerations/RentalAssignmentType.md) | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:79 |
| <a id="status"></a> `status` | [`RentalAssignmentStatus`](../enumerations/RentalAssignmentStatus.md) | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:80 |
| <a id="assignedat"></a> `assignedAt` | `number` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:81 |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:82 |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:83 |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:84 |
| <a id="conditionatpickup"></a> `conditionAtPickup?` | \| \{ `recordedAt`: `number`; `recordedBy`: `string`; `notes?`: `string` \| `null`; `damageReported`: `boolean`; `imageUrls?`: `string`[] \| `null`; \} \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:85 |
| <a id="conditionatreturn"></a> `conditionAtReturn?` | \| \{ `recordedAt`: `number`; `recordedBy`: `string`; `notes?`: `string` \| `null`; `damageReported`: `boolean`; `imageUrls?`: `string`[] \| `null`; \} \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:86 |
| <a id="notes"></a> `notes?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:87 |
