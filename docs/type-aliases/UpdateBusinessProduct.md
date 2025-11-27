[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateBusinessProduct

# Type Alias: UpdateBusinessProduct

```ts
type UpdateBusinessProduct = {
  version?: number;
  organizationId?: string;
  name?: string;
  description?: string;
  price?: number;
  sku?: string;
  barcode?: string;
  brand?: string;
  trackInventory?: boolean;
  stockQuantity?: number;
  lowStockThreshold?: number;
  weight?: number;
  dimensions?: {
     length: number;
     width: number;
     height: number;
     unit: "cm" | "inches";
  };
  isActive?: boolean;
  displayOrder?: number;
  categoryId?: string;
  category?: string | null;
  id: string;
};
```

Defined in: src/core/business-mgt/product-config.schema.ts:131

Schema for updating an existing business product.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/business-mgt/product-config.schema.ts:53 |
| <a id="name"></a> `name?` | `string` | src/core/business-mgt/product-config.schema.ts:54 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/product-config.schema.ts:55 |
| <a id="price"></a> `price?` | `number` | src/core/business-mgt/product-config.schema.ts:58 |
| <a id="sku"></a> `sku?` | `string` | src/core/business-mgt/product-config.schema.ts:59 |
| <a id="barcode"></a> `barcode?` | `string` | src/core/business-mgt/product-config.schema.ts:60 |
| <a id="brand"></a> `brand?` | `string` | src/core/business-mgt/product-config.schema.ts:63 |
| <a id="trackinventory"></a> `trackInventory?` | `boolean` | src/core/business-mgt/product-config.schema.ts:66 |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | src/core/business-mgt/product-config.schema.ts:67 |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | src/core/business-mgt/product-config.schema.ts:68 |
| <a id="weight"></a> `weight?` | `number` | src/core/business-mgt/product-config.schema.ts:71 |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | src/core/business-mgt/product-config.schema.ts:72 |
| `dimensions.length` | `number` | src/core/business-mgt/product-config.schema.ts:73 |
| `dimensions.width` | `number` | src/core/business-mgt/product-config.schema.ts:74 |
| `dimensions.height` | `number` | src/core/business-mgt/product-config.schema.ts:75 |
| `dimensions.unit` | `"cm"` \| `"inches"` | src/core/business-mgt/product-config.schema.ts:76 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/product-config.schema.ts:80 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/product-config.schema.ts:81 |
| <a id="categoryid"></a> `categoryId?` | `string` | src/core/business-mgt/product-config.schema.ts:113 |
| <a id="category"></a> `category?` | `string` \| `null` | src/core/business-mgt/product-config.schema.ts:114 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/product-config.schema.ts:122 |
