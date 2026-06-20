[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.72**](../../README.md)

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

Defined in: [src/core/type-definitions/display-order.ts:186](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L186)

Bulk category display orders request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryorders"></a> `categoryOrders` | \{ `categoryId`: `string`; `displayOrder`: `number`; \}[] | [src/core/type-definitions/display-order.ts:158](https://github.com/wiil-io/core-js/blob/c39005a6978571a1c92c2a387def93d246a76ba3/src/core/type-definitions/display-order.ts#L158) |
