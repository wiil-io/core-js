[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateAttributeDef

# Type Alias: CreateAttributeDef

```ts
type CreateAttributeDef = {
  name: string;
  slug: string;
  type: AttributeDefType;
  unit?: string | null;
  enumValues?: string[] | null;
  isActive: boolean;
};
```

Defined in: src/core/business-mgt/product-management/product-config.schema.ts:449

Schema for creating a new attribute definition.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:79 |
| <a id="slug"></a> `slug` | `string` | src/core/business-mgt/product-management/product-config.schema.ts:80 |
| <a id="type"></a> `type` | [`AttributeDefType`](../enumerations/AttributeDefType.md) | src/core/business-mgt/product-management/product-config.schema.ts:81 |
| <a id="unit"></a> `unit?` | `string` \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:82 |
| <a id="enumvalues"></a> `enumValues?` | `string`[] \| `null` | src/core/business-mgt/product-management/product-config.schema.ts:83 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/product-management/product-config.schema.ts:84 |
