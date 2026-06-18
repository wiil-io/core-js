[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductSetItem

# Type Alias: ProductSetItem

```ts
type ProductSetItem = {
  productId: string;
  productVariantId?: string | null;
  quantity: number;
  isRequired: boolean;
  displayOrder?: number;
};
```

Defined in: [src/core/business-mgt/product-management/product-set.schema.ts:271](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/product-management/product-set.schema.ts#L271)

Product set item schema.
Represents a product included in a set with quantity and requirement specifications.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-management/product-set.schema.ts:81](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/product-management/product-set.schema.ts#L81) |
| <a id="productvariantid"></a> `productVariantId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:82](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/product-management/product-set.schema.ts#L82) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/product-management/product-set.schema.ts:83](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/product-management/product-set.schema.ts#L83) |
| <a id="isrequired"></a> `isRequired` | `boolean` | [src/core/business-mgt/product-management/product-set.schema.ts:84](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/product-management/product-set.schema.ts#L84) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/product-management/product-set.schema.ts:85](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/business-mgt/product-management/product-set.schema.ts#L85) |
