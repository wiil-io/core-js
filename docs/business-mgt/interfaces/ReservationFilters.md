[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.32**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ReservationFilters

# Interface: ReservationFilters

Defined in: [src/core/business-mgt/service-appointment.schema.ts:75](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L75)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="search"></a> `search?` | `string` | [src/core/business-mgt/service-appointment.schema.ts:76](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L76) |
| <a id="status"></a> `status?` | [`AppointmentStatus`](../../type-definitions/enumerations/AppointmentStatus.md)[] | [src/core/business-mgt/service-appointment.schema.ts:77](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L77) |
| <a id="reservationtype"></a> `reservationType?` | [`ResourceType`](../../type-definitions/enumerations/ResourceType.md)[] | [src/core/business-mgt/service-appointment.schema.ts:78](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L78) |
| <a id="resourceid"></a> `resourceId?` | `string` | [src/core/business-mgt/service-appointment.schema.ts:79](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L79) |
| <a id="customerid"></a> `customerId?` | `string` | [src/core/business-mgt/service-appointment.schema.ts:80](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L80) |
| <a id="isresourcereservation"></a> `isResourceReservation?` | `boolean` | [src/core/business-mgt/service-appointment.schema.ts:81](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L81) |
| <a id="daterange"></a> `dateRange?` | \{ `start?`: `number`; `end?`: `number`; \} | [src/core/business-mgt/service-appointment.schema.ts:82](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L82) |
| `dateRange.start?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:82](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L82) |
| `dateRange.end?` | `number` | [src/core/business-mgt/service-appointment.schema.ts:82](https://github.com/wiil-io/core-js/blob/9c3a7d6ec57fe61c5efdf2430a4a2e41b7f40577/src/core/business-mgt/service-appointment.schema.ts#L82) |
