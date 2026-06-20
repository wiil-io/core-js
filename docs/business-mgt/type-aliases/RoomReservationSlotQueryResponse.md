[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.65**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomReservationSlotQueryResponse

# Type Alias: RoomReservationSlotQueryResponse

```ts
type RoomReservationSlotQueryResponse = {
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
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:359](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L359)

Room reservation slot query response schema.
Returns generated room slot candidates for the requested stay.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourcetype"></a> `resourceType` | [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:303](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L303) |
| <a id="checkindate"></a> `checkInDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:304](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L304) |
| <a id="checkoutdate"></a> `checkOutDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:305](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L305) |
| <a id="nights"></a> `nights` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:306](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L306) |
| <a id="generatedat"></a> `generatedAt` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:307](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L307) |
| <a id="slots"></a> `slots` | \{ `resourceId`: `string`; `checkInDate`: `string`; `checkOutDate`: `string`; `nights`: `number`; `occupancy?`: `number` \| `null`; `roomsAvailable`: `number`; `ratePerNight`: \{ `date`: `string`; `amount`: `number`; \}[]; `totalWithTax`: `number`; `isAvailable`: `boolean`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:308](https://github.com/wiil-io/core-js/blob/550e0fa2b47c8f9bd959a063f47a5f303ef25dfb/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L308) |
