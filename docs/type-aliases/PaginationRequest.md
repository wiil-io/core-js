[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / PaginationRequest

# Type Alias: PaginationRequest

```ts
type PaginationRequest = {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortDirection: "asc" | "desc";
};
```

Defined in: src/request/models/paginated-result.schema.ts:105

Generic pagination request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="page"></a> `page` | `number` | src/request/models/paginated-result.schema.ts:79 |
| <a id="pagesize"></a> `pageSize` | `number` | src/request/models/paginated-result.schema.ts:80 |
| <a id="sortby"></a> `sortBy?` | `string` | src/request/models/paginated-result.schema.ts:81 |
| <a id="sortdirection"></a> `sortDirection` | `"asc"` \| `"desc"` | src/request/models/paginated-result.schema.ts:82 |
