[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.78**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServiceAppointmentSchema

# Variable: UpdateServiceAppointmentSchema

```ts
const UpdateServiceAppointmentSchema: ZodObject<UpdateServiceAppointment>;
```

Defined in: [src/core/business-mgt/service-management/service-appointment.schema.ts:95](https://github.com/wiil-io/core-js/blob/b184f878c8938357e78881ccc1cdb3c1cc1bceec/src/core/business-mgt/service-management/service-appointment.schema.ts#L95)

Schema for updating an existing service appointment.
All fields optional except id (required). Includes cancelReason for cancellation updates.
