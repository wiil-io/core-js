[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.71**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableReservation

# Type Alias: TableReservation

```ts
type TableReservation = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  channelId?: string | null;
  resourceId: string;
  customerId: string;
  floorPlanId?: string | null;
  floorPlanSectionId?: string | null;
  personsNumber: number;
  time: number;
  duration: number;
  status: ReservationStatus;
  source?: string | null;
  notes?: string | null;
  isVip: boolean;
  specialRequests?: string | null;
  externalRef?:   | {
     externalId: string;
     source: string;
     url?: string | null;
     syncedAt?: number | null;
   }
     | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:79](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L79)

Table reservation schema.
Represents a reservation request for a table-based venue such as a restaurant.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:36](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L36) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:37](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L37) |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:38](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L38) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:39](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L39) |
| <a id="floorplanid"></a> `floorPlanId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:40](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L40) |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:41](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L41) |
| <a id="personsnumber"></a> `personsNumber` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:42](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L42) |
| <a id="time"></a> `time` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:43](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L43) |
| <a id="duration"></a> `duration` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:44](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L44) |
| <a id="status"></a> `status` | [`ReservationStatus`](../../type-definitions/enumerations/ReservationStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:45](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L45) |
| <a id="source"></a> `source?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:46](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L46) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:47](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L47) |
| <a id="isvip"></a> `isVip` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:48](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L48) |
| <a id="specialrequests"></a> `specialRequests?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:49](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L49) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:50](https://github.com/wiil-io/core-js/blob/b7f7ff561d142acf42bab9f83f6bb56c0dbe009b/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L50) |
