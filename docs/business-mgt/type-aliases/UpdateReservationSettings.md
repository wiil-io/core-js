[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.31**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateReservationSettings

# Type Alias: UpdateReservationSettings

```ts
type UpdateReservationSettings = {
  createdAt?: number;
  updatedAt?: number;
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

Defined in: [src/core/business-mgt/reservation.schema.ts:41](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/reservation.schema.ts#L41)

Schema for updating existing reservation settings.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/base.schema.ts#L10) |
| <a id="reservationtype"></a> `reservationType?` | \| [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) \| [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) \| [`RENTALS`](../../type-definitions/enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../../type-definitions/enumerations/ResourceType.md#resource) | [src/core/business-mgt/reservation.schema.ts:21](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/reservation.schema.ts#L21) |
| <a id="settingtype"></a> `settingType?` | \| [`CAPACITY`](../../type-definitions/enumerations/ReservationSettingType.md#capacity) \| [`RESOURCE_SPECIFIC`](../../type-definitions/enumerations/ReservationSettingType.md#resource_specific) | [src/core/business-mgt/reservation.schema.ts:22](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/reservation.schema.ts#L22) |
| <a id="defaultreservationduration"></a> `defaultReservationDuration?` | `number` | [src/core/business-mgt/reservation.schema.ts:24](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/reservation.schema.ts#L24) |
| <a id="defaultreservationdurationunit"></a> `defaultReservationDurationUnit?` | \| [`MINUTES`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#minutes) \| [`HOURS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#hours) \| [`NIGHTS`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md#nights) | [src/core/business-mgt/reservation.schema.ts:26](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/reservation.schema.ts#L26) |
| <a id="isactive"></a> `isActive?` | `boolean` | [src/core/business-mgt/reservation.schema.ts:28](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/reservation.schema.ts#L28) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation.schema.ts:37](https://github.com/wiil-io/core-js/blob/9f0c461aad6086b1cfa24ec4d8430e9e0677b5c6/src/core/business-mgt/reservation.schema.ts#L37) |
