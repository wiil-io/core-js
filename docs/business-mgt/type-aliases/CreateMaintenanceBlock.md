[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:67](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L67)

Schema for creating a new maintenance block.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:25](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L25) |
| <a id="resourceinstanceid"></a> `resourceInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:26](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L26) |
| <a id="startdate"></a> `startDate` | `number` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:27](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L27) |
| <a id="enddate"></a> `endDate` | `number` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:28](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L28) |
| <a id="reason"></a> `reason?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:29](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L29) |
