[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.5**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateProductCategory

# Type Alias: UpdateProductCategory

```ts
type UpdateProductCategory = {
  name?: string;
  description?: string;
  displayOrder?: number;
  isDefault?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/product-config.schema.ts:124](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/product-config.schema.ts#L124)

Schema for updating an existing product category.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/product-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/product-config.schema.ts#L21) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/product-config.schema.ts#L22) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/product-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/product-config.schema.ts#L23) |
| <a id="isdefault"></a> `isDefault?` | `boolean` | [src/core/business-mgt/product-config.schema.ts:24](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/product-config.schema.ts#L24) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-config.schema.ts:95](https://github.com/wiil-io/core-js/blob/376fc7af7b7b381dfd7c674140b3d9eb8e4bd0c3/src/core/business-mgt/product-config.schema.ts#L95) |
