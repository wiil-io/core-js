[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.33**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [business-mgt](../README.md) / AppointmentFieldConfigSchema

# Variable: AppointmentFieldConfigSchema

```ts
const AppointmentFieldConfigSchema: ZodObject<AppointmentFieldConfig>;
```

Defined in: [src/core/business-mgt/appointment-field-config.schema.ts:35](https://github.com/wiil-io/core-js/blob/0912d800094d4e3e2e193adfe1e954d82a65fedc/src/core/business-mgt/appointment-field-config.schema.ts#L35)

Organization-level appointment field configuration.
Defines the base field library available to all services within an organization.
Services reference this configuration via `appointmentFieldConfigId` and can
selectively inherit, override, or extend the defined fields.
