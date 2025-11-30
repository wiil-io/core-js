[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.3**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / PaginationRequest

# Type Alias: PaginationRequest

```ts
type PaginationRequest = {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortDirection: "asc" | "desc";
};
```

Defined in: [src/request/models/paginated-result.schema.ts:105](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/request/models/paginated-result.schema.ts#L105)

Generic pagination request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="page"></a> `page` | `number` | [src/request/models/paginated-result.schema.ts:79](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/request/models/paginated-result.schema.ts#L79) |
| <a id="pagesize"></a> `pageSize` | `number` | [src/request/models/paginated-result.schema.ts:80](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/request/models/paginated-result.schema.ts#L80) |
| <a id="sortby"></a> `sortBy?` | `string` | [src/request/models/paginated-result.schema.ts:81](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/request/models/paginated-result.schema.ts#L81) |
| <a id="sortdirection"></a> `sortDirection` | `"asc"` \| `"desc"` | [src/request/models/paginated-result.schema.ts:82](https://github.com/wiil-io/core-js/blob/2f08d8b8259e218835f402a6f149a3abc5fb9b15/src/request/models/paginated-result.schema.ts#L82) |
