[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

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

Defined in: src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:143

Room reservation settings schema.
Configures stay length, check-in/check-out defaults, and booking window for room reservations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="checkintime"></a> `checkInTime` | `string` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:64 |
| <a id="checkouttime"></a> `checkOutTime` | `string` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:65 |
| <a id="minstaynights"></a> `minStayNights` | `number` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:66 |
| <a id="maxstaynights"></a> `maxStayNights?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:67 |
| <a id="advancebookingdays"></a> `advanceBookingDays` | `number` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:68 |
