[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.25**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / CreateServiceAppointment

# Type Alias: CreateServiceAppointment

```ts
type CreateServiceAppointment = {
  businessServiceId: string;
  customerId: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  totalPrice?: number;
  depositPaid: number;
  assignedUserAccountId?: string | null;
  calendarId?: string | null;
  calendarEventId?: string | null;
  calendarProvider?:   | GOOGLE
     | OUTLOOK
     | CALENDLY
     | null;
};
```

Defined in: [src/core/business-mgt/service-appointment.schema.ts:71](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L71)

Schema for creating a new service appointment.
Omits auto-generated fields.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="businessserviceid"></a> `businessServiceId` | `string` | [src/core/business-mgt/service-appointment.schema.ts:30](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L30) |
| <a id="customerid"></a> `customerId` | `string` | [src/core/business-mgt/service-appointment.schema.ts:31](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L31) |
| <a id="starttime"></a> `startTime` | `number` | [src/core/business-mgt/service-appointment.schema.ts:32](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L32) |
| <a id="endtime"></a> `endTime?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:33](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L33) |
| <a id="duration"></a> `duration?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:34](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L34) |
| <a id="totalprice"></a> `totalPrice?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:35](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L35) |
| <a id="depositpaid"></a> `depositPaid` | `number` | [src/core/business-mgt/service-appointment.schema.ts:36](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L36) |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:40](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L40) |
| <a id="calendarid"></a> `calendarId?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:41](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L41) |
| <a id="calendareventid"></a> `calendarEventId?` | `string` \| `null` | [src/core/business-mgt/service-appointment.schema.ts:42](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L42) |
| <a id="calendarprovider"></a> `calendarProvider?` | \| [`GOOGLE`](../../type-definitions/enumerations/CalendarProvider.md#google) \| [`OUTLOOK`](../../type-definitions/enumerations/CalendarProvider.md#outlook) \| [`CALENDLY`](../../type-definitions/enumerations/CalendarProvider.md#calendly) \| `null` | [src/core/business-mgt/service-appointment.schema.ts:43](https://github.com/wiil-io/core-js/blob/93d5ff57756c5fd022c37560f2bcfed1d2d97dc5/src/core/business-mgt/service-appointment.schema.ts#L43) |
