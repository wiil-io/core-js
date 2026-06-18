[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

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

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:420](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L420)

Product category with descendants type.
Used when querying categories with nested hierarchy.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `descendants?` | `ProductCategoryWithDescendants`[] | Nested descendant categories | [src/core/business-mgt/product-management/product-config.schema.ts:422](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L422) |
| `descendantIds?` | `string`[] | Flattened list of descendant category IDs | [src/core/business-mgt/product-management/product-config.schema.ts:424](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L424) |
| `descendantCount?` | `number` | Total number of descendants | [src/core/business-mgt/product-management/product-config.schema.ts:426](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L426) |
