[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.15**](../../README.md)

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
  customerName?: string;
  customerEmail?: string;
  startTime?: number;
  endTime?: number;
  duration?: number;
  personsNumber?: number;
  totalPrice?: number;
  depositPaid?: number;
  status?:   | PENDING
     | CONFIRMED
     | CANCELLED
     | COMPLETED
     | NO_SHOW;
  notes?: string;
  isResourceReservation?: boolean;
  serviceConversationConfigId?: string | null;
  id: string;
  cancelReason?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation.schema.ts:115](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L115)

Schema for updating an existing reservation.
All fields are optional except id.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="reservationtype"></a> `reservationType?` | \| [`TABLE`](../../type-definitions/enumerations/ResourceType.md#table) \| [`ROOM`](../../type-definitions/enumerations/ResourceType.md#room) \| [`RENTALS`](../../type-definitions/enumerations/ResourceType.md#rentals) \| [`RESOURCE`](../../type-definitions/enumerations/ResourceType.md#resource) | [src/core/business-mgt/reservation.schema.ts:75](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L75) |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:76](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L76) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/reservation.schema.ts:77](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L77) |
| <a id="customername"></a> `customerName?` | `string` | [src/core/business-mgt/reservation.schema.ts:78](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L78) |
| <a id="customeremail"></a> `customerEmail?` | `string` | [src/core/business-mgt/reservation.schema.ts:79](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L79) |
| <a id="starttime"></a> `startTime?` | `number` | [src/core/business-mgt/reservation.schema.ts:80](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L80) |
| <a id="endtime"></a> `endTime?` | `number` | [src/core/business-mgt/reservation.schema.ts:81](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L81) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/reservation.schema.ts:82](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L82) |
| <a id="personsnumber"></a> `personsNumber?` | `number` | [src/core/business-mgt/reservation.schema.ts:83](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L83) |
| <a id="totalprice"></a> `totalPrice?` | `number` | [src/core/business-mgt/reservation.schema.ts:84](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L84) |
| <a id="depositpaid"></a> `depositPaid?` | `number` | [src/core/business-mgt/reservation.schema.ts:85](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L85) |
| <a id="status"></a> `status?` | \| [`PENDING`](../../type-definitions/enumerations/AppointmentStatus.md#pending) \| [`CONFIRMED`](../../type-definitions/enumerations/AppointmentStatus.md#confirmed) \| [`CANCELLED`](../../type-definitions/enumerations/AppointmentStatus.md#cancelled) \| [`COMPLETED`](../../type-definitions/enumerations/AppointmentStatus.md#completed) \| [`NO_SHOW`](../../type-definitions/enumerations/AppointmentStatus.md#no_show) | [src/core/business-mgt/reservation.schema.ts:86](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L86) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/reservation.schema.ts:87](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L87) |
| <a id="isresourcereservation"></a> `isResourceReservation?` | `boolean` | [src/core/business-mgt/reservation.schema.ts:89](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L89) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:90](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L90) |
| <a id="id"></a> `id` | `string` | [src/core/business-mgt/reservation.schema.ts:109](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L109) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:110](https://github.com/wiil-io/core-js/blob/bd9dddcff0645fc8d739d0cb70526e8dfb698e4c/src/core/business-mgt/reservation.schema.ts#L110) |
