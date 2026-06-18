[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RentalReservationFilters

# Interface: RentalReservationFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:196](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L196)

Rental reservation filter options.
 RentalReservationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across rental reservation fields | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:198](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L198) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:200](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L200) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by booking channel ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:202](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L202) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:204](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L204) |
| <a id="resourceid"></a> `resourceId?` | `string` | Filter by rental resource ID | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:206](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L206) |
| <a id="tierid"></a> `tierId?` | `string`[] | Filter by rental tier IDs | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:208](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L208) |
| <a id="status"></a> `status?` | [`RentalReservationStatus`](../enumerations/RentalReservationStatus.md)[] | Filter by rental reservation statuses | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:210](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L210) |
| <a id="depositstatus"></a> `depositStatus?` | [`DepositStatus`](../../type-definitions/enumerations/DepositStatus.md)[] | Filter by security deposit statuses | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:212](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L212) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by rental start timestamp range | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:214](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L214) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:214](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L214) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:214](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L214) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source platform | [src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts:216](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-rental.schema.ts#L216) |
