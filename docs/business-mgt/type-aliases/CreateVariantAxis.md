[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateVariantAxis

# Type Alias: CreateVariantAxis

```ts
type CreateVariantAxis = {
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

Defined in: [src/core/business-mgt/product-management/product-variant-axis.schema.ts:110](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L110)

Schema for creating a new variant axis.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:53](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L53) |
| <a id="type"></a> `type` | [`VariantAxisType`](../../type-definitions/enumerations/VariantAxisType.md) | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:54](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L54) |
| <a id="values"></a> `values` | \{ `id`: `string`; `label`: `string`; `swatchColor?`: `string` \| `null`; `imageId?`: `string` \| `null`; `numericValue?`: `number` \| `null`; `sortOrder`: `number`; \}[] | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:55](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L55) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:56](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L56) |
