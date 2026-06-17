[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:67](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L67)

Schema for creating a new maintenance block.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:25](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L25) |
| <a id="resourceinstanceid"></a> `resourceInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:26](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L26) |
| <a id="startdate"></a> `startDate` | `number` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:27](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L27) |
| <a id="enddate"></a> `endDate` | `number` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:28](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L28) |
| <a id="reason"></a> `reason?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:29](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L29) |
