[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateProductCategory

# Type Alias: CreateProductCategory

```ts
type CreateProductCategory = {
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

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:456](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L456)

Schema for creating a new product category.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` | - | [src/core/business-mgt/product-management/product-config.schema.ts:175](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L175) |
| <a id="parentid"></a> `parentId?` | `string` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L176) |
| <a id="name"></a> `name` | `string` | - | [src/core/business-mgt/product-management/product-config.schema.ts:177](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L177) |
| <a id="slug"></a> `slug?` | `string` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:178](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L178) |
| <a id="description"></a> `description?` | `string` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L179) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:180](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L180) |
| <a id="iconid"></a> `iconId?` | `string` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:183](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L183) |
| <a id="heroimageid"></a> `heroImageId?` | `string` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:184](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L184) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:187](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L187) |
| <a id="isdefault"></a> `isDefault` | `boolean` | - | [src/core/business-mgt/product-management/product-config.schema.ts:188](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L188) |
| <a id="attributebindings"></a> `attributeBindings?` | \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:191](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L191) |
| <a id="defaultaxisids"></a> `defaultAxisIds?` | `string`[] \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:194](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L194) |
| <a id="defaultchannelids"></a> `defaultChannelIds?` | `string`[] \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:197](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L197) |
| <a id="taxclassid"></a> `taxClassId?` | `string` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:200](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L200) |
| <a id="targetmargin"></a> `targetMargin?` | `number` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:201](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L201) |
| <a id="agerestricted"></a> `ageRestricted?` | `boolean` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:204](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L204) |
| <a id="requireimage"></a> `requireImage?` | `boolean` \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:205](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L205) |
| <a id="locationscope"></a> `locationScope?` | \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null` | - | [src/core/business-mgt/product-management/product-config.schema.ts:208](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L208) |
| <a id="placement"></a> `placement?` | \{ `placementIntent`: \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \}; `anchorItemId?`: `string` \| `null`; `absoluteIndex?`: `number` \| `null`; \} | - | [src/core/business-mgt/product-management/product-config.schema.ts:350](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/product-management/product-config.schema.ts#L350) |
| `placement.placementIntent` | \{ `mode`: \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"`; \} | `DisplayOrderPositionIntentSchema` | [src/core/type-definitions/display-order.ts:104](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L104) |
| `placement.placementIntent.mode` | \| `"BEGINNING"` \| `"END"` \| `"KEEP_CURRENT"` \| `"BEFORE_ITEM"` \| `"AFTER_ITEM"` \| `"ABSOLUTE_INDEX"` | - | [src/core/type-definitions/display-order.ts:24](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L24) |
| `placement.anchorItemId?` | `string` \| `null` | - | [src/core/type-definitions/display-order.ts:105](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L105) |
| `placement.absoluteIndex?` | `number` \| `null` | - | [src/core/type-definitions/display-order.ts:106](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/type-definitions/display-order.ts#L106) |
