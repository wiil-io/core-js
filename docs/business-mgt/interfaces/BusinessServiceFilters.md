[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessServiceFilters

# Interface: BusinessServiceFilters

Defined in: src/core/business-mgt/service-management/business-service-config.schema.ts:371

Business service filter options.
 BusinessServiceFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across name/description | src/core/business-mgt/service-management/business-service-config.schema.ts:373 |
| <a id="categoryid"></a> `categoryId?` | `string` | Filter by category ID | src/core/business-mgt/service-management/business-service-config.schema.ts:375 |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | src/core/business-mgt/service-management/business-service-config.schema.ts:377 |
| <a id="isactive"></a> `isActive?` | `boolean` | Filter by active status | src/core/business-mgt/service-management/business-service-config.schema.ts:379 |
| <a id="isbookable"></a> `isBookable?` | `boolean` | Filter by bookable status | src/core/business-mgt/service-management/business-service-config.schema.ts:381 |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by price range | src/core/business-mgt/service-management/business-service-config.schema.ts:383 |
| `priceRange.min?` | `number` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:383 |
| `priceRange.max?` | `number` | - | src/core/business-mgt/service-management/business-service-config.schema.ts:383 |
| <a id="includedeleted"></a> `includeDeleted?` | `boolean` | Include soft-deleted records | src/core/business-mgt/service-management/business-service-config.schema.ts:385 |
