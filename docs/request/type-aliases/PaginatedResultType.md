[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / PaginatedResultType

# Type Alias: PaginatedResultType\<T\>

```ts
type PaginatedResultType<T> = {
  data: T[];
  meta: PaginationMetaType;
};
```

Defined in: [src/request/models/paginated-result.schema.ts:111](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L111)

Helper type for creating typed paginated results.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `T`[] | [src/request/models/paginated-result.schema.ts:112](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L112) |
| <a id="meta"></a> `meta` | [`PaginationMetaType`](PaginationMetaType.md) | [src/request/models/paginated-result.schema.ts:113](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L113) |
