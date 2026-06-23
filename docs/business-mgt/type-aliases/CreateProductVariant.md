[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateProductVariant

# Type Alias: CreateProductVariant

```ts
type CreateProductVariant = {
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
};
```

Defined in: [src/core/business-mgt/product-management/product-variant.schema.ts:147](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L147)

Schema for creating a new product variant.
Omits auto-generated fields and analytics (view model only).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:70](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L70) |
| <a id="productid"></a> `productId` | `string` | [src/core/business-mgt/product-management/product-variant.schema.ts:71](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L71) |
| <a id="axisvalues"></a> `axisValues` | `Record`\<`string`, `string`\> | [src/core/business-mgt/product-management/product-variant.schema.ts:74](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L74) |
| <a id="sku"></a> `sku?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:77](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L77) |
| <a id="barcode"></a> `barcode?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:78](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L78) |
| <a id="partnumber"></a> `partNumber?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:79](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L79) |
| <a id="globaltradeitemnumber"></a> `globalTradeItemNumber?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:80](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L80) |
| <a id="price"></a> `price?` | `number` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:81](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L81) |
| <a id="cost"></a> `cost?` | `number` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:82](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L82) |
| <a id="compareatprice"></a> `compareAtPrice?` | `number` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:83](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L83) |
| <a id="stockquantity"></a> `stockQuantity?` | `number` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:86](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L86) |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:87](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L87) |
| <a id="unitdefinitionid"></a> `unitDefinitionId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:88](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L88) |
| <a id="inventoryunit"></a> `inventoryUnit?` | \| [`EACH`](../../type-definitions/enumerations/InventoryUnit.md#each) \| [`PACK`](../../type-definitions/enumerations/InventoryUnit.md#pack) \| [`BOX`](../../type-definitions/enumerations/InventoryUnit.md#box) \| [`CASE`](../../type-definitions/enumerations/InventoryUnit.md#case) \| [`DOZEN`](../../type-definitions/enumerations/InventoryUnit.md#dozen) \| [`PAIR`](../../type-definitions/enumerations/InventoryUnit.md#pair) \| [`GRAM`](../../type-definitions/enumerations/InventoryUnit.md#gram) \| [`POUNDS`](../../type-definitions/enumerations/InventoryUnit.md#pounds) \| [`KILOGRAM`](../../type-definitions/enumerations/InventoryUnit.md#kilogram) \| [`MILLILITER`](../../type-definitions/enumerations/InventoryUnit.md#milliliter) \| [`LITER`](../../type-definitions/enumerations/InventoryUnit.md#liter) \| [`METER`](../../type-definitions/enumerations/InventoryUnit.md#meter) \| [`CENTIMETER`](../../type-definitions/enumerations/InventoryUnit.md#centimeter) \| [`ROLL`](../../type-definitions/enumerations/InventoryUnit.md#roll) \| [`SET`](../../type-definitions/enumerations/InventoryUnit.md#set) \| [`OTHER`](../../type-definitions/enumerations/InventoryUnit.md#other) \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:89](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L89) |
| <a id="weight"></a> `weight?` | `number` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:92](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L92) |
| <a id="dimensions"></a> `dimensions?` | \| \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:93](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L93) |
| <a id="imageid"></a> `imageId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:101](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L101) |
| <a id="imageids"></a> `imageIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:102](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L102) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalVariantId`: `string`; `externalProductId?`: `string` \| `null`; \}[] \| `null` | [src/core/business-mgt/product-management/product-variant.schema.ts:103](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L103) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-variant.schema.ts:106](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L106) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/product-management/product-variant.schema.ts:107](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-variant.schema.ts#L107) |
