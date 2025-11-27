[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / Reservation

# Type Alias: Reservation

```ts
type Reservation = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  organizationId: string;
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
  cancelReason?: string | null;
  isResourceReservation: boolean;
  serviceConversationConfigId?: string | null;
};
```

Defined in: src/core/business-mgt/reservation.schema.ts:117

Reservation schema for managing bookings.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/reservation.schema.ts:78 |
| <a id="reservationtype"></a> `reservationType` | [`ResourceType`](../enumerations/ResourceType.md) | src/core/business-mgt/reservation.schema.ts:79 |
| <a id="resourceid"></a> `resourceId?` | `string` \| `null` | src/core/business-mgt/reservation.schema.ts:80 |
| <a id="customerid"></a> `customerId` | `string` | src/core/business-mgt/reservation.schema.ts:81 |
| <a id="customername"></a> `customerName?` | `string` | src/core/business-mgt/reservation.schema.ts:82 |
| <a id="customeremail"></a> `customerEmail?` | `string` | src/core/business-mgt/reservation.schema.ts:83 |
| <a id="starttime"></a> `startTime` | `number` | src/core/business-mgt/reservation.schema.ts:84 |
| <a id="endtime"></a> `endTime?` | `number` | src/core/business-mgt/reservation.schema.ts:85 |
| <a id="duration"></a> `duration?` | `number` | src/core/business-mgt/reservation.schema.ts:86 |
| <a id="personsnumber"></a> `personsNumber?` | `number` | src/core/business-mgt/reservation.schema.ts:87 |
| <a id="totalprice"></a> `totalPrice?` | `number` | src/core/business-mgt/reservation.schema.ts:88 |
| <a id="depositpaid"></a> `depositPaid` | `number` | src/core/business-mgt/reservation.schema.ts:89 |
| <a id="status"></a> `status` | [`AppointmentStatus`](../enumerations/AppointmentStatus.md) | src/core/business-mgt/reservation.schema.ts:90 |
| <a id="notes"></a> `notes?` | `string` | src/core/business-mgt/reservation.schema.ts:91 |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | src/core/business-mgt/reservation.schema.ts:92 |
| <a id="isresourcereservation"></a> `isResourceReservation` | `boolean` | src/core/business-mgt/reservation.schema.ts:93 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | src/core/business-mgt/reservation.schema.ts:94 |
