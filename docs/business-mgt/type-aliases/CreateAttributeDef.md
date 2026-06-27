[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

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

Defined in: [src/core/business-mgt/product-management/product-config.schema.ts:456](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/product-management/product-config.schema.ts#L456)

Schema for creating a new attribute definition.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:80](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/product-management/product-config.schema.ts#L80) |
| <a id="slug"></a> `slug` | `string` | [src/core/business-mgt/product-management/product-config.schema.ts:81](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/product-management/product-config.schema.ts#L81) |
| <a id="type"></a> `type` | [`AttributeDefType`](../enumerations/AttributeDefType.md) | [src/core/business-mgt/product-management/product-config.schema.ts:82](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/product-management/product-config.schema.ts#L82) |
| <a id="unit"></a> `unit?` | `string` \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:83](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/product-management/product-config.schema.ts#L83) |
| <a id="enumvalues"></a> `enumValues?` | `string`[] \| `null` | [src/core/business-mgt/product-management/product-config.schema.ts:84](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/product-management/product-config.schema.ts#L84) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-config.schema.ts:85](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/product-management/product-config.schema.ts#L85) |
