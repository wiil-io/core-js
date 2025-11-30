[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.2**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / SearchablePaginationRequest

# Type Alias: SearchablePaginationRequest

```ts
type SearchablePaginationRequest = {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortDirection: "asc" | "desc";
  search?: string;
  searchFields?: string[];
};
```

Defined in: [src/request/models/paginated-result.schema.ts:106](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L106)

Schema for search-enabled pagination requests.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="page"></a> `page` | `number` | [src/request/models/paginated-result.schema.ts:79](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L79) |
| <a id="pagesize"></a> `pageSize` | `number` | [src/request/models/paginated-result.schema.ts:80](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L80) |
| <a id="sortby"></a> `sortBy?` | `string` | [src/request/models/paginated-result.schema.ts:81](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L81) |
| <a id="sortdirection"></a> `sortDirection` | `"asc"` \| `"desc"` | [src/request/models/paginated-result.schema.ts:82](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L82) |
| <a id="search"></a> `search?` | `string` | [src/request/models/paginated-result.schema.ts:97](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L97) |
| <a id="searchfields"></a> `searchFields?` | `string`[] | [src/request/models/paginated-result.schema.ts:98](https://github.com/wiil-io/core-js/blob/e764a5e50337be928fa12d95132bc367a4a9284a/src/request/models/paginated-result.schema.ts#L98) |
