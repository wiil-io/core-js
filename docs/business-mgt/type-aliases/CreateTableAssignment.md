[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateTableAssignment

# Type Alias: CreateTableAssignment

```ts
type CreateTableAssignment = {
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

Defined in: src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:98

Schema for creating a new table assignment.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:57 |
| <a id="reservationid"></a> `reservationId` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:58 |
| <a id="tableinstanceid"></a> `tableInstanceId` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:59 |
| <a id="floorplanid"></a> `floorPlanId` | `string` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:60 |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:61 |
| <a id="assignmenttype"></a> `assignmentType` | [`TableAssignmentType`](../enumerations/TableAssignmentType.md) | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:62 |
| <a id="status"></a> `status` | [`TableAssignmentStatus`](../enumerations/TableAssignmentStatus.md) | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:63 |
| <a id="assignedat"></a> `assignedAt` | `number` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:64 |
| <a id="assignedby"></a> `assignedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:65 |
| <a id="releasedat"></a> `releasedAt?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:66 |
| <a id="releasedby"></a> `releasedBy?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:67 |
| <a id="notes"></a> `notes?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/assignment/reservation-table-assignment.schema.ts:68 |
