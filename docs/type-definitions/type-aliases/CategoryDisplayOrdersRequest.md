[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.66**](../../README.md)

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

Defined in: [src/core/type-definitions/display-order.ts:186](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/type-definitions/display-order.ts#L186)

Bulk category display orders request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="categoryorders"></a> `categoryOrders` | \{ `categoryId`: `string`; `displayOrder`: `number`; \}[] | [src/core/type-definitions/display-order.ts:158](https://github.com/wiil-io/core-js/blob/da0521af0ba472bed968d16f0f4057b01dc35515/src/core/type-definitions/display-order.ts#L158) |
