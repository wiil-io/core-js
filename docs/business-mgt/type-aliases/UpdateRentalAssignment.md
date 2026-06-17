[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateRentalAssignment

# Type Alias: UpdateRentalAssignment

```ts
type UpdateRentalAssignment = {
  locationId?: string | null;
  reservationId?: string;
  rentalInstanceId?: string;
  assignmentType?:   | SOFT
     | HARD;
  status?:   | ASSIGNED
     | REASSIGNED
     | RELEASED;
  assignedAt?: number;
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
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:119](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L119)

Schema for updating an existing rental assignment.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:76](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L76) |
| <a id="reservationid"></a> `reservationId?` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:77](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L77) |
| <a id="rentalinstanceid"></a> `rentalInstanceId?` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:78](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L78) |
| <a id="assignmenttype"></a> `assignmentType?` | \| [`SOFT`](../enumerations/RentalAssignmentType.md#soft) \| [`HARD`](../enumerations/RentalAssignmentType.md#hard) | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:79](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L79) |
| <a id="status"></a> `status?` | \| [`ASSIGNED`](../enumerations/RentalAssignmentStatus.md#assigned) \| [`REASSIGNED`](../enumerations/RentalAssignmentStatus.md#reassigned) \| [`RELEASED`](../enumerations/RentalAssignmentStatus.md#released) | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:80](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L80) |
| <a id="assignedat"></a> `assignedAt?` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:81](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L81) |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:82](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L82) |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:83](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L83) |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:84](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L84) |
| <a id="conditionatpickup"></a> `conditionAtPickup?` | \| \{ `recordedAt`: `number`; `recordedBy`: `string`; `notes?`: `string` \| `null`; `damageReported`: `boolean`; `imageUrls?`: `string`[] \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:85](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L85) |
| <a id="conditionatreturn"></a> `conditionAtReturn?` | \| \{ `recordedAt`: `number`; `recordedBy`: `string`; `notes?`: `string` \| `null`; `damageReported`: `boolean`; `imageUrls?`: `string`[] \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:86](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L86) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:87](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L87) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts:109](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-rental-assignment.schema.ts#L109) |
