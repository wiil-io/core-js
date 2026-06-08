[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateProductSet

# Type Alias: CreateProductSet

```ts
type CreateProductSet = {
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

Defined in: src/core/business-mgt/product-management/product-set.schema.ts:275

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="productrevisionid"></a> `productRevisionId?` | `string` | src/core/business-mgt/product-management/product-set.schema.ts:172 |
| <a id="code"></a> `code?` | `string` \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:173 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-management/product-set.schema.ts:174 |
| <a id="description"></a> `description?` | `string` \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:175 |
| <a id="channelmappings"></a> `channelMappings?` | \| \{ `channelId`: `string`; `externalProductSetId`: `string`; \}[] \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:176 |
| <a id="targetingmode"></a> `targetingMode` | [`ProductSetTargetingMode`](../enumerations/ProductSetTargetingMode.md) | src/core/business-mgt/product-management/product-set.schema.ts:177 |
| <a id="pricingmode"></a> `pricingMode` | [`ProductSetPricingMode`](../enumerations/ProductSetPricingMode.md) | src/core/business-mgt/product-management/product-set.schema.ts:178 |
| <a id="fixedprice"></a> `fixedPrice?` | `number` \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:179 |
| <a id="items"></a> `items?` | \| \{ `productId`: `string`; `productVariantId?`: `string` \| `null`; `quantity`: `number`; `isRequired`: `boolean`; `displayOrder?`: `number`; \}[] \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:180 |
| <a id="selector"></a> `selector?` | \| \{ `productIdsAny`: `string`[]; `productIdsAll`: `string`[]; `allProducts`: `boolean`; `quantityExact?`: `number`; `quantityMin?`: `number`; `quantityMax?`: `number`; \} \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:181 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/product-management/product-set.schema.ts:182 |
| <a id="imageurl"></a> `imageUrl?` | `string` \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:183 |
| <a id="imageurls"></a> `imageUrls?` | `string`[] \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:184 |
| <a id="displayorder"></a> `displayOrder?` | `number` \| `null` | src/core/business-mgt/product-management/product-set.schema.ts:185 |
