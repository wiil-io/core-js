[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.58**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductCategoryFilters

# Interface: ProductCategoryFilters

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:511](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/product-management/product-config.schema.ts#L511)

Product category filter options.
 ProductCategoryFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across name/description | [src/core/business-mgt/product-management/product-config.schema.ts:513](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/product-management/product-config.schema.ts#L513) |
| <a id="parentid"></a> `parentId?` | `string` \| `null` | Filter by parent category ID (null = root categories only) | [src/core/business-mgt/product-management/product-config.schema.ts:515](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/product-management/product-config.schema.ts#L515) |
| <a id="includedescendants"></a> `includeDescendants?` | `boolean` | Whether to include descendant categories in search | [src/core/business-mgt/product-management/product-config.schema.ts:517](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/product-management/product-config.schema.ts#L517) |
| <a id="locationscope"></a> `locationScope?` | [`CategoryLocationScope`](../enumerations/CategoryLocationScope.md) | Filter by location scope | [src/core/business-mgt/product-management/product-config.schema.ts:519](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/product-management/product-config.schema.ts#L519) |
| <a id="agerestricted"></a> `ageRestricted?` | `boolean` | Filter by age-restricted status | [src/core/business-mgt/product-management/product-config.schema.ts:521](https://github.com/wiil-io/core-js/blob/4be5beeca2c5a15e9be2725805032c749f72aacd/src/core/business-mgt/product-management/product-config.schema.ts#L521) |
