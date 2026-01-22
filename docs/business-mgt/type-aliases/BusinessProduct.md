[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessProduct

# Type Alias: BusinessProduct

```ts
type BusinessProduct = {
  createdAt?: number;
  updatedAt?: number;
  id: string;
  name: string;
  description?: string;
  price: number;
  sku?: string;
  barcode?: string;
  categoryId: string;
  category?: {
     createdAt?: number;
     updatedAt?: number;
     id: string;
     name: string;
     description?: string;
     displayOrder?: number;
  };
  brand?: string;
  trackInventory: boolean;
  stockQuantity?: number;
  lowStockThreshold?: number;
  weight?: number;
  dimensions?: {
     length: number;
     width: number;
     height: number;
     unit: "cm" | "inches";
  };
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/product-config.schema.ts:121](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L121)

Business product schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L10) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-config.schema.ts:47](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L47) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L48) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L49) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/product-config.schema.ts:52](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L52) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-config.schema.ts:53](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L53) |
| <a id="barcode"></a> `barcode?` | `string` | [src/core/business-mgt/product-config.schema.ts:54](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L54) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/product-config.schema.ts:55](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L55) |
| <a id="category"></a> `category?` | \{ `createdAt?`: `number`; `updatedAt?`: `number`; `id`: `string`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; \} | [src/core/business-mgt/product-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L56) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L10) |
| `category.id` | `string` | [src/core/business-mgt/product-config.schema.ts:19](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L19) |
| `category.name` | `string` | [src/core/business-mgt/product-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L20) |
| `category.description?` | `string` | [src/core/business-mgt/product-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L21) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/product-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L22) |
| <a id="brand"></a> `brand?` | `string` | [src/core/business-mgt/product-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L57) |
| <a id="trackinventory"></a> `trackInventory` | `boolean` | [src/core/business-mgt/product-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L60) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | [src/core/business-mgt/product-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L61) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | [src/core/business-mgt/product-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L62) |
| <a id="weight"></a> `weight?` | `number` | [src/core/business-mgt/product-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L65) |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | [src/core/business-mgt/product-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L66) |
| `dimensions.length` | `number` | [src/core/business-mgt/product-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L67) |
| `dimensions.width` | `number` | [src/core/business-mgt/product-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L68) |
| `dimensions.height` | `number` | [src/core/business-mgt/product-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L69) |
| `dimensions.unit` | `"cm"` \| `"inches"` | [src/core/business-mgt/product-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L70) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-config.schema.ts:74](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/product-config.schema.ts#L74) |
