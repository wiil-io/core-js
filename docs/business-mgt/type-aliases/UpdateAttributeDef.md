[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateAttributeDef

# Type Alias: UpdateAttributeDef

```ts
type UpdateAttributeDef = {
  name?: string;
  slug?: string;
  type?:   | STRING
     | NUMBER
     | BOOLEAN
     | ENUM
     | DATE
     | URL;
  unit?: string | null;
  enumValues?: string[] | null;
  isActive?: boolean;
  id: string;
};
```

Defined in: src/core/business-mgt/product-management/product-config.schema.ts:450

Schema for updating an existing attribute definition.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:79 |
| <a id="slug"></a> `slug?` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:80 |
| <a id="type"></a> `type?` | \| [`STRING`](../enumerations/AttributeDefType.md#string) \| [`NUMBER`](../enumerations/AttributeDefType.md#number) \| [`BOOLEAN`](../enumerations/AttributeDefType.md#boolean) \| [`ENUM`](../enumerations/AttributeDefType.md#enum) \| [`DATE`](../enumerations/AttributeDefType.md#date) \| [`URL`](../enumerations/AttributeDefType.md#url) | src/core/business-mgt/product-management/product-config.schema.ts:81 |
| <a id="unit"></a> `unit?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:82 |
| <a id="enumvalues"></a> `enumValues?` | `string`[] \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:83 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/product-management/product-config.schema.ts:84 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:338 |
