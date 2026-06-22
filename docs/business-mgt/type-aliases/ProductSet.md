[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ProductSet

# Type Alias: ProductSet

```ts
type ProductSet = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  productRevisionId?: string | null;
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
  items?:   | {
     productId: string;
     productVariantId?: string | null;
     quantity: number;
     isRequired: boolean;
     displayOrder?: number;
   }[]
     | null;
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
};
```

Defined in: [src/core/business-mgt/product-management/product-set.schema.ts:274](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L274)

Product set schema.
Represents a bundle or set of products with configurable pricing and targeting.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/base.schema.ts#L10) |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:172](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L172) |
| <a id="code"></a> `code?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:173](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L173) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-set.schema.ts:174](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L174) |
| <a id="description"></a> `description?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:175](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L175) |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalProductSetId`: `string`; \}[] \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:176](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L176) |
| <a id="targetingmode"></a> `targetingMode` | [`ProductSetTargetingMode`](../enumerations/ProductSetTargetingMode.md) | [src/core/business-mgt/product-management/product-set.schema.ts:177](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L177) |
| <a id="pricingmode"></a> `pricingMode` | [`ProductSetPricingMode`](../enumerations/ProductSetPricingMode.md) | [src/core/business-mgt/product-management/product-set.schema.ts:178](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L178) |
| <a id="fixedprice"></a> `fixedPrice?` | `number` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:179](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L179) |
| <a id="items"></a> `items?` | \| \{ `productId`: `string`; `productVariantId?`: `string` \| `null`; `quantity`: `number`; `isRequired`: `boolean`; `displayOrder?`: `number`; \}[] \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:180](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L180) |
| <a id="selector"></a> `selector?` | \| \{ `productIdsAny`: `string`[]; `productIdsAll`: `string`[]; `allProducts`: `boolean`; `quantityExact?`: `number`; `quantityMin?`: `number`; `quantityMax?`: `number`; \} \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:181](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L181) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-set.schema.ts:182](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L182) |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:183](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L183) |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:184](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L184) |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | [src/core/business-mgt/product-management/product-set.schema.ts:185](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/product-management/product-set.schema.ts#L185) |
