[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductAxisBinding

# Type Alias: ProductAxisBinding

```ts
type ProductAxisBinding = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  productRevisionId?: string;
  productId: string;
  axisId: string;
  displayOrder: number;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/product-management/product-axis-binding.schema.ts:60](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-axis-binding.schema.ts#L60)

Product axis binding schema.
Links products to their applicable variant axes, defining which axes apply to each product.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/base.schema.ts#L10) |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` | [src/core/business-mgt/product-management/product-axis-binding.schema.ts:27](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-axis-binding.schema.ts#L27) |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-management/product-axis-binding.schema.ts:28](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-axis-binding.schema.ts#L28) |
| <a id="axisid"></a> `axisId` | `string` | [src/core/business-mgt/product-management/product-axis-binding.schema.ts:29](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-axis-binding.schema.ts#L29) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/product-management/product-axis-binding.schema.ts:30](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-axis-binding.schema.ts#L30) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-axis-binding.schema.ts:31](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/product-management/product-axis-binding.schema.ts#L31) |
