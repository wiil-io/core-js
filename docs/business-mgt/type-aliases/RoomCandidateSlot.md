[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:356](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L356)

Room candidate slot schema.
Date-range model for room availability candidates measured in nights.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="resourceid"></a> `resourceId` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:193](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L193) |
| <a id="checkindate"></a> `checkInDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:194](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L194) |
| <a id="checkoutdate"></a> `checkOutDate` | `string` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:195](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L195) |
| <a id="nights"></a> `nights` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:196](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L196) |
| <a id="occupancy"></a> `occupancy?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:197](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L197) |
| <a id="roomsavailable"></a> `roomsAvailable` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:198](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L198) |
| <a id="ratepernight"></a> `ratePerNight` | \{ `date`: `string`; `amount`: `number`; \}[] | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:199](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L199) |
| <a id="totalwithtax"></a> `totalWithTax` | `number` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:200](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L200) |
| <a id="isavailable"></a> `isAvailable` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts:201](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-slot-query.schema.ts#L201) |
