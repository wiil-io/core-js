[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / BasePaginatedResult

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

Defined in: src/request/models/paginated-result.schema.ts:103

Basic paginated result schema for any data type.
Use this when you need a flexible paginated result without specific data typing.

## Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data` | `any`[] | - | src/request/models/paginated-result.schema.ts:51 |
| <a id="meta"></a> `meta` | \{ `page`: `number`; `pageSize`: `number`; `totalCount`: `number`; `totalPages`: `number`; `hasNextPage`: `boolean`; `hasPreviousPage`: `boolean`; \} | `PaginationMetaSchema` | src/request/models/paginated-result.schema.ts:52 |
| `meta.page` | `number` | - | src/request/models/paginated-result.schema.ts:20 |
| `meta.pageSize` | `number` | - | src/request/models/paginated-result.schema.ts:21 |
| `meta.totalCount` | `number` | - | src/request/models/paginated-result.schema.ts:22 |
| `meta.totalPages` | `number` | - | src/request/models/paginated-result.schema.ts:23 |
| `meta.hasNextPage` | `boolean` | - | src/request/models/paginated-result.schema.ts:24 |
| `meta.hasPreviousPage` | `boolean` | - | src/request/models/paginated-result.schema.ts:25 |
