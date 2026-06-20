[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.68**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / UpdateServiceAppointmentSchema

# Variable: UpdateServiceAppointmentSchema

```ts
const UpdateServiceAppointmentSchema: ZodObject<UpdateServiceAppointment>;
```

Defined in: [src/core/business-mgt/service-management/service-appointment.schema.ts:95](https://github.com/wiil-io/core-js/blob/755197f4a8ac7ded3396c95a15c2aee6a56d02dc/src/core/business-mgt/service-management/service-appointment.schema.ts#L95)

Schema for updating an existing service appointment.
All fields optional except id (required). Includes cancelReason for cancellation updates.
