[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

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
  assignmentType: TableAssignmentType;
  status: TableAssignmentStatus;
  assignedAt: number;
  assignedBy?: string | null;
  releasedAt?: number | null;
  releasedBy?: string | null;
  notes?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:97](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L97)

Table assignment schema.
Records the physical table instance assigned to a table reservation.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:57](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L57) |
| <a id="reservationid"></a> `reservationId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:58](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L58) |
| <a id="tableinstanceid"></a> `tableInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:59](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L59) |
| <a id="floorplanid"></a> `floorPlanId` | `string` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:60](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L60) |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:61](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L61) |
| <a id="assignmenttype"></a> `assignmentType` | [`TableAssignmentType`](../enumerations/TableAssignmentType.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:62](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L62) |
| <a id="status"></a> `status` | [`TableAssignmentStatus`](../enumerations/TableAssignmentStatus.md) | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:63](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L63) |
| <a id="assignedat"></a> `assignedAt` | `number` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:64](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L64) |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:65](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L65) |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:66](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L66) |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:67](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L67) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:68](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts#L68) |
