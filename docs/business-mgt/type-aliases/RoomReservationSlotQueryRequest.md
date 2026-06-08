[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomReservationSlotQueryRequest

# Type Alias: RoomReservationSlotQueryRequest

```ts
type RoomReservationSlotQueryRequest = {
  locationId?: string | null;
  resourceId?: string | null;
  localDate: string;
  maxResults: number;
  resourceType: ROOM;
  nights: number;
  occupancy?: number | null;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:351

Room reservation slot query request schema.
Requests candidate room stay slots for a business-local check-in date.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:47 |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:48 |
| <a id="localdate"></a> `localDate` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:49 |
| <a id="maxresults"></a> `maxResults` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:50 |
| <a id="resourcetype"></a> `resourceType` | [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:92 |
| <a id="nights"></a> `nights` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:93 |
| <a id="occupancy"></a> `occupancy?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:94 |
