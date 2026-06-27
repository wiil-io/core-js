[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReservationFilters

# Interface: RentalReservationFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:213](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L213)

Rental reservation filter options.
 RentalReservationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across rental reservation fields | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:215](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L215) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:217](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L217) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by booking channel ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:219](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L219) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:221](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L221) |
| <a id="resourceid"></a> `resourceId?` | `string` | Filter by rental resource ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:223](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L223) |
| <a id="tierid"></a> `tierId?` | `string`[] | Filter by rental tier IDs | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:225](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L225) |
| <a id="status"></a> `status?` | [`RentalReservationStatus`](../enumerations/RentalReservationStatus.md)[] | Filter by rental reservation statuses | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:227](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L227) |
| <a id="depositstatus"></a> `depositStatus?` | [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md)[] | Filter by security deposit statuses | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:229](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L229) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by rental start timestamp range | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:231](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L231) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:231](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L231) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:231](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L231) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source platform | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:233](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L233) |
