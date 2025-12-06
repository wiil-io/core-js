[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.26**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / Reservation

# Type Alias: Reservation

```ts
type Reservation = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  reservationType: ResourceType;
  resourceId?: string | null;
  customerId: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  personsNumber?: number;
  totalPrice?: number;
  depositPaid: number;
  status: AppointmentStatus;
  notes?: string;
  cancelReason?: string | null;
  isResourceReservation: boolean;
  serviceConversationConfigId?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation.schema.ts:101](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L101)

Reservation schema for managing bookings.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/base.schema.ts#L10) |
| <a id="reservationtype"></a> `reservationType` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md) | [src/core/business-mgt/reservation.schema.ts:63](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L63) |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:64](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L64) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/reservation.schema.ts:65](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L65) |
| <a id="starttime"></a> `startTime` | `number` | [src/core/business-mgt/reservation.schema.ts:66](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L66) |
| <a id="endtime"></a> `endTime?` | `number` | [src/core/business-mgt/reservation.schema.ts:67](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L67) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/reservation.schema.ts:68](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L68) |
| <a id="personsnumber"></a> `personsNumber?` | `number` | [src/core/business-mgt/reservation.schema.ts:69](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L69) |
| <a id="totalprice"></a> `totalPrice?` | `number` | [src/core/business-mgt/reservation.schema.ts:70](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L70) |
| <a id="depositpaid"></a> `depositPaid` | `number` | [src/core/business-mgt/reservation.schema.ts:71](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L71) |
| <a id="status"></a> `status` | [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md) | [src/core/business-mgt/reservation.schema.ts:72](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L72) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/reservation.schema.ts:73](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L73) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:74](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L74) |
| <a id="isresourcereservation"></a> `isResourceReservation` | `boolean` | [src/core/business-mgt/reservation.schema.ts:75](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L75) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:76](https://github.com/wiil-io/core-js/blob/c2ba6ebfdf7883e5e1c558fee2dddae7978a1043/src/core/business-mgt/reservation.schema.ts#L76) |
