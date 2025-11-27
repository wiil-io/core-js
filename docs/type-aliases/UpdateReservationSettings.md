[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / UpdateReservationSettings

# Type Alias: UpdateReservationSettings

```ts
type UpdateReservationSettings = {
  version?: number;
  organizationId?: string;
  reservationType?:   | TABLE
     | ROOM
     | RENTALS
     | RESOURCE;
  settingType?:   | CAPACITY
     | RESOURCE_SPECIFIC;
  defaultReservationDuration?: number;
  defaultReservationDurationUnit?:   | MINUTES
     | HOURS
     | NIGHTS;
  isActive?: boolean;
  id: string;
};
```

Defined in: src/core/business-mgt/reservation.schema.ts:53

Schema for updating existing reservation settings.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId?` | `string` | src/core/business-mgt/reservation.schema.ts:22 |
| <a id="reservationtype"></a> `reservationType?` | \| [`TABLE`](../enumerations/ResourceType.md#table) \| [`ROOM`](../enumerations/ResourceType.md#room) \| [`RENTALS`](../enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../enumerations/ResourceType.md#resource) | src/core/business-mgt/reservation.schema.ts:23 |
| <a id="settingtype"></a> `settingType?` | \| [`CAPACITY`](../enumerations/ReservationSettingType.md#capacity) \| [`RESOURCE_SPECIFIC`](../enumerations/ReservationSettingType.md#resource_specific) | src/core/business-mgt/reservation.schema.ts:24 |
| <a id="defaultreservationduration"></a> `defaultReservationDuration?` | `number` | src/core/business-mgt/reservation.schema.ts:26 |
| <a id="defaultreservationdurationunit"></a> `defaultReservationDurationUnit?` | \| [`MINUTES`](../enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../enumerations/ResourceReservationDurationUnit.md#nights) | src/core/business-mgt/reservation.schema.ts:28 |
| <a id="isactive"></a> `isActive?` | `boolean` | src/core/business-mgt/reservation.schema.ts:30 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/reservation.schema.ts:48 |
