[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductSetItemDisplay

# Type Alias: ProductSetItemDisplay

```ts
type ProductSetItemDisplay = {
  productId: string;
  productVariantId?: string | null;
  quantity: number;
  isRequired: boolean;
  displayOrder?: number;
  product?: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
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
     categoryId: string;
     category?:   | {
        id: string;
        createdAt?: number;
        updatedAt?: number;
        productRevisionId?: string;
        parentId?: string | null;
        name: string;
        slug?: string | null;
        description?: string | null;
        channelMappings?:   | {
           channelId: string;
           externalCategoryId: string;
         }[]
           | null;
        iconId?: string | null;
        heroImageId?: string | null;
        displayOrder?: number | null;
        isDefault: boolean;
        attributeBindings?:   | {
           attributeDefId: string;
           required: boolean;
           displayOrder: number;
         }[]
           | null;
        defaultAxisIds?: string[] | null;
        defaultChannelIds?: string[] | null;
        taxClassId?: string | null;
        targetMargin?: number | null;
        ageRestricted?: boolean | null;
        requireImage?: boolean | null;
        locationScope?:   | INHERITED
           | LOCAL
           | null;
      }
        | null;
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
     orderCount?: number | null;
     recentOrderCount?: number | null;
     lastOrderedAt?: number | null;
  };
};
```

Defined in: src/core/business-mgt/product-management/product-set.schema.ts:308

Product set item display schema.
Extended item schema with resolved product data for UI rendering.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | src/core/business-mgt/product-management/product-set.schema.ts:81 |
| <a id="productvariantid"></a> `productVariantId?` | `string` \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:82 |
| <a id="quantity"></a> `quantity` | `number` | src/core/business-mgt/product-management/product-set.schema.ts:83 |
| <a id="isrequired"></a> `isRequired` | `boolean` | src/core/business-mgt/product-management/product-set.schema.ts:84 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/product-management/product-set.schema.ts:85 |
| <a id="product"></a> `product?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `channelMappings?`: \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `name`: `string`; `description?`: `string` \| `null`; `imageUrl?`: `string` \| `null`; `imageUrls?`: `string`[] \| `null`; `tags?`: `string`[] \| `null`; `price`: `number`; `cost?`: `number` \| `null`; `compareAtPrice?`: `number` \| `null`; `sku?`: `string` \| `null`; `skuPattern?`: `string` \| `null`; `barcode?`: `string` \| `null`; `barcodeFormat?`: \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null`; `isAlcoholic`: `boolean` \| `null`; `categoryId`: `string`; `category?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null`; `brand?`: `string` \| `null`; `brandId?`: `string` \| `null`; `trackInventory`: `boolean`; `stockQuantity?`: `number` \| `null`; `lowStockThreshold?`: `number` \| `null`; `stockedAt?`: `number` \| `null`; `reorderPoint?`: `number` \| `null`; `leadTime?`: `number` \| `null`; `supplierId?`: `string` \| `null`; `weight?`: `number` \| `null`; `dimensions?`: \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null`; `shippingClassId?`: `string` \| `null`; `HSCode?`: `string` \| `null`; `attributes?`: \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null`; `taxRuleIds?`: `string`[] \| `null`; `isActive`: `boolean`; `displayOrder?`: `number` \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \} | src/core/business-mgt/product-management/product-set.schema.ts:290 |
| `product.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| `product.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| `product.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| `product.productRevisionId?` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:255 |
| `product.channelMappings?` | \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:256 |
| `product.name` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:257 |
| `product.description?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:258 |
| `product.imageUrl?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:259 |
| `product.imageUrls?` | `string`[] \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:260 |
| `product.tags?` | `string`[] \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:261 |
| `product.price` | `number` | src/core/business-mgt/product-management/product-config.schema.ts:264 |
| `product.cost?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:265 |
| `product.compareAtPrice?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:266 |
| `product.sku?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:269 |
| `product.skuPattern?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:270 |
| `product.barcode?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:271 |
| `product.barcodeFormat?` | \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:272 |
| `product.isAlcoholic` | `boolean` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:275 |
| `product.categoryId` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:276 |
| `product.category?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:277 |
| `product.brand?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:278 |
| `product.brandId?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:279 |
| `product.trackInventory` | `boolean` | src/core/business-mgt/product-management/product-config.schema.ts:282 |
| `product.stockQuantity?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:283 |
| `product.lowStockThreshold?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:284 |
| `product.stockedAt?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:285 |
| `product.reorderPoint?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:286 |
| `product.leadTime?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:287 |
| `product.supplierId?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:288 |
| `product.weight?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:291 |
| `product.dimensions?` | \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:292 |
| `product.shippingClassId?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:300 |
| `product.HSCode?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:301 |
| `product.attributes?` | \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:304 |
| `product.taxRuleIds?` | `string`[] \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:307 |
| `product.isActive` | `boolean` | src/core/business-mgt/product-management/product-config.schema.ts:310 |
| `product.displayOrder?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:311 |
| `product.orderCount?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:314 |
| `product.recentOrderCount?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:315 |
| `product.lastOrderedAt?` | `number` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:316 |
