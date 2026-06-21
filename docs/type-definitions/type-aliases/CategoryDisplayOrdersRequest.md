[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [type-definitions](../README.md) / CategoryDisplayOrdersRequest

# Type Alias: CategoryDisplayOrdersRequest

```ts
type CategoryDisplayOrdersRequest = {
  categoryOrders: {
     categoryId: string;
     displayOrder: number;
  }[];
};
```

Defined in: [src/core/type-definitions/display-order.ts:186](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/type-definitions/display-order.ts#L186)

Bulk category display orders request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryorders"></a> `categoryOrders` | \{ `categoryId`: `string`; `displayOrder`: `number`; \}[] | [src/core/type-definitions/display-order.ts:158](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/type-definitions/display-order.ts#L158) |
