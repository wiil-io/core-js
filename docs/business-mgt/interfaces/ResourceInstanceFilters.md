[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ResourceInstanceFilters

# Interface: ResourceInstanceFilters

Defined in: src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:116

Resource instance filter options.
 ResourceInstanceFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId?` | `string` | Filter by parent resource ID | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:118 |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:120 |
| <a id="status"></a> `status?` | [`ResourceInstanceStatus`](../enumerations/ResourceInstanceStatus.md)[] | Filter by operational statuses | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:122 |
| <a id="isavailable"></a> `isAvailable?` | `boolean` | Filter by assignment availability | src/core/business-mgt/reservation-mgt/resource/reservation-resource-instance.schema.ts:124 |
