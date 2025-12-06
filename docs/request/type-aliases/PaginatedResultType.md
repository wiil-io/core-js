[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.30**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / PaginatedResultType

# Type Alias: PaginatedResultType\<T\>

```ts
type PaginatedResultType<T> = {
  data: T[];
  meta: PaginationMetaType;
};
```

Defined in: [src/request/models/paginated-result.schema.ts:109](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/request/models/paginated-result.schema.ts#L109)

Helper type for creating typed paginated results.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `T`[] | [src/request/models/paginated-result.schema.ts:110](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/request/models/paginated-result.schema.ts#L110) |
| <a id="meta"></a> `meta` | [`PaginationMetaType`](PaginationMetaType.md) | [src/request/models/paginated-result.schema.ts:111](https://github.com/wiil-io/core-js/blob/580be9840674fc43db47bcb0d7cde0e3f86e4124/src/request/models/paginated-result.schema.ts#L111) |
