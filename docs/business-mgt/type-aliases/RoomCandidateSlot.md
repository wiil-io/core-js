[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomCandidateSlot

# Type Alias: RoomCandidateSlot

```ts
type RoomCandidateSlot = {
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
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:356

Room candidate slot schema.
Date-range model for room availability candidates measured in nights.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:193 |
| <a id="checkindate"></a> `checkInDate` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:194 |
| <a id="checkoutdate"></a> `checkOutDate` | `string` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:195 |
| <a id="nights"></a> `nights` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:196 |
| <a id="occupancy"></a> `occupancy?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:197 |
| <a id="roomsavailable"></a> `roomsAvailable` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:198 |
| <a id="ratepernight"></a> `ratePerNight` | \{ `date`: `string`; `amount`: `number`; \}[] | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:199 |
| <a id="totalwithtax"></a> `totalWithTax` | `number` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:200 |
| <a id="isavailable"></a> `isAvailable` | `boolean` | src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:201 |
