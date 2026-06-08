[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateAppointmentAdditionalInfo

# Type Alias: UpdateAppointmentAdditionalInfo

```ts
type UpdateAppointmentAdditionalInfo = {
  businessServiceId?: string;
  appointmentId?: string;
  customerId?: string;
  data?: Record<string, any>;
  id: string;
};
```

Defined in: src/core/business-mgt/service-management/appointment-additional-info.schema.ts:90

Schema for updating appointment additional info.
All fields optional except id (required).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="businessserviceid"></a> `businessServiceId?` | `string` | src/core/business-mgt/service-management/appointment-additional-info.schema.ts:56 |
| <a id="appointmentid"></a> `appointmentId?` | `string` | src/core/business-mgt/service-management/appointment-additional-info.schema.ts:57 |
| <a id="customerid"></a> `customerId?` | `string` | src/core/business-mgt/service-management/appointment-additional-info.schema.ts:58 |
| <a id="data"></a> `data?` | `Record`\<`string`, `any`\> | src/core/business-mgt/service-management/appointment-additional-info.schema.ts:59 |
| <a id="id"></a> `id` | `string` | src/core/business-mgt/service-management/appointment-additional-info.schema.ts:81 |
