[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.11**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateReservation

# Type Alias: CreateReservation

```ts
type CreateReservation = {
  reservationType: ResourceType;
  resourceId?: string | null;
  customerId: string;
  customerName?: string;
  customerEmail?: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  personsNumber?: number;
  totalPrice?: number;
  depositPaid: number;
  status: AppointmentStatus;
  notes?: string;
  isResourceReservation: boolean;
  serviceConversationConfigId?: string | null;
};
```

Defined in: [src/core/business-mgt/reservation.schema.ts:114](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L114)

Schema for creating a new reservation.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="reservationtype"></a> `reservationType` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md) | [src/core/business-mgt/reservation.schema.ts:75](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L75) |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:76](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L76) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/reservation.schema.ts:77](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L77) |
| <a id="customername"></a> `customerName?` | `string` | [src/core/business-mgt/reservation.schema.ts:78](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L78) |
| <a id="customeremail"></a> `customerEmail?` | `string` | [src/core/business-mgt/reservation.schema.ts:79](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L79) |
| <a id="starttime"></a> `startTime` | `number` | [src/core/business-mgt/reservation.schema.ts:80](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L80) |
| <a id="endtime"></a> `endTime?` | `number` | [src/core/business-mgt/reservation.schema.ts:81](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L81) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/reservation.schema.ts:82](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L82) |
| <a id="personsnumber"></a> `personsNumber?` | `number` | [src/core/business-mgt/reservation.schema.ts:83](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L83) |
| <a id="totalprice"></a> `totalPrice?` | `number` | [src/core/business-mgt/reservation.schema.ts:84](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L84) |
| <a id="depositpaid"></a> `depositPaid` | `number` | [src/core/business-mgt/reservation.schema.ts:85](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L85) |
| <a id="status"></a> `status` | [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md) | [src/core/business-mgt/reservation.schema.ts:86](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L86) |
| <a id="notes"></a> `notes?` | `string` | [src/core/business-mgt/reservation.schema.ts:87](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L87) |
| <a id="isresourcereservation"></a> `isResourceReservation` | `boolean` | [src/core/business-mgt/reservation.schema.ts:89](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L89) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/reservation.schema.ts:90](https://github.com/wiil-io/core-js/blob/4926a363486bd7cbbb0f6494fae7e27bdbd0da4e/src/core/business-mgt/reservation.schema.ts#L90) |
