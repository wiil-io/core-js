[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.4**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [request](../README.md) / AccountPaginatedTimestampQuery

# Type Alias: AccountPaginatedTimestampQuery

```ts
type AccountPaginatedTimestampQuery = {
  fromTimestamp: number;
  toTimestamp?: number;
  page: number;
  pageSize: number;
};
```

Defined in: [src/request/models/paginated-quest.schema.ts:36](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/request/models/paginated-quest.schema.ts#L36)

Schema for paginated queries based on a specific timestamp.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fromtimestamp"></a> `fromTimestamp` | `number` | [src/request/models/paginated-quest.schema.ts:16](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/request/models/paginated-quest.schema.ts#L16) |
| <a id="totimestamp"></a> `toTimestamp?` | `number` | [src/request/models/paginated-quest.schema.ts:17](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/request/models/paginated-quest.schema.ts#L17) |
| <a id="page"></a> `page` | `number` | [src/request/models/paginated-quest.schema.ts:32](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/request/models/paginated-quest.schema.ts#L32) |
| <a id="pagesize"></a> `pageSize` | `number` | [src/request/models/paginated-quest.schema.ts:33](https://github.com/wiil-io/core-js/blob/2943a7dc25408ff086e97be678f178807540438b/src/request/models/paginated-quest.schema.ts#L33) |
