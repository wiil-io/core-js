[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.57**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductSetDisplay

# Type Alias: ProductSetDisplay

```ts
type ProductSetDisplay = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  productRevisionId?: string;
  code?: string | null;
  name: string;
  description?: string | null;
  channelMappings?:   | {
     channelId: string;
     externalProductSetId: string;
   }[]
     | null;
  targetingMode: ProductSetTargetingMode;
  pricingMode: ProductSetPricingMode;
  fixedPrice?: number | null;
  selector?:   | {
     productIdsAny: string[];
     productIdsAll: string[];
     allProducts: boolean;
     quantityExact?: number;
     quantityMin?: number;
     quantityMax?: number;
   }
     | null;
  isActive: boolean;
  imageUrl?: string | null;
  imageUrls?: string[] | null;
  displayOrder?: number | null;
  items?:   | {
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
              channelId: ...;
              externalCategoryId: ...;
            }[]
              | null;
           iconId?: string | null;
           heroImageId?: string | null;
           displayOrder?: number | null;
           isDefault: boolean;
           attributeBindings?:   | {
              attributeDefId: ...;
              required: ...;
              displayOrder: ...;
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
   }[]
     | null;
  resolvedPrice?: number | null;
};
```

Defined in: [src/core/business-mgt/product-management/product-set.schema.ts:309](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L309)

Product set display schema.
Extended set schema with resolved items and computed pricing for UI rendering.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/base.schema.ts#L10) |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` | [src/core/business-mgt/product-management/product-set.schema.ts:172](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L172) |
| <a id="code"></a> `code?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:173](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L173) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-set.schema.ts:174](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L174) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:175](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L175) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalProductSetId`: `string`; \}[] \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:176](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L176) |
| <a id="targetingmode"></a> `targetingMode` | [`ProductSetTargetingMode`](../enumerations/ProductSetTargetingMode.md) | [src/core/business-mgt/product-management/product-set.schema.ts:177](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L177) |
| <a id="pricingmode"></a> `pricingMode` | [`ProductSetPricingMode`](../enumerations/ProductSetPricingMode.md) | [src/core/business-mgt/product-management/product-set.schema.ts:178](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L178) |
| <a id="fixedprice"></a> `fixedPrice?` | `number` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:179](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L179) |
| <a id="selector"></a> `selector?` | \| \{ `productIdsAny`: `string`[]; `productIdsAll`: `string`[]; `allProducts`: `boolean`; `quantityExact?`: `number`; `quantityMin?`: `number`; `quantityMax?`: `number`; \} \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:181](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L181) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-set.schema.ts:182](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L182) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:183](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L183) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:184](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L184) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:185](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L185) |
| <a id="items"></a> `items?` | \| \{ `productId`: `string`; `productVariantId?`: `string` \| `null`; `quantity`: `number`; `isRequired`: `boolean`; `displayOrder?`: `number`; `product?`: \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `channelMappings?`: \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null`; `name`: `string`; `description?`: `string` \| `null`; `imageUrl?`: `string` \| `null`; `imageUrls?`: `string`[] \| `null`; `tags?`: `string`[] \| `null`; `price`: `number`; `cost?`: `number` \| `null`; `compareAtPrice?`: `number` \| `null`; `sku?`: `string` \| `null`; `skuPattern?`: `string` \| `null`; `barcode?`: `string` \| `null`; `barcodeFormat?`: \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null`; `isAlcoholic`: `boolean` \| `null`; `categoryId`: `string`; `category?`: \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: ...; `externalCategoryId`: ...; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: ...; `required`: ...; `displayOrder`: ...; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null`; `brand?`: `string` \| `null`; `brandId?`: `string` \| `null`; `trackInventory`: `boolean`; `stockQuantity?`: `number` \| `null`; `lowStockThreshold?`: `number` \| `null`; `stockedAt?`: `number` \| `null`; `reorderPoint?`: `number` \| `null`; `leadTime?`: `number` \| `null`; `supplierId?`: `string` \| `null`; `weight?`: `number` \| `null`; `dimensions?`: \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null`; `shippingClassId?`: `string` \| `null`; `HSCode?`: `string` \| `null`; `attributes?`: \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null`; `taxRuleIds?`: `string`[] \| `null`; `isActive`: `boolean`; `displayOrder?`: `number` \| `null`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}; \}[] \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:304](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L304) |
| <a id="resolvedprice"></a> `resolvedPrice?` | `number` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:305](https://github.com/wiil-io/core-js/blob/43da06db5074f70ed30c699cea7fe6848eefa005/src/core/business-mgt/product-management/product-set.schema.ts#L305) |
