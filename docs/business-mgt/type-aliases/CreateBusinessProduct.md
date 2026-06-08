[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateBusinessProduct

# Type Alias: CreateBusinessProduct

```ts
type CreateBusinessProduct = {
  productRevisionId?: string;
  channelMappings?:   | {
     channelId: string;
     externalProductId: string;
     externalCategoryId?: string | null;
   }[]
     | null;
  name: string;
  description?: string | null;
  imageUrl?: string | null;
  imageUrls?: string[] | null;
  tags?: string[] | null;
  price: number;
  cost?: number | null;
  compareAtPrice?: number | null;
  sku?: string | null;
  skuPattern?: string | null;
  barcode?: string | null;
  barcodeFormat?:   | UPC_A
     | UPC_E
     | EAN_13
     | EAN_8
     | CODE_128
     | CODE_39
     | ITF_14
     | QR
     | null;
  isAlcoholic: boolean | null;
  brand?: string | null;
  brandId?: string | null;
  trackInventory: boolean;
  stockQuantity?: number | null;
  lowStockThreshold?: number | null;
  stockedAt?: number | null;
  reorderPoint?: number | null;
  leadTime?: number | null;
  supplierId?: string | null;
  weight?: number | null;
  dimensions?:   | {
     length: number;
     width: number;
     height: number;
     unit: "cm" | "inches";
   }
     | null;
  shippingClassId?: string | null;
  HSCode?: string | null;
  attributes?:   | {
     attributeDefId: string;
     value: string | number | boolean;
   }[]
     | null;
  taxRuleIds?: string[] | null;
  isActive: boolean;
  displayOrder?: number | null;
  categoryId?: string;
  placement?: {
     placementIntent: {
        mode:   | "BEGINNING"
           | "END"
           | "KEEP_CURRENT"
           | "BEFORE_ITEM"
           | "AFTER_ITEM"
           | "ABSOLUTE_INDEX";
     };
     anchorItemId?: string | null;
     absoluteIndex?: number | null;
  };
};
```

Defined in: src/core/business-mgt/product-management/product-config.schema.ts:459

Schema for creating a new business product.
Omits auto-generated fields, category object, and analytics.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` | - | src/core/business-mgt/product-management/product-config.schema.ts:255 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:256 |
| <a id="name"></a> `name` | `string` | - | src/core/business-mgt/product-management/product-config.schema.ts:257 |
| <a id="description"></a> `description?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:258 |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:259 |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:260 |
| <a id="tags"></a> `tags?` | `string`[] \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:261 |
| <a id="price"></a> `price` | `number` | - | src/core/business-mgt/product-management/product-config.schema.ts:264 |
| <a id="cost"></a> `cost?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:265 |
| <a id="compareatprice"></a> `compareAtPrice?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:266 |
| <a id="sku"></a> `sku?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:269 |
| <a id="skupattern"></a> `skuPattern?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:270 |
| <a id="barcode"></a> `barcode?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:271 |
| <a id="barcodeformat"></a> `barcodeFormat?` | \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:272 |
| <a id="isalcoholic"></a> `isAlcoholic` | `boolean` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:275 |
| <a id="brand"></a> `brand?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:278 |
| <a id="brandid"></a> `brandId?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:279 |
| <a id="trackinventory"></a> `trackInventory` | `boolean` | - | src/core/business-mgt/product-management/product-config.schema.ts:282 |
| <a id="stockquantity"></a> `stockQuantity?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:283 |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:284 |
| <a id="stockedat"></a> `stockedAt?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:285 |
| <a id="reorderpoint"></a> `reorderPoint?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:286 |
| <a id="leadtime"></a> `leadTime?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:287 |
| <a id="supplierid"></a> `supplierId?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:288 |
| <a id="weight"></a> `weight?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:291 |
| <a id="dimensions"></a> `dimensions?` | \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:292 |
| <a id="shippingclassid"></a> `shippingClassId?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:300 |
| <a id="hscode"></a> `HSCode?` | `string` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:301 |
| <a id="attributes"></a> `attributes?` | \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:304 |
| <a id="taxruleids"></a> `taxRuleIds?` | `string`[] \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:307 |
| <a id="isactive"></a> `isActive` | `boolean` | - | src/core/business-mgt/product-management/product-config.schema.ts:310 |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | - | src/core/business-mgt/product-management/product-config.schema.ts:311 |
| <a id="categoryid"></a> `categoryId?` | `string` | - | src/core/business-mgt/product-management/product-config.schema.ts:375 |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | src/core/business-mgt/product-management/product-config.schema.ts:376 |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | src/core/type-definitions/display-order.ts:104 |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | src/core/type-definitions/display-order.ts:24 |
| `placement.anchorItemId?` | `string` \| `null` | - | src/core/type-definitions/display-order.ts:105 |
| `placement.absoluteIndex?` | `number` \| `null` | - | src/core/type-definitions/display-order.ts:106 |
