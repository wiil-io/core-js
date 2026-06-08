[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.52**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServiceAppointmentSchema

# Variable: UpdateServiceAppointmentSchema

```ts
const UpdateServiceAppointmentSchema: ZodObject<UpdateServiceAppointment>;
```

Defined in: src/core/business-mgt/service-management/service-appointment.schema.ts:95

Schema for updating an existing service appointment.
All fields optional except id (required). Includes cancelReason for cancellation updates.
