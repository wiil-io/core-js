[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/product-management/product-config.schema.ts:420

Product category with descendants type.
Used when querying categories with nested hierarchy.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `descendants?` | `ProductCategoryWithDescendants`[] | Nested descendant categories | src/core/business-mgt/product-management/product-config.schema.ts:422 |
| `descendantIds?` | `string`[] | Flattened list of descendant category IDs | src/core/business-mgt/product-management/product-config.schema.ts:424 |
| `descendantCount?` | `number` | Total number of descendants | src/core/business-mgt/product-management/product-config.schema.ts:426 |
