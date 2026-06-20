[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableReservationFilters

# Interface: TableReservationFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:91](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L91)

Table reservation filter options.
 TableReservationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across table reservation fields | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:93](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L93) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:95](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L95) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by booking channel ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:97](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L97) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:99](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L99) |
| <a id="status"></a> `status?` | [`ReservationStatus`](../../type-definitions/enumerations/ReservationStatus.md)[] | Filter by reservation statuses | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:101](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L101) |
| <a id="tableid"></a> `tableId?` | `string` | Filter by table resource or instance ID | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:103](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L103) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by reservation start timestamp range | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:105](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L105) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:105](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L105) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:105](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L105) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source platform | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:107](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L107) |
