[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductCatalogDisplay

# Type Alias: ProductCatalogDisplay

```ts
type ProductCatalogDisplay = {
  productCategory: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     productRevisionId?: string | null;
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
  };
  items: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     productRevisionId?: string | null;
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
        productRevisionId?: string | null;
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
     variants: {
        id: string;
        createdAt?: number;
        updatedAt?: number;
        stockStatus: StockStatus;
        productRevisionId?: string | null;
        productId: string;
        axisValues: Record<string, string>;
        sku?: string | null;
        barcode?: string | null;
        partNumber?: string | null;
        globalTradeItemNumber?: string | null;
        price?: number | null;
        cost?: number | null;
        compareAtPrice?: number | null;
        stockQuantity?: number | null;
        lowStockThreshold?: number | null;
        unitDefinitionId?: string | null;
        inventoryUnit?:   | EACH
           | PACK
           | BOX
           | CASE
           | DOZEN
           | PAIR
           | GRAM
           | POUNDS
           | KILOGRAM
           | MILLILITER
           | LITER
           | METER
           | CENTIMETER
           | ROLL
           | SET
           | OTHER
           | null;
        weight?: number | null;
        dimensions?:   | {
           length: number;
           width: number;
           height: number;
           unit: "cm" | "inches";
         }
           | null;
        imageId?: string | null;
        imageIds?: string[] | null;
        channelMappings?:   | {
           channelId: string;
           externalVariantId: string;
           externalProductId?: string | null;
         }[]
           | null;
        isActive: boolean;
        isDefault: boolean;
        orderCount?: number | null;
        recentOrderCount?: number | null;
        lastOrderedAt?: number | null;
     }[];
     priceRange?:   | {
        min: number;
        max: number;
      }
        | null;
     isVariantSelectable: boolean;
  }[];
};
```

Defined in: [src/core/business-mgt/product-management/product-display.schema.ts:91](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-display.schema.ts#L91)

Product catalog display schema.
Represents a category with its complete list of products for catalog rendering.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productcategory"></a> `productCategory` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string` \| `null`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} | [src/core/business-mgt/product-management/product-display.schema.ts:68](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-display.schema.ts#L68) |
| `productCategory.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L8) |
| `productCategory.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L9) |
| `productCategory.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L10) |
| `productCategory.productRevisionId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L176) |
| `productCategory.parentId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:177](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L177) |
| `productCategory.name` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:178](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L178) |
| `productCategory.slug?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L179) |
| `productCategory.description?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:180](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L180) |
| `productCategory.channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:181](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L181) |
| `productCategory.iconId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:184](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L184) |
| `productCategory.heroImageId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:185](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L185) |
| `productCategory.displayOrder?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:188](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L188) |
| `productCategory.isDefault` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:189](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L189) |
| `productCategory.attributeBindings?` | \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L192) |
| `productCategory.defaultAxisIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L195) |
| `productCategory.defaultChannelIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:198](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L198) |
| `productCategory.taxClassId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:201](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L201) |
| `productCategory.targetMargin?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:202](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L202) |
| `productCategory.ageRestricted?` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:205](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L205) |
| `productCategory.requireImage?` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:206](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L206) |
| `productCategory.locationScope?` | \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:209](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L209) |
| <a id="items"></a> `items` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `name`: `string`; `description?`: `string` \| `null`; `imageUrl?`: `string` \| `null`; `imageUrls?`: `string`[] \| `null`; `tags?`: `string`[] \| `null`; `price`: `number`; `cost?`: `number` \| `null`; `compareAtPrice?`: `number` \| `null`; `sku?`: `string` \| `null`; `skuPattern?`: `string` \| `null`; `barcode?`: `string` \| `null`; `barcodeFormat?`: \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null`; `isAlcoholic`: `boolean` \| `null`; `categoryId`: `string`; `category?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string` \| `null`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null`; `brand?`: `string` \| `null`; `brandId?`: `string` \| `null`; `trackInventory`: `boolean`; `stockQuantity?`: `number` \| `null`; `lowStockThreshold?`: `number` \| `null`; `stockedAt?`: `number` \| `null`; `reorderPoint?`: `number` \| `null`; `leadTime?`: `number` \| `null`; `supplierId?`: `string` \| `null`; `weight?`: `number` \| `null`; `dimensions?`: \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null`; `shippingClassId?`: `string` \| `null`; `HSCode?`: `string` \| `null`; `attributes?`: \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null`; `taxRuleIds?`: `string`[] \| `null`; `isActive`: `boolean`; `displayOrder?`: `number` \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; `variants`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `stockStatus`: [`StockStatus`](../../type-definitions/enumerations/StockStatus.md); `productRevisionId?`: `string` \| `null`; `productId`: `string`; `axisValues`: `Record`\<`string`, `string`\>; `sku?`: `string` \| `null`; `barcode?`: `string` \| `null`; `partNumber?`: `string` \| `null`; `globalTradeItemNumber?`: `string` \| `null`; `price?`: `number` \| `null`; `cost?`: `number` \| `null`; `compareAtPrice?`: `number` \| `null`; `stockQuantity?`: `number` \| `null`; `lowStockThreshold?`: `number` \| `null`; `unitDefinitionId?`: `string` \| `null`; `inventoryUnit?`: \| [`EACH`](../../type-definitions/enumerations/InventoryUnit.md#each) \| [`PACK`](../../type-definitions/enumerations/InventoryUnit.md#pack) \| [`BOX`](../../type-definitions/enumerations/InventoryUnit.md#box) \| [`CASE`](../../type-definitions/enumerations/InventoryUnit.md#case) \| [`DOZEN`](../../type-definitions/enumerations/InventoryUnit.md#dozen) \| [`PAIR`](../../type-definitions/enumerations/InventoryUnit.md#pair) \| [`GRAM`](../../type-definitions/enumerations/InventoryUnit.md#gram) \| [`POUNDS`](../../type-definitions/enumerations/InventoryUnit.md#pounds) \| [`KILOGRAM`](../../type-definitions/enumerations/InventoryUnit.md#kilogram) \| [`MILLILITER`](../../type-definitions/enumerations/InventoryUnit.md#milliliter) \| [`LITER`](../../type-definitions/enumerations/InventoryUnit.md#liter) \| [`METER`](../../type-definitions/enumerations/InventoryUnit.md#meter) \| [`CENTIMETER`](../../type-definitions/enumerations/InventoryUnit.md#centimeter) \| [`ROLL`](../../type-definitions/enumerations/InventoryUnit.md#roll) \| [`SET`](../../type-definitions/enumerations/InventoryUnit.md#set) \| [`OTHER`](../../type-definitions/enumerations/InventoryUnit.md#other) \| `null`; `weight?`: `number` \| `null`; `dimensions?`: \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null`; `imageId?`: `string` \| `null`; `imageIds?`: `string`[] \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalProductId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; `isDefault`: `boolean`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}[]; `priceRange?`: \| \{ `min`: `number`; `max`: `number`; \} \| `null`; `isVariantSelectable`: `boolean`; \}[] | [src/core/business-mgt/product-management/product-display.schema.ts:69](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-display.schema.ts#L69) |
