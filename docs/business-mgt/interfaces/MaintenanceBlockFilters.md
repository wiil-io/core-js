[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MaintenanceBlockFilters

# Interface: MaintenanceBlockFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:78](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L78)

Maintenance block filter options.
 MaintenanceBlockFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="resourceinstanceid"></a> `resourceInstanceId?` | `string` | Filter by maintained resource instance ID | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:80](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L80) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:82](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L82) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by maintenance timestamp range | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:84](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L84) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:84](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L84) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:84](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L84) |
