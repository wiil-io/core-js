[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MaintenanceBlock

# Type Alias: MaintenanceBlock

```ts
type MaintenanceBlock = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  resourceInstanceId: string;
  startDate: number;
  endDate: number;
  reason?: string | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:66

Maintenance block schema.
Represents a time period when a reservable resource instance is unavailable.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:25 |
| <a id="resourceinstanceid"></a> `resourceInstanceId` | `string` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:26 |
| <a id="startdate"></a> `startDate` | `number` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:27 |
| <a id="enddate"></a> `endDate` | `number` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:28 |
| <a id="reason"></a> `reason?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:29 |
