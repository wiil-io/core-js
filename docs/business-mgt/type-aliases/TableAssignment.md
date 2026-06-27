[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableAssignment

# Type Alias: TableAssignment

```ts
type TableAssignment = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  reservationId: string;
  tableInstanceId: string;
  floorPlanId: string;
  floorPlanSectionId?: string | null;
  slotStart: number;
  slotEnd: number;
  assignmentType: TableAssignmentType;
  status: TableAssignmentStatus;
  assignedAt: number;
  assignedBy?: string | null;
  releasedAt?: number | null;
  releasedBy?: string | null;
  notes?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:79](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L79)

Table assignment schema.
Records the physical table instance assigned to a table reservation.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:59](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L59) |
| <a id="reservationid"></a> `reservationId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:60](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L60) |
| <a id="tableinstanceid"></a> `tableInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:61](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L61) |
| <a id="floorplanid"></a> `floorPlanId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:62](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L62) |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:63](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L63) |
| <a id="slotstart"></a> `slotStart` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:64](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L64) |
| <a id="slotend"></a> `slotEnd` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:65](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L65) |
| <a id="assignmenttype"></a> `assignmentType` | [`TableAssignmentType`](../enumerations/TableAssignmentType.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:66](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L66) |
| <a id="status"></a> `status` | [`TableAssignmentStatus`](../enumerations/TableAssignmentStatus.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:67](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L67) |
| <a id="assignedat"></a> `assignedAt` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:68](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L68) |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:69](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L69) |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:70](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L70) |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:71](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L71) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:72](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L72) |
