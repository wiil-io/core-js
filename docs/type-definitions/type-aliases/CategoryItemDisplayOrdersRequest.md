[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / CategoryItemDisplayOrdersRequest

# Type Alias: CategoryItemDisplayOrdersRequest

```ts
type CategoryItemDisplayOrdersRequest = {
  categoryId: string;
  itemOrders: {
     itemId: string;
     displayOrder: number;
  }[];
};
```

Defined in: [src/core/type-definitions/display-order.ts:188](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/type-definitions/display-order.ts#L188)

Bulk category item display orders request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryid"></a> `categoryId` | `string` | [src/core/type-definitions/display-order.ts:173](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/type-definitions/display-order.ts#L173) |
| <a id="itemorders"></a> `itemOrders` | \{ `itemId`: `string`; `displayOrder`: `number`; \}[] | [src/core/type-definitions/display-order.ts:174](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/type-definitions/display-order.ts#L174) |
