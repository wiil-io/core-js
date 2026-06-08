[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / TableReservationSettings

# Type Alias: TableReservationSettings

```ts
type TableReservationSettings = {
  settingType: ReservationSettingType;
  defaultDurationMinutes: number;
  turnoverMinutes: number;
  slotIntervalMinutes: number;
  maxPartySize?: number | null;
  advanceBookingDays: number;
};
```

Defined in: src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:142

Table reservation settings schema.
Configures slot duration, turnover, party limits, and booking window for table reservations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="settingtype"></a> `settingType` | [`ReservationSettingType`](../../type-definitions/enumerations/ReservationSettingType.md) | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:44 |
| <a id="defaultdurationminutes"></a> `defaultDurationMinutes` | `number` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:45 |
| <a id="turnoverminutes"></a> `turnoverMinutes` | `number` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:46 |
| <a id="slotintervalminutes"></a> `slotIntervalMinutes` | `number` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:47 |
| <a id="maxpartysize"></a> `maxPartySize?` | `number` \| `null` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:48 |
| <a id="advancebookingdays"></a> `advanceBookingDays` | `number` | src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:49 |
