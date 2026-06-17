[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateTableAssignment

# Type Alias: UpdateTableAssignment

```ts
type UpdateTableAssignment = {
  locationId?: string | null;
  reservationId?: string;
  tableInstanceId?: string;
  floorPlanId?: string;
  floorPlanSectionId?: string | null;
  assignmentType?:   | SOFT
     | HARD;
  status?:   | ASSIGNED
     | REASSIGNED
     | RELEASED;
  assignedAt?: number;
  assignedBy?: string | null;
  releasedAt?: number | null;
  releasedBy?: string | null;
  notes?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:99](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L99)

Schema for updating an existing table assignment.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:57](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L57) |
| <a id="reservationid"></a> `reservationId?` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:58](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L58) |
| <a id="tableinstanceid"></a> `tableInstanceId?` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:59](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L59) |
| <a id="floorplanid"></a> `floorPlanId?` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:60](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L60) |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:61](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L61) |
| <a id="assignmenttype"></a> `assignmentType?` | \| [`SOFT`](../enumerations/TableAssignmentType.md#soft) \| [`HARD`](../enumerations/TableAssignmentType.md#hard) | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:62](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L62) |
| <a id="status"></a> `status?` | \| [`ASSIGNED`](../enumerations/TableAssignmentStatus.md#assigned) \| [`REASSIGNED`](../enumerations/TableAssignmentStatus.md#reassigned) \| [`RELEASED`](../enumerations/TableAssignmentStatus.md#released) | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:63](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L63) |
| <a id="assignedat"></a> `assignedAt?` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:64](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L64) |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:65](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L65) |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:66](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L66) |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:67](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L67) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:68](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L68) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:90](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L90) |
