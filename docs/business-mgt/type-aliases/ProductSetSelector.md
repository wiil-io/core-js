[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductSetSelector

# Type Alias: ProductSetSelector

```ts
type ProductSetSelector = {
  productIdsAny: string[];
  productIdsAll: string[];
  allProducts: boolean;
  quantityExact?: number;
  quantityMin?: number;
  quantityMax?: number;
};
```

Defined in: src/core/business-mgt/product-management/product-set.schema.ts:273

Product set selector schema.
Defines criteria for dynamically selecting products to include in a set.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productidsany"></a> `productIdsAny` | `string`[] | src/core/business-mgt/product-management/product-set.schema.ts:105 |
| <a id="productidsall"></a> `productIdsAll` | `string`[] | src/core/business-mgt/product-management/product-set.schema.ts:106 |
| <a id="allproducts"></a> `allProducts` | `boolean` | src/core/business-mgt/product-management/product-set.schema.ts:107 |
| <a id="quantityexact"></a> `quantityExact?` | `number` | src/core/business-mgt/product-management/product-set.schema.ts:108 |
| <a id="quantitymin"></a> `quantityMin?` | `number` | src/core/business-mgt/product-management/product-set.schema.ts:109 |
| <a id="quantitymax"></a> `quantityMax?` | `number` | src/core/business-mgt/product-management/product-set.schema.ts:110 |
