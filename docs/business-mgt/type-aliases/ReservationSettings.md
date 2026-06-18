[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.59**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ReservationSettings

# Type Alias: ReservationSettings

```ts
type ReservationSettings = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  locationId?: string | null;
  table?:   | {
     settingType: ReservationSettingType;
     defaultDurationMinutes: number;
     turnoverMinutes: number;
     slotIntervalMinutes: number;
     maxPartySize?: number | null;
     advanceBookingDays: number;
   }
     | null;
  room?:   | {
     checkInTime: string;
     checkOutTime: string;
     minStayNights: number;
     maxStayNights?: number | null;
     advanceBookingDays: number;
   }
     | null;
  rental?:   | {
     tiers: {
        id: string;
        name: string;
        durationMinutes: number;
        sortOrder: number;
     }[];
     requireWaiver: boolean;
     requireIdVerification: boolean;
     defaultDepositPercent?: number | null;
   }
     | null;
  supportTableReservations: boolean;
  supportRoomReservations: boolean;
  supportRentalReservations: boolean;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:145](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L145)

Reservation settings schema.
Stores location-level reservation configuration for table, room, and rental bookings.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/base.schema.ts#L10) |
| <a id="locationid"></a> `locationId?` | `string` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:106](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L106) |
| <a id="table"></a> `table?` | \| \{ `settingType`: [`ReservationSettingType`](../../type-definitions/enumerations/ReservationSettingType.md); `defaultDurationMinutes`: `number`; `turnoverMinutes`: `number`; `slotIntervalMinutes`: `number`; `maxPartySize?`: `number` \| `null`; `advanceBookingDays`: `number`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:107](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L107) |
| <a id="room"></a> `room?` | \| \{ `checkInTime`: `string`; `checkOutTime`: `string`; `minStayNights`: `number`; `maxStayNights?`: `number` \| `null`; `advanceBookingDays`: `number`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:108](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L108) |
| <a id="rental"></a> `rental?` | \| \{ `tiers`: \{ `id`: `string`; `name`: `string`; `durationMinutes`: `number`; `sortOrder`: `number`; \}[]; `requireWaiver`: `boolean`; `requireIdVerification`: `boolean`; `defaultDepositPercent?`: `number` \| `null`; \} \| `null` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:109](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L109) |
| <a id="supporttablereservations"></a> `supportTableReservations` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:110](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L110) |
| <a id="supportroomreservations"></a> `supportRoomReservations` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:111](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L111) |
| <a id="supportrentalreservations"></a> `supportRentalReservations` | `boolean` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:112](https://github.com/wiil-io/core-js/blob/24feef82ee4591737e3700f46c23e871a410fbc1/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L112) |
