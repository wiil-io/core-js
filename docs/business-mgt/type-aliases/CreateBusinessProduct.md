[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.29**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessProduct

# Type Alias: CreateBusinessProduct

```ts
type CreateBusinessProduct = {
  name: string;
  description?: string;
  price: number;
  sku?: string;
  barcode?: string;
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
  categoryId?: string;
};
```

Defined in: [src/core/business-mgt/product-config.schema.ts:122](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L122)

Schema for creating a new business product.
Omits auto-generated fields and category object.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-config.schema.ts:48](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L48) |
| <a id="description"></a> `description?` | `string` | [src/core/business-mgt/product-config.schema.ts:49](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L49) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/product-config.schema.ts:52](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L52) |
| <a id="sku"></a> `sku?` | `string` | [src/core/business-mgt/product-config.schema.ts:53](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L53) |
| <a id="barcode"></a> `barcode?` | `string` | [src/core/business-mgt/product-config.schema.ts:54](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L54) |
| <a id="brand"></a> `brand?` | `string` | [src/core/business-mgt/product-config.schema.ts:57](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L57) |
| <a id="trackinventory"></a> `trackInventory` | `boolean` | [src/core/business-mgt/product-config.schema.ts:60](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L60) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | [src/core/business-mgt/product-config.schema.ts:61](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L61) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | [src/core/business-mgt/product-config.schema.ts:62](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L62) |
| <a id="weight"></a> `weight?` | `number` | [src/core/business-mgt/product-config.schema.ts:65](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L65) |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | [src/core/business-mgt/product-config.schema.ts:66](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L66) |
| `dimensions.length` | `number` | [src/core/business-mgt/product-config.schema.ts:67](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L67) |
| `dimensions.width` | `number` | [src/core/business-mgt/product-config.schema.ts:68](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L68) |
| `dimensions.height` | `number` | [src/core/business-mgt/product-config.schema.ts:69](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L69) |
| `dimensions.unit` | `"cm"` \| `"inches"` | [src/core/business-mgt/product-config.schema.ts:70](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L70) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-config.schema.ts:74](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L74) |
| <a id="categoryid"></a> `categoryId?` | `string` | [src/core/business-mgt/product-config.schema.ts:106](https://github.com/wiil-io/core-js/blob/84bc94da37a7c071ffcbbcc61f07f2596d6db417/src/core/business-mgt/product-config.schema.ts#L106) |
