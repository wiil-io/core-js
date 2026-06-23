[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.76**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AttributeDef

# Type Alias: AttributeDef

```ts
type AttributeDef = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  slug: string;
  type: AttributeDefType;
  unit?: string | null;
  enumValues?: string[] | null;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:455](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L455)

Attribute definition schema.
Organization-level attribute definitions for products.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L80) |
| <a id="slug"></a> `slug` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L81) |
| <a id="type"></a> `type` | [`AttributeDefType`](../enumerations/AttributeDefType.md) | [src/core/business-mgt/product-management/product-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L82) |
| <a id="unit"></a> `unit?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L83) |
| <a id="enumvalues"></a> `enumValues?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L84) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/bf48d7864acd8e7b3e7867ae31da63d5dc26ab46/src/core/business-mgt/product-management/product-config.schema.ts#L85) |
