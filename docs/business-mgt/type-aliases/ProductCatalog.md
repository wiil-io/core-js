[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.57**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductCatalog

# Type Alias: ProductCatalog

```ts
type ProductCatalog = {
  productCategory: {
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
  };
  items: {
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
  }[];
};
```

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:461](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L461)

Product catalog schema.
Represents a category with its list of products.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productcategory"></a> `productCategory` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} | [src/core/business-mgt/product-management/product-config.schema.ts:400](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L400) |
| `productCategory.id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/base.schema.ts#L8) |
| `productCategory.createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/base.schema.ts#L9) |
| `productCategory.updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/base.schema.ts#L10) |
| `productCategory.productRevisionId?` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:175](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L175) |
| `productCategory.parentId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L176) |
| `productCategory.name` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:177](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L177) |
| `productCategory.slug?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:178](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L178) |
| `productCategory.description?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L179) |
| `productCategory.channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:180](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L180) |
| `productCategory.iconId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:183](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L183) |
| `productCategory.heroImageId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:184](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L184) |
| `productCategory.displayOrder?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:187](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L187) |
| `productCategory.isDefault` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:188](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L188) |
| `productCategory.attributeBindings?` | \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:191](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L191) |
| `productCategory.defaultAxisIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:194](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L194) |
| `productCategory.defaultChannelIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L197) |
| `productCategory.taxClassId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:200](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L200) |
| `productCategory.targetMargin?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:201](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L201) |
| `productCategory.ageRestricted?` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:204](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L204) |
| `productCategory.requireImage?` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:205](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L205) |
| `productCategory.locationScope?` | \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:208](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L208) |
| <a id="items"></a> `items` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `channelMappings?`: \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `name`: `string`; `description?`: `string` \| `null`; `imageUrl?`: `string` \| `null`; `imageUrls?`: `string`[] \| `null`; `tags?`: `string`[] \| `null`; `price`: `number`; `cost?`: `number` \| `null`; `compareAtPrice?`: `number` \| `null`; `sku?`: `string` \| `null`; `skuPattern?`: `string` \| `null`; `barcode?`: `string` \| `null`; `barcodeFormat?`: \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null`; `isAlcoholic`: `boolean` \| `null`; `categoryId`: `string`; `category?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null`; `brand?`: `string` \| `null`; `brandId?`: `string` \| `null`; `trackInventory`: `boolean`; `stockQuantity?`: `number` \| `null`; `lowStockThreshold?`: `number` \| `null`; `stockedAt?`: `number` \| `null`; `reorderPoint?`: `number` \| `null`; `leadTime?`: `number` \| `null`; `supplierId?`: `string` \| `null`; `weight?`: `number` \| `null`; `dimensions?`: \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null`; `shippingClassId?`: `string` \| `null`; `HSCode?`: `string` \| `null`; `attributes?`: \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null`; `taxRuleIds?`: `string`[] \| `null`; `isActive`: `boolean`; `displayOrder?`: `number` \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}[] | [src/core/business-mgt/product-management/product-config.schema.ts:401](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-config.schema.ts#L401) |
