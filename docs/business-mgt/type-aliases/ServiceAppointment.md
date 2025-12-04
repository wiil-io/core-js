[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.17**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceAppointment

# Type Alias: ServiceAppointment

```ts
type ServiceAppointment = {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  businessServiceId: string;
  customerId: string;
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

Defined in: [src/core/business-mgt/service-appointment.schema.ts:70](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L70)

Service appointment schema.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | [src/core/base.schema.ts:8](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/base.schema.ts#L8) |
| <a id="createdat"></a> `createdAt?` | `number` | [src/core/base.schema.ts:9](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/base.schema.ts#L9) |
| <a id="updatedat"></a> `updatedAt?` | `number` | [src/core/base.schema.ts:10](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/base.schema.ts#L10) |
| <a id="businessserviceid"></a> `businessServiceId` | `string` | [src/core/business-mgt/service-appointment.schema.ts:30](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L30) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/service-appointment.schema.ts:31](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L31) |
| <a id="starttime"></a> `startTime` | `number` | [src/core/business-mgt/service-appointment.schema.ts:32](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L32) |
| <a id="endtime"></a> `endTime?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:33](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L33) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:34](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L34) |
| <a id="totalprice"></a> `totalPrice?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:35](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L35) |
| <a id="depositpaid"></a> `depositPaid` | `number` | [src/core/business-mgt/service-appointment.schema.ts:36](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L36) |
| <a id="status"></a> `status` | [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md) | [src/core/business-mgt/service-appointment.schema.ts:37](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L37) |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:40](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L40) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:41](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L41) |
| <a id="calendareventid"></a> `calendarEventId?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:42](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L42) |
| <a id="calendarprovider"></a> `calendarProvider?` | \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null` | [src/core/business-mgt/service-appointment.schema.ts:43](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L43) |
| <a id="cancelreason"></a> `cancelReason?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:44](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L44) |
| <a id="serviceconversationconfigid"></a> `serviceConversationConfigId?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:45](https://github.com/wiil-io/core-js/blob/0169edf7505580a197164cb257e175d1d972b4bf/src/core/business-mgt/service-appointment.schema.ts#L45) |
