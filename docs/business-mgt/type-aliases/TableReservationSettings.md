[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

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

Defined in: [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:142](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L142)

Table reservation settings schema.
Configures slot duration, turnover, party limits, and booking window for table reservations.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="settingtype"></a> `settingType` | [`ReservationSettingType`](../../type-definitions/enumerations/ReservationSettingType.md) | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:44](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L44) |
| <a id="defaultdurationminutes"></a> `defaultDurationMinutes` | `number` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:45](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L45) |
| <a id="turnoverminutes"></a> `turnoverMinutes` | `number` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:46](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L46) |
| <a id="slotintervalminutes"></a> `slotIntervalMinutes` | `number` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:47](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L47) |
| <a id="maxpartysize"></a> `maxPartySize?` | `number` \| `null` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:48](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L48) |
| <a id="advancebookingdays"></a> `advanceBookingDays` | `number` | [src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts:49](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/business-mgt/reservation-mgt/reservation-settings.schema.ts#L49) |
