[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / CreateProductCategory

# Type Alias: CreateProductCategory

```ts
type CreateProductCategory = {
  version?: number;
  organizationId: string;
  name: string;
  description?: string;
  displayOrder?: number;
  isDefault: boolean;
};
```

Defined in: src/core/business-mgt/product-config.schema.ts:127

Schema for creating a new product category.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/product-config.schema.ts:22 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-config.schema.ts:23 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/product-config.schema.ts:24 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/product-config.schema.ts:25 |
| <a id="isdefault"></a> `isDefault` | `boolean` | src/core/business-mgt/product-config.schema.ts:26 |
