[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:79

Table reservation schema.
Represents a reservation request for a table-based venue such as a restaurant.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/ebd04cb73529c8832076df82c008bfdf400ced2a/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:36 |
| <a id="channelid"></a> `channelId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:37 |
| <a id="resourceid"></a> `resourceId` | `string` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:38 |
| <a id="customerid"></a> `customerId` | `string` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:39 |
| <a id="floorplanid"></a> `floorPlanId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:40 |
| <a id="floorplansectionid"></a> `floorPlanSectionId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:41 |
| <a id="personsnumber"></a> `personsNumber` | `number` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:42 |
| <a id="time"></a> `time` | `number` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:43 |
| <a id="duration"></a> `duration` | `number` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:44 |
| <a id="status"></a> `status` | [`ReservationStatus`](../../type-definitions/enumerations/ReservationStatus.md) | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:45 |
| <a id="source"></a> `source?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:46 |
| <a id="notes"></a> `notes?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:47 |
| <a id="isvip"></a> `isVip` | `boolean` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:48 |
| <a id="specialrequests"></a> `specialRequests?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:49 |
| <a id="externalref"></a> `externalRef?` | \| \{ `externalId`: `string`; `source`: `string`; `url?`: `string` \| `null`; `syncedAt?`: `number` \| `null`; \} \| `null` | src/core/business-mgt/reservation-mgt/reservation-table.schema.ts:50 |
