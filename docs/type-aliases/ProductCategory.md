[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ProductCategory

# Type Alias: ProductCategory

```ts
type ProductCategory = {
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
```

Defined in: src/core/business-mgt/product-config.schema.ts:126

Product category schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/product-config.schema.ts:21 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/product-config.schema.ts:22 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-config.schema.ts:23 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/product-config.schema.ts:24 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/product-config.schema.ts:25 |
| <a id="isdefault"></a> `isDefault` | `boolean` | src/core/business-mgt/product-config.schema.ts:26 |
