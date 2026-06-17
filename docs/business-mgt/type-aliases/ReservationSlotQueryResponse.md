[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.54**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ReservationSlotQueryResponse

# Type Alias: ReservationSlotQueryResponse

```ts
type ReservationSlotQueryResponse = 
  | {
  resourceType: TABLE;
  localDate: string;
  generatedAt: number;
  slots: {
     resourceId: string;
     startTimeOfDay: string;
     startMinuteOfDay: number;
     endMinuteOfDay: number;
     startTimeUtcSec: number;
     endTimeUtcSec: number;
     isAvailable: boolean;
     capacityRemaining?: number | null;
     priceQuote?: number | null;
  }[];
}
  | {
  resourceType: ROOM;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  generatedAt: number;
  slots: {
     resourceId: string;
     checkInDate: string;
     checkOutDate: string;
     nights: number;
     occupancy?: number | null;
     roomsAvailable: number;
     ratePerNight: {
        date: string;
        amount: number;
     }[];
     totalWithTax: number;
     isAvailable: boolean;
  }[];
}
  | {
  resourceType: RENTAL;
  pickupDate: string;
  returnDate: string;
  generatedAt: number;
  slots: {
     resourceId: string;
     pickupDate: string;
     returnDate: string;
     pickupTimeOfDay?: string | null;
     returnTimeOfDay?: string | null;
     durationMinutes?: number | null;
     startTimeUtcSec: number;
     endTimeUtcSec: number;
     unitsAvailable: number;
     totalWithTax: number;
     priceQuote?: number | null;
     isAvailable: boolean;
  }[];
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:361](https://github.com/wiil-io/core-js/blob/0a3c1fe21edf560853760c0ca06994b85d3d2555/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L361)

Reservation slot query response schema.
Discriminated union of supported slot query response types.
