[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateVariantAxis

# Type Alias: UpdateVariantAxis

```ts
type UpdateVariantAxis = {
  name?: string;
  type?:   | SWATCH
     | TEXT
     | IMAGE
     | NUMERIC;
  values?: {
     id: string;
     label: string;
     swatchColor?: string | null;
     imageId?: string | null;
     numericValue?: number | null;
     sortOrder: number;
  }[];
  isActive?: boolean;
  id: string;
};
```

Defined in: [src/core/business-mgt/product-management/product-variant-axis.schema.ts:111](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L111)

Schema for updating an existing variant axis.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:53](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L53) |
| <a id="type"></a> `type?` | \| [`SWATCH`](../../type-definitions/enumerations/VariantAxisType.md#swatch) \| [`TEXT`](../../type-definitions/enumerations/VariantAxisType.md#text) \| [`IMAGE`](../../type-definitions/enumerations/VariantAxisType.md#image) \| [`NUMERIC`](../../type-definitions/enumerations/VariantAxisType.md#numeric) | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:54](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L54) |
| <a id="values"></a> `values?` | \{ `id`: `string`; `label`: `string`; `swatchColor?`: `string` \| `null`; `imageId?`: `string` \| `null`; `numericValue?`: `number` \| `null`; `sortOrder`: `number`; \}[] | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:55](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L55) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:56](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L56) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:78](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L78) |
