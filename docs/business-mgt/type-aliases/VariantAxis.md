[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / VariantAxis

# Type Alias: VariantAxis

```ts
type VariantAxis = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  type: VariantAxisType;
  values: {
     id: string;
     label: string;
     swatchColor?: string | null;
     imageId?: string | null;
     numericValue?: number | null;
     sortOrder: number;
  }[];
  isActive: boolean;
};
```

Defined in: src/core/business-mgt/product-management/product-variant-axis.schema.ts:109

Variant axis schema.
Defines a dimension along which products can vary (e.g., Size, Color, Material).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-management/product-variant-axis.schema.ts:53 |
| <a id="type"></a> `type` | [`VariantAxisType`](../../type-definitions/enumerations/VariantAxisType.md) | src/core/business-mgt/product-management/product-variant-axis.schema.ts:54 |
| <a id="values"></a> `values` | \{ `id`: `string`; `label`: `string`; `swatchColor?`: `string` \| `null`; `imageId?`: `string` \| `null`; `numericValue?`: `number` \| `null`; `sortOrder`: `number`; \}[] | src/core/business-mgt/product-management/product-variant-axis.schema.ts:55 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/product-management/product-variant-axis.schema.ts:56 |
