[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / VariantAxisDisplay

# Type Alias: VariantAxisDisplay

```ts
type VariantAxisDisplay = {
  id: string;
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
  displayOrder: number;
};
```

Defined in: [src/core/business-mgt/product-management/product-variant-axis.schema.ts:112](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L112)

Variant axis display schema.
Optimized schema for UI rendering with display order.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:97](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L97) |
| <a id="name"></a> `name` | `string` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:98](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L98) |
| <a id="type"></a> `type` | [`VariantAxisType`](../../type-definitions/enumerations/VariantAxisType.md) | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:99](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L99) |
| <a id="values"></a> `values` | \{ `id`: `string`; `label`: `string`; `swatchColor?`: `string` \| `null`; `imageId?`: `string` \| `null`; `numericValue?`: `number` \| `null`; `sortOrder`: `number`; \}[] | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:100](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L100) |
| <a id="displayorder"></a> `displayOrder` | `number` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:101](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L101) |
