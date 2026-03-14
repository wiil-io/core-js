[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.46**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateBusinessProduct

# Type Alias: UpdateBusinessProduct

```ts
type UpdateBusinessProduct = {
  name?: string;
  description?: string;
  price?: number;
  sku?: string;
  barcode?: string;
  brand?: string;
  trackInventory?: boolean;
  stockQuantity?: number;
  lowStockThreshold?: number;
  weight?: number;
  dimensions?: {
     length: number;
     width: number;
     height: number;
     unit: "cm" | "inches";
  };
  isActive?: boolean;
  categoryId?: string;
  id: string;
};
```

Defined in: [src/core/business-mgt/product-config.schema.ts:119](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L119)

Schema for updating an existing business product.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/product-config.schema.ts:44](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L44) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:45](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L45) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/product-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L48) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L49) |
| <a id="barcode"></a> `barcode?` | `string` | [src/core/business-mgt/product-config.schema.ts:50](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L50) |
| <a id="brand"></a> `brand?` | `string` | [src/core/business-mgt/product-config.schema.ts:53](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L53) |
| <a id="trackinventory"></a> `trackInventory?` | `boolean` | [src/core/business-mgt/product-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L56) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | [src/core/business-mgt/product-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L57) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | [src/core/business-mgt/product-config.schema.ts:58](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L58) |
| <a id="weight"></a> `weight?` | `number` | [src/core/business-mgt/product-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L61) |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | [src/core/business-mgt/product-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L62) |
| `dimensions.length` | `number` | [src/core/business-mgt/product-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L63) |
| `dimensions.width` | `number` | [src/core/business-mgt/product-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L64) |
| `dimensions.height` | `number` | [src/core/business-mgt/product-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L65) |
| `dimensions.unit` | `"cm"` \| `"inches"` | [src/core/business-mgt/product-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L66) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/product-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L70) |
| <a id="categoryid"></a> `categoryId?` | `string` | [src/core/business-mgt/product-config.schema.ts:102](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L102) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-config.schema.ts:110](https://github.com/wiil-io/core-js/blob/80f3e7bb8af537b810af6933b5a8f088a8518682/src/core/business-mgt/product-config.schema.ts#L110) |
