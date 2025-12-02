[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.10**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateReservationSettings

# Type Alias: CreateReservationSettings

```ts
type CreateReservationSettings = {
  reservationType: ResourceType;
  settingType: ReservationSettingType;
  defaultReservationDuration?: number;
  defaultReservationDurationUnit: ResourceReservationDurationUnit;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/reservation.schema.ts:50](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/reservation.schema.ts#L50)

Schema for creating new reservation settings.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="reservationtype"></a> `reservationType` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md) | [src/core/business-mgt/reservation.schema.ts:21](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/reservation.schema.ts#L21) |
| <a id="settingtype"></a> `settingType` | [`ReservationSettingType`](../../type-definitions/enumerations/ReservationSettingType.md) | [src/core/business-mgt/reservation.schema.ts:22](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/reservation.schema.ts#L22) |
| <a id="defaultreservationduration"></a> `defaultReservationDuration?` | `number` | [src/core/business-mgt/reservation.schema.ts:24](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/reservation.schema.ts#L24) |
| <a id="defaultreservationdurationunit"></a> `defaultReservationDurationUnit` | [`ResourceReservationDurationUnit`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md) | [src/core/business-mgt/reservation.schema.ts:26](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/reservation.schema.ts#L26) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/reservation.schema.ts:28](https://github.com/wiil-io/core-js/blob/465d307305563ec9efb5deeecc4be24f1e371aa2/src/core/business-mgt/reservation.schema.ts#L28) |
