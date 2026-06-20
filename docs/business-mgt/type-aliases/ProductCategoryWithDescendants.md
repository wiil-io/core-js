[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductCategoryWithDescendants

# Type Alias: ProductCategoryWithDescendants

```ts
type ProductCategoryWithDescendants = ProductCategoryBase & {
  descendants?: ProductCategoryWithDescendants[];
  descendantIds?: string[];
  descendantCount?: number;
};
```

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:427](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-config.schema.ts#L427)

Product category with descendants type.
Used when querying categories with nested hierarchy.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `descendants?` | `ProductCategoryWithDescendants`[] | Nested descendant categories | [src/core/business-mgt/product-management/product-config.schema.ts:429](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-config.schema.ts#L429) |
| `descendantIds?` | `string`[] | Flattened list of descendant category IDs | [src/core/business-mgt/product-management/product-config.schema.ts:431](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-config.schema.ts#L431) |
| `descendantCount?` | `number` | Total number of descendants | [src/core/business-mgt/product-management/product-config.schema.ts:433](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-config.schema.ts#L433) |
