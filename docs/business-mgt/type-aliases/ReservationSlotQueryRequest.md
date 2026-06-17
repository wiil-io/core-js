[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ReservationSlotQueryRequest

# Type Alias: ReservationSlotQueryRequest

```ts
type ReservationSlotQueryRequest = 
  | {
  locationId?: string | null;
  resourceId?: string | null;
  localDate: string;
  maxResults: number;
  resourceType: TABLE;
  partySize: number;
  floorPlanId?: string | null;
  floorPlanSectionId?: string | null;
}
  | {
  locationId?: string | null;
  resourceId?: string | null;
  localDate: string;
  maxResults: number;
  resourceType: ROOM;
  nights: number;
  occupancy?: number | null;
}
  | {
  locationId?: string | null;
  resourceId?: string | null;
  localDate: string;
  maxResults: number;
  resourceType: RENTAL;
  returnDate?: string | null;
  tierId?: string | null;
  durationMinutes?: number | null;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:353](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L353)

Reservation slot query request schema.
Discriminated union of supported slot query request types.
