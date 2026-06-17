[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.56**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessServiceFilters

# Interface: BusinessServiceFilters

Defined in: [src/core/business-mgt/service-management/business-service-config.schema.ts:371](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L371)

Business service filter options.
 BusinessServiceFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across name/description | [src/core/business-mgt/service-management/business-service-config.schema.ts:373](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L373) |
| <a id="categoryid"></a> `categoryId?` | `string` | Filter by category ID | [src/core/business-mgt/service-management/business-service-config.schema.ts:375](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L375) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/business-mgt/service-management/business-service-config.schema.ts:377](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L377) |
| <a id="isactive"></a> `isActive?` | `boolean` | Filter by active status | [src/core/business-mgt/service-management/business-service-config.schema.ts:379](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L379) |
| <a id="isbookable"></a> `isBookable?` | `boolean` | Filter by bookable status | [src/core/business-mgt/service-management/business-service-config.schema.ts:381](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L381) |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by price range | [src/core/business-mgt/service-management/business-service-config.schema.ts:383](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L383) |
| `priceRange.min?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:383](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L383) |
| `priceRange.max?` | `number` | - | [src/core/business-mgt/service-management/business-service-config.schema.ts:383](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L383) |
| <a id="includedeleted"></a> `includeDeleted?` | `boolean` | Include soft-deleted records | [src/core/business-mgt/service-management/business-service-config.schema.ts:385](https://github.com/wiil-io/core-js/blob/c95ae3a360c78f693556f9e092910921cf0ae2cf/src/core/business-mgt/service-management/business-service-config.schema.ts#L385) |
