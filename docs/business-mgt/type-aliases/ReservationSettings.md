[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.19**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ReservationSettings

# Type Alias: ReservationSettings

```ts
type ReservationSettings = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  reservationType: ResourceType;
  settingType: ReservationSettingType;
  defaultReservationDuration?: number;
  defaultReservationDurationUnit: ResourceReservationDurationUnit;
  isActive: boolean;
};
```

Defined in: [src/core/business-mgt/reservation.schema.ts:40](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/reservation.schema.ts#L40)

Reservation settings schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/base.schema.ts#L10) |
| <a id="reservationtype"></a> `reservationType` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md) | [src/core/business-mgt/reservation.schema.ts:21](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/reservation.schema.ts#L21) |
| <a id="settingtype"></a> `settingType` | [`ReservationSettingType`](../../type-definitions/enumerations/ReservationSettingType.md) | [src/core/business-mgt/reservation.schema.ts:22](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/reservation.schema.ts#L22) |
| <a id="defaultreservationduration"></a> `defaultReservationDuration?` | `number` | [src/core/business-mgt/reservation.schema.ts:24](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/reservation.schema.ts#L24) |
| <a id="defaultreservationdurationunit"></a> `defaultReservationDurationUnit` | [`ResourceReservationDurationUnit`](../../type-definitions/enumerations/ResourceReservationDurationUnit.md) | [src/core/business-mgt/reservation.schema.ts:26](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/reservation.schema.ts#L26) |
| <a id="isactive"></a> `isActive` | `boolean` | [src/core/business-mgt/reservation.schema.ts:28](https://github.com/wiil-io/core-js/blob/b28e0d487336345d79ce228318e44da50cde0531/src/core/business-mgt/reservation.schema.ts#L28) |
