[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.53**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessProductFilters

# Interface: BusinessProductFilters

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:554](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L554)

Business product filter options.
 BusinessProductFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across name/description | [src/core/business-mgt/product-management/product-config.schema.ts:556](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L556) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/business-mgt/product-management/product-config.schema.ts:558](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L558) |
| <a id="categoryid"></a> `categoryId?` | `string` | Filter by category ID | [src/core/business-mgt/product-management/product-config.schema.ts:560](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L560) |
| <a id="isactive"></a> `isActive?` | `boolean` | Filter by active status | [src/core/business-mgt/product-management/product-config.schema.ts:562](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L562) |
| <a id="brand"></a> `brand?` | `string` | Filter by brand name | [src/core/business-mgt/product-management/product-config.schema.ts:564](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L564) |
| <a id="brandid"></a> `brandId?` | `string` | Filter by brand ID | [src/core/business-mgt/product-management/product-config.schema.ts:566](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L566) |
| <a id="trackinventory"></a> `trackInventory?` | `boolean` | Filter by inventory tracking status | [src/core/business-mgt/product-management/product-config.schema.ts:568](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L568) |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by price range | [src/core/business-mgt/product-management/product-config.schema.ts:570](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L570) |
| `priceRange.min?` | `number` | - | [src/core/business-mgt/product-management/product-config.schema.ts:570](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L570) |
| `priceRange.max?` | `number` | - | [src/core/business-mgt/product-management/product-config.schema.ts:570](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L570) |
| <a id="lowstock"></a> `lowStock?` | `boolean` | Filter products at or below low stock threshold | [src/core/business-mgt/product-management/product-config.schema.ts:572](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L572) |
| <a id="isalcoholic"></a> `isAlcoholic?` | `boolean` | Filter by alcoholic status | [src/core/business-mgt/product-management/product-config.schema.ts:574](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L574) |
| <a id="tags"></a> `tags?` | `string`[] | Filter by tags | [src/core/business-mgt/product-management/product-config.schema.ts:576](https://github.com/wiil-io/core-js/blob/43f9832c8ca9dc8d3a35be8a362c24983a1b73cc/src/core/business-mgt/product-management/product-config.schema.ts#L576) |
