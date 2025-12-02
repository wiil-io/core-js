[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

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

Defined in: [src/request/models/paginated-result.schema.ts:104](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/request/models/paginated-result.schema.ts#L104)

Schema for search-enabled pagination requests.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="page"></a> `page` | `number` | [src/request/models/paginated-result.schema.ts:77](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/request/models/paginated-result.schema.ts#L77) |
| <a id="pagesize"></a> `pageSize` | `number` | [src/request/models/paginated-result.schema.ts:78](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/request/models/paginated-result.schema.ts#L78) |
| <a id="sortby"></a> `sortBy?` | `string` | [src/request/models/paginated-result.schema.ts:79](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/request/models/paginated-result.schema.ts#L79) |
| <a id="sortdirection"></a> `sortDirection` | `"asc"` \| `"desc"` | [src/request/models/paginated-result.schema.ts:80](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/request/models/paginated-result.schema.ts#L80) |
| <a id="search"></a> `search?` | `string` | [src/request/models/paginated-result.schema.ts:95](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/request/models/paginated-result.schema.ts#L95) |
| <a id="searchfields"></a> `searchFields?` | `string`[] | [src/request/models/paginated-result.schema.ts:96](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/request/models/paginated-result.schema.ts#L96) |
