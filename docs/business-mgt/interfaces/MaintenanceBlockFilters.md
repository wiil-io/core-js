[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.67**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / MaintenanceBlockFilters

# Interface: MaintenanceBlockFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:78](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L78)

Maintenance block filter options.
 MaintenanceBlockFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="resourceinstanceid"></a> `resourceInstanceId?` | `string` | Filter by maintained resource instance ID | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:80](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L80) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:82](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L82) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by maintenance date range (Unix epoch seconds) | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:84](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L84) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:84](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L84) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts:84](https://github.com/wiil-io/core-js/blob/ace6832aca9fffedcd08c80748cc5e0215fd52c5/src/core/business-mgt/reservation-mgt/reservation-maintenance-block.schema.ts#L84) |
