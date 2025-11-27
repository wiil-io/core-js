[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ReservationSettings

# Type Alias: ReservationSettings

```ts
type ReservationSettings = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
  reservationType: ResourceType;
  settingType: ReservationSettingType;
  defaultReservationDuration?: number;
  defaultReservationDurationUnit: ResourceReservationDurationUnit;
  isActive: boolean;
};
```

Defined in: src/core/business-mgt/reservation.schema.ts:51

Reservation settings schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/reservation.schema.ts:22 |
| <a id="reservationtype"></a> `reservationType` | [`ResourceType`](../enumerations/ResourceType.md) | src/core/business-mgt/reservation.schema.ts:23 |
| <a id="settingtype"></a> `settingType` | [`ReservationSettingType`](../enumerations/ReservationSettingType.md) | src/core/business-mgt/reservation.schema.ts:24 |
| <a id="defaultreservationduration"></a> `defaultReservationDuration?` | `number` | src/core/business-mgt/reservation.schema.ts:26 |
| <a id="defaultreservationdurationunit"></a> `defaultReservationDurationUnit` | [`ResourceReservationDurationUnit`](../enumerations/ResourceReservationDurationUnit.md) | src/core/business-mgt/reservation.schema.ts:28 |
| <a id="isactive"></a> `isActive` | `boolean` | src/core/business-mgt/reservation.schema.ts:30 |
