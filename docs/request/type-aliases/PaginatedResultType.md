[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.14**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / PaginatedResultType

# Type Alias: PaginatedResultType\<T\>

```ts
type PaginatedResultType<T> = {
  data: T[];
  meta: PaginationMetaType;
};
```

Defined in: [src/request/models/paginated-result.schema.ts:109](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/request/models/paginated-result.schema.ts#L109)

Helper type for creating typed paginated results.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `T`[] | [src/request/models/paginated-result.schema.ts:110](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/request/models/paginated-result.schema.ts#L110) |
| <a id="meta"></a> `meta` | [`PaginationMetaType`](PaginationMetaType.md) | [src/request/models/paginated-result.schema.ts:111](https://github.com/wiil-io/core-js/blob/f177b99b436693eb1b93c7f52a2ee6c41007e6bb/src/request/models/paginated-result.schema.ts#L111) |
