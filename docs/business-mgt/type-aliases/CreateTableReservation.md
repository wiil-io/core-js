[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.60**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateTableReservation

# Type Alias: CreateTableReservation

```ts
type CreateTableReservation = {
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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:80](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L80)

Schema for creating a new table reservation.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:36](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L36) |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:37](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L37) |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:38](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L38) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:39](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L39) |
| <a id="floorplanid"></a> `floorPlanId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:40](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L40) |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:41](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L41) |
| <a id="personsnumber"></a> `personsNumber` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:42](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L42) |
| <a id="time"></a> `time` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:43](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L43) |
| <a id="duration"></a> `duration` | `number` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:44](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L44) |
| <a id="status"></a> `status` | [`ReservationStatus`](../../type-definitions/enumerations/ReservationStatus.md) | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:45](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L45) |
| <a id="source"></a> `source?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:46](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L46) |
| <a id="notes"></a> `notes?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:47](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L47) |
| <a id="isvip"></a> `isVip` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:48](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L48) |
| <a id="specialrequests"></a> `specialRequests?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:49](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L49) |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:50](https://github.com/wiil-io/core-js/blob/62b64c02f8acf4dd72c4c541d200515bd9da49d1/src/core/business-mgt/reservation-mgt/reservation-table.schema.ts#L50) |
