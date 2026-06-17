[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / VariantAxisValue

# Type Alias: VariantAxisValue

```ts
type VariantAxisValue = {
  id: string;
  label: string;
  swatchColor?: string | null;
  imageId?: string | null;
  numericValue?: number | null;
  sortOrder: number;
};
```

Defined in: [src/core/business-mgt/product-management/product-variant-axis.schema.ts:108](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L108)

Variant axis value schema.
Represents a single selectable value within a variant axis.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:30](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L30) |
| <a id="label"></a> `label` | `string` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:31](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L31) |
| <a id="swatchcolor"></a> `swatchColor?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:32](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L32) |
| <a id="imageid"></a> `imageId?` | `string` \| `null` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:33](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L33) |
| <a id="numericvalue"></a> `numericValue?` | `number` \| `null` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:34](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L34) |
| <a id="sortorder"></a> `sortOrder` | `number` | [src/core/business-mgt/product-management/product-variant-axis.schema.ts:35](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/product-management/product-variant-axis.schema.ts#L35) |
