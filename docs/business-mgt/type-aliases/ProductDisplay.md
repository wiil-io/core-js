[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductDisplay

# Type Alias: ProductDisplay

```ts
type ProductDisplay = {
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
  variants: {
     id: string;
     createdAt?: number;
     updatedAt?: number;
     stockStatus: StockStatus;
     productRevisionId?: string;
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
};
```

Defined in: [src/core/business-mgt/product-management/product-display.schema.ts:90](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-display.schema.ts#L90)

Product display schema.
Extends base product with variants array and computed price range.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/base.schema.ts#L10) |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:256](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L256) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalProductId`: `string`; `externalCategoryId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:257](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L257) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:258](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L258) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:259](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L259) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:260](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L260) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:261](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L261) |
| <a id="tags"></a> `tags?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:262](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L262) |
| <a id="price"></a> `price` | `number` | [src/core/business-mgt/product-management/product-config.schema.ts:265](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L265) |
| <a id="cost"></a> `cost?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:266](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L266) |
| <a id="compareatprice"></a> `compareAtPrice?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:267](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L267) |
| <a id="sku"></a> `sku?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:270](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L270) |
| <a id="skupattern"></a> `skuPattern?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:271](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L271) |
| <a id="barcode"></a> `barcode?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:272](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L272) |
| <a id="barcodeformat"></a> `barcodeFormat?` | \| [`UPC_A`](../enumerations/BarcodeFormat.md#upc_a) \| [`UPC_E`](../enumerations/BarcodeFormat.md#upc_e) \| [`EAN_13`](../enumerations/BarcodeFormat.md#ean_13) \| [`EAN_8`](../enumerations/BarcodeFormat.md#ean_8) \| [`CODE_128`](../enumerations/BarcodeFormat.md#code_128) \| [`CODE_39`](../enumerations/BarcodeFormat.md#code_39) \| [`ITF_14`](../enumerations/BarcodeFormat.md#itf_14) \| [`QR`](../enumerations/BarcodeFormat.md#qr) \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:273](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L273) |
| <a id="isalcoholic"></a> `isAlcoholic` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:276](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L276) |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:277](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L277) |
| <a id="category"></a> `category?` | \| \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `productRevisionId?`: `string`; `parentId?`: `string` \| `null`; `name`: `string`; `slug?`: `string` \| `null`; `description?`: `string` \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null`; `iconId?`: `string` \| `null`; `heroImageId?`: `string` \| `null`; `displayOrder?`: `number` \| `null`; `isDefault`: `boolean`; `attributeBindings?`: \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null`; `defaultAxisIds?`: `string`[] \| `null`; `defaultChannelIds?`: `string`[] \| `null`; `taxClassId?`: `string` \| `null`; `targetMargin?`: `number` \| `null`; `ageRestricted?`: `boolean` \| `null`; `requireImage?`: `boolean` \| `null`; `locationScope?`: \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null`; \} \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:278](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L278) |
| <a id="brand"></a> `brand?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:279](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L279) |
| <a id="brandid"></a> `brandId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:280](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L280) |
| <a id="trackinventory"></a> `trackInventory` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:283](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L283) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:284](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L284) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:285](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L285) |
| <a id="stockedat"></a> `stockedAt?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:286](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L286) |
| <a id="reorderpoint"></a> `reorderPoint?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:287](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L287) |
| <a id="leadtime"></a> `leadTime?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:288](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L288) |
| <a id="supplierid"></a> `supplierId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:289](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L289) |
| <a id="weight"></a> `weight?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:292](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L292) |
| <a id="dimensions"></a> `dimensions?` | \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:293](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L293) |
| <a id="shippingclassid"></a> `shippingClassId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:301](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L301) |
| <a id="hscode"></a> `HSCode?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:302](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L302) |
| <a id="attributes"></a> `attributes?` | \| \{ `attributeDefId`: `string`; `value`: `string` \| `number` \| `boolean`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:305](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L305) |
| <a id="taxruleids"></a> `taxRuleIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:308](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L308) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:311](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L311) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:312](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L312) |
| <a id="ordercount"></a> `orderCount?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:315](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L315) |
| <a id="recentordercount"></a> `recentOrderCount?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:316](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L316) |
| <a id="lastorderedat"></a> `lastOrderedAt?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:317](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-config.schema.ts#L317) |
| <a id="variants"></a> `variants` | \{ `id`: `string`; `createdAt?`: `number`; `updatedAt?`: `number`; `stockStatus`: [`StockStatus`](../../type-definitions/enumerations/StockStatus.md); `productRevisionId?`: `string`; `productId`: `string`; `axisValues`: `Record`\<`string`, `string`\>; `sku?`: `string` \| `null`; `barcode?`: `string` \| `null`; `partNumber?`: `string` \| `null`; `globalTradeItemNumber?`: `string` \| `null`; `price?`: `number` \| `null`; `cost?`: `number` \| `null`; `compareAtPrice?`: `number` \| `null`; `stockQuantity?`: `number` \| `null`; `lowStockThreshold?`: `number` \| `null`; `unitDefinitionId?`: `string` \| `null`; `inventoryUnit?`: \| [`EACH`](../../type-definitions/enumerations/InventoryUnit.md#each) \| [`PACK`](../../type-definitions/enumerations/InventoryUnit.md#pack) \| [`BOX`](../../type-definitions/enumerations/InventoryUnit.md#box) \| [`CASE`](../../type-definitions/enumerations/InventoryUnit.md#case) \| [`DOZEN`](../../type-definitions/enumerations/InventoryUnit.md#dozen) \| [`PAIR`](../../type-definitions/enumerations/InventoryUnit.md#pair) \| [`GRAM`](../../type-definitions/enumerations/InventoryUnit.md#gram) \| [`POUNDS`](../../type-definitions/enumerations/InventoryUnit.md#pounds) \| [`KILOGRAM`](../../type-definitions/enumerations/InventoryUnit.md#kilogram) \| [`MILLILITER`](../../type-definitions/enumerations/InventoryUnit.md#milliliter) \| [`LITER`](../../type-definitions/enumerations/InventoryUnit.md#liter) \| [`METER`](../../type-definitions/enumerations/InventoryUnit.md#meter) \| [`CENTIMETER`](../../type-definitions/enumerations/InventoryUnit.md#centimeter) \| [`ROLL`](../../type-definitions/enumerations/InventoryUnit.md#roll) \| [`SET`](../../type-definitions/enumerations/InventoryUnit.md#set) \| [`OTHER`](../../type-definitions/enumerations/InventoryUnit.md#other) \| `null`; `weight?`: `number` \| `null`; `dimensions?`: \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null`; `imageId?`: `string` \| `null`; `imageIds?`: `string`[] \| `null`; `channelMappings?`: \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalProductId?`: `string` \| `null`; \}[] \| `null`; `isActive`: `boolean`; `isDefault`: `boolean`; `orderCount?`: `number` \| `null`; `recentOrderCount?`: `number` \| `null`; `lastOrderedAt?`: `number` \| `null`; \}[] | [src/core/business-mgt/product-management/product-display.schema.ts:46](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-display.schema.ts#L46) |
| <a id="pricerange"></a> `priceRange?` | \| \{ `min`: `number`; `max`: `number`; \} \| `null` | [src/core/business-mgt/product-management/product-display.schema.ts:47](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-display.schema.ts#L47) |
| <a id="isvariantselectable"></a> `isVariantSelectable` | `boolean` | [src/core/business-mgt/product-management/product-display.schema.ts:51](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-display.schema.ts#L51) |
