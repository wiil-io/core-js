[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

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

Defined in: [src/core/type-definitions/display-order.ts:186](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/type-definitions/display-order.ts#L186)

Bulk category display orders request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryorders"></a> `categoryOrders` | \{ `categoryId`: `string`; `displayOrder`: `number`; \}[] | [src/core/type-definitions/display-order.ts:158](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/type-definitions/display-order.ts#L158) |
