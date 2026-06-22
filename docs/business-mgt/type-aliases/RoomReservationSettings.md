[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / RoomReservationSettings

# Type Alias: RoomReservationSettings

```ts
type RoomReservationSettings = {
  checkInTime: string;
  checkOutTime: string;
  minStayNights: number;
  maxStayNights?: number | null;
  advanceBookingDays: number;
};
```

Defined in: [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:143](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L143)

Room reservation settings schema.
Configures stay length, check-in/check-out defaults, and booking window for room reservations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="checkintime"></a> `checkInTime` | `string` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:64](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L64) |
| <a id="checkouttime"></a> `checkOutTime` | `string` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:65](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L65) |
| <a id="minstaynights"></a> `minStayNights` | `number` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:66](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L66) |
| <a id="maxstaynights"></a> `maxStayNights?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:67](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L67) |
| <a id="advancebookingdays"></a> `advanceBookingDays` | `number` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:68](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L68) |
