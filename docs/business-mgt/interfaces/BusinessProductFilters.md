[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessProductFilters

# Interface: BusinessProductFilters

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:561](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L561)

Business product filter options.
 BusinessProductFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across name/description | [src/core/business-mgt/product-management/product-config.schema.ts:563](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L563) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/business-mgt/product-management/product-config.schema.ts:565](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L565) |
| <a id="categoryid"></a> `categoryId?` | `string` | Filter by category ID | [src/core/business-mgt/product-management/product-config.schema.ts:567](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L567) |
| <a id="isactive"></a> `isActive?` | `boolean` | Filter by active status | [src/core/business-mgt/product-management/product-config.schema.ts:569](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L569) |
| <a id="brand"></a> `brand?` | `string` | Filter by brand name | [src/core/business-mgt/product-management/product-config.schema.ts:571](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L571) |
| <a id="brandid"></a> `brandId?` | `string` | Filter by brand ID | [src/core/business-mgt/product-management/product-config.schema.ts:573](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L573) |
| <a id="trackinventory"></a> `trackInventory?` | `boolean` | Filter by inventory tracking status | [src/core/business-mgt/product-management/product-config.schema.ts:575](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L575) |
| <a id="pricerange"></a> `priceRange?` | \{ `min?`: `number`; `max?`: `number`; \} | Filter by price range | [src/core/business-mgt/product-management/product-config.schema.ts:577](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L577) |
| `priceRange.min?` | `number` | - | [src/core/business-mgt/product-management/product-config.schema.ts:577](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L577) |
| `priceRange.max?` | `number` | - | [src/core/business-mgt/product-management/product-config.schema.ts:577](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L577) |
| <a id="lowstock"></a> `lowStock?` | `boolean` | Filter products at or below low stock threshold | [src/core/business-mgt/product-management/product-config.schema.ts:579](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L579) |
| <a id="isalcoholic"></a> `isAlcoholic?` | `boolean` | Filter by alcoholic status | [src/core/business-mgt/product-management/product-config.schema.ts:581](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L581) |
| <a id="tags"></a> `tags?` | `string`[] | Filter by tags | [src/core/business-mgt/product-management/product-config.schema.ts:583](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/product-management/product-config.schema.ts#L583) |
