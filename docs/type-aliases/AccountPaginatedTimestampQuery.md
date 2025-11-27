[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / AccountPaginatedTimestampQuery

# Type Alias: AccountPaginatedTimestampQuery

```ts
type AccountPaginatedTimestampQuery = {
  fromTimestamp: number;
  toTimestamp?: number;
  page: number;
  pageSize: number;
};
```

Defined in: src/request/models/paginated-quest.schema.ts:36

Schema for paginated queries based on a specific timestamp.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fromtimestamp"></a> `fromTimestamp` | `number` | src/request/models/paginated-quest.schema.ts:16 |
| <a id="totimestamp"></a> `toTimestamp?` | `number` | src/request/models/paginated-quest.schema.ts:17 |
| <a id="page"></a> `page` | `number` | src/request/models/paginated-quest.schema.ts:32 |
| <a id="pagesize"></a> `pageSize` | `number` | src/request/models/paginated-quest.schema.ts:33 |
