[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.79**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomReservationFilters

# Interface: RoomReservationFilters

Defined in: [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:132](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L132)

Room reservation filter options.
 RoomReservationFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across room reservation fields | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:134](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L134) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by business location ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:136](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L136) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by booking channel ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:138](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L138) |
| <a id="resourceid"></a> `resourceId?` | `string` | Filter by room resource ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:140](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L140) |
| <a id="guestid"></a> `guestId?` | `string` | Filter by guest/customer ID | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:142](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L142) |
| <a id="status"></a> `status?` | [`ReservationStatus`](../../type-definitions/enumerations/ReservationStatus.md)[] | Filter by reservation statuses | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:144](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L144) |
| <a id="paymentstatus"></a> `paymentStatus?` | [`PaymentStatus`](../../type-definitions/enumerations/PaymentStatus.md)[] | Filter by payment statuses | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:146](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L146) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by check-in timestamp range | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:148](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L148) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:148](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L148) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:148](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L148) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source platform | [src/core/business-mgt/reservation-mgt/reservation-room.schema.ts:150](https://github.com/wiil-io/core-js/blob/7bf38f479c29583d09bdbea11f27bc7a0daba926/src/core/business-mgt/reservation-mgt/reservation-room.schema.ts#L150) |
