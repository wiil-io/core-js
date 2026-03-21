[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.51**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / BusinessProduct

# Type Alias: BusinessProduct

```ts
type BusinessProduct = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  description?: string;
  price: number;
  sku?: string;
  barcode?: string;
  categoryId: string;
  category?: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
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

Defined in: [src/core/business-mgt/product-config.schema.ts:117](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L117)

Business product schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-config.schema.ts:44](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L44) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:45](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L45) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/product-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L48) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L49) |
| <a id="barcode"></a> `barcode?` | `string` | [src/core/business-mgt/product-config.schema.ts:50](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L50) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/product-config.schema.ts:51](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L51) |
| <a id="category"></a> `category?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; \} | [src/core/business-mgt/product-config.schema.ts:52](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L52) |
| `category.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L8) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/base.schema.ts#L10) |
| `category.name` | `string` | [src/core/business-mgt/product-config.schema.ts:18](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L18) |
| `category.description?` | `string` | [src/core/business-mgt/product-config.schema.ts:19](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L19) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/product-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L20) |
| <a id="brand"></a> `brand?` | `string` | [src/core/business-mgt/product-config.schema.ts:53](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L53) |
| <a id="trackinventory"></a> `trackInventory` | `boolean` | [src/core/business-mgt/product-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L56) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | [src/core/business-mgt/product-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L57) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | [src/core/business-mgt/product-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L58) |
| <a id="weight"></a> `weight?` | `number` | [src/core/business-mgt/product-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L61) |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | [src/core/business-mgt/product-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L62) |
| `dimensions.length` | `number` | [src/core/business-mgt/product-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L63) |
| `dimensions.width` | `number` | [src/core/business-mgt/product-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L64) |
| `dimensions.height` | `number` | [src/core/business-mgt/product-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L65) |
| `dimensions.unit` | `"cm"` \| `"inches"` | [src/core/business-mgt/product-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L66) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/5c8d967933edfe6fc001aa769a11443695981d49/src/core/business-mgt/product-config.schema.ts#L70) |
