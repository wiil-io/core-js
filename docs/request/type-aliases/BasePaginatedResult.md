[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.13**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / BasePaginatedResult

# Type Alias: BasePaginatedResult

```ts
type BasePaginatedResult = {
  data: any[];
  meta: {
     page: number;
     pageSize: number;
     totalCount: number;
     totalPages: number;
     hasNextPage: boolean;
     hasPreviousPage: boolean;
  };
};
```

Defined in: [src/request/models/paginated-result.schema.ts:101](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L101)

Basic paginated result schema for any data type.
Use this when you need a flexible paginated result without specific data typing.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data` | `any`[] | - | [src/request/models/paginated-result.schema.ts:51](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L51) |
| <a id="meta"></a> `meta` | \{ `page`: `number`; `pageSize`: `number`; `totalCount`: `number`; `totalPages`: `number`; `hasNextPage`: `boolean`; `hasPreviousPage`: `boolean`; \} | `PaginationMetaSchema` | [src/request/models/paginated-result.schema.ts:52](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L52) |
| `meta.page` | `number` | - | [src/request/models/paginated-result.schema.ts:20](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L20) |
| `meta.pageSize` | `number` | - | [src/request/models/paginated-result.schema.ts:21](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L21) |
| `meta.totalCount` | `number` | - | [src/request/models/paginated-result.schema.ts:22](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L22) |
| `meta.totalPages` | `number` | - | [src/request/models/paginated-result.schema.ts:23](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L23) |
| `meta.hasNextPage` | `boolean` | - | [src/request/models/paginated-result.schema.ts:24](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L24) |
| `meta.hasPreviousPage` | `boolean` | - | [src/request/models/paginated-result.schema.ts:25](https://github.com/wiil-io/core-js/blob/2f692d24a9afc802946fec387d16fa3efc5b70a1/src/request/models/paginated-result.schema.ts#L25) |
