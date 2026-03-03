[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.35**](../../README.md)

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

Defined in: [src/request/models/paginated-result.schema.ts:103](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/request/models/paginated-result.schema.ts#L103)

Generic pagination request schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="page"></a> `page` | `number` | [src/request/models/paginated-result.schema.ts:77](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/request/models/paginated-result.schema.ts#L77) |
| <a id="pagesize"></a> `pageSize` | `number` | [src/request/models/paginated-result.schema.ts:78](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/request/models/paginated-result.schema.ts#L78) |
| <a id="sortby"></a> `sortBy?` | `string` | [src/request/models/paginated-result.schema.ts:79](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/request/models/paginated-result.schema.ts#L79) |
| <a id="sortdirection"></a> `sortDirection` | `"asc"` \| `"desc"` | [src/request/models/paginated-result.schema.ts:80](https://github.com/wiil-io/core-js/blob/a6d3ab8237aae22c03e6a31e70688247453a5ec5/src/request/models/paginated-result.schema.ts#L80) |
