[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceAppointmentFilters

# Interface: ServiceAppointmentFilters

Defined in: [src/core/business-mgt/service-management/service-appointment.schema.ts:142](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L142)

Service appointment filter options.
 ServiceAppointmentFilters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | Text search across customer name/email | [src/core/business-mgt/service-management/service-appointment.schema.ts:144](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L144) |
| <a id="locationid"></a> `locationId?` | `string` | Filter by location ID | [src/core/business-mgt/service-management/service-appointment.schema.ts:146](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L146) |
| <a id="channelid"></a> `channelId?` | `string` | Filter by channel ID | [src/core/business-mgt/service-management/service-appointment.schema.ts:148](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L148) |
| <a id="status"></a> `status?` | [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md)[] | Filter by appointment status(es) | [src/core/business-mgt/service-management/service-appointment.schema.ts:150](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L150) |
| <a id="businessserviceid"></a> `businessServiceId?` | `string` | Filter by service ID | [src/core/business-mgt/service-management/service-appointment.schema.ts:152](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L152) |
| <a id="customerid"></a> `customerId?` | `string` | Filter by customer ID | [src/core/business-mgt/service-management/service-appointment.schema.ts:154](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L154) |
| <a id="assigneduseraccountid"></a> `assignedUserAccountId?` | `string` | Filter by assigned user account ID | [src/core/business-mgt/service-management/service-appointment.schema.ts:156](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L156) |
| <a id="calendarprovider"></a> `calendarProvider?` | [`CalendarProvider`](../../type-definitions/enumerations/CalendarProvider.md)[] | Filter by calendar provider(s) | [src/core/business-mgt/service-management/service-appointment.schema.ts:158](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L158) |
| <a id="externalsource"></a> `externalSource?` | `string` | Filter by external source | [src/core/business-mgt/service-management/service-appointment.schema.ts:160](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L160) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | Filter by date range (Unix timestamps) | [src/core/business-mgt/service-management/service-appointment.schema.ts:162](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L162) |
| `dateRange.start?` | `number` | - | [src/core/business-mgt/service-management/service-appointment.schema.ts:162](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L162) |
| `dateRange.end?` | `number` | - | [src/core/business-mgt/service-management/service-appointment.schema.ts:162](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/business-mgt/service-management/service-appointment.schema.ts#L162) |
