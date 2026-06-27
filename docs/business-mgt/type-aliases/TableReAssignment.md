[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableReAssignment

# Type Alias: TableReAssignment

```ts
type TableReAssignment = {
  reservationId: string;
  toTableInstanceId: string;
  fromTableInstanceId?: string | null;
  reason?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:98](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L98)

Schema for reassigning a table reservation to a different table instance.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="reservationid"></a> `reservationId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:85](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L85) |
| <a id="totableinstanceid"></a> `toTableInstanceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:86](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L86) |
| <a id="fromtableinstanceid"></a> `fromTableInstanceId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:87](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L87) |
| <a id="reason"></a> `reason?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:88](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L88) |
