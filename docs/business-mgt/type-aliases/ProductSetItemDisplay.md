[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

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

Defined in: [src/core/business-mgt/product-management/product-set.schema.ts:308](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-set.schema.ts#L308)

Product set item display schema.
Extended item schema with resolved product data for UI rendering.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-management/product-set.schema.ts:81](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-set.schema.ts#L81) |
| <a id="productvariantid"></a> `productVariantId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:82](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-set.schema.ts#L82) |
| <a id="quantity"></a> `quantity` | `number` | [src/core/business-mgt/product-management/product-set.schema.ts:83](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-set.schema.ts#L83) |
| <a id="isrequired"></a> `isRequired` | `boolean` | [src/core/business-mgt/product-management/product-set.schema.ts:84](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-set.schema.ts#L84) |
| <a id="displayorder"></a> `displayOrder?` | `number` | [src/core/business-mgt/product-management/product-set.schema.ts:85](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-set.schema.ts#L85) |
| <a id="product"></a> `product?` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `channelMappings?`: \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `name`: `string`; `description?`: `string` \| `null`; `imageUrl?`: `string` \| `null`; `imageUrls?`: `string`[] \| `null`; `tags?`: `string`[] \| `null`; `price`: `number`; `cost?`: `number` \| `null`; `compareAtPrice?`: `number` \| `null`; `sku?`: `string` \| `null`; `skuPattern?`: `string` \| `null`; `barcode?`: `string` \| `null`; `barcodeFormat?`: \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null`; `isAlcoholic`: `boolean` \| `null`; `categoryId`: `string`; `category?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null`; `brand?`: `string` \| `null`; `brandId?`: `string` \| `null`; `trackInventory`: `boolean`; `stockQuantity?`: `number` \| `null`; `lowStockThreshold?`: `number` \| `null`; `stockedAt?`: `number` \| `null`; `reorderPoint?`: `number` \| `null`; `leadTime?`: `number` \| `null`; `supplierId?`: `string` \| `null`; `weight?`: `number` \| `null`; `dimensions?`: \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null`; `shippingClassId?`: `string` \| `null`; `HSCode?`: `string` \| `null`; `attributes?`: \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null`; `taxRuleIds?`: `string`[] \| `null`; `isActive`: `boolean`; `displayOrder?`: `number` \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \} | [src/core/business-mgt/product-management/product-set.schema.ts:290](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-set.schema.ts#L290) |
| `product.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/base.schema.ts#L8) |
| `product.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/base.schema.ts#L9) |
| `product.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/base.schema.ts#L10) |
| `product.productRevisionId?` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:255](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L255) |
| `product.channelMappings?` | \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:256](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L256) |
| `product.name` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:257](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L257) |
| `product.description?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:258](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L258) |
| `product.imageUrl?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:259](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L259) |
| `product.imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:260](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L260) |
| `product.tags?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:261](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L261) |
| `product.price` | `number` | [src/core/business-mgt/product-management/product-config.schema.ts:264](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L264) |
| `product.cost?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:265](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L265) |
| `product.compareAtPrice?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:266](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L266) |
| `product.sku?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:269](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L269) |
| `product.skuPattern?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:270](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L270) |
| `product.barcode?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:271](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L271) |
| `product.barcodeFormat?` | \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:272](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L272) |
| `product.isAlcoholic` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:275](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L275) |
| `product.categoryId` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:276](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L276) |
| `product.category?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:277](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L277) |
| `product.brand?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:278](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L278) |
| `product.brandId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:279](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L279) |
| `product.trackInventory` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:282](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L282) |
| `product.stockQuantity?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:283](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L283) |
| `product.lowStockThreshold?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:284](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L284) |
| `product.stockedAt?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:285](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L285) |
| `product.reorderPoint?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:286](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L286) |
| `product.leadTime?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:287](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L287) |
| `product.supplierId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:288](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L288) |
| `product.weight?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:291](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L291) |
| `product.dimensions?` | \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L292) |
| `product.shippingClassId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:300](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L300) |
| `product.HSCode?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:301](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L301) |
| `product.attributes?` | \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:304](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L304) |
| `product.taxRuleIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:307](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L307) |
| `product.isActive` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:310](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L310) |
| `product.displayOrder?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:311](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L311) |
| `product.orderCount?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:314](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L314) |
| `product.recentOrderCount?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:315](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L315) |
| `product.lastOrderedAt?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:316](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L316) |
