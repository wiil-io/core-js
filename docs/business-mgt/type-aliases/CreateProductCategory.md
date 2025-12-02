[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateProductCategory

# Type Alias: CreateProductCategory

```ts
type CreateProductCategory = {
  name: string;
  description?: string;
  displayOrder?: number;
  isDefault: boolean;
};
```

Defined in: [src/core/business-mgt/product-config.schema.ts:123](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/product-config.schema.ts#L123)

Schema for creating a new product category.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/product-config.schema.ts#L21) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/product-config.schema.ts#L22) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/product-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/product-config.schema.ts#L23) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/product-config.schema.ts:24](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/business-mgt/product-config.schema.ts#L24) |
