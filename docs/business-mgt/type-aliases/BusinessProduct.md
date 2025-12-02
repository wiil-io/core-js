[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.9**](../../README.md)

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
     isDefault: boolean;
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
  displayOrder?: number;
};
```

Defined in: [src/core/business-mgt/product-config.schema.ts:125](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L125)

Business product schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/base.schema.ts#L10) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L49) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-config.schema.ts:50](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L50) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:51](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L51) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/product-config.schema.ts:54](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L54) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-config.schema.ts:55](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L55) |
| <a id="barcode"></a> `barcode?` | `string` | [src/core/business-mgt/product-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L56) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/product-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L57) |
| <a id="category"></a> `category?` | \{ `createdAt?`: `number`; `updatedAt?`: `number`; `id`: `string`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; `isDefault`: `boolean`; \} | [src/core/business-mgt/product-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L58) |
| `category.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/base.schema.ts#L9) |
| `category.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/base.schema.ts#L10) |
| `category.id` | `string` | [src/core/business-mgt/product-config.schema.ts:20](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L20) |
| `category.name` | `string` | [src/core/business-mgt/product-config.schema.ts:21](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L21) |
| `category.description?` | `string` | [src/core/business-mgt/product-config.schema.ts:22](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L22) |
| `category.displayOrder?` | `number` | [src/core/business-mgt/product-config.schema.ts:23](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L23) |
| `category.isDefault` | `boolean` | [src/core/business-mgt/product-config.schema.ts:24](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L24) |
| <a id="brand"></a> `brand?` | `string` | [src/core/business-mgt/product-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L59) |
| <a id="trackinventory"></a> `trackInventory` | `boolean` | [src/core/business-mgt/product-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L62) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | [src/core/business-mgt/product-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L63) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | [src/core/business-mgt/product-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L64) |
| <a id="weight"></a> `weight?` | `number` | [src/core/business-mgt/product-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L67) |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | [src/core/business-mgt/product-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L68) |
| `dimensions.length` | `number` | [src/core/business-mgt/product-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L69) |
| `dimensions.width` | `number` | [src/core/business-mgt/product-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L70) |
| `dimensions.height` | `number` | [src/core/business-mgt/product-config.schema.ts:71](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L71) |
| `dimensions.unit` | `"cm"` \| `"inches"` | [src/core/business-mgt/product-config.schema.ts:72](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L72) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L76) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/product-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/6743c4ae992e07d3c6269212065befbbcc5cf8ce/src/core/business-mgt/product-config.schema.ts#L77) |
