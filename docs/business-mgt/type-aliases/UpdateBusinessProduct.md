[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.11**](../../README.md)

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
  displayOrder?: number;
  categoryId?: string;
  category?: string | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/product-config.schema.ts:127](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L127)

Schema for updating an existing business product.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/product-config.schema.ts:50](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L50) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:51](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L51) |
| <a id="price"></a> `price?` | `number` | [src/core/business-mgt/product-config.schema.ts:54](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L54) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-config.schema.ts:55](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L55) |
| <a id="barcode"></a> `barcode?` | `string` | [src/core/business-mgt/product-config.schema.ts:56](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L56) |
| <a id="brand"></a> `brand?` | `string` | [src/core/business-mgt/product-config.schema.ts:59](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L59) |
| <a id="trackinventory"></a> `trackInventory?` | `boolean` | [src/core/business-mgt/product-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L62) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | [src/core/business-mgt/product-config.schema.ts:63](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L63) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | [src/core/business-mgt/product-config.schema.ts:64](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L64) |
| <a id="weight"></a> `weight?` | `number` | [src/core/business-mgt/product-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L67) |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | [src/core/business-mgt/product-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L68) |
| `dimensions.length` | `number` | [src/core/business-mgt/product-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L69) |
| `dimensions.width` | `number` | [src/core/business-mgt/product-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L70) |
| `dimensions.height` | `number` | [src/core/business-mgt/product-config.schema.ts:71](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L71) |
| `dimensions.unit` | `"cm"` \| `"inches"` | [src/core/business-mgt/product-config.schema.ts:72](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L72) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/product-config.schema.ts:76](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L76) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/product-config.schema.ts:77](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L77) |
| <a id="categoryid"></a> `categoryId?` | `string` | [src/core/business-mgt/product-config.schema.ts:109](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L109) |
| <a id="category"></a> `category?` | `string` \| `null` | [src/core/business-mgt/product-config.schema.ts:110](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L110) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-config.schema.ts:118](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/product-config.schema.ts#L118) |
