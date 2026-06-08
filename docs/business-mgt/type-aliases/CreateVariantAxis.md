[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/product-management/product-variant-axis.schema.ts:110

Schema for creating a new variant axis.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | src/core/business-mgt/product-management/product-variant-axis.schema.ts:53 |
| <a id="type"></a> `type` | [`VariantAxisType`](../../type-definitions/enumerations/VariantAxisType.md) | src/core/business-mgt/product-management/product-variant-axis.schema.ts:54 |
| <a id="values"></a> `values` | \{ `id`: `string`; `label`: `string`; `swatchColor?`: `string` \| `null`; `imageId?`: `string` \| `null`; `numericValue?`: `number` \| `null`; `sortOrder`: `number`; \}[] | src/core/business-mgt/product-management/product-variant-axis.schema.ts:55 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/product-management/product-variant-axis.schema.ts:56 |
