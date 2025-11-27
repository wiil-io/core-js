[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / ServiceAppointment

# Type Alias: ServiceAppointment

```ts
type ServiceAppointment = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  version?: number;
  businessServiceId: string;
  organizationId: string;
  customerId: string;
  customerName?: string;
  customerEmail?: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  totalPrice?: number;
  depositPaid: number;
  status: AppointmentStatus;
  assignedUserAccountId?: string | null;
  calendarId?: string | null;
  calendarEventId?: string | null;
  calendarProvider?:   | GOOGLE
     | OUTLOOK
     | CALENDLY
     | null;
  cancelReason?: string | null;
  serviceConversationConfigId?: string | null;
};
```

Defined in: src/core/business-mgt/service-appointment.schema.ts:74

Service appointment schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | src/core/base.schema.ts:8 |
| <a id="createdat"></a> `createdAt?` | `number` | src/core/base.schema.ts:9 |
| <a id="updatedat"></a> `updatedAt?` | `number` | src/core/base.schema.ts:10 |
| <a id="version"></a> `version?` | `number` | src/core/base.schema.ts:11 |
| <a id="businessserviceid"></a> `businessServiceId` | `string` | src/core/business-mgt/service-appointment.schema.ts:33 |
| <a id="organizationid"></a> `organizationId` | `string` | src/core/business-mgt/service-appointment.schema.ts:34 |
| <a id="customerid"></a> `customerId` | `string` | src/core/business-mgt/service-appointment.schema.ts:35 |
| <a id="customername"></a> `customerName?` | `string` | src/core/business-mgt/service-appointment.schema.ts:36 |
| <a id="customeremail"></a> `customerEmail?` | `string` | src/core/business-mgt/service-appointment.schema.ts:37 |
| <a id="starttime"></a> `startTime` | `number` | src/core/business-mgt/service-appointment.schema.ts:38 |
| <a id="endtime"></a> `endTime?` | `number` | src/core/business-mgt/service-appointment.schema.ts:39 |
| <a id="duration"></a> `duration?` | `number` | src/core/business-mgt/service-appointment.schema.ts:40 |
| <a id="totalprice"></a> `totalPrice?` | `number` | src/core/business-mgt/service-appointment.schema.ts:41 |
| <a id="depositpaid"></a> `depositPaid` | `number` | src/core/business-mgt/service-appointment.schema.ts:42 |
| <a id="status"></a> `status` | [`AppointmentStatus`](../enumerations/AppointmentStatus.md) | src/core/business-mgt/service-appointment.schema.ts:43 |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` \| `null` | src/core/business-mgt/service-appointment.schema.ts:46 |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | src/core/business-mgt/service-appointment.schema.ts:47 |
| <a id="calendareventid"></a> `calendarEventId?` | `string` \| `null` | src/core/business-mgt/service-appointment.schema.ts:48 |
| <a id="calendarprovider"></a> `calendarProvider?` | \| [`GOOGLE`](../enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../enumerations/CalendarProvider.md#calendly) \| `null` | src/core/business-mgt/service-appointment.schema.ts:49 |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | src/core/business-mgt/service-appointment.schema.ts:50 |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | src/core/business-mgt/service-appointment.schema.ts:51 |
