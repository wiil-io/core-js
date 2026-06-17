[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.55**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateTableReservation

# Type Alias: UpdateTableReservation

```ts
type UpdateTableReservation = {
  locationId?: string | null;
  channelId?: string | null;
  resourceId?: string;
  customerId?: string;
  floorPlanId?: string | null;
  floorPlanSectionId?: string | null;
  personsNumber?: number;
  time?: number;
  duration?: number;
  status?:   | PENDING
     | CONFIRMED
     | SEATED
     | CHECKED_IN
     | COMPLETED
     | CANCELLED
     | NO_SHOW;
  source?: string | null;
  notes?: string | null;
  isVip?: boolean;
  specialRequests?: string | null;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
  id: string;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:81](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L81)

Schema for updating an existing table reservation.
All fields optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:36](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L36) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:37](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L37) |
| <a id="resourceid"></a> `resourceId?` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:38](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L38) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:39](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L39) |
| <a id="floorplanid"></a> `floorPlanId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:40](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L40) |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:41](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L41) |
| <a id="personsnumber"></a> `personsNumber?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:42](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L42) |
| <a id="time"></a> `time?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:43](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L43) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:44](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L44) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/ReservationStatus.md#pending) \| [`CONFIRMED`](../../type-definitions/enumerations/ReservationStatus.md#confirmed) \| [`SEATED`](../../type-definitions/enumerations/ReservationStatus.md#seated) \| [`CHECKED_IN`](../../type-definitions/enumerations/ReservationStatus.md#checked_in) \| [`COMPLETED`](../../type-definitions/enumerations/ReservationStatus.md#completed) \| [`CANCELLED`](../../type-definitions/enumerations/ReservationStatus.md#cancelled) \| [`NO_SHOW`](../../type-definitions/enumerations/ReservationStatus.md#no_show) | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:45](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L45) |
| <a id="source"></a> `source?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:46](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L46) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:47](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L47) |
| <a id="isvip"></a> `isVip?` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:48](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L48) |
| <a id="specialrequests"></a> `specialRequests?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:49](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L49) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:50](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L50) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:72](https://github.com/wiil-io/core-js/blob/e1222f052a98dd4a87fde9421dcfb90098013602/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L72) |
