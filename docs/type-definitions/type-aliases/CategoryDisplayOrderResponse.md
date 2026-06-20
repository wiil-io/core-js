[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / CategoryDisplayOrderResponse

# Type Alias: CategoryDisplayOrderResponse

```ts
type CategoryDisplayOrderResponse = {
  categoryId: string;
  targetParentCategoryId: string | null;
  resolvedDisplayOrder: number;
  resolvedPosition?: number;
  categoryVersion: number;
  reindexed: boolean;
};
```

Defined in: [src/core/type-definitions/display-order.ts:184](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L184)

Category display order response schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/type-definitions/display-order.ts:138](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L138) |
| <a id="targetparentcategoryid"></a> `targetParentCategoryId` | `string` \| `null` | [src/core/type-definitions/display-order.ts:139](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L139) |
| <a id="resolveddisplayorder"></a> `resolvedDisplayOrder` | `number` | [src/core/type-definitions/display-order.ts:140](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L140) |
| <a id="resolvedposition"></a> `resolvedPosition?` | `number` | [src/core/type-definitions/display-order.ts:141](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L141) |
| <a id="categoryversion"></a> `categoryVersion` | `number` | [src/core/type-definitions/display-order.ts:142](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L142) |
| <a id="reindexed"></a> `reindexed` | `boolean` | [src/core/type-definitions/display-order.ts:143](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L143) |
