[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.24**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateReservation

# Type Alias: UpdateReservation

```ts
type UpdateReservation = {
  reservationType?:   | TABLE
     | ROOM
     | RENTALS
     | RESOURCE;
  resourceId?: string | null;
  customerId?: string;
  startTime?: number;
  endTime?: number;
  duration?: number;
  personsNumber?: number;
  totalPrice?: number;
  depositPaid?: number;
  notes?: string;
  isResourceReservation?: boolean;
  id: string;
  cancelReason?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation.schema.ts:103](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L103)

Schema for updating an existing reservation.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="reservationtype"></a> `reservationType?` | \| [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) \| [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) \| [`RENTALS`](../../type-definitions/enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../../type-definitions/enumerations/ResourceType.md#resource) | [src/core/business-mgt/reservation.schema.ts:63](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L63) |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:64](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L64) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/reservation.schema.ts:65](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L65) |
| <a id="starttime"></a> `startTime?` | `number` | [src/core/business-mgt/reservation.schema.ts:66](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L66) |
| <a id="endtime"></a> `endTime?` | `number` | [src/core/business-mgt/reservation.schema.ts:67](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L67) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/reservation.schema.ts:68](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L68) |
| <a id="personsnumber"></a> `personsNumber?` | `number` | [src/core/business-mgt/reservation.schema.ts:69](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L69) |
| <a id="totalprice"></a> `totalPrice?` | `number` | [src/core/business-mgt/reservation.schema.ts:70](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L70) |
| <a id="depositpaid"></a> `depositPaid?` | `number` | [src/core/business-mgt/reservation.schema.ts:71](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L71) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/reservation.schema.ts:73](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L73) |
| <a id="isresourcereservation"></a> `isResourceReservation?` | `boolean` | [src/core/business-mgt/reservation.schema.ts:75](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L75) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation.schema.ts:97](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L97) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:98](https://github.com/wiil-io/core-js/blob/1224c87015d28d600db311ffd86ba504fdd5dc04/src/core/business-mgt/reservation.schema.ts#L98) |
