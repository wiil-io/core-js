[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / BusinessProduct

# Type Alias: BusinessProduct

```ts
type BusinessProduct = {
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  id: string;
  organizationId: string;
  name: string;
  description?: string;
  price: number;
  sku?: string;
  barcode?: string;
  categoryId: string;
  category?: {
     createdAt?: number;
     updatedAt?: number;
     version?: number;
     id: string;
     organizationId: string;
     name: string;
     description?: string;
     displayOrder?: number;
     isDefault: boolean;
  };
  brand?: string;
  trackInventory: boolean;
  stockQuantity?: number;
  lowStockThreshold?: number;
  weight?: number;
  dimensions?: {
     length: number;
     width: number;
     height: number;
     unit: "cm" | "inches";
  };
  isActive: boolean;
  displayOrder?: number;
};
```

Defined in: src/core/business-mgt/product-config.schema.ts:129

Business product schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/product-config.schema.ts:52 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/product-config.schema.ts:53 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-config.schema.ts:54 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/product-config.schema.ts:55 |
| <a id="price"></a> `price` | `number` | src/core/business-mgt/product-config.schema.ts:58 |
| <a id="sku"></a> `sku?` | `string` | src/core/business-mgt/product-config.schema.ts:59 |
| <a id="barcode"></a> `barcode?` | `string` | src/core/business-mgt/product-config.schema.ts:60 |
| <a id="categoryid"></a> `categoryId` | `string` | src/core/business-mgt/product-config.schema.ts:61 |
| <a id="category"></a> `category?` | \{ `createdAt?`: `number`; `updatedAt?`: `number`; `version?`: `number`; `id`: `string`; `organizationId`: `string`; `name`: `string`; `description?`: `string`; `displayOrder?`: `number`; `isDefault`: `boolean`; \} | src/core/business-mgt/product-config.schema.ts:62 |
| `category.createdAt?` | `number` | src/core/base.schema.ts:9 |
| `category.updatedAt?` | `number` | src/core/base.schema.ts:10 |
| `category.version?` | `number` | src/core/base.schema.ts:11 |
| `category.id` | `string` | src/core/business-mgt/product-config.schema.ts:21 |
| `category.organizationId` | `string` | src/core/business-mgt/product-config.schema.ts:22 |
| `category.name` | `string` | src/core/business-mgt/product-config.schema.ts:23 |
| `category.description?` | `string` | src/core/business-mgt/product-config.schema.ts:24 |
| `category.displayOrder?` | `number` | src/core/business-mgt/product-config.schema.ts:25 |
| `category.isDefault` | `boolean` | src/core/business-mgt/product-config.schema.ts:26 |
| <a id="brand"></a> `brand?` | `string` | src/core/business-mgt/product-config.schema.ts:63 |
| <a id="trackinventory"></a> `trackInventory` | `boolean` | src/core/business-mgt/product-config.schema.ts:66 |
| <a id="stockquantity"></a> `stockQuantity?` | `number` | src/core/business-mgt/product-config.schema.ts:67 |
| <a id="lowstockthreshold"></a> `lowStockThreshold?` | `number` | src/core/business-mgt/product-config.schema.ts:68 |
| <a id="weight"></a> `weight?` | `number` | src/core/business-mgt/product-config.schema.ts:71 |
| <a id="dimensions"></a> `dimensions?` | \{ `length`: `number`; `width`: `number`; `height`: `number`; `unit`: `"cm"` \| `"inches"`; \} | src/core/business-mgt/product-config.schema.ts:72 |
| `dimensions.length` | `number` | src/core/business-mgt/product-config.schema.ts:73 |
| `dimensions.width` | `number` | src/core/business-mgt/product-config.schema.ts:74 |
| `dimensions.height` | `number` | src/core/business-mgt/product-config.schema.ts:75 |
| `dimensions.unit` | `"cm"` \| `"inches"` | src/core/business-mgt/product-config.schema.ts:76 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/product-config.schema.ts:80 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/product-config.schema.ts:81 |
