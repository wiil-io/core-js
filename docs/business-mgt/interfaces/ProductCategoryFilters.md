[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductCategoryFilters

# Interface: ProductCategoryFilters

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:518](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/product-management/product-config.schema.ts#L518)

Product category filter options.
 ProductCategoryFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across name/description | [src/core/business-mgt/product-management/product-config.schema.ts:520](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/product-management/product-config.schema.ts#L520) |
| <a id="parentid"></a> `parentId?` | `string` \| `null` | Filter by parent category ID (null = root categories only) | [src/core/business-mgt/product-management/product-config.schema.ts:522](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/product-management/product-config.schema.ts#L522) |
| <a id="includedescendants"></a> `includeDescendants?` | `boolean` | Whether to include descendant categories in search | [src/core/business-mgt/product-management/product-config.schema.ts:524](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/product-management/product-config.schema.ts#L524) |
| <a id="locationscope"></a> `locationScope?` | [`CategoryLocationScope`](../enumerations/CategoryLocationScope.md) | Filter by location scope | [src/core/business-mgt/product-management/product-config.schema.ts:526](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/product-management/product-config.schema.ts#L526) |
| <a id="agerestricted"></a> `ageRestricted?` | `boolean` | Filter by age-restricted status | [src/core/business-mgt/product-management/product-config.schema.ts:528](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/business-mgt/product-management/product-config.schema.ts#L528) |
