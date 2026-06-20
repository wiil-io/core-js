[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.70**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductCategory

# Type Alias: ProductCategory

```ts
type ProductCategory = {
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
```

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:462](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L462)

Product category schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/base.schema.ts#L10) |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:176](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L176) |
| <a id="parentid"></a> `parentId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:177](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L177) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:178](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L178) |
| <a id="slug"></a> `slug?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:179](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L179) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:180](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L180) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalCategoryId`: `string`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:181](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L181) |
| <a id="iconid"></a> `iconId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:184](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L184) |
| <a id="heroimageid"></a> `heroImageId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:185](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L185) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:188](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L188) |
| <a id="isdefault"></a> `isDefault` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:189](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L189) |
| <a id="attributebindings"></a> `attributeBindings?` | \| \{ `attributeDefId`: `string`; `required`: `boolean`; `displayOrder`: `number`; \}[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:192](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L192) |
| <a id="defaultaxisids"></a> `defaultAxisIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:195](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L195) |
| <a id="defaultchannelids"></a> `defaultChannelIds?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:198](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L198) |
| <a id="taxclassid"></a> `taxClassId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:201](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L201) |
| <a id="targetmargin"></a> `targetMargin?` | `number` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:202](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L202) |
| <a id="agerestricted"></a> `ageRestricted?` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:205](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L205) |
| <a id="requireimage"></a> `requireImage?` | `boolean` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:206](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L206) |
| <a id="locationscope"></a> `locationScope?` | \| [`INHERITED`](../enumerations/CategoryLocationScope.md#inherited) \| [`LOCAL`](../enumerations/CategoryLocationScope.md#local) \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:209](https://github.com/wiil-io/core-js/blob/93399ddfe88b7931620744392516237a259c457f/src/core/business-mgt/product-management/product-config.schema.ts#L209) |
