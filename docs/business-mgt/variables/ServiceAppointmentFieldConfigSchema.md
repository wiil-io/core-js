[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.39**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / ServiceAppointmentFieldConfigSchema

# Variable: ServiceAppointmentFieldConfigSchema

```ts
const ServiceAppointmentFieldConfigSchema: ZodObject<ServiceAppointmentFieldConfig>;
```

Defined in: [src/core/business-mgt/service-config.schema.ts:34](https://github.com/wiil-io/core-js/blob/26d2b631ba1acb31c0e66c5e63fa8ed5c49cb11b/src/core/business-mgt/service-config.schema.ts#L34)

Service-level appointment field configuration (embedded in BusinessServiceConfigSchema).

This schema represents the **Service Level** in the dynamic fields hierarchy:

```
Organization Level (AppointmentFieldConfigSchema)
        │
        ▼ inherits via appointmentFieldConfigId
Service Level (ServiceAppointmentFieldConfigSchema) ← THIS SCHEMA
        │
        ▼ stores values
Appointment Level (AppointmentAdditionalInfoSchema)
```

Allows services to:
- Inherit specific fields from the organization-level configuration
- Override properties of inherited fields (e.g., make a field required)
- Add service-specific fields not in the organization config

## See

 - AppointmentFieldConfigSchema - Organization-level field definitions
 - AppointmentAdditionalInfoSchema - Stores captured field values
