[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateMaintenanceBlock

# Type Alias: CreateMaintenanceBlock

```ts
type CreateMaintenanceBlock = {
  locationId?: string | null;
  resourceInstanceId: string;
  startDate: number;
  endDate: number;
  reason?: string | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:67

Schema for creating a new maintenance block.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:25 |
| <a id="resourceinstanceid"></a> `resourceInstanceId` | `string` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:26 |
| <a id="startdate"></a> `startDate` | `number` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:27 |
| <a id="enddate"></a> `endDate` | `number` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:28 |
| <a id="reason"></a> `reason?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:29 |
