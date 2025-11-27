[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PaginatedResultType

# Type Alias: PaginatedResultType\<T\>

```ts
type PaginatedResultType<T> = {
  data: T[];
  meta: PaginationMetaType;
};
```

Defined in: src/request/models/paginated-result.schema.ts:111

Helper type for creating typed paginated results.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `T`[] | src/request/models/paginated-result.schema.ts:112 |
| <a id="meta"></a> `meta` | [`PaginationMetaType`](PaginationMetaType.md) | src/request/models/paginated-result.schema.ts:113 |
