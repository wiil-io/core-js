[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableReservationFilters

# Interface: TableReservationFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:108](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L108)

Table reservation filter options.
 TableReservationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across table reservation fields | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:110](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L110) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:112](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L112) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by booking channel ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:114](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L114) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:116](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L116) |
| <a id="status"></a> `status?` | [`ReservationStatus`](../../type-definitions/enumerations/ReservationStatus.md)[] | Filter by reservation statuses | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:118](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L118) |
| <a id="tableid"></a> `tableId?` | `string` | Filter by table resource or instance ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:120](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L120) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by reservation start timestamp range | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:122](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L122) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:122](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L122) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:122](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L122) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source platform | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:124](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L124) |
