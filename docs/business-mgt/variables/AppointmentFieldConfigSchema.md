[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.40**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppointmentFieldConfigSchema

# Variable: AppointmentFieldConfigSchema

```ts
const AppointmentFieldConfigSchema: ZodObject<AppointmentFieldConfig>;
```

Defined in: [src/core/business-mgt/appointment-field-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/09a3d6d4c398397e9996a8872999fad3282747ce/src/core/business-mgt/appointment-field-config.schema.ts#L35)

Organization-level appointment field configuration.
Defines the base field library available to all services within an organization.
Services reference this configuration via `appointmentFieldConfigId` and can
selectively inherit, override, or extend the defined fields.
