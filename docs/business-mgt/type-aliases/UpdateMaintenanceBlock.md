[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:68](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L68)

Schema for updating an existing maintenance block.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:25](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L25) |
| <a id="resourceinstanceid"></a> `resourceInstanceId?` | `string` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:26](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L26) |
| <a id="startdate"></a> `startDate?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:27](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L27) |
| <a id="enddate"></a> `endDate?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:28](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L28) |
| <a id="reason"></a> `reason?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:29](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L29) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:59](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L59) |
