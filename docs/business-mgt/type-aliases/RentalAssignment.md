[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

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
  slotStart: number;
  slotEnd: number;
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

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:99](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L99)

Rental assignment schema.
Records the physical rental unit assigned to a rental reservation.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:78](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L78) |
| <a id="reservationid"></a> `reservationId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:79](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L79) |
| <a id="rentalinstanceid"></a> `rentalInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:80](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L80) |
| <a id="slotstart"></a> `slotStart` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:81](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L81) |
| <a id="slotend"></a> `slotEnd` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:82](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L82) |
| <a id="assignmenttype"></a> `assignmentType` | [`RentalAssignmentType`](../enumerations/RentalAssignmentType.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:83](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L83) |
| <a id="status"></a> `status` | [`RentalAssignmentStatus`](../enumerations/RentalAssignmentStatus.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:84](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L84) |
| <a id="assignedat"></a> `assignedAt` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:85](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L85) |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:86](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L86) |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:87](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L87) |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:88](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L88) |
| <a id="conditionatpickup"></a> `conditionAtPickup?` | \| \{ `recordedAt`: `number`; `recordedBy`: `string`; `notes?`: `string` \| `null`; `damageReported`: `boolean`; `imageUrls?`: `string`[] \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:89](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L89) |
| <a id="conditionatreturn"></a> `conditionAtReturn?` | \| \{ `recordedAt`: `number`; `recordedBy`: `string`; `notes?`: `string` \| `null`; `damageReported`: `boolean`; `imageUrls?`: `string`[] \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:90](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L90) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:91](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L91) |
