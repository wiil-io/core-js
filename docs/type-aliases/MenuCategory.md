[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / MenuCategory

# Type Alias: MenuCategory

```ts
type MenuCategory = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
  name: string;
  description?: string;
  displayOrder?: number;
  isDefault: boolean;
};
```

Defined in: src/core/business-mgt/menu-config.schema.ts:105

Type definition for menu category.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/menu-config.schema.ts:11 |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/menu-config.schema.ts:12 |
| <a id="description"></a> `description?` | `string` | src/core/business-mgt/menu-config.schema.ts:13 |
| <a id="displayorder"></a> `displayOrder?` | `number` | src/core/business-mgt/menu-config.schema.ts:14 |
| <a id="isdefault"></a> `isDefault` | `boolean` | src/core/business-mgt/menu-config.schema.ts:15 |
