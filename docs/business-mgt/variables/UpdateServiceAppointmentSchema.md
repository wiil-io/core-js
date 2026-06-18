[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.62**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServiceAppointmentSchema

# Variable: UpdateServiceAppointmentSchema

```ts
const UpdateServiceAppointmentSchema: ZodObject<UpdateServiceAppointment>;
```

Defined in: [src/core/business-mgt/service-management/service-appointment.schema.ts:95](https://github.com/wiil-io/core-js/blob/1ae3602f60f2ec3cdaf01f3ee2e0b52063a29f6d/src/core/business-mgt/service-management/service-appointment.schema.ts#L95)

Schema for updating an existing service appointment.
All fields optional except id (required). Includes cancelReason for cancellation updates.
