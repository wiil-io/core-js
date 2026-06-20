[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

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

Defined in: [src/core/business-mgt/product-management/product-set.schema.ts:273](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/product-management/product-set.schema.ts#L273)

Product set selector schema.
Defines criteria for dynamically selecting products to include in a set.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productidsany"></a> `productIdsAny` | `string`[] | [src/core/business-mgt/product-management/product-set.schema.ts:105](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/product-management/product-set.schema.ts#L105) |
| <a id="productidsall"></a> `productIdsAll` | `string`[] | [src/core/business-mgt/product-management/product-set.schema.ts:106](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/product-management/product-set.schema.ts#L106) |
| <a id="allproducts"></a> `allProducts` | `boolean` | [src/core/business-mgt/product-management/product-set.schema.ts:107](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/product-management/product-set.schema.ts#L107) |
| <a id="quantityexact"></a> `quantityExact?` | `number` | [src/core/business-mgt/product-management/product-set.schema.ts:108](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/product-management/product-set.schema.ts#L108) |
| <a id="quantitymin"></a> `quantityMin?` | `number` | [src/core/business-mgt/product-management/product-set.schema.ts:109](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/product-management/product-set.schema.ts#L109) |
| <a id="quantitymax"></a> `quantityMax?` | `number` | [src/core/business-mgt/product-management/product-set.schema.ts:110](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/product-management/product-set.schema.ts#L110) |
