[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateMaintenanceBlock

# Type Alias: UpdateMaintenanceBlock

```ts
type UpdateMaintenanceBlock = {
  locationId?: string | null;
  resourceInstanceId?: string;
  startDate?: number;
  endDate?: number;
  reason?: string | null;
  id: string;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:68

Schema for updating an existing maintenance block.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:25 |
| <a id="resourceinstanceid"></a> `resourceInstanceId?` | `string` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:26 |
| <a id="startdate"></a> `startDate?` | `number` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:27 |
| <a id="enddate"></a> `endDate?` | `number` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:28 |
| <a id="reason"></a> `reason?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:29 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:59 |
